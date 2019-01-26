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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _score_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score_board */ \"./src/score_board.js\");\n/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word */ \"./src/word.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n\n\n\n\n class Game {\n    constructor() {\n        this.word = new _word__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.scoreBoard = new _score_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.word.wordsLength());\n        this.scoreBoard.reset();\n        this.wordToDisplay = '';\n        this.wordInputEl = document.querySelector('#word-input');\n        this.currentWordEl = document.querySelector('#current-word');        \n        this.wordInputEl.onkeyup = (e) => {\n            // Number 13 is the \"Enter\" key on the keyboard\n            if (e.keyCode === 13) {\n                console.log('Stopping Timer on Enter');\n                this.timer.stop();\n                this.compareWords();\n            }\n        };\n        \n        this.gameEl = document.getElementById('game');\n    }\n\n    play() {\n        this.wordInputEl.value = '';        \n        this.wordToDisplay = this.word.pickEasyWord();\n        if (!this.wordToDisplay) {\n            this.scoreBoard.updateBoard();\n            return;\n        } else {\n            this.currentWordEl.innerHTML = this.wordToDisplay;\n        }\n\n        this.timer.start(() => {\n            this.compareWords();\n        });\n\n        if(this.scoreBoard.updateBoard()) {\n            // console.log('Stopping Timer');\n            this.timer.stop();\n            this.gameEl.dispatchEvent(new Event('gamecomplete'));\n        }\n    }\n\n    compareWords() {\n        if (this.wordInputEl.value.toLowerCase() === this.wordToDisplay.toLowerCase()) {\n            this.scoreBoard.incThor();\n        } else {\n            //change the input color to red.\n            this.scoreBoard.incThanos();\n        }\n        this.play();\n    }\n\n    stop() {\n        this.timer.stop();        \n        this.wordInputEl.value = '';\n        this.currentWordEl.innerHTML = '';\n        delete this.scoreBoard;\n    }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _score_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score_board */ \"./src/score_board.js\");\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // console.log(\"DOM fully loaded and parsed\");\n\n    let game = null;\n\n    const gameButton = document.getElementById('game-btn'); \n    const canvas = document.getElementById('thorAnimation');\n    const wordInput = document.getElementById('word-input');\n    const showOnStart = document.querySelector('#showOnStart');\n    const audio = document.querySelector('audio');\n    const gameEl = document.getElementById('game');\n\n    function doStart() {\n        if (!game) {            \n            game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n            // console.log(\"Created Game\", game);\n        }\n        showOnStart.className = showOnStart.className.replace('hidden', '');\n        canvas.className = canvas.className.replace('hidden', '');\n        wordInput.disabled = false;\n        wordInput.focus();\n        if (audio.paused) {\n            audio.play();\n        }\n        game.play();\n    }\n\n    function doStop() {\n        game.stop();\n        game = null;\n        showOnStart.className += ' hidden';\n        canvas.className += ' hidden';\n        wordInput.disabled = true;\n    }\n\n    gameButton.addEventListener('click', function (event) {\n        var buttonText = event.target.innerText;\n\n        if (buttonText === 'Start') {\n            doStart();\n            event.target.innerText = 'Stop';\n        }\n\n        if (buttonText === 'Stop') {\n            doStop();\n            event.target.innerText = 'Start';\n        }        \n    });\n\n    gameEl.addEventListener('gamecomplete', (event) => {\n        // game is complete, no need to \"stop\" it\n        // console.log(\"Game Complete\");        \n        game = null;\n        canvas.className += ' hidden';\n        wordInput.disabled = true;\n        gameButton.innerText = 'Start';\n    });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Level {\n     constructore() {\n         this.level_count = 0;\n         this.speed = 0;\n         this.totalLevels = 5;\n     }\n\n     increaseLevel() {\n         //determine of the previous level is won\n         //if won increase the word display speed\n         //and increment the level_count \n     }\n }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/score_board.js":
/*!****************************!*\
  !*** ./src/score_board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n class ScoreBoard{\n    constructor(totalWords) {\n        this.thorScore = 0;\n        this.thanosScore = 0;\n        this.totalWords = totalWords;\n        this.thorScoreEl = document.querySelector('#thor-score');\n        this.thanosScoreEl = document.querySelector('#thanos-score');\n        this.winnerEl = document.querySelector('#isWon-message');\n        this.canvasEl = document.querySelector('#thorAnimation');\n        this.winningScore = (this.totalWords / 2);\n    }\n\n    incThor() {\n        this.thorScore += 1;\n        this.thorScoreEl.innerHTML = this.thorScore;\n    }\n\n    incThanos() {\n        this.thanosScore += 1;\n        this.thanosScoreEl.innerHTML = this.thanosScore;\n    }\n\n    isWon() {\n        // console.log(\"this ===> \", this);\n        if (this.thorScore > this.winningScore) {\n             return 'Thor';\n        } else if (this.thanosScore > this.winningScore) {\n            return 'Thanos';\n        } else if (this.thorScore === this.winningScore && this.thanosScore ===     this.winningScore) {\n            console.log(\"It;s a tie\");\n            return 'Tie';\n        } else if (this.thorScore <= this.winningScore && this.thanosScore <=                   this.winningScore) {\n            return '';\n        }\n    }\n\n    updateBoard() {\n        let win = this.isWon();\n        // console.log(\"Winner Winner\", win);\n        let hasWinner = false;        \n        if (win === 'Thor') {\n            this.winnerEl.innerHTML = 'Congratulations Thor! You saved the world!';\n            hasWinner = true;\n        } else if (win === 'Thanos') {\n            this.winnerEl.innerHTML = 'You Loose! You should have aimed for the head!';\n            hasWinner = true;\n        } else if (win === 'Tie') {\n            this.winnerEl.innerHTML = 'It is a Tie. You both Sucks!';\n            hasWinner = true;\n        } else {\n            this.winnerEl.innerHTML = '';\n        }\n        return hasWinner;\n    }\n\n    reset() {\n        this.thorScore = 0;\n        this.thanosScore = 0;\n        this.thorScoreEl.innerHTML = 0;\n        this.thanosScoreEl.innerHTML = 0;\n        this.winnerEl.innerHTML = '';\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreBoard);\n\n//# sourceURL=webpack:///./src/score_board.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Timer {\n    constructor() {\n        this.time = 5;\n        this.interval = null;\n        this.timerEl = document.querySelector('#seconds');\n    }\n\n    start(callbackFn) {\n        this.time = 5;\n        this.interval = setInterval(() => {\n            --this.time;\n            this.timerEl.innerHTML = this.time + \" \";\n            if (this.time === 0) {\n                console.log(\"this.interval ---->\", this.interval);\n                clearInterval(this.interval);\n                callbackFn();\n            }\n        }, 1000);\n    }\n\n    stop() {\n        console.log(\"Timer Stop\", this.interval);\n        clearInterval(this.interval);\n        this.timerEl.innerHTML = 5 + \" \";\n    }\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Word {\n    constructor() {\n        this.pickedWords = [];\n\n        this.easyWords = [\n            \"Santa\", \"Abrogate\", \"Embarass\", \"Retrive\", \"Carrabian\", \"Change\"\n        ];\n\n        this.length = this.easyWords.length;\n\n        // this.toughWords = [\n        //     \"Santa's\", \"Abrogate\", \"Accomodate\", \"Indict\", \"Cementry\", \"Embarass\", \"Convalesce\", \"Carrabian\", \"Abnegation\", \"Treacherous\", \"Retrive\", \"Opposite\", \"Significantly\",\"Abnegation\", \"Treacherous\", \"Retrive\", \"Opposite\", \"Significantly\", \"Typenger\", \"Bioinformatics\", \"Mispronounced\", \"Anathema\", \"Asterisk\", \"Defibrillator\", \"Deteriorate\", \"Explicit\", \"Exponentially\", \"Ignominious\", \"Massachusetts\", \"Onomatopoeia\", \"Phenomenon\", \"Schadenfreude\"\n        // ];\n    }\n\n    pickEasyWord() {\n        let randomIndex = Math.floor(Math.random() * this.easyWords.length);\n        let word = this.easyWords[randomIndex];\n        this.easyWords.splice(this.easyWords.indexOf(word), 1); \n        return word;\n    }\n\n    wordsLength() { \n        return this.length;\n    }\n\n    pickToughWord() {\n        const randomIndex = Math.floor(Math.random() * this.toughWords.length);\n        return this.toughWords[randomIndex];\n    }\n\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);\n\n//# sourceURL=webpack:///./src/word.js?");

/***/ })

/******/ });