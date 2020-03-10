webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/style/pages/detail.css */ "./public/style/pages/detail.css");
/* harmony import */ var _public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-navbar */ "./node_modules/markdown-navbar/dist/index.js");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "e:\\MyProgram\\Web\\front\\react\\react-blog\\blog\\pages\\detail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










var MyList = function MyList() {
  var markdown = "# P01:课程介绍和环境搭建\n" + "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" + "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" + "**这是加粗的文字**\n\n" + "*这是倾斜的文字*`\n\n" + "***这是斜体加粗的文字***\n\n" + "~~这是加删除线的文字~~ \n\n" + "`console.log(111)` \n\n" + "# p02:来个Hello World 初始Vue3.0\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n" + "***\n\n\n" + "# p03:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p04:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "#5 p05:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p06:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "# p07:Vue3.0基础知识讲解\n" + "> aaaaaaaaa\n" + ">> bbbbbbbbb\n" + ">>> cccccccccc\n\n" + "``` var a=11; ```";
  return __jsx("div", {
    className: "jsx-2085888330" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Blog"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-left",
    xs: 24,
    sm: 24,
    md: 16,
    lg: 18,
    xl: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u89C6\u9891\u6559\u7A0B")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "xxxx")))), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "React Hooks \u514D\u8D39\u89C6\u9891\u6559\u7A0B(\u517111\u96C6)"), __jsx("div", {
    className: "jsx-2085888330" + " " + "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CalendarOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), "2019-06-28"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FolderOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["FireOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), "5498\u4EBA")), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
    source: markdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offsetTop: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: "article-menu",
    source: markdown,
    headingTopOffset: "0",
    ordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHa0IiLCJmaWxlIjoiZTpcXE15UHJvZ3JhbVxcV2ViXFxmcm9udFxccmVhY3RcXHJlYWN0LWJsb2dcXGJsb2dcXHBhZ2VzXFxkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIEJyZWFkY3J1bWIsIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIEZvbGRlck91dGxpbmVkLFxyXG4gIEZpcmVPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGUvcGFnZXMvZGV0YWlsLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IE1hcmtOYXYgZnJvbSBcIm1hcmtkb3duLW5hdmJhclwiO1xyXG5pbXBvcnQgXCJtYXJrZG93bi1uYXZiYXIvZGlzdC9uYXZiYXIuY3NzXCI7XHJcbmNvbnN0IE15TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBtYXJrZG93biA9XCIjIFAwMTror77nqIvku4vnu43lkoznjq/looPmkK3lu7pcXG5cIitcclxuICBcIlsgKipNKiogXSBhcmtkb3duICsgRSBbICoqZGl0b3IqKiBdID0gKipNZGl0b3IqKiAgXFxuXCIgK1xyXG4gICAgXCI+IE1kaXRvciDmmK/kuIDkuKrnroDmtIHjgIHmmJPkuo7pm4bmiJDjgIHmlrnkvr/mianlsZXjgIHmnJ/mnJvoiJLmnI3nmoTnvJblhpkgbWFya2Rvd24g55qE57yW6L6R5Zmo77yM5LuF5q2k6ICM5beyLi4uIFxcblxcblwiICtcclxuICAgIFwiKirov5nmmK/liqDnspfnmoTmloflrZcqKlxcblxcblwiICtcclxuICAgIFwiKui/meaYr+WAvuaWnOeahOaWh+WtlypgXFxuXFxuXCIgK1xyXG4gICAgXCIqKirov5nmmK/mlpzkvZPliqDnspfnmoTmloflrZcqKipcXG5cXG5cIiArXHJcbiAgICBcIn5+6L+Z5piv5Yqg5Yig6Zmk57q/55qE5paH5a2Xfn4gXFxuXFxuXCIgK1xyXG4gICAgXCJgY29uc29sZS5sb2coMTExKWAgXFxuXFxuXCIgK1xyXG4gICAgXCIjIHAwMjrmnaXkuKpIZWxsbyBXb3JsZCDliJ3lp4tWdWUzLjBcXG5cIiArXHJcbiAgICBcIj4gYWFhYWFhYWFhXFxuXCIgK1xyXG4gICAgXCI+PiBiYmJiYmJiYmJcXG5cIiArXHJcbiAgICBcIj4+PiBjY2NjY2NjY2NjXFxuXCIgK1xyXG4gICAgXCIqKipcXG5cXG5cXG5cIiArXHJcbiAgICBcIiMgcDAzOlZ1ZTMuMOWfuuehgOefpeivhuiusuino1xcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cXG5cIiArXHJcbiAgICBcIiMgcDA0OlZ1ZTMuMOWfuuehgOefpeivhuiusuino1xcblwiICtcclxuICAgIFwiPiBhYWFhYWFhYWFcXG5cIiArXHJcbiAgICBcIj4+IGJiYmJiYmJiYlxcblwiICtcclxuICAgIFwiPj4+IGNjY2NjY2NjY2NcXG5cXG5cIiArXHJcbiAgICBcIiM1IHAwNTpWdWUzLjDln7rnoYDnn6Xor4borrLop6NcXG5cIiArXHJcbiAgICBcIj4gYWFhYWFhYWFhXFxuXCIgK1xyXG4gICAgXCI+PiBiYmJiYmJiYmJcXG5cIiArXHJcbiAgICBcIj4+PiBjY2NjY2NjY2NjXFxuXFxuXCIgK1xyXG4gICAgXCIjIHAwNjpWdWUzLjDln7rnoYDnn6Xor4borrLop6NcXG5cIiArXHJcbiAgICBcIj4gYWFhYWFhYWFhXFxuXCIgK1xyXG4gICAgXCI+PiBiYmJiYmJiYmJcXG5cIiArXHJcbiAgICBcIj4+PiBjY2NjY2NjY2NjXFxuXFxuXCIgK1xyXG4gICAgXCIjIHAwNzpWdWUzLjDln7rnoYDnn6Xor4borrLop6NcXG5cIiArXHJcbiAgICBcIj4gYWFhYWFhYWFhXFxuXCIgK1xyXG4gICAgXCI+PiBiYmJiYmJiYmJcXG5cIiArXHJcbiAgICBcIj4+PiBjY2NjY2NjY2NjXFxuXFxuXCIgK1xyXG4gICAgXCJgYGAgdmFyIGE9MTE7IGBgYFwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbW0tbWFpblwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb21tLWxlZnRcIiB4cz17MjR9IHNtPXsyNH0gbWQ9ezE2fSBsZz17MTh9IHhsPXsxNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWQtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPummlumhtTwvYT5cclxuICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGE+6KeG6aKR5pWZ56iLPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YT54eHh4PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtdGl0bGVcIj5SZWFjdCBIb29rcyDlhY3otLnop4bpopHmlZnnqIso5YWxMTHpm4YpPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pY29uIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPENhbGVuZGFyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDIwMTktMDYtMjhcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8Rm9sZGVyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIOinhumikeaVmeeoi1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxGaXJlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDU0OTjkurpcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bn0+PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb21tLXJpZ2h0XCIgeHM9ezB9IHNtPXswfSBtZD17N30gbGc9ezV9IHhsPXs0fT5cclxuICAgICAgICAgICAgPEFmZml4IG9mZnNldFRvcD17NX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbmF2IGNvbW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10aXRsZVwiPuaWh+eroOebruW9lTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtOYXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgc291cmNlPXttYXJrZG93bn1cclxuICAgICAgICAgICAgICAgICAgaGVhZGluZ1RvcE9mZnNldD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICBvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQWZmaXg+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=e:\\\\MyProgram\\\\Web\\\\front\\\\react\\\\react-blog\\\\blog\\\\pages\\\\detail.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MyList);

/***/ })

})
//# sourceMappingURL=detail.js.ba11629db9d2cb2561e1.hot-update.js.map