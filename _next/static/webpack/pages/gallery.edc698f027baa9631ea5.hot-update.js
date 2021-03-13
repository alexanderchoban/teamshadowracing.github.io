webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-photo-gallery */ \"./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js\");\n/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-images */ \"./node_modules/react-images/dist/react-images.es.js\");\n/* harmony import */ var _components_MediaGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MediaGrid */ \"./components/MediaGrid.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Icons */ \"./components/Icons.js\");\n\n\n\nvar _jsxFileName = \"/home/alexanderc/code/teamshadowracing.github.io/pages/gallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Gallery = function Gallery(_ref) {\n  _s();\n\n  var galleries = _ref.galleries;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      currentGalleryId = _useRouter.query.id;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      viewerIsOpen = _useState2[0],\n      setViewerIsOpen = _useState2[1];\n\n  var openLightbox = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event, _ref2) {\n    var photo = _ref2.photo,\n        index = _ref2.index;\n    setCurrentImage(index);\n    setViewerIsOpen(true);\n  }, []);\n\n  var closeLightbox = function closeLightbox() {\n    setCurrentImage(0);\n    setViewerIsOpen(false);\n  };\n\n  var currentGallery = galleries.find(function (gallery) {\n    return gallery.id === currentGalleryId;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Team Shadow Racing - Media Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"Description\",\n        content: \"Team Shadow is an online and real life automotive organization. Visit our website gallery to see pictures of our cars in video games and real life.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"pt-24 w-full container mx-auto\",\n      children: [!currentGallery && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-4xl pb-4 pt-4 pl-4 team-shadow-header\",\n          children: \"Media Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"grid md:grid-cols-2 xl:grid-cols-3 gap-4\",\n          children: galleries.map(function (_ref3, index) {\n            var title = _ref3.title,\n                id = _ref3.id,\n                photos = _ref3.photos;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"text-center\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: {\n                  pathname: \"/gallery\",\n                  query: {\n                    id: id\n                  }\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    className: \"rounded-md shadow-lg\",\n                    src: photos[0].thumbnail,\n                    alt: photos[0].alt,\n                    style: {\n                      height: 200,\n                      margin: \"auto\"\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 23\n                  }, _this), \" \", title]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 19\n              }, _this)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, _this), currentGallery && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [currentGallery.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"text-4xl pb-4 pt-4 pl-4 team-shadow-header\",\n          children: currentGallery.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"sm:invisible md:visible\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_photo_gallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            onClick: openLightbox,\n            photos: currentGallery.photos.map(function (_ref4) {\n              var alt = _ref4.alt,\n                  width = _ref4.width,\n                  height = _ref4.height,\n                  thumbnail = _ref4.thumbnail;\n              return {\n                alt: alt,\n                width: width,\n                height: height,\n                src: thumbnail\n              };\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"sm:visible md:invisible\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_MediaGrid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            media: currentGalleryId.photos.map(function (_ref5) {\n              var alt = _ref5.alt,\n                  width = _ref5.width,\n                  height = _ref5.height,\n                  thumbnail = _ref5.thumbnail;\n              return {\n                alt: alt,\n                width: width,\n                height: height,\n                src: thumbnail\n              };\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_images__WEBPACK_IMPORTED_MODULE_6__[\"ModalGateway\"], {\n          children: viewerIsOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_images__WEBPACK_IMPORTED_MODULE_6__[\"Modal\"], {\n            onClose: closeLightbox,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_images__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              currentIndex: currentImage,\n              views: currentGallery.photos.map(function (_ref6) {\n                var alt = _ref6.alt,\n                    width = _ref6.width,\n                    height = _ref6.height,\n                    src = _ref6.src;\n                return {\n                  alt: alt,\n                  width: width,\n                  height: height,\n                  src: src,\n                  caption: alt\n                };\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 17\n          }, _this) : null\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/gallery\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"inline-flex items-center h-8 px-4 m-2 text-sm text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"icon pr-1\",\n              children: _components_Icons__WEBPACK_IMPORTED_MODULE_10__[\"Back\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: \"Back to all galleries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Gallery, \"Qm/aq3AB3NMvNqhBMXggD6eFbFY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcz83NjYwIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJnYWxsZXJpZXMiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50R2FsbGVyeUlkIiwicXVlcnkiLCJpZCIsInVzZVN0YXRlIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwidmlld2VySXNPcGVuIiwic2V0Vmlld2VySXNPcGVuIiwib3BlbkxpZ2h0Ym94IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInBob3RvIiwiaW5kZXgiLCJjbG9zZUxpZ2h0Ym94IiwiY3VycmVudEdhbGxlcnkiLCJmaW5kIiwiZ2FsbGVyeSIsIm1hcCIsInRpdGxlIiwicGhvdG9zIiwicGF0aG5hbWUiLCJ0aHVtYm5haWwiLCJhbHQiLCJoZWlnaHQiLCJtYXJnaW4iLCJ3aWR0aCIsInNyYyIsImNhcHRpb24iLCJCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLG1CQUc3QkMsNkRBQVMsRUFIb0I7QUFBQSxNQUVsQkMsZ0JBRmtCLGNBRS9CQyxLQUYrQixDQUV0QkMsRUFGc0I7O0FBQUEsa0JBS09DLHNEQUFRLENBQUMsQ0FBRCxDQUxmO0FBQUEsTUFLMUJDLFlBTDBCO0FBQUEsTUFLWkMsZUFMWTs7QUFBQSxtQkFNT0Ysc0RBQVEsQ0FBQyxLQUFELENBTmY7QUFBQSxNQU0xQkcsWUFOMEI7QUFBQSxNQU1aQyxlQU5ZOztBQVFqQyxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRCxTQUE2QjtBQUFBLFFBQW5CQyxLQUFtQixTQUFuQkEsS0FBbUI7QUFBQSxRQUFaQyxLQUFZLFNBQVpBLEtB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Rix3QkFBTSxFQUFOQSxNQUhnQztBQUloQ0cscUJBQUcsRUFBSEEsR0FKZ0M7QUFLaENDLHlCQUFPLEVBQUVMO0FBTHVCLGlCQUFsQztBQUFBLGVBREs7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVyxHQWVUO0FBaEJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBK0NFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsMEpBQWI7QUFBQSxvQ0FDRTtBQUFNLHVCQUFTLEVBQUMsV0FBaEI7QUFBQSx3QkFBNkJNLHVEQUFJQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBMkZFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzRkY7QUFBQSxrQkFERjtBQStGRCxDQXJIRDs7R0FBTS9CLE87VUFHQUUscUQ7OztLQUhBRixPOztBQW9JU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9nYWxsZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBNZWRpYUdhbGxlcnkgZnJvbSBcInJlYWN0LXBob3RvLWdhbGxlcnlcIjtcbmltcG9ydCBDYXJvdXNlbCwgeyBNb2RhbCwgTW9kYWxHYXRld2F5IH0gZnJvbSBcInJlYWN0LWltYWdlc1wiO1xuXG5pbXBvcnQgTWVkaWFHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL01lZGlhR3JpZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBCYWNrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbnNcIjtcblxuaW1wb3J0IGdldEltZ3VyQWxidW0gZnJvbSBcIi4uL3V0aWxzL2dldEltZ3VyQWxidW1cIjtcblxuY29uc3QgR2FsbGVyeSA9ICh7IGdhbGxlcmllcyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBpZDogY3VycmVudEdhbGxlcnlJZCB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmlld2VySXNPcGVuLCBzZXRWaWV3ZXJJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5MaWdodGJveCA9IHVzZUNhbGxiYWNrKChldmVudCwgeyBwaG90bywgaW5kZXggfSkgPT4ge1xuICAgIHNldEN1cnJlbnRJbWFnZShpbmRleCk7XG4gICAgc2V0Vmlld2VySXNPcGVuKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xvc2VMaWdodGJveCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW1hZ2UoMCk7XG4gICAgc2V0Vmlld2VySXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50R2FsbGVyeSA9IGdhbGxlcmllcy5maW5kKFxuICAgIChnYWxsZXJ5KSA9PiBnYWxsZXJ5LmlkID09PSBjdXJyZW50R2FsbGVyeUlkXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UZWFtIFNoYWRvdyBSYWNpbmcgLSBNZWRpYSBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUZWFtIFNoYWRvdyBpcyBhbiBvbmxpbmUgYW5kIHJlYWwgbGlmZSBhdXRvbW90aXZlIG9yZ2FuaXphdGlvbi4gVmlzaXQgb3VyIHdlYnNpdGUgZ2FsbGVyeSB0byBzZWUgcGljdHVyZXMgb2Ygb3VyIGNhcnMgaW4gdmlkZW8gZ2FtZXMgYW5kIHJlYWwgbGlmZS5cIlxuICAgICAgICA+PC9tZXRhPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yNCB3LWZ1bGwgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgeyFjdXJyZW50R2FsbGVyeSAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBwYi00IHB0LTQgcGwtNCB0ZWFtLXNoYWRvdy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgTWVkaWEgR2FsbGVyeVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICB7Z2FsbGVyaWVzLm1hcCgoeyB0aXRsZSwgaWQsIHBob3RvcyB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiL2dhbGxlcnlcIiwgcXVlcnk6IHsgaWQgfSB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG90b3NbMF0udGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwaG90b3NbMF0uYWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMDAsIG1hcmdpbjogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2N1cnJlbnRHYWxsZXJ5ICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2N1cnJlbnRHYWxsZXJ5LnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIHBiLTQgcHQtNCBwbC00IHRlYW0tc2hhZG93LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50R2FsbGVyeS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmludmlzaWJsZSBtZDp2aXNpYmxlXCI+XG4gICAgICAgICAgICAgIDxNZWRpYUdhbGxlcnlcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTGlnaHRib3h9XG4gICAgICAgICAgICAgICAgcGhvdG9zPXtjdXJyZW50R2FsbGVyeS5waG90b3MubWFwKFxuICAgICAgICAgICAgICAgICAgKHsgYWx0LCB3aWR0aCwgaGVpZ2h0LCB0aHVtYm5haWwgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgYWx0LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBzcmM6IHRodW1ibmFpbCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp2aXNpYmxlIG1kOmludmlzaWJsZVwiPlxuICAgICAgICAgICAgICA8TWVkaWFHcmlkIG1lZGlhPXtjdXJyZW50R2FsbGVyeUlkLnBob3Rvcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoeyBhbHQsIHdpZHRoLCBoZWlnaHQsIHRodW1ibmFpbCB9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TW9kYWxHYXRld2F5PlxuICAgICAgICAgICAgICB7dmlld2VySXNPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtjbG9zZUxpZ2h0Ym94fT5cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgdmlld3M9e2N1cnJlbnRHYWxsZXJ5LnBob3Rvcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKHsgYWx0LCB3aWR0aCwgaGVpZ2h0LCBzcmMgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogYWx0LFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9Nb2RhbEdhdGV3YXk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbGxlcnlcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGgtOCBweC00IG0tMiB0ZXh0LXNtIHRleHQtcGluay0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLXBpbmstNzAwIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmUgaG92ZXI6YmctcGluay04MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIHByLTFcIj57QmFja308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+QmFjayB0byBhbGwgZ2FsbGVyaWVzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZ2FsbGVyaWVzID0gW1xuICAgIGF3YWl0IGdldEltZ3VyQWxidW0oXCJZNVFhN2RHXCIpLFxuICAgIGF3YWl0IGdldEltZ3VyQWxidW0oXCJRdEVTVjYxXCIpLFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdhbGxlcmllcyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gallery.js\n");

/***/ })

})