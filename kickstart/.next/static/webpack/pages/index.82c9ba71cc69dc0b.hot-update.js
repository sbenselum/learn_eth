"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignIndex, Component1);\n    var _super = _createSuper(CampaignIndex);\n    function CampaignIndex() {\n        _classCallCheck(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignIndex, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(_home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaigns;\n                    return _home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call();\n                            case 2:\n                                campaigns = _ctx.sent;\n                                console.log(campaigns);\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                var _this = this;\n                /*let items = [];\n\t\tlet item;\t\n\t\tfor(let i = 0; i < campaigns.length; i++) {\n\t\t\titem = [\n\t\t\t  {\n\t\t\t    header: campaigns.address,\n\t\t\t    description: campaigns.description,\n\t\t\t    meta: 'ROI: 30%',\n\t\t\t  }]\n\t\t\titems.push(item);\n\t\t}\n\t\tconst CardExampleGroupProps = () => <Card.Group items={items} />\n\t\t*/ var items = this.props.campaigns.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 10\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            this.renderCampaigns(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                content: \"Create Campaign\",\n                                icon: \"add\",\n                                floated: \"right\",\n                                primary: true\n                            }, void 0, false, {\n                                fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 4\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/sergio/learn_eth_git/kickstart/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 4\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return _asyncToGenerator(_home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaigns;\n                    return _home_sergio_learn_eth_git_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call();\n                            case 2:\n                                campaigns = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    campaigns: campaigns\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/*<link\n    async\n    rel=\"stylesheet\"\n    href=\"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n  />*/ /* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUUxQyxpQkFBbUIsaUJBMkRoQjs7OzthQTNER00sYUFBYTs7Ozs7O1lBUVpDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXZCLFNBQU1BLGlCQUFpQjt1QkFBdkIscUxBQTBCO3dCQUNuQkMsU0FBUzs7Ozs7dUNBQVNOLHNGQUFvQyxFQUFFLENBQUNTLElBQUksRUFBRTs7Z0NBQS9ESCxTQUFTLFlBQXNEO2dDQUNyRUksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7aUJBQ3ZCO2FBQUE7OztZQUdETSxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUc7O2dCQUVqQjs7Ozs7Ozs7Ozs7O0lBWUUsQ0FFRixJQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNSLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7b0JBQ2pELE9BQU87d0JBQ0hDLE1BQU0sRUFBRUQsT0FBTzt3QkFDZkUsV0FBVyxnQkFBRSw4REFBQ0MsR0FBQztzQ0FBQyxlQUFhOzs7OztpQ0FBSTt3QkFDakNDLEtBQUssRUFBRSxJQUFJO3FCQUVkLENBQUM7aUJBQ0YsQ0FBQztnQkFFRixxQkFBTyw4REFBQ25CLHlEQUFVO29CQUFDWSxLQUFLLEVBQUVBLEtBQUs7Ozs7O3dCQUFJLENBQUM7YUFDcEM7OztZQUNEUyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUixxQkFDQyw4REFBQ25CLDBEQUFNOzhCQUNQLDRFQUFDb0IsS0FBRzs7NEJBQ0YsSUFBSSxDQUFDWCxlQUFlLEVBQUU7MENBQ3ZCLDhEQUFDWSxJQUFFOzBDQUFDLGdCQUFjOzs7OztvQ0FBSzswQ0FDdkIsOERBQUN0QixxREFBTTtnQ0FDTnVCLE9BQU8sRUFBQyxpQkFBaUI7Z0NBQ3pCQyxJQUFJLEVBQUMsS0FBSztnQ0FDVkMsT0FBTyxFQUFDLE9BQU87Z0NBQ2ZDLE9BQU87Ozs7O29DQUNOOzs7Ozs7NEJBQ0c7Ozs7O3dCQUNHLENBQ1Q7YUFDRDs7OztZQXREWUMsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsU0FBYUEsZUFBZTt1QkFBNUIscUxBQStCO3dCQUN4QnZCLFNBQVM7Ozs7O3VDQUFTTixzRkFBb0MsRUFBRSxDQUFDUyxJQUFJLEVBQUU7O2dDQUEvREgsU0FBUyxZQUFzRDs2REFFOUQ7b0NBQUVBLFNBQVMsRUFBVEEsU0FBUztpQ0FBRTs7Ozs7O2lCQUNwQjthQUFBOzs7O0NBbURELENBekQyQlAsNENBQVMsQ0F5RHBDO0FBRUQ7Ozs7TUFJTSxDQUVOLCtEQUFlSyxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gIGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JzsgXG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cdFx0Y29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXHRcblx0XHRyZXR1cm4geyBjYW1wYWlnbnMgfTtcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcblx0XHRjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuXHR9XG5cblxuXHRyZW5kZXJDYW1wYWlnbnMoKSB7XG5cblx0XHQvKmxldCBpdGVtcyA9IFtdO1xuXHRcdGxldCBpdGVtO1x0XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNhbXBhaWducy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aXRlbSA9IFtcblx0XHRcdCAge1xuXHRcdFx0ICAgIGhlYWRlcjogY2FtcGFpZ25zLmFkZHJlc3MsXG5cdFx0XHQgICAgZGVzY3JpcHRpb246IGNhbXBhaWducy5kZXNjcmlwdGlvbixcblx0XHRcdCAgICBtZXRhOiAnUk9JOiAzMCUnLFxuXHRcdFx0ICB9XVxuXHRcdFx0aXRlbXMucHVzaChpdGVtKTtcblx0XHR9XG5cdFx0Y29uc3QgQ2FyZEV4YW1wbGVHcm91cFByb3BzID0gKCkgPT4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxuXHRcdCovXG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHQgICAgaGVhZGVyOiBhZGRyZXNzLFxuXHRcdFx0ICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPixcblx0XHRcdCAgICBmbHVpZDogdHJ1ZVxuXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG5cdFx0XHRcdDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG5cdFx0XHRcdDxCdXR0b24gXG5cdFx0XHRcdFx0Y29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXG5cdFx0XHRcdFx0aWNvbj1cImFkZFwiXG5cdFx0XHRcdFx0ZmxvYXRlZD1cInJpZ2h0XCJcblx0XHRcdFx0XHRwcmltYXJ5XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG4vKjxsaW5rXG4gICAgYXN5bmNcbiAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gIC8+Ki9cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduSW5kZXgiLCJjb21wb25lbnREaWRNb3VudCIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImEiLCJmbHVpZCIsIkdyb3VwIiwicmVuZGVyIiwiZGl2IiwiaDMiLCJjb250ZW50IiwiaWNvbiIsImZsb2F0ZWQiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});