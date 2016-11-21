/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./main/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _ajax = __webpack_require__(1);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	var _date = __webpack_require__(2);
	
	var _date2 = _interopRequireDefault(_date);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 描述: 入口脚本
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/15
	 * 创建时间: 15:57
	 */
	// import set from "./scripts/setMap/set";         // 集合
	// import map from "./scripts/setMap/map";           // map
	// import symbol from "./scripts/symbol/symbol";
	var params = new Map(); // 请求入参
	params.set("name", "GET请求测试！"); // 请求名
	params.set("createTime", new _date2.default().format()); // 请求时间
	_ajax2.default.get("./json/hello.json?aa=1", null, function (data) {
	  console.log(data);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 描述: ajax工具
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/15
	 * 创建时间: 15:58
	 */
	var getParams = Symbol("getParams");
	
	var Ajax = function () {
	    function Ajax() {
	        _classCallCheck(this, Ajax);
	    }
	
	    /**
	     * 获取请求入参,如果没有参数，则使用默认
	     * @param params 请求设置
	     * @returns {Map}
	     */
	
	
	    _createClass(Ajax, [{
	        key: getParams,
	        value: function value(params) {
	            var setting = new Map(); // 默认请求入参
	            setting.set("contentType", "application/json"); // 默认文件类型
	            setting.set("dataType", "json"); // 默认返回数据类型
	            setting.set("type", "POST"); // 默认提交方式
	            setting.set("params", new Map()); // 默认提交参数
	
	            for (var k in params) {
	                if (params.hasOwnProperty(k)) setting.set(k, params[k]);
	            }
	            return setting;
	        }
	
	        /**
	         * 请求数据
	         * @param setting 请求设置
	         * @returns {Promise}
	         */
	
	    }, {
	        key: "ajax",
	        value: function ajax(setting) {
	            setting = this[getParams](setting);
	            if (!(setting.get("params") instanceof Map)) {
	                throw new TypeError("请求入参对象类型只能为Map");
	            }
	            return new Promise(function (resolve, reject) {
	                var client = new XMLHttpRequest(); // 创建XMLHttpRequest对象
	                if (setting.get("type").toLocaleUpperCase() == "GET") {
	                    // GET方式请求将参数加入到地址
	                    var url = setting.get("url"); // 请求设置-请求路径
	                    var array = []; // 参数数组
	                    var params = setting.get("params"); // 入参Map对象
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = params.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var _step$value = _slicedToArray(_step.value, 2),
	                                key = _step$value[0],
	                                val = _step$value[1];
	
	                            // 将入参Map对象传入参数数组
	                            array.push(key + '=' + val);
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	
	                    if (new RegExp("\\?$").test(url)) {
	                        url += array.join("&");
	                    } else if (new RegExp("\\?[^\\?]+$").test(url)) {
	                        url += "&" + array.join("&");
	                    } else if (new RegExp("^[^\\?]+$").test(url)) {
	                        url += "?" + array.join("&");
	                    }
	                    setting.set("url", url);
	                }
	                client.open(setting.get("type"), setting.get("url"));
	                client.onreadystatechange = function handle() {
	                    if (this.readyState !== 4) {
	                        return;
	                    }
	                    if (this.status === 200) {
	                        resolve(this.response);
	                    } else {
	                        reject(new Error(this.statusText));
	                    }
	                };
	                client.responseType = setting.get("dataType");
	                client.setRequestHeader("Accept", setting.get("contentType"));
	                client.send(JSON.stringify(setting.get("params")));
	            });
	        }
	
	        /**
	         * GET方式请求数据
	         * @param url 请求地址
	         * @param params 请求入参
	         * @param successCallBack 成功回调方法
	         * @param errorCallBack 失败回调方法
	         */
	
	    }, {
	        key: "get",
	        value: function get(url) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var successCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Function();
	            var errorCallBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Function();
	
	            this.ajax({ url: url, type: "GET", params: params || new Map() }).then(successCallBack, errorCallBack);
	        }
	
	        /**
	         * POST方式请求数据
	         * @param url 请求地址
	         * @param params 请求入参
	         * @param successCallBack 成功回调方法
	         * @param errorCallBack 失败回调方法
	         */
	
	    }, {
	        key: "post",
	        value: function post(url) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var successCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Function();
	            var errorCallBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Function();
	
	            this.ajax({ url: url, type: "POST", params: params }).then(successCallBack, errorCallBack);
	        }
	    }]);
	
	    return Ajax;
	}();
	
	var AjaxUtils = new Ajax();
	
	exports.default = AjaxUtils;
	exports.AjaxUtils = AjaxUtils;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 描述: 时间处理工具
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/15
	 * 创建时间: 9:34
	 */
	var DateUtils = function () {
	    function DateUtils() {
	        _classCallCheck(this, DateUtils);
	
	        this.date = new (Function.prototype.bind.apply(Date, [null].concat(Array.prototype.slice.call(arguments))))(); // 当前时间
	    }
	
	    /**
	     * 格式化时间
	     * @param format 返回的时间格式(default: yyyy-MM-dd hh:mm:ss)
	     * @returns {string} 返回一个格式化后的时间字串
	     */
	
	
	    _createClass(DateUtils, [{
	        key: "format",
	        value: function format() {
	            var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yyyy-MM-dd hh:mm:ss";
	
	            var date = this.date; // 当前实例化时的时间
	            var o = {
	                "M+": date.getMonth() + 1, //month
	                "d+": date.getDate(), //day
	                "h+": date.getHours(), //hour
	                "m+": date.getMinutes(), //minute
	                "s+": date.getSeconds(), //second
	                "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
	                "S+": date.getMilliseconds() //millisecond
	            };
	
	            if (new RegExp("(y+)").test(_format)) {
	                _format = _format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	            }
	
	            for (var k in o) {
	                if (new RegExp("(" + k + ")").test(_format)) {
	                    _format = _format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	                }
	            }
	            return _format;
	        }
	    }]);
	
	    return DateUtils;
	}();
	
	exports.default = DateUtils;
	exports.DateUtils = DateUtils;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2FlYjBlYTUyODBhYzhkYmY2YzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMvZGF0ZS5qcyJdLCJuYW1lcyI6WyJwYXJhbXMiLCJNYXAiLCJzZXQiLCJmb3JtYXQiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFBhcmFtcyIsIlN5bWJvbCIsIkFqYXgiLCJzZXR0aW5nIiwiayIsImhhc093blByb3BlcnR5IiwiVHlwZUVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjbGllbnQiLCJYTUxIdHRwUmVxdWVzdCIsInRvTG9jYWxlVXBwZXJDYXNlIiwidXJsIiwiYXJyYXkiLCJlbnRyaWVzIiwia2V5IiwidmFsIiwicHVzaCIsIlJlZ0V4cCIsInRlc3QiLCJqb2luIiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImhhbmRsZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkVycm9yIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVHlwZSIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3NDYWxsQmFjayIsIkZ1bmN0aW9uIiwiZXJyb3JDYWxsQmFjayIsImFqYXgiLCJ0eXBlIiwidGhlbiIsIkFqYXhVdGlscyIsIkRhdGVVdGlscyIsImRhdGUiLCJEYXRlIiwiYXJndW1lbnRzIiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJyZXBsYWNlIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7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LFM7U0FDUEEsUyxHQUFBQSxTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vbWFpbi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYWViMGVhNTI4MGFjOGRiZjZjNiIsIi8qKlxyXG4gKiDmj4/ov7A6IOWFpeWPo+iEmuacrFxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMTVcclxuICog5Yib5bu65pe26Ze0OiAxNTo1N1xyXG4gKi9cclxuLy8gaW1wb3J0IHNldCBmcm9tIFwiLi9zY3JpcHRzL3NldE1hcC9zZXRcIjsgICAgICAgICAvLyDpm4blkIhcclxuLy8gaW1wb3J0IG1hcCBmcm9tIFwiLi9zY3JpcHRzL3NldE1hcC9tYXBcIjsgICAgICAgICAgIC8vIG1hcFxyXG4vLyBpbXBvcnQgc3ltYm9sIGZyb20gXCIuL3NjcmlwdHMvc3ltYm9sL3N5bWJvbFwiO1xyXG5pbXBvcnQgQWpheFV0aWxzIGZyb20gXCIuL3NjcmlwdHMvdXRpbHMvYWpheFwiO1xyXG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3NjcmlwdHMvdXRpbHMvZGF0ZVwiO1xyXG5cclxuXHJcbnZhciBwYXJhbXMgPSBuZXcgTWFwKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6K+35rGC5YWl5Y+CXHJcbnBhcmFtcy5zZXQoXCJuYW1lXCIsIFwiR0VU6K+35rGC5rWL6K+V77yBXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOivt+axguWQjVxyXG5wYXJhbXMuc2V0KFwiY3JlYXRlVGltZVwiLCBuZXcgRGF0ZVV0aWxzKCkuZm9ybWF0KCkpOyAgICAgICAgICAgICAgICAgLy8g6K+35rGC5pe26Ze0XHJcbkFqYXhVdGlscy5nZXQoXCIuL2pzb24vaGVsbG8uanNvbj9hYT0xXCIsIG51bGwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cnkuanMiLCIvKipcclxuICog5o+P6L+wOiBhamF45bel5YW3XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNVxyXG4gKiDliJvlu7rml7bpl7Q6IDE1OjU4XHJcbiAqL1xyXG5jb25zdCBnZXRQYXJhbXMgPSBTeW1ib2woXCJnZXRQYXJhbXNcIik7XHJcbmNsYXNzIEFqYXgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6K+35rGC5YWl5Y+CLOWmguaenOayoeacieWPguaVsO+8jOWImeS9v+eUqOm7mOiupFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyDor7fmsYLorr7nva5cclxuICAgICAqIEByZXR1cm5zIHtNYXB9XHJcbiAgICAgKi9cclxuICAgIFtnZXRQYXJhbXNdKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBzZXR0aW5nID0gbmV3IE1hcCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOm7mOiupOivt+axguWFpeWPglxyXG4gICAgICAgIHNldHRpbmcuc2V0KFwiY29udGVudFR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpOyAgICAgLy8g6buY6K6k5paH5Lu257G75Z6LXHJcbiAgICAgICAgc2V0dGluZy5zZXQoXCJkYXRhVHlwZVwiLCBcImpzb25cIik7ICAgICAgICAgICAgICAgICAgICAvLyDpu5jorqTov5Tlm57mlbDmja7nsbvlnotcclxuICAgICAgICBzZXR0aW5nLnNldChcInR5cGVcIiwgXCJQT1NUXCIpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIOm7mOiupOaPkOS6pOaWueW8j1xyXG4gICAgICAgIHNldHRpbmcuc2V0KFwicGFyYW1zXCIsIG5ldyBNYXAoKSk7ICAgICAgICAgICAgICAgICAgIC8vIOm7mOiupOaPkOS6pOWPguaVsFxyXG5cclxuICAgICAgICBmb3IgKGxldCBrIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5zZXQoaywgcGFyYW1zW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDor7fmsYLmlbDmja5cclxuICAgICAqIEBwYXJhbSBzZXR0aW5nIOivt+axguiuvue9rlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFqYXgoc2V0dGluZykge1xyXG4gICAgICAgIHNldHRpbmcgPSB0aGlzW2dldFBhcmFtc10oc2V0dGluZyk7XHJcbiAgICAgICAgaWYgKCEoc2V0dGluZy5nZXQoXCJwYXJhbXNcIikgaW5zdGFuY2VvZiBNYXApKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCLor7fmsYLlhaXlj4Llr7nosaHnsbvlnovlj6rog73kuLpNYXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yib5bu6WE1MSHR0cFJlcXVlc3Tlr7nosaFcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcuZ2V0KFwidHlwZVwiKS50b0xvY2FsZVVwcGVyQ2FzZSgpID09IFwiR0VUXCIpIHsgICAgICAgICAgICAgICAgIC8vIEdFVOaWueW8j+ivt+axguWwhuWPguaVsOWKoOWFpeWIsOWcsOWdgFxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHNldHRpbmcuZ2V0KFwidXJsXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOivt+axguiuvue9ri3or7fmsYLot6/lvoRcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheSA9IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+C5pWw5pWw57uEXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gc2V0dGluZy5nZXQoXCJwYXJhbXNcIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWl5Y+CTWFw5a+56LGhXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIHBhcmFtcy5lbnRyaWVzKCkpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwhuWFpeWPgk1hcOWvueixoeS8oOWFpeWPguaVsOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2goa2V5ICsgJz0nICsgdmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiXFxcXD8kXCIpLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBhcnJheS5qb2luKFwiJlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3IFJlZ0V4cChcIlxcXFw/W15cXFxcP10rJFwiKS50ZXN0KHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCImXCIgKyBhcnJheS5qb2luKFwiJlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3IFJlZ0V4cChcIl5bXlxcXFw/XSskXCIpLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIj9cIiArIGFycmF5LmpvaW4oXCImXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5zZXQoXCJ1cmxcIiwgdXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGllbnQub3BlbihzZXR0aW5nLmdldChcInR5cGVcIiksIHNldHRpbmcuZ2V0KFwidXJsXCIpKTtcclxuICAgICAgICAgICAgY2xpZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodGhpcy5zdGF0dXNUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNsaWVudC5yZXNwb25zZVR5cGUgPSBzZXR0aW5nLmdldChcImRhdGFUeXBlXCIpO1xyXG4gICAgICAgICAgICBjbGllbnQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBzZXR0aW5nLmdldChcImNvbnRlbnRUeXBlXCIpKTtcclxuICAgICAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoc2V0dGluZy5nZXQoXCJwYXJhbXNcIikpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdFVOaWueW8j+ivt+axguaVsOaNrlxyXG4gICAgICogQHBhcmFtIHVybCDor7fmsYLlnLDlnYBcclxuICAgICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5YWl5Y+CXHJcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxCYWNrIOaIkOWKn+Wbnuiwg+aWueazlVxyXG4gICAgICogQHBhcmFtIGVycm9yQ2FsbEJhY2sg5aSx6LSl5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmwsIHBhcmFtcyA9IHt9LCBzdWNjZXNzQ2FsbEJhY2sgPSBuZXcgRnVuY3Rpb24oKSwgZXJyb3JDYWxsQmFjayA9IG5ldyBGdW5jdGlvbigpKSB7XHJcbiAgICAgICAgdGhpcy5hamF4KHt1cmw6IHVybCwgdHlwZTogXCJHRVRcIiwgcGFyYW1zOiBwYXJhbXMgfHwgbmV3IE1hcCgpfSkudGhlbihzdWNjZXNzQ2FsbEJhY2ssIGVycm9yQ2FsbEJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUE9TVOaWueW8j+ivt+axguaVsOaNrlxyXG4gICAgICogQHBhcmFtIHVybCDor7fmsYLlnLDlnYBcclxuICAgICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5YWl5Y+CXHJcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxCYWNrIOaIkOWKn+Wbnuiwg+aWueazlVxyXG4gICAgICogQHBhcmFtIGVycm9yQ2FsbEJhY2sg5aSx6LSl5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsLCBwYXJhbXMgPSB7fSwgc3VjY2Vzc0NhbGxCYWNrID0gbmV3IEZ1bmN0aW9uKCksIGVycm9yQ2FsbEJhY2sgPSBuZXcgRnVuY3Rpb24oKSkge1xyXG4gICAgICAgIHRoaXMuYWpheCh7dXJsOiB1cmwsIHR5cGU6IFwiUE9TVFwiLCBwYXJhbXM6IHBhcmFtc30pLnRoZW4oc3VjY2Vzc0NhbGxCYWNrLCBlcnJvckNhbGxCYWNrKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IEFqYXhVdGlscyA9IG5ldyBBamF4KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBamF4VXRpbHM7XHJcbmV4cG9ydCB7QWpheFV0aWxzfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91dGlscy9hamF4LmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog5pe26Ze05aSE55CG5bel5YW3XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNVxyXG4gKiDliJvlu7rml7bpl7Q6IDk6MzRcclxuICovXHJcbmNsYXNzIERhdGVVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSguLi5hcmd1bWVudHMpOyAgICAgICAgICAgICAvLyDlvZPliY3ml7bpl7RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAgICogQHBhcmFtIGZvcm1hdCDov5Tlm57nmoTml7bpl7TmoLzlvI8oZGVmYXVsdDogeXl5eS1NTS1kZCBoaDptbTpzcylcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOi/lOWbnuS4gOS4quagvOW8j+WMluWQjueahOaXtumXtOWtl+S4slxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoZm9ybWF0ID0gXCJ5eXl5LU1NLWRkIGhoOm1tOnNzXCIpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZGF0ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3lrp7kvovljJbml7bnmoTml7bpl7RcclxuICAgICAgICB2YXIgbyA9IHtcclxuICAgICAgICAgICAgXCJNK1wiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAgICAgICAgICAgICAgICAgICAgICAvL21vbnRoXHJcbiAgICAgICAgICAgIFwiZCtcIjogZGF0ZS5nZXREYXRlKCksICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXlcclxuICAgICAgICAgICAgXCJoK1wiOiBkYXRlLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvdXJcclxuICAgICAgICAgICAgXCJtK1wiOiBkYXRlLmdldE1pbnV0ZXMoKSwgICAgICAgICAgICAgICAgICAgICAgICAvL21pbnV0ZVxyXG4gICAgICAgICAgICBcInMrXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Vjb25kXHJcbiAgICAgICAgICAgIFwicStcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgICAgLy9xdWFydGVyXHJcbiAgICAgICAgICAgIFwiUytcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAgICAgICAgLy9taWxsaXNlY29uZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKHkrKVwiKS50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCBSZWdFeHAuJDEubGVuZ3RoID09IDEgPyBvW2tdIDogKFwiMDBcIiArIG9ba10pLnN1YnN0cigoXCJcIiArIG9ba10pLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVVdGlscztcclxuZXhwb3J0IHtEYXRlVXRpbHN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3V0aWxzL2RhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9