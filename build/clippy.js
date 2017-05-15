var clippy = {};

/******
 *
 *
 * @constructor
 */
clippy.Agent = function (path, data, sounds) {
    this.path = path;
    
    this._queue = new clippy.Queue($.proxy(this._onQueueEmpty, this));

    this._el = $('<div class="clippy"></div>').hide();

    $(document.body).append(this._el);

    this._animator = new clippy.Animator(this._el, path, data, sounds);

    this._balloon = new clippy.Balloon(this._el);

    this._setupEvents();
};

clippy.Agent.prototype = {

    /**************************** API ************************************/

    /***
     *
     * @param {Number} x
     * @param {Number} y
     */
    gestureAt:function (x, y) {
        var d = this._getDirection(x, y);
        var gAnim = 'Gesture' + d;
        var lookAnim = 'Look' + d;

        var animation = this.hasAnimation(gAnim) ? gAnim : lookAnim;
        return this.play(animation);
    },

    /***
     *
     * @param {Boolean=} fast
     *
     */
    hide:function (fast, callback) {
        this._hidden = true;
        var el = this._el;
        this.stop();
        if (fast) {
            this._el.hide();
            this.stop();
            this.pause();
            if (callback) callback();
            return;
        }

        this._addToQueue(function (complete) {
            this._animator.showAnimation('Hide', $.proxy(function (name, state) {
                if (state === clippy.Animator.States.EXITED) {
                    el.hide();
                    this.pause();
                    if (callback) callback();
                    complete();
                }
            }, this));
        }, this);
    },

    moveTo:function (x, y, duration) {
        var dir = this._getDirection(x, y);
        var anim = 'Move' + dir;
        if (duration === undefined) duration = 1000;

        this._addToQueue(function (complete) {
            // the simple case
            if (duration === 0) {
                this._el.css({top:y, left:x});
                this.reposition();
                complete();
                return;
            }

            // no animations
            if (!this.hasAnimation(anim)) {
                this._el.animate({top:y, left:x}, duration, complete);
                return;
            }

            var callback = $.proxy(function (name, state) {
                // when exited, complete
                if (state === clippy.Animator.States.EXITED) {
                    complete();
                }
                // if waiting,
                if (state === clippy.Animator.States.WAITING) {
                    this._el.animate({top:y, left:x}, duration, $.proxy(function () {
                        // after we're done with the movement, do the exit animation
                        this._animator.exitAnimation();
                    }, this));
                }

            }, this);

            this._animator.showAnimation(anim, callback);
        }, this);
    },

    play:function (animation, timeout, cb) {
        if (!this.hasAnimation(animation)) return false;

        if (timeout === undefined) timeout = 5000;

        this._addToQueue(function (complete) {
            var completed = false;
            // handle callback
            var callback = function (name, state) {
                if (state === clippy.Animator.States.EXITED) {
                    completed = true;
                    if (cb) cb();
                    complete();
                }
            };

            // if has timeout, register a timeout function
            if (timeout) {
                window.setTimeout($.proxy(function () {
                    if (completed) return;
                    // exit after timeout
                    this._animator.exitAnimation();
                }, this), timeout)
            }

            this._animator.showAnimation(animation, callback);
        }, this);

        return true;
    },

    /***
     *
     * @param {Boolean=} fast
     */
    show:function (fast) {
        this._hidden = false;
        if (fast) {
            this._el.show();
            this.resume();
            this._onQueueEmpty();
            return;
        }

        if (this._el.css('top') === 'auto' || !this._el.css('left') === 'auto') {
            var left = $(window).width() * 0.8;
            var top = ($(window).height() + $(document).scrollTop()) * 0.8;
            this._el.css({top:top, left:left});
        }

        this.resume();
        return this.play('Show');
    },

    /***
     *
     * @param {String} text
     */
    speak:function (text, hold, callback) {
        this._addToQueue(function (complete) {
            this._balloon.speak(complete, text, hold, callback);
        }, this);
    },

    /***
     *
     * @param {String} text
     */
    ask:function (text, choices, callback) {
        this._addToQueue(function (complete) {
            this._balloon.ask(complete, text, choices, callback);
        }, this);
    },

    /***
     * Close the current balloon
     */
    closeBalloon:function () {
        this._balloon.close();
    },
    
    /***
     * Pause the current balloon
     */
    pause:function () {
    	this._balloon.pause();
    },
    resume:function () {
    	this._balloon.resume();
    },

    delay:function (time, callback) {
        time = time || 250;

        this._addToQueue(function (complete) {
            window.setTimeout(function(){
            	complete();
            	if(callback){
            		callback();
            	}
            }, time);
        }, this);
    },

    /***
     * Skips the current animation
     */
    stopCurrent:function () {
        this._animator.exitAnimation();
        this._balloon.close();
    },


    stop:function () {
        // clear the queue
        this._queue.clear();
        this._animator.exitAnimation();
        this._balloon.close();
    },

    /***
     *
     * @param {String} name
     * @returns {Boolean}
     */
    hasAnimation:function (name) {
        return this._animator.hasAnimation(name);
    },

    /***
     * Gets a list of animation names
     *
     * @return {Array.<string>}
     */
    animations:function () {
        return this._animator.animations();
    },

    /***
     * Play a random animation
     * @return {jQuery.Deferred}
     */
    animate:function () {
        var animations = this.animations();
        var anim = animations[Math.floor(Math.random() * animations.length)];
        // skip idle animations
        if (anim.indexOf('Idle') === 0 || anim == 'Show' || anim == 'Hide') {
            return this.animate();
        }
        return this.play(anim);
    },

    /**************************** Utils ************************************/

    /***
     *
     * @param {Number} x
     * @param {Number} y
     * @return {String}
     * @private
     */
    _getDirection:function (x, y) {
        var offset = this._el.offset();
        var h = this._el.height();
        var w = this._el.width();

        var centerX = (offset.left + w / 2);
        var centerY = (offset.top + h / 2);

        var a = centerY - y;
        var b = centerX - x;

        var r = Math.round((180 * Math.atan2(a, b)) / Math.PI);

        // Left and Right are for the character, not the screen :-/
        if (-45 <= r && r < 45) return 'Right';
        if (45 <= r && r < 135) return 'Up';
        if (135 <= r && r <= 180 || -180 <= r && r < -135) return 'Left';
        if (-135 <= r && r < -45) return 'Down';

        // sanity check
        return 'Top';
    },

    /**************************** Queue and Idle handling ************************************/

    /***
     * Handle empty queue.
     * We need to transition the animation to an idle state
     * @private
     */
    _onQueueEmpty:function () {
        if (this._hidden || this._isIdleAnimation()) return;
        var idleAnim = this._getIdleAnimation();
        this._idleDfd = $.Deferred();

        this._animator.showAnimation(idleAnim, $.proxy(this._onIdleComplete, this));
    },

    _onIdleComplete:function (name, state) {
        if (state === clippy.Animator.States.EXITED) {
            this._idleDfd.resolve();
            
            // Always play some idle animation.
            this._queue.next();
        }
    },

    /***
     * Is an Idle animation currently playing?
     * @return {Boolean}
     * @private
     */
    _isIdleAnimation:function () {
        var c = this._animator.currentAnimationName;
        return c && c.indexOf('Idle') == 0 && this._idleDfd && this._idleDfd.state() === 'pending';
    },

    /**
     * Gets a random Idle animation
     * @return {String}
     * @private
     */
    _getIdleAnimation:function () {
        var animations = this.animations();
        var r = [];
        for (var i = 0; i < animations.length; i++) {
            var a = animations[i];
            if (a.indexOf('Idle') === 0) {
                r.push(a);
            }
        }

        // pick one
        var idx = Math.floor(Math.random() * r.length);
        return r[idx];
    },

    /**************************** Events ************************************/

    _setupEvents:function () {
        $(window).on('resize', $.proxy(this.reposition, this));

        this._el.on('mousedown', $.proxy(this._onMouseDown, this));

        this._el.on('dblclick', $.proxy(this._onDoubleClick, this));
    },

    _onDoubleClick:function () {
        if (!this.play('ClickedOn')) {
            this.animate();
        }
    },

    reposition:function () {
        if (!this._el.is(':visible')) return;
        var o = this._el.offset();
        var bH = this._el.outerHeight();
        var bW = this._el.outerWidth();

        var wW = $(window).width();
        var wH = $(window).height();
        var sT = $(window).scrollTop();
        var sL = $(window).scrollLeft();

        var top = o.top - sT;
        var left = o.left - sL;
        var m = 5;
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

        this._el.css({left:left, top:top});
        // reposition balloon
        this._balloon.reposition();
    },

    _onMouseDown:function (e) {
        e.preventDefault();
        this._startDrag(e);
    },


    /**************************** Drag ************************************/

    _startDrag:function (e) {
        // pause animations
        this.pause();
        this._balloon.hide();
        this._offset = this._calculateClickOffset(e);

        this._moveHandle = $.proxy(this._dragMove, this);
        this._upHandle = $.proxy(this._finishDrag, this);

        $(window).on('mousemove', this._moveHandle);
        $(window).on('mouseup', this._upHandle);

        this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
    },

    _calculateClickOffset:function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var o = this._el.offset();
        return {
            top:mouseY - o.top,
            left:mouseX - o.left
        }

    },

    _updateLocation:function () {
        this._el.css({top:this._targetY, left:this._targetX});
        this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
    },

    _dragMove:function (e) {
        e.preventDefault();
        var x = e.clientX - this._offset.left;
        var y = e.clientY - this._offset.top;
        this._targetX = x;
        this._targetY = y;
    },

    _finishDrag:function () {
        window.clearTimeout(this._dragUpdateLoop);
        // remove handles
        $(window).off('mousemove', this._moveHandle);
        $(window).off('mouseup', this._upHandle);
        // resume animations
        this._balloon.show();
        this.reposition();
        this.resume();

    },

    _addToQueue:function (func, scope) {
        if (scope) func = $.proxy(func, scope);
        
        // if we're inside an idle animation,
        if (this._isIdleAnimation()) {
            this._idleDfd.done($.proxy(function () {
                this._queue.queue(func);
            }, this))
            this._animator.exitAnimation();
            return;
        }
        
        this._queue.queue(func);
    },

    /**************************** Pause and Resume ************************************/

    pause:function () {
        this._animator.pause();
        this._balloon.pause();

    },

    resume:function () {
        this._animator.resume();
        this._balloon.resume();
    }

};

