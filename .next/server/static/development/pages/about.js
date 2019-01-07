module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Layout.js":
/*!*************************!*\
  !*** ./pages/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/pages/Layout.js";




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Testlimit web"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "../node_modules/pure-react-carousel/dist/react-carousel.es.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../node_modules/aos/dist/aos.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../node_modules/animate.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
/* harmony import */ var _src_components_AboutHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/AboutHero */ "./src/components/AboutHero.js");
/* harmony import */ var _src_components_Direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Direction */ "./src/components/Direction.js");
/* harmony import */ var _src_components_AboutContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/AboutContent */ "./src/components/AboutContent.js");
/* harmony import */ var _src_components_Talent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Talent */ "./src/components/Talent.js");
/* harmony import */ var _src_components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Team */ "./src/components/Team.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/pages/about.js";







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AboutHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Direction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AboutContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Talent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/assets/theme.js":
/*!*****************************!*\
  !*** ./src/assets/theme.js ***!
  \*****************************/
/*! exports provided: body, headingDarken, paragraphDarken, textWhite, h4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingDarken", function() { return headingDarken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paragraphDarken", function() { return paragraphDarken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textWhite", function() { return textWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h4", function() { return h4; });
var body = new String("html,body,h1,h2,h3,h4,h5,h6,span,p{font-family:'Lato',sans-serif !important;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXVCLEFBR21ELHlDQUN2Qiw2RkFDSCxnQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2VicmFoL0RvY3VtZW50cy9XZWJQcm9qZWN0cy90ZXN0bGltaXRfbWF0ZXJpYWxpemUvc3JjL2Fzc2V0cy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmNvbnN0IGJvZHkgPSBjc3MuZ2xvYmFsYFxuICAgICAgICBodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzcGFuLCBwe1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgIH1cbiBcbiBcbiBgXG5cbiBjb25zdCBoZWFkaW5nRGFya2VuID0gY3NzYGgze1xuICAgICAgICBjb2xvcjojNTc2MTVDO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE5ZW07XG4gICAgXG4gICAgfWBcbiBjb25zdCBwYXJhZ3JhcGhEYXJrZW4gPSBjc3NgcHsgXG4gICAgICAgIGNvbG9yOiAjQTdCMEFBO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59YFxuXG5jb25zdCBoNCA9IGNzc2BoNHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICM1NzYxNUM7XG4gICBcbn1gXG5cbmNvbnN0IHRleHRXaGl0ZSA9IGNzc2Bjb2xvcjojRkZGRkZGO2BcblxuIGV4cG9ydCB7XG4gICAgIGJvZHksXG4gICAgIGhlYWRpbmdEYXJrZW4sXG4gICAgIHBhcmFncmFwaERhcmtlbixcbiAgICAgdGV4dFdoaXRlLFxuICAgICBoNFxuIH0iXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/assets/theme.js */");
body.__hash = "1172667234";
var headingDarken = new String("h3.jsx-2300295924{color:#57615C;font-style:normal;font-weight:bold;line-height:normal;font-size:2rem;-webkit-letter-spacing:0.19em;-moz-letter-spacing:0.19em;-ms-letter-spacing:0.19em;letter-spacing:0.19em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTBCLEFBRXNCLGNBQ0ssa0JBQ0QsaUJBQ0UsbUJBQ0osZUFDTyx5R0FFMUIiLCJmaWxlIjoiL1VzZXJzL2VicmFoL0RvY3VtZW50cy9XZWJQcm9qZWN0cy90ZXN0bGltaXRfbWF0ZXJpYWxpemUvc3JjL2Fzc2V0cy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmNvbnN0IGJvZHkgPSBjc3MuZ2xvYmFsYFxuICAgICAgICBodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzcGFuLCBwe1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgIH1cbiBcbiBcbiBgXG5cbiBjb25zdCBoZWFkaW5nRGFya2VuID0gY3NzYGgze1xuICAgICAgICBjb2xvcjojNTc2MTVDO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE5ZW07XG4gICAgXG4gICAgfWBcbiBjb25zdCBwYXJhZ3JhcGhEYXJrZW4gPSBjc3NgcHsgXG4gICAgICAgIGNvbG9yOiAjQTdCMEFBO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59YFxuXG5jb25zdCBoNCA9IGNzc2BoNHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICM1NzYxNUM7XG4gICBcbn1gXG5cbmNvbnN0IHRleHRXaGl0ZSA9IGNzc2Bjb2xvcjojRkZGRkZGO2BcblxuIGV4cG9ydCB7XG4gICAgIGJvZHksXG4gICAgIGhlYWRpbmdEYXJrZW4sXG4gICAgIHBhcmFncmFwaERhcmtlbixcbiAgICAgdGV4dFdoaXRlLFxuICAgICBoNFxuIH0iXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/assets/theme.js */");
headingDarken.__hash = "2300295924";
var paragraphDarken = new String("p.jsx-3291906233{color:#A7B0AA;line-height:28px;font-size:1.15rem;text-align:justify;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI0QixBQUV1QixjQUNHLGlCQUNDLGtCQUNDLG1CQUNFLHFHQUM3QiIsImZpbGUiOiIvVXNlcnMvZWJyYWgvRG9jdW1lbnRzL1dlYlByb2plY3RzL3Rlc3RsaW1pdF9tYXRlcmlhbGl6ZS9zcmMvYXNzZXRzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcblxuY29uc3QgYm9keSA9IGNzcy5nbG9iYWxgXG4gICAgICAgIGh0bWwsIGJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHNwYW4sIHB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgfVxuIFxuIFxuIGBcblxuIGNvbnN0IGhlYWRpbmdEYXJrZW4gPSBjc3NgaDN7XG4gICAgICAgIGNvbG9yOiM1NzYxNUM7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTllbTtcbiAgICBcbiAgICB9YFxuIGNvbnN0IHBhcmFncmFwaERhcmtlbiA9IGNzc2BweyBcbiAgICAgICAgY29sb3I6ICNBN0IwQUE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1gXG5cbmNvbnN0IGg0ID0gY3NzYGg0e1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogIzU3NjE1QztcbiAgIFxufWBcblxuY29uc3QgdGV4dFdoaXRlID0gY3NzYGNvbG9yOiNGRkZGRkY7YFxuXG4gZXhwb3J0IHtcbiAgICAgYm9keSxcbiAgICAgaGVhZGluZ0RhcmtlbixcbiAgICAgcGFyYWdyYXBoRGFya2VuLFxuICAgICB0ZXh0V2hpdGUsXG4gICAgIGg0XG4gfSJdfQ== */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/assets/theme.js */");
paragraphDarken.__hash = "3291906233";
var h4 = new String("h4.jsx-519482652{font-weight:200;line-height:normal;font-size:1.5rem;color:#57615C;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJjLEFBRXFCLGdCQUNHLG1CQUNGLGlCQUNILGNBRWxCIiwiZmlsZSI6Ii9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5jb25zdCBib2R5ID0gY3NzLmdsb2JhbGBcbiAgICAgICAgaHRtbCwgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc3BhbiwgcHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICB9XG4gXG4gXG4gYFxuXG4gY29uc3QgaGVhZGluZ0RhcmtlbiA9IGNzc2BoM3tcbiAgICAgICAgY29sb3I6IzU3NjE1QztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xOWVtO1xuICAgIFxuICAgIH1gXG4gY29uc3QgcGFyYWdyYXBoRGFya2VuID0gY3NzYHB7IFxuICAgICAgICBjb2xvcjogI0E3QjBBQTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufWBcblxuY29uc3QgaDQgPSBjc3NgaDR7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiAjNTc2MTVDO1xuICAgXG59YFxuXG5jb25zdCB0ZXh0V2hpdGUgPSBjc3NgY29sb3I6I0ZGRkZGRjtgXG5cbiBleHBvcnQge1xuICAgICBib2R5LFxuICAgICBoZWFkaW5nRGFya2VuLFxuICAgICBwYXJhZ3JhcGhEYXJrZW4sXG4gICAgIHRleHRXaGl0ZSxcbiAgICAgaDRcbiB9Il19 */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/assets/theme.js */");
h4.__hash = "519482652";
var textWhite = new String(".jsx-2373337673{color:#FFFFFF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9hc3NldHMvdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNxQixBQUNjLGNBQUMiLCJmaWxlIjoiL1VzZXJzL2VicmFoL0RvY3VtZW50cy9XZWJQcm9qZWN0cy90ZXN0bGltaXRfbWF0ZXJpYWxpemUvc3JjL2Fzc2V0cy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmNvbnN0IGJvZHkgPSBjc3MuZ2xvYmFsYFxuICAgICAgICBodG1sLCBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBzcGFuLCBwe1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgIH1cbiBcbiBcbiBgXG5cbiBjb25zdCBoZWFkaW5nRGFya2VuID0gY3NzYGgze1xuICAgICAgICBjb2xvcjojNTc2MTVDO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE5ZW07XG4gICAgXG4gICAgfWBcbiBjb25zdCBwYXJhZ3JhcGhEYXJrZW4gPSBjc3NgcHsgXG4gICAgICAgIGNvbG9yOiAjQTdCMEFBO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59YFxuXG5jb25zdCBoNCA9IGNzc2BoNHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICM1NzYxNUM7XG4gICBcbn1gXG5cbmNvbnN0IHRleHRXaGl0ZSA9IGNzc2Bjb2xvcjojRkZGRkZGO2BcblxuIGV4cG9ydCB7XG4gICAgIGJvZHksXG4gICAgIGhlYWRpbmdEYXJrZW4sXG4gICAgIHBhcmFncmFwaERhcmtlbixcbiAgICAgdGV4dFdoaXRlLFxuICAgICBoNFxuIH0iXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/assets/theme.js */");
textWhite.__hash = "2373337673";


