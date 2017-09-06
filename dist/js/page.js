(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("page", [], factory);
	else if(typeof exports === 'object')
		exports["page"] = factory();
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["page"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-2af0e230",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/header/src/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2af0e230", Component.options)
  } else {
    hotAPI.reload("data-v-2af0e230", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	name: 'my-header',
	methods: {
		btnLeftMenu: function (e) {
			console.log('click header left menu');
			this.$emit('btnleftmenu', e);
		},
		btnRightMenu: function (e) {
			console.log('click header right menu');
			this.$emit('btnrightmenu', e);
		}
	},
	data: function () {
		return {
			nopad: false
		};
	},
	mounted: function () {
		if (!/ipad|iphone|mac/i.test(navigator.userAgent.toLowerCase())) {
			this.nopad = true;
		}
	},
	props: {
		rightMenuTitle: { default: "", type: String },
		leftMenuTitle: { default: "", type: String },
		leftBtn: { default: "close", type: String },
		rightBtn: { default: "service", type: String },
		title: { default: "标题", type: String }
	}
};

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_vue__);



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__header_vue___default.a);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-row flex-main-center flex-cross-center",
    attrs: {
      "id": "nn-header",
      "nopad": _vm.nopad
    }
  }, [_c('div', {
    staticClass: "flex-row flex-main-center flex-cross-center",
    attrs: {
      "id": "nav-left-btn",
      "left": ""
    },
    on: {
      "click": _vm.btnLeftMenu
    }
  }, [(_vm.leftBtn == 'close') ? _c('i', [_c('svg', {
    attrs: {
      "id": "icon-close",
      "viewBox": "0 0 10 10",
      "width": "20",
      "height": "20",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1"
    }
  }, [_c('line', {
    attrs: {
      "x1": "1",
      "y1": "1",
      "x2": "8",
      "y2": "8"
    }
  }), _vm._v(" "), _c('line', {
    attrs: {
      "x1": "1",
      "y1": "8",
      "x2": "8",
      "y2": "1"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.leftBtn == 'back') ? _c('i', [_c('svg', {
    attrs: {
      "id": "icon-left",
      "viewBox": "0 0 10.63 18.42",
      "width": "10.63",
      "height": "18.42",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1"
    }
  }, [_c('line', {
    attrs: {
      "x1": "1",
      "y1": "9.71",
      "x2": "10.63",
      "y2": "1"
    }
  }), _vm._v(" "), _c('line', {
    attrs: {
      "x1": "1",
      "y1": "9.21",
      "x2": "10.63",
      "y2": "18.42"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.leftBtn == 'title') ? _c('i', [_vm._v("\n\t\t\t" + _vm._s(_vm.leftMenuTitle) + "\n\t\t")]) : _vm._e()]), _vm._v(" "), _c('span', {
    attrs: {
      "id": "title"
    }
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "flex-row flex-main-center flex-cross-center",
    attrs: {
      "id": "nav-right-btn",
      "right": ""
    },
    on: {
      "click": _vm.btnRightMenu
    }
  }, [(_vm.rightBtn == 'service') ? _c('i', {
    attrs: {
      "service": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.rightBtn == 'title') ? _c('i', {
    attrs: {
      "id": "rightTitle"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.rightMenuTitle) + "\n\t\t")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2af0e230", module.exports)
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-fb0d6930",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/page/src/page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb0d6930", Component.options)
  } else {
    hotAPI.reload("data-v-fb0d6930", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_src_header_js__ = __webpack_require__(33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


module.exports = {
	name: 'mz-page',
	methods: {
		btnLeftMenu: function (e) {
			this.$emit('onleft', e);
		},
		btnRightMenu: function (e) {
			this.$emit('onright', e);
		},
		afterLeave: function (e) {
			this.$emit('onleave', e);
		},
		openPage: function () {
			this.nnViewSwitch.all = true;
			this.nnViewSwitch.nav = true;
			this.nnViewSwitch.content = true;
			this.nnViewSwitch.loading = true;
			this.nnViewSwitch.pageMask = false;
		}
	},
	data: function () {
		return {};
	},
	mounted: function () {
		var self = this;
		// self.nnViewSwitch.loading=false;
		// this.nnViewSwitch.pageMask =true;

		var header = document.getElementById('header');
		var content = document.getElementById('content-background');
		var footer = document.getElementById('footer');
		if (header) {
			content.setAttribute('header', '');
		}
		if (footer) {
			content.setAttribute('footer', '');
		}
	},
	components: {
		myHeader: __WEBPACK_IMPORTED_MODULE_0__header_src_header_js__["default"]
	},
	props: {
		nav: {
			default: function () {
				return {
					leftBtn: "back",
					rightBtn: "service",
					title: "标题栏",
					leftTitle: "",
					rightTitle: ""
				};
			}
		},

		nnViewSwitch: {
			default: function () {
				return {
					pageMask: false,
					navmask: false,
					all: false,
					nav: false,
					content: false,
					loading: true
				};
			},
			type: Object
		}

	}
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(32)(module)))

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_vue__);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__page_vue___default.a);

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.all),
      expression: "nnViewSwitch.all"
    }],
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "display": "none"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.pageMask),
      expression: "nnViewSwitch.pageMask"
    }],
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "pageMask"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "alpha"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.nav),
      expression: "nnViewSwitch.nav"
    }],
    attrs: {
      "id": "header"
    }
  }, [_c('transition', {
    attrs: {
      "name": "alpha"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.navmask),
      expression: "nnViewSwitch.navmask"
    }],
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "navmask"
    }
  })]), _vm._v(" "), _c('my-header', {
    attrs: {
      "title": _vm.nav.title,
      "left-btn": _vm.nav.leftBtn,
      "right-btn": _vm.nav.rightBtn,
      "right-menu-title": _vm.nav.rightTitle,
      "left-menu-title": _vm.nav.leftTitle
    },
    on: {
      "btnleftmenu": _vm.btnLeftMenu,
      "btnrightmenu": _vm.btnRightMenu
    }
  })], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.content),
      expression: "nnViewSwitch.content"
    }],
    attrs: {
      "id": "content-background"
    }
  }, [_c('div', {
    staticClass: "touch-scroll",
    attrs: {
      "id": "content"
    }
  }, [_c('transition', {
    attrs: {
      "appear": "",
      "name": "alpha"
    },
    on: {
      "after-leave": _vm.afterLeave
    }
  }, [_c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nnViewSwitch.loading),
      expression: "nnViewSwitch.loading"
    }],
    staticClass: "flex-row flex-main-center flex-cross-center",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "id": "viewLoading"
    }
  }, [_c('iframe', {
    staticStyle: {
      "width": "30px",
      "height": "30px"
    },
    attrs: {
      "src": "resource/loading.svg"
    }
  })])]), _vm._v(" "), _vm._t("default")], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb0d6930", module.exports)
  }
}

/***/ })

/******/ });
});