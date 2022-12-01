// clipp
var clippy={};clippy.Agent=function(a,b,c){this.path=a,this._queue=new clippy.Queue($.proxy(this._onQueueEmpty,this)),this._el=$('<div class="clippy"></div>').hide(),$(document.body).append(this._el),this._animator=new clippy.Animator(this._el,a,b,c),this._balloon=new clippy.Balloon(this._el),this._setupEvents()},clippy.Agent.prototype={gestureAt:function(a,b){var c=this._getDirection(a,b),d="Gesture"+c,e="Look"+c,f=this.hasAnimation(d)?d:e;return this.play(f)},hide:function(a,b){this._hidden=!0;var c=this._el;this.stop();if(a){this._el.hide(),this.stop(),this.pause(),b&&b();return}return this._playInternal("Hide",function(){c.hide(),this.pause(),b&&b()})},moveTo:function(a,b,c){var d=this._getDirection(a,b),e="Move"+d;c===undefined&&(c=1e3),this._addToQueue(function(d){if(c===0){this._el.css({top:b,left:a}),this.reposition(),d();return}if(!this.hasAnimation(e)){this._el.animate({top:b,left:a},c,d);return}var f=$.proxy(function(e,f){f===clippy.Animator.States.EXITED&&d(),f===clippy.Animator.States.WAITING&&this._el.animate({top:b,left:a},c,$.proxy(function(){this._animator.exitAnimation()},this))},this);this._playInternal(e,f)},this)},_playInternal:function(a,b){this._isIdleAnimation()&&this._idleDfd&&this._idleDfd.state()==="pending"&&this._idleDfd.done($.proxy(function(){this._playInternal(a,b)},this)),this._animator.showAnimation(a,b)},play:function(a,b,c){return this.hasAnimation(a)?(b===undefined&&(b=5e3),this._addToQueue(function(d){var e=!1,f=function(a,b){b===clippy.Animator.States.EXITED&&(e=!0,c&&c(),d())};b&&window.setTimeout($.proxy(function(){if(e)return;this._animator.exitAnimation()},this),b),this._playInternal(a,f)},this),!0):!1},show:function(a){this._hidden=!1;if(a){this._el.show(),this.resume(),this._onQueueEmpty();return}if(this._el.css("top")==="auto"||!this._el.css("left")==="auto"){var b=$(window).width()*.8,c=($(window).height()+$(document).scrollTop())*.8;this._el.css({top:c,left:b})}return this.resume(),this.play("Show")},speak:function(a,b){this._addToQueue(function(c){this._balloon.speak(c,a,b)},this)},closeBalloon:function(){this._balloon.hide()},delay:function(a){a=a||250,this._addToQueue(function(b){this._onQueueEmpty(),window.setTimeout(b,a)})},stopCurrent:function(){this._animator.exitAnimation(),this._balloon.close()},stop:function(){this._queue.clear(),this._animator.exitAnimation(),this._balloon.hide()},hasAnimation:function(a){return this._animator.hasAnimation(a)},animations:function(){return this._animator.animations()},animate:function(){var a=this.animations(),b=a[Math.floor(Math.random()*a.length)];return b.indexOf("Idle")===0?this.animate():this.play(b)},_getDirection:function(a,b){var c=this._el.offset(),d=this._el.height(),e=this._el.width(),f=c.left+e/2,g=c.top+d/2,h=g-b,i=f-a,j=Math.round(180*Math.atan2(h,i)/Math.PI);return-45<=j&&j<45?"Right":45<=j&&j<135?"Up":135<=j&&j<=180||-180<=j&&j<-135?"Left":-135<=j&&j<-45?"Down":"Top"},_onQueueEmpty:function(){if(this._hidden||this._isIdleAnimation())return;var a=this._getIdleAnimation();this._idleDfd=$.Deferred(),this._animator.showAnimation(a,$.proxy(this._onIdleComplete,this))},_onIdleComplete:function(a,b){b===clippy.Animator.States.EXITED&&this._idleDfd.resolve()},_isIdleAnimation:function(){var a=this._animator.currentAnimationName;return a&&a.indexOf("Idle")===0},_getIdleAnimation:function(){var a=this.animations(),b=[];for(var c=0;c<a.length;c++){var d=a[c];d.indexOf("Idle")===0&&b.push(d)}var e=Math.floor(Math.random()*b.length);return b[e]},_setupEvents:function(){$(window).on("resize",$.proxy(this.reposition,this)),this._el.on("mousedown",$.proxy(this._onMouseDown,this)),this._el.on("dblclick",$.proxy(this._onDoubleClick,this))},_onDoubleClick:function(){this.play("ClickedOn")||this.animate()},reposition:function(){if(!this._el.is(":visible"))return;var a=this._el.offset(),b=this._el.outerHeight(),c=this._el.outerWidth(),d=$(window).width(),e=$(window).height(),f=$(window).scrollTop(),g=$(window).scrollLeft(),h=a.top-f,i=a.left-g,j=5;h-j<0?h=j:h+b+j>e&&(h=e-b-j),i-j<0?i=j:i+c+j>d&&(i=d-c-j),this._el.css({left:i,top:h}),this._balloon.reposition()},_onMouseDown:function(a){a.preventDefault(),this._startDrag(a)},_startDrag:function(a){this.pause(),this._balloon.hide(!0),this._offset=this._calculateClickOffset(a),this._moveHandle=$.proxy(this._dragMove,this),this._upHandle=$.proxy(this._finishDrag,this),$(window).on("mousemove",this._moveHandle),$(window).on("mouseup",this._upHandle),this._dragUpdateLoop=window.setTimeout($.proxy(this._updateLocation,this),10)},_calculateClickOffset:function(a){var b=a.pageX,c=a.pageY,d=this._el.offset();return{top:c-d.top,left:b-d.left}},_updateLocation:function(){this._el.css({top:this._targetY,left:this._taregtX}),this._dragUpdateLoop=window.setTimeout($.proxy(this._updateLocation,this),10)},_dragMove:function(a){a.preventDefault();var b=a.clientX-this._offset.left,c=a.clientY-this._offset.top;this._taregtX=b,this._targetY=c},_finishDrag:function(){window.clearTimeout(this._dragUpdateLoop),$(window).off("mousemove",this._moveHandle),$(window).off("mouseup",this._upHandle),this._balloon.show(),this.reposition(),this.resume()},_addToQueue:function(a,b){b&&(a=$.proxy(a,b)),this._queue.queue(a)},pause:function(){this._animator.pause(),this._balloon.pause()},resume:function(){this._animator.resume(),this._balloon.resume()}},clippy.Animator=function(a,b,c,d){this._el=a,this._data=c,this._path=b,this._currentFrameIndex=0,this._currentFrame=undefined,this._exiting=!1,this._currentAnimation=undefined,this._endCallback=undefined,this._started=!1,this._sounds={},this.currentAnimationName=undefined,this.preloadSounds(d),this._overlays=[this._el];var e=this._el;this._setupElement(this._el);for(var f=1;f<this._data.overlayCount;f++){var g=this._setupElement($("<div></div>"));e.append(g),this._overlays.push(g),e=g}},clippy.Animator.prototype={_setupElement:function(a){var b=this._data.framesize;return a.css("display","none"),a.css({width:b[0],height:b[1]}),a.css("background","url('"+this._path+"/map.png') no-repeat"),a},animations:function(){var a=[],b=this._data.animations;for(var c in b)a.push(c);return a},preloadSounds:function(a){for(var b=0;b<this._data.sounds.length;b++){var c=this._data.sounds[b],d=a[c];if(!d)continue;this._sounds[c]=new Audio(d)}},hasAnimation:function(a){return!!this._data.animations[a]},exitAnimation:function(){this._exiting=!0},showAnimation:function(a,b){return this._exiting=!1,this.hasAnimation(a)?(this._currentAnimation=this._data.animations[a],this.currentAnimationName=a,this._started||(this._step(),this._started=!0),this._currentFrameIndex=0,this._currentFrame=undefined,this._endCallback=b,!0):!1},_draw:function(){var a=[];this._currentFrame&&(a=this._currentFrame.images||[]);for(var b=0;b<this._overlays.length;b++)if(b<a.length){var c=a[b],d=-c[0]+"px "+ -c[1]+"px";this._overlays[b].css({"background-position":d,display:"block"})}else this._overlays[b].css("display","none")},_getNextAnimationFrame:function(){if(!this._currentAnimation)return undefined;if(!this._currentFrame)return 0;var a=this._currentFrame,b=this._currentFrame.branching;if(this._exiting&&a.exitBranch!==undefined)return a.exitBranch;if(b){var c=Math.random()*100;for(var d=0;d<b.branches.length;d++){var e=b.branches[d];if(c<=e.weight)return e.frameIndex;c-=e.weight}}return this._currentFrameIndex+1},_playSound:function(){var a=this._currentFrame.sound;if(!a)return;var b=this._sounds[a];b&&b.play()},_atLastFrame:function(){return this._currentFrameIndex>=this._currentAnimation.frames.length-1},_step:function(){if(!this._currentAnimation)return;var a=Math.min(this._getNextAnimationFrame(),this._currentAnimation.frames.length-1),b=!this._currentFrame||this._currentFrameIndex!==a;this._currentFrameIndex=a;if(!this._atLastFrame()||!this._currentAnimation.useExitBranching)this._currentFrame=this._currentAnimation.frames[this._currentFrameIndex];this._draw(),this._playSound(),this._loop=window.setTimeout($.proxy(this._step,this),this._currentFrame.duration),this._endCallback&&b&&this._atLastFrame()&&(this._currentAnimation.useExitBranching&&!this._exiting?this._endCallback(this.currentAnimationName,clippy.Animator.States.WAITING):this._endCallback(this.currentAnimationName,clippy.Animator.States.EXITED))},pause:function(){window.clearTimeout(this._loop)},resume:function(){this._step()}},clippy.Animator.States={WAITING:1,EXITED:0},clippy.Balloon=function(a){this._targetEl=a,this._hidden=!0,this._setup()},clippy.Balloon.prototype={WORD_SPEAK_TIME:200,CLOSE_BALLOON_DELAY:2e3,_setup:function(){this._balloon=$('<div class="clippy-balloon"><div class="clippy-tip"></div><div class="clippy-content"></div></div> ').hide(),this._content=this._balloon.find(".clippy-content"),$(document.body).append(this._balloon)},reposition:function(){var a=["top-left","top-right","bottom-left","bottom-right"];for(var b=0;b<a.length;b++){var c=a[b];this._position(c);if(!this._isOut())break}},_BALLOON_MARGIN:15,_position:function(a){var b=this._targetEl.offset(),c=this._targetEl.height(),d=this._targetEl.width(),e=this._balloon.outerHeight(),f=this._balloon.outerWidth();this._balloon.removeClass("clippy-top-left"),this._balloon.removeClass("clippy-top-right"),this._balloon.removeClass("clippy-bottom-right"),this._balloon.removeClass("clippy-bottom-left");var g,h;switch(a){case"top-left":g=b.left+d-f,h=b.top-e-this._BALLOON_MARGIN;break;case"top-right":g=b.left,h=b.top-e-this._BALLOON_MARGIN;break;case"bottom-right":g=b.left,h=b.top+c+this._BALLOON_MARGIN;break;case"bottom-left":g=b.left+d-f,h=b.top+c+this._BALLOON_MARGIN}this._balloon.css({top:h,left:g}),this._balloon.addClass("clippy-"+a)},_isOut:function(){var a=this._balloon.offset(),b=this._balloon.outerHeight(),c=this._balloon.outerWidth(),d=$(window).width(),e=$(window).height(),f=$(document).scrollTop(),g=$(document).scrollLeft(),h=a.top-f,i=a.left-g,j=5;return h-j<0||i-j<0?!0:h+b+j>e||i+c+j>d?!0:!1},speak:function(a,b,c){this._hidden=!1,this.show();var d=this._content;d.height("auto"),d.width("auto"),d.text(b),d.height(d.height()),d.width(d.width()),d.text(""),this.reposition(),this._complete=a,this._sayWords(b,c,a)},show:function(){if(this._hidden)return;this._balloon.show()},hide:function(a){if(a){this._balloon.hide();return}this._hiding=window.setTimeout($.proxy(this._finishHideBalloon,this),this.CLOSE_BALLOON_DELAY)},_finishHideBalloon:function(){if(this._active)return;this._balloon.hide(),this._hidden=!0,this._hiding=null},_sayWords:function(a,b,c){this._active=!0,this._hold=b;var d=a.split(/[^\S-]/),e=this.WORD_SPEAK_TIME,f=this._content,g=1;this._addWord=$.proxy(function(){if(!this._active)return;g>d.length?(this._active=!1,this._hold||(c(),this.hide())):(f.text(d.slice(0,g).join(" ")),g++,this._loop=window.setTimeout($.proxy(this._addWord,this),e))},this),this._addWord()},close:function(){this._active?this._hold=!1:this._hold&&this._complete()},pause:function(){window.clearTimeout(this._loop),this._hiding&&(window.clearTimeout(this._hiding),this._hiding=null)},resume:function(){this._addWord&&this._addWord(),this._hiding=window.setTimeout($.proxy(this._finishHideBalloon,this),this.CLOSE_BALLOON_DELAY)}},clippy.BASE_PATH="https://s3.amazonaws.com/clippy.js/Agents/",clippy.load=function(a,b,c){var d=clippy.BASE_PATH+a,e=clippy.load._loadMap(d),f=clippy.load._loadAgent(a,d),g=clippy.load._loadSounds(a,d),h;f.done(function(a){h=a});var i;g.done(function(a){i=a});var j=function(){var a=new clippy.Agent(d,h,i);b(a)};$.when(e,f,g).done(j).fail(c)},clippy.load._maps={},clippy.load._loadMap=function(a){var b=clippy.load._maps[a];if(b)return b;b=clippy.load._maps[a]=$.Deferred();var c=a+"/map.png",d=new Image;return d.onload=b.resolve,d.onerror=b.reject,d.setAttribute("src",c),b.promise()},clippy.load._sounds={},clippy.load._loadSounds=function(a,b){var c=clippy.load._sounds[a];if(c)return c;c=clippy.load._sounds[a]=$.Deferred();var d=document.createElement("audio"),e=!!d.canPlayType&&""!=d.canPlayType("audio/mpeg"),f=!!d.canPlayType&&""!=d.canPlayType('audio/ogg; codecs="vorbis"');if(!e&&!f)c.resolve({});else{var g=b+(e?"/sounds-mp3.js":"/sounds-ogg.js");clippy.load._loadScript(g)}return c.promise()},clippy.load._data={},clippy.load._loadAgent=function(a,b){var c=clippy.load._data[a];if(c)return c;c=clippy.load._getAgentDfd(a);var d=b+"/agent.js";return clippy.load._loadScript(d),c.promise()},clippy.load._loadScript=function(a){var b=document.createElement("script");b.setAttribute("src",a),b.setAttribute("async","async"),b.setAttribute("type","text/javascript"),document.head.appendChild(b)},clippy.load._getAgentDfd=function(a){var b=clippy.load._data[a];return b||(b=clippy.load._data[a]=$.Deferred()),b},clippy.ready=function(a,b){var c=clippy.load._getAgentDfd(a);c.resolve(b)},clippy.soundsReady=function(a,b){var c=clippy.load._sounds[a];c||(c=clippy.load._sounds[a]=$.Deferred()),c.resolve(b)},clippy.Queue=function(a){this._queue=[],this._onEmptyCallback=a},clippy.Queue.prototype={queue:function(a){this._queue.push(a),this._queue.length===1&&!this._active&&this._progressQueue()},_progressQueue:function(){if(!this._queue.length){this._onEmptyCallback();return}var a=this._queue.shift();this._active=!0;var b=$.proxy(this.next,this);a(b)},clear:function(){this._queue=[]},next:function(){this._active=!1,this._progressQueue()}}
// prettify
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
    [],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
    f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
    (j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
    t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
    "string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
    q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
    q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
    "");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
    a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
    for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
    m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
    a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
    j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
        "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
    H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
    J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
        I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
    ["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
    /^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
    ["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
    hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
    !k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
    250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
    PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
$(prettyPrint);
// show case
/*****
 * @fileOverview Clippy showcase and sampler
 *
 *****/

/******
 * Clippy showcase and sampler
 *
 * @constructor
 */
clippy.Showcase = function (el) {

    this._el = el;

    /***
     *
     * @type {jQuery.Deferred}
     * @private
     */
    this._agentDfd = null;

    this._agentEls = this._el.find('.characters a');
    this._setupEvents();
};

clippy.Showcase.prototype = {

    _setupEvents:function () {
        this._agentEls.click($.proxy(this._onAgentClick, this));
        this._el.find('.actions').delegate('a', 'click', $.proxy(this._onActionClicked, this));

        $('.run-example').click($.proxy(this._onRunExampleClick, this));
    },

    _onAgentClick:function (e) {
        var el = $(e.currentTarget);
        var name = el.data('item');
        if (!name) return;
        this.switchAgent(name);
    },

    _onActionClicked:function (e) {
        var el = $(e.currentTarget);
        if (el.hasClass('disabled')) return;
        var id = el.data('id');
        if (!id) return;

        el.siblings().addClass('disabled');
        el.addClass('active');
        this.play(id, function () {
            el.removeClass('active');
            $('.actions a').removeClass('disabled');
        });
    },

    switchAgent:function (newAgent) {
        // remove current loading
        this._agentEls.removeClass('active');
        this._agentEls.removeClass('loading');
        this._agentName = newAgent;

        this._getAgentEl(newAgent).addClass('active')
            .addClass('loading');

        $('.run-example').hide();
        this._clearActions();
        this._el.addClass('loading');


        if (this._agentDfd && this._agentDfd.isResolved()) {
            var dfd = $.Deferred();
            this.agent($.proxy(function (agent) {
                agent.hide(false, $.proxy(function () {
                    this._switchAgentInternal(newAgent).done(dfd.resolve);
                }, this))
            }, this));

            return dfd.promise();
        }

        return this._switchAgentInternal(newAgent);
    },

    _switchAgentInternal:function (newAgent) {

        this._agentDfd = $.Deferred();
        clippy.load(newAgent, $.proxy(this._onAgentReady, this));
        return this._agentDfd.promise();
    },

    _onAgentReady:function (agent) {
        this._agentDfd.resolve(agent);
        agent.show();
        this._getAgentEl(this._agentName).removeClass('loading');
        this._setupActions(agent);
        this._el.removeClass('loading');
        $('.run-example').show();
    },

    _getAgentEl:function (name) {
        return this._agentEls.filter('[data-item=' + name + ']');
    },

    _clearActions:function () {
        $('.actions-content').html('<span class="loading">Loading...</span> ');
    },

    _setupActions:function (agent) {
        var content = '';
        var animations = agent.animations().sort();

        for (var i = 0; i < animations.length; i++) {
            var a = animations[i];
            content += '<a class="action no-select" contenteditable="false" data-id="' + a + '">' + a + '</a>';
        }

        $('.actions-content').html(content);
    },

    play:function (animation, callback) {
        this.agent(function (a) {
            a.stop();
            a.play(animation, undefined, callback);
        })
    },

    speak:function (text) {
        this.agent(function (a) {
            a.speak(text);
        })
    },

    agent:function (func) {
        if (!this._agentDfd) return;
        var dfd = this._agentDfd;
        if ($.isFunction(func) && dfd) {
            dfd.done(func);
        }
        return dfd.promise();
    },

    isReady:function () {
        return this._agentDfd && this._agentDfd.isResolved && this._agentDfd.isResolved();
    },


    _onRunExampleClick:function (e) {
        var el = $(e.currentTarget);
        var key = el.data('key');
        if (!key) return;
        var f = this._exampleFuncs[key];
        if (!f) return;

        this.agent($.proxy(f, this));
    },


    _exampleFuncs:{
        play:function (agent) {
            agent.stop();
            agent.play('Searching');
        },

        animate:function (agent) {
            agent.stop();
            agent.animate();
        },

        speak:function (agent) {
            agent.speak('When all else fails, bind some paper together. My name is Clippy.');
        },

        moveTo:function (agent) {
            agent.stop();
            agent.moveTo(100, 100);
        },

        gestureAt:function (agent) {
            agent.stop();
            agent.gestureAt(200, 200);
        },

        stopCurrent:function (agent) {
            agent.stopCurrent();
        },


        stop:function (agent) {
            agent.stop();
        }

    }
};

$(function () {
    var content = $('.document-scroller');
    var leftRuler = $('.left-ruler');
    var overallSize = 45;

    var _getHSum = function () {
        var sum = 0;
        $('.h-count:visible').each(function () {
            sum += $(this).outerHeight();
        });
        return sum;
    };

    var _resize = function () {
        var screenH = $(window).height();
        var h = screenH - _getHSum() - overallSize;
        content.height(h);
        leftRuler.height(h);
    };

    $(window).on('resize', _resize);


    _resize();

    // setup showcase
    var showCase = new clippy.Showcase($('.element-demo'));
    showCase.switchAgent('Clippy');

    $('.toolbar a').on('mousedown', function (e) {
        var el = $(e.currentTarget);
        var cmd = el.data('cmd');
        if (!cmd) return;
        e.preventDefault();
        try {
            document.execCommand(cmd, false, null);
        } catch (e) {
        }
    });


    var url = 'http://www.smore.com/clippy-js';
    // twitter counter
    $.ajax('//cdn.api.twitter.com/1/urls/count.json', {data:{url:url},
        dataType:'jsonp',
        success:function (data) {
            $('#tweet-count').html(data['count'] || '0');
        }
    });

    // facebook counter
    $.ajax('//graph.facebook.com/' + url,{
        dataType:'jsonp',
        success:function (data) {
            var likes = data['likes'] || 0;
            var shares = data['shares'] || 0;

            $('#fb-count').html((likes + shares) || '0');
        }
    });

    if(/Firefox/.test(navigator.userAgent)){
        $('.document-wrap').removeAttr('contenteditable');
    }
});
