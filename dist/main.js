/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard {\n  constructor() {\n    this.attacks = [\"asdf\"];\n    this.ships = [];\n    this.board = this.initializeGameboard();\n  }\n  initializeGameboard() {\n    let arr = Array(10);\n    for (let i = 0; i < arr.length; i++) {\n      arr[i] = Array(10).fill(null);\n    }\n    return arr;\n  }\n  placeShip(start, end) {\n    if (Array.isArray(start) === false || Array.isArray(end) === false) {\n      return false;\n    }\n    let length = null;\n    if (start[0] === end[0]) {\n      length = Math.abs(start[1] - end[1]);\n      let iterated = iterateBetween(start[1], end[1]);\n      for (let i = 0; i <= length; i++) {\n        if (this.checkIllegalPlacement([start[0]], [iterated[i]])) {\n          return false;\n        }\n        this.board[start[0]][iterated[i]] = this.ships.length;\n      }\n    } else if (start[1] === end[1]) {\n      length = Math.abs(start[0] - end[0]);\n      let iterated = iterateBetween(start[0], end[0]);\n      for (let i = 0; i <= length; i++) {\n        if (this.checkIllegalPlacement([iterated[i]], [start[1]])) {\n          return false;\n        }\n        this.board[iterated[i]][start[1]] = this.ships.length;\n      }\n    } else {\n      return false;\n    }\n    this.ships.push(Ship(length + 1));\n  }\n  checkIllegalPlacement(x, y) {\n    /* returns true if illegal */\n    if (this.board[x][y] !== null) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  receiveAttack(x, y) {\n    if (this.staleAttack(x, y)) {\n      return false;\n    }\n    this.attacks.push(x, y);\n    if (this.board[x][y] !== null) {\n      this.ships[this.board[x][y]].hit();\n      return true;\n    }\n  }\n\n  staleAttack(x, y) {\n    /* return true if stale */\n    for (let i = 0; i < this.attacks.length; i++) {\n      if ((x, y === this.attacks[i])) {\n        return true;\n      }\n    }\n    return false;\n  }\n  areAllSunk() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (this.ships[i].isSunk() === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\nfunction iterateBetween(x, y) {\n  let iterated = [];\n  const step = x <= y ? 1 : -1; // Determine the step direction\n  for (let i = x; step > 0 ? i <= y : i >= y; i += step) {\n    iterated.push(i);\n  }\n  return iterated;\n}\nmodule.exports = Gameboard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzP2ZjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXR0YWNrcyA9IFtcImFzZGZcIl07XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmluaXRpYWxpemVHYW1lYm9hcmQoKTtcbiAgfVxuICBpbml0aWFsaXplR2FtZWJvYXJkKCkge1xuICAgIGxldCBhcnIgPSBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycltpXSA9IEFycmF5KDEwKS5maWxsKG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIHBsYWNlU2hpcChzdGFydCwgZW5kKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhcnQpID09PSBmYWxzZSB8fCBBcnJheS5pc0FycmF5KGVuZCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBsZW5ndGggPSBudWxsO1xuICAgIGlmIChzdGFydFswXSA9PT0gZW5kWzBdKSB7XG4gICAgICBsZW5ndGggPSBNYXRoLmFicyhzdGFydFsxXSAtIGVuZFsxXSk7XG4gICAgICBsZXQgaXRlcmF0ZWQgPSBpdGVyYXRlQmV0d2VlbihzdGFydFsxXSwgZW5kWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrSWxsZWdhbFBsYWNlbWVudChbc3RhcnRbMF1dLCBbaXRlcmF0ZWRbaV1dKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkW3N0YXJ0WzBdXVtpdGVyYXRlZFtpXV0gPSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXJ0WzFdID09PSBlbmRbMV0pIHtcbiAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHN0YXJ0WzBdIC0gZW5kWzBdKTtcbiAgICAgIGxldCBpdGVyYXRlZCA9IGl0ZXJhdGVCZXR3ZWVuKHN0YXJ0WzBdLCBlbmRbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbGxlZ2FsUGxhY2VtZW50KFtpdGVyYXRlZFtpXV0sIFtzdGFydFsxXV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmRbaXRlcmF0ZWRbaV1dW3N0YXJ0WzFdXSA9IHRoaXMuc2hpcHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChTaGlwKGxlbmd0aCArIDEpKTtcbiAgfVxuICBjaGVja0lsbGVnYWxQbGFjZW1lbnQoeCwgeSkge1xuICAgIC8qIHJldHVybnMgdHJ1ZSBpZiBpbGxlZ2FsICovXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLnN0YWxlQXR0YWNrKHgsIHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNrcy5wdXNoKHgsIHkpO1xuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoaXBzW3RoaXMuYm9hcmRbeF1beV1dLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhbGVBdHRhY2soeCwgeSkge1xuICAgIC8qIHJldHVybiB0cnVlIGlmIHN0YWxlICovXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF0dGFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICgoeCwgeSA9PT0gdGhpcy5hdHRhY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGFyZUFsbFN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpdGVyYXRlQmV0d2Vlbih4LCB5KSB7XG4gIGxldCBpdGVyYXRlZCA9IFtdO1xuICBjb25zdCBzdGVwID0geCA8PSB5ID8gMSA6IC0xOyAvLyBEZXRlcm1pbmUgdGhlIHN0ZXAgZGlyZWN0aW9uXG4gIGZvciAobGV0IGkgPSB4OyBzdGVwID4gMCA/IGkgPD0geSA6IGkgPj0geTsgaSArPSBzdGVwKSB7XG4gICAgaXRlcmF0ZWQucHVzaChpKTtcbiAgfVxuICByZXR1cm4gaXRlcmF0ZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nlet player = Player(true);\nlet bot = Player(false);\n\nconst main = document.createElement(\"div\");\nconst left = document.createElement(\"div\");\nleft.textContent = \"left\";\nconst right = document.createElement(\"div\");\nright.textContent = \"right\";\nmain.append(left, right);\ndocument.body.append(main);\nmain.textContent = \"main innit\";\n\nfunction renderField() {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLGlDQUFVOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuXG5sZXQgcGxheWVyID0gUGxheWVyKHRydWUpO1xubGV0IGJvdCA9IFBsYXllcihmYWxzZSk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWZ0LnRleHRDb250ZW50ID0gXCJsZWZ0XCI7XG5jb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5yaWdodC50ZXh0Q29udGVudCA9IFwicmlnaHRcIjtcbm1haW4uYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xubWFpbi50ZXh0Q29udGVudCA9IFwibWFpbiBpbm5pdFwiO1xuXG5mdW5jdGlvbiByZW5kZXJGaWVsZCgpIHt9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction Player(human = false) {\n  const isHuman = human;\n  const gameboard = new Gameboard();\n  return { isHuman, gameboard };\n}\n\nmodule.exports = Gameboard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzP2E4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xuZnVuY3Rpb24gUGxheWVyKGh1bWFuID0gZmFsc2UpIHtcbiAgY29uc3QgaXNIdW1hbiA9IGh1bWFuO1xuICBjb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIHJldHVybiB7IGlzSHVtYW4sIGdhbWVib2FyZCB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const Ship = (len) => {\n  if (typeof len != \"number\" || len < 1 || len > 4) {\n    throw new Error(\"Invalid length value\");\n  }\n  let length = len;\n  let hits = 0;\n  const getHits = () => {\n    return hits;\n  };\n  const getLength = () => {\n    return length;\n  };\n  const hit = () => {\n    hits++;\n  };\n  const isSunk = () => {\n    if (hits >= length) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n  return { getLength, getHits, hit, isSunk };\n};\n\nmodule.exports = Ship;\n\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzP2QwMzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChsZW4pID0+IHtcbiAgaWYgKHR5cGVvZiBsZW4gIT0gXCJudW1iZXJcIiB8fCBsZW4gPCAxIHx8IGxlbiA+IDQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxlbmd0aCB2YWx1ZVwiKTtcbiAgfVxuICBsZXQgbGVuZ3RoID0gbGVuO1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH07XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgZ2V0TGVuZ3RoLCBnZXRIaXRzLCBoaXQsIGlzU3VuayB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;