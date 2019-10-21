webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/*! exports provided: Nav, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.tsx");


var _jsxFileName = "/Users/sean/Code/hollyledbetter.com/src/components/Nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var black = '#000';
function Nav(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var AppState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_6__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_6__["AppDispatchContext"]);
  if (!AppState.loaded) dispatch({
    type: 'LOADED'
  });
  console.log(AppState);
  return __jsx(NavStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), children);
}
function Link(_ref2) {
  var href = _ref2.href,
      children = _ref2.children;
  return __jsx(LinkStyled, {
    href: href,
    onClick: function onClick(event) {
      event.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(href);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children);
}
var slideIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{opacity:0;transform:translateX(-10%);}100%{opacity:1;transform:translateX(0);}"]);
var LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "Nav__LinkStyled",
  componentId: "sc-3cpby2-0"
})(["display:block;margin-bottom:2.618em;animation:", " 500ms ease-in-out backwards;text-align:center;flex-grow:1;flex-basis:0;transition:1s;cursor:pointer;border:1px solid ", ";margin:10px;border-radius:5px;padding:10px 5px;min-width:calc(50% - 20px);background:rgb(250,244,242);box-shadow:0 10px 20px -9px ", ",0 -6px 18px -12px ", ";transition:120ms ease-in-out;cursor:pointer;", " @media screen and (min-width:800px){min-width:0px;margin:15px;padding:20px 5px;min-width:100%;}@media screen and (min-width:1100px){min-width:0px;margin:20px;}> svg{display:block;margin:0 auto;transition:500ms;height:10vmin;}&:hover{color:", ";transform:scale(1.0334) rotate(0.33deg);svg{fill:", " !important;*{fill:", " !important;}}}"], slideIn, Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(black, 0.05), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(black, 0.25), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(black, 0.15), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["&:nth-child(", "){animation-delay:", "ms;}"], i, 500 + (i + 1) * 40 - 100 / (i + 1));
}), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(204, 156, 14, 1), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(204, 156, 14, 1), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(204, 156, 14, 1));
var NavStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav.withConfig({
  displayName: "Nav__NavStyled",
  componentId: "sc-3cpby2-1"
})(["font:800 0.5em/1 system-ui;text-transform:uppercase;letter-spacing:0.05em;color:", ";display:flex;flex-wrap:wrap;width:100%;max-width:calc(50vmin + 320px);margin:0 auto;@media screen and (min-width:800px){min-width:760px;}@media screen and (min-width:1100px){color:", ";font:800 0.618em/1 system-ui;min-width:720px;}"], Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(black, 0.8), Object(polished__WEBPACK_IMPORTED_MODULE_4__["rgba"])(black, 0.667));

/***/ })

})
//# sourceMappingURL=index.js.e6395919c56bf4cb2e0e.hot-update.js.map