webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/style/pages/detail.css */ "./public/style/pages/detail.css");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! markdown-navbar */ "./node_modules/markdown-navbar/dist/index.js");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);






var _jsxFileName = "e:\\MyProgram\\Web\\front\\react\\react-blog\\blog\\pages\\detail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











var Detail = function Detail(props) {
  var data = props.data[0];
  var markdown = data.article_content;
  return __jsx("div", {
    className: "jsx-2085888330" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Blog"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "comm-left",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u89C6\u9891\u6559\u7A0B")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "xxxx")))), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "React Hooks \u514D\u8D39\u89C6\u9891\u6559\u7A0B(\u517111\u96C6)"), __jsx("div", {
    className: "jsx-2085888330" + " " + "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CalendarOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "2019-06-28"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FolderOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FireOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "5498\u4EBA")), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
    source: markdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offsetTop: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: "article-menu",
    source: markdown,
    headingTopOffset: "0",
    ordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFa0IiLCJmaWxlIjoiZTpcXE15UHJvZ3JhbVxcV2ViXFxmcm9udFxccmVhY3RcXHJlYWN0LWJsb2dcXGJsb2dcXHBhZ2VzXFxkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIEJyZWFkY3J1bWIsIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIEZvbGRlck91dGxpbmVkLFxyXG4gIEZpcmVPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGUvcGFnZXMvZGV0YWlsLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IE1hcmtOYXYgZnJvbSBcIm1hcmtkb3duLW5hdmJhclwiO1xyXG5pbXBvcnQgXCJtYXJrZG93bi1uYXZiYXIvZGlzdC9uYXZiYXIuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGF0YT1wcm9wcy5kYXRhWzBdXHJcbiAgY29uc3QgbWFya2Rvd24gPVxyXG4gICBkYXRhLmFydGljbGVfY29udGVudFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbW0tbWFpblwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb21tLWxlZnRcIiB4cz17MjR9IHNtPXsyNH0gbWQ9ezE2fSBsZz17MTh9IHhsPXsxNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWQtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPummlumhtTwvYT5cclxuICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGE+6KeG6aKR5pWZ56iLPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YT54eHh4PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SZWFjdCBIb29rcyDlhY3otLnop4bpopHmlZnnqIso5YWxMTHpm4YpPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pY29uIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPENhbGVuZGFyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDIwMTktMDYtMjhcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8Rm9sZGVyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIOinhumikeaVmeeoi1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxGaXJlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDU0OTjkurpcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bn0+PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb21tLXJpZ2h0XCIgeHM9ezB9IHNtPXswfSBtZD17N30gbGc9ezV9IHhsPXs0fT5cclxuICAgICAgICAgICAgPEFmZml4IG9mZnNldFRvcD17NX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbmF2IGNvbW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPuaWh+eroOebruW9lTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtOYXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgc291cmNlPXttYXJrZG93bn1cclxuICAgICAgICAgICAgICAgICAgaGVhZGluZ1RvcE9mZnNldD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICBvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQWZmaXg+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuICBsZXQgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjcwMDIvZGVmYXVsdC9nZXRBcnRpY2xlQnlJZC9cIiArIGlkKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIl19 */\n/*@ sourceURL=e:\\\\MyProgram\\\\Web\\\\front\\\\react\\\\react-blog\\\\blog\\\\pages\\\\detail.js */"));
};

Detail.getInitialProps = function _callee(context) {
  var id, promise;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
            axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("http://127.0.0.1:7002/default/getArticleById/" + id).then(function (res) {
              resolve(res.data);
            });
          });
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise);

        case 4:
          return _context.abrupt("return", _context.sent);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.4c58cbc330216cc39e2d.hot-update.js.map