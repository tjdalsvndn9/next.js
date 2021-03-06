webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_type__ = __webpack_require__("./actions/type.js");

var _jsxFileName = "/Users/Sung/Desktop/nextjs/pages/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('working');
    }
  }, {
    key: "render",
    value: function render() {
      var bitcoinData = this.props.bitcoinData;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* Layout */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Bitcoin Prices"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "USD: $", bitcoinData['USD'].rate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "GBP: ", bitcoinData['GBP'].rate), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "EUR: ", bitcoinData['EUR'].rate)));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Object.defineProperty(Index, "getInitialProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    var _value = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
      var store, _ref3, data;

      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store = _ref2.store;
              _context.next = 3;
              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('https://api.coindesk.com/v1/bpi/currentprice.json');

            case 3:
              _ref3 = _context.sent;
              data = _ref3.data;
              store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_5__actions_type__["a" /* FETCH_DATA */],
                payload: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function value(_x) {
      return _value.apply(this, arguments);
    };
  }()
});

function mapStateToProps(_ref) {
  var bitcoin = _ref.bitcoin;
  var bitcoinData = bitcoin.bitcoinData;
  return {
    bitcoinData: bitcoinData
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.8fbb456931737eb4c088.hot-update.js.map