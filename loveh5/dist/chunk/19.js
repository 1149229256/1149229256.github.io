(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"66":function(n,o,e){"use strict";e.r(o),e.d(o,"taro_canvas_core",(function(){return c}));var i=e(29),c=function(){function t(n){var o=this;Object(i.g)(this,n),this.onLongTap=Object(i.c)(this,"longtap",7),this.nativeProps={},this.onTouchStart=function(){o.timer=setTimeout((function(){o.onLongTap.emit()}),500)},this.onTouchMove=function(){clearTimeout(o.timer)},this.onTouchEnd=function(){clearTimeout(o.timer)}}return t.prototype.render=function(){var n=this.canvasId,o=this.nativeProps;return Object(i.e)("canvas",Object.assign({"canvas-id":n,"style":{"width":"100%","height":"100%"},"onTouchStart":this.onTouchStart,"onTouchMove":this.onTouchMove,"onTouchEnd":this.onTouchEnd},o))},Object.defineProperty(t.prototype,"el",{"get":function get(){return Object(i.d)(this)},"enumerable":!1,"configurable":!0}),t}();c.style="taro-canvas-core{position:relative;display:block;width:300px;height:150px}"}}]);