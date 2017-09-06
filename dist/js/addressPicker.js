(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("addressPicker", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["addressPicker"] = factory(require("Vue"));
	else
		root["mzui"] = root["mzui"] || {}, root["mzui"]["addressPicker"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-7bfb2681",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/addressPicker/src/address-picker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] address-picker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bfb2681", Component.options)
  } else {
    hotAPI.reload("data-v-7bfb2681", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__address_js__);
//
//
//
//
//
//
//
//
//
//
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
  name: 'address-picker',

  data() {
    return {
      shown: false,
      options: {
        title: "选择城市",
        cancelText: "取消",
        sureText: "确认"
      },
      province: [],
      city: [],
      provinceList: __WEBPACK_IMPORTED_MODULE_1__address_js___default.a.area,
      cityList: [{
        "areaCode": "",
        "parentCode": "",
        "areaName": "",
        "level": ""
      }]
    };
  },
  computed: {
    cityList: function () {
      return this.province;
    }
  },
  watch: {
    province: function (val, oldVal) {
      this.cityList = val.city;
      this.city = this.cityList[0];
    }
  },
  methods: {
    setOpts: function (opts) {
      switch (typeof opts) {
        case 'string':
          this.options.title = opts;
          break;
        case 'object':
          Object.assign(this.options, opts);
          break;
      }
    },
    show: function (opts) {
      this.shown = true;
      this.setOpts(opts);
    },
    hide: function (opts) {
      this.shown = false;
    },

    btnCancel: function () {
      var action = this.options.btnCancel;
      action(this.province, this.city);
      this.shown = false;
    },
    btnSure: function () {
      var action = this.options.btnSure;
      action(this.province, this.city);
      this.shown = false;
    },
    closeOnClickModal: function (e) {

      var target = e.target.className;
      if (target == 'actionSheet-mask') {
        this.shown = false;
      }
    }
  },

  components: {
    picker: __WEBPACK_IMPORTED_MODULE_0__picker_vue___default.a
  }
});

/***/ }),

/***/ 54:
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

module.exports = {
  name: 'picker',
  data() {
    return {
      spin: { start: -9, end: 9, branch: 9 },
      finger: { startY: 0, lastY: 0, startTime: 0, lastTime: 0, transformY: 0 }

    };
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'line'
    },
    value: {}
  },
  computed: {
    renderData() {
      let temp = [];
      for (let k = this.spin.start; k <= this.spin.end; k++) {
        let data = {
          value: this.getSpinData(k).areaName,
          index: k
        };
        temp.push(data);
      }
      return temp;
    }
  },
  mounted() {
    /* 事件绑定 */
    this.$el.addEventListener('touchstart', this.itemTouchStart);
    this.$el.addEventListener('touchmove', this.itemTouchMove);
    this.$el.addEventListener('touchend', this.itemTouchEnd);
    /* 初始化状态 */
    let index = this.listData.indexOf(this.value);
    if (index === -1) {
      console.warn('当前初始值不存在，请检查后listData范围！！');
      this.setListTransform();
      this.getPickValue(0);
    } else {
      let move = index * 43;
      /* 因为往上滑动所以是负 */
      this.setStyle(-move);
      this.setListTransform(-move, -move);
    }
  },
  methods: {
    /* 根据type 控制滚轮显示效果 */
    setHidden(index) {
      if (this.type === 'line') {
        return index < 0 || index > this.listData.length - 1;
      } else {
        return false;
      }
    },
    setWheelItemDeg(index) {
      return {
        transform: `rotate3d(1, 0, 0, ${-index * 20 % 360}deg) translate3d(0px, 0px, 100px)`
      };
    },
    setWheelDeg(updateDeg, type, time = 1000) {
      if (type === 'end') {
        this.$refs.wheel.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$refs.wheel.style.webkitTransform = `rotate3d(1, 0, 0, ${updateDeg}deg)`;
      } else {
        this.$refs.wheel.style.webkitTransition = '';
        this.$refs.wheel.style.webkitTransform = `rotate3d(1, 0, 0, ${updateDeg}deg)`;
      }
    },
    setListTransform(translateY = 0, marginTop = 0, type, time = 1000) {
      if (type === 'end') {
        this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$refs.list.style.webkitTransform = `translateY(${translateY - this.spin.branch * 43}px)`;
        this.$refs.list.style.marginTop = `${-marginTop}px`;
        this.$refs.list.setAttribute('scroll', translateY);
      } else {
        this.$refs.list.style.webkitTransition = '';
        this.$refs.list.style.webkitTransform = `translateY(${translateY - this.spin.branch * 43}px)`;
        this.$refs.list.style.marginTop = `${-marginTop}px`;
        this.$refs.list.setAttribute('scroll', translateY);
      }
    },
    itemTouchStart(event) {

      let finger = event.changedTouches[0];
      this.finger.startY = finger.pageY;
      this.finger.startTime = event.timestamp || Date.now();
      this.finger.transformY = this.$refs.list.getAttribute('scroll');
      event.preventDefault();
    },
    itemTouchMove(event) {
      let finger = event.changedTouches[0];
      this.finger.lastY = finger.pageY;
      this.finger.lastTime = event.timestamp || Date.now();
      /* 设置css */
      let move = this.finger.lastY - this.finger.startY;
      this.setStyle(move);
      event.preventDefault();
    },
    itemTouchEnd(event) {
      let finger = event.changedTouches[0];
      this.finger.lastY = finger.pageY;
      this.finger.lastTime = event.timestamp || Date.now();
      let move = this.finger.lastY - this.finger.startY;
      /* 计算速度 */
      /* 速度计算说明
       * 当时间小于300毫秒 最后的移动距离等于 move + 减速运动距离
       * */
      let time = this.finger.lastTime - this.finger.startTime;
      let v = move / time;
      /* 减速加速度a */
      let a = 1.8;
      /* 设置css */
      if (time <= 300) {
        move = v * a * time;
        time = 1000 + time * a;
        this.setStyle(move, 'end', time);
      } else {
        this.setStyle(move, 'end');
      }
    },
    /* 设置css */
    setStyle(move, type, time) {
      const singleHeight = 43;
      const deg = 20;
      const singleDeg = deg / singleHeight;
      let currentListMove = this.finger.transformY;
      let updateMove = move + Number(currentListMove);
      /* 根据滚轮类型 line or cycle 判断 updateMove最大距离 */
      if (this.type === 'line') {
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(this.listData.length - 1) * singleHeight) {
          updateMove = -(this.listData.length - 1) * singleHeight;
        }
      }
      let updateDeg = -updateMove * singleDeg;
      let spinAim = Math.round(updateDeg / 20);
      let margin = Math.round(updateMove / singleHeight) * singleHeight; // 如果不这么写 会导致没有滚动效果
      /* 计算touchEnd移动的整数距离 */
      let endMove = margin;
      let endDeg = Math.round(updateDeg / deg) * deg;
      if (type === 'end') {
        this.setListTransform(endMove, margin, type, time);
        this.setWheelDeg(endDeg, type, time);
        /* 设置$emit 延迟 */
        setTimeout(() => this.getPickValue(endMove), 200);
      } else {
        this.setListTransform(updateMove, margin);
        this.setWheelDeg(updateDeg);
      }
      this.updateSpin(spinAim);
    },
    /* 更新spin */
    updateSpin(spinAim) {
      this.spin.start = this.spin.branch * -1 + spinAim;
      this.spin.end = this.spin.start + this.spin.branch * 2;
    },
    /* 获取spin 数据 */
    getSpinData(index) {
      index = index % this.listData.length;
      return this.listData[index >= 0 ? index : index + this.listData.length];
    },

    /* 获取选中值 */
    getPickValue(move) {
      let index = Math.abs(move / 43);
      let pickValue = this.getSpinData(index);
      this.$emit('input', pickValue);
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('touchstart', this.itemTouchStart);
    this.$el.removeEventListener('touchmove', this.itemTouchMove);
    this.$el.removeEventListener('touchend', this.itemTouchEnd);
  }
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_picker_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__address_picker_vue__);





const AddressPickerConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__address_picker_vue___default.a);

let getInstance = () => {
  var tar = new AddressPickerConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(tar.$el);
  return tar;
};

/* harmony default export */ __webpack_exports__["default"] = (getInstance());

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by hulei on 2017/5/27.
 */



module.exports = {
  area: [{
    "areaCode": "110000",
    "parentCode": "0",
    "areaName": "北京市",
    "level": 1,
    "city": [{
      "areaCode": "110100",
      "parentCode": "110000",
      "areaName": "北京市",
      "level": 2
    }]
  }, {
    "areaCode": "120000",
    "parentCode": "0",
    "areaName": "天津市",
    "level": 1,
    "city": [{
      "areaCode": "120100",
      "parentCode": "120000",
      "areaName": "天津市",
      "level": 2
    }]
  }, {
    "areaCode": "130000",
    "parentCode": "0",
    "areaName": "河北省",
    "level": 1,
    "city": [{
      "areaCode": "130100",
      "parentCode": "130000",
      "areaName": "石家庄市",
      "level": 2
    }, {
      "areaCode": "130200",
      "parentCode": "130000",
      "areaName": "唐山市",
      "level": 2
    }, {
      "areaCode": "130300",
      "parentCode": "130000",
      "areaName": "秦皇岛市",
      "level": 2
    }, {
      "areaCode": "130400",
      "parentCode": "130000",
      "areaName": "邯郸市",
      "level": 2
    }, {
      "areaCode": "130500",
      "parentCode": "130000",
      "areaName": "邢台市",
      "level": 2
    }, {
      "areaCode": "130600",
      "parentCode": "130000",
      "areaName": "保定市",
      "level": 2
    }, {
      "areaCode": "130700",
      "parentCode": "130000",
      "areaName": "张家口市",
      "level": 2
    }, {
      "areaCode": "130800",
      "parentCode": "130000",
      "areaName": "承德市",
      "level": 2
    }, {
      "areaCode": "130900",
      "parentCode": "130000",
      "areaName": "沧州市",
      "level": 2
    }, {
      "areaCode": "131000",
      "parentCode": "130000",
      "areaName": "廊坊市",
      "level": 2
    }, {
      "areaCode": "131100",
      "parentCode": "130000",
      "areaName": "衡水市",
      "level": 2
    }]
  }, {
    "areaCode": "140000",
    "parentCode": "0",
    "areaName": "山西省",
    "level": 1,
    "city": [{
      "areaCode": "140100",
      "areaName": "太原市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140200",
      "areaName": "大同市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140300",
      "areaName": "阳泉市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140400",
      "areaName": "长治市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140500",
      "areaName": "晋城市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140600",
      "areaName": "朔州市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140700",
      "areaName": "晋中市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140800",
      "areaName": "运城市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "140900",
      "areaName": "忻州市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "141000",
      "areaName": "临汾市",
      "parentCode": "140000",
      "level": 2
    }, {
      "areaCode": "141100",
      "areaName": "吕梁市",
      "parentCode": "140000",
      "level": 2
    }]
  }, {
    "areaCode": "150000",
    "parentCode": "0",
    "areaName": "内蒙古自治区",
    "level": 1,
    "city": [{
      "areaCode": "150100",
      "parentCode": "150000",
      "areaName": "呼和浩特市",
      "level": 2
    }, {
      "areaCode": "150200",
      "parentCode": "150000",
      "areaName": "包头市",
      "level": 2
    }, {
      "areaCode": "150300",
      "parentCode": "150000",
      "areaName": "乌海市",
      "level": 2
    }, {
      "areaCode": "150400",
      "parentCode": "150000",
      "areaName": "赤峰市",
      "level": 2
    }, {
      "areaCode": "150500",
      "parentCode": "150000",
      "areaName": "通辽市",
      "level": 2
    }, {
      "areaCode": "150600",
      "parentCode": "150000",
      "areaName": "鄂尔多斯市",
      "level": 2
    }, {
      "areaCode": "150700",
      "parentCode": "150000",
      "areaName": "呼伦贝尔市",
      "level": 2
    }, {
      "areaCode": "150800",
      "parentCode": "150000",
      "areaName": "巴彦淖尔市",
      "level": 2
    }, {
      "areaCode": "150900",
      "parentCode": "150000",
      "areaName": "乌兰察布市",
      "level": 2
    }, {
      "areaCode": "152200",
      "parentCode": "150000",
      "areaName": "兴安盟",
      "level": 2
    }, {
      "areaCode": "152500",
      "parentCode": "150000",
      "areaName": "锡林郭勒盟",
      "level": 2
    }, {
      "areaCode": "152900",
      "parentCode": "150000",
      "areaName": "阿拉善盟",
      "level": 2
    }]
  }, {
    "areaCode": "210000",
    "parentCode": "0",
    "areaName": "辽宁省",
    "level": 1,
    "city": [{
      "areaCode": "210100",
      "parentCode": "210000",
      "areaName": "沈阳市",
      "level": 2
    }, {
      "areaCode": "210200",
      "parentCode": "210000",
      "areaName": "大连市",
      "level": 2
    }, {
      "areaCode": "210300",
      "parentCode": "210000",
      "areaName": "鞍山市",
      "level": 2
    }, {
      "areaCode": "210400",
      "parentCode": "210000",
      "areaName": "抚顺市",
      "level": 2
    }, {
      "areaCode": "210500",
      "parentCode": "210000",
      "areaName": "本溪市",
      "level": 2
    }, {
      "areaCode": "210600",
      "parentCode": "210000",
      "areaName": "丹东市",
      "level": 2
    }, {
      "areaCode": "210700",
      "parentCode": "210000",
      "areaName": "锦州市",
      "level": 2
    }, {
      "areaCode": "210800",
      "parentCode": "210000",
      "areaName": "营口市",
      "level": 2
    }, {
      "areaCode": "210900",
      "parentCode": "210000",
      "areaName": "阜新市",
      "level": 2
    }, {
      "areaCode": "211000",
      "parentCode": "210000",
      "areaName": "辽阳市",
      "level": 2
    }, {
      "areaCode": "211100",
      "parentCode": "210000",
      "areaName": "盘锦市",
      "level": 2
    }, {
      "areaCode": "211200",
      "parentCode": "210000",
      "areaName": "铁岭市",
      "level": 2
    }, {
      "areaCode": "211300",
      "parentCode": "210000",
      "areaName": "朝阳市",
      "level": 2
    }, {
      "areaCode": "211400",
      "parentCode": "210000",
      "areaName": "葫芦岛市",
      "level": 2
    }]
  }, {
    "areaCode": "220000",
    "parentCode": "0",
    "areaName": "吉林省",
    "level": 1,
    "city": [{
      "areaCode": "220100",
      "areaName": "长春市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220200",
      "areaName": "吉林市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220300",
      "areaName": "四平市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220400",
      "areaName": "辽源市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220500",
      "areaName": "通化市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220600",
      "areaName": "白山市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220700",
      "areaName": "松原市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "220800",
      "areaName": "白城市",
      "parentCode": "220000",
      "level": 2
    }, {
      "areaCode": "222400",
      "areaName": "延边朝鲜族自治州",
      "parentCode": "220000",
      "level": 2
    }]
  }, {
    "areaCode": "230000",
    "parentCode": "0",
    "areaName": "黑龙江省",
    "level": 1,
    "city": [{
      "areaCode": "230100",
      "parentCode": "230000",
      "areaName": "哈尔滨市",
      "level": 2
    }, {
      "areaCode": "230200",
      "parentCode": "230000",
      "areaName": "齐齐哈尔市",
      "level": 2
    }, {
      "areaCode": "230300",
      "parentCode": "230000",
      "areaName": "鸡西市",
      "level": 2
    }, {
      "areaCode": "230400",
      "parentCode": "230000",
      "areaName": "鹤岗市",
      "level": 2
    }, {
      "areaCode": "230500",
      "parentCode": "230000",
      "areaName": "双鸭山市",
      "level": 2
    }, {
      "areaCode": "230600",
      "parentCode": "230000",
      "areaName": "大庆市",
      "level": 2
    }, {
      "areaCode": "230700",
      "parentCode": "230000",
      "areaName": "伊春市",
      "level": 2
    }, {
      "areaCode": "230800",
      "parentCode": "230000",
      "areaName": "佳木斯市",
      "level": 2
    }, {
      "areaCode": "230900",
      "parentCode": "230000",
      "areaName": "七台河市",
      "level": 2
    }, {
      "areaCode": "231000",
      "parentCode": "230000",
      "areaName": "牡丹江市",
      "level": 2
    }, {
      "areaCode": "231100",
      "parentCode": "230000",
      "areaName": "黑河市",
      "level": 2
    }, {
      "areaCode": "231200",
      "parentCode": "230000",
      "areaName": "绥化市",
      "level": 2
    }, {
      "areaCode": "232700",
      "parentCode": "230000",
      "areaName": "大兴安岭地区",
      "level": 2
    }]
  }, {
    "areaCode": "310000",
    "parentCode": "0",
    "areaName": "上海市",
    "level": 1,
    "city": [{
      "areaCode": "310100",
      "parentCode": "310000",
      "areaName": "上海市",
      "level": 2
    }]
  }, {
    "areaCode": "320000",
    "parentCode": "0",
    "areaName": "江苏省",
    "level": 1,
    "city": [{
      "areaCode": "320100",
      "parentCode": "320000",
      "areaName": "南京市",
      "level": 2
    }, {
      "areaCode": "320200",
      "parentCode": "320000",
      "areaName": "无锡市",
      "level": 2
    }, {
      "areaCode": "320300",
      "parentCode": "320000",
      "areaName": "徐州市",
      "level": 2
    }, {
      "areaCode": "320400",
      "parentCode": "320000",
      "areaName": "常州市",
      "level": 2
    }, {
      "areaCode": "320500",
      "parentCode": "320000",
      "areaName": "苏州市",
      "level": 2
    }, {
      "areaCode": "320600",
      "parentCode": "320000",
      "areaName": "南通市",
      "level": 2
    }, {
      "areaCode": "320700",
      "parentCode": "320000",
      "areaName": "连云港市",
      "level": 2
    }, {
      "areaCode": "320800",
      "parentCode": "320000",
      "areaName": "淮安市",
      "level": 2
    }, {
      "areaCode": "320900",
      "parentCode": "320000",
      "areaName": "盐城市",
      "level": 2
    }, {
      "areaCode": "321000",
      "parentCode": "320000",
      "areaName": "扬州市",
      "level": 2
    }, {
      "areaCode": "321100",
      "parentCode": "320000",
      "areaName": "镇江市",
      "level": 2
    }, {
      "areaCode": "321200",
      "parentCode": "320000",
      "areaName": "泰州市",
      "level": 2
    }, {
      "areaCode": "321300",
      "parentCode": "320000",
      "areaName": "宿迁市",
      "level": 2
    }]
  }, {
    "areaCode": "330000",
    "parentCode": "0",
    "areaName": "浙江省",
    "level": 1,
    "city": [{
      "areaCode": "330100",
      "parentCode": "330000",
      "areaName": "杭州市",
      "level": 2
    }, {
      "areaCode": "330200",
      "parentCode": "330000",
      "areaName": "宁波市",
      "level": 2
    }, {
      "areaCode": "330300",
      "parentCode": "330000",
      "areaName": "温州市",
      "level": 2
    }, {
      "areaCode": "330400",
      "parentCode": "330000",
      "areaName": "嘉兴市",
      "level": 2
    }, {
      "areaCode": "330500",
      "parentCode": "330000",
      "areaName": "湖州市",
      "level": 2
    }, {
      "areaCode": "330600",
      "parentCode": "330000",
      "areaName": "绍兴市",
      "level": 2
    }, {
      "areaCode": "330700",
      "parentCode": "330000",
      "areaName": "金华市",
      "level": 2
    }, {
      "areaCode": "330800",
      "parentCode": "330000",
      "areaName": "衢州市",
      "level": 2
    }, {
      "areaCode": "330900",
      "parentCode": "330000",
      "areaName": "舟山市",
      "level": 2
    }, {
      "areaCode": "331000",
      "parentCode": "330000",
      "areaName": "台州市",
      "level": 2
    }, {
      "areaCode": "331100",
      "parentCode": "330000",
      "areaName": "丽水市",
      "level": 2
    }]
  }, {
    "areaCode": "340000",
    "parentCode": "0",
    "areaName": "安徽省",
    "level": 1,
    "city": [{
      "areaCode": "340100",
      "parentCode": "340000",
      "areaName": "合肥市",
      "level": 2
    }, {
      "areaCode": "340200",
      "parentCode": "340000",
      "areaName": "芜湖市",
      "level": 2
    }, {
      "areaCode": "340300",
      "parentCode": "340000",
      "areaName": "蚌埠市",
      "level": 2
    }, {
      "areaCode": "340400",
      "parentCode": "340000",
      "areaName": "淮南市",
      "level": 2
    }, {
      "areaCode": "340500",
      "parentCode": "340000",
      "areaName": "马鞍山市",
      "level": 2
    }, {
      "areaCode": "340600",
      "parentCode": "340000",
      "areaName": "淮北市",
      "level": 2
    }, {
      "areaCode": "340700",
      "parentCode": "340000",
      "areaName": "铜陵市",
      "level": 2
    }, {
      "areaCode": "340800",
      "parentCode": "340000",
      "areaName": "安庆市",
      "level": 2
    }, {
      "areaCode": "341000",
      "parentCode": "340000",
      "areaName": "黄山市",
      "level": 2
    }, {
      "areaCode": "341100",
      "parentCode": "340000",
      "areaName": "滁州市",
      "level": 2
    }, {
      "areaCode": "341200",
      "parentCode": "340000",
      "areaName": "阜阳市",
      "level": 2
    }, {
      "areaCode": "341300",
      "parentCode": "340000",
      "areaName": "宿州市",
      "level": 2
    }, {
      "areaCode": "341500",
      "parentCode": "340000",
      "areaName": "六安市",
      "level": 2
    }, {
      "areaCode": "341600",
      "parentCode": "340000",
      "areaName": "亳州市",
      "level": 2
    }, {
      "areaCode": "341700",
      "parentCode": "340000",
      "areaName": "池州市",
      "level": 2
    }, {
      "areaCode": "341800",
      "parentCode": "340000",
      "areaName": "宣城市",
      "level": 2
    }]
  }, {
    "areaCode": "350000",
    "parentCode": "0",
    "areaName": "福建省",
    "level": 1,
    "city": [{
      "areaCode": "350100",
      "parentCode": "350000",
      "areaName": "福州市",
      "level": 2
    }, {
      "areaCode": "350200",
      "parentCode": "350000",
      "areaName": "厦门市",
      "level": 2
    }, {
      "areaCode": "350300",
      "parentCode": "350000",
      "areaName": "莆田市",
      "level": 2
    }, {
      "areaCode": "350400",
      "parentCode": "350000",
      "areaName": "三明市",
      "level": 2
    }, {
      "areaCode": "350500",
      "parentCode": "350000",
      "areaName": "泉州市",
      "level": 2
    }, {
      "areaCode": "350600",
      "parentCode": "350000",
      "areaName": "漳州市",
      "level": 2
    }, {
      "areaCode": "350700",
      "parentCode": "350000",
      "areaName": "南平市",
      "level": 2
    }, {
      "areaCode": "350800",
      "parentCode": "350000",
      "areaName": "龙岩市",
      "level": 2
    }, {
      "areaCode": "350900",
      "parentCode": "350000",
      "areaName": "宁德市",
      "level": 2
    }]
  }, {
    "areaCode": "360000",
    "parentCode": "0",
    "areaName": "江西省",
    "level": 1,
    "city": [{
      "areaCode": "360100",
      "parentCode": "360000",
      "areaName": "南昌市",
      "level": 2
    }, {
      "areaCode": "360200",
      "parentCode": "360000",
      "areaName": "景德镇市",
      "level": 2
    }, {
      "areaCode": "360300",
      "parentCode": "360000",
      "areaName": "萍乡市",
      "level": 2
    }, {
      "areaCode": "360400",
      "parentCode": "360000",
      "areaName": "九江市",
      "level": 2
    }, {
      "areaCode": "360500",
      "parentCode": "360000",
      "areaName": "新余市",
      "level": 2
    }, {
      "areaCode": "360600",
      "parentCode": "360000",
      "areaName": "鹰潭市",
      "level": 2
    }, {
      "areaCode": "360700",
      "parentCode": "360000",
      "areaName": "赣州市",
      "level": 2
    }, {
      "areaCode": "360800",
      "parentCode": "360000",
      "areaName": "吉安市",
      "level": 2
    }, {
      "areaCode": "360900",
      "parentCode": "360000",
      "areaName": "宜春市",
      "level": 2
    }, {
      "areaCode": "361000",
      "parentCode": "360000",
      "areaName": "抚州市",
      "level": 2
    }, {
      "areaCode": "361100",
      "parentCode": "360000",
      "areaName": "上饶市",
      "level": 2
    }]
  }, {
    "areaCode": "370000",
    "parentCode": "0",
    "areaName": "山东省",
    "level": 1,
    "city": [{
      "areaCode": "370100",
      "parentCode": "370000",
      "areaName": "济南市",
      "level": 2
    }, {
      "areaCode": "370200",
      "parentCode": "370000",
      "areaName": "青岛市",
      "level": 2
    }, {
      "areaCode": "370300",
      "parentCode": "370000",
      "areaName": "淄博市",
      "level": 2
    }, {
      "areaCode": "370400",
      "parentCode": "370000",
      "areaName": "枣庄市",
      "level": 2
    }, {
      "areaCode": "370500",
      "parentCode": "370000",
      "areaName": "东营市",
      "level": 2
    }, {
      "areaCode": "370600",
      "parentCode": "370000",
      "areaName": "烟台市",
      "level": 2
    }, {
      "areaCode": "370700",
      "parentCode": "370000",
      "areaName": "潍坊市",
      "level": 2
    }, {
      "areaCode": "370800",
      "parentCode": "370000",
      "areaName": "济宁市",
      "level": 2
    }, {
      "areaCode": "370900",
      "parentCode": "370000",
      "areaName": "泰安市",
      "level": 2
    }, {
      "areaCode": "371000",
      "parentCode": "370000",
      "areaName": "威海市",
      "level": 2
    }, {
      "areaCode": "371100",
      "parentCode": "370000",
      "areaName": "日照市",
      "level": 2
    }, {
      "areaCode": "371200",
      "parentCode": "370000",
      "areaName": "莱芜市",
      "level": 2
    }, {
      "areaCode": "371300",
      "parentCode": "370000",
      "areaName": "临沂市",
      "level": 2
    }, {
      "areaCode": "371400",
      "parentCode": "370000",
      "areaName": "德州市",
      "level": 2
    }, {
      "areaCode": "371500",
      "parentCode": "370000",
      "areaName": "聊城市",
      "level": 2
    }, {
      "areaCode": "371600",
      "parentCode": "370000",
      "areaName": "滨州市",
      "level": 2
    }, {
      "areaCode": "371700",
      "parentCode": "370000",
      "areaName": "菏泽市",
      "level": 2
    }]
  }, {
    "areaCode": "410000",
    "parentCode": "0",
    "areaName": "河南省",
    "level": 1,
    "city": [{
      "areaCode": "410100",
      "parentCode": "410000",
      "areaName": "郑州市",
      "level": 2
    }, {
      "areaCode": "410200",
      "parentCode": "410000",
      "areaName": "开封市",
      "level": 2
    }, {
      "areaCode": "410300",
      "parentCode": "410000",
      "areaName": "洛阳市",
      "level": 2
    }, {
      "areaCode": "410400",
      "parentCode": "410000",
      "areaName": "平顶山市",
      "level": 2
    }, {
      "areaCode": "410500",
      "parentCode": "410000",
      "areaName": "安阳市",
      "level": 2
    }, {
      "areaCode": "410600",
      "parentCode": "410000",
      "areaName": "鹤壁市",
      "level": 2
    }, {
      "areaCode": "410700",
      "parentCode": "410000",
      "areaName": "新乡市",
      "level": 2
    }, {
      "areaCode": "410800",
      "parentCode": "410000",
      "areaName": "焦作市",
      "level": 2
    }, {
      "areaCode": "410900",
      "parentCode": "410000",
      "areaName": "濮阳市",
      "level": 2
    }, {
      "areaCode": "411000",
      "parentCode": "410000",
      "areaName": "许昌市",
      "level": 2
    }, {
      "areaCode": "411100",
      "parentCode": "410000",
      "areaName": "漯河市",
      "level": 2
    }, {
      "areaCode": "411200",
      "parentCode": "410000",
      "areaName": "三门峡市",
      "level": 2
    }, {
      "areaCode": "411300",
      "parentCode": "410000",
      "areaName": "南阳市",
      "level": 2
    }, {
      "areaCode": "411400",
      "parentCode": "410000",
      "areaName": "商丘市",
      "level": 2
    }, {
      "areaCode": "411500",
      "parentCode": "410000",
      "areaName": "信阳市",
      "level": 2
    }, {
      "areaCode": "411600",
      "parentCode": "410000",
      "areaName": "周口市",
      "level": 2
    }, {
      "areaCode": "411700",
      "parentCode": "410000",
      "areaName": "驻马店市",
      "level": 2
    }, {
      "areaCode": "419001",
      "parentCode": "410000",
      "areaName": "济源市",
      "level": 3
    }]
  }, {
    "areaCode": "420000",
    "parentCode": "0",
    "areaName": "湖北省",
    "level": 1,
    "city": [{
      "areaCode": "420100",
      "parentCode": "420000",
      "areaName": "武汉市",
      "level": 2
    }, {
      "areaCode": "420200",
      "parentCode": "420000",
      "areaName": "黄石市",
      "level": 2
    }, {
      "areaCode": "420300",
      "parentCode": "420000",
      "areaName": "十堰市",
      "level": 2
    }, {
      "areaCode": "420500",
      "parentCode": "420000",
      "areaName": "宜昌市",
      "level": 2
    }, {
      "areaCode": "420600",
      "parentCode": "420000",
      "areaName": "襄阳市",
      "level": 2
    }, {
      "areaCode": "420700",
      "parentCode": "420000",
      "areaName": "鄂州市",
      "level": 2
    }, {
      "areaCode": "420800",
      "parentCode": "420000",
      "areaName": "荆门市",
      "level": 2
    }, {
      "areaCode": "420900",
      "parentCode": "420000",
      "areaName": "孝感市",
      "level": 2
    }, {
      "areaCode": "421000",
      "parentCode": "420000",
      "areaName": "荆州市",
      "level": 2
    }, {
      "areaCode": "421100",
      "parentCode": "420000",
      "areaName": "黄冈市",
      "level": 2
    }, {
      "areaCode": "421200",
      "parentCode": "420000",
      "areaName": "咸宁市",
      "level": 2
    }, {
      "areaCode": "421300",
      "parentCode": "420000",
      "areaName": "随州市",
      "level": 2
    }, {
      "areaCode": "422800",
      "parentCode": "420000",
      "areaName": "恩施土家族苗族自治州",
      "level": 2
    }, {
      "areaCode": "429004",
      "parentCode": "420000",
      "areaName": "仙桃市",
      "level": 3
    }, {
      "areaCode": "429005",
      "parentCode": "420000",
      "areaName": "潜江市",
      "level": 3
    }, {
      "areaCode": "429006",
      "parentCode": "420000",
      "areaName": "天门市",
      "level": 3
    }, {
      "areaCode": "429021",
      "parentCode": "420000",
      "areaName": "神农架林区",
      "level": 3
    }]
  }, {
    "areaCode": "430000",
    "parentCode": "0",
    "areaName": "湖南省",
    "level": 1,
    "city": [{
      "areaCode": "430100",
      "parentCode": "430000",
      "areaName": "长沙市",
      "level": 2
    }, {
      "areaCode": "430200",
      "parentCode": "430000",
      "areaName": "株洲市",
      "level": 2
    }, {
      "areaCode": "430300",
      "parentCode": "430000",
      "areaName": "湘潭市",
      "level": 2
    }, {
      "areaCode": "430400",
      "parentCode": "430000",
      "areaName": "衡阳市",
      "level": 2
    }, {
      "areaCode": "430500",
      "parentCode": "430000",
      "areaName": "邵阳市",
      "level": 2
    }, {
      "areaCode": "430600",
      "parentCode": "430000",
      "areaName": "岳阳市",
      "level": 2
    }, {
      "areaCode": "430700",
      "parentCode": "430000",
      "areaName": "常德市",
      "level": 2
    }, {
      "areaCode": "430800",
      "parentCode": "430000",
      "areaName": "张家界市",
      "level": 2
    }, {
      "areaCode": "430900",
      "parentCode": "430000",
      "areaName": "益阳市",
      "level": 2
    }, {
      "areaCode": "431000",
      "parentCode": "430000",
      "areaName": "郴州市",
      "level": 2
    }, {
      "areaCode": "431100",
      "parentCode": "430000",
      "areaName": "永州市",
      "level": 2
    }, {
      "areaCode": "431200",
      "parentCode": "430000",
      "areaName": "怀化市",
      "level": 2
    }, {
      "areaCode": "431300",
      "parentCode": "430000",
      "areaName": "娄底市",
      "level": 2
    }, {
      "areaCode": "433100",
      "parentCode": "430000",
      "areaName": "湘西土家族苗族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "440000",
    "parentCode": "0",
    "areaName": "广东省",
    "level": 1,
    "city": [{
      "areaCode": "440100",
      "parentCode": "440000",
      "areaName": "广州市",
      "level": 2
    }, {
      "areaCode": "440200",
      "parentCode": "440000",
      "areaName": "韶关市",
      "level": 2
    }, {
      "areaCode": "440300",
      "parentCode": "440000",
      "areaName": "深圳市",
      "level": 2
    }, {
      "areaCode": "440400",
      "parentCode": "440000",
      "areaName": "珠海市",
      "level": 2
    }, {
      "areaCode": "440500",
      "parentCode": "440000",
      "areaName": "汕头市",
      "level": 2
    }, {
      "areaCode": "440600",
      "parentCode": "440000",
      "areaName": "佛山市",
      "level": 2
    }, {
      "areaCode": "440700",
      "parentCode": "440000",
      "areaName": "江门市",
      "level": 2
    }, {
      "areaCode": "440800",
      "parentCode": "440000",
      "areaName": "湛江市",
      "level": 2
    }, {
      "areaCode": "440900",
      "parentCode": "440000",
      "areaName": "茂名市",
      "level": 2
    }, {
      "areaCode": "441200",
      "parentCode": "440000",
      "areaName": "肇庆市",
      "level": 2
    }, {
      "areaCode": "441300",
      "parentCode": "440000",
      "areaName": "惠州市",
      "level": 2
    }, {
      "areaCode": "441400",
      "parentCode": "440000",
      "areaName": "梅州市",
      "level": 2
    }, {
      "areaCode": "441500",
      "parentCode": "440000",
      "areaName": "汕尾市",
      "level": 2
    }, {
      "areaCode": "441600",
      "parentCode": "440000",
      "areaName": "河源市",
      "level": 2
    }, {
      "areaCode": "441700",
      "parentCode": "440000",
      "areaName": "阳江市",
      "level": 2
    }, {
      "areaCode": "441800",
      "parentCode": "440000",
      "areaName": "清远市",
      "level": 2
    }, {
      "areaCode": "441900",
      "parentCode": "440000",
      "areaName": "东莞市",
      "level": 2
    }, {
      "areaCode": "442000",
      "parentCode": "440000",
      "areaName": "中山市",
      "level": 2
    }, {
      "areaCode": "445100",
      "parentCode": "440000",
      "areaName": "潮州市",
      "level": 2
    }, {
      "areaCode": "445200",
      "parentCode": "440000",
      "areaName": "揭阳市",
      "level": 2
    }, {
      "areaCode": "445300",
      "parentCode": "440000",
      "areaName": "云浮市",
      "level": 2
    }]
  }, {
    "areaCode": "450000",
    "parentCode": "0",
    "areaName": "广西壮族自治区",
    "level": 1,
    "city": [{
      "areaCode": "450100",
      "parentCode": "450000",
      "areaName": "南宁市",
      "level": 2
    }, {
      "areaCode": "450200",
      "parentCode": "450000",
      "areaName": "柳州市",
      "level": 2
    }, {
      "areaCode": "450300",
      "parentCode": "450000",
      "areaName": "桂林市",
      "level": 2
    }, {
      "areaCode": "450400",
      "parentCode": "450000",
      "areaName": "梧州市",
      "level": 2
    }, {
      "areaCode": "450500",
      "parentCode": "450000",
      "areaName": "北海市",
      "level": 2
    }, {
      "areaCode": "450600",
      "parentCode": "450000",
      "areaName": "防城港市",
      "level": 2
    }, {
      "areaCode": "450700",
      "parentCode": "450000",
      "areaName": "钦州市",
      "level": 2
    }, {
      "areaCode": "450800",
      "parentCode": "450000",
      "areaName": "贵港市",
      "level": 2
    }, {
      "areaCode": "450900",
      "parentCode": "450000",
      "areaName": "玉林市",
      "level": 2
    }, {
      "areaCode": "451000",
      "parentCode": "450000",
      "areaName": "百色市",
      "level": 2
    }, {
      "areaCode": "451100",
      "parentCode": "450000",
      "areaName": "贺州市",
      "level": 2
    }, {
      "areaCode": "451200",
      "parentCode": "450000",
      "areaName": "河池市",
      "level": 2
    }, {
      "areaCode": "451300",
      "parentCode": "450000",
      "areaName": "来宾市",
      "level": 2
    }, {
      "areaCode": "451400",
      "parentCode": "450000",
      "areaName": "崇左市",
      "level": 2
    }]
  }, {
    "areaCode": "460000",
    "parentCode": "0",
    "areaName": "海南省",
    "level": 1,
    "city": [{
      "areaCode": "460100",
      "parentCode": "460000",
      "areaName": "海口市",
      "level": 2
    }, {
      "areaCode": "460200",
      "parentCode": "460000",
      "areaName": "三亚市",
      "level": 2
    }, {
      "areaCode": "460300",
      "parentCode": "460000",
      "areaName": "三沙市",
      "level": 2
    }, {
      "areaCode": "469001",
      "parentCode": "460000",
      "areaName": "五指山市",
      "level": 3
    }, {
      "areaCode": "469002",
      "parentCode": "460000",
      "areaName": "琼海市",
      "level": 3
    }, {
      "areaCode": "469003",
      "parentCode": "460000",
      "areaName": "儋州市",
      "level": 3
    }, {
      "areaCode": "469005",
      "parentCode": "460000",
      "areaName": "文昌市",
      "level": 3
    }, {
      "areaCode": "469006",
      "parentCode": "460000",
      "areaName": "万宁市",
      "level": 3
    }, {
      "areaCode": "469007",
      "parentCode": "460000",
      "areaName": "东方市",
      "level": 3
    }, {
      "areaCode": "469021",
      "parentCode": "460000",
      "areaName": "定安县",
      "level": 3
    }, {
      "areaCode": "469022",
      "parentCode": "460000",
      "areaName": "屯昌县",
      "level": 3
    }, {
      "areaCode": "469023",
      "parentCode": "460000",
      "areaName": "澄迈县",
      "level": 3
    }, {
      "areaCode": "469024",
      "parentCode": "460000",
      "areaName": "临高县",
      "level": 3
    }, {
      "areaCode": "469025",
      "parentCode": "460000",
      "areaName": "白沙黎族自治县",
      "level": 3
    }, {
      "areaCode": "469026",
      "parentCode": "460000",
      "areaName": "昌江黎族自治县",
      "level": 3
    }, {
      "areaCode": "469027",
      "parentCode": "460000",
      "areaName": "乐东黎族自治县",
      "level": 3
    }, {
      "areaCode": "469028",
      "parentCode": "460000",
      "areaName": "陵水黎族自治县",
      "level": 3
    }, {
      "areaCode": "469029",
      "parentCode": "460000",
      "areaName": "保亭黎族苗族自治县",
      "level": 3
    }, {
      "areaCode": "469030",
      "parentCode": "460000",
      "areaName": "琼中黎族苗族自治县",
      "level": 3
    }]
  }, {
    "areaCode": "500000",
    "parentCode": "0",
    "areaName": "重庆市",
    "level": 1,
    "city": [{
      "areaCode": "500100",
      "parentCode": "500000",
      "areaName": "重庆市",
      "level": 2
    }]
  }, {
    "areaCode": "510000",
    "parentCode": "0",
    "areaName": "四川省",
    "level": 1,
    "city": [{
      "areaCode": "510100",
      "parentCode": "510000",
      "areaName": "成都市",
      "level": 2
    }, {
      "areaCode": "510300",
      "parentCode": "510000",
      "areaName": "自贡市",
      "level": 2
    }, {
      "areaCode": "510400",
      "parentCode": "510000",
      "areaName": "攀枝花市",
      "level": 2
    }, {
      "areaCode": "510500",
      "parentCode": "510000",
      "areaName": "泸州市",
      "level": 2
    }, {
      "areaCode": "510600",
      "parentCode": "510000",
      "areaName": "德阳市",
      "level": 2
    }, {
      "areaCode": "510700",
      "parentCode": "510000",
      "areaName": "绵阳市",
      "level": 2
    }, {
      "areaCode": "510800",
      "parentCode": "510000",
      "areaName": "广元市",
      "level": 2
    }, {
      "areaCode": "510900",
      "parentCode": "510000",
      "areaName": "遂宁市",
      "level": 2
    }, {
      "areaCode": "511000",
      "parentCode": "510000",
      "areaName": "内江市",
      "level": 2
    }, {
      "areaCode": "511100",
      "parentCode": "510000",
      "areaName": "乐山市",
      "level": 2
    }, {
      "areaCode": "511300",
      "parentCode": "510000",
      "areaName": "南充市",
      "level": 2
    }, {
      "areaCode": "511400",
      "parentCode": "510000",
      "areaName": "眉山市",
      "level": 2
    }, {
      "areaCode": "511500",
      "parentCode": "510000",
      "areaName": "宜宾市",
      "level": 2
    }, {
      "areaCode": "511600",
      "parentCode": "510000",
      "areaName": "广安市",
      "level": 2
    }, {
      "areaCode": "511700",
      "parentCode": "510000",
      "areaName": "达州市",
      "level": 2
    }, {
      "areaCode": "511800",
      "parentCode": "510000",
      "areaName": "雅安市",
      "level": 2
    }, {
      "areaCode": "511900",
      "parentCode": "510000",
      "areaName": "巴中市",
      "level": 2
    }, {
      "areaCode": "512000",
      "parentCode": "510000",
      "areaName": "资阳市",
      "level": 2
    }, {
      "areaCode": "513200",
      "parentCode": "510000",
      "areaName": "阿坝藏族羌族自治州",
      "level": 2
    }, {
      "areaCode": "513300",
      "parentCode": "510000",
      "areaName": "甘孜藏族自治州",
      "level": 2
    }, {
      "areaCode": "513400",
      "parentCode": "510000",
      "areaName": "凉山彝族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "520000",
    "parentCode": "0",
    "areaName": "贵州省",
    "level": 1,
    "city": [{
      "areaCode": "520100",
      "parentCode": "520000",
      "areaName": "贵阳市",
      "level": 2
    }, {
      "areaCode": "520200",
      "parentCode": "520000",
      "areaName": "六盘水市",
      "level": 2
    }, {
      "areaCode": "520300",
      "parentCode": "520000",
      "areaName": "遵义市",
      "level": 2
    }, {
      "areaCode": "520400",
      "parentCode": "520000",
      "areaName": "安顺市",
      "level": 2
    }, {
      "areaCode": "520500",
      "parentCode": "520000",
      "areaName": "毕节市",
      "level": 2
    }, {
      "areaCode": "520600",
      "parentCode": "520000",
      "areaName": "铜仁市",
      "level": 2
    }, {
      "areaCode": "522300",
      "parentCode": "520000",
      "areaName": "黔西南布依族苗族自治州",
      "level": 2
    }, {
      "areaCode": "522600",
      "parentCode": "520000",
      "areaName": "黔东南苗族侗族自治州",
      "level": 2
    }, {
      "areaCode": "522700",
      "parentCode": "520000",
      "areaName": "黔南布依族苗族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "530000",
    "parentCode": "0",
    "areaName": "云南省",
    "level": 1,
    "city": [{
      "areaCode": "530100",
      "parentCode": "530000",
      "areaName": "昆明市",
      "level": 2
    }, {
      "areaCode": "530300",
      "parentCode": "530000",
      "areaName": "曲靖市",
      "level": 2
    }, {
      "areaCode": "530400",
      "parentCode": "530000",
      "areaName": "玉溪市",
      "level": 2
    }, {
      "areaCode": "530500",
      "parentCode": "530000",
      "areaName": "保山市",
      "level": 2
    }, {
      "areaCode": "530600",
      "parentCode": "530000",
      "areaName": "昭通市",
      "level": 2
    }, {
      "areaCode": "530700",
      "parentCode": "530000",
      "areaName": "丽江市",
      "level": 2
    }, {
      "areaCode": "530800",
      "parentCode": "530000",
      "areaName": "普洱市",
      "level": 2
    }, {
      "areaCode": "530900",
      "parentCode": "530000",
      "areaName": "临沧市",
      "level": 2
    }, {
      "areaCode": "532300",
      "parentCode": "530000",
      "areaName": "楚雄彝族自治州",
      "level": 2
    }, {
      "areaCode": "532500",
      "parentCode": "530000",
      "areaName": "红河哈尼族彝族自治州",
      "level": 2
    }, {
      "areaCode": "532600",
      "parentCode": "530000",
      "areaName": "文山壮族苗族自治州",
      "level": 2
    }, {
      "areaCode": "532800",
      "parentCode": "530000",
      "areaName": "西双版纳傣族自治州",
      "level": 2
    }, {
      "areaCode": "532900",
      "parentCode": "530000",
      "areaName": "大理白族自治州",
      "level": 2
    }, {
      "areaCode": "533100",
      "parentCode": "530000",
      "areaName": "德宏傣族景颇族自治州",
      "level": 2
    }, {
      "areaCode": "533300",
      "parentCode": "530000",
      "areaName": "怒江傈僳族自治州",
      "level": 2
    }, {
      "areaCode": "533400",
      "parentCode": "530000",
      "areaName": "迪庆藏族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "540000",
    "parentCode": "0",
    "areaName": "西藏自治区",
    "level": 1,
    "city": [{
      "areaCode": "540100",
      "parentCode": "540000",
      "areaName": "拉萨市",
      "level": 2
    }, {
      "areaCode": "542100",
      "parentCode": "540000",
      "areaName": "昌都地区",
      "level": 2
    }, {
      "areaCode": "542200",
      "parentCode": "540000",
      "areaName": "山南地区",
      "level": 2
    }, {
      "areaCode": "542300",
      "parentCode": "540000",
      "areaName": "日喀则地区",
      "level": 2
    }, {
      "areaCode": "542400",
      "parentCode": "540000",
      "areaName": "那曲地区",
      "level": 2
    }, {
      "areaCode": "542500",
      "parentCode": "540000",
      "areaName": "阿里地区",
      "level": 2
    }, {
      "areaCode": "542600",
      "parentCode": "540000",
      "areaName": "林芝地区",
      "level": 2
    }]
  }, {
    "areaCode": "610000",
    "parentCode": "0",
    "areaName": "陕西省",
    "level": 1,
    "city": [{
      "areaCode": "610100",
      "parentCode": "610000",
      "areaName": "西安市",
      "level": 2
    }, {
      "areaCode": "610200",
      "parentCode": "610000",
      "areaName": "铜川市",
      "level": 2
    }, {
      "areaCode": "610300",
      "parentCode": "610000",
      "areaName": "宝鸡市",
      "level": 2
    }, {
      "areaCode": "610400",
      "parentCode": "610000",
      "areaName": "咸阳市",
      "level": 2
    }, {
      "areaCode": "610500",
      "parentCode": "610000",
      "areaName": "渭南市",
      "level": 2
    }, {
      "areaCode": "610600",
      "parentCode": "610000",
      "areaName": "延安市",
      "level": 2
    }, {
      "areaCode": "610700",
      "parentCode": "610000",
      "areaName": "汉中市",
      "level": 2
    }, {
      "areaCode": "610800",
      "parentCode": "610000",
      "areaName": "榆林市",
      "level": 2
    }, {
      "areaCode": "610900",
      "parentCode": "610000",
      "areaName": "安康市",
      "level": 2
    }, {
      "areaCode": "611000",
      "parentCode": "610000",
      "areaName": "商洛市",
      "level": 2
    }]
  }, {
    "areaCode": "620000",
    "parentCode": "0",
    "areaName": "甘肃省",
    "level": 1,
    "city": [{
      "areaCode": "620100",
      "parentCode": "620000",
      "areaName": "兰州市",
      "level": 2
    }, {
      "areaCode": "620200",
      "parentCode": "620000",
      "areaName": "嘉峪关市",
      "level": 2
    }, {
      "areaCode": "620300",
      "parentCode": "620000",
      "areaName": "金昌市",
      "level": 2
    }, {
      "areaCode": "620400",
      "parentCode": "620000",
      "areaName": "白银市",
      "level": 2
    }, {
      "areaCode": "620500",
      "parentCode": "620000",
      "areaName": "天水市",
      "level": 2
    }, {
      "areaCode": "620600",
      "parentCode": "620000",
      "areaName": "武威市",
      "level": 2
    }, {
      "areaCode": "620700",
      "parentCode": "620000",
      "areaName": "张掖市",
      "level": 2
    }, {
      "areaCode": "620800",
      "parentCode": "620000",
      "areaName": "平凉市",
      "level": 2
    }, {
      "areaCode": "620900",
      "parentCode": "620000",
      "areaName": "酒泉市",
      "level": 2
    }, {
      "areaCode": "621000",
      "parentCode": "620000",
      "areaName": "庆阳市",
      "level": 2
    }, {
      "areaCode": "621100",
      "parentCode": "620000",
      "areaName": "定西市",
      "level": 2
    }, {
      "areaCode": "621200",
      "parentCode": "620000",
      "areaName": "陇南市",
      "level": 2
    }, {
      "areaCode": "622900",
      "parentCode": "620000",
      "areaName": "临夏回族自治州",
      "level": 2
    }, {
      "areaCode": "623000",
      "parentCode": "620000",
      "areaName": "甘南藏族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "630000",
    "parentCode": "0",
    "areaName": "青海省",
    "level": 1,
    "city": [{
      "areaCode": "630100",
      "parentCode": "630000",
      "areaName": "西宁市",
      "level": 2
    }, {
      "areaCode": "632100",
      "parentCode": "630000",
      "areaName": "海东地区",
      "level": 2
    }, {
      "areaCode": "632200",
      "parentCode": "630000",
      "areaName": "海北藏族自治州",
      "level": 2
    }, {
      "areaCode": "632300",
      "parentCode": "630000",
      "areaName": "黄南藏族自治州",
      "level": 2
    }, {
      "areaCode": "632500",
      "parentCode": "630000",
      "areaName": "海南藏族自治州",
      "level": 2
    }, {
      "areaCode": "632600",
      "parentCode": "630000",
      "areaName": "果洛藏族自治州",
      "level": 2
    }, {
      "areaCode": "632700",
      "parentCode": "630000",
      "areaName": "玉树藏族自治州",
      "level": 2
    }, {
      "areaCode": "632800",
      "parentCode": "630000",
      "areaName": "海西蒙古族藏族自治州",
      "level": 2
    }]
  }, {
    "areaCode": "640000",
    "parentCode": "0",
    "areaName": "宁夏回族自治区",
    "level": 1,
    "city": [{
      "areaCode": "640100",
      "parentCode": "640000",
      "areaName": "银川市",
      "level": 2
    }, {
      "areaCode": "640200",
      "parentCode": "640000",
      "areaName": "石嘴山市",
      "level": 2
    }, {
      "areaCode": "640300",
      "parentCode": "640000",
      "areaName": "吴忠市",
      "level": 2
    }, {
      "areaCode": "640400",
      "parentCode": "640000",
      "areaName": "固原市",
      "level": 2
    }, {
      "areaCode": "640500",
      "parentCode": "640000",
      "areaName": "中卫市",
      "level": 2
    }]
  }, {
    "areaCode": "650000",
    "parentCode": "0",
    "areaName": "新疆维吾尔自治区",
    "level": 1,
    "city": [{
      "areaCode": "650100",
      "parentCode": "650000",
      "areaName": "乌鲁木齐市",
      "level": 2
    }, {
      "areaCode": "650200",
      "parentCode": "650000",
      "areaName": "克拉玛依市",
      "level": 2
    }, {
      "areaCode": "652100",
      "parentCode": "650000",
      "areaName": "吐鲁番地区",
      "level": 2
    }, {
      "areaCode": "652200",
      "parentCode": "650000",
      "areaName": "哈密地区",
      "level": 2
    }, {
      "areaCode": "652300",
      "parentCode": "650000",
      "areaName": "昌吉回族自治州",
      "level": 2
    }, {
      "areaCode": "652700",
      "parentCode": "650000",
      "areaName": "博尔塔拉蒙古自治州",
      "level": 2
    }, {
      "areaCode": "652800",
      "parentCode": "650000",
      "areaName": "巴音郭楞蒙古自治州",
      "level": 2
    }, {
      "areaCode": "652900",
      "parentCode": "650000",
      "areaName": "阿克苏地区",
      "level": 2
    }, {
      "areaCode": "653000",
      "parentCode": "650000",
      "areaName": "克孜勒苏柯尔克孜自治州",
      "level": 2
    }, {
      "areaCode": "653100",
      "parentCode": "650000",
      "areaName": "喀什地区",
      "level": 2
    }, {
      "areaCode": "653200",
      "parentCode": "650000",
      "areaName": "和田地区",
      "level": 2
    }, {
      "areaCode": "654000",
      "parentCode": "650000",
      "areaName": "伊犁哈萨克自治州",
      "level": 2
    }, {
      "areaCode": "654200",
      "parentCode": "650000",
      "areaName": "塔城地区",
      "level": 2
    }, {
      "areaCode": "654300",
      "parentCode": "650000",
      "areaName": "阿勒泰地区",
      "level": 2
    }, {
      "areaCode": "654400",
      "parentCode": "650000",
      "areaName": "石河子市",
      "level": 2
    }]
  }]
};

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-1012cdf0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/changxu/Documents/github/TheDirtyHouse/mzui/packages/addressPicker/src/picker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] picker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1012cdf0", Component.options)
  } else {
    hotAPI.reload("data-v-1012cdf0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pd-select-item"
  }, [_c('div', {
    staticClass: "pd-select-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "pd-select-list"
  }, [_c('ul', {
    ref: "list",
    staticClass: "pd-select-ul"
  }, _vm._l((_vm.renderData), function(el, index) {
    return _c('li', {
      key: index,
      staticClass: "pd-select-list-item",
      class: {
        'hidden': _vm.setHidden(el.index)
      }
    }, [_vm._v(_vm._s(el.value))])
  }))]), _vm._v(" "), _c('ul', {
    ref: "wheel",
    staticClass: "pd-select-wheel"
  }, _vm._l((_vm.renderData), function(el, index) {
    return _c('li', {
      key: index,
      staticClass: "pd-select-wheel-item",
      class: {
        'hidden': _vm.setHidden(el.index)
      },
      style: (_vm.setWheelItemDeg(el.index)),
      attrs: {
        "index": el.index
      }
    }, [_vm._v(_vm._s(el.value))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1012cdf0", module.exports)
  }
}

/***/ }),

/***/ 74:
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
    staticClass: "flex-col address",
    class: _vm.options.className
  }, [_c('div', {
    staticClass: "toorbar bg-white flex-row flex-main-between color-gray f16"
  }, [_c('div', {
    on: {
      "click": _vm.btnCancel
    }
  }, [_vm._v(_vm._s(_vm.options.cancelText))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.options.title))]), _vm._v(" "), _c('div', {
    staticClass: "color-blue",
    on: {
      "click": _vm.btnSure
    }
  }, [_vm._v(_vm._s(_vm.options.sureText))])]), _vm._v(" "), _c('div', {
    staticClass: "flex-row pickerContent"
  }, [_c('picker', {
    attrs: {
      "listData": _vm.provinceList
    },
    model: {
      value: (_vm.province),
      callback: function($$v) {
        _vm.province = $$v
      },
      expression: "province"
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "listData": _vm.cityList,
      "type": "line"
    },
    model: {
      value: (_vm.city),
      callback: function($$v) {
        _vm.city = $$v
      },
      expression: "city"
    }
  })], 1)])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bfb2681", module.exports)
  }
}

/***/ })

/******/ });
});