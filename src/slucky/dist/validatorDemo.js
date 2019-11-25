(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./component/search"), require("./component/steps"), require("./component/text"), require("./component/toast"), require("./component/validator"), require("react"), require("slucky/src/component/checkbox"), require("slucky/src/component/input"), require("slucky/src/component/radio"), require("slucky/src/component/select"), require("slucky/src/component/switch"), require("slucky/src/component/tab"));
	else if(typeof define === 'function' && define.amd)
		define(["./component/search", "./component/steps", "./component/text", "./component/toast", "./component/validator", "react", "slucky/src/component/checkbox", "slucky/src/component/input", "slucky/src/component/radio", "slucky/src/component/select", "slucky/src/component/switch", "slucky/src/component/tab"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("./component/search"), require("./component/steps"), require("./component/text"), require("./component/toast"), require("./component/validator"), require("react"), require("slucky/src/component/checkbox"), require("slucky/src/component/input"), require("slucky/src/component/radio"), require("slucky/src/component/select"), require("slucky/src/component/switch"), require("slucky/src/component/tab")) : factory(root["./component/search"], root["./component/steps"], root["./component/text"], root["./component/toast"], root["./component/validator"], root["react"], root["slucky/src/component/checkbox"], root["slucky/src/component/input"], root["slucky/src/component/radio"], root["slucky/src/component/select"], root["slucky/src/component/switch"], root["slucky/src/component/tab"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__component_search__, __WEBPACK_EXTERNAL_MODULE__component_steps__, __WEBPACK_EXTERNAL_MODULE__component_text__, __WEBPACK_EXTERNAL_MODULE__component_toast__, __WEBPACK_EXTERNAL_MODULE__component_validator__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_checkbox__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_input__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_radio__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_select__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_switch__, __WEBPACK_EXTERNAL_MODULE_slucky_src_component_tab__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/validatorDemo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/search":
/*!*************************************!*\
  !*** external "./component/search" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_search__;\n\n//# sourceURL=webpack:///external_%22./component/search%22?");

/***/ }),

/***/ "./component/steps":
/*!************************************!*\
  !*** external "./component/steps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_steps__;\n\n//# sourceURL=webpack:///external_%22./component/steps%22?");

/***/ }),

/***/ "./component/text":
/*!***********************************!*\
  !*** external "./component/text" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_text__;\n\n//# sourceURL=webpack:///external_%22./component/text%22?");

/***/ }),

/***/ "./component/toast":
/*!************************************!*\
  !*** external "./component/toast" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_toast__;\n\n//# sourceURL=webpack:///external_%22./component/toast%22?");

/***/ }),

/***/ "./component/validator":
/*!****************************************!*\
  !*** external "./component/validator" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__component_validator__;\n\n//# sourceURL=webpack:///external_%22./component/validator%22?");

/***/ }),

