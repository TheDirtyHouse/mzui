(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("popupInput", [], factory);
	else if(typeof exports === 'object')
		exports["popupInput"] = factory();
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["popupInput"] = factory();
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

/***/ 10:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    class: {
      'nolabel': !_vm.label
    }
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "border flex-row"
  }, [(_vm.label) ? _c('label', {
    attrs: {
      "for": ""
    },
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.wrap) ? _c('textarea', {
    staticClass: "flex-auto",
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.onInput($event.target.value)
      }
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.wrap) ? _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: (_vm.focused),
      expression: "focused"
    }],
    staticClass: "flex-auto",
    attrs: {
      "type": _vm.innerType,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.onInput($event.target.value)
      },
      "blur": function($event) {
        _vm.onblur($event)
      },
      "keyup": function($event) {
        _vm.onkeyUp($event.target.value)
      },
      "focus": function($event) {
        _vm.onfocus($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "icons flex-row flex-cross-center"
  }, [(!_vm.wrap && _vm.isFocused && _vm.value) ? _c('i', {
    staticClass: "icon icon-clear",
    on: {
      "mousedown": function($event) {
        _vm.clear()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isPassword) ? _c('i', {
    staticClass: "icon icon-eye",
    class: {
      'icon-eye-close': _vm.innerType != 'password'
    },
    on: {
      "click": function($event) {
        _vm.toggleType()
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "tips flex-row  flex-cross-center",
    class: {
      'flex-main-end': !_vm.tipContent, 'flex-main-between': _vm.tipContent
    }
  }, [_c('transition', [(_vm.tipContent) ? _c('div', {
    staticClass: "flex-row flex-auto",
    class: {
      'tip-normal': _vm.tipType == 'normal', 'tip-label': _vm.label && _vm.tipContent
    }
  }, [(_vm.tipType == 'error' && _vm.tipContent) ? _c('i', [_vm._v("!")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "flex-auto msg"
  }, [_vm._v(_vm._s(_vm.tipContent))])]) : _vm._e()]), _vm._v(" "), (_vm.tipright) ? _c('p', {
    staticClass: "tips-right",
    on: {
      "click": function($event) {
        _vm.clickTips()
      }
    }
  }, [_vm._v(_vm._s(_vm.tipright))]) : _vm._e()], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    attrs: {
      "btnColor": _vm.btnColor,
      "btnStyle": _vm.btnStyle,
      "loading": _vm.btnLoading,
      "disabled": _vm.btnDisabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.btnLoading),
      expression: "!btnLoading"
    }]
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.btnLoading),
      expression: "btnLoading"
    }]
  }, [_c('iframe', {
    staticStyle: {
      "width": "30px",
      "height": "30px"
    },
    attrs: {
      "src": "resource/loading-white.svg"
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__button_vue__);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__button_vue___default.a);

// const oComponent = Vue.extend(component);
// let getInstance = () => {
//   var tar = new oComponent({
//     el: document.createElement('div')
//   });
//   document.body.appendChild(tar.$el);
//   return tar;
// };

// util.add(1,2);
// util.add(1,8);

// if(webpack.env){
// 	console.log("haha");
// }else{
// 	console.log('bbbb2');
// }

// export default getInstance();

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__input_vue__);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__input_vue___default.a);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  "data-v-34a39470",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-1f3b1a68",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(66)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-734fc7a6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_src_button_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_src_input_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'mz-pop-input',
	methods: {
		onTips: function () {
			this.$emit('ontips', e);
		},
		setValue: function (value) {
			this.inputvalue = value;
		},
		onPattern: function (isPass) {
			console.log("onPattern:" + isPass);
			this.patternPass = isPass;
		},
		onFocus: function (e) {
			this.$emit('onfocus', e, this.inputvalue);
		},
		onBlur: function (e) {
			this.$emit('onblur', e, this.inputvalue);
		},
		handleClickImgCode: function (e) {
			this.$emit('btnimgcode', e);
		},
		handleClick: function (e) {
			this.$emit('btnok', e, this.inputvalue);
		},
		onInput: function (val) {
			//this.$emit('input',val);
		},
		btnClose: function (e) {
			this.$emit('btnclose', e, this.inputvalue);
		},
		showTips: function (msg, type) {
			this.$refs.inputref.showTips(msg, type);
		}
	},
	components: {
		mzButton: __WEBPACK_IMPORTED_MODULE_0__button_src_button_js__["default"],
		mzInput: __WEBPACK_IMPORTED_MODULE_1__input_src_input_js__["default"]
	},
	data: function () {
		return {
			patternPass: false,
			inputvalue: "",
			show2: false
		};
	},
	props: {

		title: { default: "标题", type: String },
		placeholder: { default: "提示信息", type: String },
		maxlength: { default: "30", type: String },
		errorMsg: { default: "", type: String },
		pattern: { default: "", type: String },
		needLength: { default: "", type: String },
		trace: { default: "text", type: String },
		btnDisabled: { default: false, type: Boolean },
		btnLoading: { default: false, type: Boolean },
		// inputvalue:{default:"",type:String},
		imgSrc: { default: "", type: String },
		type: { default: "normal", type: String },
		btnName: { default: "name", type: String },
		show: { default: false, type: Boolean },
		tipRight: String //输入框右下侧的提示信息

	}
});

