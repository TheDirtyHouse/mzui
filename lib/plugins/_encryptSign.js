/**
 * 用于对feserver接口的数据进行签名 v1.0.1
 * 
 * 使用方法
 * 1、获取对象
 *   var encrypt = window.nnUtil.nnEncryptSign;
 * 2、初始化md5对象
 *   encrypt.md5=window.nnUtil.nnMD5;//加密的时候会调用encrypt.md5.md5('xx')进行加密
 * 3、设置appId
 *   encrypt.setId('bld')
 * 4、设置服务器时差
 *   encrypt.setTime(0)//0是当前系统时间与服务器之间的时差(毫秒)
 * 5、加密
 *   var msgData={};//例如这个是一个消息参数对象
 *   msgData = encrypt.sign(msgData||{});//返回加密后的完整参数对象
 */
(function(root, factory) {
  var name = "nnEncryptSign";
  var ver = "1.0.1";
  console.log(name + " version:" + ver);
  if (typeof exports === 'object' && typeof module === 'object') {
    console.log(name + " init by module.exports");
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    console.log(name + " init by define");
    define([], factory);
  } else if (typeof exports === 'object') {
    console.log(name + " init by exports." + name);
    exports[name] = factory();
  }
  console.log(name + " init by window.nnUtil." + name);
  if (typeof root.nnUtil === 'undefined') {
    root.nnUtil = {};
  }
  root.nnUtil[name] = factory();
})(this || window, function() {


  function EncryptSign() {
    this.keyName = [
      [115, 105, 103, 110, 97, 116, 117, 114, 101],
      [110, 111, 110, 99, 101, 115, 116, 114],
      [97, 112, 112, 73, 100],
      [116, 105, 109, 101, 115, 116, 97, 109, 112]
    ];

    this.md5 = {}; //需要初始化复制

  }

  EncryptSign.prototype.getKeyName = function(idx) {
    var ret = '';
    for (var i = 0; i < this.keyName[idx].length; i++) {
      ret += String.fromCharCode(this.keyName[idx][i]);
    }
    return ret;
  };

  function isArray(value) {
    return value instanceof Array; }

  function isObject(value) {
    return value instanceof Object; }

  var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
  }());

  function urlencode(str) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = typeof str === 'string' ? str : String(str);

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D || // -
              c === 0x2E || // .
              c === 0x5F || // _
              c === 0x7E || // ~
              (c >= 0x30 && c <= 0x39) || // 0-9
              (c >= 0x41 && c <= 0x5A) || // a-z
              (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
      }

      return out;
  }

  //可以将{}转换成key=value&key=value
  EncryptSign.prototype.stringfy = function(jsonObject, parentName) {
    var keys = Object.keys(jsonObject);
    var result = [];
    keys = keys.sort();

    if (isArray(jsonObject) === false) { //如果是数组，这里key则是序列号，不需要写入到字符串内
      parentName = parentName ? parentName + '.' : '';
    } else {
      parentName = parentName ? parentName : '';
    }

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var data = jsonObject[key];
      if(typeof data === 'undefined' ){
        data=jsonObject[key]="";
        console.log("%c error sign stringfy value===undefined key=" + key ,"color:red");
      }
      key = isArray(jsonObject) ? "" : keys[i]; //如果是数组，这里key则是序列号，不需要写入到字符串内

      if (isArray(data) || isObject(data)) {
        result.push(this.stringfy(data, parentName + key));
      } else {
        result.push(urlencode(parentName + key) + '=' + urlencode(data));
      }
    }
    return result.join('&');

  };

  EncryptSign.prototype.sign = function(jsonObject, options) {
    if (!jsonObject) jsonObject = {};
    var time = this.getTime();
    try {
      delete jsonObject[this.getKeyName(2)];
      delete jsonObject[this.getKeyName(0)];
    } catch (ex) {
      console.log(ex.message);
    }

    jsonObject[this.getKeyName(3)] = Date.now() + +time;
    jsonObject[this.getKeyName(1)] = Math.random().toString(36).substr(2, 15);
    var appInfo = this.getAppInfo();
    var string = this.stringfy(jsonObject);
    //将appkey串在后面
    string += appInfo && appInfo.key;

    if (!this.md5.md5) {
      if (!options || !options.md5) {
        console.log('%cnnEncryptSign.md5.md5为空，请设定md5加密的接口', 'color:red;font-size:40px;');
      } else {
        this.md5.md5 = options.md5;
      }
    }
    //进行md5加密
    string = this.md5.md5(string);


    jsonObject[this.getKeyName(0)] = string;
    jsonObject[this.getKeyName(2)] = appInfo && appInfo.id;

    return jsonObject;
  };

  //从session里取appKey和appId
  EncryptSign.prototype.getAppInfo = function() {
    var ret = {};
    try {
      ret.id = sessionStorage.getItem("mzAId");
      ret.key = this.md5.md5(ret.id).substr(7, 16);
      return ret;
    } catch (ex) {
      console.log(ex.message);
    }
  };

  //appId写入到session内
  EncryptSign.prototype.setId = function(id) {
    try {
      sessionStorage.setItem("mzAId", id);
    } catch (ex) {
      console.log(ex.message);
    }
  };

  //将服务器时间戳存入session内
  EncryptSign.prototype.setTime = function(time) {
    try {
      var offsetTime = time - Date.now();
      sessionStorage.setItem("mzST", offsetTime);
    } catch (ex) {
      console.log(ex.message);
    }
  };

  EncryptSign.prototype.getTime = function() {
    try {
      var offsetTime = sessionStorage.getItem("mzST");
      if (offsetTime === null) {
        offsetTime = 0;
        console.log('%cnnEncryptSign.getTime为空，请预先调用setTime', 'color:red;font-size:40px;');
      }
      return offsetTime;
    } catch (ex) {
      console.log(ex.message);
    }
  };



  return new EncryptSign();

});