/***/ "./src/validatorDemo.jsx":
/*!*******************************!*\
  !*** ./src/validatorDemo.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ValidatorDemo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _validator = __webpack_require__(/*! ./component/validator */ \"./component/validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _input = __webpack_require__(/*! slucky/src/component/input */ \"slucky/src/component/input\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _radio = __webpack_require__(/*! slucky/src/component/radio */ \"slucky/src/component/radio\");\n\nvar _radio2 = _interopRequireDefault(_radio);\n\nvar _checkbox = __webpack_require__(/*! slucky/src/component/checkbox */ \"slucky/src/component/checkbox\");\n\nvar _checkbox2 = _interopRequireDefault(_checkbox);\n\nvar _switch = __webpack_require__(/*! slucky/src/component/switch */ \"slucky/src/component/switch\");\n\nvar _switch2 = _interopRequireDefault(_switch);\n\nvar _tab = __webpack_require__(/*! slucky/src/component/tab */ \"slucky/src/component/tab\");\n\nvar _tab2 = _interopRequireDefault(_tab);\n\nvar _select = __webpack_require__(/*! slucky/src/component/select */ \"slucky/src/component/select\");\n\nvar _select2 = _interopRequireDefault(_select);\n\nvar _search = __webpack_require__(/*! ./component/search */ \"./component/search\");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _steps = __webpack_require__(/*! ./component/steps */ \"./component/steps\");\n\nvar _steps2 = _interopRequireDefault(_steps);\n\nvar _text = __webpack_require__(/*! ./component/text */ \"./component/text\");\n\nvar _text2 = _interopRequireDefault(_text);\n\nvar _toast = __webpack_require__(/*! ./component/toast */ \"./component/toast\");\n\nvar _toast2 = _interopRequireDefault(_toast);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import Input from \"slucky/distTest\";\n\n\n// import Checkbox from 'antd';\n// import Search from \"slucky/distTest/component/search\";\n\nvar ValidatorDemo = exports.ValidatorDemo = function (_Component) {\n    _inherits(ValidatorDemo, _Component);\n\n    function ValidatorDemo() {\n        _classCallCheck(this, ValidatorDemo);\n\n        var _this = _possibleConstructorReturn(this, (ValidatorDemo.__proto__ || Object.getPrototypeOf(ValidatorDemo)).call(this));\n\n        _this.handelClickSubmit = function () {\n            //isSubmit只检测\n            if (_this.Validator.isSubmit(_this.state)) {\n                _toast2.default.add('ok');\n            } else {\n                _toast2.default.add({\n                    content: 'vali fail',\n                    status: 'fail'\n                });\n            }\n            //更新校验信息\n            _this.forceUpdate();\n        };\n\n        _this.handleChangeRadio = function (e) {\n            console.log(e.target.value);\n            _this.setState({\n                radioValue: e.target.value\n            });\n        };\n\n        _this.handleChangeCheckbox = function (selected) {\n            console.log(selected);\n            _this.setState({\n                selected: selected\n            });\n        };\n\n        _this.handleChangeSwitch = function (e) {\n            console.log(e.target.value);\n        };\n\n        _this.state = {\n            name: 1,\n            email: '123',\n            password: '',\n            checked: false,\n            checkboxDefaultValue: ['Apple'],\n            testDemoList: [],\n            selected: ['Pear'],\n            radioValue: 'Pear',\n            numberValue: 1\n        };\n        _this.Validator = new _validator2.default();\n        _validator2.default.types.isEmptyTest = {\n            validate: function validate(value) {\n                return value !== '';\n            },\n\n            instruction: '不为空自定义校验'\n        };\n        _this.Validator.config = {\n            name: ['isEmpty', 'isEmptyTest'],\n            email: ['isEmpty', 'isEmptyTest'],\n            password: ['isEmpty', 'isInt', 'isEmptyTest']\n        };\n        return _this;\n    }\n\n    _createClass(ValidatorDemo, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'bor b-side p32 mtb32' },\n                _react2.default.createElement(_text2.default.Money, { value: '' }),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'btn-n', onClick: function onClick() {\n                            return _this2.setState({ selected: ['Apple', 'Pear'] });\n                        } },\n                    't'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { className: 'btn-n', onClick: function onClick() {\n                            _this2.setState({\n                                testDemoList: [{ label: 'Apple', value: '1', checked: true }, { label: 'Pear', value: '2', checked: true }, { label: 'Orange', value: '3' }, { label: 'Orange', value: '4' }]\n                            }, function () {\n                                return console.log(_this2.state);\n                            });\n                        } },\n                    'TEST'\n                ),\n                _react2.default.createElement(_input2.default.Number, { value: this.state.numberValue, onChange: function onChange(value) {\n                        return _this2.setState({ numberValue: value });\n                    } }),\n                _react2.default.createElement(_search2.default, { onSearch: function onSearch(v) {\n                        console.log(v);\n                    }, onChange: function onChange(v) {\n                        console.log(v);\n                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] }),\n                _react2.default.createElement(_select2.default, { defaultValue: '\\u9009\\u98792', onChange: function onChange(v) {\n                        console.log(v);\n                    }, option: [{\n                        label: '选项1',\n                        value: 'v1'\n                    }, {\n                        label: '选项2',\n                        value: 'v2'\n                    }, {\n                        label: '选项3',\n                        value: 'v3'\n                    }] }),\n                _react2.default.createElement(_search2.default, { onSearch: function onSearch(v) {\n                        console.log(v);\n                    }, onChange: function onChange(v) {\n                        console.log(v);\n                    }, option: ['asdf', '123', 'qwer123', 'zxcvqwe23', '2333hhh'] }),\n                _react2.default.createElement(_radio2.default.Group, { value: this.state.radioValue, className: 'pb32', onChange: function onChange(e) {\n                        _this2.handleChangeRadio(e);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_radio2.default.GroupBorder, { value: this.state.radioValue, className: 'pb32', onChange: function onChange(e) {\n                        _this2.handleChangeRadio(e);\n                    }, option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox2.default.Group, {\n                    values: this.state.selected,\n                    defaultValue: ['Pear'],\n                    className: 'pb32',\n                    onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    },\n                    option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox2.default.GroupFontIn, {\n                    values: this.state.selected,\n                    defaultValue: ['Pear'],\n                    className: 'pb32',\n                    onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    },\n                    option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_checkbox2.default.GroupBorder, {\n                    values: this.state.selected,\n                    defaultValue: ['Pear'],\n                    className: 'pb32',\n                    onChange: function onChange(selected) {\n                        _this2.handleChangeCheckbox(selected);\n                    },\n                    option: [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }] }),\n                _react2.default.createElement(_switch2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24 mt36' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'name' },\n                            'Name:'\n                        )\n                    ),\n                    _react2.default.createElement(_input2.default, { type: 'money', id: 'name', width: '100%', value: this.state.name, onChange: function onChange(name) {\n                            _this2.setState({ name: name });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('name');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'email' },\n                            'Email:'\n                        )\n                    ),\n                    _react2.default.createElement(_input2.default, { readOnly: true, id: 'email', value: this.state.email, onChange: function onChange(email) {\n                            _this2.setState({ email: email });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('email');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'd-f ac mb24' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'w96 s0' },\n                        _react2.default.createElement(\n                            'label',\n                            { htmlFor: 'password' },\n                            'Password:'\n                        )\n                    ),\n                    _react2.default.createElement(_input2.default, { id: 'password', onChange: function onChange(password) {\n                            _this2.setState({ password: password });\n                        }, error: function error() {\n                            return _this2.Validator.formatRes('password');\n                        } })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'w384 ta-c' },\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'btn-n ml8 plr16 ptb8', onClick: this.handelClickSubmit },\n                        '\\u6821\\u9A8C\\u8868\\u5355'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ValidatorDemo;\n}(_react.Component);\n\n//# sourceURL=webpack:///./src/validatorDemo.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "slucky/src/component/checkbox":
/*!************************************************!*\
  !*** external "slucky/src/component/checkbox" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_checkbox__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/checkbox%22?");

/***/ }),

/***/ "slucky/src/component/input":
/*!*********************************************!*\
  !*** external "slucky/src/component/input" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_input__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/input%22?");

/***/ }),

/***/ "slucky/src/component/radio":
/*!*********************************************!*\
  !*** external "slucky/src/component/radio" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_radio__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/radio%22?");

/***/ }),

/***/ "slucky/src/component/select":
/*!**********************************************!*\
  !*** external "slucky/src/component/select" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_select__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/select%22?");

/***/ }),

/***/ "slucky/src/component/switch":
/*!**********************************************!*\
  !*** external "slucky/src/component/switch" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_switch__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/switch%22?");

/***/ }),

/***/ "slucky/src/component/tab":
/*!*******************************************!*\
  !*** external "slucky/src/component/tab" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_slucky_src_component_tab__;\n\n//# sourceURL=webpack:///external_%22slucky/src/component/tab%22?");

/***/ })

/******/ });
});