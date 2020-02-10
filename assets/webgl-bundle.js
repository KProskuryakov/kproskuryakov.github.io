!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}({11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setGL=function(e){const r=document.getElementById(e);if(!r)throw new Error("Failed to find canvas with that id.");const n=r.getContext("webgl2");if(!n)throw new Error("Failed to create gl context");t.canvas=r,t.gl=n;const{width:o,height:l}=r;t.gl.viewport(0,0,o,l)}},32:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,l){function a(e){try{g(n.next(e))}catch(e){l(e)}}function i(e){try{g(n.throw(e))}catch(e){l(e)}}function g(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}g((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),r(11).setGL("canvas-gl");const o=r(11),l=r(33),a=o.gl.createVertexArray();o.gl.bindVertexArray(a);const i=o.gl.createBuffer();o.gl.bindBuffer(o.gl.ARRAY_BUFFER,i),o.gl.bufferData(o.gl.ARRAY_BUFFER,new Float32Array([.5,.5,0,1,0,0,.5,-.5,0,0,1,0,-.5,.5,0,0,0,1]),o.gl.STATIC_DRAW),o.gl.vertexAttribPointer(0,3,o.gl.FLOAT,!1,6*Float32Array.BYTES_PER_ELEMENT,0),o.gl.enableVertexAttribArray(0),o.gl.vertexAttribPointer(1,3,o.gl.FLOAT,!1,6*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),o.gl.enableVertexAttribArray(1);const g=o.gl.createVertexArray();o.gl.bindVertexArray(g);const c=o.gl.createBuffer();o.gl.bindBuffer(o.gl.ARRAY_BUFFER,c),o.gl.bufferData(o.gl.ARRAY_BUFFER,new Float32Array([.5,-.5,0,0,1,0,-.5,-.5,0,1,0,0,-.5,.5,0,0,0,1]),o.gl.STATIC_DRAW),o.gl.vertexAttribPointer(0,3,o.gl.FLOAT,!1,6*Float32Array.BYTES_PER_ELEMENT,0),o.gl.enableVertexAttribArray(0),o.gl.vertexAttribPointer(1,3,o.gl.FLOAT,!1,6*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT),o.gl.enableVertexAttribArray(1),o.gl.bindBuffer(o.gl.ARRAY_BUFFER,null),o.gl.bindBuffer(o.gl.ELEMENT_ARRAY_BUFFER,null),o.gl.bindVertexArray(null),function(){n(this,void 0,void 0,(function*(){const e=yield l.getShader("/assets/webgl/shaders/v1.glsl","/assets/webgl/shaders/f1.glsl"),t=yield l.getShader("/assets/webgl/shaders/v1.glsl","/assets/webgl/shaders/f2.glsl"),r=n=>{o.gl.clearColor(.2,.3,.3,1),o.gl.clear(o.gl.COLOR_BUFFER_BIT);const l=Math.sin(n/1e3)/2+.5;e.use(),o.gl.bindVertexArray(a),o.gl.drawArrays(o.gl.TRIANGLES,0,3),t.use(),t.setFloat("greenVal",l),o.gl.bindVertexArray(g),o.gl.drawArrays(o.gl.TRIANGLES,0,3),window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}))}()},33:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,l){function a(e){try{g(n.next(e))}catch(e){l(e)}}function i(e){try{g(n.throw(e))}catch(e){l(e)}}function g(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}g((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=r(11),l=new Map;function a(e){return n(this,void 0,void 0,(function*(){const t=l.get(e);if(t)return t;const r=yield window.fetch(e),n=yield r.text();return l.set(e,n),n}))}class i{constructor(e){this.program=e}use(){o.gl.useProgram(this.program)}setFloat(e,t){o.gl.uniform1f(o.gl.getUniformLocation(this.program,e),t)}}function g(e,t){const r=o.gl.createShader(e);return o.gl.shaderSource(r,t),o.gl.compileShader(r),0!==o.gl.getShaderParameter(r,o.gl.COMPILE_STATUS)&&console.error(o.gl.getShaderInfoLog(r)),r}t.Shader=i,t.getShader=function(e,t){return n(this,void 0,void 0,(function*(){const[r,n]=yield Promise.all([a(e),a(t)]);console.log(r);const l=function(e,t){const r=g(o.gl.VERTEX_SHADER,e),n=g(o.gl.FRAGMENT_SHADER,t),l=o.gl.createProgram();o.gl.attachShader(l,r),o.gl.attachShader(l,n),o.gl.linkProgram(l),0!==o.gl.getProgramParameter(l,o.gl.LINK_STATUS)&&console.error(o.gl.getProgramInfoLog(l));return o.gl.deleteShader(r),o.gl.deleteShader(n),l}(r,n);return new i(l)}))}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL2dsLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJnbEVudHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9TaGFkZXJzLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiY2FudmFzSWQiLCJuZXdDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCJjYW52YXNHTCIsImdldENvbnRleHQiLCJjYW52YXMiLCJnbCIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld3BvcnQiLCJzZXRHTCIsInZhbzEiLCJjcmVhdGVWZXJ0ZXhBcnJheSIsImJpbmRWZXJ0ZXhBcnJheSIsImJ1ZjEiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiQllURVNfUEVSX0VMRU1FTlQiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZhbzIiLCJidWYyIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJzaGFkZXIxIiwiZ2V0U2hhZGVyIiwic2hhZGVyMiIsInJlbmRlciIsInRpbWVzdGFtcCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJncmVlblZhbCIsIk1hdGgiLCJzaW4iLCJ1c2UiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVTIiwic2V0RmxvYXQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb1JlbmRlcmluZyIsInNoYWRlclNvdXJjZU1hcCIsIk1hcCIsImZldGNoU2hhZGVyU291cmNlIiwicGF0aCIsImV4aXN0aW5nU291cmNlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5ld1NvdXJjZSIsInRleHQiLCJzZXQiLCJTaGFkZXIiLCJwcm9ncmFtIiwidXNlUHJvZ3JhbSIsInRoaXMiLCJ1bmlmb3JtIiwidW5pZm9ybTFmIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwiY29tcGlsZVNoYWRlciIsInh0eXBlIiwic291cmNlIiwic2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwic2hhZGVyU291cmNlIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRTaGFkZXJJbmZvTG9nIiwidlBhdGgiLCJmUGF0aCIsInZTb3VyY2UiLCJmU291cmNlIiwiUHJvbWlzZSIsImFsbCIsImxvZyIsInZTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiZlNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwibWFrZVNoYWRlclByb2dyYW0iXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxF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QWtCMEIsR0FBUTFCLEVBQWtCMkIsS0FDMUZKLFFBQVFTLElBQUlKLEdBQ1osTUFBTW5CLEVBSVYsU0FBMkJtQixFQUFpQkMsR0FDeEMsTUFBTUksRUFBVWxCLEVBQWMsRUFBQXpELEdBQUc0RSxjQUFlTixHQUMxQ08sRUFBVXBCLEVBQWMsRUFBQXpELEdBQUc4RSxnQkFBaUJQLEdBQzVDcEIsRUFBVSxFQUFBbkQsR0FBRytFLGdCQUVuQixFQUFBL0UsR0FBR2dGLGFBQWE3QixFQUFTd0IsR0FDekIsRUFBQTNFLEdBQUdnRixhQUFhN0IsRUFBUzBCLEdBQ3pCLEVBQUE3RSxHQUFHaUYsWUFBWTlCLEdBRXlDLElBQXBELEVBQUFuRCxHQUFHa0Ysb0JBQW9CL0IsRUFBUyxFQUFBbkQsR0FBR21GLGNBQ25DbEIsUUFBUUMsTUFBTSxFQUFBbEUsR0FBR29GLGtCQUFrQmpDLElBTXZDLE9BSEEsRUFBQW5ELEdBQUdxRixhQUFhVixHQUNoQixFQUFBM0UsR0FBR3FGLGFBQWFSLEdBRVQxQixFQXBCU21DLENBQWtCaEIsRUFBU0MsR0FDM0MsT0FBTyxJQUFJckIsRUFBT0MiLCJmaWxlIjoid2ViZ2wtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMyKTtcbiIsImV4cG9ydCBsZXQgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG5leHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRHTChjYW52YXNJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoIW5ld0NhbnZhcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmluZCBjYW52YXMgd2l0aCB0aGF0IGlkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNHTCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpIGFzIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgfCBudWxsO1xuXG4gICAgaWYgKCFjYW52YXNHTCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGdsIGNvbnRleHRcIik7XG4gICAgfVxuICAgIGNhbnZhcyA9IG5ld0NhbnZhcztcbiAgICBnbCA9IGNhbnZhc0dMO1xuXG4gICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gbmV3Q2FudmFzO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgc2V0R0wgfSBmcm9tIFwiLi9nbFwiO1xuc2V0R0woXCJjYW52YXMtZ2xcIik7XG5pbXBvcnQgeyBnbCB9IGZyb20gXCIuL2dsXCI7XG5cbmltcG9ydCB7IGdldFNoYWRlciB9IGZyb20gXCIuL1NoYWRlcnNcIjtcblxuY29uc3QgdmVydGljZXMgPSBbXG4gICAgLy8gcG9zICAgICAgICAgY29sb3JzXG4gICAgMC41LCAwLjUsIDAuMCwgMS4wLCAwLjAsIDAuMCwgLy8gdG9wIHJpZ2h0XG4gICAgMC41LCAtMC41LCAwLjAsIDAuMCwgMS4wLCAwLjAsIC8vIGJvdHRvbSByaWdodFxuICAgIC0wLjUsIDAuNSwgMC4wLCAwLjAsIDAuMCwgMS4wLCAvLyB0b3AgbGVmdFxuXTtcblxuY29uc3QgdmVydGljZXMyID0gW1xuICAgIDAuNSwgLTAuNSwgMC4wLCAwLjAsIDEuMCwgMC4wLCAvLyBib3R0b20gcmlnaHRcbiAgICAtMC41LCAtMC41LCAwLjAsIDEuMCwgMC4wLCAwLjAsIC8vIGJvdHRvbSBsZWZ0XG4gICAgLTAuNSwgMC41LCAwLjAsIDAuMCwgMC4wLCAxLjAsIC8vIHRvcCBsZWZ0XG5dO1xuXG5jb25zdCB2YW8xID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbmdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8xKTtcblxuY29uc3QgYnVmMSA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZjEpO1xuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbi8vIHNldCB2ZXJ0ZXggYXR0cmlidXRlIHBvaW50ZXJzXG5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgNiAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgMCk7XG5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKVxuLy8gc2V0IGNvbG9yIGF0dHJpYnV0ZSBwb2ludGVyc1xuZ2wudmVydGV4QXR0cmliUG9pbnRlcigxLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDYgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsIDMgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMSk7XG5cbmNvbnN0IHZhbzIgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuZ2wuYmluZFZlcnRleEFycmF5KHZhbzIpO1xuXG5jb25zdCBidWYyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmMik7XG5nbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlczIpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbi8vIHNldCB2ZXJ0ZXggYXR0cmlidXRlIHBvaW50ZXJzXG5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgNiAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCwgMCk7XG5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbi8vIHNldCBjb2xvciBhdHRyaWJ1dGUgcG9pbnRlcnNcbmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMSwgMywgZ2wuRkxPQVQsIGZhbHNlLCA2ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULCAzICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDEpO1xuXG5nbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5nbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcbmdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcblxuYXN5bmMgZnVuY3Rpb24gZG9SZW5kZXJpbmcoKSB7XG4gICAgY29uc3Qgc2hhZGVyMSA9IGF3YWl0IGdldFNoYWRlcihcIi9hc3NldHMvd2ViZ2wvc2hhZGVycy92MS5nbHNsXCIsIFwiL2Fzc2V0cy93ZWJnbC9zaGFkZXJzL2YxLmdsc2xcIik7XG4gICAgY29uc3Qgc2hhZGVyMiA9IGF3YWl0IGdldFNoYWRlcihcIi9hc3NldHMvd2ViZ2wvc2hhZGVycy92MS5nbHNsXCIsIFwiL2Fzc2V0cy93ZWJnbC9zaGFkZXJzL2YyLmdsc2xcIik7XG5cbiAgICBjb25zdCByZW5kZXIgPSAodGltZXN0YW1wOiBudW1iZXIpID0+IHtcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjIsIDAuMywgMC4zLCAxLjApO1xuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICAgICAgICBjb25zdCBncmVlblZhbCA9IChNYXRoLnNpbih0aW1lc3RhbXAgLyAxMDAwKSAvIDIuMCkgKyAwLjU7XG5cbiAgICAgICAgc2hhZGVyMS51c2UoKTtcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbzEpO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgMyk7XG5cbiAgICAgICAgc2hhZGVyMi51c2UoKTtcbiAgICAgICAgc2hhZGVyMi5zZXRGbG9hdChcImdyZWVuVmFsXCIsIGdyZWVuVmFsKTtcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbzIpO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgMyk7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59XG5cbmRvUmVuZGVyaW5nKCk7XG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL2dsXCI7XG5cbmNvbnN0IHNoYWRlclNvdXJjZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2hhZGVyU291cmNlKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGV4aXN0aW5nU291cmNlID0gc2hhZGVyU291cmNlTWFwLmdldChwYXRoKTtcbiAgICBpZiAoZXhpc3RpbmdTb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nU291cmNlO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChwYXRoKTtcbiAgICBjb25zdCBuZXdTb3VyY2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgc2hhZGVyU291cmNlTWFwLnNldChwYXRoLCBuZXdTb3VyY2UpO1xuICAgIHJldHVybiBuZXdTb3VyY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGFkZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtKSB7fVxuXG4gICAgcHVibGljIHVzZSgpIHtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RmxvYXQodW5pZm9ybTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZihnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCB1bmlmb3JtKSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNoYWRlcih2UGF0aDogc3RyaW5nLCBmUGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgW3ZTb3VyY2UsIGZTb3VyY2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoU2hhZGVyU291cmNlKHZQYXRoKSwgZmV0Y2hTaGFkZXJTb3VyY2UoZlBhdGgpXSk7XG4gICAgY29uc29sZS5sb2codlNvdXJjZSk7XG4gICAgY29uc3QgcHJvZ3JhbSA9IG1ha2VTaGFkZXJQcm9ncmFtKHZTb3VyY2UsIGZTb3VyY2UpO1xuICAgIHJldHVybiBuZXcgU2hhZGVyKHByb2dyYW0pO1xufVxuXG5mdW5jdGlvbiBtYWtlU2hhZGVyUHJvZ3JhbSh2U291cmNlOiBzdHJpbmcsIGZTb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IHZTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHZTb3VyY2UpO1xuICAgIGNvbnN0IGZTaGFkZXIgPSBjb21waWxlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZlNvdXJjZSk7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSE7XG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdlNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZTaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgaWYgKGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgIH1cblxuICAgIGdsLmRlbGV0ZVNoYWRlcih2U2hhZGVyKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoZlNoYWRlcik7XG5cbiAgICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVNoYWRlcih4dHlwZTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih4dHlwZSkhO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICAgIGlmIChnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykgIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==