(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
	var engineFactory = __webpack_require__(1);
	var proxy_1 = __webpack_require__(7);
	var compose = __webpack_require__(6);
	var index_1 = __webpack_require__(10);
	var base = __webpack_require__(5);
	var methodtype = __webpack_require__(9);
	exports.modelProxy = {
	    Proxy: proxy_1.ModelProxy.ModelProxy,
	    engineFactory: engineFactory.ModelProxy.engineFactory,
	    Compose: compose.ModelProxy.Compose,
	    modelProxySchemaUtils: index_1.default,
	    methods: methodtype.MethodType,
	    BaseEngine: base.ModelProxyEngine.BaseEngine
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUF1RDtBQUN2RCxzQ0FBMEM7QUFFMUMsd0NBQTBDO0FBQzFDLHlDQUFvRDtBQUNwRCxxQ0FBdUM7QUFJdkMsNENBQThDO0FBRWpDLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLEtBQUssRUFBRSxrQkFBVSxDQUFDLFVBQVU7SUFDNUIsYUFBYSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYTtJQUNyRCxPQUFPLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPO0lBQ25DLHFCQUFxQixFQUFFLGVBQXFCO0lBQzVDLE9BQU8sRUFBRSxVQUFVLENBQUMsVUFBVTtJQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVU7Q0FDL0MsQ0FBQyJ9

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var factory = __webpack_require__(2);
	var engines = __webpack_require__(4);
	var ModelProxy;
	(function (ModelProxy) {
	    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
	    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicy9lbmdpbmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQTBDO0FBQzFDLDRDQUE4QztBQUU5QyxJQUFpQixVQUFVLENBSTFCO0FBSkQsV0FBaUIsVUFBVTtJQUNWLHdCQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBVyxDQUFDO0lBRTNFLFdBQUEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLEVBSmdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSTFCIn0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(3);
	var ModelProxy;
	(function (ModelProxy) {
	    var BaseFactory = (function () {
	        function BaseFactory() {
	            this.instances = {};
	        }
	        BaseFactory.prototype.add = function (name, intance, override) {
	            if (override === void 0) { override = false; }
	            if (override && this.instances.hasOwnProperty(name)) {
	                return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
	            }
	            this.instances[name] = intance;
	        };
	        BaseFactory.prototype.get = function (name) {
	            if (this.instances.hasOwnProperty(name)) {
	                return this.instances[name];
	            }
	            return null;
	        };
	        BaseFactory.prototype.use = function (name) {
	            if (!this.instances.hasOwnProperty(name)) {
	                var engines = _.map(this.instances, function (val, key) {
	                    return key;
	                });
	                throw new Error("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
	            }
	            return this.instances[name];
	        };
	        return BaseFactory;
	    }());
	    ModelProxy.BaseFactory = BaseFactory;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvYmFzZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBNEI7QUFFNUIsSUFBaUIsVUFBVSxDQWlEMUI7QUFqREQsV0FBaUIsVUFBVTtJQUl2QjtRQUdJO1lBRlUsY0FBUyxHQUF5QixFQUFFLENBQUM7UUFFL0IsQ0FBQztRQVFqQix5QkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLE9BQVUsRUFBRSxRQUF5QjtZQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtZQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBYSxJQUFJLDZCQUFXLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDbkMsQ0FBQztRQU1ELHlCQUFHLEdBQUgsVUFBSSxJQUFZO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBTUQseUJBQUcsR0FBSCxVQUFJLElBQVk7WUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7b0JBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBWSxJQUFJLCtEQUF1QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFHLENBQUMsQ0FBQztZQUNqRixDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FBQyxBQTVDRCxJQTRDQztJQTVDWSxzQkFBVyxjQTRDdkIsQ0FBQTtBQUNMLENBQUMsRUFqRGdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBaUQxQiJ9

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var base = __webpack_require__(5);
	var ModelProxyEngine;
	(function (ModelProxyEngine) {
	    var DefaultEngine = (function (_super) {
	        __extends(DefaultEngine, _super);
	        function DefaultEngine() {
	            return _super.call(this) || this;
	        }
	        DefaultEngine.prototype.validate = function (instance, options) {
	            return true;
	        };
	        DefaultEngine.prototype.proxy = function (instance, options) {
	            return __awaiter(this, void 0, void 0, function () {
	                return __generator(this, function (_a) {
	                    if (!this.validate(instance, options)) {
	                        return [2 /*return*/, null];
	                    }
	                    return [2 /*return*/, instance];
	                });
	            });
	        };
	        return DefaultEngine;
	    }(base.ModelProxyEngine.BaseEngine));
	    ModelProxyEngine.DefaultEngine = DefaultEngine;
	})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbmdpbmVzL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZCQUErQjtBQUcvQixJQUFpQixnQkFBZ0IsQ0FrQmhDO0FBbEJELFdBQWlCLGdCQUFnQjtJQUM3QjtRQUFtQyxpQ0FBZ0M7UUFDL0Q7bUJBQ0ksaUJBQU87UUFDWCxDQUFDO1FBRUQsZ0NBQVEsR0FBUixVQUFTLFFBQXlCLEVBQUUsT0FBaUI7WUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUssNkJBQUssR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7OztvQkFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLE1BQU0sZ0JBQUMsSUFBSSxFQUFDO29CQUNoQixDQUFDO29CQUVELHNCQUFPLFFBQVEsRUFBQzs7O1NBQ25CO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBaEJELENBQW1DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBZ0JsRTtJQWhCWSw4QkFBYSxnQkFnQnpCLENBQUE7QUFDTCxDQUFDLEVBbEJnQixnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQWtCaEMifQ==

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var compose_1 = __webpack_require__(6);
	var ModelProxyEngine;
	(function (ModelProxyEngine) {
	    var BaseEngine = (function (_super) {
	        __extends(BaseEngine, _super);
	        function BaseEngine() {
	            return _super.call(this) || this;
	        }
	        BaseEngine.prototype.getStatePath = function (instance) {
	            if (instance.states && instance.state) {
	                return instance.states[instance.state] || "";
	            }
	            return "";
	        };
	        return BaseEngine;
	    }(compose_1.ModelProxy.Compose));
	    ModelProxyEngine.BaseEngine = BaseEngine;
	})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbmdpbmVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkM7QUFJN0MsSUFBaUIsZ0JBQWdCLENBbUJoQztBQW5CRCxXQUFpQixnQkFBZ0I7SUFDN0I7UUFBeUMsOEJBQTZCO1FBQ2xFO21CQUNJLGlCQUFPO1FBQ1gsQ0FBQztRQU9ELGlDQUFZLEdBQVosVUFBYSxRQUF5QjtZQUNsQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELENBQUM7WUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FBQyxBQWpCRCxDQUF5QyxvQkFBVSxDQUFDLE9BQU8sR0FpQjFEO0lBakJxQiwyQkFBVSxhQWlCL0IsQ0FBQTtBQUNMLENBQUMsRUFuQmdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBbUJoQyJ9

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var _ = __webpack_require__(3);
	var ModelProxy;
	(function (ModelProxy) {
	    var Compose = (function () {
	        function Compose() {
	            this.middlewares = [];
	        }
	        Compose.prototype.use = function (func) {
	            if (!_.isFunction(func)) {
	                throw new TypeError("middleware must be a function！");
	            }
	            this.middlewares.push(func);
	        };
	        Compose.prototype.compose = function () {
	            var _this = this;
	            if (!Array.isArray(this.middlewares))
	                throw new TypeError("Middleware stack must be an array!");
	            for (var _i = 0, _a = this.middlewares; _i < _a.length; _i++) {
	                var fn = _a[_i];
	                if (typeof fn !== "function")
	                    throw new TypeError("Middleware must be composed of functions!");
	            }
	            return function (context, next) {
	                return new Promise(function (resolve, reject) {
	                    var index = -1;
	                    var dispatch = function (i) {
	                        return new Promise(function (resolve1) {
	                            var fn = _this.middlewares[i];
	                            if (i <= index) {
	                                return reject(new Error("next() called multiple times" + i + "-" + index));
	                            }
	                            index = i;
	                            if (i === _this.middlewares.length)
	                                fn = next;
	                            if (!fn) {
	                                return resolve1(context);
	                            }
	                            try {
	                                fn(context, function () { return __awaiter(_this, void 0, void 0, function () {
	                                    return __generator(this, function (_a) {
	                                        switch (_a.label) {
	                                            case 0: return [4 /*yield*/, dispatch(i + 1)];
	                                            case 1:
	                                                _a.sent();
	                                                resolve1();
	                                                return [2 /*return*/];
	                                        }
	                                    });
	                                }); }).catch(reject);
	                            }
	                            catch (err) {
	                                console.log("compose error" + err);
	                                reject(err);
	                            }
	                        });
	                    };
	                    return dispatch(0).then(resolve);
	                });
	            };
	        };
	        Compose.prototype.errorHandle = function (ctx, err) {
	            ctx.isError = true;
	            ctx.err = err;
	            console.error("compose--", err);
	        };
	        Compose.prototype.callback = function (complete) {
	            var _this = this;
	            var fn = this.compose();
	            return function (options) {
	                var ctx = _.extend({}, options || {});
	                var promise = fn(ctx, function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
	                    return __generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0: return [4 /*yield*/, next()];
	                            case 1:
	                                _a.sent();
	                                return [2 /*return*/];
	                        }
	                    });
	                }); }).catch(function (err) {
	                    _this.errorHandle(ctx, err);
	                }).finally(function () {
	                    complete(ctx);
	                });
	                return promise;
	            };
	        };
	        return Compose;
	    }());
	    ModelProxy.Compose = Compose;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJzL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTRCO0FBSTVCLElBQWlCLFVBQVUsQ0FvRzFCO0FBcEdELFdBQWlCLFVBQVU7SUFJdkI7UUFHSTtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFPRCxxQkFBRyxHQUFILFVBQUksSUFBYztZQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQU1ELHlCQUFPLEdBQVA7WUFBQSxpQkFxQ0M7WUFwQ0csRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFBQyxNQUFNLElBQUksU0FBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDaEcsR0FBRyxDQUFDLENBQWEsVUFBZ0IsRUFBaEIsS0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtnQkFBNUIsSUFBTSxFQUFFLFNBQUE7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDO29CQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQzthQUNsRztZQUVELE1BQU0sQ0FBQyxVQUFDLE9BQVUsRUFBRSxJQUFjO2dCQUM5QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFD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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var interfaceFactory = __webpack_require__(8);
	var engineFactory = __webpack_require__(1);
	var index_1 = __webpack_require__(10);
	var compose = __webpack_require__(6);
	var tv4 = __webpack_require__(14);
	var _ = __webpack_require__(3);
	var ModelProxy;
	(function (ModelProxy_1) {
	    var ModelProxy = (function (_super) {
	        __extends(ModelProxy, _super);
	        function ModelProxy() {
	            var _this = _super.call(this) || this;
	            _this.interfaces = {};
	            return _this;
	        }
	        ModelProxy.prototype.addEngines = function (engines) {
	            _.each(engines, function (val, key) {
	                engineFactory.ModelProxy.engineFactory.add(key, val, true);
	            });
	            return this;
	        };
	        ModelProxy.prototype.initInterfaces = function (config) {
	            var ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();
	            _.each(config.interfaces, function (i) {
	                ifFactory.add(i.key, _.extend({}, {
	                    ns: config.key,
	                    engine: config.engine,
	                    states: config.states,
	                    state: config.state,
	                    mockDir: config.mockDir
	                }, i));
	            });
	            return ifFactory;
	        };
	        ModelProxy.prototype.loadConfig = function (config) {
	            return __awaiter(this, void 0, void 0, function () {
	                var valid;
	                return __generator(this, function (_a) {
	                    valid = tv4.validateResult(config, index_1.default.proxyConfigSchema);
	                    if (!valid.valid) {
	                        throw valid.error;
	                    }
	                    this.interfaces[config.key] = this.initInterfaces(config);
	                    return [2 /*return*/, this];
	                });
	            });
	        };
	        ModelProxy.prototype.getNs = function (ns) {
	            if (!this.interfaces.hasOwnProperty(ns)) {
	                var nses = _.map(this.interfaces, function (val, key) {
	                    return key;
	                });
	                throw new Error("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u3010" + nses.join(',') + "\u3011");
	            }
	            return this.interfaces[ns];
	        };
	        return ModelProxy;
	    }(compose.ModelProxy.Compose));
	    ModelProxy_1.ModelProxy = ModelProxy;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicy9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esc0RBQXdEO0FBQ3hELGdEQUFrRDtBQUNsRCwwQ0FBdUM7QUFDdkMsbUNBQXFDO0FBQ3JDLHlCQUEyQjtBQUMzQiwwQkFBNEI7QUFFNUIsSUFBaUIsVUFBVSxDQTJFMUI7QUEzRUQsV0FBaUIsWUFBVTtJQUN2QjtRQUFnQyw4QkFBK0I7UUFHM0Q7WUFBQSxZQUNJLGlCQUFPLFNBQ1Y7WUFKTyxnQkFBVSxHQUFvRSxFQUFFLENBQUM7O1FBSXpGLENBQUM7UUFNRCwrQkFBVSxHQUFWLFVBQVcsT0FBbUM7WUFDMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDckIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFPTyxtQ0FBYyxHQUF0QixVQUF1QixNQUFvQjtZQUN2QyxJQUFJLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRW5FLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQWtCO2dCQUN6QyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQzlCLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRztvQkFDZCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07b0JBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO29CQUNuQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQzFCLEVBQUUsQ0FBQyxDQUFvQixDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFPSywrQkFBVSxHQUFoQixVQUFpQixNQUFvQjs7b0JBQzdCLEtBQUs7OzRCQUFxQixHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFPLENBQUMsaUJBQW1DLENBQUM7b0JBRXJHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN0QixDQUFDO29CQUVELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTFELHNCQUFPLElBQUksRUFBQzs7O1NBQ2Y7UUFPRCwwQkFBSyxHQUFMLFVBQU0sRUFBVTtZQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztvQkFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUFPLEVBQUUsK0RBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBRyxDQUFDLENBQUM7WUFDN0QsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDTCxpQkFBQztJQUFELENBQUMsQUF6RUQsQ0FBZ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBeUV6RDtJQXpFWSx1QkFBVSxhQXlFdEIsQ0FBQTtBQUNMLENBQUMsRUEzRWdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBMkUxQiJ9

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var method_1 = __webpack_require__(9);
	var _ = __webpack_require__(3);
	var factory = __webpack_require__(2);
	var engineFactory = __webpack_require__(1);
	var ModelProxy;
	(function (ModelProxy) {
	    var InterfaceFactory = (function (_super) {
	        __extends(InterfaceFactory, _super);
	        function InterfaceFactory() {
	            return _super.call(this) || this;
	        }
	        InterfaceFactory.prototype.add = function (name, intance, override) {
	            if (override === void 0) { override = false; }
	            _super.prototype.add.call(this, name, intance, override);
	            _.extend(this, (_a = {},
	                _a[name] = this.execute.bind(this, intance),
	                _a));
	            var _a;
	        };
	        InterfaceFactory.prototype.execute = function (instance, options) {
	            return __awaiter(this, void 0, void 0, function () {
	                var engine, iinstance;
	                return __generator(this, function (_a) {
	                    iinstance = { method: method_1.MethodType.GET, title: '', path: '', key: '' };
	                    _.extend(iinstance, instance, options.instance || {});
	                    engine = engineFactory.ModelProxy.engineFactory.use(iinstance.engine);
	                    return [2 /*return*/, engine.proxy(iinstance, options)];
	                });
	            });
	        };
	        return InterfaceFactory;
	    }(factory.ModelProxy.BaseFactory));
	    ModelProxy.InterfaceFactory = InterfaceFactory;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlicy9pbnRlcmZhY2UuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQThDO0FBQzlDLDBCQUE0QjtBQUM1Qix3Q0FBMEM7QUFDMUMsZ0RBQWtEO0FBR2xELElBQWlCLFVBQVUsQ0FtQzFCO0FBbkNELFdBQWlCLFVBQVU7SUFDdkI7UUFBc0Msb0NBQStDO1FBQ2pGO21CQUFnQixpQkFBTztRQUFFLENBQUM7UUFTMUIsOEJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxPQUF3QixFQUFFLFFBQXlCO1lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO1lBQ2pFLGlCQUFNLEdBQUcsWUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRW5DLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSTtnQkFDVCxHQUFDLElBQUksSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO29CQUMxQyxDQUFDOztRQUNQLENBQUM7UUFRSyxrQ0FBTyxHQUFiLFVBQWMsUUFBeUIsRUFBRSxPQUFpQjs7b0JBQ2xELE1BQU0sRUFDTixTQUFTOztnQ0FBb0IsRUFBRSxNQUFNLEVBQUUsbUJBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7b0JBRXpGLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUN0RCxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFdEUsc0JBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztTQUMzQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQWpDRCxDQUFzQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FpQ25FO0lBakNZLDJCQUFnQixtQkFpQzVCLENBQUE7QUFDTCxDQUFDLEVBbkNnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQW1DMUIifQ==

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var MethodType;
	(function (MethodType) {
	    MethodType[MethodType["GET"] = 0] = "GET";
	    MethodType[MethodType["POST"] = 1] = "POST";
	    MethodType[MethodType["DELETE"] = 2] = "DELETE";
	    MethodType[MethodType["PUT"] = 3] = "PUT";
	    MethodType[MethodType["HEAD"] = 4] = "HEAD";
	    MethodType[MethodType["PATCH"] = 5] = "PATCH";
	    MethodType[MethodType["OPTIONS"] = 6] = "OPTIONS";
	})(MethodType = exports.MethodType || (exports.MethodType = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLCtDQUFNLENBQUE7SUFDTix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLDZDQUFLLENBQUE7SUFDTCxpREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBUXJCIn0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(11);
	var proxy_config_schema_1 = __webpack_require__(12);
	var interface_schema_1 = __webpack_require__(13);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    proxyConfigSchema: proxy_config_schema_1.default,
	    interfaceSchema: interface_schema_1.default,
	    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2NoZW1hcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQTZDO0FBQzdDLDZEQUFzRDtBQUN0RCx1REFBaUQ7O0FBRWpELGtCQUFlO0lBQ1gsaUJBQWlCLEVBQUUsNkJBQWlCO0lBQ3BDLGVBQWUsRUFBRSwwQkFBZTtJQUNoQyxpQkFBaUIsRUFBRSwwQkFBZ0IsQ0FBQyxpQkFBaUI7Q0FDeEQsQ0FBQyJ9

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var _ = __webpack_require__(3);
	var _schema = "http://json-schema.org/draft-04/schema#";
	var ModleProxySchema;
	(function (ModleProxySchema) {
	    var BaseTypeBuilder = (function () {
	        function BaseTypeBuilder() {
	            this.data = {};
	        }
	        BaseTypeBuilder.prototype.build = function (type, title, description) {
	            if (type === void 0) { type = "string"; }
	            this.data = _.extend({
	                title: title || "",
	                description: description || "",
	                type: type
	            }, this.data || {});
	            return this;
	        };
	        ;
	        BaseTypeBuilder.prototype.properties = function (props) {
	            this.data = _.extend({
	                properties: props,
	            }, this.data || {});
	            return this;
	        };
	        BaseTypeBuilder.prototype.items = function (items) {
	            this.data = _.extend({
	                items: items,
	            }, this.data || {});
	            return this;
	        };
	        BaseTypeBuilder.prototype.schema = function (schema, id) {
	            if (schema === void 0) { schema = _schema; }
	            if (id === void 0) { id = _schema; }
	            this.data = _.extend({
	                "$schema": schema,
	                id: id
	            }, this.data || {});
	            return this;
	        };
	        BaseTypeBuilder.prototype.required = function () {
	            var keys = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                keys[_i] = arguments[_i];
	            }
	            this.data = _.extend({
	                required: keys
	            }, this.data || {});
	            return this;
	        };
	        BaseTypeBuilder.prototype.toValue = function () {
	            return this.data;
	        };
	        return BaseTypeBuilder;
	    }());
	    ModleProxySchema.BaseTypeBuilder = BaseTypeBuilder;
	    var JsonSchemaBuilder = (function (_super) {
	        __extends(JsonSchemaBuilder, _super);
	        function JsonSchemaBuilder() {
	            return _super.call(this) || this;
	        }
	        JsonSchemaBuilder.init = function () {
	            return new JsonSchemaBuilder();
	        };
	        return JsonSchemaBuilder;
	    }(BaseTypeBuilder));
	    ModleProxySchema.JsonSchemaBuilder = JsonSchemaBuilder;
	})(ModleProxySchema = exports.ModleProxySchema || (exports.ModleProxySchema = {}));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWFzL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwwQkFBNEI7QUFrQjVCLElBQU0sT0FBTyxHQUFXLHlDQUF5QyxDQUFDO0FBRWxFLElBQWlCLGdCQUFnQixDQStEaEM7QUEvREQsV0FBaUIsZ0JBQWdCO0lBQzdCO1FBR0k7WUFBZ0IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFBQyxDQUFDO1FBRWpDLCtCQUFLLEdBQUwsVUFBTSxJQUFnQyxFQUFFLEtBQWMsRUFBRSxXQUFvQjtZQUF0RSxxQkFBQSxFQUFBLGVBQWdDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDakIsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUNsQixXQUFXLEVBQUUsV0FBVyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxJQUFJO2FBQ2IsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLENBQUM7UUFFRixvQ0FBVSxHQUFWLFVBQVcsS0FBcUM7WUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNqQixVQUFVLEVBQUUsS0FBSzthQUNwQixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsK0JBQUssR0FBTCxVQUFNLEtBQWdDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDZixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsZ0NBQU0sR0FBTixVQUFPLE1BQXdCLEVBQUUsRUFBb0I7WUFBOUMsdUJBQUEsRUFBQSxnQkFBd0I7WUFBRSxtQkFBQSxFQUFBLFlBQW9CO1lBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDakIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFO2FBQ1QsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELGtDQUFRLEdBQVI7WUFBUyxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDakIsUUFBUSxFQUFFLElBQUk7YUFDakIsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELGlDQUFPLEdBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQUFDLEFBbERELElBa0RDO0lBbERxQixnQ0FBZSxrQkFrRHBDLENBQUE7SUFHRDtRQUF1QyxxQ0FBZTtRQUNsRDttQkFDSSxpQkFBTztRQUNYLENBQUM7UUFFTSxzQkFBSSxHQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQUFDLEFBUkQsQ0FBdUMsZUFBZSxHQVFyRDtJQVJZLGtDQUFpQixvQkFRN0IsQ0FBQTtBQUNMLENBQUMsRUEvRGdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBK0RoQyJ9

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interface_schema_1 = __webpack_require__(13);
	var builder_1 = __webpack_require__(11);
	var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JsonSchemaBuilder.init().build("object", null, "modelProxy验证配置")
	    .properties({
	    key: JsonSchemaBuilder.init().build().toValue(),
	    title: JsonSchemaBuilder.init().build().toValue(),
	    engine: JsonSchemaBuilder.init().build().toValue(),
	    states: JsonSchemaBuilder.init().build("object").toValue(),
	    state: JsonSchemaBuilder.init().build().toValue(),
	    version: JsonSchemaBuilder.init().build().toValue(),
	    mockDir: JsonSchemaBuilder.init().build().toValue(),
	    interfaces: JsonSchemaBuilder.init().build("array", "接口配置数组")
	        .items(interface_schema_1.default).toValue(),
	}).required("key", "title", "states").toValue();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuY29uZmlnLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWFzL3Byb3h5LmNvbmZpZy5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVEQUFpRDtBQUNqRCxxQ0FBNkM7QUFFckMsSUFBQSxnRUFBaUIsQ0FBc0I7O0FBRS9DLGtCQUFlLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDO0tBQzFFLFVBQVUsQ0FBQztJQUNSLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDL0MsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2xELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsT0FBTyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNuRCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ25ELFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUN4RCxLQUFLLENBQUMsMEJBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtDQUN4QyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMifQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(11);
	var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = JsonSchemaBuilder.init().build("object").properties({
	    key: JsonSchemaBuilder.init().build().toValue(),
	    title: JsonSchemaBuilder.init().build().toValue(),
	    engine: JsonSchemaBuilder.init().build().toValue(),
	    states: JsonSchemaBuilder.init().build("object").toValue(),
	    state: JsonSchemaBuilder.init().build().toValue(),
	    version: JsonSchemaBuilder.init().build().toValue(),
	    method: JsonSchemaBuilder.init().build().toValue(),
	    path: JsonSchemaBuilder.init().build().toValue(),
	    config: JsonSchemaBuilder.init().build("object").toValue(),
	    mockDir: JsonSchemaBuilder.init().build().toValue()
	}).required("key", "title", "method", "path").toValue();
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWFzL2ludGVyZmFjZS5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUE2QztBQUVyQyxJQUFBLGdFQUFpQixDQUFzQjs7QUFFL0Msa0JBQWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvRCxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9DLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUMxRCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbkQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2hELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyJ9

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("tv4");

/***/ }
/******/ ])));
//# sourceMappingURL=node.js.map