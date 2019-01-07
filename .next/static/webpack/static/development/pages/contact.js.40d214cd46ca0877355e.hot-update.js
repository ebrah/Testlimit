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
  height: '5'
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
        css: ".map.jsx-9302926{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL01hcENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CLEFBRytCLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZWJyYWgvRG9jdW1lbnRzL1dlYlByb2plY3RzL3Rlc3RsaW1pdF9tYXRlcmlhbGl6ZS9zcmMvY29tcG9uZW50cy9NYXBDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwLCBHb29nbGVBcGlXcmFwcGVyICwgSW5mb1dpbmRvdywgTWFya2VyfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XG5cbmNvbnN0IG1hcFN0eWxlcyA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnNSdcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcbiAgICAgICAgYWN0aXZlTWFya2VyOiB7fSxcbiAgICAgICAgc2VsZWN0ZWRQbGFjZToge31cbiAgICB9XG5cbiAgICBvbk1hcmtlckNsaWNrID0gKHByb3BzLCBtYXJrZXIsIGUpID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFBsYWNlOiBwcm9wcyxcbiAgICAgIGFjdGl2ZU1hcmtlcjogbWFya2VyLFxuICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IHRydWVcbiAgICB9KTtcblxuICBvbkNsb3NlID0gcHJvcHMgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuICAgICAgICBhY3RpdmVNYXJrZXI6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcFxuICAgICAgICBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICB6b29tPXsxNH1cbiAgICAgICAgc3R5bGU9e21hcFN0eWxlc31cbiAgICAgICAgY2xhc3NOYW1lPVwibWFwXCJcbiAgICAgICAgaW5pdGlhbENlbnRlcj17e1xuICAgICAgICAgbGF0OiAtMS4yODg0LFxuICAgICAgICAgbG5nOiAzNi44MjMzXG4gICAgICAgIH19XG5cbiAgICAgID5cblxuICAgICAgPE1hcmtlclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cbiAgICAgICAgICBuYW1lPXsnS2VueWF0dGEgSW50ZXJuYXRpb25hbCBDb252ZW50aW9uIENlbnRyZSd9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmZvV2luZG93XG4gICAgICAgICAgbWFya2VyPXt0aGlzLnN0YXRlLmFjdGl2ZU1hcmtlcn1cbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFjZS5uYW1lfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW5mb1dpbmRvdz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1hcHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgXG4gICAgICA8L01hcD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZUFwaVdyYXBwZXIoXG4gICAgKHByb3BzKSA9PiAoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5Q1M2TVBZMUo2Sl9PVlZmd2p2MnozbUxRTGJJQmlIMTBvJ1xuICB9KVxuKShNYXBDb250YWluZXIpOyJdfQ== */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/MapContainer.js */",
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
//# sourceMappingURL=contact.js.40d214cd46ca0877355e.hot-update.js.map