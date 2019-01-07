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
  height: '100%'
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
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.state.selectedPlace.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL01hcENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CIiwiZmlsZSI6Ii9Vc2Vycy9lYnJhaC9Eb2N1bWVudHMvV2ViUHJvamVjdHMvdGVzdGxpbWl0X21hdGVyaWFsaXplL3NyYy9jb21wb25lbnRzL01hcENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXAsIEdvb2dsZUFwaVdyYXBwZXIgLCBJbmZvV2luZG93LCBNYXJrZXJ9IGZyb20gJ2dvb2dsZS1tYXBzLXJlYWN0JztcblxuY29uc3QgbWFwU3R5bGVzID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZXhwb3J0IGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuICAgICAgICBhY3RpdmVNYXJrZXI6IHt9LFxuICAgICAgICBzZWxlY3RlZFBsYWNlOiB7fVxuICAgIH1cblxuICAgIG9uTWFya2VyQ2xpY2sgPSAocHJvcHMsIG1hcmtlciwgZSkgPT5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuICAgICAgYWN0aXZlTWFya2VyOiBtYXJrZXIsXG4gICAgICBzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuICAgIH0pO1xuXG4gIG9uQ2xvc2UgPSBwcm9wcyA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG4gICAgICAgIGFjdGl2ZU1hcmtlcjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFwXG4gICAgICAgIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4gICAgICAgIHpvb209ezE0fVxuICAgICAgICBzdHlsZT17bWFwU3R5bGVzfVxuICAgICAgICBjbGFzc05hbWU9XCJtYXBcIlxuICAgICAgICBpbml0aWFsQ2VudGVyPXt7XG4gICAgICAgICBsYXQ6IC0xLjI4ODQsXG4gICAgICAgICBsbmc6IDM2LjgyMzNcbiAgICAgICAgfX1cblxuICAgICAgPlxuXG4gICAgICA8TWFya2VyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuICAgICAgICAgIG5hbWU9eydLZW55YXR0YSBJbnRlcm5hdGlvbmFsIENvbnZlbnRpb24gQ2VudHJlJ31cbiAgICAgICAgLz5cbiAgICAgICAgPEluZm9XaW5kb3dcbiAgICAgICAgICBtYXJrZXI9e3RoaXMuc3RhdGUuYWN0aXZlTWFya2VyfVxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuc2hvd2luZ0luZm9XaW5kb3d9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND57dGhpcy5zdGF0ZS5zZWxlY3RlZFBsYWNlLm5hbWV9PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9JbmZvV2luZG93PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gICAgICAgIFxuICAgICAgPC9NYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKFxuICAgIChwcm9wcykgPT4gKHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUNTNk1QWTFKNkpfT1ZWZndqdjJ6M21MUUxiSUJpSDEwbydcbiAgfSlcbikoTWFwQ29udGFpbmVyKTsiXX0= */\n/*@ sourceURL=/Users/ebrah/Documents/WebProjects/testlimit_materialize/src/components/MapContainer.js */",
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
//# sourceMappingURL=contact.js.7e676c02dfb219f5ba41.hot-update.js.map