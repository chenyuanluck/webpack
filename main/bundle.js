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
	
	var _set = __webpack_require__(1);
	
	var _set2 = _interopRequireDefault(_set);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * 描述: set集合
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/16
	 * 创建时间: 14:34
	 */
	var set = new Set([1, 2, 3, 4, 5, 6, 7]); // 实例化一个Set集合
	console.log([].concat(_toConsumableArray(set)));
	console.log(set.size);
	
	var divs = new Set([].concat(_toConsumableArray(document.querySelectorAll("h1")))); // 将h1元素存入一个Set
	console.log([].concat(_toConsumableArray(divs)));
	console.log(divs.size);
	
	exports.default = "Set";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjNlNDhjYzhhYzk5ZWI5MzU5OTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NldE1hcC9zZXQuanMiXSwibmFtZXMiOlsic2V0IiwiU2V0IiwiY29uc29sZSIsImxvZyIsInNpemUiLCJkaXZzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7O0FBU0EsS0FBSUEsTUFBTSxJQUFJQyxHQUFKLENBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFSLENBQVYsQyxDQUE0RDtBQUM1REMsU0FBUUMsR0FBUiw4QkFBZ0JILEdBQWhCO0FBQ0FFLFNBQVFDLEdBQVIsQ0FBWUgsSUFBSUksSUFBaEI7O0FBRUEsS0FBSUMsT0FBTyxJQUFJSixHQUFKLDhCQUFZSyxTQUFTQyxnQkFBVCxDQUEwQixJQUExQixDQUFaLEdBQVgsQyxDQUE2RDtBQUM3REwsU0FBUUMsR0FBUiw4QkFBZ0JFLElBQWhCO0FBQ0FILFNBQVFDLEdBQVIsQ0FBWUUsS0FBS0QsSUFBakI7O21CQUVlLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9tYWluL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzZTQ4Y2M4YWM5OWViOTM1OTkxIiwiLyoqXHJcbiAqIOaPj+i/sDog5YWl5Y+j6ISa5pysXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNVxyXG4gKiDliJvlu7rml7bpl7Q6IDE1OjU3XHJcbiAqL1xyXG5pbXBvcnQgc2V0IGZyb20gXCIuL3NjcmlwdHMvc2V0TWFwL3NldFwiOyAgICAgICAgIC8vIOmbhuWQiFxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJ5LmpzIiwiLyoqXHJcbiAqIOaPj+i/sDogc2V06ZuG5ZCIXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8xNlxyXG4gKiDliJvlu7rml7bpl7Q6IDE0OjM0XHJcbiAqL1xyXG5sZXQgc2V0ID0gbmV3IFNldChbMSwgMiwgMywgNCwgNSwgNiwgN10pOyAgICAgICAgICAgICAgICAgICAvLyDlrp7kvovljJbkuIDkuKpTZXTpm4blkIhcclxuY29uc29sZS5sb2coWy4uLnNldF0pO1xyXG5jb25zb2xlLmxvZyhzZXQuc2l6ZSk7XHJcblxyXG52YXIgZGl2cyA9IG5ldyBTZXQoWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVwiKV0pOyAgICAvLyDlsIZoMeWFg+e0oOWtmOWFpeS4gOS4qlNldFxyXG5jb25zb2xlLmxvZyhbLi4uZGl2c10pO1xyXG5jb25zb2xlLmxvZyhkaXZzLnNpemUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgXCJTZXRcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9zZXRNYXAvc2V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==