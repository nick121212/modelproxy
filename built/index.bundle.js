/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var engine_factory_1 = __webpack_require__(2);
	var modelproxy_1 = __webpack_require__(4);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    ModelProxy: modelproxy_1.ModelProxy,
	    engineFactory: engine_factory_1.engineFactory
	};


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var base_factory_1 = __webpack_require__(3);
	exports.engineFactory = new base_factory_1.BaseFactory();


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var BaseFactory = (function () {
	    function BaseFactory() {
	        this.intances = {};
	    }
	    BaseFactory.prototype.add = function (name, intance, override) {
	        if (override === void 0) { override = false; }
	        if (override && this.intances.hasOwnProperty(name)) {
	            return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
	        }
	        this.intances[name] = intance;
	    };
	    BaseFactory.prototype.use = function (name) {
	        if (!this.intances.hasOwnProperty(name)) {
	            throw new Error("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
	        }
	        return this.intances[name];
	    };
	    return BaseFactory;
	}());
	exports.BaseFactory = BaseFactory;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var ModelProxy = (function () {
	    function ModelProxy() {
	        this.interfaces = {};
	    }
	    ModelProxy.prototype.loadConfigUrls = function (urls) {
	    };
	    ModelProxy.prototype.loadConfig = function (config) {
	        console.log(config);
	    };
	    return ModelProxy;
	}());
	exports.ModelProxy = ModelProxy;


/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map