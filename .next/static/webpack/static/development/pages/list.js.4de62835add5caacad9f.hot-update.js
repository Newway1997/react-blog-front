webpackHotUpdate("static\\development\\pages\\list.js",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
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
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _public_style_pages_list_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/style/pages/list.css */ "./public/style/pages/list.css");
/* harmony import */ var _public_style_pages_list_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_style_pages_list_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config_aipUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/aipUrl */ "./config/aipUrl.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Author */ "./components/Author.js");
/* harmony import */ var _components_Advert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Advert */ "./components/Advert.js");






var _jsxFileName = "e:\\MyProgram\\Web\\front\\react\\react-blog\\blog\\pages\\list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;











var MyList = function MyList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(props.data),
      mylist = _useState[0],
      setMyList = _useState[1];

  console.log(mylist);
  return __jsx("div", {
    className: "jsx-2085888330" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "\u89C6\u9891\u6559\u7A0B")))), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    header: __jsx("div", {
      className: "jsx-2085888330",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "\u6700\u65B0\u65E5\u5FD7"),
    itemLayout: "vertical",
    dataSource: mylist,
    renderItem: function renderItem(item) {
      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2085888330" + " " + "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, item.title), __jsx("div", {
        className: "jsx-2085888330" + " " + "list-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["CalendarOutlined"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), "2019-06-28"), __jsx("span", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["FolderOutlined"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["FireOutlined"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), "5864\u4EBA")), __jsx("div", {
        className: "jsx-2085888330" + " " + "list-context",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, item.context));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "comm-right",
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_components_Advert__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWtCIiwiZmlsZSI6ImU6XFxNeVByb2dyYW1cXFdlYlxcZnJvbnRcXHJlYWN0XFxyZWFjdC1ibG9nXFxibG9nXFxwYWdlc1xcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IFwiLi4vcHVibGljL3N0eWxlL3BhZ2VzL2xpc3QuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHNlcnZpY2VQYXRoIGZyb20gXCIuLi9jb25maWcvYWlwVXJsXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FsZW5kYXJPdXRsaW5lZCxcclxuICBGb2xkZXJPdXRsaW5lZCxcclxuICBGaXJlT3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRob3JcIjtcclxuaW1wb3J0IEFkdmVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZHZlcnRcIjtcclxuXHJcbmNvbnN0IE15TGlzdCA9IHByb3BzID0+IHtcclxuICBjb25zdCBbbXlsaXN0LCBzZXRNeUxpc3RdID0gdXNlU3RhdGUocHJvcHMuZGF0YSk7XHJcbiAgY29uc29sZS5sb2cobXlsaXN0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbW0tbWFpblwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb21tLWxlZnRcIiB4cz17MjR9IHNtPXsyNH0gbWQ9ezE2fSBsZz17MTh9IHhsPXsxNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWQtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPummlumhtTwvYT5cclxuICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGE+6KeG6aKR5pWZ56iLPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICBoZWFkZXI9ezxkaXY+5pyA5paw5pel5b+XPC9kaXY+fVxyXG4gICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17bXlsaXN0fVxyXG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjAxOS0wNi0yOFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAg6KeG6aKR5pWZ56iLXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpcmVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNTg2NOS6ulxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZXh0XCI+e2l0ZW0uY29udGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID48L0xpc3Q+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29tbS1yaWdodFwiIHhzPXswfSBzbT17MH0gbWQ9ezd9IGxnPXs1fSB4bD17NH0+XHJcbiAgICAgICAgICAgIDxBdXRob3IgLz5cclxuICAgICAgICAgICAgPEFkdmVydCAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5NeUxpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcbiAgbGV0IGlkID0gY29udGV4dC5xdWVyeS5pZDtcclxuXHJcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KHNlcnZpY2VQYXRoLmdldEFydGljbGVMaXN0QnlUeXBlICsgaWQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXlMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=e:\\\\MyProgram\\\\Web\\\\front\\\\react\\\\react-blog\\\\blog\\\\pages\\\\list.js */"));
};

MyList.getInitialProps = function _callee(context) {
  var id, promise;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
            axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(_config_aipUrl__WEBPACK_IMPORTED_MODULE_13__["default"].getArticleListByType + id).then(function (res) {
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

/* harmony default export */ __webpack_exports__["default"] = (MyList);

/***/ })

})
//# sourceMappingURL=list.js.4de62835add5caacad9f.hot-update.js.map