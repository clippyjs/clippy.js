import { AgentAnimationFramesType, AgentAnimationType, AgentType } from "./agent";
import { AgentsWithAudioType } from "./agents";

export type AnimatorSoundType = Record<string, string>

export enum AnimatorStates {
  EXITED,
  WAITING
}

export class Animator {
  currentAnimationName: string | undefined = undefined;
  isMuted = false;
  private readonly _el: HTMLDivElement;
  private _data: AgentType;
  private _currentFrameIndex: number = 0;
  private _currentFrame: AgentAnimationFramesType | null = null;
  private _exiting = false;
  private _currentAnimation: AgentAnimationType | undefined = undefined;
  private _endCallback: ((currentAnimationName: string, state: number) => void) | undefined = undefined;
  private _started = false;
  private _sounds: Record<string, HTMLAudioElement> = {};
  private _overlays: HTMLDivElement[];
  private _loop: number | undefined;

  constructor(el: HTMLDivElement, agent: AgentsWithAudioType) {
    this._el = el;
    this._data = agent.agent;
    this._overlays = [this._el];
    let curr = this._el;

    this.preloadSounds(agent.audio);
    this._setupElement(this._el, agent.map);

    for (let i = 1; i < this._data.overlayCount; i++) {
      const nodeInnerDiv = document.createElement("div");
      const inner = this._setupElement(nodeInnerDiv, agent.map);

      curr.append(inner);
      this._overlays.push(inner);
      curr = inner;
    }
  };

  animations() {
    const r: string[] = [];
    const d = this._data.animations;
    for (const n in d) {
      r.push(n);
    }
    return r;
  }

  preloadSounds(sounds: AnimatorSoundType) {
    for (const sound of this._data.sounds) {
      const uri = sounds[sound];
      if (!uri) continue;
      this._sounds[sound] = new Audio(uri);
    }
  }

  hasAnimation(name: string) {
    return !!this._data.animations[name];
  }

  exitAnimation() {
    this._exiting = true;
  }

  showAnimation(animationName: string, stateChangeCallback: Animator["_endCallback"]) {
    this._exiting = false;

    if (!this.hasAnimation(animationName)) {
      return false;
    }

    this._currentAnimation = this._data.animations[animationName];
    this.currentAnimationName = animationName;

    if (!this._started) {
      this._step();
      this._started = true;
    }

    this._currentFrameIndex = 0;
    this._currentFrame = null;
    this._endCallback = stateChangeCallback;

    return true;
  }

  /** Pause animation execution */
  pause() {
    window.clearTimeout(this._loop);
  }

  /** Resume animation */
  resume() {
    this._step();
  }

  private _setupElement(el: HTMLDivElement, mapUrl: URL) {
    const frameSize = this._data.framesize;

    el.style.display = "none";
    el.style.width = `${ frameSize[0] }px`;
    el.style.height = `${ frameSize[1] }px`;
    el.style.background = `url('${ mapUrl.toString() }') no-repeat`;

    return el;
  }

  private _draw() {
    let images: AgentAnimationFramesType["images"] = [];
    if (this._currentFrame) images = this._currentFrame.images || [];

    for (let i = 0; i < this._overlays.length; i++) {
      if (i < images.length) {
        const xy = images[i];
        const bg = `${ -xy[0] }px ${ -xy[1] }px`;
        this._overlays[i].style.display = "block";
        this._overlays[i].style.backgroundPosition = bg;
      } else {
        this._overlays[i].style.display = "none";
      }

    }
  }

  private _getNextAnimationFrame() {
    if (!this._currentAnimation) return Number.MAX_VALUE;
    // No current frame. start animation.
    if (!this._currentFrame) return 0;
    const currentFrame = this._currentFrame;
    const branching = currentFrame.branching;

    if (this._exiting && currentFrame.exitBranch !== undefined) {
      return currentFrame.exitBranch;
    } else if (branching) {
      let rnd = Math.random() * 100;
      for (const branch of branching.branches) {
        if (rnd <= branch.weight) {
          return branch.frameIndex;
        }

        rnd -= branch.weight;
      }
    }

    return this._currentFrameIndex + 1;
  }

  private _playSound() {
    const s = this._currentFrame?.sound;
    if (!s) return;
    const audio = this._sounds[s];
    if (audio && !this.isMuted) audio.play();
  }

  private _atLastFrame() {
    if (this._currentAnimation) {
      return this._currentFrameIndex >= this._currentAnimation.frames.length - 1;
    }
    return true;
  }

  private _step() {
    if (!this._currentAnimation || !this.currentAnimationName) return;
    const newFrameIndex = Math.min(this._getNextAnimationFrame(), this._currentAnimation.frames.length - 1);
    const frameChanged = !this._currentFrame || this._currentFrameIndex !== newFrameIndex;
    this._currentFrameIndex = newFrameIndex;

    // always switch frame data, unless we're at the last frame of an animation with a useExitBranching flag.
    if (!(this._atLastFrame() && this._currentAnimation.useExitBranching)) {
      this._currentFrame = this._currentAnimation.frames[this._currentFrameIndex];
    }

    this._draw();
    this._playSound();

    this._loop = window.setTimeout(this._step.bind(this), this._currentFrame?.duration);

    // fire events if the frames changed, and we reached an end
    if (this._endCallback && frameChanged && this._atLastFrame()) {
      if (this._currentAnimation.useExitBranching && !this._exiting) {
        this._endCallback(this.currentAnimationName, AnimatorStates.WAITING);
      } else {
        this._endCallback(this.currentAnimationName, AnimatorStates.EXITED);
      }
    }
  }
}
