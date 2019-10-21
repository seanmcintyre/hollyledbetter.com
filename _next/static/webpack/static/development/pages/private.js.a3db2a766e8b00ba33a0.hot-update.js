webpackHotUpdate("static/development/pages/private.js",{

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.tsx");


var _jsxFileName = "/Users/sean/Code/hollyledbetter.com/src/components/Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Footer(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__["AppContext"]),
      quote = _useContext.quote;

  console.log(quote);
  return __jsx("footer", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(Wave, {
    viewBox: "0 0 1000 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("path", {
    className: "st0",
    d: "M-7,73.3c0,0,134-40.7,245.3-15.5c174,39.4,280,38.2,434.7-29.7c157.7-69.2,351,28.8,351,28.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(Quote, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(FooterLink, {
    link: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(FooterLink, {
    link: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(FooterLink, {
    link: "private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(FooterLink, {
    link: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(FooterLink, {
    link: "resources",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
}
var Wave = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].svg.withConfig({
  displayName: "Footer__Wave",
  componentId: "sadmg9-0"
})([".st0{fill:none;stroke:#000000;stroke-miterlimit:10;}"]);

function FooterLink(_ref) {
  var link = _ref.link,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["link"]);

  return __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    href: '/' + link,
    onClick: function onClick(event) {
      event.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/' + link);
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), link, ".");
}

function Quote(props) {
  return __jsx(QuoteStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(TextStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Don\u2019t try to be the fastest."), __jsx(Author, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Ch\xF6gyam Trungpa"));
}

var QuoteStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Footer__QuoteStyled",
  componentId: "sadmg9-1"
})(["max-width:600px;margin:20px auto;position:relative;display:block;padding:0 30px;"]);
var TextStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "Footer__TextStyled",
  componentId: "sadmg9-2"
})(["display:block;font-weight:300;font-size:25px;border-bottom:1px solid rgba(0,0,0,0.1);padding:10px 0;letter-spacing:-0.167px;color:rgba(0,0,0,0.667);line-height:1.5;width:100%;"]);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "Footer__Author",
  componentId: "sadmg9-3"
})(["display:block;font-size:25px;padding:10px 0;line-height:1.5;font-weight:800;text-align:right;letter-spacing:0.167px;color:#000;width:100%;"]);

/***/ })

})
//# sourceMappingURL=private.js.a3db2a766e8b00ba33a0.hot-update.js.map