/***/ }),

/***/ "./src/components/AboutContent.js":
/*!****************************************!*\
  !*** ./src/components/AboutContent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/theme */ "./src/assets/theme.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/AboutContent.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "about",
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "col s12 m4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "About ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), " us")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "col s12 m8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Testlimit, it is our registered name, it is umbrella body of many sub-divisions within our company. computer literacy, computer technologies, Youth development, Creative, Stationery supply, Printing and bookbinding, all these divisions carry the name \"Talent\" as a title, and then the division after the name. This will result in MERITS as our registered name and trade names will be according to our division. All these division will carry the ultimate mission of using the power of technological innovation in uplifting the standard of education and improving the lives of our rural communities."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "col s2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "col s10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash) + " " + "moto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2817436559 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " Our Moto "), " is \"looking forward to the future\" as the name indicate. ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"].__hash,
    css: _assets_theme__WEBPACK_IMPORTED_MODULE_2__["headingDarken"],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"].__hash,
    css: _assets_theme__WEBPACK_IMPORTED_MODULE_2__["paragraphDarken"],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2817436559",
    css: "span.jsx-2817436559{color:#57615C !important;}.container.jsx-2817436559{padding:10vh 0;}.moto.jsx-2817436559{padding:4vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL0Fib3V0Q29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQm9CLEFBR3VDLEFBR1QsQUFJTCxZQUNkLEdBSkEsVUFIQSIsImZpbGUiOiIvVXNlcnMvZWJyYWgvRG9jdW1lbnRzL1dlYlByb2plY3RzL3Rlc3RsaW1pdF9tYXRlcmlhbGl6ZS9zcmMvY29tcG9uZW50cy9BYm91dENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGhlYWRpbmdEYXJrZW4sIHBhcmFncmFwaERhcmtlbiB9IGZyb20gJy4uL2Fzc2V0cy90aGVtZSc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImFib3V0XCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNFwiPlxuICAgICAgICAgICA8aDM+QWJvdXQgPGJyLz4gdXM8L2gzPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbThcIj5cbiAgICAgICAgICAgPHA+VGVzdGxpbWl0LCBpdCBpcyBvdXIgcmVnaXN0ZXJlZCBuYW1lLCBpdCBpcyB1bWJyZWxsYSBib2R5IG9mIG1hbnkgc3ViLWRpdmlzaW9ucyB3aXRoaW4gb3VyIGNvbXBhbnkuIGNvbXB1dGVyIGxpdGVyYWN5LCBjb21wdXRlciB0ZWNobm9sb2dpZXMsIFlvdXRoIGRldmVsb3BtZW50LCBDcmVhdGl2ZSwgU3RhdGlvbmVyeSBzdXBwbHksIFByaW50aW5nIGFuZCBib29rYmluZGluZywgYWxsIHRoZXNlIGRpdmlzaW9ucyBjYXJyeSB0aGUgbmFtZSBcIlRhbGVudFwiIGFzIGEgdGl0bGUsIGFuZCB0aGVuIHRoZSBkaXZpc2lvbiBhZnRlciB0aGUgbmFtZS4gVGhpcyB3aWxsIHJlc3VsdCBpbiBNRVJJVFMgYXMgb3VyIHJlZ2lzdGVyZWQgbmFtZSBhbmQgdHJhZGUgbmFtZXMgd2lsbCBiZSBhY2NvcmRpbmcgdG8gb3VyIGRpdmlzaW9uLiBBbGwgdGhlc2UgZGl2aXNpb24gd2lsbCBjYXJyeSB0aGUgdWx0aW1hdGUgbWlzc2lvbiBvZiB1c2luZyB0aGUgcG93ZXIgb2YgdGVjaG5vbG9naWNhbCBpbm5vdmF0aW9uIGluIHVwbGlmdGluZyB0aGUgc3RhbmRhcmQgb2YgZWR1Y2F0aW9uIGFuZCBpbXByb3ZpbmcgdGhlIGxpdmVzIG9mIG91ciBydXJhbCBjb21tdW5pdGllcy48L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90b1wiPiA8c3Bhbj4gT3VyIE1vdG8gPC9zcGFuPiBpcyBcImxvb2tpbmcgZm9yd2FyZCB0byB0aGUgZnV0dXJlXCIgYXMgdGhlIG5hbWUgaW5kaWNhdGUuIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8c3R5bGUganN4PnsgaGVhZGluZ0RhcmtlbiB9PC9zdHlsZT5cbiAgICAgICA8c3R5bGUganN4PnsgcGFyYWdyYXBoRGFya2VuIH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICBjb2xvcjogIzU3NjE1QyAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHZoIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb3Rve1xuICAgICAgICAgIFxuICAgICAgICAgICAgcGFkZGluZzogNHZoOyAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pOyJdfQ== */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/AboutContent.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/AboutHero.js":
