!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({34:function(e,t,n){"use strict";window.addEventListener("load",()=>{!function(){const e=document.getElementById("tsiege-canvas"),t=e.getContext("2d"),n={x:50,y:50,movepoint:void 0,speed:300};e.addEventListener("mouseup",e=>{n.movepoint={x:e.offsetX,y:e.offsetY}});let o=0,i=0;requestAnimationFrame((function r(u){const l=u-i;if(i=u,n.movepoint){const e=Math.atan2(n.movepoint.y-n.y,n.movepoint.x-n.x);n.x=n.x+Math.cos(e)*n.speed*l/1e3,n.y=n.y+Math.sin(e)*n.speed*l/1e3,Math.abs(n.x-n.movepoint.x)<5&&Math.abs(n.y-n.movepoint.y)<5&&(n.movepoint=void 0)}o=1e3/l,function(e,t,n,o){const{width:i,height:r}=t;e.fillStyle="black",e.fillRect(0,0,i,r),e.fillStyle="red",e.fillRect(n.x,n.y,20,20),n.movepoint&&(e.strokeStyle="green",e.strokeRect(n.movepoint.x,n.movepoint.y,10,10));e.fillStyle="white",e.font="1.2em monospace",e.fillText("fps: "+Math.round(o),7,20)}(t,e,n,o),requestAnimationFrame(r)}))}()})}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzaWVnZS9tYWluLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicGxheWVyIiwieCIsInkiLCJtb3ZlcG9pbnQiLCJ1bmRlZmluZWQiLCJzcGVlZCIsImUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZwcyIsIm9sZHRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJ0aW1lIiwiZHQiLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsImNvcyIsInNpbiIsImFicyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJyb3VuZCIsImRyYXciLCJpbml0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFp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RUFBMkJLLEVBQWNTLEdBQ2xGLE1BQU0sTUFBRVksRUFBSyxPQUFFQyxHQUFXM0IsRUFDMUJHLEVBQUl5QixVQUFZLFFBQ2hCekIsRUFBSTBCLFNBQVMsRUFBRyxFQUFHSCxFQUFPQyxHQUUxQnhCLEVBQUl5QixVQUFZLE1BQ2hCekIsRUFBSTBCLFNBQVN4QixFQUFPQyxFQUFHRCxFQUFPRSxFQUFHLEdBQUksSUFFakNGLEVBQU9HLFlBQ1BMLEVBQUkyQixZQUFjLFFBQ2xCM0IsRUFBSTRCLFdBQVcxQixFQUFPRyxVQUFVRixFQUFHRCxFQUFPRyxVQUFVRCxFQUFHLEdBQUksS0FHL0RKLEVBQUl5QixVQUFZLFFBQ2hCekIsRUFBSTZCLEtBQU8sa0JBQ1g3QixFQUFJOEIsU0FBUyxRQUFRWixLQUFLYSxNQUFNcEIsR0FBUSxFQUFHLElBckJ2Q3FCLENBQUtoQyxFQUFLSCxFQUFRSyxFQUFRUyxHQUMxQkUsc0JBQXNCQyxNQW5DMUJtQiIsImZpbGUiOiJ0c2llZ2UtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM0KTtcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIFVuaXQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgbW92ZXBvaW50OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfCB1bmRlZmluZWQ7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNpZWdlLWNhbnZhc1wiKTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxuICAgIGNvbnN0IHBsYXllcjogVW5pdCA9IHsgeDogNTAsIHk6IDUwLCBtb3ZlcG9pbnQ6IHVuZGVmaW5lZCwgc3BlZWQ6IDMwMCB9O1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLm1vdmVwb2ludCA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGZwcyA9IDA7XHJcbiAgICBsZXQgb2xkdGltZSA9IDA7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGUodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZHQgPSB0aW1lIC0gb2xkdGltZTtcclxuICAgICAgICBvbGR0aW1lID0gdGltZTtcclxuICAgICAgICBpZiAocGxheWVyLm1vdmVwb2ludCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIocGxheWVyLm1vdmVwb2ludC55IC0gcGxheWVyLnksIHBsYXllci5tb3ZlcG9pbnQueCAtIHBsYXllci54KTtcclxuICAgICAgICAgICAgcGxheWVyLnggPSBwbGF5ZXIueCArIE1hdGguY29zKGFuZ2xlKSAqIHBsYXllci5zcGVlZCAqIGR0IC8gMTAwMDtcclxuICAgICAgICAgICAgcGxheWVyLnkgPSBwbGF5ZXIueSArIE1hdGguc2luKGFuZ2xlKSAqIHBsYXllci5zcGVlZCAqIGR0IC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhwbGF5ZXIueCAtIHBsYXllci5tb3ZlcG9pbnQueCkgPCA1ICYmIE1hdGguYWJzKHBsYXllci55IC0gcGxheWVyLm1vdmVwb2ludC55KSA8IDUpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlcG9pbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnBzID0gMTAwMCAvIGR0O1xyXG4gICAgICAgIGRyYXcoY3R4LCBjYW52YXMsIHBsYXllciwgZnBzKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwbGF5ZXI6IFVuaXQsIGZwczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICBjdHguZmlsbFJlY3QocGxheWVyLngsIHBsYXllci55LCAyMCwgMjApO1xyXG5cclxuICAgIGlmIChwbGF5ZXIubW92ZXBvaW50KSB7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHBsYXllci5tb3ZlcG9pbnQueCwgcGxheWVyLm1vdmVwb2ludC55LCAxMCwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcclxuICAgIGN0eC5mb250ID0gXCIxLjJlbSBtb25vc3BhY2VcIlxyXG4gICAgY3R4LmZpbGxUZXh0KGBmcHM6ICR7TWF0aC5yb3VuZChmcHMpfWAsIDcsIDIwKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=