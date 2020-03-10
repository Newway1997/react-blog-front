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











var Detail = function Detail() {
  var markdown = " # P01:课程介绍和环境搭建\n" + "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" + "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" + "**这是加粗的文字**\n\n" + "*这是倾斜的文字*`\n\n" + "***这是斜体加粗的文字***\n\n" + "~~这是加删除线的文字~~ \n\n" + "`console.log(111)` \n\n" + "# p02:来个Hello World 初始Vue3.0\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n" + "***\n\n\n" + "# p03:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p04:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "#5 p05:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p06:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p07:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "``` var a=11; ```";
  return __jsx("div", {
    className: "jsx-2085888330" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Blog"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u89C6\u9891\u6559\u7A0B")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "xxxx")))), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "React Hooks \u514D\u8D39\u89C6\u9891\u6559\u7A0B(\u517111\u96C6)"), __jsx("div", {
    className: "jsx-2085888330" + " " + "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CalendarOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "2019-06-28"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FolderOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FireOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "5498\u4EBA")), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
    source: markdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 94
    },
    __self: this
  }, __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offsetTop: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: "article-menu",
    source: markdown,
    headingTopOffset: "0",
    ordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHa0IiLCJmaWxlIjoiZTpcXE15UHJvZ3JhbVxcV2ViXFxmcm9udFxccmVhY3RcXHJlYWN0LWJsb2dcXGJsb2dcXHBhZ2VzXFxkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIEJyZWFkY3J1bWIsIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIEZvbGRlck91dGxpbmVkLFxyXG4gIEZpcmVPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGUvcGFnZXMvZGV0YWlsLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IE1hcmtOYXYgZnJvbSBcIm1hcmtkb3duLW5hdmJhclwiO1xyXG5pbXBvcnQgXCJtYXJrZG93bi1uYXZiYXIvZGlzdC9uYXZiYXIuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3QgRGV0YWlsID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1hcmtkb3duID1cclxuICAgIFwiICMgUDAxOuivvueoi+S7i+e7jeWSjOeOr+Wig+aQreW7ulxcblwiICtcclxuICAgIFwiWyAqKk0qKiBdIGFya2Rvd24gKyBFIFsgKipkaXRvcioqIF0gPSAqKk1kaXRvcioqICBcXG5cIiArXHJcbiAgICBcIj4gTWRpdG9yIOaYr+S4gOS4queugOa0geOAgeaYk+S6jumbhuaIkOOAgeaWueS+v+aJqeWxleOAgeacn+acm+iIkuacjeeahOe8luWGmSBtYXJrZG93biDnmoTnvJbovpHlmajvvIzku4XmraTogIzlt7IuLi4gXFxuXFxuXCIgK1xyXG4gICAgXCIqKui/meaYr+WKoOeyl+eahOaWh+WtlyoqXFxuXFxuXCIgK1xyXG4gICAgXCIq6L+Z5piv5YC+5pac55qE5paH5a2XKmBcXG5cXG5cIiArXHJcbiAgICBcIioqKui/meaYr+aWnOS9k+WKoOeyl+eahOaWh+WtlyoqKlxcblxcblwiICtcclxuICAgIFwifn7ov5nmmK/liqDliKDpmaTnur/nmoTmloflrZd+fiBcXG5cXG5cIiArXHJcbiAgICBcImBjb25zb2xlLmxvZygxMTEpYCBcXG5cXG5cIiArXHJcbiAgICBcIiMgcDAyOuadpeS4qkhlbGxvIFdvcmxkIOWIneWni1Z1ZTMuMFxcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cIiArXHJcbiAgICBcIioqKlxcblxcblxcblwiICtcclxuICAgIFwiIyBwMDM6VnVlMy4w5Z+656GA55+l6K+G6K6y6KejXFxuXCIgK1xyXG4gICAgXCI+IGFhYWFhYWFhYVxcblwiICtcclxuICAgIFwiPj4gYmJiYmJiYmJiXFxuXCIgK1xyXG4gICAgXCI+Pj4gY2NjY2NjY2NjY1xcblxcblwiICtcclxuICAgIFwiIyBwMDQ6VnVlMy4w5Z+656GA55+l6K+G6K6y6KejXFxuXCIgK1xyXG4gICAgXCI+IGFhYWFhYWFhYVxcblwiICtcclxuICAgIFwiPj4gYmJiYmJiYmJiXFxuXCIgK1xyXG4gICAgXCI+Pj4gY2NjY2NjY2NjY1xcblxcblwiICtcclxuICAgIFwiIzUgcDA1OlZ1ZTMuMOWfuuehgOefpeivhuiusuino1xcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cXG5cIiArXHJcbiAgICBcIiMgcDA2OlZ1ZTMuMOWfuuehgOefpeivhuiusuino1xcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cXG5cIiArXHJcbiAgICBcIiMgcDA3OlZ1ZTMuMOWfuuehgOefpeivhuiusuino1xcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cXG5cIiArXHJcbiAgICBcImBgYCB2YXIgYT0xMTsgYGBgXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CbG9nPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY29tbS1tYWluXCIgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbW0tbGVmdFwiIHhzPXsyNH0gc209ezI0fSBtZD17MTZ9IGxnPXsxOH0geGw9ezE0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZC1kaXZcIj5cclxuICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+6aaW6aG1PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YT7op4bpopHmlZnnqIs8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPnh4eHg8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPlJlYWN0IEhvb2tzIOWFjei0ueinhumikeaVmeeoiyjlhbExMembhik8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWljb24gY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgMjAxOS0wNi0yOFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxGb2xkZXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAg6KeG6aKR5pWZ56iLXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPEZpcmVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgNTQ5OOS6ulxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e21hcmtkb3dufT48L1JlYWN0TWFya2Rvd24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbW0tcmlnaHRcIiB4cz17MH0gc209ezB9IG1kPXs3fSBsZz17NX0geGw9ezR9PlxyXG4gICAgICAgICAgICA8QWZmaXggb2Zmc2V0VG9wPXs1fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1uYXYgY29tbS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXRpdGxlXCI+5paH56ug55uu5b2VPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TWFya05hdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICBzb3VyY2U9e21hcmtkb3dufVxyXG4gICAgICAgICAgICAgICAgICBoZWFkaW5nVG9wT2Zmc2V0PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9BZmZpeD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG4gIGxldCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XHJcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6NzAwMi9kZWZhdWx0L2dldEFydGljbGVCeUlkL1wiICsgaWQpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhd2FpdCBwcm9taXNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iXX0= */\n/*@ sourceURL=e:\\\\MyProgram\\\\Web\\\\front\\\\react\\\\react-blog\\\\blog\\\\pages\\\\detail.js */"));
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
//# sourceMappingURL=detail.js.fce0bbe41edb02767b9e.hot-update.js.map