/*!*************************************!*\
  !*** ./src/components/AboutHero.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/AboutHero.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.parallax').parallax();
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init();
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "parallax-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "parallax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../static/contact-hero-img.png",
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    className: "jsx-323116000" + " " + "abt-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " Who we are ?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-323116000" + " " + "col s6 m3 arrange-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " 80 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " Projects Completed ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "col s6 m3 arrange-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " 3 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " Year of experience")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "col s6 m3 arrange-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " 6 "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " Exibition ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-323116000" + " " + "col s6 m3 arrange-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " 100% "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-323116000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, " Happy clients ")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "323116000",
    css: ".arrange-txt.jsx-323116000{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.abt-title.jsx-323116000{text-align:center;margin-bottom:8vh;}h3.jsx-323116000{padding:0 2rem;}.parallax-container.jsx-323116000{background:rgba(35,146,107,0.93);padding:5rem 0 5rem;color:#FFFFFF;height:70vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL0Fib3V0SGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3FCLEFBRzJCLEFBTUssQUFJRixBQUdzQixlQUZ4QyxHQUpxQixlQU9HLEdBTnhCLGlCQU9rQixjQUNGLE9BZlEsS0FpQnhCLHlFQWhCaUMsbUhBRWpDIiwiZmlsZSI6Ii9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL0Fib3V0SGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KCk7XG4gICAgICAgICBBT1MuaW5pdCgpOyBcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPjxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL2NvbnRhY3QtaGVyby1pbWcucG5nXCIvPjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFidC10aXRsZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiID4gV2hvIHdlIGFyZSA/PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBtMyBhcnJhbmdlLXR4dFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPiA4MCA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg1PiBQcm9qZWN0cyBDb21wbGV0ZWQgPC9oNT5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgbTMgYXJyYW5nZS10eHRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz4gMyA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGg1PiBZZWFyIG9mIGV4cGVyaWVuY2U8L2g1PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBtMyBhcnJhbmdlLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPiA2IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDU+IEV4aWJpdGlvbiA8L2g1PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBtMyBhcnJhbmdlLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPiAxMDAlIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDU+IEhhcHB5IGNsaWVudHMgPC9oNT5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgLmFycmFuZ2UtdHh0e1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICB9XG4gICAgICAgICAgIC5hYnQtdGl0bGV7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4dmg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzUsIDE0NiwgMTA3LCAwLjkzKTtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMCA1cmVtO1xuICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICB9XG5cbiAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59Il19 */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/AboutHero.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Direction.js":
