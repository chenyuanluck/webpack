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
	
	var _symbol = __webpack_require__(1);
	
	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * 描述: Symbol实践
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/21
	 * 创建时间: 10:18
	 */
	
	var o = {};
	for (var i = 0; i < 30; i++) {
	  o[Symbol(i)] = i;
	}
	console.log(o);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTgyZWMyNWFiYmY5ZTQxNjEyOTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N5bWJvbC9zeW1ib2wuanMiXSwibmFtZXMiOlsibyIsImkiLCJTeW1ib2wiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDM0JBOzs7Ozs7Ozs7Ozs7QUNYQTs7Ozs7Ozs7OztBQVVBLEtBQUlBLElBQUksRUFBUjtBQUNBLE1BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUN6QkQsS0FBRUUsT0FBT0QsQ0FBUCxDQUFGLElBQWVBLENBQWY7QUFDSDtBQUNERSxTQUFRQyxHQUFSLENBQVlKLENBQVosRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL21haW4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTgyZWMyNWFiYmY5ZTQxNjEyOTMiLCIvKipcclxuICog5o+P6L+wOiDlhaXlj6PohJrmnKxcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzE1XHJcbiAqIOWIm+W7uuaXtumXtDogMTU6NTdcclxuICovXHJcbi8vIGltcG9ydCBzZXQgZnJvbSBcIi4vc2NyaXB0cy9zZXRNYXAvc2V0XCI7ICAgICAgICAgLy8g6ZuG5ZCIXHJcbi8vIGltcG9ydCBtYXAgZnJvbSBcIi4vc2NyaXB0cy9zZXRNYXAvbWFwXCI7ICAgICAgICAgICAvLyBtYXBcclxuaW1wb3J0IHN5bWJvbCBmcm9tIFwiLi9zY3JpcHRzL3N5bWJvbC9zeW1ib2xcIjtcclxuLy8gaW1wb3J0IEFqYXhVdGlscyBmcm9tIFwiLi9zY3JpcHRzL3V0aWxzL2FqYXhcIjtcclxuLy8gaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi9zY3JpcHRzL3V0aWxzL2RhdGVcIjtcclxuXHJcblxyXG4vLyBlZzpcclxuLy8gQWpheFV0aWxzLmdldChcIi4vanNvbi9oZWxsby5qc29uP2FhPTFcIiwge1xyXG4vLyAgICAgbmFtZTogXCJzZW5kXCIsXHJcbi8vICAgICBjcmVhdGVUaW1lOiBuZXcgRGF0ZVV0aWxzKCkuZm9ybWF0KClcclxuLy8gfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyB9KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyeS5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IFN5bWJvbOWunui3tVxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjFcclxuICog5Yib5bu65pe26Ze0OiAxMDoxOFxyXG4gKi9cclxuXHJcbnZhciBvID0ge307XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xyXG4gICAgb1tTeW1ib2woaSldID0gaTtcclxufVxyXG5jb25zb2xlLmxvZyhvKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9zeW1ib2wvc3ltYm9sLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==