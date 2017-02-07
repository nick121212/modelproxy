(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.modelproxy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
var compose_1 = require("../libs/compose");
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

},{"../libs/compose":5}],2:[function(require,module,exports){
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
var base = require("./base");
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

},{"./base":1}],3:[function(require,module,exports){
"use strict";
var engineFactory = require("./libs/engine.factory");
var proxy_1 = require("./libs/proxy");
var compose = require("./libs/compose");
var index_1 = require("./schemas/index");
var base = require("./engines/base");
var methodtype = require("./models/method");
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine
};

},{"./engines/base":1,"./libs/compose":5,"./libs/engine.factory":6,"./libs/proxy":8,"./models/method":9,"./schemas/index":11}],4:[function(require,module,exports){
"use strict";
var _ = require("lodash");
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

},{"lodash":undefined}],5:[function(require,module,exports){
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
var _ = require("lodash");
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

},{"lodash":undefined}],6:[function(require,module,exports){
"use strict";
var factory = require("./base.factory");
var engines = require("../engines/default");
var ModelProxy;
(function (ModelProxy) {
    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));

},{"../engines/default":2,"./base.factory":4}],7:[function(require,module,exports){
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
var method_1 = require("../models/method");
var _ = require("lodash");
var factory = require("./base.factory");
var engineFactory = require("./engine.factory");
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

},{"../models/method":9,"./base.factory":4,"./engine.factory":6,"lodash":undefined}],8:[function(require,module,exports){
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
var interfaceFactory = require("./interface.factory");
var index_1 = require("../schemas/index");
var compose = require("./compose");
var tv4 = require("tv4");
var _ = require("lodash");
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

},{"../schemas/index":11,"./compose":5,"./interface.factory":7,"lodash":undefined,"tv4":undefined}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
var _ = require("lodash");
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

},{"lodash":undefined}],11:[function(require,module,exports){
"use strict";
var builder_1 = require("./builder");
var proxy_config_schema_1 = require("./proxy.config.schema");
var interface_schema_1 = require("./interface.schema");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    proxyConfigSchema: proxy_config_schema_1.default,
    interfaceSchema: interface_schema_1.default,
    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
};

},{"./builder":10,"./interface.schema":12,"./proxy.config.schema":13}],12:[function(require,module,exports){
"use strict";
var builder_1 = require("./builder");
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

},{"./builder":10}],13:[function(require,module,exports){
"use strict";
var interface_schema_1 = require("./interface.schema");
var builder_1 = require("./builder");
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

},{"./builder":10,"./interface.schema":12}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsdC9ub2RlL2VuZ2luZXMvYmFzZS5qcyIsImJ1aWx0L25vZGUvZW5naW5lcy9kZWZhdWx0LmpzIiwiYnVpbHQvbm9kZS9pbmRleC5qcyIsImJ1aWx0L25vZGUvbGlicy9iYXNlLmZhY3RvcnkuanMiLCJidWlsdC9ub2RlL2xpYnMvY29tcG9zZS5qcyIsImJ1aWx0L25vZGUvbGlicy9lbmdpbmUuZmFjdG9yeS5qcyIsImJ1aWx0L25vZGUvbGlicy9pbnRlcmZhY2UuZmFjdG9yeS5qcyIsImJ1aWx0L25vZGUvbGlicy9wcm94eS5qcyIsImJ1aWx0L25vZGUvbW9kZWxzL21ldGhvZC5qcyIsImJ1aWx0L25vZGUvc2NoZW1hcy9idWlsZGVyLmpzIiwiYnVpbHQvbm9kZS9zY2hlbWFzL2luZGV4LmpzIiwiYnVpbHQvbm9kZS9zY2hlbWFzL2ludGVyZmFjZS5zY2hlbWEuanMiLCJidWlsdC9ub2RlL3NjaGVtYXMvcHJveHkuY29uZmlnLnNjaGVtYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIGNvbXBvc2VfMSA9IHJlcXVpcmUoXCIuLi9saWJzL2NvbXBvc2VcIik7XG52YXIgTW9kZWxQcm94eUVuZ2luZTtcbihmdW5jdGlvbiAoTW9kZWxQcm94eUVuZ2luZSkge1xuICAgIHZhciBCYXNlRW5naW5lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEJhc2VFbmdpbmUsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEJhc2VFbmdpbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmFzZUVuZ2luZTtcbiAgICB9KGNvbXBvc2VfMS5Nb2RlbFByb3h5LkNvbXBvc2UpKTtcbiAgICBNb2RlbFByb3h5RW5naW5lLkJhc2VFbmdpbmUgPSBCYXNlRW5naW5lO1xufSkoTW9kZWxQcm94eUVuZ2luZSA9IGV4cG9ydHMuTW9kZWxQcm94eUVuZ2luZSB8fCAoZXhwb3J0cy5Nb2RlbFByb3h5RW5naW5lID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0O1xuICAgIHJldHVybiB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9O1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIGJhc2UgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xudmFyIE1vZGVsUHJveHlFbmdpbmU7XG4oZnVuY3Rpb24gKE1vZGVsUHJveHlFbmdpbmUpIHtcbiAgICB2YXIgRGVmYXVsdEVuZ2luZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhEZWZhdWx0RW5naW5lLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBEZWZhdWx0RW5naW5lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgRGVmYXVsdEVuZ2luZS5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIERlZmF1bHRFbmdpbmUucHJvdG90eXBlLnByb3h5ID0gZnVuY3Rpb24gKGludGFuY2UsIGRhdGEsIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBEZWZhdWx0RW5naW5lO1xuICAgIH0oYmFzZS5Nb2RlbFByb3h5RW5naW5lLkJhc2VFbmdpbmUpKTtcbiAgICBNb2RlbFByb3h5RW5naW5lLkRlZmF1bHRFbmdpbmUgPSBEZWZhdWx0RW5naW5lO1xufSkoTW9kZWxQcm94eUVuZ2luZSA9IGV4cG9ydHMuTW9kZWxQcm94eUVuZ2luZSB8fCAoZXhwb3J0cy5Nb2RlbFByb3h5RW5naW5lID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZW5naW5lRmFjdG9yeSA9IHJlcXVpcmUoXCIuL2xpYnMvZW5naW5lLmZhY3RvcnlcIik7XG52YXIgcHJveHlfMSA9IHJlcXVpcmUoXCIuL2xpYnMvcHJveHlcIik7XG52YXIgY29tcG9zZSA9IHJlcXVpcmUoXCIuL2xpYnMvY29tcG9zZVwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vc2NoZW1hcy9pbmRleFwiKTtcbnZhciBiYXNlID0gcmVxdWlyZShcIi4vZW5naW5lcy9iYXNlXCIpO1xudmFyIG1ldGhvZHR5cGUgPSByZXF1aXJlKFwiLi9tb2RlbHMvbWV0aG9kXCIpO1xuZXhwb3J0cy5tb2RlbFByb3h5ID0ge1xuICAgIFByb3h5OiBwcm94eV8xLk1vZGVsUHJveHkuTW9kZWxQcm94eSxcbiAgICBlbmdpbmVGYWN0b3J5OiBlbmdpbmVGYWN0b3J5Lk1vZGVsUHJveHkuZW5naW5lRmFjdG9yeSxcbiAgICBDb21wb3NlOiBjb21wb3NlLk1vZGVsUHJveHkuQ29tcG9zZSxcbiAgICBtb2RlbFByb3h5U2NoZW1hVXRpbHM6IGluZGV4XzEuZGVmYXVsdCxcbiAgICBtZXRob2RzOiBtZXRob2R0eXBlLk1ldGhvZFR5cGUsXG4gICAgQmFzZUVuZ2luZTogYmFzZS5Nb2RlbFByb3h5RW5naW5lLkJhc2VFbmdpbmVcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBNb2RlbFByb3h5O1xuKGZ1bmN0aW9uIChNb2RlbFByb3h5KSB7XG4gICAgdmFyIEJhc2VGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQmFzZUZhY3RvcnkoKSB7XG4gICAgICAgICAgICB0aGlzLmludGFuY2VzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgQmFzZUZhY3RvcnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBpbnRhbmNlLCBvdmVycmlkZSkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlID09PSB2b2lkIDApIHsgb3ZlcnJpZGUgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlICYmIHRoaXMuaW50YW5jZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlxcdTVERjJcXHU3RUNGXFx1NUI1OFxcdTU3MjhuYW1lPVxcdTMwMTBcIiArIG5hbWUgKyBcIlxcdTMwMTFcXHU3Njg0ZW5naW5lXFx1RkYwMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW50YW5jZXNbbmFtZV0gPSBpbnRhbmNlO1xuICAgICAgICB9O1xuICAgICAgICBCYXNlRmFjdG9yeS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnRhbmNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBlbmdpbmVzID0gXy5tYXAodGhpcy5pbnRhbmNlcywgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFx1NEUwRFxcdTVCNThcXHU1NzI4bmFtZT1cXHUzMDEwXCIgKyBuYW1lICsgXCJcXHUzMDExXFx1NzY4NGVuZ2luZVxcdUZGMDFcXHU1RjUzXFx1NTI0RGVuZ2luZXNcXHVGRjFBXFx1MzAxMFwiICsgZW5naW5lcy5qb2luKCcsJykgKyBcIlxcdTMwMTFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRhbmNlc1tuYW1lXTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEJhc2VGYWN0b3J5O1xuICAgIH0oKSk7XG4gICAgTW9kZWxQcm94eS5CYXNlRmFjdG9yeSA9IEJhc2VGYWN0b3J5O1xufSkoTW9kZWxQcm94eSA9IGV4cG9ydHMuTW9kZWxQcm94eSB8fCAoZXhwb3J0cy5Nb2RlbFByb3h5ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuZmFjdG9yeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0O1xuICAgIHJldHVybiB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9O1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIE1vZGVsUHJveHk7XG4oZnVuY3Rpb24gKE1vZGVsUHJveHkpIHtcbiAgICB2YXIgQ29tcG9zZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbXBvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLm1pZGRsZXdhcmVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgQ29tcG9zZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm1pZGRsZXdhcmUgbXVzdCBiZSBhIGZ1bmN0aW9u77yBXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5taWRkbGV3YXJlcy5wdXNoKGZ1bmMpO1xuICAgICAgICB9O1xuICAgICAgICBDb21wb3NlLnByb3RvdHlwZS5jb21wb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLm1pZGRsZXdhcmVzKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlkZGxld2FyZSBzdGFjayBtdXN0IGJlIGFuIGFycmF5IVwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm1pZGRsZXdhcmVzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaWRkbGV3YXJlIG11c3QgYmUgY29tcG9zZWQgb2YgZnVuY3Rpb25zIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IF90aGlzLm1pZGRsZXdhcmVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwibmV4dCgpIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1wiICsgaSArIFwiLVwiICsgaW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBfdGhpcy5taWRkbGV3YXJlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuID0gbmV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlMShjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oY29udGV4dCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBkaXNwYXRjaChpICsgMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlMSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvc2UgZXJyb3JcIiArIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goMCkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIENvbXBvc2UucHJvdG90eXBlLmVycm9ySGFuZGxlID0gZnVuY3Rpb24gKGN0eCwgZXJyKSB7XG4gICAgICAgICAgICBjdHguaXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBjdHguZXJyID0gZXJyO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNvbXBvc2UtLVwiLCBlcnIpO1xuICAgICAgICB9O1xuICAgICAgICBDb21wb3NlLnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBmbiA9IHRoaXMuY29tcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN0eDtcbiAgICAgICAgICAgICAgICBfLmV4dGVuZChjdHggfHwge30sIG9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbihjdHgsIGZ1bmN0aW9uIChjdHgsIG5leHQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbmV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lcnJvckhhbmRsZShjdHgsIGVycik7XG4gICAgICAgICAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKGN0eCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29tcG9zZTtcbiAgICB9KCkpO1xuICAgIE1vZGVsUHJveHkuQ29tcG9zZSA9IENvbXBvc2U7XG59KShNb2RlbFByb3h5ID0gZXhwb3J0cy5Nb2RlbFByb3h5IHx8IChleHBvcnRzLk1vZGVsUHJveHkgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBmYWN0b3J5ID0gcmVxdWlyZShcIi4vYmFzZS5mYWN0b3J5XCIpO1xudmFyIGVuZ2luZXMgPSByZXF1aXJlKFwiLi4vZW5naW5lcy9kZWZhdWx0XCIpO1xudmFyIE1vZGVsUHJveHk7XG4oZnVuY3Rpb24gKE1vZGVsUHJveHkpIHtcbiAgICBNb2RlbFByb3h5LmVuZ2luZUZhY3RvcnkgPSBuZXcgZmFjdG9yeS5Nb2RlbFByb3h5LkJhc2VGYWN0b3J5KCk7XG4gICAgTW9kZWxQcm94eS5lbmdpbmVGYWN0b3J5LmFkZChcImRlZmF1bHRcIiwgbmV3IGVuZ2luZXMuTW9kZWxQcm94eUVuZ2luZS5EZWZhdWx0RW5naW5lKCkpO1xufSkoTW9kZWxQcm94eSA9IGV4cG9ydHMuTW9kZWxQcm94eSB8fCAoZXhwb3J0cy5Nb2RlbFByb3h5ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuZ2luZS5mYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdDtcbiAgICByZXR1cm4geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfTtcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBtZXRob2RfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvbWV0aG9kXCIpO1xudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIGZhY3RvcnkgPSByZXF1aXJlKFwiLi9iYXNlLmZhY3RvcnlcIik7XG52YXIgZW5naW5lRmFjdG9yeSA9IHJlcXVpcmUoXCIuL2VuZ2luZS5mYWN0b3J5XCIpO1xudmFyIE1vZGVsUHJveHk7XG4oZnVuY3Rpb24gKE1vZGVsUHJveHkpIHtcbiAgICB2YXIgSW50ZXJmYWNlRmFjdG9yeSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhJbnRlcmZhY2VGYWN0b3J5LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBJbnRlcmZhY2VGYWN0b3J5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgSW50ZXJmYWNlRmFjdG9yeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGludGFuY2UsIG92ZXJyaWRlKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT09IHZvaWQgMCkgeyBvdmVycmlkZSA9IGZhbHNlOyB9XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIG5hbWUsIGludGFuY2UsIG92ZXJyaWRlKTtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB0aGlzLmV4ZWN1dGUuYmluZCh0aGlzLCBpbnRhbmNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgSW50ZXJmYWNlRmFjdG9yeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgZGF0YSwgcGFyYW1zLCBpbnRhbmNlQ292ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5naW5lLCBpaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBpaW5zdGFuY2UgPSB7IG1ldGhvZDogbWV0aG9kXzEuTWV0aG9kVHlwZS5HRVQsIHRpdGxlOiAnJywgcGF0aDogJycsIGtleTogJycgfTtcbiAgICAgICAgICAgICAgICAgICAgXy5leHRlbmQoaWluc3RhbmNlLCBpbnN0YW5jZSwgaW50YW5jZUNvdmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lID0gZW5naW5lRmFjdG9yeS5Nb2RlbFByb3h5LmVuZ2luZUZhY3RvcnkudXNlKGlpbnN0YW5jZS5lbmdpbmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZW5naW5lLnByb3h5KGlpbnN0YW5jZSwgZGF0YSwgcGFyYW1zKV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEludGVyZmFjZUZhY3Rvcnk7XG4gICAgfShmYWN0b3J5Lk1vZGVsUHJveHkuQmFzZUZhY3RvcnkpKTtcbiAgICBNb2RlbFByb3h5LkludGVyZmFjZUZhY3RvcnkgPSBJbnRlcmZhY2VGYWN0b3J5O1xufSkoTW9kZWxQcm94eSA9IGV4cG9ydHMuTW9kZWxQcm94eSB8fCAoZXhwb3J0cy5Nb2RlbFByb3h5ID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZS5mYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdDtcbiAgICByZXR1cm4geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfTtcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBpbnRlcmZhY2VGYWN0b3J5ID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlLmZhY3RvcnlcIik7XG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi9zY2hlbWFzL2luZGV4XCIpO1xudmFyIGNvbXBvc2UgPSByZXF1aXJlKFwiLi9jb21wb3NlXCIpO1xudmFyIHR2NCA9IHJlcXVpcmUoXCJ0djRcIik7XG52YXIgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG52YXIgTW9kZWxQcm94eTtcbihmdW5jdGlvbiAoTW9kZWxQcm94eV8xKSB7XG4gICAgdmFyIE1vZGVsUHJveHkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoTW9kZWxQcm94eSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gTW9kZWxQcm94eSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5pbnRlcmZhY2VzID0ge307XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgTW9kZWxQcm94eS5wcm90b3R5cGUuaW5pdEludGVyZmFjZXMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgaWZGYWNvcnkgPSBuZXcgaW50ZXJmYWNlRmFjdG9yeS5Nb2RlbFByb3h5LkludGVyZmFjZUZhY3RvcnkoKTtcbiAgICAgICAgICAgIF8uZWFjaChjb25maWcuaW50ZXJmYWNlcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICBpZkZhY29yeS5hZGQoaS5rZXksIF8uZXh0ZW5kKHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5zOiBjb25maWcua2V5LFxuICAgICAgICAgICAgICAgICAgICBlbmdpbmU6IGNvbmZpZy5lbmdpbmUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczogY29uZmlnLnN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGNvbmZpZy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9ja0RpcjogY29uZmlnLm1vY2tEaXJcbiAgICAgICAgICAgICAgICB9LCBpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpZkZhY29yeTtcbiAgICAgICAgfTtcbiAgICAgICAgTW9kZWxQcm94eS5wcm90b3R5cGUubG9hZENvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHR2NC52YWxpZGF0ZVJlc3VsdChjb25maWcsIGluZGV4XzEuZGVmYXVsdC5wcm94eUNvbmZpZ1NjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHZhbGlkLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJmYWNlc1tjb25maWcua2V5XSA9IHRoaXMuaW5pdEludGVyZmFjZXMoY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXNdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE1vZGVsUHJveHkucHJvdG90eXBlLmdldE5zID0gZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW50ZXJmYWNlcy5oYXNPd25Qcm9wZXJ0eShucykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXHU2Q0ExXFx1NjcwOVxcdTYyN0VcXHU1MjMwXCIgKyBucyArIFwiXFx1N0E3QVxcdTk1RjRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcmZhY2VzW25zXTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE1vZGVsUHJveHk7XG4gICAgfShjb21wb3NlLk1vZGVsUHJveHkuQ29tcG9zZSkpO1xuICAgIE1vZGVsUHJveHlfMS5Nb2RlbFByb3h5ID0gTW9kZWxQcm94eTtcbn0pKE1vZGVsUHJveHkgPSBleHBvcnRzLk1vZGVsUHJveHkgfHwgKGV4cG9ydHMuTW9kZWxQcm94eSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBNZXRob2RUeXBlO1xuKGZ1bmN0aW9uIChNZXRob2RUeXBlKSB7XG4gICAgTWV0aG9kVHlwZVtNZXRob2RUeXBlW1wiR0VUXCJdID0gMF0gPSBcIkdFVFwiO1xuICAgIE1ldGhvZFR5cGVbTWV0aG9kVHlwZVtcIlBPU1RcIl0gPSAxXSA9IFwiUE9TVFwiO1xuICAgIE1ldGhvZFR5cGVbTWV0aG9kVHlwZVtcIkRFTEVURVwiXSA9IDJdID0gXCJERUxFVEVcIjtcbiAgICBNZXRob2RUeXBlW01ldGhvZFR5cGVbXCJQVVRcIl0gPSAzXSA9IFwiUFVUXCI7XG4gICAgTWV0aG9kVHlwZVtNZXRob2RUeXBlW1wiSEVBRFwiXSA9IDRdID0gXCJIRUFEXCI7XG4gICAgTWV0aG9kVHlwZVtNZXRob2RUeXBlW1wiUEFUQ0hcIl0gPSA1XSA9IFwiUEFUQ0hcIjtcbiAgICBNZXRob2RUeXBlW01ldGhvZFR5cGVbXCJPUFRJT05TXCJdID0gNl0gPSBcIk9QVElPTlNcIjtcbn0pKE1ldGhvZFR5cGUgPSBleHBvcnRzLk1ldGhvZFR5cGUgfHwgKGV4cG9ydHMuTWV0aG9kVHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXRob2QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBfc2NoZW1hID0gXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSNcIjtcbnZhciBNb2RsZVByb3h5U2NoZW1hO1xuKGZ1bmN0aW9uIChNb2RsZVByb3h5U2NoZW1hKSB7XG4gICAgdmFyIEJhc2VUeXBlQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEJhc2VUeXBlQnVpbGRlcigpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIEJhc2VUeXBlQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAodHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBcInN0cmluZ1wiOyB9XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgICAgfSwgdGhpcy5kYXRhIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIEJhc2VUeXBlQnVpbGRlci5wcm90b3R5cGUucHJvcGVydGllcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gXy5leHRlbmQoe1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BzLFxuICAgICAgICAgICAgfSwgdGhpcy5kYXRhIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBCYXNlVHlwZUJ1aWxkZXIucHJvdG90eXBlLml0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICAgICAgfSwgdGhpcy5kYXRhIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBCYXNlVHlwZUJ1aWxkZXIucHJvdG90eXBlLnNjaGVtYSA9IGZ1bmN0aW9uIChzY2hlbWEsIGlkKSB7XG4gICAgICAgICAgICBpZiAoc2NoZW1hID09PSB2b2lkIDApIHsgc2NoZW1hID0gX3NjaGVtYTsgfVxuICAgICAgICAgICAgaWYgKGlkID09PSB2b2lkIDApIHsgaWQgPSBfc2NoZW1hOyB9XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgXCIkc2NoZW1hXCI6IHNjaGVtYSxcbiAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgIH0sIHRoaXMuZGF0YSB8fCB7fSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgQmFzZVR5cGVCdWlsZGVyLnByb3RvdHlwZS5yZXF1aXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGtleXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IF8uZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDoga2V5c1xuICAgICAgICAgICAgfSwgdGhpcy5kYXRhIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBCYXNlVHlwZUJ1aWxkZXIucHJvdG90eXBlLnRvVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQmFzZVR5cGVCdWlsZGVyO1xuICAgIH0oKSk7XG4gICAgTW9kbGVQcm94eVNjaGVtYS5CYXNlVHlwZUJ1aWxkZXIgPSBCYXNlVHlwZUJ1aWxkZXI7XG4gICAgdmFyIEpzb25TY2hlbWFCdWlsZGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEpzb25TY2hlbWFCdWlsZGVyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBKc29uU2NoZW1hQnVpbGRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIEpzb25TY2hlbWFCdWlsZGVyLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEpzb25TY2hlbWFCdWlsZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBKc29uU2NoZW1hQnVpbGRlcjtcbiAgICB9KEJhc2VUeXBlQnVpbGRlcikpO1xuICAgIE1vZGxlUHJveHlTY2hlbWEuSnNvblNjaGVtYUJ1aWxkZXIgPSBKc29uU2NoZW1hQnVpbGRlcjtcbn0pKE1vZGxlUHJveHlTY2hlbWEgPSBleHBvcnRzLk1vZGxlUHJveHlTY2hlbWEgfHwgKGV4cG9ydHMuTW9kbGVQcm94eVNjaGVtYSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWlsZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGJ1aWxkZXJfMSA9IHJlcXVpcmUoXCIuL2J1aWxkZXJcIik7XG52YXIgcHJveHlfY29uZmlnX3NjaGVtYV8xID0gcmVxdWlyZShcIi4vcHJveHkuY29uZmlnLnNjaGVtYVwiKTtcbnZhciBpbnRlcmZhY2Vfc2NoZW1hXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2Uuc2NoZW1hXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHByb3h5Q29uZmlnU2NoZW1hOiBwcm94eV9jb25maWdfc2NoZW1hXzEuZGVmYXVsdCxcbiAgICBpbnRlcmZhY2VTY2hlbWE6IGludGVyZmFjZV9zY2hlbWFfMS5kZWZhdWx0LFxuICAgIEpzb25TY2hlbWFCdWlsZGVyOiBidWlsZGVyXzEuTW9kbGVQcm94eVNjaGVtYS5Kc29uU2NoZW1hQnVpbGRlclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGJ1aWxkZXJfMSA9IHJlcXVpcmUoXCIuL2J1aWxkZXJcIik7XG52YXIgSnNvblNjaGVtYUJ1aWxkZXIgPSBidWlsZGVyXzEuTW9kbGVQcm94eVNjaGVtYS5Kc29uU2NoZW1hQnVpbGRlcjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZChcIm9iamVjdFwiKS5wcm9wZXJ0aWVzKHtcbiAgICBrZXk6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICB0aXRsZTogSnNvblNjaGVtYUJ1aWxkZXIuaW5pdCgpLmJ1aWxkKCkudG9WYWx1ZSgpLFxuICAgIGVuZ2luZTogSnNvblNjaGVtYUJ1aWxkZXIuaW5pdCgpLmJ1aWxkKCkudG9WYWx1ZSgpLFxuICAgIHN0YXRlczogSnNvblNjaGVtYUJ1aWxkZXIuaW5pdCgpLmJ1aWxkKFwib2JqZWN0XCIpLnRvVmFsdWUoKSxcbiAgICBzdGF0ZTogSnNvblNjaGVtYUJ1aWxkZXIuaW5pdCgpLmJ1aWxkKCkudG9WYWx1ZSgpLFxuICAgIHZlcnNpb246IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICBtZXRob2Q6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICBwYXRoOiBKc29uU2NoZW1hQnVpbGRlci5pbml0KCkuYnVpbGQoKS50b1ZhbHVlKCksXG4gICAgY29uZmlnOiBKc29uU2NoZW1hQnVpbGRlci5pbml0KCkuYnVpbGQoXCJvYmplY3RcIikudG9WYWx1ZSgpLFxuICAgIG1vY2tEaXI6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKVxufSkucmVxdWlyZWQoXCJrZXlcIiwgXCJ0aXRsZVwiLCBcIm1ldGhvZFwiLCBcInBhdGhcIikudG9WYWx1ZSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlLnNjaGVtYS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBpbnRlcmZhY2Vfc2NoZW1hXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2Uuc2NoZW1hXCIpO1xudmFyIGJ1aWxkZXJfMSA9IHJlcXVpcmUoXCIuL2J1aWxkZXJcIik7XG52YXIgSnNvblNjaGVtYUJ1aWxkZXIgPSBidWlsZGVyXzEuTW9kbGVQcm94eVNjaGVtYS5Kc29uU2NoZW1hQnVpbGRlcjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZChcIm9iamVjdFwiLCBudWxsLCBcIm1vZGVsUHJveHnpqozor4HphY3nva5cIilcbiAgICAucHJvcGVydGllcyh7XG4gICAga2V5OiBKc29uU2NoZW1hQnVpbGRlci5pbml0KCkuYnVpbGQoKS50b1ZhbHVlKCksXG4gICAgdGl0bGU6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICBlbmdpbmU6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICBzdGF0ZXM6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZChcIm9iamVjdFwiKS50b1ZhbHVlKCksXG4gICAgc3RhdGU6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZCgpLnRvVmFsdWUoKSxcbiAgICB2ZXJzaW9uOiBKc29uU2NoZW1hQnVpbGRlci5pbml0KCkuYnVpbGQoKS50b1ZhbHVlKCksXG4gICAgbW9ja0RpcjogSnNvblNjaGVtYUJ1aWxkZXIuaW5pdCgpLmJ1aWxkKCkudG9WYWx1ZSgpLFxuICAgIGludGVyZmFjZXM6IEpzb25TY2hlbWFCdWlsZGVyLmluaXQoKS5idWlsZChcImFycmF5XCIsIFwi5o6l5Y+j6YWN572u5pWw57uEXCIpXG4gICAgICAgIC5pdGVtcyhpbnRlcmZhY2Vfc2NoZW1hXzEuZGVmYXVsdCkudG9WYWx1ZSgpLFxufSkucmVxdWlyZWQoXCJrZXlcIiwgXCJ0aXRsZVwiLCBcInN0YXRlc1wiKS50b1ZhbHVlKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94eS5jb25maWcuc2NoZW1hLmpzLm1hcCJdfQ==
