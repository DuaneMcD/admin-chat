self["webpackHotUpdate_N_E"]("pages/chats",{

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
/* harmony import */ var _components_ChatsBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChatsBar */ "./components/ChatsBar.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\admin-chat\\pages\\chats.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_xampp_htdocs_SDMM_admin_chat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Chats() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      chat = _useState[0],
      setChat = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      conversation = _useState2[0],
      setConversation = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      message = _useState3[0],
      setMessage = _useState3[1];

  var handleChatSelect = function handleChatSelect(e) {
    setChat();
  };

  var handleChange = function handleChange(e) {
    setMessages(_objectSpread(_objectSpread({}, message), {}, (0,C_xampp_htdocs_SDMM_admin_chat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var message = e.textContent;
    setMessages(message);
    console.log(messages);
  };

  var restInput = function restInput() {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().pageContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatsBar__WEBPACK_IMPORTED_MODULE_5__.default, {
        onClick: handleChatSelect
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "chatContent",
        children: chat == '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
            children: "Welcome to your Chats Panel!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),
            children: "Select a Chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().chatContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().chatWindow),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              action: "",
              onSubmit: handleSubmit,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                id: 'chatInput',
                type: "text",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().chatInput),
                onChange: handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                children: "Send"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Powered by Duane"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Chats, "pmJciDwzkO51kHhyNaW2o9wm49w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHMuanMiXSwibmFtZXMiOlsiQ2hhdHMiLCJ1c2VTdGF0ZSIsImNoYXQiLCJzZXRDaGF0IiwiY29udmVyc2F0aW9uIiwic2V0Q29udmVyc2F0aW9uIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVDaGF0U2VsZWN0IiwiZSIsImhhbmRsZUNoYW5nZSIsInNldE1lc3NhZ2VzIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlcyIsInJlc3RJbnB1dCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNOQywrQ0FBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFBQSxtQkFFVUYsK0NBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFdkJHLFlBRnVCO0FBQUEsTUFFVEMsZUFGUzs7QUFBQSxtQkFHQUosK0NBQVEsQ0FBQyxFQUFELENBSFI7QUFBQSxNQUd2QkssT0FIdUI7QUFBQSxNQUdkQyxVQUhjOztBQUs5QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUM1Qk4sV0FBTztBQUNSLEdBRkQ7O0FBSUEsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUQsQ0FBQyxFQUFJO0FBQ3hCRSxlQUFXLGlDQUFNTCxPQUFOLDJKQUFnQkcsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQXpCLEVBQWdDSixDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBekMsR0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQU4sQ0FBQyxFQUFJO0FBQ3hCQSxLQUFDLENBQUNPLGNBQUY7QUFDQSxRQUFNVixPQUFPLEdBQUdHLENBQUMsQ0FBQ1EsV0FBbEI7QUFDQU4sZUFBVyxDQUFDTCxPQUFELENBQVg7QUFDQVksV0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7QUFDRCxHQUxEOztBQU9BLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU0sQ0FBRSxDQUExQjs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOEVBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLDhFQUFoQjtBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFZDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGtCQUNHTixJQUFJLElBQUksRUFBUixnQkFDQztBQUFNLG1CQUFTLEVBQUVvQixxRUFBakI7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUVBLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFFQSw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZ0JBTUM7QUFBSyxtQkFBUyxFQUFFQSw4RUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLDJFQUFoQjtBQUFBLG1DQUNFO0FBQU0sb0JBQU0sRUFBQyxFQUFiO0FBQWdCLHNCQUFRLEVBQUVQLFlBQTFCO0FBQUEsc0NBQ0U7QUFDRSxrQkFBRSxFQUFFLFdBRE47QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSx5QkFBUyxFQUFFTywwRUFIYjtBQUlFLHdCQUFRLEVBQUVaO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU9FO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBMkJFO0FBQVEsZUFBUyxFQUFFWSx1RUFBbkI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBdkR1QnRCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdHMuZjc1Njg0MTgxNDE2ODIwNzNjYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBDaGF0c0JhciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRzQmFyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRzKCkge1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb252ZXJzYXRpb24sIHNldENvbnZlcnNhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGF0U2VsZWN0ID0gZSA9PiB7XG4gICAgc2V0Q2hhdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHNldE1lc3NhZ2VzKHsgLi4ubWVzc2FnZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGUudGV4dENvbnRlbnQ7XG4gICAgc2V0TWVzc2FnZXMobWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xuICB9O1xuXG4gIGNvbnN0IHJlc3RJbnB1dCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxDaGF0c0JhciBvbkNsaWNrPXtoYW5kbGVDaGF0U2VsZWN0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdENvbnRlbnQnPlxuICAgICAgICAgIHtjaGF0ID09ICcnID8gKFxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+V2VsY29tZSB0byB5b3VyIENoYXRzIFBhbmVsITwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5TZWxlY3QgYSBDaGF0PC9wPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRXaW5kb3d9PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0nJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD17J2NoYXRJbnB1dCd9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8cD5Qb3dlcmVkIGJ5IER1YW5lPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9