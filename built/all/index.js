(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var engineFactory = __webpack_require__(4);
	var proxy_1 = __webpack_require__(9);
	var compose = __webpack_require__(8);
	var index_1 = __webpack_require__(12);
	var base = __webpack_require__(7);
	var methodtype = __webpack_require__(11);
	exports.modelProxy = {
	    Proxy: proxy_1.ModelProxy.ModelProxy,
	    engineFactory: engineFactory.ModelProxy.engineFactory,
	    Compose: compose.ModelProxy.Compose,
	    modelProxySchemaUtils: index_1.default,
	    methods: methodtype.MethodType,
	    BaseEngine: base.ModelProxyEngine.BaseEngine
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var factory = __webpack_require__(5);
	var engines = __webpack_require__(6);
	var ModelProxy;
	(function (ModelProxy) {
	    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
	    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=engine.factory.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _ = __webpack_require__(1);
	var ModelProxy;
	(function (ModelProxy) {
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
	                var engines = _.map(this.intances, function (val, key) {
	                    return key;
	                });
	                throw new Error("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
	            }
	            return this.intances[name];
	        };
	        return BaseFactory;
	    }());
	    ModelProxy.BaseFactory = BaseFactory;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=base.factory.js.map

/***/ },
/* 6 */
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
	var base = __webpack_require__(7);
	var ModelProxyEngine;
	(function (ModelProxyEngine) {
	    var DefaultEngine = (function (_super) {
	        __extends(DefaultEngine, _super);
	        function DefaultEngine() {
	            return _super.call(this) || this;
	        }
	        DefaultEngine.prototype.validate = function (data) {
	            return true;
	        };
	        DefaultEngine.prototype.proxy = function (intance, data, params) {
	            return __awaiter(this, void 0, void 0, function () {
	                return __generator(this, function (_a) {
	                    return [2 /*return*/, data];
	                });
	            });
	        };
	        return DefaultEngine;
	    }(base.ModelProxyEngine.BaseEngine));
	    ModelProxyEngine.DefaultEngine = DefaultEngine;
	})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
	//# sourceMappingURL=default.js.map

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
	var compose_1 = __webpack_require__(8);
	var ModelProxyEngine;
	(function (ModelProxyEngine) {
	    var BaseEngine = (function (_super) {
	        __extends(BaseEngine, _super);
	        function BaseEngine() {
	            return _super.call(this) || this;
	        }
	        return BaseEngine;
	    }(compose_1.ModelProxy.Compose));
	    ModelProxyEngine.BaseEngine = BaseEngine;
	})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
	//# sourceMappingURL=base.js.map

/***/ },
/* 8 */
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
	var _ = __webpack_require__(1);
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
	                var ctx;
	                _.extend(ctx || {}, options || {});
	                return fn(ctx, function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
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
	            };
	        };
	        return Compose;
	    }());
	    ModelProxy.Compose = Compose;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=compose.js.map

/***/ },
/* 9 */
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
	var interfaceFactory = __webpack_require__(10);
	var index_1 = __webpack_require__(12);
	var compose = __webpack_require__(8);
	var tv4 = __webpack_require__(3);
	var _ = __webpack_require__(1);
	var ModelProxy;
	(function (ModelProxy_1) {
	    var ModelProxy = (function (_super) {
	        __extends(ModelProxy, _super);
	        function ModelProxy() {
	            var _this = _super.call(this) || this;
	            _this.interfaces = {};
	            return _this;
	        }
	        ModelProxy.prototype.initInterfaces = function (config) {
	            var ifFacory = new interfaceFactory.ModelProxy.InterfaceFactory();
	            _.each(config.interfaces, function (i) {
	                ifFacory.add(i.key, _.extend({}, {
	                    ns: config.key,
	                    engine: config.engine,
	                    states: config.states,
	                    state: config.state,
	                    mockDir: config.mockDir
	                }, i));
	            });
	            return ifFacory;
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
	                throw new Error("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4");
	            }
	            return this.interfaces[ns];
	        };
	        return ModelProxy;
	    }(compose.ModelProxy.Compose));
	    ModelProxy_1.ModelProxy = ModelProxy;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=proxy.js.map

/***/ },
/* 10 */
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
	var method_1 = __webpack_require__(11);
	var _ = __webpack_require__(1);
	var factory = __webpack_require__(5);
	var engineFactory = __webpack_require__(4);
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
	            this[name] = this.execute.bind(this, intance);
	        };
	        InterfaceFactory.prototype.execute = function (instance, data, params, intanceCover) {
	            return __awaiter(this, void 0, void 0, function () {
	                var engine, iinstance;
	                return __generator(this, function (_a) {
	                    iinstance = { method: method_1.MethodType.GET, title: '', path: '', key: '' };
	                    _.extend(iinstance, instance, intanceCover);
	                    engine = engineFactory.ModelProxy.engineFactory.use(iinstance.engine);
	                    return [2 /*return*/, engine.proxy(iinstance, data, params)];
	                });
	            });
	        };
	        return InterfaceFactory;
	    }(factory.ModelProxy.BaseFactory));
	    ModelProxy.InterfaceFactory = InterfaceFactory;
	})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
	//# sourceMappingURL=interface.factory.js.map

/***/ },
/* 11 */
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
	//# sourceMappingURL=method.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(13);
	var proxy_config_schema_1 = __webpack_require__(14);
	var interface_schema_1 = __webpack_require__(15);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    proxyConfigSchema: proxy_config_schema_1.default,
	    interfaceSchema: interface_schema_1.default,
	    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
	};
	//# sourceMappingURL=index.js.map

/***/ },
/* 13 */
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
	var _ = __webpack_require__(1);
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
	//# sourceMappingURL=builder.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interface_schema_1 = __webpack_require__(15);
	var builder_1 = __webpack_require__(13);
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
	//# sourceMappingURL=proxy.config.schema.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(13);
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
	//# sourceMappingURL=interface.schema.js.map

/***/ }
])));
//# sourceMappingURL=index.js.map