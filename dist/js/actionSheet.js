(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("actionSheet", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["actionSheet"] = factory(require("Vue"));
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["actionSheet"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionSheet_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actionSheet_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actionSheet_vue__);





const actionSheetConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__actionSheet_vue___default.a);
let actionSheetArr = [];

let getInstance = () => {
  if (actionSheetArr.length) {
    let instance = actionSheetArr[0];
    actionSheetArr.splice(0, 1);
    return instance;
  }
  return new actionSheetConstructor({
    el: document.createElement('div')
  });
};

let addInstance = instance => {
  if (instance) {
    actionSheetArr.push(instance);
  }
};

let removeDom = el => {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

actionSheetConstructor.prototype.hide = function (callback) {
  this.shown = false;
  removeDom(this.$el);
  // this.$el.addEventListener('transitionend', removeDom);
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
  options = setOptions(options);
  options = Object.assign({ type: 'info' }, options);

  let instance = getInstance();
  instance.shown = true;
  instance.title = options.title || '标题';
  instance.cancelText = options.cancelText || '';
  instance.actions = options.actions || null;
  instance.position = options.position || 'middle';

  document.body.appendChild(instance.$el);

  return instance;
};

const ActionSheet = {
  show: show
};

/* harmony default export */ __webpack_exports__["default"] = (ActionSheet);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-56151266",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/actionSheet/src/actionSheet.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] actionSheet.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56151266", Component.options)
  } else {
    hotAPI.reload("data-v-56151266", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 25:
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

/* harmony default export */ __webpack_exports__["default"] = ({

  data() {
    return {
      shown: false,
      title: '描述说明',
      cancelText: '取消'
      // actions:Array,

      // handleCancel:null,
    };
  },
  methods: {

    handleCancel: function () {
      this.shown = false;
    },
    handleAction: function (index) {
      var action = this.actions[index].action;
      action();
      this.shown = false;
    },
    closeOnClickModal: function (e) {

      var target = e.target.className;
      if (target == 'actionSheet-mask') {
        this.shown = false;
      }
    }
  },
  props: {}

});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown),
      expression: "shown"
    }],
    staticClass: "actionSheet-mask",
    on: {
      "click": _vm.closeOnClickModal
    }
  }, [_c('transition', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown),
      expression: "shown"
    }],
    staticClass: "toast",
    class: _vm.toastClass
  }, [_c('div', {
    staticClass: "title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _vm._l((_vm.actions), function(item, index) {
    return _c('div', {
      staticClass: "action"
    }, [_c('div', {
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.handleAction(index)
        }
      }
    }, [_vm._v(_vm._s(item.text))])])
  }), _vm._v(" "), (_vm.cancelText != "") ? _c('div', {
    staticClass: "cancel",
    domProps: {
      "innerHTML": _vm._s(_vm.cancelText)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.shown = !_vm.shown
      }
    }
  }) : _vm._e()], 2)])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56151266", module.exports)
  }
}

/***/ })

/******/ });
});