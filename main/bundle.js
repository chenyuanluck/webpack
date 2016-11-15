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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_log2.default.log(_set2.default, "查看set对象");

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzkxYTlmOWU4OTU1MGUxYmVmNGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXRNYXAvc2V0LmpzIl0sIm5hbWVzIjpbImxvZyIsIkNvbmZpZyIsIkxvZ2dlciIsImVtcHR5TWV0aG9kIiwiRnVuY3Rpb24iLCJrIiwiY29uc29sZSIsImhhc093blByb3BlcnR5IiwiRU5BQkxFRF9MT0dHRVIiLCJkZXMiLCJsZW5ndGgiLCJmb3JtYXQiLCJEYXRlVXRpbHMiLCJkYXRlIiwiRGF0ZSIsImFyZ3VtZW50cyIsIm8iLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiZ2V0TWlsbGlzZWNvbmRzIiwiUmVnRXhwIiwidGVzdCIsInJlcGxhY2UiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwicyIsIlNldCIsImFycmF5IiwibWFwIiwiYWRkIiwieCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7Ozs7QUFFQSxlQUFPQSxHQUFQLGdCQUFnQixTQUFoQixFOzs7Ozs7Ozs7Ozs7QUNNQTs7S0FBWUMsTTs7QUFDWjs7OztBQUF3QztBQVZ4Qzs7Ozs7Ozs7O0FBV0EsS0FBSUMsU0FBUyxFQUFiLEMsQ0FBeUM7QUFGRDtBQUd4QyxLQUFJQyxjQUFjLElBQUlDLFFBQUosRUFBbEIsQyxDQUF5Qzs7QUFFekMsTUFBSyxJQUFJQyxDQUFULElBQWNDLE9BQWQsRUFBdUI7QUFDbkIsU0FBSUEsUUFBUUMsY0FBUixDQUF1QkYsQ0FBdkIsQ0FBSixFQUErQkgsT0FBT0csQ0FBUCxJQUFZSixPQUFPTyxjQUFQLEdBQXdCRixRQUFRRCxDQUFSLENBQXhCLEdBQXFDRixXQUFqRDtBQUNsQzs7QUFFRCxLQUFJRixPQUFPTyxjQUFYLEVBQTJCO0FBQWU7QUFDdENOLFlBQU9GLEdBQVAsR0FBYSxVQUFVQSxHQUFWLEVBQXlCO0FBQUEsYUFBVlMsR0FBVSx1RUFBSixFQUFJOztBQUNsQyxhQUFJQSxJQUFJQyxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJKLHFCQUFRTixHQUFSLENBQVksU0FBUyxzQkFBZ0JXLE1BQWhCLEVBQVQsR0FBb0MsTUFBcEMsR0FBNkNGLEdBQXpEO0FBQ0g7QUFDREgsaUJBQVFOLEdBQVIsQ0FBWUEsR0FBWjtBQUNILE1BTEQ7QUFNSDs7bUJBRWNFLE07Ozs7Ozs7Ozs7O0FDM0JmOzs7Ozs7Ozs7QUFTTyxLQUFNTSwwQ0FBaUIsSUFBdkIsQyxDQUF3QyxnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1QvQzs7Ozs7Ozs7O0tBU01JLFM7QUFDRiwwQkFBYztBQUFBOztBQUNWLGNBQUtDLElBQUwsc0NBQWdCQyxJQUFoQiwyQ0FBd0JDLFNBQXhCLE9BRFUsQ0FDc0M7QUFDbkQ7O0FBRUQ7Ozs7Ozs7OztrQ0FLdUM7QUFBQSxpQkFBaENKLE9BQWdDLHVFQUF2QixxQkFBdUI7O0FBQ25DLGlCQUFJRSxPQUFPLEtBQUtBLElBQWhCLENBRG1DLENBQ2dCO0FBQ25ELGlCQUFJRyxJQUFJO0FBQ0osdUJBQU1ILEtBQUtJLFFBQUwsS0FBa0IsQ0FEcEIsRUFDNEM7QUFDaEQsdUJBQU1KLEtBQUtLLE9BQUwsRUFGRixFQUU0QztBQUNoRCx1QkFBTUwsS0FBS00sUUFBTCxFQUhGLEVBRzRDO0FBQ2hELHVCQUFNTixLQUFLTyxVQUFMLEVBSkYsRUFJNEM7QUFDaEQsdUJBQU1QLEtBQUtRLFVBQUwsRUFMRixFQUs0QztBQUNoRCx1QkFBTUMsS0FBS0MsS0FBTCxDQUFXLENBQUNWLEtBQUtJLFFBQUwsS0FBa0IsQ0FBbkIsSUFBd0IsQ0FBbkMsQ0FORixFQU00QztBQUNoRCx1QkFBTUosS0FBS1csZUFBTCxFQVBGLENBTzRDO0FBUDVDLGNBQVI7O0FBVUEsaUJBQUksSUFBSUMsTUFBSixDQUFXLE1BQVgsRUFBbUJDLElBQW5CLENBQXdCZixPQUF4QixDQUFKLEVBQXFDO0FBQ2pDQSwyQkFBU0EsUUFBT2dCLE9BQVAsQ0FBZUYsT0FBT0csRUFBdEIsRUFBMEIsQ0FBQ2YsS0FBS2dCLFdBQUwsS0FBcUIsRUFBdEIsRUFBMEJDLE1BQTFCLENBQWlDLElBQUlMLE9BQU9HLEVBQVAsQ0FBVWxCLE1BQS9DLENBQTFCLENBQVQ7QUFDSDs7QUFFRCxrQkFBSyxJQUFJTCxDQUFULElBQWNXLENBQWQsRUFBaUI7QUFDYixxQkFBSSxJQUFJUyxNQUFKLENBQVcsTUFBTXBCLENBQU4sR0FBVSxHQUFyQixFQUEwQnFCLElBQTFCLENBQStCZixPQUEvQixDQUFKLEVBQTRDO0FBQ3hDQSwrQkFBU0EsUUFBT2dCLE9BQVAsQ0FBZUYsT0FBT0csRUFBdEIsRUFBMEJILE9BQU9HLEVBQVAsQ0FBVWxCLE1BQVYsSUFBb0IsQ0FBcEIsR0FBd0JNLEVBQUVYLENBQUYsQ0FBeEIsR0FBK0IsQ0FBQyxPQUFPVyxFQUFFWCxDQUFGLENBQVIsRUFBY3lCLE1BQWQsQ0FBcUIsQ0FBQyxLQUFLZCxFQUFFWCxDQUFGLENBQU4sRUFBWUssTUFBakMsQ0FBekQsQ0FBVDtBQUNIO0FBQ0o7QUFDRCxvQkFBT0MsT0FBUDtBQUNIOzs7Ozs7bUJBR1VDLFM7U0FDUEEsUyxHQUFBQSxTOzs7Ozs7Ozs7OztBQzdDUixLQUFJbUIsSUFBSSxJQUFJQyxHQUFKLEVBQVI7QUFDQSxLQUFJQyxRQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBWjs7QUFFQUEsT0FBTUMsR0FBTixDQUFVO0FBQUEsVUFBR0gsRUFBRUksR0FBRixDQUFNQyxDQUFOLENBQUg7QUFBQSxFQUFWOzttQkFFZSxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vbWFpbi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3OTFhOWY5ZTg5NTUwZTFiZWY0ZiIsImltcG9ydCBMb2dnZXIgZnJvbSBcIi4vc2NyaXB0cy91dGlscy9sb2dcIjtcclxuaW1wb3J0IHNldCBmcm9tIFwiLi9zY3JpcHRzL3NldE1hcC9zZXRcIjtcclxuXHJcbkxvZ2dlci5sb2coc2V0LCBcIuafpeeci3NldOWvueixoVwiKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyeS5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOaOp+WItuWPsOaXpeW/l1xyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMTRcclxuICog5Yib5bu65pe26Ze0OiAxNjoxN1xyXG4gKi9cclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9jb25maWdcIjsgICAgLy8g5a+85YWl6YWN572u5paH5Lu2XHJcbmltcG9ydCB7RGF0ZVV0aWxzfSBmcm9tIFwiLi9kYXRlXCI7ICAgICAgIC8vIOWvvOWFpeaXpeacn+W3peWFt1xyXG5sZXQgTG9nZ2VyID0ge307ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaXpeW/l+WvueixoVxyXG5sZXQgZW1wdHlNZXRob2QgPSBuZXcgRnVuY3Rpb24oKTsgICAgICAgIC8vIOepuuaWueazlVxyXG5cclxuZm9yIChsZXQgayBpbiBjb25zb2xlKSB7XHJcbiAgICBpZiAoY29uc29sZS5oYXNPd25Qcm9wZXJ0eShrKSkgTG9nZ2VyW2tdID0gQ29uZmlnLkVOQUJMRURfTE9HR0VSID8gY29uc29sZVtrXSA6IGVtcHR5TWV0aG9kO1xyXG59XHJcblxyXG5pZiAoQ29uZmlnLkVOQUJMRURfTE9HR0VSKSB7ICAgICAgICAgICAgICAvLyDlvZPlkK/nlKjml6Xlv5fml7bvvIzph43lhplMb2dnZXIubG9n5pa55rOVXHJcbiAgICBMb2dnZXIubG9nID0gZnVuY3Rpb24gKGxvZywgZGVzID0gXCJcIikge1xyXG4gICAgICAgIGlmIChkZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4oaT4oaT4oaTWycgKyBuZXcgRGF0ZVV0aWxzKCkuZm9ybWF0KCkgKyAnXSA6ICcgKyBkZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvdXRpbHMvbG9nLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6aG555uu6YWN572u5paH5Lu2XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNFxyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjI4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRU5BQkxFRF9MT0dHRVIgPSB0cnVlOyAgICAgICAgICAgIC8vIOaYr+WQpuWQr+eUqOaOp+WItuWPsOaXpeW/lyh0cnVlOuWQr+eUqDtmYWxzZTrkuI3lkK/nlKg7KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2NvbmZpZy5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOaXtumXtOWkhOeQhuW3peWFt1xyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMTVcclxuICog5Yib5bu65pe26Ze0OiA5OjM0XHJcbiAqL1xyXG5jbGFzcyBEYXRlVXRpbHMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoLi4uYXJndW1lbnRzKTsgICAgICAgICAgICAgLy8g5b2T5YmN5pe26Ze0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLzlvI/ljJbml7bpl7RcclxuICAgICAqIEBwYXJhbSBmb3JtYXQg6L+U5Zue55qE5pe26Ze05qC85byPKGRlZmF1bHQ6IHl5eXktTU0tZGQgaGg6bW06c3MpXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSDov5Tlm57kuIDkuKrmoLzlvI/ljJblkI7nmoTml7bpl7TlrZfkuLJcclxuICAgICAqL1xyXG4gICAgZm9ybWF0KGZvcm1hdCA9IFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLmRhdGU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN5a6e5L6L5YyW5pe255qE5pe26Ze0XHJcbiAgICAgICAgdmFyIG8gPSB7XHJcbiAgICAgICAgICAgIFwiTStcIjogZGF0ZS5nZXRNb250aCgpICsgMSwgICAgICAgICAgICAgICAgICAgICAgLy9tb250aFxyXG4gICAgICAgICAgICBcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF5XHJcbiAgICAgICAgICAgIFwiaCtcIjogZGF0ZS5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3VyXHJcbiAgICAgICAgICAgIFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAgICAgICAgLy9taW51dGVcclxuICAgICAgICAgICAgXCJzK1wiOiBkYXRlLmdldFNlY29uZHMoKSwgICAgICAgICAgICAgICAgICAgICAgICAvL3NlY29uZFxyXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksICAgIC8vcXVhcnRlclxyXG4gICAgICAgICAgICBcIlMrXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgICAgICAgIC8vbWlsbGlzZWNvbmRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobmV3IFJlZ0V4cChcIih5KylcIikudGVzdChmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgUmVnRXhwLiQxLmxlbmd0aCA9PSAxID8gb1trXSA6IChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlVXRpbHM7XHJcbmV4cG9ydCB7RGF0ZVV0aWxzfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy91dGlscy9kYXRlLmpzIiwibGV0IHMgPSBuZXcgU2V0KCk7XHJcbmxldCBhcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcclxuXHJcbmFycmF5Lm1hcCh4PT5zLmFkZCh4KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBcIlNldFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3NldE1hcC9zZXQuanMiXSwic291cmNlUm9vdCI6IiJ9