!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define("actionSheet",["Vue"],t):"object"==typeof exports?exports.actionSheet=t(require("Vue")):(e.mzui=e.mzui||{},e.mzui.actionSheet=t(e.Vue))}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}({0:function(e,t){e.exports=function(e,t,n,o){var i,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,s=e.default);var c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),o){var a=Object.create(c.computed||null);Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}}),c.computed=a}return{esModule:i,exports:s,options:c}}},1:function(t,n){t.exports=e},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=o(i),r=n(18),c=o(r),a=s.default.extend(c.default),u=[],l=function(){if(u.length){var e=u[0];return u.splice(0,1),e}return new a({el:document.createElement("div")})},f=function(e){e&&u.push(e)},d=function(e){e.parentNode&&e.parentNode.removeChild(e)};a.prototype.hide=function(e){this.shown=!1,d(this.$el),this.closed=!0,f(this),e&&e()};var p=function(e){return"string"==typeof e&&(e={message:e}),e||{}},h=function(e){e=p(e),e=Object.assign({type:"info"},e);var t=l();return t.shown=!0,t.title=e.title||"标题",t.cancelText=e.cancelText||"",t.actions=e.actions||null,t.position=e.position||"middle",document.body.appendChild(t.$el),t},v={show:h};t.default=v},18:function(e,t,n){n(37);var o=n(0)(n(25),n(44),"data-v-56151266",null);e.exports=o.exports},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{shown:!1,title:"描述说明",cancelText:"取消"}},methods:{handleCancel:function(){this.shown=!1},handleAction:function(e){(0,this.actions[e].action)(),this.shown=!1},closeOnClickModal:function(e){"actionSheet-mask"==e.target.className&&(this.shown=!1)}},props:{}}},37:function(e,t){},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"actionSheet-mask",on:{click:e.closeOnClickModal}},[n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"toast",class:e.toastClass},[n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e._l(e.actions,function(t,o){return n("div",{staticClass:"action"},[n("div",{on:{click:function(t){t.stopPropagation(),e.handleAction(o)}}},[e._v(e._s(t.text))])])}),e._v(" "),""!=e.cancelText?n("div",{staticClass:"cancel",domProps:{innerHTML:e._s(e.cancelText)},on:{click:function(t){t.stopPropagation(),e.shown=!e.shown}}}):e._e()],2)])],1)])},staticRenderFns:[]}}})});
//# sourceMappingURL=../maps/actionSheet/index.js.map