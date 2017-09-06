/**
 * v1.0.0
 * 使用方法
 * var result = window.nnUtil.nnMD5.md5('待加密字符串');
 */
(function(root, factory) {
  var name = "nnMD5";
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

  function MD5() {}

  MD5.prototype.nnMD5rotateLeft = function(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  };

  MD5.prototype.nnMD5addUnsigned = function(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  };


  MD5.prototype.nnMD5F = function(x, y, z) {
    return (x & y) | ((~x) & z); };
  MD5.prototype.nnMD5G = function(x, y, z) {
    return (x & z) | (y & (~z)); };
  MD5.prototype.nnMD5H = function(x, y, z) {
    return (x ^ y ^ z); };
  MD5.prototype.nnMD5I = function(x, y, z) {
    return (y ^ (x | (~z))); };
  MD5.prototype.nnMD5FF = function(a, b, c, d, x, s, ac) { a = this.nnMD5addUnsigned(a, this.nnMD5addUnsigned(this.nnMD5addUnsigned(this.nnMD5F(b, c, d), x), ac));
    return this.nnMD5addUnsigned(this.nnMD5rotateLeft(a, s), b); };
  MD5.prototype.nnMD5GG = function(a, b, c, d, x, s, ac) { a = this.nnMD5addUnsigned(a, this.nnMD5addUnsigned(this.nnMD5addUnsigned(this.nnMD5G(b, c, d), x), ac));
    return this.nnMD5addUnsigned(this.nnMD5rotateLeft(a, s), b); };
  MD5.prototype.nnMD5HH = function(a, b, c, d, x, s, ac) { a = this.nnMD5addUnsigned(a, this.nnMD5addUnsigned(this.nnMD5addUnsigned(this.nnMD5H(b, c, d), x), ac));
    return this.nnMD5addUnsigned(this.nnMD5rotateLeft(a, s), b); };
  MD5.prototype.nnMD5II = function(a, b, c, d, x, s, ac) { a = this.nnMD5addUnsigned(a, this.nnMD5addUnsigned(this.nnMD5addUnsigned(this.nnMD5I(b, c, d), x), ac));
    return this.nnMD5addUnsigned(this.nnMD5rotateLeft(a, s), b); };


  MD5.prototype.nnMD5convertToWordArray = function(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWordsTempOne = lMessageLength + 8;
    var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
    var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };
  MD5.prototype.nnMD5wordToHex = function(lValue) {
    var WordToHexValue = "",
      WordToHexValueTemp = "",
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValueTemp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }
    return WordToHexValue;
  };
  MD5.prototype.nnMD5uTF8Encode = function(string) {
    string = string.replace(/\x0d\x0a/g, "\x0a");
    var output = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        output += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        output += String.fromCharCode((c >> 6) | 192);
        output += String.fromCharCode((c & 63) | 128);
      } else {
        output += String.fromCharCode((c >> 12) | 224);
        output += String.fromCharCode(((c >> 6) & 63) | 128);
        output += String.fromCharCode((c & 63) | 128);
      }
    }
    return output;
  };

  MD5.prototype.md5 = function(string) {
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
    var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
    var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
    var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
    string = this.nnMD5uTF8Encode(string);
    x = this.nnMD5convertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = this.nnMD5FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
      d = this.nnMD5FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
      c = this.nnMD5FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
      b = this.nnMD5FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
      a = this.nnMD5FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
      d = this.nnMD5FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
      c = this.nnMD5FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
      b = this.nnMD5FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
      a = this.nnMD5FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
      d = this.nnMD5FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
      c = this.nnMD5FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
      b = this.nnMD5FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
      a = this.nnMD5FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
      d = this.nnMD5FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
      c = this.nnMD5FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
      b = this.nnMD5FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
      a = this.nnMD5GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
      d = this.nnMD5GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
      c = this.nnMD5GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
      b = this.nnMD5GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
      a = this.nnMD5GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
      d = this.nnMD5GG(d, a, b, c, x[k + 10], S22, 0x2441453);
      c = this.nnMD5GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
      b = this.nnMD5GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
      a = this.nnMD5GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
      d = this.nnMD5GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
      c = this.nnMD5GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
      b = this.nnMD5GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
      a = this.nnMD5GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
      d = this.nnMD5GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
      c = this.nnMD5GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
      b = this.nnMD5GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
      a = this.nnMD5HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
      d = this.nnMD5HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
      c = this.nnMD5HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
      b = this.nnMD5HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
      a = this.nnMD5HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
      d = this.nnMD5HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
      c = this.nnMD5HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
      b = this.nnMD5HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
      a = this.nnMD5HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
      d = this.nnMD5HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
      c = this.nnMD5HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
      b = this.nnMD5HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
      a = this.nnMD5HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
      d = this.nnMD5HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
      c = this.nnMD5HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
      b = this.nnMD5HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
      a = this.nnMD5II(a, b, c, d, x[k + 0], S41, 0xF4292244);
      d = this.nnMD5II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
      c = this.nnMD5II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
      b = this.nnMD5II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
      a = this.nnMD5II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
      d = this.nnMD5II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
      c = this.nnMD5II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
      b = this.nnMD5II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
      a = this.nnMD5II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
      d = this.nnMD5II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
      c = this.nnMD5II(c, d, a, b, x[k + 6], S43, 0xA3014314);
      b = this.nnMD5II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
      a = this.nnMD5II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
      d = this.nnMD5II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
      c = this.nnMD5II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
      b = this.nnMD5II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
      a = this.nnMD5addUnsigned(a, AA);
      b = this.nnMD5addUnsigned(b, BB);
      c = this.nnMD5addUnsigned(c, CC);
      d = this.nnMD5addUnsigned(d, DD);
    }
    var tempValue = this.nnMD5wordToHex(a) + this.nnMD5wordToHex(b) + this.nnMD5wordToHex(c) + this.nnMD5wordToHex(d);
    return tempValue.toLowerCase();
  };

  var md5 = new MD5();
  return md5;
});