/*!*************************************!*\
  !*** ./src/components/Direction.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Direction.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-3905198984" + " " + "direction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.url,
    className: "jsx-3905198984" + " " + "direction__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3905198984" + " " + "material-icons fadeout teal-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "keyboard_arrow_down")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3905198984",
    css: ".direction.jsx-3905198984{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 5px;margin:2rem;}.direction__btn.jsx-3905198984{position:relative;width:30px;height:58px;border:1px solid #00695c;border-radius:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.direction__btn.jsx-3905198984::before,.direction__btn.jsx-3905198984::after{content:'';position:absolute;background:#00695c;}.direction__btn.jsx-3905198984::before{width:2px;top:14px;height:10px;-webkit-animation:fadeOutDown-jsx-3905198984 1s ease infinite;animation:fadeOutDown-jsx-3905198984 1s ease infinite;}.direction__btn.jsx-3905198984::after{width:4px;top:28px;height:4px;border-radius:50%;}.fadeout.jsx-3905198984{-webkit-animation:fadeOutDown-jsx-3905198984 1.099s ease infinite;animation:fadeOutDown-jsx-3905198984 1.099s ease infinite;}@-webkit-keyframes fadeOutDown{from.jsx-3905198984{opacity:0;}to.jsx-3905198984{opacity:1;-webkit-transform:translate3d(0%,30%,0);-webkit-transform:translate3d(0%,30%,0);-ms-transform:translate3d(0%,30%,0);transform:translate3d(0%,30%,0);}}@-webkit-keyframes fadeOutDown-jsx-3905198984{from{opacity:1;}to{opacity:0;-webkit-transform:translate3d(0,30%,0);-webkit-transform:translate3d(0,30%,0);-ms-transform:translate3d(0,30%,0);transform:translate3d(0,30%,0);}}@keyframes fadeOutDown-jsx-3905198984{from{opacity:1;}to{opacity:0;-webkit-transform:translate3d(0,30%,0);-webkit-transform:translate3d(0,30%,0);-ms-transform:translate3d(0,30%,0);transform:translate3d(0,30%,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL0RpcmVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPb0IsQUFHMEIsQUFPTyxBQVdSLEFBS0EsQUFNQSxBQU9nQyxBQUk5QixBQUlBLEFBUUEsQUFJQSxVQWhDSCxBQU1BLEFBV1QsQUFJNEMsQUFRNUMsQUFJMkMsQ0F0QzFCLE9BWE4sQ0FpQkMsQUFNRCxVQXRCQyxBQVdNLENBWUEsQ0FOc0IsVUFoQmYsT0FXN0IsQUFZQSxDQXlCdUMsQ0FaQyxnQkFuQ2pCLFFBVkUsV0FXUix1Q0F5QmpCLHVCQVZBLE9BZ0NJLElBWkEsQ0FsQ1ksWUFDVyxFQVpOLDZGQUNGLElBWU0sYUFYWCxZQUNkLDRFQVdBIiwiZmlsZSI6Ii9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL0RpcmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGlyZWN0aW9uXCI+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLnVybH0gY2xhc3NOYW1lPVwiZGlyZWN0aW9uX19idG5cIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZmFkZW91dCB0ZWFsLXRleHRcIj5rZXlib2FyZF9hcnJvd19kb3duPC9pPjwvYT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kaXJlY3Rpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXJlY3Rpb25fX2J0bntcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA2OTVjO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXJlY3Rpb25fX2J0bjo6YmVmb3JlLCAuZGlyZWN0aW9uX19idG46OmFmdGVye1xuICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2OTVjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlyZWN0aW9uX19idG46OmJlZm9yZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dERvd24gMXMgZWFzZSAgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXJlY3Rpb25fX2J0bjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogYW5pbWF0aW9uICovXG4gICAgICAgICAgLmZhZGVvdXR7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXREb3duIDEuMDk5cyBlYXNlICBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMzAlLCAwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAzMCUsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwJSwgMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMCUsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiApO1xuIl19 */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Direction.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Footer.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "page-footer teal teal-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col l6 s12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "white-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "TALENT ESTABLISHMENT LIMITED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "grey-text text-lighten-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "We are talented in technology. ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\xA9 2018 Copyright - Testlimit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "teal-text text-lighten-3 right",
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Designed & developed by Ebrah Jame"))));
});

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/theme */ "./src/assets/theme.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (typeof window !== 'undefined') {
        window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
        window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

        __webpack_require__(/*! materialize-css */ "materialize-css");
      }

      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sidenav').sidenav();
    });

    _this.props = props;
    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3585004065" + " " + "navbar-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-3585004065" + " " + "nav-wrapper white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3585004065" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "brand-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/testlimit.png",
        alt: "testlimit logo",
        className: "jsx-3585004065" + " " + "testlimit-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        "data-target": "mobile-menu",
        className: "jsx-3585004065" + " " + "sidenav-trigger teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-3585004065" + " " + "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        id: "nav-mobile",
        className: "jsx-3585004065" + " " + "right hide-on-med-and-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "About us"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Services"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Products"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Contacts")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        id: "mobile-menu",
        className: "jsx-3585004065" + " " + "sidenav grey lighten-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "About us"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Services"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Products"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3585004065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3585004065" + " " + "teal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Contacts")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3585004065",
        css: ".testlimit-logo.jsx-3585004065{max-width:11rem;}@media(max-width:40rem){.testlimit-logo.jsx-3585004065{max-width:9rem;}}.sidenav.jsx-3585004065{z-index:999 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRndCLEFBR3FDLEFBSUcsQUFLSSxlQUp2QixDQUpKLE9BU0EiLCJmaWxlIjoiL1VzZXJzL2VicmFoL0RvY3VtZW50cy9XZWJQcm9qZWN0cy90ZXN0bGltaXRfbWF0ZXJpYWxpemUvc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gJy4uL2Fzc2V0cy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudHtcbiAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgc3VwZXIocHJvcHMpO1xuICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICB9XG5cbiAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICB3aW5kb3cuJCA9ICQ7XG4gICAgICAgIHdpbmRvdy5qUXVlcnkgPSAkO1xuICAgICAgICByZXF1aXJlKCdtYXRlcmlhbGl6ZS1jc3MnKTtcbiAgICAgIH1cblxuICAgICAgJCgnLnNpZGVuYXYnKS5zaWRlbmF2KCk7XG5cbiAgIH1cblxuICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWZpeGVkXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciB3aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPiA8aW1nIHNyYz1cIi4uL3N0YXRpYy90ZXN0bGltaXQucG5nXCIgYWx0PVwidGVzdGxpbWl0IGxvZ29cIiBjbGFzc05hbWU9XCJ0ZXN0bGltaXQtbG9nb1wiLz48L2E+XG4gICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNpZGVuYXYtdHJpZ2dlciB0ZWFsLXRleHRcIiBkYXRhLXRhcmdldD1cIm1vYmlsZS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cInRlYWwtdGV4dFwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwidGVhbC10ZXh0XCI+QWJvdXQgdXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cInRlYWwtdGV4dFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cInRlYWwtdGV4dFwiPlByb2R1Y3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJ0ZWFsLXRleHRcIj5Db250YWN0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZW5hdiBncmV5IGxpZ2h0ZW4tM1wiIGlkPVwibW9iaWxlLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwidGVhbC10ZXh0XCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJ0ZWFsLXRleHRcIj5BYm91dCB1czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cInRlYWwtdGV4dFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cInRlYWwtdGV4dFwiPlByb2R1Y3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwidGVhbC10ZXh0XCI+Q29udGFjdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRlc3RsaW1pdC1sb2dve1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MHJlbSl7XG4gICAgICAgICAgICAgICAgICAgIC50ZXN0bGltaXQtbG9nb3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2lkZW5hdntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4Pntib2R5fTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgKTtcbiAgIH1cblxufVxuIl19 */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Navbar.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_4__["body"].__hash,
        css: _assets_theme__WEBPACK_IMPORTED_MODULE_4__["body"],
        __self: this
      }));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./src/components/Talent.js":
