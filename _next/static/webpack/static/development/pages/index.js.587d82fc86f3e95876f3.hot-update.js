webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Page.tsx":
/*!*********************************!*\
  !*** ./src/components/Page.tsx ***!
  \*********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/icons */ "./src/pages/icons/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./src/styles.ts");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.tsx");


var _jsxFileName = "/Users/sean/Code/hollyledbetter.com/src/components/Page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Page = function Page(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'NYC' : _ref$title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "title"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Holly Ledbetter Yoga | ", title)), __jsx(AppStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: "landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Logo, {
    src: "/static/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: "/bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_pages_icons__WEBPACK_IMPORTED_MODULE_6__["Holly"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "Holly"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: "/schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_pages_icons__WEBPACK_IMPORTED_MODULE_6__["Schedule"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "Schedule"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: "/private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_pages_icons__WEBPACK_IMPORTED_MODULE_6__["Private"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "Private"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_pages_icons__WEBPACK_IMPORTED_MODULE_6__["Contact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "Get in touch"), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    href: "/resources",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_pages_icons__WEBPACK_IMPORTED_MODULE_6__["Resources"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "Resources"))), __jsx(PageStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), children), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(Wave, {
    viewBox: "0 0 1000 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("path", {
    className: "st0",
    d: "M-7,73.3c0,0,134-40.7,245.3-15.5c174,39.4,280,38.2,434.7-29.7c157.7-69.2,351,28.8,351,28.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("a", {
    href: "/bio",
    onClick: function onClick(event) {
      event.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/bio');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "bio."), __jsx("a", {
    href: "/schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "schedule."), __jsx("a", {
    href: "/private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "private."), __jsx("a", {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "contact."), __jsx("a", {
    href: "/resources",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "resources.")))));
};
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Page__Logo",
  componentId: "g02hmt-0"
})(["width:140px;height:140px;padding:20px;border-radius:50%;transition:210ms;border:1px solid rgba(#fff,0);cursor:pointer;&:hover{background:rgba(#fff,0.2);border:1px solid rgba(#fff,0.667);transform:scale(1.0334) rotate(3deg) translateY(-2px);}"]);
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var PageStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].article.withConfig({
  displayName: "Page__PageStyled",
  componentId: "g02hmt-1"
})(["animation:300ms ", " ease-in-out;min-height:calc(100vh - 200px);max-width:60rem;margin:0 auto;img{display:block;width:100%;}"], fadeIn);
var Wave = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].svg.withConfig({
  displayName: "Page__Wave",
  componentId: "g02hmt-2"
})([".st0{fill:none;stroke:#000000;stroke-miterlimit:10;}"]);
var AppStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Page__AppStyled",
  componentId: "g02hmt-3"
})([".landing{padding:10px 50px 30px;position:relative;z-index:100;text-align:left;background:rgb(244,239,233);width:100%;text-align:center;@media screen and (min-width:800px){padding:50px;}stroke-width:70;}*/ h1{font:700 1.618em/1.334 system-ui;margin-bottom:0.618em;color:rgba(black,0.667);max-width:800px;margin:0.618em auto;}}footer{padding:10px 30px;> div{max-width:600px;margin:80px auto 50px;display:flex;position:relative;flex-wrap:wrap;cursor:pointer;a{min-width:50%;display:block;padding:10px 5px;font:600 1em/1em system-ui;margin-bottom:0.618em;border-bottom:3px inset rgba(#000,0);cursor:pointer;transition:80ms;&:hover{border-bottom:3px inset rgba(#000,0.334);}}}a:visited{color:#000;}}.instagram{display:flex;width:100%;background:white;> a{display:inline-block;margin:0;min-width:20%;width:20%;img{max-width:100%;}}}.home-page{max-width:800px;margin:20px auto -70px;display:block;text-align:center;video{width:100%;opacity:0.3334;pointer-events:none;}.home-imgs{@media screen and (min-width:640px){box-shadow:0 0 20px 0 rgba(#000,0.05),0 10px 20px -10px rgba(#000,0.15);display:flex;}}img{display:block;align-self:center;border-radius:3px;margin:20px auto 20px;max-width:300px;box-shadow:0 0 20px 0 rgba(#000,0.05),0 10px 20px -10px rgba(#000,0.15);@media screen and (min-width:640px){margin:0;box-shadow:none;width:50%;max-width:400px;&:nth-child(1){border-radius:3px 0 0 3px;}&:nth-child(2){border-radius:0 3px 3px 0;}}}}"]);

/***/ })

})
//# sourceMappingURL=index.js.587d82fc86f3e95876f3.hot-update.js.map