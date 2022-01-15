import { Queue, VoidCbFn, VoidFn } from "./Queue";
import { Animator, AnimatorStates } from "./Animator";
import { Balloon } from "./Balloon";
import { AgentsWithAudioType } from "./agents";
import { Debugger, getDebugger } from "./utils";

export enum Direction {
  Right = "Right",
  Up = "Up",
  Left = "Left",
  Down = "Down",
  Top = "Top"
}

export type AgentAnimationFramesType = {
  duration: number
  images?: Array<[number, number]>
  sound?: string
  exitBranch?: number,
  branching?: {
    "branches": { "frameIndex": number, "weight": number }[]
  }
}
export type AgentAnimationType = {
  frames: AgentAnimationFramesType[]
  useExitBranching?: boolean
}
export type AgentType = {
  overlayCount: number
  sounds: string[]
  framesize: [number, number]
  animations: Record<string, AgentAnimationType>
}

export type AgentOptions = {
  debug?: boolean
}

export class Agent {
  private readonly _el: HTMLDivElement;
  private readonly _debug: Debugger;
  private _queue: Queue;
  private _animator: Animator;
  private _balloon: Balloon;
  private _hidden: boolean = true;
  private _idleIsPending: boolean = false;
  private _idleComplete: VoidFn | null = null;
  private _offsetTop: number | undefined;
  private _offsetLeft: number | undefined;
  private _dragUpdateLoop: number | undefined;
  private _targetY: number | undefined;
  private _targetX: number | undefined;

  constructor(agent: AgentsWithAudioType, options: AgentOptions = {}) {
    this._debug = getDebugger(options.debug);

    this._queue = new Queue(this._onQueueEmpty.bind(this));

    this._el = document.createElement("div");
    this._el.classList.add("clippy");
    this._el.style.display = "none";

    document.body.append(this._el);

    this._animator = new Animator(this._el, agent);
    this._balloon = new Balloon(this._el);

    this._setupEvents();
  }

  /**************************** API ************************************/

  gestureAt(x: number, y: number) {
    const d = this._getDirection(x, y);
    const gAnim = "Gesture" + d;
    const lookAnim = "Look" + d;

    const animation = this.hasAnimation(gAnim) ? gAnim : lookAnim;
    return this.play(animation);
  }

  hide(fast: boolean, callback: VoidFn) {
    this._hidden = true;
    this.stop();
    if (fast) {
      this._el.style.display = "none";
      this.stop();
      this.pause();
      if (callback) callback();
      return;
    }

    return this._playInternal("Hide", () => {
      this._el.style.display = "none";
      this.pause();
      if (callback) callback();
    });
  }

  moveTo(x: number, y: number, duration: number = 1000) {
    const dir = this._getDirection(x, y);
    const anim = "Move" + dir;

    this._addToQueue((complete) => {
      // the simple case
      if (duration === 0) {
        this._el.style.top = `${ y }px`;
        this._el.style.left = `${ x }px`;
        this.reposition();
        complete();
        return;
      }

      // no animations
      if (!this.hasAnimation(anim)) {
        this._el.animate({ top: y, left: x }, duration).finished.then(complete);
        return;
      }

      const callback = (name: string, state: AnimatorStates) => {
        // when exited, complete
        if (state === AnimatorStates.EXITED) {
          complete();
        }
        // if waiting,
        if (state === AnimatorStates.WAITING) {
          this._el.animate({ top: y, left: x }, duration).finished.then(() => {
            // after we're done with the movement, do the exit animation
            this._animator.exitAnimation();
          });
        }

      };

      this._playInternal(anim, callback.bind(this));
    }, this);
  }

  private _playInternal(animation: string, callback: (currentAnimationName: string, state: number) => void) {
    // if we're inside an idle animation,
    if (this._isIdleAnimation() && this._idleIsPending) {
      this._idleComplete = () => {
        this._playInternal(animation, callback);
      };
    }

    this._animator.showAnimation(animation, callback);
  }

