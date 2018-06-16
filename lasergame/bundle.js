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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lasergame/Game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lasergame/Game.ts":
/*!*******************************!*\
  !*** ./src/lasergame/Game.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __webpack_require__(/*! ./Grid */ "./src/lasergame/Grid.ts");
window.addEventListener("load", function () {
    var canvasId = "lasergame-canvas";
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    var grid = new Grid_1.Grid({ numSpacesX: 5, numSpacesY: 5, pixelWidth: canvas.width, pixelHeight: canvas.height });
    var offsets = { xOffset: 0, yOffset: 0 };
    grid.drawGrid({ ctx: ctx, offsets: offsets });
});


/***/ }),

/***/ "./src/lasergame/Grid.ts":
/*!*******************************!*\
  !*** ./src/lasergame/Grid.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grid = /** @class */ (function () {
    function Grid(spec) {
        this.pieces = [];
        this.data = [];
        var numSpacesX = spec.numSpacesX, numSpacesY = spec.numSpacesY, pixelHeight = spec.pixelHeight, pixelWidth = spec.pixelWidth;
        this.numSpacesX = numSpacesX;
        this.numSpacesY = numSpacesY;
        this.pixelHeight = pixelHeight;
        this.pixelWidth = pixelWidth;
        this.squareWidth = pixelWidth / (numSpacesX + 2);
        this.squareHeight = pixelHeight / (numSpacesY + 2);
    }
    Grid.prototype.getPiece = function (loc) {
        var _a = this, numSpacesX = _a.numSpacesX, data = _a.data;
        var x = loc.x, y = loc.y;
        return data[y * numSpacesX + x];
    };
    Grid.prototype.drawGrid = function (spec) {
        var ctx = spec.ctx, offsets = spec.offsets;
        var xOffset = offsets.xOffset, yOffset = offsets.yOffset;
        var _a = this, squareWidth = _a.squareWidth, squareHeight = _a.squareHeight;
        ctx.translate(xOffset, yOffset);
        ctx.fillStyle = "#B0B0B0";
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (var i = 1; i < this.numSpacesX + 2; i++) {
            var x = i * squareWidth;
            ctx.moveTo(x, squareHeight);
            ctx.lineTo(x, this.pixelHeight - squareHeight);
        }
        for (var i = 1; i < this.numSpacesY + 2; i++) {
            var y = i * squareHeight;
            ctx.moveTo(squareWidth, y);
            ctx.lineTo(this.pixelWidth - squareWidth, y);
        }
        ctx.stroke();
        ctx.translate(-xOffset, -yOffset);
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMEVBQTZCO0FBRTdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsSUFBTSxRQUFRLEdBQUcsa0JBQWtCO0lBRW5DLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNuRSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRTtJQUVwQyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENB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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sYXNlcmdhbWUvR2FtZS50c1wiKTtcbiIsImltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9HcmlkXCJcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXNJZCA9IFwibGFzZXJnYW1lLWNhbnZhc1wiXHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKVxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSFcclxuXHJcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQoeyBudW1TcGFjZXNYOiA1LCBudW1TcGFjZXNZOiA1LCBwaXhlbFdpZHRoOiBjYW52YXMud2lkdGgsIHBpeGVsSGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH0pXHJcbiAgICBjb25zdCBvZmZzZXRzID0geyB4T2Zmc2V0OiAwLCB5T2Zmc2V0OiAwIH1cclxuXHJcbiAgICBncmlkLmRyYXdHcmlkKHsgY3R4LCBvZmZzZXRzIH0pXHJcbn0pOyIsImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vUGllY2VcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBudW1TcGFjZXNYOiBudW1iZXJcclxuICAgIHB1YmxpYyByZWFkb25seSBudW1TcGFjZXNZOiBudW1iZXJcclxuICAgIHB1YmxpYyByZWFkb25seSBwaXhlbEhlaWdodDogbnVtYmVyXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGl4ZWxXaWR0aDogbnVtYmVyXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3F1YXJlSGVpZ2h0OiBudW1iZXJcclxuICAgIHB1YmxpYyByZWFkb25seSBzcXVhcmVXaWR0aDogbnVtYmVyXHJcbiAgICBwdWJsaWMgcGllY2VzOiBQaWVjZVtdID0gW11cclxuICAgIHB1YmxpYyBkYXRhOiBQaWVjZVtdID0gW11cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3BlYzogeyBudW1TcGFjZXNYOiBudW1iZXIsIG51bVNwYWNlc1k6IG51bWJlciwgcGl4ZWxXaWR0aDogbnVtYmVyLCBwaXhlbEhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICBjb25zdCB7IG51bVNwYWNlc1gsIG51bVNwYWNlc1ksIHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoIH0gPSBzcGVjXHJcbiAgICAgICAgdGhpcy5udW1TcGFjZXNYID0gbnVtU3BhY2VzWFxyXG4gICAgICAgIHRoaXMubnVtU3BhY2VzWSA9IG51bVNwYWNlc1lcclxuICAgICAgICB0aGlzLnBpeGVsSGVpZ2h0ID0gcGl4ZWxIZWlnaHRcclxuICAgICAgICB0aGlzLnBpeGVsV2lkdGggPSBwaXhlbFdpZHRoXHJcbiAgICAgICAgdGhpcy5zcXVhcmVXaWR0aCA9IHBpeGVsV2lkdGggLyAobnVtU3BhY2VzWCArIDIpXHJcbiAgICAgICAgdGhpcy5zcXVhcmVIZWlnaHQgPSBwaXhlbEhlaWdodCAvIChudW1TcGFjZXNZICsgMilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGllY2UobG9jOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICBjb25zdCB7IG51bVNwYWNlc1gsIGRhdGEgfSA9IHRoaXNcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGxvY1xyXG4gICAgICAgIHJldHVybiBkYXRhW3kgKiBudW1TcGFjZXNYICsgeF1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd0dyaWQoc3BlYzogeyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgb2Zmc2V0czogeyB4T2Zmc2V0OiBudW1iZXIsIHlPZmZzZXQ6IG51bWJlciB9IH0pIHtcclxuICAgICAgICBjb25zdCB7IGN0eCwgb2Zmc2V0cyB9ID0gc3BlY1xyXG4gICAgICAgIGNvbnN0IHsgeE9mZnNldCwgeU9mZnNldCB9ID0gb2Zmc2V0c1xyXG4gICAgICAgIGNvbnN0IHsgc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCB9ID0gdGhpc1xyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKHhPZmZzZXQsIHlPZmZzZXQpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNCMEIwQjBcIlxyXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLnBpeGVsV2lkdGgsIHRoaXMucGl4ZWxIZWlnaHQpXHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDJcclxuICAgICAgICBjdHguYmVnaW5QYXRoKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubnVtU3BhY2VzWCArIDI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIHNxdWFyZVdpZHRoXHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCwgc3F1YXJlSGVpZ2h0KVxyXG4gICAgICAgICAgICBjdHgubGluZVRvKHgsIHRoaXMucGl4ZWxIZWlnaHQgLSBzcXVhcmVIZWlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5udW1TcGFjZXNZICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpICogc3F1YXJlSGVpZ2h0XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oc3F1YXJlV2lkdGgsIHkpXHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5waXhlbFdpZHRoIC0gc3F1YXJlV2lkdGgsIHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICAgICAgICBjdHgudHJhbnNsYXRlKC14T2Zmc2V0LCAteU9mZnNldClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=