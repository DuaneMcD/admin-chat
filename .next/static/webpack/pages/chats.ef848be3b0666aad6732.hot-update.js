self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./components/Conversation.js":
/*!************************************!*\
  !*** ./components/Conversation.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\admin-chat\\components\\Conversation.js",
    _this = undefined;

var Conversation = function Conversation(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "You"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, _this), " This is great"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Guest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), " This works"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "You"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), " Excellent!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Conversation;
/* harmony default export */ __webpack_exports__["default"] = (Conversation);

var _c;

$RefreshReg$(_c, "Conversation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chats; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_SDMM_admin_chat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Conversation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Conversation */ "./components/Conversation.js");
/* harmony import */ var _components_ChatsBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ChatsBar */ "./components/ChatsBar.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\admin-chat\\pages\\chats.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_xampp_htdocs_SDMM_admin_chat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Chats() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      chat = _useState[0],
      setChat = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      conversation = _useState2[0],
      setConversation = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      chatInput = _useState4[0],
      setChatInput = _useState4[1];

  var handleChatSelect = function handleChatSelect(e) {
    setChat(e.textContent);
    console.log(chat);
  };

  var handleChange = function handleChange(e) {
    setChatInput(e.target.value);
    console.log(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setMessage(chatInput);
    setConversation(_objectSpread(_objectSpread({}, conversation), {}, {
      message: message
    }));
    console.log(message);
    console.log(conversation);
    resetInput();
  };

  var resetInput = function resetInput() {
    setChatInput('');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().pageContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatsBar__WEBPACK_IMPORTED_MODULE_6__.default, {
        onClick: handleChatSelect
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "chatContent",
        children: chat == '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
            children: "Welcome to your Chats Panel!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),
            children: "Select a Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatWindow),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Conversation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              action: "",
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                id: 'chatInput',
                type: "text",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().chatInput),
                onChange: handleChange,
                value: chatInput
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                children: "Send"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Powered by Duane"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(Chats, "a/y7+RTO/wT/z+t4X2eijukbSYY=");

_c = Chats;

var _c;

$RefreshReg$(_c, "Chats");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXRzLmpzIl0sIm5hbWVzIjpbIkNvbnZlcnNhdGlvbiIsInByb3BzIiwiQ2hhdHMiLCJ1c2VTdGF0ZSIsImNoYXQiLCJzZXRDaGF0IiwiY29udmVyc2F0aW9uIiwic2V0Q29udmVyc2F0aW9uIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJjaGF0SW5wdXQiLCJzZXRDaGF0SW5wdXQiLCJoYW5kbGVDaGF0U2VsZWN0IiwiZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNldElucHV0Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBT0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFhRCxDQWREOztLQUFNRCxZO0FBZ0JOLCtEQUFlQSxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFD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O0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE2QkU7QUFBUSxlQUFTLEVBQUVhLHVFQUFuQjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0FoRXVCckIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0cy5lZjg0OGJlM2IwNjY2YWFkNjczMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29udmVyc2F0aW9uID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj5Zb3U8L3NwYW4+IFRoaXMgaXMgZ3JlYXRcclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Bhbj5HdWVzdDwvc3Bhbj4gVGhpcyB3b3Jrc1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPllvdTwvc3Bhbj4gRXhjZWxsZW50IVxyXG4gICAgICA8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uJztcbmltcG9ydCBDaGF0c0JhciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRzQmFyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRzKCkge1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29udmVyc2F0aW9uLCBzZXRDb252ZXJzYXRpb25dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaGF0SW5wdXQsIHNldENoYXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhdFNlbGVjdCA9IGUgPT4ge1xuICAgIHNldENoYXQoZS50ZXh0Q29udGVudCk7XG4gICAgY29uc29sZS5sb2coY2hhdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgc2V0Q2hhdElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE1lc3NhZ2UoY2hhdElucHV0KTtcbiAgICBzZXRDb252ZXJzYXRpb24oeyAuLi5jb252ZXJzYXRpb24sIG1lc3NhZ2UgfSk7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2coY29udmVyc2F0aW9uKTtcbiAgICByZXNldElucHV0KCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRJbnB1dCA9ICgpID0+IHtcbiAgICBzZXRDaGF0SW5wdXQoJycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxDaGF0c0JhciBvbkNsaWNrPXtoYW5kbGVDaGF0U2VsZWN0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdENvbnRlbnQnPlxuICAgICAgICAgIHtjaGF0ID09ICcnID8gKFxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byB5b3VyIENoYXRzIFBhbmVsITwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5TZWxlY3QgYSBDaGF0PC9wPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRXaW5kb3d9PlxuICAgICAgICAgICAgICAgIDxDb252ZXJzYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249Jycgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9eydjaGF0SW5wdXQnfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGF0SW5wdXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPHA+UG93ZXJlZCBieSBEdWFuZTwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==