  play(animation: string, timeout = 5000, cb?: VoidFn) {
    if (!this.hasAnimation(animation)) return false;

    this._addToQueue((complete) => {
      let completed = false;
      // handle callback
      const callback = (name: string, state: AnimatorStates) => {
        if (state === AnimatorStates.EXITED) {
          completed = true;
          if (cb) cb();
          complete();
        }
      };

      // If has timeout, register a timeout function
      window.setTimeout(() => {
        if (completed) return;
        // exit after timeout
        this._animator.exitAnimation();
      }, timeout);

      this._playInternal(animation, callback);
    }, this);

    return true;
  }

  show(fast: boolean = false) {
    this._hidden = false;

    if (fast) {
      this._el.style.display = "";
      this.resume();
      this._onQueueEmpty();
      return;
    }

    if (this._el.style.top === "auto" || this._el.style.left !== "auto") {
      const left = window.innerWidth * 0.8;
      const top = (window.innerHeight + document.body.scrollTop) * 0.8;
      this._el.style.top = `${ top }px`;
      this._el.style.left = `${ left }px`;
    }

    this.resume();
    return this.play("Show");
  }

  speak(text: string, hold?: Balloon["_hold"]) {
    this._addToQueue((complete) => {
      this._balloon.speak(complete, text, hold);
    }, this);
  }

  /** Close the current balloon */
  closeBalloon() {
    this._balloon.hide();
  }

  delay(time?: number) {
    time = time || 250;

    this._addToQueue((complete) => {
      this._onQueueEmpty();
      window.setTimeout(complete, time);
    });
  }

  /** Skips the current animation */
  stopCurrent() {
    this._animator.exitAnimation();
    this._balloon.close();
  }

  stop() {
    // clear the queue
    this._queue.clear();
    this._animator.exitAnimation();
    this._balloon.hide();
  }

  hasAnimation(name: string) {
    return this._animator.hasAnimation(name);
  }

  /** Gets a list of animation names */
  animations() {
    return this._animator.animations();
  }

  /** Play a random animation */
  animate(): boolean {
    const animations = this.animations();
    const anim = animations[Math.floor(Math.random() * animations.length)];
    // skip idle animations
    if (anim.indexOf("Idle") === 0) {
      return this.animate();
    }
    return this.play(anim);
  }

  /**************************** Utils ************************************/

  private _getDirection(x: number, y: number): Direction {
    const rect = this._el.getBoundingClientRect();
    const h = parseFloat(getComputedStyle(this._el, null).height.replace("px", ""));
    const w = parseFloat(getComputedStyle(this._el, null).width.replace("px", ""));

    const offset = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };

    if (!(offset && h && w)) {
      throw new Error("Direction values missing");
    }

    const centerX = (offset.left + w / 2);
    const centerY = (offset.top + h / 2);

    const a = centerY - y;
    const b = centerX - x;

    const r = Math.round((180 * Math.atan2(a, b)) / Math.PI);

    // Left and Right are for the character, not the screen :-/
    if (-45 <= r && r < 45) return Direction.Right;
    if (45 <= r && r < 135) return Direction.Up;
    if (135 <= r && r <= 180 || -180 <= r && r < -135) return Direction.Left;
    if (-135 <= r && r < -45) return Direction.Down;

