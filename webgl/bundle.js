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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/webgl/WebglEntry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/webgl/Shaders.ts":
/*!******************************!*\
  !*** ./src/webgl/Shaders.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gl_1 = __webpack_require__(/*! ./gl */ "./src/webgl/gl.ts");
const shaderSourceMap = new Map();
function fetchShaderSource(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingSource = shaderSourceMap.get(path);
        if (existingSource) {
            return existingSource;
        }
        const response = yield window.fetch(path);
        const newSource = yield response.text();
        shaderSourceMap.set(path, newSource);
        return newSource;
    });
}
class Shader {
    constructor(program) {
        this.program = program;
    }
    use() {
        gl_1.gl.useProgram(this.program);
    }
    setFloat(uniform, value) {
        gl_1.gl.uniform1f(gl_1.gl.getUniformLocation(this.program, uniform), value);
    }
}
exports.Shader = Shader;
function getShader(vPath, fPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const [vSource, fSource] = yield Promise.all([fetchShaderSource(vPath), fetchShaderSource(fPath)]);
        console.log(vSource);
        const program = makeShaderProgram(vSource, fSource);
        return new Shader(program);
    });
}
exports.getShader = getShader;
function makeShaderProgram(vSource, fSource) {
    const vShader = compileShader(gl_1.gl.VERTEX_SHADER, vSource);
    const fShader = compileShader(gl_1.gl.FRAGMENT_SHADER, fSource);
    const program = gl_1.gl.createProgram();
    gl_1.gl.attachShader(program, vShader);
    gl_1.gl.attachShader(program, fShader);
    gl_1.gl.linkProgram(program);
    if (gl_1.gl.getProgramParameter(program, gl_1.gl.LINK_STATUS) !== 0) {
        console.error(gl_1.gl.getProgramInfoLog(program));
    }
    gl_1.gl.deleteShader(vShader);
    gl_1.gl.deleteShader(fShader);
    return program;
}
function compileShader(xtype, source) {
    const shader = gl_1.gl.createShader(xtype);
    gl_1.gl.shaderSource(shader, source);
    gl_1.gl.compileShader(shader);
    if (gl_1.gl.getShaderParameter(shader, gl_1.gl.COMPILE_STATUS) !== 0) {
        console.error(gl_1.gl.getShaderInfoLog(shader));
    }
    return shader;
}


/***/ }),

/***/ "./src/webgl/WebglEntry.ts":
/*!*********************************!*\
  !*** ./src/webgl/WebglEntry.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gl_1 = __webpack_require__(/*! ./gl */ "./src/webgl/gl.ts");
