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
	
	var _set = __webpack_require__(3);
	
	var _set2 = _interopRequireDefault(_set);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_log2.default.log(_set2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(2);
	
	var Config = _interopRequireWildcard(_config);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// 导入配置文件
	var Logger = {}; // 日志对象
	/**
	 * 描述: 控制台日志
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/14
	 * 创建时间: 16:17
	 */
	var emptyMethod = new Function(); // 空方法
	
	for (var k in console) {
	    if (console.hasOwnProperty(k)) Logger[k] = Config.ENABLED_LOGGER ? console[k] : emptyMethod;
	}
	
	if (Config.ENABLED_LOGGER) {
	    Logger.log = function (log) {
	        console.log('[' + new Date('yyyy-mm-dd') + ']' + log);
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
	var s = new Set();
	var array = [1, 2, 3, 4, 5, 6, 7];
	
	array.map(function (x) {
	  return s.add(x);
	});
	
	exports.default = "Set";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNlOTNiNmMwNDJmNDY4ZDRmMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2V0TWFwL3NldC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJDb25maWciLCJMb2dnZXIiLCJlbXB0eU1ldGhvZCIsIkZ1bmN0aW9uIiwiayIsImNvbnNvbGUiLCJoYXNPd25Qcm9wZXJ0eSIsIkVOQUJMRURfTE9HR0VSIiwiRGF0ZSIsInMiLCJTZXQiLCJhcnJheSIsIm1hcCIsImFkZCIsIngiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7Ozs7O0FBRUEsZUFBT0EsR0FBUCxnQjs7Ozs7Ozs7Ozs7O0FDTUE7O0tBQVlDLE07Ozs7QUFBNEI7QUFDeEMsS0FBSUMsU0FBUyxFQUFiLEMsQ0FBeUM7QUFWekM7Ozs7Ozs7OztBQVdBLEtBQUlDLGNBQWMsSUFBSUMsUUFBSixFQUFsQixDLENBQXlDOztBQUV6QyxNQUFLLElBQUlDLENBQVQsSUFBY0MsT0FBZCxFQUF1QjtBQUNuQixTQUFJQSxRQUFRQyxjQUFSLENBQXVCRixDQUF2QixDQUFKLEVBQStCSCxPQUFPRyxDQUFQLElBQVlKLE9BQU9PLGNBQVAsR0FBd0JGLFFBQVFELENBQVIsQ0FBeEIsR0FBcUNGLFdBQWpEO0FBQ2xDOztBQUVELEtBQUlGLE9BQU9PLGNBQVgsRUFBMkI7QUFDdkJOLFlBQU9GLEdBQVAsR0FBYSxVQUFVQSxHQUFWLEVBQWU7QUFDeEJNLGlCQUFRTixHQUFSLENBQVksTUFBTSxJQUFJUyxJQUFKLENBQVMsWUFBVCxDQUFOLEdBQStCLEdBQS9CLEdBQXFDVCxHQUFqRDtBQUNILE1BRkQ7QUFHSDs7bUJBRWNFLE07Ozs7Ozs7Ozs7O0FDdkJmOzs7Ozs7Ozs7O0FBVU8sS0FBTU0sMENBQWlCLElBQXZCLEMsQ0FBd0MsZ0M7Ozs7Ozs7Ozs7O0FDVi9DLEtBQUlFLElBQUksSUFBSUMsR0FBSixFQUFSO0FBQ0EsS0FBSUMsUUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQVo7O0FBRUFBLE9BQU1DLEdBQU4sQ0FBVTtBQUFBLFVBQUdILEVBQUVJLEdBQUYsQ0FBTUMsQ0FBTixDQUFIO0FBQUEsRUFBVjs7bUJBRWUsSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL21haW4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWNlOTNiNmMwNDJmNDY4ZDRmMTciLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL3NjcmlwdHMvdXRpbHMvbG9nXCI7XHJcbmltcG9ydCBzZXQgZnJvbSBcIi4vc2NyaXB0cy9zZXRNYXAvc2V0XCI7XHJcblxyXG5Mb2dnZXIubG9nKHNldCk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cnkuanMiLCIvKipcclxuICog5o+P6L+wOiDmjqfliLblj7Dml6Xlv5dcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzE0XHJcbiAqIOWIm+W7uuaXtumXtDogMTY6MTdcclxuICovXHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7ICAgIC8vIOWvvOWFpemFjee9ruaWh+S7tlxyXG5sZXQgTG9nZ2VyID0ge307ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaXpeW/l+WvueixoVxyXG5sZXQgZW1wdHlNZXRob2QgPSBuZXcgRnVuY3Rpb24oKTsgICAgICAgIC8vIOepuuaWueazlVxyXG5cclxuZm9yIChsZXQgayBpbiBjb25zb2xlKSB7XHJcbiAgICBpZiAoY29uc29sZS5oYXNPd25Qcm9wZXJ0eShrKSkgTG9nZ2VyW2tdID0gQ29uZmlnLkVOQUJMRURfTE9HR0VSID8gY29uc29sZVtrXSA6IGVtcHR5TWV0aG9kO1xyXG59XHJcblxyXG5pZiAoQ29uZmlnLkVOQUJMRURfTE9HR0VSKSB7XHJcbiAgICBMb2dnZXIubG9nID0gZnVuY3Rpb24gKGxvZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbJyArIG5ldyBEYXRlKCd5eXl5LW1tLWRkJykgKyAnXScgKyBsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvdXRpbHMvbG9nLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6aG555uu6YWN572u5paH5Lu2XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNFxyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjI4XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEVOQUJMRURfTE9HR0VSID0gdHJ1ZTsgICAgICAgICAgICAvLyDmmK/lkKblkK/nlKjmjqfliLblj7Dml6Xlv5codHJ1ZTrlkK/nlKg7ZmFsc2U65LiN5ZCv55SoOylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jb25maWcuanMiLCJsZXQgcyA9IG5ldyBTZXQoKTtcclxubGV0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xyXG5cclxuYXJyYXkubWFwKHg9PnMuYWRkKHgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiU2V0XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvc2V0TWFwL3NldC5qcyJdLCJzb3VyY2VSb290IjoiIn0=