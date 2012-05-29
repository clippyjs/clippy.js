/******
 * Tiny Queue
 *
 * @constructor
 */
clippy.Queue = function (onEmptyCallback) {
    this._queue = [];
    this._onEmptyCallback = onEmptyCallback;
};

clippy.Queue.prototype = {
    /***
     *
     * @param {function(Function)} func
     * @returns {jQuery.Deferred}
     */
    queue:function (func) {
        this._queue.push(func);

        if (this._queue.length === 1 && !this._active) {
            this._progressQueue();
        }
    },

    _progressQueue:function () {

        // stop if nothing left in queue
        if (!this._queue.length) {
            this._onEmptyCallback();
            return;
        }

        var f = this._queue.shift();
        this._active = true;

        // execute function
        var completeFunction = $.proxy(this.next, this);
        f(completeFunction);
    },

    clear:function () {
        this._queue = [];
    },

    next:function () {
        this._active = false;
        this._progressQueue();
    }
};

