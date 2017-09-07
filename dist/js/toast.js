(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("toast", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["toast"] = factory(require("Vue"));
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["toast"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__toast_vue__);





const ToastConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__toast_vue___default.a);
let toastPool = [];

let getInstance = () => {
  if (toastPool.length) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

let addInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = el => {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

ToastConstructor.prototype.hide = function (callback) {
  this.shown = false;
  removeDom(this.$el);
  this.closed = true;
  addInstance(this);
  callback && callback();
};

let setOptions = options => {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  return options || {};
};

const show = options => {
  let instance = getInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.timer = null;

  instance.message = options.message || '';
  instance.duration = typeof options.duration === 'number' && options.duration > 0 ? options.duration : 3000;
  instance.type = options.type || 'info';
  instance.position = options.position || 'middle';
  instance.callback = options.callback || null;

  document.body.appendChild(instance.$el);

  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
    instance.shown = true;

    instance.timer = setTimeout(function () {
      if (instance.closed) {
        return;
      }
      instance.hide(options.callback);
    }, instance.duration);
  });

  return instance;
};

const info = function (options) {
  options = setOptions(options);
  options = Object.assign({ type: 'info' }, options);
  return show(options);
};
const success = function (options) {
  options = setOptions(options);
  options = Object.assign({ type: 'success', position: 'top' }, options);
  return show(options);
};
const error = function (options) {
  options = setOptions(options);
  options = Object.assign({ type: 'error' }, options);
  return show(options);
};

const Toast = {
  info: info,
  success: success,
  error: error
};

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-321b8c3c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    data() {
        return {
            shown: false
        };
    },
    props: {
        message: String,
        type: {
            type: String,
            default: 'info' //info/success/error
        },
        duration: {
            type: Number,
            default: 3000
        },
        className: [String, Array],
        position: {
            type: String,
            default: 'middle'
        },
        callback: Function
    },

    computed: {
        toastClass() {
            var classes = [];
            let className = this.className;

            if (className) {
                if (typeof className === 'string') {
                    classes.push(className);
                }
                if (Array.isArray(className)) {
                    classes = classes.concat(className);
                }
            }
            return classes.join(' ');
        }
    }

});

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown),
      expression: "shown"
    }],
    staticClass: "toast-mask",
    class: {
      'from-top': _vm.position == 'top'
    }
  }, [_c('transition', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown && _vm.position == 'middle'),
      expression: "shown && position=='middle'"
    }],
    staticClass: "toast",
    class: _vm.toastClass
  }, [(_vm.type != 'info') ? _c('i', {
    class: ['toast-icon', 'icon-' + _vm.type]
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "toast-message",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "toast-top"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown && _vm.position == 'top'),
      expression: "shown && position=='top'"
    }],
    staticClass: "toast toast-top",
    class: _vm.toastClass,
    style: ({
      'padding-left': _vm.type == 'info' ? '20px' : '50px'
    })
  }, [(_vm.type != 'info') ? _c('i', {
    class: ['toast-icon', 'icon-' + _vm.type]
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "toast-message",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])])], 1)
},staticRenderFns: []}

/***/ })

/******/ });
});
//# sourceMappingURL=../maps/js/toast.js.map