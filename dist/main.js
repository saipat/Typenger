/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _score_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score_board */ \"./src/score_board.js\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"./src/play.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.isPlaying = false;\n        this.noOfErrors = 0;\n        this.correctTypes = 0;\n        this.time = 10;\n\n        this.easyWords = [\n            \"Bottle\", \"Coffee\", \"Meanwhile\", \"Dianosur\", \"Pineapple\", \"Terrorist\", \"Acieve\", \"Retrive\", \"Opposite\", \"Significantly\", \"Treacherous\", \"Environment\", \"Immediately\", \"Independent\"\n        ];\n\n        this.toughWords = [\n            \"Santa's\", \"Abrogate\", \"Accomodate\", \"Indict\", \"Cementry\", \"Embarass\", \"Convalesce\", \"Carrabian\", \"Abnegation\"\n        ];\n    }\n\n    pickEasyWord() {\n        const randomIndex = Math.floor(Math.random() * this.easyWords.length);\n        return this.easyWords[randomIndex];\n    }\n\n\n    pickToughWord() {\n        const randomIndex = Math.floor(Math.random() * this.toughWords.length);\n        return this.toughWords[randomIndex];\n    }\n\n    init() {\n        const game = document.querySelector('div.game');\n\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _score_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score_board */ \"./src/score_board.js\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play */ \"./src/play.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\n\n// window.addEventListener(\"load\", function (event) {\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    console.log(\"DOM fully loaded and parsed\");\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    console.log(game.pickEasyWord());\n\n    const playButton = document.getElementById('play-btn');\n    const instructions = document.querySelector('p.instructions');\n    const startButton = document.getElementById('start-btn');\n    const playerInput = document.querySelector('#word-input');\n    const currentWOrd = document.querySelector('#current-word');\n    const thorScore = document.querySelector('#thor-score');\n    const thanosScore = document.querySelector('#thanos-score');\n    const timeDisplay = document.querySelector('#time-left');\n    const seconds = document.querySelector('#seconds');\n\n    playButton.addEventListener('click', function (event) {\n        if (instructions.className.includes('hidden')) {\n            instructions.className = instructions.className.replace('hidden', '');\n        } else {\n            instructions.className += 'hidden';\n        }\n    });\n\n    let count = 5;\n\n    startButton.addEventListener('click', function (event) {\n        var interval = setInterval(function () {\n            console.log(--count);\n            if (count === 1) {\n                clearInterval(interval);\n\n                const showOnStart = document.querySelector('#showOnStart');\n\n                if (showOnStart.className.includes('hidden')) {\n                    showOnStart.className = showOnStart.className.replace('hidden', '');\n                }\n                count = 5;\n            }\n        }, 400);\n    });\n\n\n    // logo.addEventListener('click', function (event) {\n    //     console.log(event);\n\n    //     if (animation.className.includes('hidden')) {\n    //         animation.className = animation.className.replace('hidden', '');\n    //     } else {\n    //         animation.className += 'hidden';\n    //     }\n    // });\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n class Level {\n     constructore() {\n         this.level_count = 0;\n         this.speed = 0;\n         this.totalLevels = 5;\n     }\n\n     increaseLevel() {\n         //determine of the previous level is won\n         //if won increase the word display speed\n         //and increment the level_count \n     }\n }\n\n module.exports = Level;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Play; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Play extends _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.message = '';\n        this.points = 0;\n        this.countdown = 5;\n    }\n\n    displayWords() {\n\n        let random = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pickEasyWord();\n        console.log(\"the picked word:----> \", random);\n\n\n        let d = new Date();\n        start = d.getSeconds();\n    }\n\n    //display a random word - call the method in the game file. \n    //display a word in every 4 seconds.\n    //use getSeconds() or do a countdown.\n\n    enterWord() {\n        //get a word from the player\n\n        //check the word with the array\n\n        //if the word is right, increment the points by 1\n        //for evry point animate\n\n        //if the word is wrong, decrement the word by 1\n        //for evry point animate\n    }\n\n\n}\n\n\nmodule.exports = Play;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/play.js?");

/***/ }),

/***/ "./src/score_board.js":
/*!****************************!*\
  !*** ./src/score_board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreBoard; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass ScoreBoard extends _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    construtor() {\n        this.thor_score = 0;\n        this.thanos_score = 0;\n    }\n\n    isWon() {\n        //determine the winner by comparing the lives left\n        //call display message\n    }\n\n    displayMessage() {\n        //display winning or loosing message.\n    }\n}\n\n//# sourceURL=webpack:///./src/score_board.js?");

/***/ })

/******/ });