/******
 *
 *
 * @constructor
 */
clippy.Animator = function (el, path, data, sounds, options) {
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
    options = options || {silent: true};
    this.silent = options.silent;
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
        if (!this.silent && audio) audio.play();
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

/******
 *
 *
 * @constructor
 */
clippy.Balloon = function (targetEl) {
    this._targetEl = targetEl;

    this._hidden = true;
    this._setup();
};

clippy.Balloon.prototype = {
    WORD_SPEAK_TIME:200,
    CLOSE_BALLOON_DELAY:2000,

    _setup:function () {
        this._balloon = $('<div class="clippy-balloon"><div class="clippy-tip"></div><div class="clippy-content"></div></div> ').hide();
        this._content = this._balloon.find('.clippy-content');

        $(document.body).append(this._balloon);
    },

    reposition:function () {
        var sides = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

        for (var i = 0; i < sides.length; i++) {
            var s = sides[i];
            this._position(s);
            if (!this._isOut()) break;
        }
    },

    _BALLOON_MARGIN:15,

    /***
     *
     * @param side
     * @private
     */
    _position:function (side) {
        var o = this._targetEl.offset();
        var h = this._targetEl.height();
        var w = this._targetEl.width();
        o.top -= $(window).scrollTop();
        o.left -= $(window).scrollLeft();

        var bH = this._balloon.outerHeight();
        var bW = this._balloon.outerWidth();

        this._balloon.removeClass('clippy-top-left');
        this._balloon.removeClass('clippy-top-right');
        this._balloon.removeClass('clippy-bottom-right');
        this._balloon.removeClass('clippy-bottom-left');

        var left, top;
        switch (side) {
            case 'top-left':
                // right side of the balloon next to the right side of the agent
                left = o.left + w - bW;
                top = o.top - bH - this._BALLOON_MARGIN;
                break;
            case 'top-right':
                // left side of the balloon next to the left side of the agent
                left = o.left;
                top = o.top - bH - this._BALLOON_MARGIN;
                break;
            case 'bottom-right':
                // right side of the balloon next to the right side of the agent
                left = o.left;
                top = o.top + h + this._BALLOON_MARGIN;
                break;
            case 'bottom-left':
                // left side of the balloon next to the left side of the agent
                left = o.left + w - bW;
                top = o.top + h + this._BALLOON_MARGIN;
                break;
        }

        this._balloon.css({top:top, left:left});
        this._balloon.addClass('clippy-' + side);
    },

    _isOut:function () {
        var o = this._balloon.offset();
        var bH = this._balloon.outerHeight();
        var bW = this._balloon.outerWidth();

        var wW = $(window).width();
        var wH = $(window).height();
        var sT = $(document).scrollTop();
        var sL = $(document).scrollLeft();

        var top = o.top - sT;
        var left = o.left - sL;
        var m = 5;
        if (top - m < 0 || left - m < 0) return true;
        if ((top + bH + m) > wH || (left + bW + m) > wW) return true;

        return false;
    },

    speak:function (complete, text, hold, callback) {
        this._hidden = false;
        this.show();
        var c = this._content;
        // set height to auto
        c.height('auto');
        c.width('auto');
        // add the text
        c.text(text);
        // set height
        c.height(c.height());
        c.width(c.width());
        c.text('');
        this.reposition();

        this._complete = complete;
        this._sayWords(text, [], hold, complete, callback, false);
    },

    ask:function (complete, text, choiceTexts, callback) {
        var choices = [];
        for (var i = 0; i < choiceTexts.length; i++) {
			 d = $('<a class="clippy-choice"></a>').text(choiceTexts[i])
           choices.push(d);
		}
        
        this._hidden = false;
        this.show();
        var c = this._content;
        c.height('auto');
        c.width('auto');
        c.text(text);
        for (var i in choices) {
            c.append(choices[i]);
        }
        c.height(c.height());
        c.width(c.width());
        c.text('');
        this.reposition();

        this._complete = complete;
        this._sayWords(text, choices, true, complete, callback, true);
    },

    show:function () {
        if (this._hidden) return;
        this._balloon.show();
    },

    hide:function () {
        this._balloon.hide();
    },

    _sayWords:function (text, choices, hold, complete, callback, isQuestion) {
        this._active = true;
        this._hold = hold;
        var words = text.split(/[^\S-]/);
        var time = this.WORD_SPEAK_TIME;
        var el = this._content;
        var idx = 1;

        this._addWord = $.proxy(function () {
            if (!this._active) return;
            if (idx <= words.length) {
                el.html(words.slice(0, idx).join(' '));
                idx++;
                this._loop = window.setTimeout($.proxy(this._addWord, this), time);
            } else {
            	var div = el.append('<div class="questions" />')
            	for (var i = 0; i < choices.length; i++) {
            		choices[i].appendTo( '.questions');
				}
                var self = this;
                $(".clippy-choice").click(function() {
                    self.close(true);
                    if (callback) {
                        callback($(this).text());
                    }
                });
                if (!isQuestion && callback) {
                    callback();
                }
                delete this._addWord;
                this._active = false;
                if (!this._hold) {
                    complete();
                    delete this._complete;
                    this.close();
                }
            }
        }, this);

        this._addWord();
    },

    close:function (fast) {
        if (this._active) {
            this._hold = false;
            return;
        }
        if (this._hold) {
            this._hold = false;
            if (this._complete) {
                this._complete();
                delete this._complete;
            }
        }
        if (!this._hidden) {
            if (fast) {
                this._balloon.hide();
                this._hidden = true;
            } else {
                this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
            }
        }
    },

    _finishHideBalloon:function () {
        if (this._active) return;
        this._balloon.hide();
        this._hidden = true;
        this._hiding = null;
    },

    pause:function () {
        window.clearTimeout(this._loop);
        if (this._hiding) {
            window.clearTimeout(this._hiding);
            this._hiding = null;
        }
    },

    resume:function () {
        if (this._addWord) {
            this._addWord();
        } else if (!this._hold && !this._hidden) {
            this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
        }
    }
};


clippy.BASE_PATH = 'agents/';

clippy.load = function (name, successCb, failCb, path) {
    path = path + name || clippy.BASE_PATH + name;

    var mapDfd = clippy.load._loadMap(path);
    var agentDfd = clippy.load._loadAgent(name, path);
    var soundsDfd = clippy.load._loadSounds(name, path);

    var data;
    agentDfd.done(function (d) {
        data = d;
    });

    var sounds;

    soundsDfd.done(function (d) {
        sounds = d;
    });

    // wrapper to the success callback
    var cb = function () {
        var a = new clippy.Agent(path, data,sounds);
        successCb(a);
    };

    $.when(mapDfd, agentDfd, soundsDfd).done(cb).fail(failCb);
};

clippy.load._maps = {};
clippy.load._loadMap = function (path) {
    var dfd = clippy.load._maps[path];
    if (dfd) return dfd;

    // set dfd if not defined
    dfd = clippy.load._maps[path] = $.Deferred();

    var src = path + '/map.png';
    var img = new Image();

    img.onload = dfd.resolve;
    img.onerror = dfd.reject;

    // start loading the map;
    img.setAttribute('src', src);

    return dfd.promise();
};

clippy.load._sounds = {};

clippy.load._loadSounds = function (name, path) {
    var dfd = clippy.load._sounds[name];
    if (dfd) return dfd;

    // set dfd if not defined
    dfd = clippy.load._sounds[name] = $.Deferred();

    var audio = document.createElement('audio');
    var canPlayMp3 = !!audio.canPlayType && "" != audio.canPlayType('audio/mpeg');
    var canPlayOgg = !!audio.canPlayType && "" != audio.canPlayType('audio/ogg; codecs="vorbis"');

    if (!canPlayMp3 && !canPlayOgg) {
        dfd.resolve({});
    } else {
        var src = path + (canPlayMp3 ? '/sounds-mp3.js' : '/sounds-ogg.js');
        // load
        clippy.load._loadScript(src);
    }

    return dfd.promise()
};

clippy.load._data = {};
clippy.load._loadAgent = function (name, path) {
    var dfd = clippy.load._data[name];
    if (dfd) return dfd;

    dfd = clippy.load._getAgentDfd(name);

    var src = path + '/agent.js';

    clippy.load._loadScript(src);

    return dfd.promise();
};

clippy.load._loadScript = function (src) {
    var script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('async', 'async');
    script.setAttribute('type', 'text/javascript');

    var dochead = document.head || document.getElementsByTagName('head')[0];
    dochead.appendChild(script);
};

clippy.load._getAgentDfd = function (name) {
    var dfd = clippy.load._data[name];
    if (!dfd) {
        dfd = clippy.load._data[name] = $.Deferred();
    }
    return dfd;
};

clippy.ready = function (name, data) {
    var dfd = clippy.load._getAgentDfd(name);
    dfd.resolve(data);
};

clippy.soundsReady = function (name, data) {
    var dfd = clippy.load._sounds[name];
    if (!dfd) {
        dfd = clippy.load._sounds[name] = $.Deferred();
    }

    dfd.resolve(data);
};

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
        this.next();
    },

    next:function () {
        if (this._active) return;

        // stop if nothing left in queue
        if (!this._queue.length) {
            this._onEmptyCallback();
            return;
        }

        var f = this._queue.shift();
        this._active = true;

        // execute function
        var completeFunction = $.proxy(this._finish, this);
        f(completeFunction);
    },

    _finish:function() {
        this._active = false;
        this.next();
    },

    clear:function () {
        this._queue = [];
    },
};