gl_1.setGL("canvas-gl");
const gl_2 = __webpack_require__(/*! ./gl */ "./src/webgl/gl.ts");
const Shaders_1 = __webpack_require__(/*! ./Shaders */ "./src/webgl/Shaders.ts");
const vertices = [
    // pos         colors
    0.5, 0.5, 0.0, 1.0, 0.0, 0.0,
    0.5, -0.5, 0.0, 0.0, 1.0, 0.0,
    -0.5, 0.5, 0.0, 0.0, 0.0, 1.0,
];
const vertices2 = [
    0.5, -0.5, 0.0, 0.0, 1.0, 0.0,
    -0.5, -0.5, 0.0, 1.0, 0.0, 0.0,
    -0.5, 0.5, 0.0, 0.0, 0.0, 1.0,
];
const vao1 = gl_2.gl.createVertexArray();
gl_2.gl.bindVertexArray(vao1);
const buf1 = gl_2.gl.createBuffer();
gl_2.gl.bindBuffer(gl_2.gl.ARRAY_BUFFER, buf1);
gl_2.gl.bufferData(gl_2.gl.ARRAY_BUFFER, new Float32Array(vertices), gl_2.gl.STATIC_DRAW);
// set vertex attribute pointers
gl_2.gl.vertexAttribPointer(0, 3, gl_2.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
gl_2.gl.enableVertexAttribArray(0);
// set color attribute pointers
gl_2.gl.vertexAttribPointer(1, 3, gl_2.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
gl_2.gl.enableVertexAttribArray(1);
const vao2 = gl_2.gl.createVertexArray();
gl_2.gl.bindVertexArray(vao2);
const buf2 = gl_2.gl.createBuffer();
gl_2.gl.bindBuffer(gl_2.gl.ARRAY_BUFFER, buf2);
gl_2.gl.bufferData(gl_2.gl.ARRAY_BUFFER, new Float32Array(vertices2), gl_2.gl.STATIC_DRAW);
// set vertex attribute pointers
gl_2.gl.vertexAttribPointer(0, 3, gl_2.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
gl_2.gl.enableVertexAttribArray(0);
// set color attribute pointers
gl_2.gl.vertexAttribPointer(1, 3, gl_2.gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
gl_2.gl.enableVertexAttribArray(1);
gl_2.gl.bindBuffer(gl_2.gl.ARRAY_BUFFER, null);
gl_2.gl.bindBuffer(gl_2.gl.ELEMENT_ARRAY_BUFFER, null);
gl_2.gl.bindVertexArray(null);
function doRendering() {
    return __awaiter(this, void 0, void 0, function* () {
        const shader1 = yield Shaders_1.getShader("../src/webgl/shaders/v1.glsl", "../src/webgl/shaders/f1.glsl");
        const shader2 = yield Shaders_1.getShader("../src/webgl/shaders/v1.glsl", "../src/webgl/shaders/f2.glsl");
        const render = (timestamp) => {
            gl_2.gl.clearColor(0.2, 0.3, 0.3, 1.0);
            gl_2.gl.clear(gl_2.gl.COLOR_BUFFER_BIT);
            const greenVal = (Math.sin(timestamp / 1000) / 2.0) + 0.5;
            shader1.use();
            gl_2.gl.bindVertexArray(vao1);
            gl_2.gl.drawArrays(gl_2.gl.TRIANGLES, 0, 3);
            shader2.use();
            shader2.setFloat("greenVal", greenVal);
            gl_2.gl.bindVertexArray(vao2);
            gl_2.gl.drawArrays(gl_2.gl.TRIANGLES, 0, 3);
            window.requestAnimationFrame(render);
        };
        window.requestAnimationFrame(render);
    });
}
doRendering();


/***/ }),

/***/ "./src/webgl/gl.ts":
/*!*************************!*\
  !*** ./src/webgl/gl.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setGL(canvasId) {
    const newCanvas = document.getElementById(canvasId);
    if (!newCanvas) {
        throw new Error("Failed to find canvas with that id.");
    }
    const canvasGL = newCanvas.getContext("webgl2");
    if (!canvasGL) {
        throw new Error("Failed to create gl context");
    }
    exports.canvas = newCanvas;
    exports.gl = canvasGL;
    const { width, height } = newCanvas;
    exports.gl.viewport(0, 0, width, height);
}
exports.setGL = setGL;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL1NoYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL1dlYmdsRW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL2dsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxrRUFBMEI7QUFFMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7QUFFbEQsU0FBZSxpQkFBaUIsQ0FBQyxJQUFZOztRQUN6QyxNQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksY0FBYyxFQUFFO1lBQ2hCLE9BQU8sY0FBYyxDQUFDO1NBQ3pCO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxN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QUFRLENBQUMsQ0FBQztZQUN2QyxPQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQUUsQ0FBQyxVQUFVLENBQUMsT0FBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbEMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQUE7QUFFRCxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekVkLFNBQWdCLEtBQUssQ0FBQyxRQUFnQjtJQUNsQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBNkIsQ0FBQztJQUNoRixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0tBQzFEO0lBRUQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQWtDLENBQUM7SUFFakYsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztLQUNsRDtJQUNELGNBQU0sR0FBRyxTQUFTLENBQUM7SUFDbkIsVUFBRSxHQUFHLFFBQVEsQ0FBQztJQUVkLE1BQU0sRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLFVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQWhCRCxzQkFnQkMiLCJmaWxlIjoid2ViZ2wvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd2ViZ2wvV2ViZ2xFbnRyeS50c1wiKTtcbiIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vZ2xcIjtcblxuY29uc3Qgc2hhZGVyU291cmNlTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaGFkZXJTb3VyY2UocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZXhpc3RpbmdTb3VyY2UgPSBzaGFkZXJTb3VyY2VNYXAuZ2V0KHBhdGgpO1xuICAgIGlmIChleGlzdGluZ1NvdXJjZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdTb3VyY2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKHBhdGgpO1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBzaGFkZXJTb3VyY2VNYXAuc2V0KHBhdGgsIG5ld1NvdXJjZSk7XG4gICAgcmV0dXJuIG5ld1NvdXJjZTtcbn1cblxuZXhwb3J0IGNsYXNzIFNoYWRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHt9XG5cbiAgICBwdWJsaWMgdXNlKCkge1xuICAgICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRGbG9hdCh1bmlmb3JtOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIHVuaWZvcm0pLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hhZGVyKHZQYXRoOiBzdHJpbmcsIGZQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBbdlNvdXJjZSwgZlNvdXJjZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hTaGFkZXJTb3VyY2UodlBhdGgpLCBmZXRjaFNoYWRlclNvdXJjZShmUGF0aCldKTtcbiAgICBjb25zb2xlLmxvZyh2U291cmNlKTtcbiAgICBjb25zdCBwcm9ncmFtID0gbWFrZVNoYWRlclByb2dyYW0odlNvdXJjZSwgZlNvdXJjZSk7XG4gICAgcmV0dXJuIG5ldyBTaGFkZXIocHJvZ3JhbSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VTaGFkZXJQcm9ncmFtKHZTb3VyY2U6IHN0cmluZywgZlNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdlNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUiwgdlNvdXJjZSk7XG4gICAgY29uc3QgZlNoYWRlciA9IGNvbXBpbGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSLCBmU291cmNlKTtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpITtcblxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZlNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBpZiAoZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykgIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XG4gICAgfVxuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHZTaGFkZXIpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihmU2hhZGVyKTtcblxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiBjb21waWxlU2hhZGVyKHh0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHh0eXBlKSE7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gICAgaWYgKGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gICAgfVxuICAgIHJldHVybiBzaGFkZXI7XG59XG4iLCJpbXBvcnQgeyBzZXRHTCB9IGZyb20gXCIuL2dsXCI7XG5zZXRHTChcImNhbnZhcy1nbFwiKTtcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vZ2xcIjtcblxuaW1wb3J0IHsgZ2V0U2hhZGVyIH0gZnJvbSBcIi4vU2hhZGVyc1wiO1xuXG5jb25zdCB2ZXJ0aWNlcyA9IFtcbiAgICAvLyBwb3MgICAgICAgICBjb2xvcnNcbiAgICAwLjUsIDAuNSwgMC4wLCAxLjAsIDAuMCwgMC4wLCAvLyB0b3AgcmlnaHRcbiAgICAwLjUsIC0wLjUsIDAuMCwgMC4wLCAxLjAsIDAuMCwgLy8gYm90dG9tIHJpZ2h0XG4gICAgLTAuNSwgMC41LCAwLjAsIDAuMCwgMC4wLCAxLjAsIC8vIHRvcCBsZWZ0XG5dO1xuXG5jb25zdCB2ZXJ0aWNlczIgPSBbXG4gICAgMC41LCAtMC41LCAwLjAsIDAuMCwgMS4wLCAwLjAsIC8vIGJvdHRvbSByaWdodFxuICAgIC0wLjUsIC0wLjUsIDAuMCwgMS4wLCAwLjAsIDAuMCwgLy8gYm90dG9tIGxlZnRcbiAgICAtMC41LCAwLjUsIDAuMCwgMC4wLCAwLjAsIDEuMCwgLy8gdG9wIGxlZnRcbl07XG5cbmNvbnN0IHZhbzEgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuZ2wuYmluZFZlcnRleEFycmF5KHZhbzEpO1xuXG5jb25zdCBidWYxID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmMSk7XG5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcblxuLy8gc2V0IHZlcnRleCBhdHRyaWJ1dGUgcG9pbnRlcnNcbmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAwKTtcbmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApXG4vLyBzZXQgY29sb3IgYXR0cmlidXRlIHBvaW50ZXJzXG5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDEsIDMsIGdsLkZMT0FULCBmYWxzZSwgNiAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgMyAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcblxuY29uc3QgdmFvMiA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG5nbC5iaW5kVmVydGV4QXJyYXkodmFvMik7XG5cbmNvbnN0IGJ1ZjIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWYyKTtcbmdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzMiksIGdsLlNUQVRJQ19EUkFXKTtcblxuLy8gc2V0IHZlcnRleCBhdHRyaWJ1dGUgcG9pbnRlcnNcbmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAwKTtcbmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuLy8gc2V0IGNvbG9yIGF0dHJpYnV0ZSBwb2ludGVyc1xuZ2wudmVydGV4QXR0cmliUG9pbnRlcigxLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDYgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMSk7XG5cbmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbmdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xuZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuXG5hc3luYyBmdW5jdGlvbiBkb1JlbmRlcmluZygpIHtcbiAgICBjb25zdCBzaGFkZXIxID0gYXdhaXQgZ2V0U2hhZGVyKFwiLi4vc3JjL3dlYmdsL3NoYWRlcnMvdjEuZ2xzbFwiLCBcIi4uL3NyYy93ZWJnbC9zaGFkZXJzL2YxLmdsc2xcIik7XG4gICAgY29uc3Qgc2hhZGVyMiA9IGF3YWl0IGdldFNoYWRlcihcIi4uL3NyYy93ZWJnbC9zaGFkZXJzL3YxLmdsc2xcIiwgXCIuLi9zcmMvd2ViZ2wvc2hhZGVycy9mMi5nbHNsXCIpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKHRpbWVzdGFtcDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMC4yLCAwLjMsIDAuMywgMS4wKTtcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICAgICAgY29uc3QgZ3JlZW5WYWwgPSAoTWF0aC5zaW4odGltZXN0YW1wIC8gMTAwMCkgLyAyLjApICsgMC41O1xuXG4gICAgICAgIHNoYWRlcjEudXNlKCk7XG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8xKTtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDMpO1xuXG4gICAgICAgIHNoYWRlcjIudXNlKCk7XG4gICAgICAgIHNoYWRlcjIuc2V0RmxvYXQoXCJncmVlblZhbFwiLCBncmVlblZhbCk7XG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8yKTtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDMpO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufVxuXG5kb1JlbmRlcmluZygpO1xuIiwiZXhwb3J0IGxldCBnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbmV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEdMKGNhbnZhc0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICAgIGlmICghbmV3Q2FudmFzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmaW5kIGNhbnZhcyB3aXRoIHRoYXQgaWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc0dMID0gbmV3Q2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIikgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCB8IG51bGw7XG5cbiAgICBpZiAoIWNhbnZhc0dMKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZ2wgY29udGV4dFwiKTtcbiAgICB9XG4gICAgY2FudmFzID0gbmV3Q2FudmFzO1xuICAgIGdsID0gY2FudmFzR0w7XG5cbiAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSBuZXdDYW52YXM7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9