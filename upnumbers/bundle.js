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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwbnVtYmVycy91cG51bWJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUMvQixJQUFNLFdBQVcsR0FBRyxZQUFZO0lBQ2hDLElBQU0sU0FBUyxHQUFHLFVBQVU7SUFDNUIsSUFBTSxjQUFjLEdBQUcsc0JBQXNCO0lBQzdDLElBQU0sbUJBQW1CLEdBQUcscUJBQXFCO0lBRWpELElBQU0sUUFBUSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN6RSxJQUFNLE1BQU0sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDckUsSUFBTSxrQkFBa0IsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7SUFDckYsSUFBTSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztJQUV4RixJQUFJLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUVaLElBQUksUUFBUSxHQUFHLENBQUM7SUFDaEIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDO0lBQzFCLElBQUksZ0JBQWdCLEdBQUcsRUFBRTtJQUN6QixJQUFJLG9CQUFvQixHQUFHLEdBQUc7SUFDOUIsSUFBSSxpQkFBaUIsR0FBRyxDQUFDO0lBRXpCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJO0lBQ2xDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUM1QyxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSTtZQUNsQyxPQUFNO1NBQ047UUFDRCxNQUFNLElBQUksZ0JBQWdCO1FBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7UUFDdEUsaUJBQWlCLElBQUksQ0FBQztRQUN0QixJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFFMUQsZ0JBQWdCLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0lBRUY7UUFDQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsV0FBUyxnQkFBa0I7UUFDM0Qsa0JBQWtCLENBQUMsV0FBVyxHQUFHLE1BQUksa0JBQW9CO1FBQ3pELE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBRyxJQUFNO1FBQzlCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUN4QyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7SUFDdkUsQ0FBQztJQUVEO1FBQ0MsTUFBTSxJQUFJLElBQUk7UUFFZCxnQkFBZ0IsRUFBRTtRQUVsQixVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwiZmlsZSI6InVwbnVtYmVycy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91cG51bWJlcnMvdXBudW1iZXJzLnRzXCIpO1xuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCB0aGVOdW1iZXJJZCA9IFwidGhlLW51bWJlclwiXHJcblx0Y29uc3QgdGhlUmF0ZUlkID0gXCJ0aGUtcmF0ZVwiXHJcblx0Y29uc3QgaW5jcmVhc2VSYXRlSWQgPSBcImluY3JlYXNlLXJhdGUtYnV0dG9uXCJcclxuXHRjb25zdCBpbmNyZWFzZVJhdGVMYWJlbElkID0gXCJpbmNyZWFzZS1yYXRlLWxhYmVsXCJcclxuXHJcblx0Y29uc3QgbnVtYmVyaDIgPSA8SFRNTEhlYWRpbmdFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoZU51bWJlcklkKVxyXG5cdGNvbnN0IHJhdGVoMiA9IDxIVE1MSGVhZGluZ0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhlUmF0ZUlkKVxyXG5cdGNvbnN0IGluY3JlYXNlUmF0ZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmNyZWFzZVJhdGVJZClcclxuXHRjb25zdCBpbmNyZWFzZVJhdGVMYWJlbCA9IDxIVE1MTGFiZWxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluY3JlYXNlUmF0ZUxhYmVsSWQpXHJcblxyXG5cdGxldCBudW1iZXIgPSAwXHJcblx0bGV0IHJhdGUgPSAxXHJcblxyXG5cdGxldCBiYXNlUmF0ZSA9IDFcclxuXHRsZXQgaW5jcmVhc2VSYXRlQW1vdW50ID0gMVxyXG5cdGxldCBpbmNyZWFzZVJhdGVDb3N0ID0gMTBcclxuXHRsZXQgaW5jcmVhc2VSYXRlQ29zdE11bHQgPSAxLjRcclxuXHRsZXQgaW5jcmVhc2VSYXRlQ291bnQgPSAwXHJcblxyXG5cdGluY3JlYXNlUmF0ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuXHRpbmNyZWFzZVJhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChudW1iZXIgPCBpbmNyZWFzZVJhdGVDb3N0KSB7XHJcblx0XHRcdGluY3JlYXNlUmF0ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRudW1iZXIgLT0gaW5jcmVhc2VSYXRlQ29zdFxyXG5cdFx0aW5jcmVhc2VSYXRlQ29zdCA9IE1hdGguZmxvb3IoaW5jcmVhc2VSYXRlQ29zdCAqIGluY3JlYXNlUmF0ZUNvc3RNdWx0KVxyXG5cdFx0aW5jcmVhc2VSYXRlQ291bnQgKz0gMVxyXG5cdFx0cmF0ZSA9IGJhc2VSYXRlICsgKGluY3JlYXNlUmF0ZUNvdW50ICogaW5jcmVhc2VSYXRlQW1vdW50KVxyXG5cclxuXHRcdHVwZGF0ZUFsbFRoZUh0bWwoKVxyXG5cdH0pXHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZUFsbFRoZUh0bWwoKSB7XHJcblx0XHRpbmNyZWFzZVJhdGVMYWJlbC50ZXh0Q29udGVudCA9IGBDb3N0OiAke2luY3JlYXNlUmF0ZUNvc3R9YFxyXG5cdFx0aW5jcmVhc2VSYXRlQnV0dG9uLnRleHRDb250ZW50ID0gYCske2luY3JlYXNlUmF0ZUFtb3VudH1gXHJcblx0XHRyYXRlaDIudGV4dENvbnRlbnQgPSBgJHtyYXRlfWBcclxuXHRcdG51bWJlcmgyLnRleHRDb250ZW50ID0gbnVtYmVyLnRvU3RyaW5nKClcclxuXHRcdGluY3JlYXNlUmF0ZUJ1dHRvbi5kaXNhYmxlZCA9IG51bWJlciA8IGluY3JlYXNlUmF0ZUNvc3QgPyB0cnVlIDogZmFsc2VcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdG51bWJlciArPSByYXRlXHJcblxyXG5cdFx0dXBkYXRlQWxsVGhlSHRtbCgpXHJcblxyXG5cdFx0c2V0VGltZW91dChydW4sIDEwMDApXHJcblx0fVxyXG5cclxuXHRzZXRUaW1lb3V0KHJ1biwgMTAwMClcclxufSkiXSwic291cmNlUm9vdCI6IiJ9