    // sanity check
    return Direction.Top;
  }

  /**************************** Queue and Idle handling ************************************/

  /**
   * Handle empty queue.
   * We need to transition the animation to an idle state
   */
  private _onQueueEmpty() {
    if (this._hidden || this._isIdleAnimation()) return;
    const idleAnim = this._getIdleAnimation();
    this._idleIsPending = true;

    this._animator.showAnimation(idleAnim, this._onIdleComplete.bind(this));
  }

  private _onIdleComplete(_: string, state: AnimatorStates) {
    if (state === AnimatorStates.EXITED && !this._idleIsPending) {
      this._idleComplete?.();
      this._idleIsPending = false;
    }
  }

  /** If the current animation is Idle */
  private _isIdleAnimation() {
    const c = this._animator.currentAnimationName;
    return c && c.indexOf("Idle") === 0;
  }

  /** Gets a random Idle animation */
  private _getIdleAnimation() {
    const animations = this.animations();
    const r = [];
    for (let i = 0; i < animations.length; i++) {
      const a = animations[i];
      if (a.indexOf("Idle") === 0) {
        r.push(a);
      }
    }

    // pick one
    const idx = Math.floor(Math.random() * r.length);
    return r[idx];
  }

  /**************************** Events ************************************/

  private _setupEvents() {
    this._debug("Setting up event listeners");

    window.addEventListener("resize", this.reposition.bind(this));
    this._el.addEventListener("mousedown", this._onMouseDown.bind(this));
    this._el.addEventListener("dblclick", this._onDoubleClick.bind(this));
  }

  private _onDoubleClick() {
    if (!this.play("ClickedOn")) {
      this.animate();
    }
  }

  reposition() {
    const o = this._el.getBoundingClientRect();
    const bH = this._el.offsetHeight;
    const bW = this._el.offsetWidth;
    const wW = window.innerWidth;
    const wH = window.innerHeight;

    this._debug("Reposition", { o, bH, bW, wH, wW });

    let top = o.top;
    let left = o.left;
    const m = 5;
    if (top - m < 0) {
      top = m;
    } else if ((top + bH + m) > wH) {
      top = wH - bH - m;
    }

    if (left - m < 0) {
      left = m;
    } else if (left + bW + m > wW) {
      left = wW - bW - m;
    }

    this._el.style.top = `${ top }px`;
    this._el.style.left = `${ left }px`;
    // reposition balloon
    this._balloon.reposition();
  }

  private _onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this._debug("MouseDown Event", this);
    this._startDrag(e);
  }

  /**************************** Drag ************************************/

  private _startDrag(e: MouseEvent) {
    this._debug("MouseDrag Event", this);
    // pause animations
    this.pause();
    this._balloon.hide(true);
    const { top, left } = this._calculateClickOffset(e);
    this._offsetTop = top;
    this._offsetLeft = left;

    const mouseMoveListener = this._dragMove.bind(this);
    const mouseUpListener = () => {
      this._finishDrag(mouseMoveListener, mouseUpListener);
    };

    window.addEventListener("mousemove", mouseMoveListener);
    window.addEventListener("mouseup", mouseUpListener);

    this._dragUpdateLoop = window.setTimeout(this._updateLocation.bind(this), 10);
  }

  private _calculateClickOffset(e: MouseEvent) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const o = this._el.getBoundingClientRect();
    return {
      top: mouseY - o.top + document.body.scrollTop,
      left: mouseX - o.left + document.body.scrollLeft,
    };
  }

  private _updateLocation() {
    if (this._targetX && this._targetY) {
      this._el.style.top = `${ this._targetY }px`;
      this._el.style.left = `${ this._targetX }px`;
      this._dragUpdateLoop = window.setTimeout(this._updateLocation.bind(this), 10);
    }
  }

  private _dragMove(e: MouseEvent) {
    e.preventDefault();
    const x = e.clientX - (this._offsetLeft || 0);
    const y = e.clientY - (this._offsetTop || 0);
    this._targetX = x;
    this._targetY = y;
  }

  private _finishDrag(mouseMoveListener?: any, mouseUpListener?: any) {
    this._debug("FinishDrag Event", this);
    window.clearTimeout(this._dragUpdateLoop);
    // remove handles
    window.removeEventListener("mousemove", mouseMoveListener);
    window.removeEventListener("mouseup", mouseUpListener);
    // resume animations
    this._balloon.show();
    this.reposition();
    this.resume();
  }

  private _addToQueue(func: VoidCbFn, scope?: this) {
    if (scope) func = func.bind(scope);
    this._queue.queue(func);
  }

  /**************************** Pause and Resume ************************************/

  pause() {
    this._animator.pause();
    this._balloon.pause();
  }

  resume() {
    this._animator.resume();
    this._balloon.resume();
  }
}

