!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=34)}({34:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(35);function i(e,t,o){return t>o?e>=o&&e<=t:e<=o&&e>=t}window.addEventListener("load",()=>{!function(){const e=document.getElementById("tsiege-canvas"),t=e.getContext("2d"),o=[{x:50,y:50,w:20,h:20,movepoint:void 0,speed:300},{x:400,y:400,w:20,h:20,movepoint:void 0,speed:300},{x:500,y:100,w:20,h:20,movepoint:void 0,speed:300}];let r=[],f=void 0;e.oncontextmenu=e=>e.preventDefault(),e.addEventListener("mouseup",e=>{0==e.button?f&&Math.abs((f.x1-f.x2)*(f.y1-f.y2))>25?r=o.filter(e=>i(e.x,f.x1,f.x2)&&i(e.y,f.y1,f.y2)):o.forEach(t=>{n.inBounds(t,e.offsetX,e.offsetY)&&(r=[t])}):2==e.button&&r&&r.forEach(t=>t.movepoint={x:e.offsetX,y:e.offsetY}),f=void 0}),e.addEventListener("mousedown",e=>{0==e.button&&(f={x1:e.offsetX,y1:e.offsetY,x2:e.offsetX,y2:e.offsetY})}),e.addEventListener("mousemove",e=>{0==e.button&&f&&(f.x2=e.offsetX,f.y2=e.offsetY)});let u=0,s=0;requestAnimationFrame((function i(a){const d=a-s;s=a,o.forEach(e=>{n.updateUnit(e,d)}),u=1e3/d,function(){const{width:n,height:i}=e;t.fillStyle="black",t.fillRect(0,0,n,i),o.forEach(e=>{t.fillStyle="red",t.fillRect(e.x-e.w/2,e.y-e.h/2,e.w,e.h),e.movepoint&&(t.strokeStyle="green",t.strokeRect(e.movepoint.x-5,e.movepoint.y-5,10,10))}),r&&(t.strokeStyle="white",r.forEach(e=>{t.strokeRect(e.x-e.w/2,e.y-e.h/2,e.w,e.h)}));if(f){t.strokeStyle="white";let e=Math.min(f.x1,f.x2),o=Math.min(f.y1,f.y2);t.strokeRect(e,o,Math.abs(f.x1-f.x2),Math.abs(f.y1-f.y2))}t.fillStyle="white",t.font="1em monospace",t.fillText("fps: "+Math.round(u),7,20)}(),requestAnimationFrame(i)}))}()})},35:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inBounds=t.updateUnit=void 0,t.updateUnit=function(e,t){if(e.movepoint){const o=Math.atan2(e.movepoint.y-e.y,e.movepoint.x-e.x);e.x=e.x+Math.cos(o)*e.speed*t/1e3,e.y=e.y+Math.sin(o)*e.speed*t/1e3,Math.abs(e.x-e.movepoint.x)<5&&Math.abs(e.y-e.movepoint.y)<5&&(e.movepoint=void 0)}},t.inBounds=function(e,t,o){return t>e.x-e.w/2&&t<e.x+e.w/2&&o>e.y-e.h/2&&o<e.y+e.h/2}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzaWVnZS9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy90c2llZ2UvdW5pdC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImJldHdlZW4iLCJ4IiwiYSIsImIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ1bml0cyIsInkiLCJ3IiwiaCIsIm1vdmVwb2ludCIsInVuZGVmaW5lZCIsInNwZWVkIiwic2VsZWN0ZWQiLCJzZWxlY3Rpb25Cb3giLCJvbmNvbnRleHRtZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiTWF0aCIsImFicyIsIngxIiwieDIiLCJ5MSIsInkyIiwiZmlsdGVyIiwidSIsImZvckVhY2giLCJ1bml0IiwiaW5Cb3VuZHMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZwcyIsIm9sZHRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJ0aW1lIiwiZHQiLCJ1cGRhdGVVbml0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsIm1pbiIsImZvbnQiLCJmaWxsVGV4dCIsInJvdW5kIiwiZHJhdyIsImluaXQiLCJhbmdsZSIsImF0YW4yIiwiY29zIiwic2luIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElB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S2hDLEVBQUlnQyxFQUFLaEMsRUFBSXVCLEtBQUtrQyxJQUFJRixHQUFTdkIsRUFBS2hCLE1BQVF5QixFQUFLLElBQ3REVCxFQUFLckIsRUFBSXFCLEVBQUtyQixFQUFJWSxLQUFLbUMsSUFBSUgsR0FBU3ZCLEVBQUtoQixNQUFReUIsRUFBSyxJQUVsRGxCLEtBQUtDLElBQUlRLEVBQUtoQyxFQUFJZ0MsRUFBS2xCLFVBQVVkLEdBQUssR0FBS3VCLEtBQUtDLElBQUlRLEVBQUtyQixFQUFJcUIsRUFBS2xCLFVBQVVILEdBQUssSUFDbkZxQixFQUFLbEIsZUFBWUMsS0FLdkIsb0JBQXlCaUIsRUFBWWhDLEVBQVdXLEdBQzlDLE9BQU9YLEVBQUlnQyxFQUFLaEMsRUFBSWdDLEVBQUtwQixFQUFJLEdBQUtaLEVBQUlnQyxFQUFLaEMsRUFBSWdDLEVBQUtwQixFQUFJLEdBQUtELEVBQUlxQixFQUFLckIsRUFBSXFCLEVBQUtuQixFQUFJLEdBQUtGLEVBQUlxQixFQUFLckIsRUFBSXFCLEVBQUtuQixFQUFJIiwiZmlsZSI6InRzaWVnZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzQpO1xuIiwiaW1wb3J0IHsgVW5pdCwgdXBkYXRlVW5pdCwgaW5Cb3VuZHMgfSBmcm9tIFwiLi91bml0XCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gIGluaXQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRzaWVnZS1jYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XHJcblxyXG4gIGNvbnN0IHVuaXRzOiBVbml0W10gPSBbXHJcbiAgICB7IHg6IDUwLCB5OiA1MCwgdzogMjAsIGg6IDIwLCBtb3ZlcG9pbnQ6IHVuZGVmaW5lZCwgc3BlZWQ6IDMwMCB9LFxyXG4gICAgeyB4OiA0MDAsIHk6IDQwMCwgdzogMjAsIGg6IDIwLCBtb3ZlcG9pbnQ6IHVuZGVmaW5lZCwgc3BlZWQ6IDMwMCB9LFxyXG4gICAgeyB4OiA1MDAsIHk6IDEwMCwgdzogMjAsIGg6IDIwLCBtb3ZlcG9pbnQ6IHVuZGVmaW5lZCwgc3BlZWQ6IDMwMCB9XHJcbiAgXTtcclxuXHJcbiAgbGV0IHNlbGVjdGVkOiBVbml0W10gPSBbXTtcclxuICBsZXQgc2VsZWN0aW9uQm94OiB7IHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBlID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZSA9PiB7XHJcbiAgICBpZiAoZS5idXR0b24gPT0gMCkgeyAvLyBsZWZ0IGNsaWNrXHJcbiAgICAgIGlmIChzZWxlY3Rpb25Cb3ggJiYgTWF0aC5hYnMoKHNlbGVjdGlvbkJveC54MSAtIHNlbGVjdGlvbkJveC54MikgKiAoc2VsZWN0aW9uQm94LnkxIC0gc2VsZWN0aW9uQm94LnkyKSkgPiAyNSkge1xyXG4gICAgICAgIHNlbGVjdGVkID0gdW5pdHMuZmlsdGVyKHUgPT4gYmV0d2Vlbih1LngsIHNlbGVjdGlvbkJveCEueDEsIHNlbGVjdGlvbkJveCEueDIpICYmIGJldHdlZW4odS55LCBzZWxlY3Rpb25Cb3ghLnkxLCBzZWxlY3Rpb25Cb3ghLnkyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcclxuICAgICAgICAgIGlmIChpbkJvdW5kcyh1bml0LCBlLm9mZnNldFgsIGUub2Zmc2V0WSkpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBbdW5pdF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gMikgeyAvLyByaWdodCBjbGlja1xyXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICBzZWxlY3RlZC5mb3JFYWNoKHMgPT4gcy5tb3ZlcG9pbnQgPSB7IHg6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Rpb25Cb3ggPSB1bmRlZmluZWQ7XHJcbiAgfSk7XHJcblxyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGUgPT4ge1xyXG4gICAgaWYgKGUuYnV0dG9uID09IDApIHtcclxuICAgICAgc2VsZWN0aW9uQm94ID0geyB4MTogZS5vZmZzZXRYLCB5MTogZS5vZmZzZXRZLCB4MjogZS5vZmZzZXRYLCB5MjogZS5vZmZzZXRZIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xyXG4gICAgaWYgKGUuYnV0dG9uID09IDAgJiYgc2VsZWN0aW9uQm94KSB7XHJcbiAgICAgIHNlbGVjdGlvbkJveC54MiA9IGUub2Zmc2V0WDtcclxuICAgICAgc2VsZWN0aW9uQm94LnkyID0gZS5vZmZzZXRZO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBsZXQgZnBzID0gMDtcclxuICBsZXQgb2xkdGltZSA9IDA7XHJcbiAgZnVuY3Rpb24gdXBkYXRlKHRpbWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgZHQgPSB0aW1lIC0gb2xkdGltZTtcclxuICAgIG9sZHRpbWUgPSB0aW1lO1xyXG5cclxuICAgIHVuaXRzLmZvckVhY2godW5pdCA9PiB7XHJcbiAgICAgIHVwZGF0ZVVuaXQodW5pdCwgZHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnBzID0gMTAwMCAvIGR0O1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIHVuaXRzLmZvckVhY2godW5pdCA9PiB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICBjdHguZmlsbFJlY3QodW5pdC54IC0gdW5pdC53IC8gMiwgdW5pdC55IC0gdW5pdC5oIC8gMiwgdW5pdC53LCB1bml0LmgpO1xyXG4gICAgICBpZiAodW5pdC5tb3ZlcG9pbnQpIHtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodW5pdC5tb3ZlcG9pbnQueCAtIDUsIHVuaXQubW92ZXBvaW50LnkgLSA1LCAxMCwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBzZWxlY3RlZC5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHMueCAtIHMudyAvIDIsIHMueSAtIHMuaCAvIDIsIHMudywgcy5oKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VsZWN0aW9uQm94KSB7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgbGV0IHggPSBNYXRoLm1pbihzZWxlY3Rpb25Cb3gueDEsIHNlbGVjdGlvbkJveC54Mik7XHJcbiAgICAgIGxldCB5ID0gTWF0aC5taW4oc2VsZWN0aW9uQm94LnkxLCBzZWxlY3Rpb25Cb3gueTIpO1xyXG4gICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCBNYXRoLmFicyhzZWxlY3Rpb25Cb3gueDEgLSBzZWxlY3Rpb25Cb3gueDIpLCBNYXRoLmFicyhzZWxlY3Rpb25Cb3gueTEgLSBzZWxlY3Rpb25Cb3gueTIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXHJcbiAgICBjdHguZm9udCA9IFwiMWVtIG1vbm9zcGFjZVwiXHJcbiAgICBjdHguZmlsbFRleHQoYGZwczogJHtNYXRoLnJvdW5kKGZwcyl9YCwgNywgMjApO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJldHdlZW4oeDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gIGlmIChhID4gYikge1xyXG4gICAgcmV0dXJuIHggPj0gYiAmJiB4IDw9IGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB4IDw9IGIgJiYgeCA+PSBhO1xyXG4gIH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgVW5pdCB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICB3OiBudW1iZXI7XHJcbiAgaDogbnVtYmVyO1xyXG4gIG1vdmVwb2ludDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHwgdW5kZWZpbmVkO1xyXG4gIHNwZWVkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVbml0KHVuaXQ6IFVuaXQsIGR0OiBudW1iZXIpIHtcclxuICBpZiAodW5pdC5tb3ZlcG9pbnQpIHtcclxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih1bml0Lm1vdmVwb2ludC55IC0gdW5pdC55LCB1bml0Lm1vdmVwb2ludC54IC0gdW5pdC54KTtcclxuICAgIHVuaXQueCA9IHVuaXQueCArIE1hdGguY29zKGFuZ2xlKSAqIHVuaXQuc3BlZWQgKiBkdCAvIDEwMDA7XHJcbiAgICB1bml0LnkgPSB1bml0LnkgKyBNYXRoLnNpbihhbmdsZSkgKiB1bml0LnNwZWVkICogZHQgLyAxMDAwO1xyXG5cclxuICAgIGlmIChNYXRoLmFicyh1bml0LnggLSB1bml0Lm1vdmVwb2ludC54KSA8IDUgJiYgTWF0aC5hYnModW5pdC55IC0gdW5pdC5tb3ZlcG9pbnQueSkgPCA1KSB7XHJcbiAgICAgIHVuaXQubW92ZXBvaW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluQm91bmRzKHVuaXQ6IFVuaXQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHggPiB1bml0LnggLSB1bml0LncgLyAyICYmIHggPCB1bml0LnggKyB1bml0LncgLyAyICYmIHkgPiB1bml0LnkgLSB1bml0LmggLyAyICYmIHkgPCB1bml0LnkgKyB1bml0LmggLyAyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==