/*!**********************************!*\
  !*** ./src/components/Talent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/theme */ "./src/assets/theme.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Talent.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.parallax').parallax();
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash) + " " + "parallax-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash) + " " + "parallax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../../static/talent-img.svg",
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash) + " " + "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash) + " " + "talent-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " TALENT "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3874825032 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash, " jsx-").concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "was founded in 2004 as a provider of innovative computer related products, I.C.T. Solutions for corporate customers and computer literacy. The company is currently focused on providing a broad mix of I.C.T products and services to customers who are in need to improve their companies or lifestyle."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash,
    css: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"].__hash,
    css: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["paragraphDarken"],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3874825032",
    css: "h3.jsx-3874825032,p.jsx-3874825032{color:#FFFFFF;}h3.jsx-3874825032{margin-bottom:10vh;font-weight:200;}.parallax-container.jsx-3874825032{background:rgba(35,146,107,0.83);}.container.jsx-3874825032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.parallax-container.jsx-3874825032{height:80vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL1RhbGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnFCLEFBRzJCLEFBR1EsQUFJZ0IsQUFHdEIsQUFTRCxZQUNoQixFQW5CQSxLQUdvQixjQUlwQixFQUhBLHVDQU0yQixtR0FDSiw2RkFDUCxZQUNoQiIsImZpbGUiOiIvVXNlcnMvZWJyYWgvRG9jdW1lbnRzL1dlYlByb2plY3RzL3Rlc3RsaW1pdF9tYXRlcmlhbGl6ZS9zcmMvY29tcG9uZW50cy9UYWxlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBoZWFkaW5nRGFya2VuLCBwYXJhZ3JhcGhEYXJrZW4gfSBmcm9tICcuLi9hc3NldHMvdGhlbWUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgJCgnLnBhcmFsbGF4JykucGFyYWxsYXgoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheFwiPjxpbWcgc3JjPVwiLi4vLi4vc3RhdGljL3RhbGVudC1pbWcuc3ZnXCIvPjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0YWxlbnQtdGl0bGVcIj4gVEFMRU5UIDwvaDM+XG4gICAgICAgICAgICAgICAgPHA+d2FzIGZvdW5kZWQgaW4gMjAwNCBhcyBhIHByb3ZpZGVyIG9mIGlubm92YXRpdmUgY29tcHV0ZXIgcmVsYXRlZCBwcm9kdWN0cywgSS5DLlQuIFNvbHV0aW9ucyBmb3IgY29ycG9yYXRlIGN1c3RvbWVycyBhbmQgY29tcHV0ZXIgbGl0ZXJhY3kuIFRoZSBjb21wYW55IGlzIGN1cnJlbnRseSBmb2N1c2VkIG9uIHByb3ZpZGluZyBhIGJyb2FkIG1peCBvZiBJLkMuVCBwcm9kdWN0cyBhbmQgc2VydmljZXMgdG8gY3VzdG9tZXJzIHdobyBhcmUgaW4gbmVlZCB0byBpbXByb3ZlIHRoZWlyIGNvbXBhbmllcyBvciBsaWZlc3R5bGUuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgXG4gICAgICAgICA8c3R5bGUganN4PnsgaGVhZGluZ0RhcmtlbiB9PC9zdHlsZT5cbiAgICAgICAgIDxzdHlsZSBqc3g+eyBwYXJhZ3JhcGhEYXJrZW4gfTwvc3R5bGU+XG4gICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIGgzLCBwe1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAucGFyYWxsYXgtY29udGFpbmVye1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM1LCAxNDYsIDEwNywgMC44Myk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmNvbnRlbnRze1xuXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLnBhcmFsbGF4LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgfVxuICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Talent.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Team.js":
