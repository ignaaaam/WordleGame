/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/3-letter-words.js":
/*!****************************************!*\
  !*** ./resources/js/3-letter-words.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "threeWords": () => (/* binding */ threeWords)
/* harmony export */ });
var threeWords = ["Ace", "Aid", "Aim", "Air", "Ale", "Arm", "Art", "Awl", "Eel", "Ear", "Era", "Ice", "Ire", "Ilk", "Oar", "Oak", "Oat", "Oil", "Ore", "Owl", "Urn", "Web", "Cab", "Dab", "Jab", "Lab", "Tab", "Dad", "Fad", "Lad", "Mad", "Bag", "Gag", "Hag", "Lag", "Mag", "Rag", "Tag", "Pal", "Cam", "Dam", "Fam", "Ham", "Jam", "Ram", "Ban", "Can", "Fan", "Man", "Pan", "Tan", "Bap", "Cap", "Lap", "Pap", "Rap", "Sap", "Tap", "Yap", "Bar", "Car", "Jar", "Tar", "War", "Bat", "Cat", "Hat", "Mat", "Pat", "Tat", "Rat", "Vat", "Caw", "Jaw", "Law", "Maw", "Paw", "Bay", "Cay", "Day", "Hay", "Ray", "Pay", "Way", "Max", "Sax", "Tax", "Pea", "Sea", "Tea", "Bed", "Med", "Leg", "Peg", "Bee", "Lee", "Tee", "Gem", "Bet", "Jet", "Net", "Pet", "Set", "Den", "Hen", "Men", "Pen", "Ten", "Yen", "Dew", "Mew", "Pew", "Bib", "Fib", "Jib", "Rib", "Sib", "Bid", "Kid", "Lid", "Vid", "Tie", "Lie", "Pie", "Fig", "Jig", "Pig", "Rig", "Wig", "Dim", "Bin", "Din", "Fin", "Gin", "Pin", "Sin", "Tin", "Win", "Yin", "Dip", "Lip", "Pip", "Sip", "Tip", "Git", "Hit", "Kit", "Pit", "Wit", "Bod", "Cod", "God", "Mod", "Pod", "Rod", "Doe", "Foe", "Hoe", "Roe", "Toe", "Bog", "Cog", "Dog", "Fog", "Hog", "Jog", "Log", "Poi", "Con", "Son", "Ton", "Zoo", "Cop", "Hop", "Mop", "Pop", "Top", "Bot", "Cot", "Dot", "Lot", "Pot", "Tot", "Bow", "Cow", "Sow", "Row", "Box", "Lox", "Pox", "Boy", "Soy", "Toy", "Cub", "Nub", "Pub", "Sub", "Tub", "Bug", "Hug", "Jug", "Mug", "Rug", "Tug", "Bum", "Gum", "Hum", "Rum", "Tum", "Bun", "Gun", "Pun", "Run", "Sun", "Cup", "Pup", "Cut", "Gut", "Hut", "Nut", "Rut", "Egg", "Ego", "Elf", "Elm", "Emu", "End", "Era", "Eve", "Eye", "Ink", "Inn", "Ion", "Ivy", "Lye", "Dye", "Rye", "Pus", "Gym", "Her", "His", "Him", "Our", "You", "She", "Add", "Ail", "Are", "Eat", "Err", "Oil", "Use", "Nab", "Jab", "Bag", "Lag", "Nag", "Rag", "Sag", "Tag", "Wag", "Jam", "Ram", "Ran", "Tan", "Cap", "Lap", "Nap", "Rap", "Sap", "Tap", "Yap", "Mar", "Has", "Was", "Pat", "Sat", "Lay", "Pay", "Say", "Max", "Tax", "Fed", "See", "Get", "Let", "Net", "Met", "Pet", "Set", "Wet", "Mew", "Sew", "Lie", "Tie", "Bog", "Jog", "Boo", "Coo", "Moo", "Bop", "Hop", "Lop", "Mop", "Pop", "Top", "Sop", "Bow", "Mow", "Row", "Tow", "Dub", "Rub", "Dug", "Lug", "Tug", "Hum", "Sup", "Buy", "Got", "Jot", "Rot", "Nod", "Hem", "Led", "Wed", "Fib", "Jib", "Rib", "Did", "Dig", "Jig", "Rig", "Dip", "Nip", "Sip", "Rip", "Zip", "Gin", "Win", "Bit", "Hit", "Sit", "Won", "Pry", "Try", "Cry", "All", "Fab", "Bad", "Had", "Mad", "Rad", "Tad", "Far", "Fat", "Raw", "Lax", "Max", "Gay", "Big", "Dim", "Fit", "Red", "Wet", "Old", "New", "Hot", "Coy", "Fun", "Ill", "Odd", "Shy", "Dry", "Wry"];

/***/ }),

