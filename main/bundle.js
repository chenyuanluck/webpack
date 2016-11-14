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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _profile = __webpack_require__(2);
	
	var Config = _interopRequireWildcard(_profile);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Logger = {}; /**
	                  * 描述: 控制台日志
	                  * 版权: Copyright (c) 2016
	                  * 公司: 深圳市昊晨科技开发有限公司
	                  * 作者: 陈元
	                  * 版本: 1.0
	                  * 创建日期: 2016/11/14
	                  * 创建时间: 16:17
	                  */
	
	
	for (var k in console) {
	  if (console.hasOwnProperty(k)) Logger[k] = console[k];
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
	
	var useLogger = exports.useLogger = true; // 是否启用日志

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWFmZmJiZDgyZjVhZTIwZjBiNmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NldE1hcC9zZXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ29uZmlnIiwiTG9nZ2VyIiwiayIsImNvbnNvbGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVzZUxvZ2dlciIsInMiLCJTZXQiLCJhcnJheSIsIm1hcCIsImFkZCIsIngiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7Ozs7O0FBRUEsZUFBT0EsR0FBUCxnQjs7Ozs7Ozs7Ozs7O0FDTUE7O0tBQVlDLE07Ozs7QUFFWixLQUFJQyxTQUFTLEVBQWIsQyxDQVhBOzs7Ozs7Ozs7OztBQWFBLE1BQUssSUFBSUMsQ0FBVCxJQUFjQyxPQUFkLEVBQXVCO0FBQ25CLE9BQUlBLFFBQVFDLGNBQVIsQ0FBdUJGLENBQXZCLENBQUosRUFDSUQsT0FBT0MsQ0FBUCxJQUFZQyxRQUFRRCxDQUFSLENBQVo7QUFDUDs7bUJBRWNELE07Ozs7Ozs7Ozs7O0FDbEJmOzs7Ozs7Ozs7O0FBVU8sS0FBSUksZ0NBQVksSUFBaEIsQyxDQUFpQyxTOzs7Ozs7Ozs7OztBQ1Z4QyxLQUFJQyxJQUFJLElBQUlDLEdBQUosRUFBUjtBQUNBLEtBQUlDLFFBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFaOztBQUVBQSxPQUFNQyxHQUFOLENBQVU7QUFBQSxVQUFHSCxFQUFFSSxHQUFGLENBQU1DLENBQU4sQ0FBSDtBQUFBLEVBQVY7O21CQUVlLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9tYWluL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVhZmZiYmQ4MmY1YWUyMGYwYjZlIiwiaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9zY3JpcHRzL3V0aWxzL2xvZ1wiO1xyXG5pbXBvcnQgc2V0IGZyb20gXCIuL3NjcmlwdHMvc2V0TWFwL3NldFwiO1xyXG5cclxuTG9nZ2VyLmxvZyhzZXQpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJ5LmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog5o6n5Yi25Y+w5pel5b+XXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNFxyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjE3XHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuXHJcbmxldCBMb2dnZXIgPSB7fTtcclxuXHJcbmZvciAobGV0IGsgaW4gY29uc29sZSkge1xyXG4gICAgaWYgKGNvbnNvbGUuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgTG9nZ2VyW2tdID0gY29uc29sZVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3V0aWxzL2xvZy5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOmhueebrumFjee9ruaWh+S7tlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMTRcclxuICog5Yib5bu65pe26Ze0OiAxNjoyOFxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgdXNlTG9nZ2VyID0gdHJ1ZTsgICAgICAgICAgICAvLyDmmK/lkKblkK/nlKjml6Xlv5dcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9wcm9maWxlLmpzIiwibGV0IHMgPSBuZXcgU2V0KCk7XHJcbmxldCBhcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XTtcclxuXHJcbmFycmF5Lm1hcCh4PT5zLmFkZCh4KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBcIlNldFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3NldE1hcC9zZXQuanMiXSwic291cmNlUm9vdCI6IiJ9