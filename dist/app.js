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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var question = 0;\n\n    $('.main_page_block_text_button').click(function (event) {\n        event.preventDefault();\n\n        $('.main_page').fadeOut(300);\n        $('.test_page').delay(300).fadeIn(300);\n    });\n\n    $('.next_button').click(function (event) {\n        event.preventDefault();\n\n        var check = $('.active').find('input:checked');\n\n        if (check.length < 1) {\n            alert('Выберите один из вариантов');\n        } else {\n            $('.active').removeClass('active');\n            $('.question').eq(++question).addClass('active');\n\n            if (question == $('.question').length - 1) {\n                $('.next_button').css('display', 'none');\n            }\n\n            if (question > 0) {\n                $('.prev_button').css('display', 'block');\n            }\n        }\n    });\n\n    $('.prev_button').click(function (event) {\n        event.preventDefault();\n\n        $('.active').removeClass('active');\n        $('.question').eq(--question).addClass('active');\n        if (question < $('.question').length - 1) {\n            $('.next_button').css('display', 'block');\n        }\n        if (question <= 0) {\n            $('.prev_button').css('display', 'none');\n        }\n    });\n\n    $('.form').on('submit', function (event) {\n        event.preventDefault();\n\n        var answers = [];\n\n        for (var i = 0; i < $('.question').length - 1; i++) {\n            var question = $('.question').eq(i).find('.question_text').text();\n            var ans = $('.question').eq(i).find('input:checked');\n            var str = '';\n\n            if (ans.length > 1) {\n                ans.each(function () {\n                    str += $(this).val() + ',';\n                });\n            } else {\n                str += ans.val();\n            }\n\n            answers.push(question + ' ' + str);\n        }\n        $('#questions').val(answers.join(';'));\n        \n        var form = $(this).serialize();\n        \n        $.ajax({\n            type: 'POST',\n            url: 'send.php',\n            data: form,\n            success: function () {\n                $('.test_page').fadeOut(300);\n                $('.thanks').delay(300).fadeIn(300);\n            }\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./js/app/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js?");

/***/ })

/******/ });