/***/ "./resources/js/Tile.js":
/*!******************************!*\
  !*** ./resources/js/Tile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile = /*#__PURE__*/function () {
  function Tile(position) {
    _classCallCheck(this, Tile);

    _defineProperty(this, "letter", "");

    _defineProperty(this, "status", "");

    this.position = position;
  }

  _createClass(Tile, [{
    key: "fill",
    value: function fill(key) {
      this.letter = key.toLowerCase();
    }
  }, {
    key: "empty",
    value: function empty() {
      this.letter = "";
    }
  }], [{
    key: "updateStatusesForRow",
    value: function updateStatusesForRow(row, theWord) {
      theWord = theWord.split(""); // check for correct letters...

      var _iterator = _createForOfIteratorHelper(row),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile = _step.value;

          if (theWord[tile.position] === tile.letter) {
            tile.status = "correct";
            theWord[tile.position] = null;
          }
        } // check for present letters...

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(row.filter(function (tile) {
        return !tile.status;
      })),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _tile = _step2.value;

          if (theWord.includes(_tile.letter)) {
            _tile.status = "present";
            theWord[theWord.indexOf(_tile.letter)] = null;
          }
        } // anything that remains is absent...

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(row.filter(function (tile) {
        return !tile.status;
      })),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _tile2 = _step3.value;
          _tile2.status = "absent";
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./resources/js/game.js");

document.addEventListener('alpine:init', function () {
  Alpine.data('game', function () {
    return _game__WEBPACK_IMPORTED_MODULE_0__["default"];
  });
});

/***/ }),

/***/ "./resources/js/game.js":
/*!******************************!*\
  !*** ./resources/js/game.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./resources/js/Tile.js");
/* harmony import */ var _3_letter_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3-letter-words */ "./resources/js/3-letter-words.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // guessesAllowed: Math.floor(Math.random() * 4) + 2,
  guessesAllowed: 5,
  theWord: _3_letter_words__WEBPACK_IMPORTED_MODULE_1__.threeWords[Math.floor(Math.random() * _3_letter_words__WEBPACK_IMPORTED_MODULE_1__.threeWords.length)].toLowerCase(),
  // theWord: 'cat',
  currentRowIndex: 0,
  state: "active",
  errors: false,
  message: "",
  letters: ["QWERTYUIOP".split(""), "ASDFGHJKL".split(""), ["Delete"].concat(_toConsumableArray("ZXCVBNM".split("")), ["Enter"])],

  get currentRow() {
    return this.board[this.currentRowIndex];
  },

  get currentGuess() {
    return this.currentRow.map(function (tile) {
      return tile.letter;
    }).join("");
  },

  get remainingGuesses() {
    return this.guessesAllowed - this.currentRowIndex - 1;
  },

  init: function init() {
    var _this = this;

    this.board = Array.from({
      length: this.guessesAllowed
    }, function () {
      return Array.from({
        length: _this.theWord.length
      }, function (item, index) {
        return new _Tile__WEBPACK_IMPORTED_MODULE_0__["default"](index);
      });
    });
  },
  onKeyPress: function onKeyPress(key) {
    this.message = "";
    this.errors = false;

    if (/^[A-z]$/.test(key)) {
      this.fillTile(key);
    } else if (key === "Backspace" || key === "Delete") {
      this.emptyTile();
    } else if (key === "Enter") {
      this.submitGuess();
    }
  },
  fillTile: function fillTile(key) {
    var _iterator = _createForOfIteratorHelper(this.currentRow),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tile = _step.value;

        if (!tile.letter) {
          tile.fill(key);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  emptyTile: function emptyTile() {
    var _iterator2 = _createForOfIteratorHelper(_toConsumableArray(this.currentRow).reverse()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;

        if (tile.letter) {
          tile.empty();
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  submitGuess: function submitGuess() {
    if (this.currentGuess.length < this.theWord.length) {
      return;
    }

    if (!_3_letter_words__WEBPACK_IMPORTED_MODULE_1__.threeWords.includes(this.currentGuess.toUpperCase())) {
      this.errors = true;
      this.message = "Invalid word...";
      return;
    }

    _Tile__WEBPACK_IMPORTED_MODULE_0__["default"].updateStatusesForRow(this.currentRow, this.theWord);

    if (this.currentGuess === this.theWord) {
      var fire = function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio)
        }));
      };

      this.state = "complete";
      this.message = "You Win!";
      var count = 200;
      var defaults = {
        origin: {
          y: 0.7
        }
      };
      fire(0.25, {
        spread: 26,
        startVelocity: 55
      });
      fire(0.2, {
        spread: 60
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45
      });
    } else if (this.remainingGuesses === 0) {
      this.state = "complete";
      this.message = "Game Over. You Lose. The word was ".concat(this.theWord.toUpperCase());
    } else {
      this.currentRowIndex++;
    }
  },
  matchingTileForKey: function matchingTileForKey(key) {
    return this.board.flat().filter(function (tile) {
      return tile.status;
    }).sort(function (t1, t2) {
      return t2.status === "correct";
    }).find(function (tile) {
      return tile.letter === key.toLowerCase();
    });
  }
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;