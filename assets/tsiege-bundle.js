!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(35);window.addEventListener("load",()=>{!function(){const e=document.getElementById("tsiege-canvas"),t=e.getContext("2d"),n=[{x:50,y:50,w:20,h:20,movepoint:void 0,speed:300},{x:400,y:400,w:20,h:20,movepoint:void 0,speed:300},{x:500,y:100,w:20,h:20,movepoint:void 0,speed:300}];let i=void 0;e.oncontextmenu=e=>e.preventDefault(),e.addEventListener("mouseup",e=>{0==e.button?n.forEach(t=>{o.inBounds(t,e.offsetX,e.offsetY)&&(i=t)}):2==e.button&&i&&(i.movepoint={x:e.offsetX,y:e.offsetY})});let r=0,u=0;requestAnimationFrame((function f(l){const s=l-u;u=l,n.forEach(e=>{o.updateUnit(e,s)}),r=1e3/s,function(){const{width:o,height:u}=e;t.fillStyle="black",t.fillRect(0,0,o,u),n.forEach(e=>{t.fillStyle="red",t.fillRect(e.x-e.w/2,e.y-e.h/2,e.w,e.h),e.movepoint&&(t.strokeStyle="green",t.strokeRect(e.movepoint.x-5,e.movepoint.y-5,10,10))}),i&&(t.strokeStyle="white",t.strokeRect(i.x-i.w/2,i.y-i.h/2,i.w,i.h));t.fillStyle="white",t.font="1.2em monospace",t.fillText("fps: "+Math.round(r),7,20)}(),requestAnimationFrame(f)}))}()})},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inBounds=t.updateUnit=void 0,t.updateUnit=function(e,t){if(e.movepoint){const n=Math.atan2(e.movepoint.y-e.y,e.movepoint.x-e.x);e.x=e.x+Math.cos(n)*e.speed*t/1e3,e.y=e.y+Math.sin(n)*e.speed*t/1e3,Math.abs(e.x-e.movepoint.x)<5&&Math.abs(e.y-e.movepoint.y)<5&&(e.movepoint=void 0)}},t.inBounds=function(e,t,n){return t>e.x-e.w/2&&t<e.x+e.w/2&&n>e.y-e.h/2&&n<e.y+e.h/2}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzaWVnZS9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy90c2llZ2UvdW5pdC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInVuaXRzIiwieCIsInkiLCJ3IiwiaCIsIm1vdmVwb2ludCIsInVuZGVmaW5lZCIsInNwZWVkIiwic2VsZWN0ZWQiLCJvbmNvbnRleHRtZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiZm9yRWFjaCIsInVuaXQiLCJpbkJvdW5kcyIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZnBzIiwib2xkdGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInRpbWUiLCJkdCIsInVwZGF0ZVVuaXQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwiTWF0aCIsInJvdW5kIiwiZHJhdyIsImluaXQiLCJhbmdsZSIsImF0YW4y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LEdBQVN2QixFQUFLUCxNQUFRZ0IsRUFBSyxJQUN0RFQsRUFBS1osRUFBSVksRUFBS1osRUFBSStCLEtBQUtPLElBQUlILEdBQVN2QixFQUFLUCxNQUFRZ0IsRUFBSyxJQUVsRFUsS0FBS1EsSUFBSTNCLEVBQUtiLEVBQUlhLEVBQUtULFVBQVVKLEdBQUssR0FBS2dDLEtBQUtRLElBQUkzQixFQUFLWixFQUFJWSxFQUFLVCxVQUFVSCxHQUFLLElBQ2pGWSxFQUFLVCxlQUFZQyxLQUs3QixvQkFBeUJRLEVBQVliLEVBQVdDLEdBQzVDLE9BQU9ELEVBQUlhLEVBQUtiLEVBQUlhLEVBQUtYLEVBQUksR0FBS0YsRUFBSWEsRUFBS2IsRUFBSWEsRUFBS1gsRUFBSSxHQUFLRCxFQUFJWSxFQUFLWixFQUFJWSxFQUFLVixFQUFJLEdBQUtGLEVBQUlZLEVBQUtaLEVBQUlZLEVBQUtWLEVBQUkiLCJmaWxlIjoidHNpZWdlLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNCk7XG4iLCJpbXBvcnQgeyBVbml0LCB1cGRhdGVVbml0LCBpbkJvdW5kcyB9IGZyb20gXCIuL3VuaXRcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzaWVnZS1jYW52YXNcIik7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcclxuXHJcbiAgICBjb25zdCB1bml0czogVW5pdFtdID0gW1xyXG4gICAgICAgIHsgeDogNTAsIHk6IDUwLCB3OiAyMCwgaDogMjAsIG1vdmVwb2ludDogdW5kZWZpbmVkLCBzcGVlZDogMzAwIH0sXHJcbiAgICAgICAgeyB4OiA0MDAsIHk6IDQwMCwgdzogMjAsIGg6IDIwLCBtb3ZlcG9pbnQ6IHVuZGVmaW5lZCwgc3BlZWQ6IDMwMCB9LFxyXG4gICAgICAgIHsgeDogNTAwLCB5OiAxMDAsIHc6IDIwLCBoOiAyMCwgbW92ZXBvaW50OiB1bmRlZmluZWQsIHNwZWVkOiAzMDAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWQ6IFVuaXQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09IDApIHtcclxuICAgICAgICAgICAgdW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbkJvdW5kcyh1bml0LCBlLm9mZnNldFgsIGUub2Zmc2V0WSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHVuaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLm1vdmVwb2ludCA9IHsgeDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFkgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBsZXQgZnBzID0gMDtcclxuICAgIGxldCBvbGR0aW1lID0gMDtcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkdCA9IHRpbWUgLSBvbGR0aW1lO1xyXG4gICAgICAgIG9sZHRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICB1bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVVbml0KHVuaXQsIGR0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnBzID0gMTAwMCAvIGR0O1xyXG4gICAgICAgIGRyYXcoKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB1bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHVuaXQueCAtIHVuaXQudyAvIDIsIHVuaXQueSAtIHVuaXQuaCAvIDIsIHVuaXQudywgdW5pdC5oKTtcclxuICAgICAgICAgICAgaWYgKHVuaXQubW92ZXBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCh1bml0Lm1vdmVwb2ludC54IC0gNSwgdW5pdC5tb3ZlcG9pbnQueSAtIDUsIDEwLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3Qoc2VsZWN0ZWQueCAtIHNlbGVjdGVkLncgLyAyLCBzZWxlY3RlZC55IC0gc2VsZWN0ZWQuaCAvIDIsIHNlbGVjdGVkLncsIHNlbGVjdGVkLmgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxyXG4gICAgICAgIGN0eC5mb250ID0gXCIxLjJlbSBtb25vc3BhY2VcIlxyXG4gICAgICAgIGN0eC5maWxsVGV4dChgZnBzOiAke01hdGgucm91bmQoZnBzKX1gLCA3LCAyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFVuaXQge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgaDogbnVtYmVyO1xyXG4gICAgbW92ZXBvaW50OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gfCB1bmRlZmluZWQ7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVW5pdCh1bml0OiBVbml0LCBkdDogbnVtYmVyKSB7XHJcbiAgICBpZiAodW5pdC5tb3ZlcG9pbnQpIHtcclxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIodW5pdC5tb3ZlcG9pbnQueSAtIHVuaXQueSwgdW5pdC5tb3ZlcG9pbnQueCAtIHVuaXQueCk7XHJcbiAgICAgICAgdW5pdC54ID0gdW5pdC54ICsgTWF0aC5jb3MoYW5nbGUpICogdW5pdC5zcGVlZCAqIGR0IC8gMTAwMDtcclxuICAgICAgICB1bml0LnkgPSB1bml0LnkgKyBNYXRoLnNpbihhbmdsZSkgKiB1bml0LnNwZWVkICogZHQgLyAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnModW5pdC54IC0gdW5pdC5tb3ZlcG9pbnQueCkgPCA1ICYmIE1hdGguYWJzKHVuaXQueSAtIHVuaXQubW92ZXBvaW50LnkpIDwgNSkge1xyXG4gICAgICAgICAgICB1bml0Lm1vdmVwb2ludCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbkJvdW5kcyh1bml0OiBVbml0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHggPiB1bml0LnggLSB1bml0LncgLyAyICYmIHggPCB1bml0LnggKyB1bml0LncgLyAyICYmIHkgPiB1bml0LnkgLSB1bml0LmggLyAyICYmIHkgPCB1bml0LnkgKyB1bml0LmggLyAyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==