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
/* harmony export */   StudentClass: () => (/* binding */ StudentClass)
/* harmony export */ });
// 2. Object
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    // Constructor
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Methods
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDS0EsWUFBWTtBQUNaLElBQU0sUUFBUSxHQUFZO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBY3RCLElBQU0sU0FBUyxHQUFjO0lBQzlCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNqQixDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQWV2QixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUM3RCxPQUFPLFVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQVNGO0lBS0YsY0FBYztJQUNiLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNFLFVBQVU7SUFDVixxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vIDEuIEJhc2ljIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuXHRyZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcblx0cmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcblx0ZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcblx0eWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG5cdGxvY2F0aW9uOiBzdHJpbmc7XG5cdFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG4vLyAyLiBPYmplY3RcbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuXHRmaXJzdE5hbWU6ICdKb2huJyxcblx0ZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG5cdGxhc3ROYW1lOiAnRG9lJyxcblx0bG9jYXRpb246ICdMb25kb24nLFxuXHRjb250cmFjdDogZmFsc2UsXG4gIH07XG5cbiAgY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG4vLyBzaG91bGQgcHJpbnRcbi8vIE9iamVjdFxuLy8gY29udHJhY3Q6IGZhbHNlXG4vLyBmaXJzdE5hbWU6IFwiSm9oblwiXG4vLyBmdWxsVGltZUVtcGxveWVlOiBmYWxzZVxuLy8gbGFzdE5hbWU6IFwiRG9lXCJcbi8vIGxvY2F0aW9uOiBcIkxvbmRvblwiXG5cbiAgaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuICB9XG5cbiAgY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG5cdGZpcnN0TmFtZTogJ0pvaG4nLFxuXHRsYXN0TmFtZTogJ0RvZScsXG5cdGxvY2F0aW9uOiAnTG9uZG9uJyxcblx0ZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcblx0bnVtYmVyT2ZSZXBvcnRzOiAxNyxcbiAgfTtcbiAgY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuLy8gc2hvdWxkIHByaW50XG4vLyBPYmplY3Rcbi8vIGZpcnN0TmFtZTogXCJKb2huXCJcbi8vIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWVcbi8vIGxhc3ROYW1lOiBcIkRvZVwiXG4vLyBsb2NhdGlvbjogXCJMb25kb25cIlxuLy8gbnVtYmVyT2ZSZXBvcnRzOiAxN1xuXG4gLy8gdGFzayAzXG5leHBvcnQgaW50ZXJmYWNlIFByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIH1cblxuICBjb25zdCBwcmludFRlYWNoZXI6IFByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IHtcbiAgICByZXR1cm4gYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gO1xuICB9O1xuXG5cbiAgLy8gdGFzayA0XG4gIC8vIEludGVyZmFjZSBmb3IgdGhlIFN0dWRlbnRDbGFzc1xuICBleHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnQge1xuICAgIC8vIFByb3BlcnRpZXNcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4vLyBDb25zdHJ1Y3RvclxuXHRjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0fVxuICAgIC8vIE1ldGhvZHNcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cbiAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9