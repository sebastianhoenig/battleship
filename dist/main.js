/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardFactory": () => (/* binding */ gameboardFactory)
/* harmony export */ });
const gameboardFactory = (size) => {
  const numRows = size;
  const numCols = size;
  const board = initializeBoard(numRows, numCols);

  function initializeBoard(numRows, numCols) {
    let myArray = [];
    for (let i = 0; i < numRows; i++) {
      let myRow = [];
      for (let j = 0; j < numCols; j++) {
        myRow.push(0);
      }
      myArray.push(myRow);
    }
    return myArray;
  }

  const checkPlacement = (ship, row, col, horizontal) => {
    let length = ship.getLength();
    if (horizontal) {
      console.log("HEY");
      let currRow = board[row];
      for (let i = 0; i < length; i++) {
        if (currRow[col + i] === 1 || currRow[col + i] === undefined) {
          return false;
        }
      }
    } else {
      let currCol = board.map((x) => x[col]);
      for (let i = 0; i < length; i++) {
        if (currCol[row + i] === 1 || currCol[row + i] === undefined) {
          return false;
        }
      }
    }
    return true;
  };

  const placeShip = (ship, row, col, horizontal) => {
    let length = ship.getLength();
    if (horizontal) {
      let currRow = board[row];
      for (let i = 0; i < length; i++) {
        currRow[col + i] = 1;
      }
    } else {
      for (let k = 0; k < length; k++) {
        board[row + k][col] = 1;
      }
    }
  };

  return { board, checkPlacement, placeShip };
};




/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (len) => {
  const length = len;
  let hits = 0;
  let fields = Array(len).fill(0);
  let sunk = false;

  const hit = (num) => {
    if (!fields[num]) {
      fields[num] = 1;
      hits += 1;
    }
  };

  const checkSunk = () => {
    if (hits == length) {
      sunk = true;
    }
  };

  const isSunk = () => {
    checkSunk();
    return sunk;
  };

  const getLength = () => {
    return length;
  };

  const getFields = () => {
    return fields;
  };

  return { isSunk, hit, getFields, getLength };
};




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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ship */ "./src/scripts/ship.js");
/* harmony import */ var _scripts_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/gameboard */ "./src/scripts/gameboard.js");



let ship = (0,_scripts_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(4);
let myBoard = (0,_scripts_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboardFactory)(10);
if (myBoard.checkPlacement(ship, 5, 8, false)) {
  myBoard.placeShip(ship, 5, 8, false);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQzRCOzs7Ozs7Ozs7Ozs7Ozs7QUN2RDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUN1Qjs7Ozs7OztVQ25DdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDVTtBQUN2RDtBQUNBLFdBQVcsMERBQVc7QUFDdEIsY0FBYyxvRUFBZ0I7QUFDOUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKHNpemUpID0+IHtcclxuICBjb25zdCBudW1Sb3dzID0gc2l6ZTtcclxuICBjb25zdCBudW1Db2xzID0gc2l6ZTtcclxuICBjb25zdCBib2FyZCA9IGluaXRpYWxpemVCb2FyZChudW1Sb3dzLCBudW1Db2xzKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJvYXJkKG51bVJvd3MsIG51bUNvbHMpIHtcclxuICAgIGxldCBteUFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xyXG4gICAgICBsZXQgbXlSb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Db2xzOyBqKyspIHtcclxuICAgICAgICBteVJvdy5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgICAgIG15QXJyYXkucHVzaChteVJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXlBcnJheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrUGxhY2VtZW50ID0gKHNoaXAsIHJvdywgY29sLCBob3Jpem9udGFsKSA9PiB7XHJcbiAgICBsZXQgbGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcclxuICAgIGlmIChob3Jpem9udGFsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSEVZXCIpO1xyXG4gICAgICBsZXQgY3VyclJvdyA9IGJvYXJkW3Jvd107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY3VyclJvd1tjb2wgKyBpXSA9PT0gMSB8fCBjdXJyUm93W2NvbCArIGldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjdXJyQ29sID0gYm9hcmQubWFwKCh4KSA9PiB4W2NvbF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJDb2xbcm93ICsgaV0gPT09IDEgfHwgY3VyckNvbFtyb3cgKyBpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgcm93LCBjb2wsIGhvcml6b250YWwpID0+IHtcclxuICAgIGxldCBsZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xyXG4gICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgbGV0IGN1cnJSb3cgPSBib2FyZFtyb3ddO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY3VyclJvd1tjb2wgKyBpXSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBib2FyZFtyb3cgKyBrXVtjb2xdID0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGJvYXJkLCBjaGVja1BsYWNlbWVudCwgcGxhY2VTaGlwIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBnYW1lYm9hcmRGYWN0b3J5IH07XHJcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbikgPT4ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGxlbjtcclxuICBsZXQgaGl0cyA9IDA7XHJcbiAgbGV0IGZpZWxkcyA9IEFycmF5KGxlbikuZmlsbCgwKTtcclxuICBsZXQgc3VuayA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XHJcbiAgICBpZiAoIWZpZWxkc1tudW1dKSB7XHJcbiAgICAgIGZpZWxkc1tudW1dID0gMTtcclxuICAgICAgaGl0cyArPSAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrU3VuayA9ICgpID0+IHtcclxuICAgIGlmIChoaXRzID09IGxlbmd0aCkge1xyXG4gICAgICBzdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XHJcbiAgICBjaGVja1N1bmsoKTtcclxuICAgIHJldHVybiBzdW5rO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RmllbGRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZpZWxkcztcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBpc1N1bmssIGhpdCwgZ2V0RmllbGRzLCBnZXRMZW5ndGggfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNoaXBGYWN0b3J5IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9zY3JpcHRzL3NoaXBcIjtcclxuaW1wb3J0IHsgZ2FtZWJvYXJkRmFjdG9yeSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZWJvYXJkXCI7XHJcblxyXG5sZXQgc2hpcCA9IHNoaXBGYWN0b3J5KDQpO1xyXG5sZXQgbXlCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoMTApO1xyXG5pZiAobXlCb2FyZC5jaGVja1BsYWNlbWVudChzaGlwLCA1LCA4LCBmYWxzZSkpIHtcclxuICBteUJvYXJkLnBsYWNlU2hpcChzaGlwLCA1LCA4LCBmYWxzZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9