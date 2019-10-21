webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/pages/Contact.tsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.tsx ***!
  \*******************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./src/components/index.tsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/pages/icons/index.tsx");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors */ "./src/colors.ts");


var _jsxFileName = "/Users/sean/Code/hollyledbetter.com/src/pages/Contact.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Method = function Method(_ref) {
  var href = _ref.href,
      icon = _ref.icon,
      time = _ref.time,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["href", "icon", "time", "children"]);

  return __jsx(MethodStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: href
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, icon), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children), __jsx(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "average response time"), __jsx(Wait, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "24"), time));
};

var MethodStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "Contact__MethodStyled",
  componentId: "v63wqn-0"
})(["background:rgb(250,244,242);box-shadow:0 10px 20px -9px rgba(0,0,0,0.25);transition:120ms ease-in-out;cursor:pointer;padding:30px;margin:20px 20px 0;float:left;border-radius:5px;width:100%;text-align:center;width:calc(50% - 40px);min-width:300px;min-height:235px;&:hover{transform:scale(1.0334) rotate(0.33deg);}"]);
var Methods = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contact__Methods",
  componentId: "v63wqn-1"
})(["display:flex;flex-wrap:wrap;justify-content:center;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contact__Icon",
  componentId: "v63wqn-2"
})(["width:50px;display:block;margin:0 auto;+ span{font:800 0.809em/1 system-ui;font-weight:800;letter-spacing:0px;color:", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_6__["rgba"])(_colors__WEBPACK_IMPORTED_MODULE_7__["black"], 0.75));
var Time = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contact__Time",
  componentId: "v63wqn-3"
})(["display:block;font:800 0.382em/1 system-ui;color:", ";margin:30px 10px 0px;padding:0 0 8px;border-bottom:1px dashed ", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_6__["rgba"])(_colors__WEBPACK_IMPORTED_MODULE_7__["black"], 0.2), Object(polished__WEBPACK_IMPORTED_MODULE_6__["rgba"])(_colors__WEBPACK_IMPORTED_MODULE_7__["black"], 0.1));
var Wait = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Contact__Wait",
  componentId: "v63wqn-4"
})(["display:block;font:800 0.5em/1 system-ui;padding:5px 0;> span{font:800 2.618em/1 system-ui;display:inline;padding:0 5px;}"]);
var Contact = function Contact() {
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    title: "Contact",
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Lets's practice! Please feel free to contact me via email or phone."), __jsx(ContactStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(Methods, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(Method, {
    href: "mailto:hollymledbetter@gmail.com",
    icon: __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Email"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }),
    time: "hours",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "hollymledbetter@gmail.com"), __jsx(Method, {
    href: "tel:1-425-301-7015",
    icon: __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Phone"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }),
    time: "hours",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "1-425-301-7015"), __jsx(Method, {
    href: "https://en.wikipedia.org/wiki/Homing_pigeon",
    target: "_blank",
    icon: __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Pigeon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }),
    time: "days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "carrier pigeon"), __jsx(Method, {
    href: "https://en.wikipedia.org/wiki/Message_in_a_bottle",
    target: "_blank",
    icon: __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["Bottle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }),
    time: "years",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "message in a bottle")), __jsx("img", {
    src: "/static/4.jpg",
    style: {
      width: '600px',
      margin: '3rem auto -14rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })));
};
var ContactStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Contact__ContactStyled",
  componentId: "v63wqn-5"
})(["max-width:45rem;text-align:center;margin:0 auto;svg{max-width:5rem;}"]);

/***/ })

})
//# sourceMappingURL=contact.js.b71a8cfc575408fea031.hot-update.js.map