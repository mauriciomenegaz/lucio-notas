(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["html-asset/0--index"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");

console.log("hello");

window.onButton = function () {
  console.log("button"); //create a synth and connect it to the main output (your speakers)

  var synth = new tone__WEBPACK_IMPORTED_MODULE_0__["Synth"]().toDestination(); //play a middle 'C' for the duration of an 8th note

  synth.triggerAttackRelease("C4", "8n");
};

/***/ })

}]);
//# sourceMappingURL=0--index.chunk.js.map