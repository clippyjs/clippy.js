export type VoidFn = () => void
export type VoidCbFn = (cb: VoidFn) => void

export class Queue {
  private _queue: Array<VoidCbFn>;
  private readonly _onEmptyCallback: VoidFn;
  private _active = false;

  constructor(onEmptyCallback: Queue["_onEmptyCallback"]) {
    this._queue = [];
    this._onEmptyCallback = onEmptyCallback;
  };

  queue(func: VoidCbFn) {
    this._queue.push(func);

    if (this._queue.length === 1 && !this._active) {
      this._progressQueue();
    }
  }

  _progressQueue() {
    // stop if nothing left in queue
    if (!this._queue.length) {
      this._onEmptyCallback();
      return;
    }

    const f = this._queue.shift();
    if (f) {
      this._active = true;

      // execute function
      const completeFunction = this.next.bind(this);
      f(completeFunction);
    }
  }

  clear() {
    this._queue = [];
  }

  next() {
    this._active = false;
    this._progressQueue();
  }
}