/***/ }),

/***/ 6:
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

module.exports = {
	name: 'mz-button',
	methods: {
		handleClick: function (e) {
			this.$emit('onclick', e);
		}
	},
	data: function () {
		return {};
	},
	props: {
		btnDisabled: { default: false, type: Boolean },
		btnColor: { default: "", type: String },
		btnStyle: { default: "", type: String },
		btnLoading: { default: false, type: Boolean }
	}
};

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_input_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__popup_input_vue__);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__popup_input_vue___default.a);

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mz-input',
  data() {
    return {
      isPassword: this.type == 'password' ? true : false,
      innerType: this.type,
      tipContent: this.tipMsg || '',
      isFocused: this.focused,
      tipType: 'normal',
      tipright: this.tipRight || ''
    };
  },
  directives: {
    focus: {
      inserted: function (el, binding) {
        if (binding.value) {
          el.focus();
        }
      },
      componentUpdated: function (el, binding) {
        if (binding.modifiers.lazy) {
          if (Boolean(binding.value) === Boolean(binding.oldValue)) {
            return;
          }
        }
        if (binding.value) {
          el.focus();
        }
      }
    }
  },
  props: {
    wrap: String, //textArea
    label: String, //输入框之前的标题
    type: { //input的type
      type: String,
      default: 'text'
    },
    placeholder: String,
    maxlength: {
      type: String,
      default: '50'
    },
    errorMsg: String, //值正则校验——错误提示
    pattern: String, //值正则校验——正则
    trace: String, //值正则校验——触发点
    needLength: String, //值正则校验——输完即校验的长度
    focused: Boolean, //是否自动聚焦
    disabled: Boolean, //是否不可输入
    required: String, //是否必填
    value: String, //用于v-model绑定输入的值
    tipMsg: String, //输入框左下侧的提示信息
    tipRight: String //输入框右下侧的提示信息
  },
  watch: {
    value: function (val, oldVal) {
      var self = this;
      if (this.pattern && this.trace == 'input') {
        if (val.length >= self.needLength) {
          this.validateInput(this.pattern, val);
        } else {
          this.$emit('onpattern', false);
        }
      }
    }
  },
  methods: {
    showTips: function (msg, type) {
      this.tipType = type || 'error';
      switch (typeof msg) {
        case 'string':
          this.tipContent = msg;
          break;
        case 'object':
          if (msg.left) {
            this.tipContent = msg.left;
          }
          if (msg.right) {
            this.tipright = msg.right;
          }
          break;
      }
    },
    clickTips: function () {
      this.$emit('clicktips');
    },
    onInput: function (value) {
      this.isFocused = true;
      this.$emit('input', value);
      if (this.tipContent && value.length < this.value.length) {
        this.tipContent = '';
      }
    },
    clear: function () {
      this.$emit('input', '');
      this.tipContent = '';
    },
    toggleType: function () {
      this.innerType = this.innerType == 'password' ? 'text' : 'password';
    },
    validateInput: function (pattern, value) {
      pattern = eval(this.pattern);
      if (pattern.test(value)) {
        this.$emit('onpattern', true);
      } else {
        this.tipType = 'error';
        this.tipContent = this.errorMsg;
        this.$emit('onpattern', false);
      }
    },
    onblur: function (e) {
      this.isFocused = false;
      if (this.trace == 'blur' && this.pattern) {
        this.validateInput(this.pattern, e.target.value);
      }
      this.$emit('onblur', e);
    },
    onkeyUp: function (value) {
      if (this.trace == 'keyup' && this.pattern) {
        this.validateInput(this.pattern, value);
      }
    },
    onfocus: function (e) {
      this.isFocused = true;
      this.$emit('onfocus', e);
    }
  }
};

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "mask",
      "enter-active-class": ""
    }
  }, [_c('hgroup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "flex-row flex-main-center flex-cross-center",
    attrs: {
      "id": "pop-bg"
    }
  }, [_c('transition', {
    attrs: {
      "name": "mask"
    }
  }, [_c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    attrs: {
      "id": "mask"
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "alert"
    }
  }, [_c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "flex-col flex-main-center flex-cross-center",
    attrs: {
      "id": "pop-box"
    }
  }, [_c('i', {
    staticClass: "group-close",
    on: {
      "click": _vm.btnClose
    }
  }, [_c('svg', {
    attrs: {
      "id": "icon-close",
      "viewBox": "0 0 10 10",
      "width": "20",
      "height": "20",
      "xmlns": "http://www.w3.org/2000/svg",
      "version": "1.1",
      "stroke": "#C1ABAB"
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
  })])]), _vm._v(" "), _c('hgroup', {
    staticClass: "group-title flex-col flex-main-start flex-cross-center"
  }, [_c('p', {
    attrs: {
      "id": "title"
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('hgroup', {
    staticClass: "group-input flex-auto flex-col flex-cross-center"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type === 'imgcode'),
      expression: "type==='imgcode'"
    }],
    attrs: {
      "id": "imgCode"
    },
    on: {
      "click": _vm.handleClickImgCode
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.imgSrc
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type === 'normal'),
      expression: "type==='normal'"
    }],
    staticStyle: {
      "height": "20px",
      "width": "100%"
    }
  }), _vm._v(" "), _c('mz-input', {
    ref: "inputref",
    attrs: {
      "pattern": _vm.pattern,
      "error-msg": _vm.errorMsg,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "trace": _vm.trace,
      "need-length": _vm.needLength,
      "tip-right": _vm.tipRight
    },
    on: {
      "input": _vm.onInput,
      "onpattern": _vm.onPattern,
      "onblur": _vm.onBlur,
      "onfocus": _vm.onFocus,
      "clicktips": _vm.onTips
    },
    model: {
      value: (_vm.inputvalue),
      callback: function($$v) {
        _vm.inputvalue = $$v
      },
      expression: "inputvalue"
    }
  })], 1), _vm._v(" "), _c('hgroup', {
    staticClass: "group-btn"
  }, [_c('mz-button', {
    attrs: {
      "btn-disabled": _vm.inputvalue.length <= 0 || (_vm.pattern && !_vm.patternPass) || _vm.btnDisabled,
      "btn-loading": _vm.btnLoading
    },
    on: {
      "onclick": _vm.handleClick
    }
  }, [_vm._v(_vm._s(_vm.btnName))])], 1)])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=../maps/js/popupInput.js.map