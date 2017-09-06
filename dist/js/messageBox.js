(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("messageBox", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["messageBox"] = factory(require("Vue"));
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["messageBox"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messagebox_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messagebox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__messagebox_vue__);





const messageboxConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__messagebox_vue___default.a);

let instance = null;

let getInstance = () => {
  if (instance) {
    return instance;
  }
  return new messageboxConstructor({
    el: document.createElement('div')
  });
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
  instance = getInstance();
  instance.message = options.message || '';
  instance.title = options.title || '';
  instance.type = options.type || 'alert';
  instance.showTitle = options.showTitle || true;
  instance.btnOk = options.btnOk;
  instance.btnCancel = options.btnCancel;
  instance.cancelButtonText = options.cancelButtonText || '取消';
  instance.confirmButtonText = options.confirmButtonText || '确认';

  switch (instance.type) {
    case 'alert':
      instance.showCancelButton = false;
      instance.showConfirmButton = true;
      break;
    case 'confirm':
      instance.showCancelButton = true;
      instance.showConfirmButton = true;
      break;
    default:
  };
  instance.shown = true;
  document.body.appendChild(instance.$el);
  return instance;
};

const alert = function (options) {
  options = setOptions(options);
  options = Object.assign({ type: 'alert' }, options);
  return show(options);
};

const confirm = function (options) {
  options = setOptions(options);
  options = Object.assign({ type: 'confirm' }, options);
  return show(options);
};

const Messagebox = {
  alert: alert,
  confirm: confirm
};

/* harmony default export */ __webpack_exports__["default"] = (Messagebox);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-baca44b0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/messageBox/src/messagebox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] messagebox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-baca44b0", Component.options)
  } else {
    hotAPI.reload("data-v-baca44b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
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
      showTitle: true,

      confirmButtonText: '',
      cancelButtonText: '',
      title: '',
      messageClass: '',
      message: '',

      showDelete: false,
      showCancelButton: false,
      showConfirmButton: false,
      btnOk: null,
      btnCancel: null

    };
  },
  methods: {
    hide: function () {
      this.shown = false;
    },
    show: function () {
      this.shown = true;
    },
    // closeOnClickModal: function(e) {

    //   var target=e.target.className;
    //    if(target=='messagebox-mask'){
    //     this.shown=false;
    //    }

    // },
    handleCancel: function (event) {
      console.log('confirmEvent');
      if (this.btnCancel) {
        this.hide();
        this.btnCancel();
      } else {
        this.shown = false;
      }
    },
    handleConfirm: function (event) {
      console.log('confirmEvent');
      if (this.btnOk) {
        this.hide();
        this.btnOk();
      } else {
        this.shown = false;
      }
    },
    handleClose: function () {
      this.shown = false;
    }

  },
  props: {},

  computed: {}

});

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
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
    staticClass: "messagebox-mask"
  }, [_c('transition', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shown),
      expression: "shown"
    }],
    staticClass: "toast",
    class: _vm.messageClass
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTitle),
      expression: "showTitle"
    }],
    staticClass: "title ",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDelete),
      expression: "showDelete"
    }],
    staticClass: "delete",
    on: {
      "click": _vm.handleClose
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "message",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCancelButton || _vm.showConfirmButton),
      expression: "showCancelButton || showConfirmButton"
    }],
    staticClass: "btn-group"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCancelButton),
      expression: "showCancelButton"
    }],
    staticClass: "cancel col-5",
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v(_vm._s(_vm.cancelButtonText))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showConfirmButton),
      expression: "showConfirmButton"
    }],
    staticClass: "sure col-5",
    on: {
      "click": _vm.handleConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmButtonText))])])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-baca44b0", module.exports)
  }
}

/***/ })

/******/ });
});