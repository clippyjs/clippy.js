/******
 *
 *
 * @constructor
 */
clippy.Animator = function (el, path, data, sounds) {
    this._el = el;
    this._data = data;
    this._path = path;
    this._currentFrameIndex = 0;
    this._currentFrame = undefined;
    this._exiting = false;
    this._currentAnimation = undefined;
    this._endCallback = undefined;
    this._started = false;
    this._sounds = {};
    this.currentAnimationName = undefined;
    this.preloadSounds(sounds);
    this._overlays = [this._el];
    var curr = this._el;

    this._setupElement(this._el);
    for (var i = 1; i < this._data.overlayCount; i++) {
        var inner = this._setupElement($('<div></div>'));

        curr.append(inner);
        this._overlays.push(inner);
        curr = inner;
    }
};

clippy.Animator.prototype = {
    _setupElement:function (el) {
        var frameSize = this._data.framesize;
        el.css('display', "none");
        el.css({width:frameSize[0], height:frameSize[1]});
        el.css('background', "url('" + this._path + "/map.png') no-repeat");

        return el;
    },

    animations:function () {
        var r = [];
        var d = this._data.animations;
        for (var n in d) {
            r.push(n);
        }
        return r;
    },

    preloadSounds:function (sounds) {

        for (var i = 0; i < this._data.sounds.length; i++) {
            var snd = this._data.sounds[i];
            var uri = sounds[snd];
            if (!uri) continue;
            this._sounds[snd] = new Audio(uri);

        }
    },
    hasAnimation:function (name) {
        return !!this._data.animations[name];
    },

    exitAnimation:function () {
        this._exiting = true;
    },


    showAnimation:function (animationName, stateChangeCallback) {
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
        this._currentFrame = undefined;
        this._endCallback = stateChangeCallback;

        return true;
    },


    _draw:function () {
        var images = [];
        if (this._currentFrame) images = this._currentFrame.images || [];

        for (var i = 0; i < this._overlays.length; i++) {
            if (i < images.length) {
                var xy = images[i];
                var bg = -xy[0] + 'px ' + -xy[1] + 'px';
                this._overlays[i].css({'background-position':bg, 'display':'block'});
            }
            else {
                this._overlays[i].css('display', 'none');
            }

        }
    },

    _getNextAnimationFrame:function () {
        if (!this._currentAnimation) return undefined;
        // No current frame. start animation.
        if (!this._currentFrame) return 0;
        var currentFrame = this._currentFrame;
        var branching = this._currentFrame.branching;


        if (this._exiting && currentFrame.exitBranch !== undefined) {
            return currentFrame.exitBranch;
        }
        else if (branching) {
            var rnd = Math.random() * 100;
            for (var i = 0; i < branching.branches.length; i++) {
                var branch = branching.branches[i];
                if (rnd <= branch.weight) {
                    return branch.frameIndex;
                }

                rnd -= branch.weight;
            }
        }

        return this._currentFrameIndex + 1;
    },

    _playSound:function () {
        var s = this._currentFrame.sound;
        if (!s) return;
        var audio = this._sounds[s];
        if (audio) audio.play();
    },

    _atLastFrame:function () {
        return this._currentFrameIndex >= this._currentAnimation.frames.length - 1;
    },

    _step:function () {
        if (!this._currentAnimation) return;
        var newFrameIndex = Math.min(this._getNextAnimationFrame(), this._currentAnimation.frames.length - 1);
        var frameChanged = !this._currentFrame || this._currentFrameIndex !== newFrameIndex;
        this._currentFrameIndex = newFrameIndex;

        // always switch frame data, unless we're at the last frame of an animation with a useExitBranching flag.
        if (!(this._atLastFrame() && this._currentAnimation.useExitBranching)) {
            this._currentFrame = this._currentAnimation.frames[this._currentFrameIndex];
        }

        this._draw();
        this._playSound();

        this._loop = window.setTimeout($.proxy(this._step, this), this._currentFrame.duration);


        // fire events if the frames changed and we reached an end
        if (this._endCallback && frameChanged && this._atLastFrame()) {
            if (this._currentAnimation.useExitBranching && !this._exiting) {
                this._endCallback(this.currentAnimationName, clippy.Animator.States.WAITING);
            }
            else {
                this._endCallback(this.currentAnimationName, clippy.Animator.States.EXITED);
            }
        }
    },

    /***
     * Pause animation execution
     */
    pause:function () {
        window.clearTimeout(this._loop);
    },

    /***
     * Resume animation
     */
    resume:function () {
        this._step();
    }
};

clippy.Animator.States = { WAITING:1, EXITED:0 };
