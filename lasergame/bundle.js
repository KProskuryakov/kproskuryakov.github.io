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
    var canvasId = "grid-canvas";
    var toolbarId = "toolbar-canvas";
    var gridCanvas = document.getElementById(canvasId);
    var gridCtx = gridCanvas.getContext("2d");
    var toolbarCanvas = document.getElementById(toolbarId);
    var toolbarCtx = toolbarCanvas.getContext("2d");
    var grid = new Grid_1.Grid({ numSpacesX: 5, numSpacesY: 5, pixelWidth: gridCanvas.width, pixelHeight: gridCanvas.height });
    var offsets = { xOffset: 0, yOffset: 0 };
    grid.drawGrid({ gridCtx: gridCtx, offsets: offsets });
    function draw() {
        grid.drawGrid({ gridCtx: gridCtx, offsets: offsets });
        setTimeout(draw, 1000);
    }
    draw();
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
        var gridCtx = spec.gridCtx, offsets = spec.offsets;
        var xOffset = offsets.xOffset, yOffset = offsets.yOffset;
        var _a = this, squareWidth = _a.squareWidth, squareHeight = _a.squareHeight, pixelHeight = _a.pixelHeight, pixelWidth = _a.pixelWidth, numSpacesX = _a.numSpacesX, numSpacesY = _a.numSpacesY;
        gridCtx.translate(xOffset, yOffset);
        gridCtx.fillStyle = "#B0B0B0";
        gridCtx.fillRect(0, 0, pixelWidth, pixelHeight);
        gridCtx.strokeStyle = "#000000";
        gridCtx.lineWidth = 2;
        gridCtx.beginPath();
        for (var i = 1; i < numSpacesX + 2; i++) {
            var x = i * squareWidth;
            gridCtx.moveTo(x, squareHeight);
            gridCtx.lineTo(x, pixelHeight - squareHeight);
        }
        for (var i = 1; i < numSpacesY + 2; i++) {
            var y = i * squareHeight;
            gridCtx.moveTo(squareWidth, y);
            gridCtx.lineTo(pixelWidth - squareWidth, y);
        }
        gridCtx.stroke();
        var halfY = squareHeight / 2;
        var halfX = squareWidth / 2;
        gridCtx.fillStyle = "#000000";
        gridCtx.textBaseline = "middle";
        gridCtx.font = '32px serif';
        for (var i = 1; i <= numSpacesX; i++) {
            var x = i * squareWidth + halfX;
            var numText = i.toString();
            gridCtx.fillText(numText, x - gridCtx.measureText(numText).width / 2, halfY);
        }
        var farEdgeX = (numSpacesX + 1) * squareWidth + halfX;
        for (var i = 1; i <= numSpacesY; i++) {
            var y = i * squareHeight + halfY;
            var numText = (i + numSpacesX).toString();
            gridCtx.fillText(numText, farEdgeX - gridCtx.measureText(numText).width / 2, y);
        }
        var farEdgeY = (numSpacesY + 1) * squareHeight + halfY;
        for (var i = 1; i <= numSpacesX; i++) {
            var x = i * squareWidth + halfX;
            var numText = (numSpacesX * 2 + numSpacesY + 1 - i).toString();
            gridCtx.fillText(numText, x - gridCtx.measureText(numText).width / 2, farEdgeY);
        }
        for (var i = 1; i <= numSpacesY; i++) {
            var y = i * squareHeight + halfY;
            var numText = (numSpacesX * 2 + numSpacesY * 2 + 1 - i).toString();
            gridCtx.fillText(numText, halfX - gridCtx.measureText(numText).width / 2, y);
        }
        gridCtx.translate(-xOffset, -yOffset);
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc2VyZ2FtZS9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXNlcmdhbWUvR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMEVBQTZCO0FBRTdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsSUFBTSxRQUFRLEdBQUcsYUFBYTtJQUM5QixJQUFNLFNBQVMsR0FBRyxnQkFBZ0I7SUFFbEMsSUFBTSxVQUFVLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ3ZFLElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFO0lBRTVDLElBQU0sYUFBYSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUMzRSxJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUVqRCxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JILElBQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLFdBQUUsT0FBTyxXQUFFLENBQUM7SUFFbkM7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxXQUFFLE9BQU8sV0FBRSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLEVBQUU7QUFDVixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRjtJQVVJLGNBQW1CLElBQXlGO1FBSHJHLFdBQU0sR0FBWSxFQUFFO1FBQ3BCLFNBQUksR0FBWSxFQUFFO1FBR2IsZ0NBQVUsRUFBRSw0QkFBVSxFQUFFLDhCQUFXLEVBQUUsNEJBQVUsQ0FBUztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sdUJBQVEsR0FBZixVQUFnQixHQUE2QjtRQUNuQyxhQUEyQixFQUF6QiwwQkFBVSxFQUFFLGNBQUksQ0FBUztRQUN6QixhQUFDLEVBQUUsU0FBQyxDQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWdCLElBQTBGO1FBQzlGLDBCQUFPLEVBQUUsc0JBQU8sQ0FBUztRQUN6Qiw2QkFBTyxFQUFFLHlCQUFPLENBQVk7UUFDOUIsYUFBcUYsRUFBbkYsNEJBQVcsRUFBRSw4QkFBWSxFQUFFLDRCQUFXLEVBQUUsMEJBQVUsRUFBRSwwQkFBVSxFQUFFLDBCQUFVLENBQVM7UUFFM0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUM3QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUUvQyxPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVc7WUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxZQUFZLENBQUM7U0FDaEQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWTtZQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFFaEIsSUFBTSxLQUFLLEdBQUcsWUFBWSxHQUFHLENBQUM7UUFDOUIsSUFBTSxLQUFLLEdBQUcsV0FBVyxHQUFHLENBQUM7UUFDN0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzdCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsUUFBUTtRQUMvQixPQUFPLENBQUMsSUFBSSxHQUFHLFlBQVk7UUFFM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLEtBQUs7WUFDakMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztTQUMvRTtRQUVELElBQU0sUUFBUSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxLQUFLO1FBRXZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxLQUFLO1lBQ2xDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN6QyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRjtRQUVELElBQU0sUUFBUSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxLQUFLO1FBRXhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxLQUFLO1lBQ2pDLElBQU0sT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNoRSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQztTQUNsRjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxLQUFLO1lBQ2xDLElBQU0sT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDcEUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0U7UUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQXZGWSxvQkFBSSIsImZpbGUiOiJsYXNlcmdhbWUvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGFzZXJnYW1lL0dhbWUudHNcIik7XG4iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vR3JpZFwiXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzSWQgPSBcImdyaWQtY2FudmFzXCJcclxuICAgIGNvbnN0IHRvb2xiYXJJZCA9IFwidG9vbGJhci1jYW52YXNcIlxyXG5cclxuICAgIGNvbnN0IGdyaWRDYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpXHJcbiAgICBjb25zdCBncmlkQ3R4ID0gZ3JpZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhXHJcblxyXG4gICAgY29uc3QgdG9vbGJhckNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b29sYmFySWQpXHJcbiAgICBjb25zdCB0b29sYmFyQ3R4ID0gdG9vbGJhckNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcclxuXHJcbiAgICBjb25zdCBncmlkID0gbmV3IEdyaWQoeyBudW1TcGFjZXNYOiA1LCBudW1TcGFjZXNZOiA1LCBwaXhlbFdpZHRoOiBncmlkQ2FudmFzLndpZHRoLCBwaXhlbEhlaWdodDogZ3JpZENhbnZhcy5oZWlnaHQgfSlcclxuICAgIGNvbnN0IG9mZnNldHMgPSB7IHhPZmZzZXQ6IDAsIHlPZmZzZXQ6IDAgfVxyXG5cclxuICAgIGdyaWQuZHJhd0dyaWQoeyBncmlkQ3R4LCBvZmZzZXRzIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgICAgICBncmlkLmRyYXdHcmlkKHsgZ3JpZEN0eCwgb2Zmc2V0cyB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoZHJhdywgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KClcclxufSlcclxuXHJcbiIsImltcG9ydCB7IFBpZWNlIH0gZnJvbSBcIi4vUGllY2VcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG51bVNwYWNlc1g6IG51bWJlclxyXG4gICAgcHVibGljIHJlYWRvbmx5IG51bVNwYWNlc1k6IG51bWJlclxyXG4gICAgcHVibGljIHJlYWRvbmx5IHBpeGVsSGVpZ2h0OiBudW1iZXJcclxuICAgIHB1YmxpYyByZWFkb25seSBwaXhlbFdpZHRoOiBudW1iZXJcclxuICAgIHB1YmxpYyByZWFkb25seSBzcXVhcmVIZWlnaHQ6IG51bWJlclxyXG4gICAgcHVibGljIHJlYWRvbmx5IHNxdWFyZVdpZHRoOiBudW1iZXJcclxuICAgIHB1YmxpYyBwaWVjZXM6IFBpZWNlW10gPSBbXVxyXG4gICAgcHVibGljIGRhdGE6IFBpZWNlW10gPSBbXVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzcGVjOiB7IG51bVNwYWNlc1g6IG51bWJlciwgbnVtU3BhY2VzWTogbnVtYmVyLCBwaXhlbFdpZHRoOiBudW1iZXIsIHBpeGVsSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgbnVtU3BhY2VzWCwgbnVtU3BhY2VzWSwgcGl4ZWxIZWlnaHQsIHBpeGVsV2lkdGggfSA9IHNwZWNcclxuICAgICAgICB0aGlzLm51bVNwYWNlc1ggPSBudW1TcGFjZXNYXHJcbiAgICAgICAgdGhpcy5udW1TcGFjZXNZID0gbnVtU3BhY2VzWVxyXG4gICAgICAgIHRoaXMucGl4ZWxIZWlnaHQgPSBwaXhlbEhlaWdodFxyXG4gICAgICAgIHRoaXMucGl4ZWxXaWR0aCA9IHBpeGVsV2lkdGhcclxuICAgICAgICB0aGlzLnNxdWFyZVdpZHRoID0gcGl4ZWxXaWR0aCAvIChudW1TcGFjZXNYICsgMilcclxuICAgICAgICB0aGlzLnNxdWFyZUhlaWdodCA9IHBpeGVsSGVpZ2h0IC8gKG51bVNwYWNlc1kgKyAyKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQaWVjZShsb2M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIGNvbnN0IHsgbnVtU3BhY2VzWCwgZGF0YSB9ID0gdGhpc1xyXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gbG9jXHJcbiAgICAgICAgcmV0dXJuIGRhdGFbeSAqIG51bVNwYWNlc1ggKyB4XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3R3JpZChzcGVjOiB7IGdyaWRDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgb2Zmc2V0czogeyB4T2Zmc2V0OiBudW1iZXIsIHlPZmZzZXQ6IG51bWJlciB9IH0pIHtcclxuICAgICAgICBjb25zdCB7IGdyaWRDdHgsIG9mZnNldHMgfSA9IHNwZWNcclxuICAgICAgICBjb25zdCB7IHhPZmZzZXQsIHlPZmZzZXQgfSA9IG9mZnNldHNcclxuICAgICAgICBjb25zdCB7IHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQsIHBpeGVsSGVpZ2h0LCBwaXhlbFdpZHRoLCBudW1TcGFjZXNYLCBudW1TcGFjZXNZIH0gPSB0aGlzXHJcblxyXG4gICAgICAgIGdyaWRDdHgudHJhbnNsYXRlKHhPZmZzZXQsIHlPZmZzZXQpXHJcblxyXG4gICAgICAgIGdyaWRDdHguZmlsbFN0eWxlID0gXCIjQjBCMEIwXCJcclxuICAgICAgICBncmlkQ3R4LmZpbGxSZWN0KDAsIDAsIHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KVxyXG5cclxuICAgICAgICBncmlkQ3R4LnN0cm9rZVN0eWxlID0gXCIjMDAwMDAwXCJcclxuICAgICAgICBncmlkQ3R4LmxpbmVXaWR0aCA9IDJcclxuICAgICAgICBncmlkQ3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1TcGFjZXNYICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBpICogc3F1YXJlV2lkdGhcclxuICAgICAgICAgICAgZ3JpZEN0eC5tb3ZlVG8oeCwgc3F1YXJlSGVpZ2h0KVxyXG4gICAgICAgICAgICBncmlkQ3R4LmxpbmVUbyh4LCBwaXhlbEhlaWdodCAtIHNxdWFyZUhlaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1TcGFjZXNZICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpICogc3F1YXJlSGVpZ2h0XHJcbiAgICAgICAgICAgIGdyaWRDdHgubW92ZVRvKHNxdWFyZVdpZHRoLCB5KVxyXG4gICAgICAgICAgICBncmlkQ3R4LmxpbmVUbyhwaXhlbFdpZHRoIC0gc3F1YXJlV2lkdGgsIHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyaWRDdHguc3Ryb2tlKClcclxuXHJcbiAgICAgICAgY29uc3QgaGFsZlkgPSBzcXVhcmVIZWlnaHQgLyAyXHJcbiAgICAgICAgY29uc3QgaGFsZlggPSBzcXVhcmVXaWR0aCAvIDJcclxuICAgICAgICBncmlkQ3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgZ3JpZEN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiXHJcbiAgICAgICAgZ3JpZEN0eC5mb250ID0gJzMycHggc2VyaWYnXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVNwYWNlc1g7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIHNxdWFyZVdpZHRoICsgaGFsZlhcclxuICAgICAgICAgICAgY29uc3QgbnVtVGV4dCA9IGkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBncmlkQ3R4LmZpbGxUZXh0KG51bVRleHQsIHggLSBncmlkQ3R4Lm1lYXN1cmVUZXh0KG51bVRleHQpLndpZHRoIC8gMiwgaGFsZlkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmYXJFZGdlWCA9IChudW1TcGFjZXNYICsgMSkgKiBzcXVhcmVXaWR0aCArIGhhbGZYXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVNwYWNlc1k7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gaSAqIHNxdWFyZUhlaWdodCArIGhhbGZZXHJcbiAgICAgICAgICAgIGxldCBudW1UZXh0ID0gKGkgKyBudW1TcGFjZXNYKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIGdyaWRDdHguZmlsbFRleHQobnVtVGV4dCwgZmFyRWRnZVggLSBncmlkQ3R4Lm1lYXN1cmVUZXh0KG51bVRleHQpLndpZHRoIC8gMiwgeSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZhckVkZ2VZID0gKG51bVNwYWNlc1kgKyAxKSAqIHNxdWFyZUhlaWdodCArIGhhbGZZXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVNwYWNlc1g7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIHNxdWFyZVdpZHRoICsgaGFsZlhcclxuICAgICAgICAgICAgY29uc3QgbnVtVGV4dCA9IChudW1TcGFjZXNYICogMiArIG51bVNwYWNlc1kgKyAxIC0gaSkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBncmlkQ3R4LmZpbGxUZXh0KG51bVRleHQsIHggLSBncmlkQ3R4Lm1lYXN1cmVUZXh0KG51bVRleHQpLndpZHRoIC8gMiwgZmFyRWRnZVkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1TcGFjZXNZOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGkgKiBzcXVhcmVIZWlnaHQgKyBoYWxmWVxyXG4gICAgICAgICAgICBjb25zdCBudW1UZXh0ID0gKG51bVNwYWNlc1ggKiAyICsgbnVtU3BhY2VzWSAqIDIgKyAxIC0gaSkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBncmlkQ3R4LmZpbGxUZXh0KG51bVRleHQsIGhhbGZYIC0gZ3JpZEN0eC5tZWFzdXJlVGV4dChudW1UZXh0KS53aWR0aCAvIDIsIHkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBncmlkQ3R4LnRyYW5zbGF0ZSgteE9mZnNldCwgLXlPZmZzZXQpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9