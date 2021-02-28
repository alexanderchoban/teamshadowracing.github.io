webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/alexanderc/code/teamshadowracing.github.io/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar NavLinks = function NavLinks(_ref) {\n  var onClick = _ref.onClick;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"mr-3\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"inline-block py-2 px-4 text-black no-underline\",\n        href: \"/\",\n        onClick: onClick,\n        children: \"Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"mr-3\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"inline-block py-2 px-4 text-black no-underline\",\n        href: \"/#about\",\n        onClick: onClick,\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"mr-3\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4\",\n        href: \"/gallery\",\n        onClick: onClick,\n        children: \"Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = NavLinks;\n\nvar TeamShadowLogo = function TeamShadowLogo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"toggleColour no-underline hover:no-underline text-black font-bold text-2xl lg:text-4xl\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"logo-team-text\",\n        children: \"team\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"logo-shadow-text\",\n        children: \"Shadow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = TeamShadowLogo;\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggleOpen = function toggleOpen() {\n    setIsOpen(!isOpen);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    id: \"header\",\n    className: \"fixed w-full z-30 top-0  bg-white shadow-lg\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"block lg:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          id: \"nav-toggle\",\n          className: \"flex items-center p-1 text-blue-500 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\",\n          onClick: toggleOpen,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"fill-current h-6 w-6\",\n            viewBox: \"0 0 20 20\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n              children: \"Menu\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TeamShadowLogo, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20\",\n        id: \"nav-content\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"list-reset lg:flex justify-end flex-1 items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavLinks, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n      className: \"border-b border-gray-100 opacity-25 my-0 py-0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        \"translate-x-0\": isOpen\n      }, {\n        \"-translate-x-full\": !isOpen\n      }, \"transform\", \"top-0\", \"left-0\", \"w-full\", \"bg-white\", \"fixed\", \"h-full\", \"overflow-auto\", \"ease-in-out\", \"transition-all\", \"duration-300\", \"z-0\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"absolute right-0 p-2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"h-12 w-12 fill-current text-grey hover:text-grey-darkest\",\n          role: \"button\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 20 20\",\n          onClick: toggleOpen,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n            children: \"Close\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"p-4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TeamShadowLogo, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"px-4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavLinks, {\n          onClick: toggleOpen\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c3 = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"NavLinks\");\n$RefreshReg$(_c2, \"TeamShadowLogo\");\n$RefreshReg$(_c3, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXZMaW5rcyIsIm9uQ2xpY2siLCJUZWFtU2hhZG93TG9nbyIsIk5hdiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlT3BlbiIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLHNCQUNmO0FBQUEsNEJBQ0E7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxnREFEWjtBQUVFLFlBQUksRUFBQyxHQUZQO0FBR0UsZUFBTyxFQUFFQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBVUU7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxnREFEWjtBQUVFLFlBQUksRUFBQyxTQUZQO0FBR0UsZUFBTyxFQUFFQSxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBbUJFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUNFLGlCQUFTLEVBQUMseUZBRFo7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLGVBQU8sRUFBRUEsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQSxrQkFEZTtBQUFBLENBQWpCOztLQUFNRCxROztBQWdDTixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ3JCO0FBQ0UsYUFBUyxFQUFD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QUFBQSxlQTlCRixlQWlDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLCtCQUNFLHFFQUFDLFFBQUQ7QUFBVSxpQkFBTyxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0E5RUQ7O0dBQU1KLEc7O01BQUFBLEc7QUFnRlNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmF2TGlua3MgPSAoeyBvbkNsaWNrIH0pID0+IChcbiAgPD5cbiAgPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC1ibGFjayBuby11bmRlcmxpbmVcIlxuICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIEhvbWVcbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9XCJtci0zXCI+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHktMiBweC00IHRleHQtYmxhY2sgbm8tdW5kZXJsaW5lXCJcbiAgICAgICAgaHJlZj1cIi8jYWJvdXRcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICBBYm91dFxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWJsYWNrIG5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtdW5kZXJsaW5lIHB5LTIgcHgtNFwiXG4gICAgICAgIGhyZWY9XCIvZ2FsbGVyeVwiXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIEdhbGxlcnlcbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICA8Lz5cbik7XG5cbmNvbnN0IFRlYW1TaGFkb3dMb2dvID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPVwidG9nZ2xlQ29sb3VyIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgdGV4dC1ibGFjayBmb250LWJvbGQgdGV4dC0yeGwgbGc6dGV4dC00eGxcIlxuICA+XG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28tdGVhbS10ZXh0XCI+dGVhbTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ28tc2hhZG93LXRleHRcIj5TaGFkb3c8L3NwYW4+XG4gICAgPC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCB6LTMwIHRvcC0wICBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMCBweS0yIHB4LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cIm5hdi10b2dnbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0xIHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNiB3LTZcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0aXRsZT5NZW51PC90aXRsZT5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPFRlYW1TaGFkb3dMb2dvIC8+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0byBoaWRkZW4gbXQtMiBsZzptdC0wIGJnLXdoaXRlIGxnOmJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgcC00IGxnOnAtMCB6LTIwXCJcbiAgICAgICAgICBpZD1cIm5hdi1jb250ZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXJlc2V0IGxnOmZsZXgganVzdGlmeS1lbmQgZmxleC0xIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPE5hdkxpbmtzIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0xMDAgb3BhY2l0eS0yNSBteS0wIHB5LTBcIiAvPlxuICAgICAgPGFzaWRlXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICB7IFwidHJhbnNsYXRlLXgtMFwiOiBpc09wZW4gfSxcbiAgICAgICAgICB7IFwiLXRyYW5zbGF0ZS14LWZ1bGxcIjogIWlzT3BlbiB9LFxuICAgICAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgXCJ0b3AtMFwiLFxuICAgICAgICAgIFwibGVmdC0wXCIsXG4gICAgICAgICAgXCJ3LWZ1bGxcIixcbiAgICAgICAgICBcImJnLXdoaXRlXCIsXG4gICAgICAgICAgXCJmaXhlZFwiLFxuICAgICAgICAgIFwiaC1mdWxsXCIsXG4gICAgICAgICAgXCJvdmVyZmxvdy1hdXRvXCIsXG4gICAgICAgICAgXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgIFwidHJhbnNpdGlvbi1hbGxcIixcbiAgICAgICAgICBcImR1cmF0aW9uLTMwMFwiLFxuICAgICAgICAgIFwiei0wXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBwLTJcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgZmlsbC1jdXJyZW50IHRleHQtZ3JleSBob3Zlcjp0ZXh0LWdyZXktZGFya2VzdFwiXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0aXRsZT5DbG9zZTwvdGl0bGU+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDlhMS4yIDEuMiAwIDAgMS0xLjY5NyAwTDEwIDExLjgxOWwtMi42NTEgMy4wMjlhMS4yIDEuMiAwIDEgMS0xLjY5Ny0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYTEuMiAxLjIgMCAxIDEgMS42OTctMS42OTdMMTAgOC4xODNsMi42NTEtMy4wMzFhMS4yIDEuMiAwIDEgMSAxLjY5NyAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWExLjIgMS4yIDAgMCAxIDAgMS42OTh6XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxUZWFtU2hhZG93TG9nbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB4LTRcIj5cbiAgICAgICAgICA8TmF2TGlua3Mgb25DbGljaz17dG9nZ2xlT3Blbn0gLz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})