/*!********************************!*\
  !*** ./src/components/Team.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/theme */ "./src/assets/theme.js");
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Team.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.carousel').carousel();
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Get to Know Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#one!",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/nature/1",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "prof center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Amarino Mpotwa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "DIRECTOR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#two!",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/nature/2",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "prof center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Sanja Abihud"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "TECHNICIAN"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#three!",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/nature/3",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "prof center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Jackline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "SECRETARY"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#four!",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "carousel-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://lorempixel.com/250/250/nature/4",
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash) + " " + "prof center-align text-teal text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Erick"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3291749217 " + "jsx-".concat(_assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "TECHNICIAN")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"].__hash,
    css: _assets_theme__WEBPACK_IMPORTED_MODULE_3__["headingDarken"],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3291749217",
    css: "h3.jsx-3291749217{text-align:center;}.prof.jsx-3291749217{border:1px solid;margin:0;}.container.jsx-3291749217{padding:10vh 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL1RlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUc4QixBQUdBLEFBSUYsZUFDbkIsRUFKYSxDQUhiLFFBSUEiLCJmaWxlIjoiL1VzZXJzL2VicmFoL0RvY3VtZW50cy9XZWJQcm9qZWN0cy90ZXN0bGltaXRfbWF0ZXJpYWxpemUvc3JjL2NvbXBvbmVudHMvVGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7aGVhZGluZ0Rhcmtlbn0gZnJvbSAnLi4vYXNzZXRzL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICQoJy5jYXJvdXNlbCcpLmNhcm91c2VsKCk7XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgPGgzPkdldCB0byBLbm93IFVzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIGhyZWY9XCIjb25lIVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9sb3JlbXBpeGVsLmNvbS8yNTAvMjUwL25hdHVyZS8xXCIvPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICA8aDY+QW1hcmlubyBNcG90d2E8L2g2PlxuICAgICAgICAgICAgICAgICA8cD5ESVJFQ1RPUjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgaHJlZj1cIiN0d28hXCI+PGltZyBzcmM9XCJodHRwczovL2xvcmVtcGl4ZWwuY29tLzI1MC8yNTAvbmF0dXJlLzJcIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDY+U2FuamEgQWJpaHVkPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VEVDSE5JQ0lBTjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIiBocmVmPVwiI3RocmVlIVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9sb3JlbXBpeGVsLmNvbS8yNTAvMjUwL25hdHVyZS8zXCIvPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mIGNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgPGg2PkphY2tsaW5lPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxwPlNFQ1JFVEFSWTwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIGhyZWY9XCIjZm91ciFcIj48aW1nIHNyYz1cImh0dHBzOi8vbG9yZW1waXhlbC5jb20vMjUwLzI1MC9uYXR1cmUvNFwiLz4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZiBjZW50ZXItYWxpZ24gdGV4dC10ZWFsIHRleHQtZGFya2VuLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PkVyaWNrPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VEVDSE5JQ0lBTjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57aGVhZGluZ0Rhcmtlbn08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoM3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9me1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwdmggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/Team.js */",
    __self: this
  }));
});

/***/ }),

/***/ 7:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "materialize-css":
/*!**********************************!*\
  !*** external "materialize-css" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("materialize-css");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map