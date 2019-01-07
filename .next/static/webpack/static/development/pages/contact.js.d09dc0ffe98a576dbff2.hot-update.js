webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/components/MapContainer.js":
/*!****************************************!*\
  !*** ./src/components/MapContainer.js ***!
  \****************************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/MapContainer.js";


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



var mapStyles = {
  width: '100%',
  height: '10rem'
};
var MapContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(MapContainer, _Component);

  function MapContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMarkerClick", function (props, marker, e) {
      return _this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function (props) {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    return _this;
  }

  _createClass(MapContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_2__["Map"], {
        google: this.props.google,
        zoom: 14,
        style: mapStyles,
        className: "map",
        initialCenter: {
          lat: -1.2884,
          lng: 36.8233
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
        onClick: this.onMarkerClick,
        name: 'Kenyatta International Convention Centre',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_2__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        onClose: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-9302926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-9302926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.state.selectedPlace.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "9302926",
        css: ".map.jsx-9302926{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL01hcENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CLEFBRytCLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZWJyYWgvRG9jdW1lbnRzL1dlYlByb2plY3RzL3Rlc3RsaW1pdF9tYXRlcmlhbGl6ZS9zcmMvY29tcG9uZW50cy9NYXBDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwLCBHb29nbGVBcGlXcmFwcGVyICwgSW5mb1dpbmRvdywgTWFya2VyfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XG5cbmNvbnN0IG1hcFN0eWxlcyA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTByZW0nXG59O1xuXG5leHBvcnQgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG4gICAgICAgIGFjdGl2ZU1hcmtlcjoge30sXG4gICAgICAgIHNlbGVjdGVkUGxhY2U6IHt9XG4gICAgfVxuXG4gICAgb25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyLCBlKSA9PlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRQbGFjZTogcHJvcHMsXG4gICAgICBhY3RpdmVNYXJrZXI6IG1hcmtlcixcbiAgICAgIHNob3dpbmdJbmZvV2luZG93OiB0cnVlXG4gICAgfSk7XG5cbiAgb25DbG9zZSA9IHByb3BzID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcbiAgICAgICAgYWN0aXZlTWFya2VyOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNYXBcbiAgICAgICAgZ29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cbiAgICAgICAgem9vbT17MTR9XG4gICAgICAgIHN0eWxlPXttYXBTdHlsZXN9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1hcFwiXG4gICAgICAgIGluaXRpYWxDZW50ZXI9e3tcbiAgICAgICAgIGxhdDogLTEuMjg4NCxcbiAgICAgICAgIGxuZzogMzYuODIzM1xuICAgICAgICB9fVxuXG4gICAgICA+XG5cbiAgICAgIDxNYXJrZXJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG4gICAgICAgICAgbmFtZT17J0tlbnlhdHRhIEludGVybmF0aW9uYWwgQ29udmVudGlvbiBDZW50cmUnfVxuICAgICAgICAvPlxuICAgICAgICA8SW5mb1dpbmRvd1xuICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XG4gICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93aW5nSW5mb1dpbmRvd31cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhY2UubmFtZX08L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0luZm9XaW5kb3c+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYXB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgPC9NYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKFxuICAgIChwcm9wcykgPT4gKHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUNTNk1QWTFKNkpfT1ZWZndqdjJ6M21MUUxiSUJpSDEwbydcbiAgfSlcbikoTWFwQ29udGFpbmVyKTsiXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/MapContainer.js */",
        __self: this
      }));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_2__["GoogleApiWrapper"])(function (props) {
  return {
    apiKey: 'AIzaSyCS6MPY1J6J_OVVfwjv2z3mLQLbIBiH10o'
  };
})(MapContainer));

/***/ })

})
//# sourceMappingURL=contact.js.d09dc0ffe98a576dbff2.hot-update.js.map