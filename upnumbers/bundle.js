/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/upnumbers/upnumbers.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/upnumbers/upnumbers.ts":
/*!************************************!*\
  !*** ./src/upnumbers/upnumbers.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

window.addEventListener("load", function () {
    var theNumberId = "the-number";
    var theRateId = "the-rate";
    var increaseRateId = "increase-rate-button";
    var increaseRateLabelId = "increase-rate-label";
    var numberh2 = document.getElementById(theNumberId);
    var rateh2 = document.getElementById(theRateId);
    var increaseRateButton = document.getElementById(increaseRateId);
    var increaseRateLabel = document.getElementById(increaseRateLabelId);
    var number = 0;
    var rate = 1;
    var baseRate = 1;
    var increaseRateAmount = 1;
    var increaseRateCost = 10;
    var increaseRateCostMult = 1.4;
    var increaseRateCount = 0;
    increaseRateButton.disabled = true;
    increaseRateButton.addEventListener("click", function () {
        if (number < increaseRateCost) {
            increaseRateButton.disabled = true;
            return;
        }
        number -= increaseRateCost;
        increaseRateCost = Math.floor(increaseRateCost * increaseRateCostMult);
        increaseRateCount += 1;
        rate = baseRate + (increaseRateCount * increaseRateAmount);
        updateAllTheHtml();
    });
    function updateAllTheHtml() {
        increaseRateLabel.textContent = "Cost: " + increaseRateCost;
        increaseRateButton.textContent = "+" + increaseRateAmount;
        rateh2.textContent = "" + rate;
        numberh2.textContent = number.toString();
        increaseRateButton.disabled = number < increaseRateCost ? true : false;
    }
    function run() {
        number += rate;
        updateAllTheHtml();
        setTimeout(run, 1000);
    }
    setTimeout(run, 1000);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwbnVtYmVycy91cG51bWJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUViLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDL0IsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUM3QixJQUFNLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDO0lBRWxELElBQU0sUUFBUSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLElBQU0sTUFBTSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLElBQU0sa0JBQWtCLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEYsSUFBTSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRXpGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUViLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUMzQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztJQUMvQixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUxQixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ25DLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUM1QyxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ25DLE9BQU87U0FDUDtRQUNELE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQztRQUMzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLENBQUM7UUFDdkUsaUJBQWlCLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNELGdCQUFnQixFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSDtRQUNDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxXQUFTLGdCQUFrQixDQUFDO1FBQzVELGtCQUFrQixDQUFDLFdBQVcsR0FBRyxNQUFJLGtCQUFvQixDQUFDO1FBQzFELE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBRyxJQUFNLENBQUM7UUFDL0IsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEUsQ0FBQztJQUVEO1FBQ0MsTUFBTSxJQUFJLElBQUksQ0FBQztRQUVmLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ1cG51bWJlcnMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdXBudW1iZXJzL3VwbnVtYmVycy50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCB0aGVOdW1iZXJJZCA9IFwidGhlLW51bWJlclwiO1xyXG5cdGNvbnN0IHRoZVJhdGVJZCA9IFwidGhlLXJhdGVcIjtcclxuXHRjb25zdCBpbmNyZWFzZVJhdGVJZCA9IFwiaW5jcmVhc2UtcmF0ZS1idXR0b25cIjtcclxuXHRjb25zdCBpbmNyZWFzZVJhdGVMYWJlbElkID0gXCJpbmNyZWFzZS1yYXRlLWxhYmVsXCI7XHJcblxyXG5cdGNvbnN0IG51bWJlcmgyID0gPEhUTUxIZWFkaW5nRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGVOdW1iZXJJZCk7XHJcblx0Y29uc3QgcmF0ZWgyID0gPEhUTUxIZWFkaW5nRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGVSYXRlSWQpO1xyXG5cdGNvbnN0IGluY3JlYXNlUmF0ZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmNyZWFzZVJhdGVJZCk7XHJcblx0Y29uc3QgaW5jcmVhc2VSYXRlTGFiZWwgPSA8SFRNTExhYmVsRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmNyZWFzZVJhdGVMYWJlbElkKTtcclxuXHJcblx0bGV0IG51bWJlciA9IDA7XHJcblx0bGV0IHJhdGUgPSAxO1xyXG5cclxuXHRsZXQgYmFzZVJhdGUgPSAxO1xyXG5cdGxldCBpbmNyZWFzZVJhdGVBbW91bnQgPSAxO1xyXG5cdGxldCBpbmNyZWFzZVJhdGVDb3N0ID0gMTA7XHJcblx0bGV0IGluY3JlYXNlUmF0ZUNvc3RNdWx0ID0gMS40O1xyXG5cdGxldCBpbmNyZWFzZVJhdGVDb3VudCA9IDA7XHJcblxyXG5cdGluY3JlYXNlUmF0ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblx0aW5jcmVhc2VSYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAobnVtYmVyIDwgaW5jcmVhc2VSYXRlQ29zdCkge1xyXG5cdFx0XHRpbmNyZWFzZVJhdGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRudW1iZXIgLT0gaW5jcmVhc2VSYXRlQ29zdDtcclxuXHRcdGluY3JlYXNlUmF0ZUNvc3QgPSBNYXRoLmZsb29yKGluY3JlYXNlUmF0ZUNvc3QgKiBpbmNyZWFzZVJhdGVDb3N0TXVsdCk7XHJcblx0XHRpbmNyZWFzZVJhdGVDb3VudCArPSAxO1xyXG5cdFx0cmF0ZSA9IGJhc2VSYXRlICsgKGluY3JlYXNlUmF0ZUNvdW50ICogaW5jcmVhc2VSYXRlQW1vdW50KTtcclxuXHJcblx0XHR1cGRhdGVBbGxUaGVIdG1sKCk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZUFsbFRoZUh0bWwoKSB7XHJcblx0XHRpbmNyZWFzZVJhdGVMYWJlbC50ZXh0Q29udGVudCA9IGBDb3N0OiAke2luY3JlYXNlUmF0ZUNvc3R9YDtcclxuXHRcdGluY3JlYXNlUmF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IGArJHtpbmNyZWFzZVJhdGVBbW91bnR9YDtcclxuXHRcdHJhdGVoMi50ZXh0Q29udGVudCA9IGAke3JhdGV9YDtcclxuXHRcdG51bWJlcmgyLnRleHRDb250ZW50ID0gbnVtYmVyLnRvU3RyaW5nKCk7XHJcblx0XHRpbmNyZWFzZVJhdGVCdXR0b24uZGlzYWJsZWQgPSBudW1iZXIgPCBpbmNyZWFzZVJhdGVDb3N0ID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0bnVtYmVyICs9IHJhdGU7XHJcblxyXG5cdFx0dXBkYXRlQWxsVGhlSHRtbCgpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQocnVuLCAxMDAwKTtcclxuXHR9XHJcblxyXG5cdHNldFRpbWVvdXQocnVuLCAxMDAwKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==