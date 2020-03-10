webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./config/aipUrl.js":
/*!**************************!*\
  !*** ./config/aipUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ipUrl = "http://127.0.0.1:7002/default/";
var servicePath = {
  getArticleList: ipUrl + "getArticleList",
  getArticleById: ipUrl + "getArticleById/"
};
/* harmony default export */ __webpack_exports__["default"] = (servicePath);

/***/ }),

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
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! markdown-navbar */ "./node_modules/markdown-navbar/dist/index.js");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js/styles/monokai-sublime.css */ "./node_modules/highlight.js/styles/monokai-sublime.css");
/* harmony import */ var highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_monokai_sublime_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_aipUrl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/aipUrl */ "./config/aipUrl.js");






var _jsxFileName = "e:\\MyProgram\\Web\\front\\react\\react-blog\\blog\\pages\\detail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;













var Detail = function Detail(props) {
  var data = props.data[0];
  var renderer = new marked__WEBPACK_IMPORTED_MODULE_15___default.a.Renderer();
  marked__WEBPACK_IMPORTED_MODULE_15___default.a.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function highlight(code) {
      return highlight_js__WEBPACK_IMPORTED_MODULE_16___default.a.highlightAuto(code).value;
    }
  });
  var html = marked__WEBPACK_IMPORTED_MODULE_15___default()(data.article_content);
  return __jsx("div", {
    className: "jsx-2085888330" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, data.title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "comm-main",
    type: "flex",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u89C6\u9891\u6559\u7A0B")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "xxxx")))), __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "jsx-2085888330" + " " + "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CalendarOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), data.addTime), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FolderOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), data.typeName), __jsx("span", {
    className: "jsx-2085888330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["FireOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), data.view_count, "\u4EBA")), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    className: "jsx-2085888330" + " " + "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(antd_lib_affix__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offsetTop: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "detail-nav comm-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2085888330" + " " + "nav-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u6587\u7AE0\u76EE\u5F55"), __jsx(markdown_navbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: "article-menu",
    source: data.article_content,
    headingTopOffset: 0,
    ordered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGa0IiLCJmaWxlIjoiZTpcXE15UHJvZ3JhbVxcV2ViXFxmcm9udFxccmVhY3RcXHJlYWN0LWJsb2dcXGJsb2dcXHBhZ2VzXFxkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIEJyZWFkY3J1bWIsIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIEZvbGRlck91dGxpbmVkLFxyXG4gIEZpcmVPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvc3R5bGUvcGFnZXMvZGV0YWlsLmNzc1wiO1xyXG5pbXBvcnQgTWFya05hdiBmcm9tIFwibWFya2Rvd24tbmF2YmFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XHJcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcclxuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9tb25va2FpLXN1YmxpbWUuY3NzXCI7XHJcbmltcG9ydCBzZXJ2aWNlUGF0aCBmcm9tICcuLi9jb25maWcvYWlwVXJsJ1xyXG5jb25zdCBEZXRhaWwgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFbMF07XHJcbiAgY29uc3QgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKCk7XHJcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgcmVuZGVyZXI6IHJlbmRlcmVyLFxyXG4gICAgZ2ZtOiB0cnVlLFxyXG4gICAgcGVkYW50aWM6IGZhbHNlLFxyXG4gICAgc2FuaXRpemU6IGZhbHNlLFxyXG4gICAgdGFibGVzOiB0cnVlLFxyXG4gICAgYnJlYWtzOiBmYWxzZSxcclxuICAgIHNtYXJ0TGlzdHM6IHRydWUsXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlKS52YWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuICBsZXQgaHRtbCA9IG1hcmtlZChkYXRhLmFydGljbGVfY29udGVudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2RhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY29tbS1tYWluXCIgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbW0tbGVmdFwiIHhzPXsyNH0gc209ezI0fSBtZD17MTZ9IGxnPXsxOH0geGw9ezE0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZC1kaXZcIj5cclxuICAgICAgICAgICAgICA8QnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+6aaW6aG1PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YT7op4bpopHmlZnnqIs8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPnh4eHg8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC10aXRsZVwiPntkYXRhLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaWNvbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxDYWxlbmRhck91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5hZGRUaW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxGb2xkZXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudHlwZU5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPEZpcmVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudmlld19jb3VudH3kurpcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOmh0bWx9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29tbS1yaWdodFwiIHhzPXswfSBzbT17MH0gbWQ9ezd9IGxnPXs1fSB4bD17NH0+XHJcbiAgICAgICAgICAgIDxBZmZpeCBvZmZzZXRUb3A9ezV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLW5hdiBjb21tLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGl0bGVcIj7mlofnq6Dnm67lvZU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNYXJrTmF2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgIHNvdXJjZT17ZGF0YS5hcnRpY2xlX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmdUb3BPZmZzZXQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgIG9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9BZmZpeD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG4gIGxldCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XHJcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChzZXJ2aWNlUGF0aC5nZXRBcnRpY2xlQnlJZCArIGlkKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIl19 */\n/*@ sourceURL=e:\\\\MyProgram\\\\Web\\\\front\\\\react\\\\react-blog\\\\blog\\\\pages\\\\detail.js */"));
};

Detail.getInitialProps = function _callee(context) {
  var id, promise;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
            axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(_config_aipUrl__WEBPACK_IMPORTED_MODULE_18__["default"].getArticleById + id).then(function (res) {
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
//# sourceMappingURL=detail.js.acb0acae7f1a50717b0c.hot-update.js.map