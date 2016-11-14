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
	
	var _profile = __webpack_require__(1);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _promise = __webpack_require__(2);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.info((0, _profile2.default)() + '.js文件');
	
	// 引入promise  demo
	// 引入模块1
	
	(0, _promise2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return 'profile';
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return "Hello World!";
	};
	
	var getJSON = function getJSON(url) {
	    return new Promise(function (resolve, reject) {
	        var client = new XMLHttpRequest();
	        client.open("GET", url);
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
	        client.responseType = "json";
	        client.setRequestHeader("Accept", "application/json");
	        client.send();
	    });
	};
	
	getJSON('./json/hello.json').then(function (json) {
	    console.log(json);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGNkN2RhMWVjNTNhNzdlMzQ3ZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcHJvbWlzZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsImdldEpTT04iLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsaWVudCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImhhbmRsZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkVycm9yIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVHlwZSIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwidGhlbiIsImpzb24iLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7Ozs7QUFLQTs7Ozs7O0FBSEFBLFNBQVFDLElBQVIsQ0FBYSwyQkFBWSxPQUF6Qjs7QUFFQTtBQUxBOztBQU9BLDBCOzs7Ozs7Ozs7Ozs7bUJDUGUsWUFBVztBQUN0QixZQUFPLFNBQVA7QUFDSCxFOzs7Ozs7Ozs7Ozs7bUJDdUJjLFlBQVk7QUFDdkIsWUFBTyxjQUFQO0FBQ0gsRTs7QUEzQkQsS0FBSUMsVUFBVSxTQUFWQSxPQUFVLENBQVVDLEdBQVYsRUFBZTtBQUN6QixZQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBb0I7QUFDbkMsYUFBSUMsU0FBUyxJQUFJQyxjQUFKLEVBQWI7QUFDQUQsZ0JBQU9FLElBQVAsQ0FBWSxLQUFaLEVBQW1CTixHQUFuQjtBQUNBSSxnQkFBT0csa0JBQVAsR0FBNEIsU0FBU0MsTUFBVCxHQUFrQjtBQUMxQyxpQkFBSSxLQUFLQyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCO0FBQ0g7QUFDRCxpQkFBSSxLQUFLQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCUix5QkFBUSxLQUFLUyxRQUFiO0FBQ0gsY0FGRCxNQUVPO0FBQ0hSLHdCQUFPLElBQUlTLEtBQUosQ0FBVSxLQUFLQyxVQUFmLENBQVA7QUFDSDtBQUNKLFVBVEQ7QUFVQVQsZ0JBQU9VLFlBQVAsR0FBc0IsTUFBdEI7QUFDQVYsZ0JBQU9XLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLGtCQUFsQztBQUNBWCxnQkFBT1ksSUFBUDtBQUNILE1BaEJNLENBQVA7QUFpQkgsRUFsQkQ7O0FBb0JBakIsU0FBUSxtQkFBUixFQUE2QmtCLElBQTdCLENBQWtDLFVBQUNDLElBQUQsRUFBUztBQUN2Q3JCLGFBQVFzQixHQUFSLENBQVlELElBQVo7QUFDSCxFQUZELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9tYWluL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRjZDdkYTFlYzUzYTc3ZTM0N2VjIiwiLy8g5byV5YWl5qih5Z2XMVxyXG5pbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi9zY3JpcHRzL3Byb2ZpbGVcIjtcclxuXHJcbmNvbnNvbGUuaW5mbyhwcm9maWxlKCkgKyAnLmpz5paH5Lu2Jyk7XHJcblxyXG4vLyDlvJXlhaVwcm9taXNlICBkZW1vXHJcbmltcG9ydCBwcm9taXNlIGZyb20gXCIuL3NjcmlwdHMvcHJvbWlzZVwiO1xyXG5wcm9taXNlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJ5LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gJ3Byb2ZpbGUnO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvcHJvZmlsZS5qcyIsInZhciBnZXRKU09OID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBjbGllbnQub3BlbihcIkdFVFwiLCB1cmwpO1xyXG4gICAgICAgIGNsaWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodGhpcy5zdGF0dXNUZXh0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaWVudC5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICBjbGllbnQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgY2xpZW50LnNlbmQoKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZ2V0SlNPTignLi9qc29uL2hlbGxvLmpzb24nKS50aGVuKChqc29uKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gXCJIZWxsbyBXb3JsZCFcIjtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9wcm9taXNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==