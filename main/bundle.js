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
	
	var _log = __webpack_require__(1);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _set = __webpack_require__(4);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _ajax = __webpack_require__(5);
	
	var _date = __webpack_require__(3);
	
	var _date2 = _interopRequireDefault(_date);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 集合
	/**
	 * 描述: 入口脚本
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/15
	 * 创建时间: 15:57
	 */
	_log2.default.log(_set2.default, "查看set对象"); // ajax工具
	// 日志类
	
	
	_ajax.AjaxUtils.get("./json/hello.json?aa=1", {
	    name: "send",
	    createTime: new _date2.default().format()
	}, function (data) {
	    console.log(data);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(2);
	
	var Config = _interopRequireWildcard(_config);
	
	var _date = __webpack_require__(3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// 导入日期工具
	/**
	 * 描述: 控制台日志
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/14
	 * 创建时间: 16:17
	 */
	var Logger = {}; // 日志对象
	// 导入配置文件
	var emptyMethod = new Function(); // 空方法
	
	for (var k in console) {
	    if (console.hasOwnProperty(k)) Logger[k] = Config.ENABLED_LOGGER ? console[k] : emptyMethod;
	}
	
	if (Config.ENABLED_LOGGER) {
	    // 当启用日志时，重写Logger.log方法
	    Logger.log = function (log) {
	        var des = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	        if (des.length > 0) {
	            console.log('↓↓↓[' + new _date.DateUtils().format() + '] : ' + des);
	        }
	        console.log(log);
	    };
	}
	
	exports.default = Logger;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 描述: 项目配置文件
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/14
	 * 创建时间: 16:28
	 */
	var ENABLED_LOGGER = exports.ENABLED_LOGGER = true; // 是否启用控制台日志(true:启用;false:不启用;)

/***/ },
/* 3 */
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var s = new Set();
	var array = [1, 2, 3, 4, 5, 6, 7];
	
	array.map(function (x) {
	  return s.add(x);
	});
	
	exports.default = "Set";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AjaxUtils = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 描述: ajax工具
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 版权: Copyright (c) 2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 公司: 深圳市昊晨科技开发有限公司
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 作者: 陈元
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 版本: 1.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 创建日期: 2016/11/15
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 创建时间: 15:58
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _log = __webpack_require__(1);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// 日志工具
	var Ajax = function () {
	    function Ajax() {
	        _classCallCheck(this, Ajax);
	    }
	
	    _createClass(Ajax, [{
	        key: "getRequestParams",
	        value: function getRequestParams(params) {
	            var defaultParams = { // 默认请求入参
	                contentType: "application/json",
	                dataType: "json",
	                type: "POST",
	                params: {}
	            };
	            for (var k in params) {
	                if (params.hasOwnProperty(k)) defaultParams[k] = params[k];
	            }
	            return defaultParams;
	        }
	
	        /**
	         * 请求数据
	         * @param params
	         * @returns {Promise}
	         */
	
	    }, {
	        key: "ajax",
	        value: function ajax(params) {
	            params = this.getRequestParams(params);
	            return new Promise(function (resolve, reject) {
	                var client = new XMLHttpRequest(); // 创建XMLHttpRequest对象
	                if (params.type.toLocaleUpperCase() == "GET") {
	                    // GET方式请求将参数加入到地址
	                    var url = [];
	                    for (var k in params.params) {
	                        url.push(k + '=' + params.params[k]);
	                    }
	                    if (new RegExp("\\?$").test(params.url)) {
	                        params.url += url.join("&");
	                    } else if (new RegExp("\\?[^\\?]+$").test(params.url)) {
	                        params.url += "&" + url.join("&");
	                    } else if (new RegExp("^[^\\?]+$").test(params.url)) {
	                        params.url += "?" + url.join("&");
	                    }
	                }
	                _log2.default.log(params.url, "请求地址");
	                client.open(params.type, params.url);
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
	                client.responseType = params.dataType;
	                client.setRequestHeader("Accept", params.contentType);
	                client.send(JSON.stringify(params.params));
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
	
	            this.ajax({ url: url, type: "GET", params: params }).then(successCallBack, errorCallBack);
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA5Mjg3MjYxNmZhZTA1M2UxODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXRNYXAvc2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2FqYXguanMiXSwibmFtZXMiOlsibG9nIiwiZ2V0IiwibmFtZSIsImNyZWF0ZVRpbWUiLCJmb3JtYXQiLCJkYXRhIiwiY29uc29sZSIsIkNvbmZpZyIsIkxvZ2dlciIsImVtcHR5TWV0aG9kIiwiRnVuY3Rpb24iLCJrIiwiaGFzT3duUHJvcGVydHkiLCJFTkFCTEVEX0xPR0dFUiIsImRlcyIsImxlbmd0aCIsIkRhdGVVdGlscyIsImRhdGUiLCJEYXRlIiwiYXJndW1lbnRzIiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJSZWdFeHAiLCJ0ZXN0IiwicmVwbGFjZSIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJzIiwiU2V0IiwiYXJyYXkiLCJtYXAiLCJhZGQiLCJ4IiwiQWpheCIsInBhcmFtcyIsImRlZmF1bHRQYXJhbXMiLCJjb250ZW50VHlwZSIsImRhdGFUeXBlIiwidHlwZSIsImdldFJlcXVlc3RQYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsaWVudCIsIlhNTEh0dHBSZXF1ZXN0IiwidG9Mb2NhbGVVcHBlckNhc2UiLCJ1cmwiLCJwdXNoIiwiam9pbiIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJoYW5kbGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJFcnJvciIsInN0YXR1c1RleHQiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzQ2FsbEJhY2siLCJlcnJvckNhbGxCYWNrIiwiYWpheCIsInRoZW4iLCJBamF4VXRpbHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3QkE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFGZ0Q7QUFWaEQ7Ozs7Ozs7OztBQWNBLGVBQU9BLEdBQVAsZ0JBQWdCLFNBQWhCLEUsQ0FIa0Q7QUFGRjs7O0FBT2hELGlCQUFVQyxHQUFWLENBQWMsd0JBQWQsRUFBd0M7QUFDcENDLFdBQU0sTUFEOEI7QUFFcENDLGlCQUFZLHFCQUFnQkMsTUFBaEI7QUFGd0IsRUFBeEMsRUFHRyxVQUFVQyxJQUFWLEVBQWdCO0FBQ2ZDLGFBQVFOLEdBQVIsQ0FBWUssSUFBWjtBQUNILEVBTEQsRTs7Ozs7Ozs7Ozs7O0FDUEE7O0tBQVlFLE07O0FBQ1o7Ozs7QUFBd0M7QUFWeEM7Ozs7Ozs7OztBQVdBLEtBQUlDLFNBQVMsRUFBYixDLENBQXlDO0FBRkQ7QUFHeEMsS0FBSUMsY0FBYyxJQUFJQyxRQUFKLEVBQWxCLEMsQ0FBeUM7O0FBRXpDLE1BQUssSUFBSUMsQ0FBVCxJQUFjTCxPQUFkLEVBQXVCO0FBQ25CLFNBQUlBLFFBQVFNLGNBQVIsQ0FBdUJELENBQXZCLENBQUosRUFBK0JILE9BQU9HLENBQVAsSUFBWUosT0FBT00sY0FBUCxHQUF3QlAsUUFBUUssQ0FBUixDQUF4QixHQUFxQ0YsV0FBakQ7QUFDbEM7O0FB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QyxFQUFWLEVBQW1EK0IsSUFBbkQsQ0FBd0RILGVBQXhELEVBQXlFQyxhQUF6RTtBQUNIOztBQUVEOzs7Ozs7Ozs7OzhCQU9LakIsRyxFQUFvRjtBQUFBLGlCQUEvRVosTUFBK0UsdUVBQXRFLEVBQXNFO0FBQUEsaUJBQWxFNEIsZUFBa0UsdUVBQWhELElBQUk1RCxRQUFKLEVBQWdEO0FBQUEsaUJBQWhDNkQsYUFBZ0MsdUVBQWhCLElBQUk3RCxRQUFKLEVBQWdCOztBQUNyRixrQkFBSzhELElBQUwsQ0FBVSxFQUFDbEIsS0FBS0EsR0FBTixFQUFXUixNQUFNLE1BQWpCLEVBQXlCSixRQUFRQSxNQUFqQyxFQUFWLEVBQW9EK0IsSUFBcEQsQ0FBeURILGVBQXpELEVBQTBFQyxhQUExRTtBQUNIOzs7Ozs7QUFHTCxLQUFJRyxZQUFZLElBQUlqQyxJQUFKLEVBQWhCOzttQkFFZWlDLFM7U0FDUEEsUyxHQUFBQSxTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vbWFpbi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MDkyODcyNjE2ZmFlMDUzZTE4OCIsIi8qKlxyXG4gKiDmj4/ov7A6IOWFpeWPo+iEmuacrFxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMTVcclxuICog5Yib5bu65pe26Ze0OiAxNTo1N1xyXG4gKi9cclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9zY3JpcHRzL3V0aWxzL2xvZ1wiOyAgICAgICAvLyDml6Xlv5fnsbtcclxuaW1wb3J0IHNldCBmcm9tIFwiLi9zY3JpcHRzL3NldE1hcC9zZXRcIjsgICAgICAgICAvLyDpm4blkIhcclxuaW1wb3J0IHtBamF4VXRpbHN9IGZyb20gXCIuL3NjcmlwdHMvdXRpbHMvYWpheFwiOyAgIC8vIGFqYXjlt6XlhbdcclxuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi9zY3JpcHRzL3V0aWxzL2RhdGVcIjtcclxuXHJcbkxvZ2dlci5sb2coc2V0LCBcIuafpeeci3NldOWvueixoVwiKTtcclxuXHJcbkFqYXhVdGlscy5nZXQoXCIuL2pzb24vaGVsbG8uanNvbj9hYT0xXCIsIHtcclxuICAgIG5hbWU6IFwic2VuZFwiLFxyXG4gICAgY3JlYXRlVGltZTogbmV3IERhdGVVdGlscygpLmZvcm1hdCgpXHJcbn0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJ5LmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog5o6n5Yi25Y+w5pel5b+XXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNFxyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjE3XHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiOyAgICAvLyDlr7zlhaXphY3nva7mlofku7ZcclxuaW1wb3J0IHtEYXRlVXRpbHN9IGZyb20gXCIuL2RhdGVcIjsgICAgICAgLy8g5a+85YWl5pel5pyf5bel5YW3XHJcbmxldCBMb2dnZXIgPSB7fTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pel5b+X5a+56LGhXHJcbmxldCBlbXB0eU1ldGhvZCA9IG5ldyBGdW5jdGlvbigpOyAgICAgICAgLy8g56m65pa55rOVXHJcblxyXG5mb3IgKGxldCBrIGluIGNvbnNvbGUpIHtcclxuICAgIGlmIChjb25zb2xlLmhhc093blByb3BlcnR5KGspKSBMb2dnZXJba10gPSBDb25maWcuRU5BQkxFRF9MT0dHRVIgPyBjb25zb2xlW2tdIDogZW1wdHlNZXRob2Q7XHJcbn1cclxuXHJcbmlmIChDb25maWcuRU5BQkxFRF9MT0dHRVIpIHsgICAgICAgICAgICAgIC8vIOW9k+WQr+eUqOaXpeW/l+aXtu+8jOmHjeWGmUxvZ2dlci5sb2fmlrnms5VcclxuICAgIExvZ2dlci5sb2cgPSBmdW5jdGlvbiAobG9nLCBkZXMgPSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKGRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfihpPihpPihpNbJyArIG5ldyBEYXRlVXRpbHMoKS5mb3JtYXQoKSArICddIDogJyArIGRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91dGlscy9sb2cuanMiLCIvKipcclxuICog5o+P6L+wOiDpobnnm67phY3nva7mlofku7ZcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzE0XHJcbiAqIOWIm+W7uuaXtumXtDogMTY6MjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBFTkFCTEVEX0xPR0dFUiA9IHRydWU7ICAgICAgICAgICAgLy8g5piv5ZCm5ZCv55So5o6n5Yi25Y+w5pel5b+XKHRydWU65ZCv55SoO2ZhbHNlOuS4jeWQr+eUqDspXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY29uZmlnLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog5pe26Ze05aSE55CG5bel5YW3XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNVxyXG4gKiDliJvlu7rml7bpl7Q6IDk6MzRcclxuICovXHJcbmNsYXNzIERhdGVVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSguLi5hcmd1bWVudHMpOyAgICAgICAgICAgICAvLyDlvZPliY3ml7bpl7RcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAgICogQHBhcmFtIGZvcm1hdCDov5Tlm57nmoTml7bpl7TmoLzlvI8oZGVmYXVsdDogeXl5eS1NTS1kZCBoaDptbTpzcylcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOi/lOWbnuS4gOS4quagvOW8j+WMluWQjueahOaXtumXtOWtl+S4slxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoZm9ybWF0ID0gXCJ5eXl5LU1NLWRkIGhoOm1tOnNzXCIpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IHRoaXMuZGF0ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3lrp7kvovljJbml7bnmoTml7bpl7RcclxuICAgICAgICB2YXIgbyA9IHtcclxuICAgICAgICAgICAgXCJNK1wiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAgICAgICAgICAgICAgICAgICAgICAvL21vbnRoXHJcbiAgICAgICAgICAgIFwiZCtcIjogZGF0ZS5nZXREYXRlKCksICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXlcclxuICAgICAgICAgICAgXCJoK1wiOiBkYXRlLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvdXJcclxuICAgICAgICAgICAgXCJtK1wiOiBkYXRlLmdldE1pbnV0ZXMoKSwgICAgICAgICAgICAgICAgICAgICAgICAvL21pbnV0ZVxyXG4gICAgICAgICAgICBcInMrXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Vjb25kXHJcbiAgICAgICAgICAgIFwicStcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgICAgLy9xdWFydGVyXHJcbiAgICAgICAgICAgIFwiUytcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAgICAgICAgLy9taWxsaXNlY29uZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKHkrKVwiKS50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoUmVnRXhwLiQxLCBSZWdFeHAuJDEubGVuZ3RoID09IDEgPyBvW2tdIDogKFwiMDBcIiArIG9ba10pLnN1YnN0cigoXCJcIiArIG9ba10pLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVVdGlscztcclxuZXhwb3J0IHtEYXRlVXRpbHN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3V0aWxzL2RhdGUuanMiLCJsZXQgcyA9IG5ldyBTZXQoKTtcclxubGV0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xyXG5cclxuYXJyYXkubWFwKHg9PnMuYWRkKHgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiU2V0XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc2V0TWFwL3NldC5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IGFqYXjlt6XlhbdcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzE1XHJcbiAqIOWIm+W7uuaXtumXtDogMTU6NThcclxuICovXHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vbG9nXCI7ICAgICAgICAgICAgICAgICAvLyDml6Xlv5flt6XlhbdcclxuY2xhc3MgQWpheCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXF1ZXN0UGFyYW1zKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBkZWZhdWx0UGFyYW1zID0geyAgICAgICAgICAgICAgICAgIC8vIOm7mOiupOivt+axguWFpeWPglxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHBhcmFtczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0UGFyYW1zW2tdID0gcGFyYW1zW2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivt+axguaVsOaNrlxyXG4gICAgICogQHBhcmFtIHBhcmFtc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGFqYXgocGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zID0gdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICAgICAgICAgICAgICAgICAgLy8g5Yib5bu6WE1MSHR0cFJlcXVlc3Tlr7nosaFcclxuICAgICAgICAgICAgaWYgKHBhcmFtcy50eXBlLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT0gXCJHRVRcIikgeyAgICAgLy8gR0VU5pa55byP6K+35rGC5bCG5Y+C5pWw5Yqg5YWl5Yiw5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIGluIHBhcmFtcy5wYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwucHVzaChrICsgJz0nICsgcGFyYW1zLnBhcmFtc1trXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIlxcXFw/JFwiKS50ZXN0KHBhcmFtcy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVybCArPSB1cmwuam9pbihcIiZcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldyBSZWdFeHAoXCJcXFxcP1teXFxcXD9dKyRcIikudGVzdChwYXJhbXMudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy51cmwgKz0gXCImXCIgKyB1cmwuam9pbihcIiZcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ldyBSZWdFeHAoXCJeW15cXFxcP10rJFwiKS50ZXN0KHBhcmFtcy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVybCArPSBcIj9cIiArIHVybC5qb2luKFwiJlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBMb2dnZXIubG9nKHBhcmFtcy51cmwsIFwi6K+35rGC5Zyw5Z2AXCIpO1xyXG4gICAgICAgICAgICBjbGllbnQub3BlbihwYXJhbXMudHlwZSwgcGFyYW1zLnVybCk7XHJcbiAgICAgICAgICAgIGNsaWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRoaXMuc3RhdHVzVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjbGllbnQucmVzcG9uc2VUeXBlID0gcGFyYW1zLmRhdGFUeXBlO1xyXG4gICAgICAgICAgICBjbGllbnQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBwYXJhbXMuY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMucGFyYW1zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHRVTmlrnlvI/or7fmsYLmlbDmja5cclxuICAgICAqIEBwYXJhbSB1cmwg6K+35rGC5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIOivt+axguWFpeWPglxyXG4gICAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsQmFjayDmiJDlip/lm57osIPmlrnms5VcclxuICAgICAqIEBwYXJhbSBlcnJvckNhbGxCYWNrIOWksei0peWbnuiwg+aWueazlVxyXG4gICAgICovXHJcbiAgICBnZXQodXJsLCBwYXJhbXMgPSB7fSwgc3VjY2Vzc0NhbGxCYWNrID0gbmV3IEZ1bmN0aW9uKCksIGVycm9yQ2FsbEJhY2sgPSBuZXcgRnVuY3Rpb24oKSkge1xyXG4gICAgICAgIHRoaXMuYWpheCh7dXJsOiB1cmwsIHR5cGU6IFwiR0VUXCIsIHBhcmFtczogcGFyYW1zfSkudGhlbihzdWNjZXNzQ2FsbEJhY2ssIGVycm9yQ2FsbEJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUE9TVOaWueW8j+ivt+axguaVsOaNrlxyXG4gICAgICogQHBhcmFtIHVybCDor7fmsYLlnLDlnYBcclxuICAgICAqIEBwYXJhbSBwYXJhbXMg6K+35rGC5YWl5Y+CXHJcbiAgICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxCYWNrIOaIkOWKn+Wbnuiwg+aWueazlVxyXG4gICAgICogQHBhcmFtIGVycm9yQ2FsbEJhY2sg5aSx6LSl5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHBvc3QodXJsLCBwYXJhbXMgPSB7fSwgc3VjY2Vzc0NhbGxCYWNrID0gbmV3IEZ1bmN0aW9uKCksIGVycm9yQ2FsbEJhY2sgPSBuZXcgRnVuY3Rpb24oKSkge1xyXG4gICAgICAgIHRoaXMuYWpheCh7dXJsOiB1cmwsIHR5cGU6IFwiUE9TVFwiLCBwYXJhbXM6IHBhcmFtc30pLnRoZW4oc3VjY2Vzc0NhbGxCYWNrLCBlcnJvckNhbGxCYWNrKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IEFqYXhVdGlscyA9IG5ldyBBamF4KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBamF4VXRpbHM7XHJcbmV4cG9ydCB7QWpheFV0aWxzfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91dGlscy9hamF4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==