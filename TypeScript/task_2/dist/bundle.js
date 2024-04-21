/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector),
/* harmony export */   teachClass: () => (/* binding */ teachClass)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.WorkForHome = function () {
        return "Director: Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Director: Taking a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Director: Working on director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.WorkForHome = function () {
        return "Teacher: Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Teacher: Taking a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Teacher: Working on teacher tasks";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNTyxJQUFNLFFBQVE7SUFBRztJQVV4QixDQUFDO0lBVEEsOEJBQVcsR0FBWDtRQUNDLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLGlDQUFpQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLHFDQUFxQyxDQUFDO0lBQzlDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUVNLElBQU0sT0FBTztJQUFHO0lBVXZCLENBQUM7SUFUQSw2QkFBVyxHQUFYO1FBQ0MsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNDLE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNDLE9BQU8sbUNBQW1DLENBQUM7SUFDNUMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDckQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxRQUE4QztJQUN4RSxPQUFRLFFBQThCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ3RFLENBQUM7QUFFSSxTQUFTLFdBQVcsQ0FBQyxRQUE4QztJQUN6RSxJQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdEMsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7QUFDQSxDQUFDO0FBSU0sU0FBUyxVQUFVLENBQUMsVUFBbUI7SUFDL0MsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFLENBQUM7UUFDMUIsT0FBTyxlQUFlO0lBQ3hCLENBQUM7U0FBTSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUNwQyxPQUFPLGtCQUFrQjtJQUMzQixDQUFDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0V29ya0ZvckhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHRXb3JrRm9ySG9tZSgpOiBzdHJpbmc7XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RvciA9IGNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuXHRXb3JrRm9ySG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkRpcmVjdG9yOiBXb3JraW5nIGZyb20gaG9tZVwiO1xuXHR9XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiRGlyZWN0b3I6IFRha2luZyBhIGNvZmZlZSBicmVha1wiO1xuXHR9XG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiRGlyZWN0b3I6IFdvcmtpbmcgb24gZGlyZWN0b3IgdGFza3NcIjtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgVGVhY2hlciA9IGNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcblx0V29ya0ZvckhvbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJUZWFjaGVyOiBXb3JraW5nIGZyb20gaG9tZVwiO1xuXHR9XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiVGVhY2hlcjogVGFraW5nIGEgY29mZmVlIGJyZWFrXCI7XG5cdH1cblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIlRlYWNoZXI6IFdvcmtpbmcgb24gdGVhY2hlciB0YXNrc1wiO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9ySW50ZXJmYWNlIHwgVGVhY2hlckludGVyZmFjZSB7XG5cdGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcblx0XHRyZXR1cm4gbmV3IFRlYWNoZXIoKTtcblx0fVxuXHRyZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvckludGVyZmFjZSB8IFRlYWNoZXJJbnRlcmZhY2UpOiBlbXBsb3llZSBpcyBEaXJlY3RvckludGVyZmFjZSB7XG5cdHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3JJbnRlcmZhY2UpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvckludGVyZmFjZSB8IFRlYWNoZXJJbnRlcmZhY2UpOiBzdHJpbmcge1xuXHRpZihpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuXHQgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuXHR9IGVsc2Uge1xuXHQgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG5cdH1cbiAgfVxuXG4gIGV4cG9ydCB0eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6U3ViamVjdHMpOiBzdHJpbmcge1xuXHRpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XG5cdCAgcmV0dXJuICdUZWFjaGluZyBNYXRoJ1xuXHR9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09ICdIaXN0b3J5Jykge1xuXHQgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSdcblx0fVxuICB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=