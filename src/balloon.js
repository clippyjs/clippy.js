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

