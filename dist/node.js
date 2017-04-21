module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
var BaseError = (function () {
    function BaseError(message) {
        this.message = message;
        this.stack = (new Error()).stack;
    }
    return BaseError;
}());
exports.BaseError = BaseError;
var ModelProxyValidaterError = (function (_super) {
    __extends(ModelProxyValidaterError, _super);
    function ModelProxyValidaterError(message, error, missing) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.ValidaterError";
        _this.error = error;
        _this.missing = missing;
        return _this;
    }
    return ModelProxyValidaterError;
}(BaseError));
exports.ModelProxyValidaterError = ModelProxyValidaterError;
var ModelProxyMissingError = (function (_super) {
    __extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7SUFLSSxtQkFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDhCQUFTO0FBZXRCO0lBQThDLDRDQUFTO0lBSW5ELGtDQUFZLE9BQWUsRUFBRSxLQUF1RCxFQUFFLE9BQW9CO1FBQTFHLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBS2pCO1FBSEcsS0FBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztRQUN4QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDM0IsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQVhELENBQThDLFNBQVMsR0FXdEQ7QUFYWSw0REFBd0I7QUFnQnJDO0lBQTRDLDBDQUFTO0lBQ2pELGdDQUFZLE9BQWU7UUFBM0IsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FHakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUMxQyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBNEMsU0FBUyxHQU1wRDtBQU5ZLHdEQUFzQiJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errors_1 = __webpack_require__(0);
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
            if (!name || !this.instances.hasOwnProperty(name)) {
                var engines = Object.keys(this.instances);
                throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
            }
            return this.instances[name];
        };
        return BaseFactory;
    }());
    ModelProxy.BaseFactory = BaseFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvYmFzZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBa0Q7QUFFbEQsSUFBaUIsVUFBVSxDQWtEMUI7QUFsREQsV0FBaUIsVUFBVTtJQUl2QjtRQUdJO1lBRlUsY0FBUyxHQUF5QixFQUFFLENBQUM7UUFFL0IsQ0FBQztRQVFqQix5QkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLE9BQVUsRUFBRSxRQUF5QjtZQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtZQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBYSxJQUFJLDZCQUFXLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDbkMsQ0FBQztRQU1ELHlCQUFHLEdBQUgsVUFBSSxJQUFZO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBTUQseUJBQUcsR0FBSCxVQUFJLElBQVk7WUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBSTFDLE1BQU0sSUFBSSwrQkFBc0IsQ0FBQyxrQ0FBWSxJQUFJLCtEQUF1QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFHLENBQUMsQ0FBQztZQUNsRyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FBQyxBQTdDRCxJQTZDQztJQTdDWSxzQkFBVyxjQTZDdkIsQ0FBQTtBQUNMLENBQUMsRUFsRGdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBa0QxQiJ9

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
var ModelProxy;
(function (ModelProxy) {
    var Compose = (function () {
        function Compose() {
            this.middlewares = [];
        }
        Compose.prototype.use = function (func) {
            if (typeof func !== "function") {
                throw new TypeError("middleware must be a function！");
            }
            this.middlewares.push(func);
        };
        Compose.prototype.clear = function () {
            this.middlewares.length = 0;
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
                        return new Promise(function (resolve1) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var fn, err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fn = this.middlewares[i];
                                        if (i <= index) {
                                            return [2 /*return*/, reject(new Error("next() called multiple times" + i + "-" + index))];
                                        }
                                        index = i;
                                        if (i === this.middlewares.length)
                                            fn = next;
                                        if (!fn) {
                                            return [2 /*return*/, resolve1(context)];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, fn(context, function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, dispatch(i + 1)];
                                                        case 1:
                                                            _a.sent();
                                                            resolve1();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        reject(err_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                    };
                    return dispatch(0).then(resolve.bind(context));
                });
            };
        };
        Compose.prototype.errorHandle = function (ctx, err) {
            ctx.isError = true;
            ctx.err = err;
        };
        Compose.prototype.callback = function (complete) {
            var _this = this;
            var fn = this.compose();
            return function (options) {
                var ctx = Object.assign(options || {}, {});
                var promise = fn(ctx, function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, next()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).then(function () {
                    complete(ctx);
                }).catch(function (err) {
                    _this.errorHandle(ctx, err);
                });
                return promise;
            };
        };
        return Compose;
    }());
    ModelProxy.Compose = Compose;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBaUIsVUFBVSxDQTJHMUI7QUEzR0QsV0FBaUIsVUFBVTtJQUl2QjtRQUdJO1lBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQU9ELHFCQUFHLEdBQUgsVUFBSSxJQUFjO1lBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxJQUFJLFNBQVMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBS0QsdUJBQUssR0FBTDtZQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBTUQseUJBQU8sR0FBUDtZQUFBLGlCQXFDQztZQXBDRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNoRyxHQUFHLENBQUMsQ0FBYSxVQUFnQixFQUFoQixLQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO2dCQUE1QixJQUFNLEVBQUUsU0FBQTtnQkFDVCxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUM7b0JBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2FBQ2xHO1lBRUQsTUFBTSxDQUFDLFVBQUMsT0FBVSxFQUFFLElBQWM7Z0JBQzlCLE1BQU0sQ0FB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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var factory = __webpack_require__(1);
var engines = __webpack_require__(13);
var ModelProxy;
(function (ModelProxy) {
    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9lbmdpbmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQTBDO0FBQzFDLDRDQUE4QztBQUU5QyxJQUFpQixVQUFVLENBSTFCO0FBSkQsV0FBaUIsVUFBVTtJQUNWLHdCQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBVyxDQUFDO0lBRTNFLFdBQUEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLEVBSmdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSTFCIn0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
var _schema = "http://json-schema.org/draft-04/schema#";
var ModleProxySchema;
(function (ModleProxySchema) {
    var BaseTypeBuilder = (function () {
        function BaseTypeBuilder() {
            this.data = {};
        }
        BaseTypeBuilder.prototype.build = function (type, title, description) {
            if (type === void 0) { type = "string"; }
            this.data = Object.assign({
                title: title || "",
                description: description || "",
                type: type
            }, this.data || {});
            return this;
        };
        ;
        BaseTypeBuilder.prototype.properties = function (props) {
            this.data = Object.assign({
                properties: props,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.items = function (items) {
            this.data = Object.assign({
                items: items,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.schema = function (schema, id) {
            if (schema === void 0) { schema = _schema; }
            if (id === void 0) { id = _schema; }
            this.data = Object.assign({
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
            this.data = Object.assign({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFnQkEsSUFBTSxPQUFPLEdBQVcseUNBQXlDLENBQUM7QUFFbEUsSUFBaUIsZ0JBQWdCLENBK0RoQztBQS9ERCxXQUFpQixnQkFBZ0I7SUFDN0I7UUFHSTtZQUFnQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFFakMsK0JBQUssR0FBTCxVQUFNLElBQXVCLEVBQUUsS0FBYyxFQUFFLFdBQW9CO1lBQTdELHFCQUFBLEVBQUEsZUFBdUI7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSxXQUFXLElBQUksRUFBRTtnQkFDOUIsSUFBSSxFQUFFLElBQUk7YUFDYixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsQ0FBQztRQUVGLG9DQUFVLEdBQVYsVUFBVyxLQUF5QztZQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRSxLQUFLO2FBQ3BCLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCwrQkFBSyxHQUFMLFVBQU0sS0FBd0M7WUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsS0FBSzthQUNmLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxnQ0FBTSxHQUFOLFVBQU8sTUFBd0IsRUFBRSxFQUFvQjtZQUE5Qyx1QkFBQSxFQUFBLGdCQUF3QjtZQUFFLG1CQUFBLEVBQUEsWUFBb0I7WUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixTQUFTLEVBQUUsTUFBTTtnQkFDakIsRUFBRSxFQUFFLEVBQUU7YUFDVCxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsa0NBQVEsR0FBUjtZQUFTLGNBQWlCO2lCQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7Z0JBQWpCLHlCQUFpQjs7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsSUFBSTthQUNqQixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsaUNBQU8sR0FBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFDTCxzQkFBQztJQUFELENBQUMsQUFsREQsSUFrREM7SUFsRHFCLGdDQUFlLGtCQWtEcEMsQ0FBQTtJQUdEO1FBQXVDLHFDQUFlO1FBQ2xEO21CQUNJLGlCQUFPO1FBQ1gsQ0FBQztRQUVNLHNCQUFJLEdBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFDTCx3QkFBQztJQUFELENBQUMsQUFSRCxDQUF1QyxlQUFlLEdBUXJEO0lBUlksa0NBQWlCLG9CQVE3QixDQUFBO0FBQ0wsQ0FBQyxFQS9EZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUErRGhDIn0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
var tv4 = __webpack_require__(9);
var jpp = __webpack_require__(7);
var compose_1 = __webpack_require__(2);
var errors_1 = __webpack_require__(0);
var ModelProxyEngine;
(function (ModelProxyEngine) {
    var BaseEngine = (function (_super) {
        __extends(BaseEngine, _super);
        function BaseEngine() {
            return _super.call(this) || this;
        }
        BaseEngine.prototype.validateTv4 = function (obj, schema) {
            var valid = tv4.validateMultiple(obj, schema);
            if (!valid.valid) {
                throw new errors_1.ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
            }
            return true;
        };
        BaseEngine.prototype.validate = function (instance, options) {
            instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
            instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);
            return true;
        };
        BaseEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {}];
                });
            });
        };
        BaseEngine.prototype.getStatePath = function (instance) {
            if (instance.states && instance.state) {
                return instance.states[instance.state] || "";
            }
            return "";
        };
        BaseEngine.prototype.replacePath = function (instance, options) {
            var pathRegexp = /{[^}]*}/g;
            var matchs = instance.path.match(pathRegexp);
            for (var key in matchs) {
                if (matchs.hasOwnProperty(key)) {
                    var match = matchs[key];
                    var field = match.match(/[^{}]/g).join('');
                    if (jpp(options).has(field)) {
                        instance.path = instance.path.replace(match, jpp(options).get(field));
                    }
                    else {
                        throw new Error("\u66FF\u6362Path\u51FA\u9519\uFF0C\u6CA1\u6709\u627E\u5230\u5B57\u6BB5" + field + "\uFF01");
                    }
                }
            }
            return instance.path;
        };
        BaseEngine.prototype.getFullPath = function (instance, options) {
            var url = "" + this.getStatePath(instance) + this.replacePath(instance, options);
            return url;
        };
        return BaseEngine;
    }(compose_1.ModelProxy.Compose));
    ModelProxyEngine.BaseEngine = BaseEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUMzQixrQ0FBb0M7QUFJcEMsMkNBQTZDO0FBRzdDLHlDQUFrRjtBQUdsRixJQUFpQixnQkFBZ0IsQ0F1R2hDO0FBdkdELFdBQWlCLGdCQUFnQjtJQUM3QjtRQUF5Qyw4QkFBNkI7UUFDbEU7bUJBQ0ksaUJBQU87UUFDWCxDQUFDO1FBUVMsZ0NBQVcsR0FBckIsVUFBc0IsR0FBUyxFQUFFLE1BQXNCO1lBQ25ELElBQUksS0FBSyxHQUFvQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQXdCLENBQUMsQ0FBQztZQUVqRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sSUFBSSxpQ0FBd0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQVFELDZCQUFRLEdBQVIsVUFBUyxRQUF5QixFQUFFLE9BQWlCO1lBQ2pELFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakYsUUFBUSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV2RixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFRSywwQkFBSyxHQUFYLFVBQVksUUFBeUIsRUFBRSxPQUFpQjs7O29CQUNwRCxzQkFBTyxFQUFFLEVBQUM7OztTQUNiO1FBT0QsaUNBQVksR0FBWixVQUFhLFFBQXlCO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsQ0FBQztZQUVELE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBT0QsZ0NBQVcsR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7WUFDcEQsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRS9DLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUkzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO29CQUN6RSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsMkVBQWtCLEtBQUssV0FBRyxDQUFDLENBQUM7b0JBQ2hELENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO1FBT0QsZ0NBQVcsR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7WUFDcEQsSUFBSSxHQUFHLEdBQUcsS0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBU2pGLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLEFBckdELENBQXlDLG9CQUFVLENBQUMsT0FBTyxHQXFHMUQ7SUFyR3FCLDJCQUFVLGFBcUcvQixDQUFBO0FBQ0wsQ0FBQyxFQXZHZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUF1R2hDIn0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var builder_1 = __webpack_require__(4);
var proxy_config_schema_1 = __webpack_require__(15);
var interface_schema_1 = __webpack_require__(8);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    proxyConfigSchema: proxy_config_schema_1.default,
    interfaceSchema: interface_schema_1.default,
    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQTZDO0FBQzdDLDZEQUFzRDtBQUN0RCx1REFBaUQ7O0FBRWpELGtCQUFlO0lBQ1gsaUJBQWlCLEVBQUUsNkJBQWlCO0lBQ3BDLGVBQWUsRUFBRSwwQkFBZTtJQUNoQyxpQkFBaUIsRUFBRSwwQkFBZ0IsQ0FBQyxpQkFBaUI7Q0FDeEQsQ0FBQyJ9

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(12);
module.exports = api;


/**
 * Convenience wrapper around the api.
 * Calls `.get` when called with an `object` and a `pointer`.
 * Calls `.set` when also called with `value`.
 * If only supplied `object`, returns a partially applied function, mapped to the object.
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @param value
 * @returns {*}
 */

function api (obj, pointer, value) {
    // .set()
    if (arguments.length === 3) {
        return api.set(obj, pointer, value);
    }
    // .get()
    if (arguments.length === 2) {
        return api.get(obj, pointer);
    }
    // Return a partially applied function on `obj`.
    var wrapped = api.bind(api, obj);

    // Support for oo style
    for (var name in api) {
        if (api.hasOwnProperty(name)) {
            wrapped[name] = api[name].bind(wrapped, obj);
        }
    }
    return wrapped;
}


/**
 * Lookup a json pointer in an object
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @returns {*}
 */
api.get = function get (obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);

    for (var i = 0; i < refTokens.length; ++i) {
        var tok = refTokens[i];
        if (!(typeof obj == 'object' && tok in obj)) {
            throw new Error('Invalid reference token: ' + tok);
        }
        obj = obj[tok];
    }
    return obj;
};

/**
 * Sets a value on an object
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @param value
 */
api.set = function set (obj, pointer, value) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer),
      nextTok = refTokens[0];

    for (var i = 0; i < refTokens.length - 1; ++i) {
        var tok = refTokens[i];
        if (tok === '-' && Array.isArray(obj)) {
          tok = obj.length;
        }
        nextTok = refTokens[i + 1];

        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            } else {
                obj[tok] = {};
            }
        }
        obj = obj[tok];
    }
    if (nextTok === '-' && Array.isArray(obj)) {
      nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};

/**
 * Removes an attribute
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 */
api.remove = function (obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
    var finalToken = refTokens[refTokens.length -1];
    if (finalToken === undefined) {
        throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
    }

    var parent = api.get(obj, refTokens.slice(0, -1));
    if (Array.isArray(parent)) {
      var index = +finalToken;
      if (finalToken === '' && isNaN(index)) {
        throw new Error('Invalid array index: "' + finalToken + '"');
      }

      Array.prototype.splice.call(parent, index, 1);
    } else {
      delete parent[finalToken];
    }
};

/**
 * Returns a (pointer -> value) dictionary for an object
 *
 * @param obj
 * @param {function} descend
 * @returns {}
 */
api.dict = function dict (obj, descend) {
    var results = {};
    api.walk(obj, function (value, pointer) {
        results[pointer] = value;
    }, descend);
    return results;
};

/**
 * Iterates over an object
 * Iterator: function (value, pointer) {}
 *
 * @param obj
 * @param {function} iterator
 * @param {function} descend
 */
api.walk = function walk (obj, iterator, descend) {
    var refTokens = [];

    descend = descend || function (value) {
        var type = Object.prototype.toString.call(value);
        return type === '[object Object]' || type === '[object Array]';
    };

    (function next (cur) {
        each(cur, function (value, key) {
            refTokens.push(String(key));
            if (descend(value)) {
                next(value);
            } else {
                iterator(value, api.compile(refTokens));
            }
            refTokens.pop();
        });
    }(obj));
};

/**
 * Tests if an object has a value for a json pointer
 *
 * @param obj
 * @param pointer
 * @returns {boolean}
 */
api.has = function has (obj, pointer) {
    try {
        api.get(obj, pointer);
    } catch (e) {
        return false;
    }
    return true;
};

/**
 * Escapes a reference token
 *
 * @param str
 * @returns {string}
 */
api.escape = function escape (str) {
    return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
};

/**
 * Unescapes a reference token
 *
 * @param str
 * @returns {string}
 */
api.unescape = function unescape (str) {
    return str.replace(/~1/g, '/').replace(/~0/g, '~');
};

/**
 * Converts a json pointer into a array of reference tokens
 *
 * @param pointer
 * @returns {Array}
 */
api.parse = function parse (pointer) {
    if (pointer === '') { return []; }
    if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
    return pointer.substring(1).split(/\//).map(api.unescape);
};

/**
 * Builds a json pointer from a array of reference tokens
 *
 * @param refTokens
 * @returns {string}
 */
api.compile = function compile (refTokens) {
    if (refTokens.length === 0) { return ''; }
    return '/' + refTokens.map(api.escape).join('/');
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var builder_1 = __webpack_require__(4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2ludGVyZmFjZS5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUE2QztBQUVyQyxJQUFBLGdFQUFpQixDQUFzQjs7QUFFL0Msa0JBQWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvRCxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9DLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUMxRCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbkQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2hELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyJ9

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("tv4");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
var tv4 = __webpack_require__(9);
var jsonPointer = __webpack_require__(7);
var interfaceFactory = __webpack_require__(14);
var engineFactory = __webpack_require__(3);
var index_1 = __webpack_require__(6);
var compose = __webpack_require__(2);
var errors_1 = __webpack_require__(0);
var ModelProxy;
(function (ModelProxy_1) {
    var ModelProxy = (function (_super) {
        __extends(ModelProxy, _super);
        function ModelProxy() {
            var _this = _super.call(this) || this;
            _this.interfaces = {};
            _this.composes = {};
            return _this;
        }
        ModelProxy.prototype.addEngines = function (engines) {
            for (var key in engines) {
                engineFactory.ModelProxy.engineFactory.add(key, engines[key], true);
            }
            return this;
        };
        ModelProxy.prototype.initInterfaces = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            var ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();
            config.interfaces.forEach(function (i) {
                ifFactory.add(i.key, Object.assign({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i, overrideInterfaceConfig || {}));
            });
            return ifFactory;
        };
        ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var valid;
                return __generator(this, function (_a) {
                    valid = tv4.validateResult(config, index_1.default.proxyConfigSchema);
                    if (!valid.valid) {
                        throw valid.error;
                    }
                    this.interfaces[config.key] = this.initInterfaces(config, overrideInterfaceConfig);
                    return [2 /*return*/, this];
                });
            });
        };
        ModelProxy.prototype.execute = function (path, options) {
            return __awaiter(this, void 0, void 0, function () {
                var interfaceInstance;
                return __generator(this, function (_a) {
                    interfaceInstance = null;
                    if (!jsonPointer.has(this.interfaces, path)) {
                        throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                    }
                    interfaceInstance = jsonPointer.get(this.interfaces, path);
                    return [2 /*return*/, interfaceInstance(options)];
                });
            });
        };
        ModelProxy.prototype.getHost = function (path, instance) {
            var interfaceInstance = null;
            if (!jsonPointer.has(this.interfaces, path)) {
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
            }
            interfaceInstance = jsonPointer.get(this.interfaces, path);
            return interfaceInstance["getPath"](instance);
        };
        ModelProxy.prototype.getNs = function (ns) {
            if (!this.interfaces.hasOwnProperty(ns)) {
                var nses = [];
                for (var key in this.interfaces) {
                    nses.push(key);
                }
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u3010" + nses.join(',') + "\u3011");
            }
            return this.interfaces[ns];
        };
        return ModelProxy;
    }(compose.ModelProxy.Compose));
    ModelProxy_1.ModelProxy = ModelProxy;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJCO0FBQzNCLDBDQUE0QztBQU01QyxzREFBd0Q7QUFDeEQsZ0RBQWtEO0FBRWxELDBDQUF1QztBQUN2QyxtQ0FBcUM7QUFDckMsbUNBQWtEO0FBSWxELElBQWlCLFVBQVUsQ0FrSTFCO0FBbElELFdBQWlCLFlBQVU7SUFDdkI7UUFBZ0MsOEJBQStCO1FBSzNEO1lBQUEsWUFDSSxpQkFBTyxTQUNWO1lBTk8sZ0JBQVUsR0FBb0UsRUFBRSxDQUFDO1lBRWpGLGNBQVEsR0FBZ0UsRUFBRSxDQUFDOztRQUluRixDQUFDO1FBTUQsK0JBQVUsR0FBVixVQUFXLE9BQW1DO1lBQzFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFtQk8sbUNBQWMsR0FBdEIsVUFBdUIsTUFBb0IsRUFBRSx1QkFBNkM7WUFBN0Msd0NBQUEsRUFBQSw0QkFBNkM7WUFDdEYsSUFBSSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUVuRSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQWtCO2dCQUN6QyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLEVBQUUsRUFBRSxNQUFN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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLCtDQUFNLENBQUE7SUFDTix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLDZDQUFLLENBQUE7SUFDTCxpREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBUXJCIn0=

/***/ }),
/* 12 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
            var _this = _super.call(this) || this;
            _this.use(function (ctx, next) {
                next();
                return new Promise(function (resolve) {
                    resolve();
                });
            });
            return _this;
        }
        DefaultEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                var fn;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fn = this.callback(function () { });
                            return [4 /*yield*/, fn({})];
                        case 1:
                            _a.sent();
                            console.log(this.getFullPath(instance, options));
                            return [2 /*return*/, {}];
                    }
                });
            });
        };
        return DefaultEngine;
    }(base.ModelProxyEngine.BaseEngine));
    ModelProxyEngine.DefaultEngine = DefaultEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZCQUErQjtBQUcvQixJQUFpQixnQkFBZ0IsQ0F3QmhDO0FBeEJELFdBQWlCLGdCQUFnQjtJQUM3QjtRQUFtQyxpQ0FBZ0M7UUFDL0Q7WUFBQSxZQUNJLGlCQUFPLFNBU1Y7WUFQRyxLQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLENBQUM7Z0JBRVAsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztvQkFDdkIsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQzs7UUFDUCxDQUFDO1FBRUssNkJBQUssR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7O29CQUNoRCxFQUFFOzs7O2lDQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBUSxDQUFDLENBQUM7NEJBRWpDLHFCQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQTs7NEJBQVosU0FBWSxDQUFDOzRCQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFFakQsc0JBQU8sRUFBRSxFQUFDOzs7O1NBQ2I7UUFDTCxvQkFBQztJQUFELENBQUMsQUF0QkQsQ0FBbUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FzQmxFO0lBdEJZLDhCQUFhLGdCQXNCekIsQ0FBQTtBQUNMLENBQUMsRUF4QmdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBd0JoQyJ9

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
var factory = __webpack_require__(1);
var engineFactory = __webpack_require__(3);
var ModelProxy;
(function (ModelProxy) {
    var InterfaceFactory = (function (_super) {
        __extends(InterfaceFactory, _super);
        function InterfaceFactory() {
            return _super.call(this) || this;
        }
        InterfaceFactory.prototype.add = function (name, instance, override) {
            if (override === void 0) { override = false; }
            _super.prototype.add.call(this, name, instance, override);
            var func = this.execute.bind(this, instance);
            func.getPath = this.getPath.bind(this, instance);
            Object.assign(this, (_a = {},
                _a[name] = func,
                _a));
            var _a;
        };
        InterfaceFactory.prototype.megreInstance = function (instance, extendInstance) {
            return Object.assign({}, instance, extendInstance);
        };
        InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
            var engine;
            var iinstance = {};
            iinstance = this.megreInstance(instance, extendInstance || {});
            engine = engineFactory.ModelProxy.engineFactory.use("default");
            return engine.getStatePath(iinstance) + iinstance.path;
        };
        InterfaceFactory.prototype.execute = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                var engine, iinstance;
                return __generator(this, function (_a) {
                    iinstance = {};
                    iinstance = this.megreInstance(instance, options.instance || {});
                    engine = engineFactory.ModelProxy.engineFactory.use(iinstance.engine);
                    engine.validate(iinstance, options);
                    return [2 /*return*/, engine.proxy(iinstance, options)];
                });
            });
        };
        return InterfaceFactory;
    }(factory.ModelProxy.BaseFactory));
    ModelProxy.InterfaceFactory = InterfaceFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9pbnRlcmZhY2UuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esd0NBQTBDO0FBQzFDLGdEQUFrRDtBQUlsRCxJQUFpQixVQUFVLENBbUUxQjtBQW5FRCxXQUFpQixVQUFVO0lBQ3ZCO1FBQXNDLG9DQUErQztRQUNqRjttQkFBZ0IsaUJBQU87UUFBRSxDQUFDO1FBUzFCLDhCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsUUFBeUIsRUFBRSxRQUF5QjtZQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtZQUNsRSxpQkFBTSxHQUFHLFlBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUNkLEdBQUMsSUFBSSxJQUFHLElBQUk7b0JBQ2QsQ0FBQzs7UUFDUCxDQUFDO1FBTU8sd0NBQWEsR0FBckIsVUFBc0IsUUFBeUIsRUFBRSxjQUErQjtZQUM1RSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFPTyxrQ0FBTyxHQUFmLFVBQWdCLFFBQXlCLEVBQUUsY0FBK0I7WUFDdEUsSUFBSSxNQUFlLENBQUM7WUFDcEIsSUFBSSxTQUFTLEdBQW9CLEVBQUUsQ0FBQztZQUVwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzRCxDQUFDO1FBUUssa0NBQU8sR0FBYixVQUFjLFFBQXlCLEVBQUUsT0FBaUI7O29CQUNsRCxNQUFNLEVBQ04sU0FBUzs7Z0NBQW9CLEVBQUU7b0JBRW5DLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUVqRSxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFHdEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRXBDLHNCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFDOzs7U0FDM0M7UUFDTCx1QkFBQztJQUFELENBQUMsQUFqRUQsQ0FBc0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBaUVuRTtJQWpFWSwyQkFBZ0IsbUJBaUU1QixDQUFBO0FBQ0wsQ0FBQyxFQW5FZ0IsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFtRTFCIn0=

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var interface_schema_1 = __webpack_require__(8);
var builder_1 = __webpack_require__(4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuY29uZmlnLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Byb3h5LmNvbmZpZy5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVEQUFpRDtBQUNqRCxxQ0FBNkM7QUFFckMsSUFBQSxnRUFBaUIsQ0FBc0I7O0FBRS9DLGtCQUFlLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDO0tBQzFFLFVBQVUsQ0FBQztJQUNSLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDL0MsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2xELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsT0FBTyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNuRCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ25ELFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUN4RCxLQUFLLENBQUMsMEJBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtDQUN4QyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMifQ==

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var engineFactory = __webpack_require__(3);
var proxy_1 = __webpack_require__(10);
var compose = __webpack_require__(2);
var index_1 = __webpack_require__(6);
var base = __webpack_require__(5);
var baseFactory = __webpack_require__(1);
var methodtype = __webpack_require__(11);
var errors = __webpack_require__(0);
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine,
    BaseFactory: baseFactory.ModelProxy.BaseFactory,
    errors: errors
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUF1RDtBQUN2RCxzQ0FBMEM7QUFFMUMsd0NBQTBDO0FBQzFDLHlDQUFvRDtBQUNwRCxxQ0FBdUM7QUFFdkMsaURBQW1EO0FBRW5ELDRDQUE4QztBQUM5QyxzQ0FBd0M7QUFFM0IsUUFBQSxVQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFLGtCQUFVLENBQUMsVUFBVTtJQUM1QixhQUFhLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhO0lBQ3JELE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU87SUFDbkMscUJBQXFCLEVBQUUsZUFBcUI7SUFDNUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVO0lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtJQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXO0lBQy9DLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUMifQ==

/***/ })
/******/ ]);
//# sourceMappingURL=node.js.map