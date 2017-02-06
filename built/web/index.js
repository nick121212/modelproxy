webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var engine_factory_1 = __webpack_require__(1);
	var modelproxy_1 = __webpack_require__(7);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    ModelProxy: modelproxy_1.ModelProxy,
	    engineFactory: engine_factory_1.engineFactory
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var base_factory_1 = __webpack_require__(2);
	var default_1 = __webpack_require__(3);
	var mock_1 = __webpack_require__(4);
	exports.engineFactory = new base_factory_1.BaseFactory();
	exports.engineFactory.add("default", new default_1.DefaultEngine());
	exports.engineFactory.add("mockjs", new mock_1.MockEngine());


/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

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
	var DefaultEngine = (function () {
	    function DefaultEngine() {
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
	}());
	exports.DefaultEngine = DefaultEngine;


/***/ },
/* 4 */
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
	var Mock = __webpack_require__(5);
	var method_1 = __webpack_require__(6);
	var MockEngine = (function () {
	    function MockEngine(mockEngine) {
	        this.MockObj = Mock;
	        this.mockEngine = mockEngine;
	    }
	    MockEngine.prototype.validate = function (data) {
	        return true;
	    };
	    MockEngine.prototype.proxy = function (intance, data, params) {
	        return __awaiter(this, void 0, void 0, function () {
	            var path, mockInfo;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        path = (intance.mockDir + "/" + intance.ns + "/" + intance.path + ".js").replace(/\/\//ig, "/");
	                        if (!this.mockEngine) {
	                            throw new Error("没有设置mock的默认引擎！");
	                        }
	                        return [4 /*yield*/, this.mockEngine.proxy({
	                                path: path,
	                                key: "mock" + intance.key,
	                                method: method_1.MethodType.GET,
	                                title: ""
	                            }, null, null)];
	                    case 1:
	                        mockInfo = _a.sent();
	                        return [2 /*return*/, {
	                                req: {
	                                    data: data,
	                                    params: params
	                                },
	                                mockData: Mock.mock(mockInfo)
	                            }];
	                }
	            });
	        });
	    };
	    return MockEngine;
	}());
	exports.MockEngine = MockEngine;
	exports.MockObj = Mock;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Mock"] = factory();
		else
			root["Mock"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* global require, module, window */
		var Handler = __webpack_require__(1)
		var Util = __webpack_require__(3)
		var Random = __webpack_require__(5)
		var RE = __webpack_require__(20)
		var toJSONSchema = __webpack_require__(23)
		var valid = __webpack_require__(25)
	
		var XHR
		if (typeof window !== 'undefined') XHR = __webpack_require__(27)
	
		/*!
		    Mock - 模拟请求 & 模拟数据
		    https://github.com/nuysoft/Mock
		    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
		*/
		var Mock = {
		    Handler: Handler,
		    Random: Random,
		    Util: Util,
		    XHR: XHR,
		    RE: RE,
		    toJSONSchema: toJSONSchema,
		    valid: valid,
		    heredoc: Util.heredoc,
		    setup: function(settings) {
		        return XHR.setup(settings)
		    },
		    _mocked: {}
		}
	
		Mock.version = '1.0.1-beta3'
	
		// 避免循环依赖
		if (XHR) XHR.Mock = Mock
	
		/*
		    * Mock.mock( template )
		    * Mock.mock( function() )
		    * Mock.mock( rurl, template )
		    * Mock.mock( rurl, function(options) )
		    * Mock.mock( rurl, rtype, template )
		    * Mock.mock( rurl, rtype, function(options) )
	
		    根据数据模板生成模拟数据。
		*/
		Mock.mock = function(rurl, rtype, template) {
		    // Mock.mock(template)
		    if (arguments.length === 1) {
		        return Handler.gen(rurl)
		    }
		    // Mock.mock(rurl, template)
		    if (arguments.length === 2) {
		        template = rtype
		        rtype = undefined
		    }
		    // 拦截 XHR
		    if (XHR) window.XMLHttpRequest = XHR
		    Mock._mocked[rurl + (rtype || '')] = {
		        rurl: rurl,
		        rtype: rtype,
		        template: template
		    }
		    return Mock
		}
	
		module.exports = Mock
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* 
		    ## Handler
	
		    处理数据模板。
		    
		    * Handler.gen( template, name?, context? )
	
		        入口方法。
	
		    * Data Template Definition, DTD
		        
		        处理数据模板定义。
	
		        * Handler.array( options )
		        * Handler.object( options )
		        * Handler.number( options )
		        * Handler.boolean( options )
		        * Handler.string( options )
		        * Handler.function( options )
		        * Handler.regexp( options )
		        
		        处理路径（相对和绝对）。
	
		        * Handler.getValueByKeyPath( key, options )
	
		    * Data Placeholder Definition, DPD
	
		        处理数据占位符定义
	
		        * Handler.placeholder( placeholder, context, templateContext, options )
	
		*/
	
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var Parser = __webpack_require__(4)
		var Random = __webpack_require__(5)
		var RE = __webpack_require__(20)
	
		var Handler = {
		    extend: Util.extend
		}
	
		/*
		    template        属性值（即数据模板）
		    name            属性名
		    context         数据上下文，生成后的数据
		    templateContext 模板上下文，
	
		    Handle.gen(template, name, options)
		    context
		        currentContext, templateCurrentContext, 
		        path, templatePath
		        root, templateRoot
		*/
		Handler.gen = function(template, name, context) {
		    /* jshint -W041 */
		    name = name == undefined ? '' : (name + '')
	
		    context = context || {}
		    context = {
		            // 当前访问路径，只有属性名，不包括生成规则
		            path: context.path || [Constant.GUID],
		            templatePath: context.templatePath || [Constant.GUID++],
		            // 最终属性值的上下文
		            currentContext: context.currentContext,
		            // 属性值模板的上下文
		            templateCurrentContext: context.templateCurrentContext || template,
		            // 最终值的根
		            root: context.root || context.currentContext,
		            // 模板的根
		            templateRoot: context.templateRoot || context.templateCurrentContext || template
		        }
		        // console.log('path:', context.path.join('.'), template)
	
		    var rule = Parser.parse(name)
		    var type = Util.type(template)
		    var data
	
		    if (Handler[type]) {
		        data = Handler[type]({
		            // 属性值类型
		            type: type,
		            // 属性值模板
		            template: template,
		            // 属性名 + 生成规则
		            name: name,
		            // 属性名
		            parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,
	
		            // 解析后的生成规则
		            rule: rule,
		            // 相关上下文
		            context: context
		        })
	
		        if (!context.root) context.root = data
		        return data
		    }
	
		    return template
		}
	
		Handler.extend({
		    array: function(options) {
		        var result = [],
		            i, ii;
	
		        // 'name|1': []
		        // 'name|count': []
		        // 'name|min-max': []
		        if (options.template.length === 0) return result
	
		        // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
		        if (!options.rule.parameters) {
		            for (i = 0; i < options.template.length; i++) {
		                options.context.path.push(i)
		                options.context.templatePath.push(i)
		                result.push(
		                    Handler.gen(options.template[i], i, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })
		                )
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            }
		        } else {
		            // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
		            if (options.rule.min === 1 && options.rule.max === undefined) {
		                // fix #17
		                options.context.path.push(options.name)
		                options.context.templatePath.push(options.name)
		                result = Random.pick(
		                    Handler.gen(options.template, undefined, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })
		                )
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            } else {
		                // 'data|+1': [{}, {}]
		                if (options.rule.parameters[2]) {
		                    options.template.__order_index = options.template.__order_index || 0
	
		                    options.context.path.push(options.name)
		                    options.context.templatePath.push(options.name)
		                    result = Handler.gen(options.template, undefined, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })[
		                        options.template.__order_index % options.template.length
		                    ]
	
		                    options.template.__order_index += +options.rule.parameters[2]
	
		                    options.context.path.pop()
		                    options.context.templatePath.pop()
	
		                } else {
		                    // 'data|1-10': [{}]
		                    for (i = 0; i < options.rule.count; i++) {
		                        // 'data|1-10': [{}, {}]
		                        for (ii = 0; ii < options.template.length; ii++) {
		                            options.context.path.push(result.length)
		                            options.context.templatePath.push(ii)
		                            result.push(
		                                Handler.gen(options.template[ii], result.length, {
		                                    path: options.context.path,
		                                    templatePath: options.context.templatePath,
		                                    currentContext: result,
		                                    templateCurrentContext: options.template,
		                                    root: options.context.root || result,
		                                    templateRoot: options.context.templateRoot || options.template
		                                })
		                            )
		                            options.context.path.pop()
		                            options.context.templatePath.pop()
		                        }
		                    }
		                }
		            }
		        }
		        return result
		    },
		    object: function(options) {
		        var result = {},
		            keys, fnKeys, key, parsedKey, inc, i;
	
		        // 'obj|min-max': {}
		        /* jshint -W041 */
		        if (options.rule.min != undefined) {
		            keys = Util.keys(options.template)
		            keys = Random.shuffle(keys)
		            keys = keys.slice(0, options.rule.count)
		            for (i = 0; i < keys.length; i++) {
		                key = keys[i]
		                parsedKey = key.replace(Constant.RE_KEY, '$1')
		                options.context.path.push(parsedKey)
		                options.context.templatePath.push(key)
		                result[parsedKey] = Handler.gen(options.template[key], key, {
		                    path: options.context.path,
		                    templatePath: options.context.templatePath,
		                    currentContext: result,
		                    templateCurrentContext: options.template,
		                    root: options.context.root || result,
		                    templateRoot: options.context.templateRoot || options.template
		                })
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            }
	
		        } else {
		            // 'obj': {}
		            keys = []
		            fnKeys = [] // #25 改变了非函数属性的顺序，查找起来不方便
		            for (key in options.template) {
		                (typeof options.template[key] === 'function' ? fnKeys : keys).push(key)
		            }
		            keys = keys.concat(fnKeys)
	
		            /*
		                会改变非函数属性的顺序
		                keys = Util.keys(options.template)
		                keys.sort(function(a, b) {
		                    var afn = typeof options.template[a] === 'function'
		                    var bfn = typeof options.template[b] === 'function'
		                    if (afn === bfn) return 0
		                    if (afn && !bfn) return 1
		                    if (!afn && bfn) return -1
		                })
		            */
	
		            for (i = 0; i < keys.length; i++) {
		                key = keys[i]
		                parsedKey = key.replace(Constant.RE_KEY, '$1')
		                options.context.path.push(parsedKey)
		                options.context.templatePath.push(key)
		                result[parsedKey] = Handler.gen(options.template[key], key, {
		                    path: options.context.path,
		                    templatePath: options.context.templatePath,
		                    currentContext: result,
		                    templateCurrentContext: options.template,
		                    root: options.context.root || result,
		                    templateRoot: options.context.templateRoot || options.template
		                })
		                options.context.path.pop()
		                options.context.templatePath.pop()
		                    // 'id|+1': 1
		                inc = key.match(Constant.RE_KEY)
		                if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
		                    options.template[key] += parseInt(inc[2], 10)
		                }
		            }
		        }
		        return result
		    },
		    number: function(options) {
		        var result, parts;
		        if (options.rule.decimal) { // float
		            options.template += ''
		            parts = options.template.split('.')
		                // 'float1|.1-10': 10,
		                // 'float2|1-100.1-10': 1,
		                // 'float3|999.1-10': 1,
		                // 'float4|.3-10': 123.123,
		            parts[0] = options.rule.range ? options.rule.count : parts[0]
		            parts[1] = (parts[1] || '').slice(0, options.rule.dcount)
		            while (parts[1].length < options.rule.dcount) {
		                parts[1] += (
		                    // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
		                    (parts[1].length < options.rule.dcount - 1) ? Random.character('number') : Random.character('123456789')
		                )
		            }
		            result = parseFloat(parts.join('.'), 10)
		        } else { // integer
		            // 'grade1|1-100': 1,
		            result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template
		        }
		        return result
		    },
		    boolean: function(options) {
		        var result;
		        // 'prop|multiple': false, 当前值是相反值的概率倍数
		        // 'prop|probability-probability': false, 当前值与相反值的概率
		        result = options.rule.parameters ? Random.bool(options.rule.min, options.rule.max, options.template) : options.template
		        return result
		    },
		    string: function(options) {
		        var result = '',
		            i, placeholders, ph, phed;
		        if (options.template.length) {
	
		            //  'foo': '★',
		            /* jshint -W041 */
		            if (options.rule.count == undefined) {
		                result += options.template
		            }
	
		            // 'star|1-5': '★',
		            for (i = 0; i < options.rule.count; i++) {
		                result += options.template
		            }
		            // 'email|1-10': '@EMAIL, ',
		            placeholders = result.match(Constant.RE_PLACEHOLDER) || [] // A-Z_0-9 > \w_
		            for (i = 0; i < placeholders.length; i++) {
		                ph = placeholders[i]
	
		                // 遇到转义斜杠，不需要解析占位符
		                if (/^\\/.test(ph)) {
		                    placeholders.splice(i--, 1)
		                    continue
		                }
	
		                phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options)
	
		                // 只有一个占位符，并且没有其他字符
		                if (placeholders.length === 1 && ph === result && typeof phed !== typeof result) { // 
		                    result = phed
		                    break
	
		                    if (Util.isNumeric(phed)) {
		                        result = parseFloat(phed, 10)
		                        break
		                    }
		                    if (/^(true|false)$/.test(phed)) {
		                        result = phed === 'true' ? true :
		                            phed === 'false' ? false :
		                            phed // 已经是布尔值
		                        break
		                    }
		                }
		                result = result.replace(ph, phed)
		            }
	
		        } else {
		            // 'ASCII|1-10': '',
		            // 'ASCII': '',
		            result = options.rule.range ? Random.string(options.rule.count) : options.template
		        }
		        return result
		    },
		    'function': function(options) {
		        // ( context, options )
		        return options.template.call(options.context.currentContext, options)
		    },
		    'regexp': function(options) {
		        var source = ''
	
		        // 'name': /regexp/,
		        /* jshint -W041 */
		        if (options.rule.count == undefined) {
		            source += options.template.source // regexp.source
		        }
	
		        // 'name|1-5': /regexp/,
		        for (var i = 0; i < options.rule.count; i++) {
		            source += options.template.source
		        }
	
		        return RE.Handler.gen(
		            RE.Parser.parse(
		                source
		            )
		        )
		    }
		})
	
		Handler.extend({
		    _all: function() {
		        var re = {};
		        for (var key in Random) re[key.toLowerCase()] = key
		        return re
		    },
		    // 处理占位符，转换为最终值
		    placeholder: function(placeholder, obj, templateContext, options) {
		        // console.log(options.context.path)
		        // 1 key, 2 params
		        Constant.RE_PLACEHOLDER.exec('')
		        var parts = Constant.RE_PLACEHOLDER.exec(placeholder),
		            key = parts && parts[1],
		            lkey = key && key.toLowerCase(),
		            okey = this._all()[lkey],
		            params = parts && parts[2] || ''
		        var pathParts = this.splitPathToArray(key)
	
		        // 解析占位符的参数
		        try {
		            // 1. 尝试保持参数的类型
		            /*
		                #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
		                [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
		                应该属于 Window Firefox 30.0 的 BUG
		            */
		            /* jshint -W061 */
		            params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')')
		        } catch (error) {
		            // 2. 如果失败，只能解析为字符串
		            // console.error(error)
		            // if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
		            // else throw error
		            params = parts[2].split(/,\s*/)
		        }
	
		        // 占位符优先引用数据模板中的属性
		        if (obj && (key in obj)) return obj[key]
	
		        // @index @key
		        // if (Constant.RE_INDEX.test(key)) return +options.name
		        // if (Constant.RE_KEY.test(key)) return options.name
	
		        // 绝对路径 or 相对路径
		        if (
		            key.charAt(0) === '/' ||
		            pathParts.length > 1
		        ) return this.getValueByKeyPath(key, options)
	
		        // 递归引用数据模板中的属性
		        if (templateContext &&
		            (typeof templateContext === 'object') &&
		            (key in templateContext) &&
		            (placeholder !== templateContext[key]) // fix #15 避免自己依赖自己
		        ) {
		            // 先计算被引用的属性值
		            templateContext[key] = Handler.gen(templateContext[key], key, {
		                currentContext: obj,
		                templateCurrentContext: templateContext
		            })
		            return templateContext[key]
		        }
	
		        // 如果未找到，则原样返回
		        if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return placeholder
	
		        // 递归解析参数中的占位符
		        for (var i = 0; i < params.length; i++) {
		            Constant.RE_PLACEHOLDER.exec('')
		            if (Constant.RE_PLACEHOLDER.test(params[i])) {
		                params[i] = Handler.placeholder(params[i], obj, templateContext, options)
		            }
		        }
	
		        var handle = Random[key] || Random[lkey] || Random[okey]
		        switch (Util.type(handle)) {
		            case 'array':
		                // 自动从数组中取一个，例如 @areas
		                return Random.pick(handle)
		            case 'function':
		                // 执行占位符方法（大多数情况）
		                handle.options = options
		                var re = handle.apply(Random, params)
		                if (re === undefined) re = '' // 因为是在字符串中，所以默认为空字符串。
		                delete handle.options
		                return re
		        }
		    },
		    getValueByKeyPath: function(key, options) {
		        var originalKey = key
		        var keyPathParts = this.splitPathToArray(key)
		        var absolutePathParts = []
	
		        // 绝对路径
		        if (key.charAt(0) === '/') {
		            absolutePathParts = [options.context.path[0]].concat(
		                this.normalizePath(keyPathParts)
		            )
		        } else {
		            // 相对路径
		            if (keyPathParts.length > 1) {
		                absolutePathParts = options.context.path.slice(0)
		                absolutePathParts.pop()
		                absolutePathParts = this.normalizePath(
		                    absolutePathParts.concat(keyPathParts)
		                )
	
		            }
		        }
	
		        key = keyPathParts[keyPathParts.length - 1]
		        var currentContext = options.context.root
		        var templateCurrentContext = options.context.templateRoot
		        for (var i = 1; i < absolutePathParts.length - 1; i++) {
		            currentContext = currentContext[absolutePathParts[i]]
		            templateCurrentContext = templateCurrentContext[absolutePathParts[i]]
		        }
		        // 引用的值已经计算好
		        if (currentContext && (key in currentContext)) return currentContext[key]
	
		        // 尚未计算，递归引用数据模板中的属性
		        if (templateCurrentContext &&
		            (typeof templateCurrentContext === 'object') &&
		            (key in templateCurrentContext) &&
		            (originalKey !== templateCurrentContext[key]) // fix #15 避免自己依赖自己
		        ) {
		            // 先计算被引用的属性值
		            templateCurrentContext[key] = Handler.gen(templateCurrentContext[key], key, {
		                currentContext: currentContext,
		                templateCurrentContext: templateCurrentContext
		            })
		            return templateCurrentContext[key]
		        }
		    },
		    // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
		    normalizePath: function(pathParts) {
		        var newPathParts = []
		        for (var i = 0; i < pathParts.length; i++) {
		            switch (pathParts[i]) {
		                case '..':
		                    newPathParts.pop()
		                    break
		                case '.':
		                    break
		                default:
		                    newPathParts.push(pathParts[i])
		            }
		        }
		        return newPathParts
		    },
		    splitPathToArray: function(path) {
		        var parts = path.split(/\/+/);
		        if (!parts[parts.length - 1]) parts = parts.slice(0, -1)
		        if (!parts[0]) parts = parts.slice(1)
		        return parts;
		    }
		})
	
		module.exports = Handler
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/*
		    ## Constant
	
		    常量集合。
		 */
		/*
		    RE_KEY
		        'name|min-max': value
		        'name|count': value
		        'name|min-max.dmin-dmax': value
		        'name|min-max.dcount': value
		        'name|count.dmin-dmax': value
		        'name|count.dcount': value
		        'name|+step': value
	
		        1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]
	
		    RE_PLACEHOLDER
		        placeholder(*)
	
		    [正则查看工具](http://www.regexper.com/)
	
		    #26 生成规则 支持 负数，例如 number|-100-100
		*/
		module.exports = {
		    GUID: 1,
		    RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
		    RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
		    RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
		    // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
		    // RE_INDEX: /^index$/,
		    // RE_KEY: /^key$/
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/*
		    ## Utilities
		*/
		var Util = {}
	
		Util.extend = function extend() {
		    var target = arguments[0] || {},
		        i = 1,
		        length = arguments.length,
		        options, name, src, copy, clone
	
		    if (length === 1) {
		        target = this
		        i = 0
		    }
	
		    for (; i < length; i++) {
		        options = arguments[i]
		        if (!options) continue
	
		        for (name in options) {
		            src = target[name]
		            copy = options[name]
	
		            if (target === copy) continue
		            if (copy === undefined) continue
	
		            if (Util.isArray(copy) || Util.isObject(copy)) {
		                if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : []
		                if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {}
	
		                target[name] = Util.extend(clone, copy)
		            } else {
		                target[name] = copy
		            }
		        }
		    }
	
		    return target
		}
	
		Util.each = function each(obj, iterator, context) {
		    var i, key
		    if (this.type(obj) === 'number') {
		        for (i = 0; i < obj; i++) {
		            iterator(i, i)
		        }
		    } else if (obj.length === +obj.length) {
		        for (i = 0; i < obj.length; i++) {
		            if (iterator.call(context, obj[i], i, obj) === false) break
		        }
		    } else {
		        for (key in obj) {
		            if (iterator.call(context, obj[key], key, obj) === false) break
		        }
		    }
		}
	
		Util.type = function type(obj) {
		    return (obj === null || obj === undefined) ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase()
		}
	
		Util.each('String Object Array RegExp Function'.split(' '), function(value) {
		    Util['is' + value] = function(obj) {
		        return Util.type(obj) === value.toLowerCase()
		    }
		})
	
		Util.isObjectOrArray = function(value) {
		    return Util.isObject(value) || Util.isArray(value)
		}
	
		Util.isNumeric = function(value) {
		    return !isNaN(parseFloat(value)) && isFinite(value)
		}
	
		Util.keys = function(obj) {
		    var keys = [];
		    for (var key in obj) {
		        if (obj.hasOwnProperty(key)) keys.push(key)
		    }
		    return keys;
		}
		Util.values = function(obj) {
		    var values = [];
		    for (var key in obj) {
		        if (obj.hasOwnProperty(key)) values.push(obj[key])
		    }
		    return values;
		}
	
		/*
		    ### Mock.heredoc(fn)
	
		    * Mock.heredoc(fn)
	
		    以直观、安全的方式书写（多行）HTML 模板。
	
		    **使用示例**如下所示：
	
		        var tpl = Mock.heredoc(function() {
		            /*!
		        {{email}}{{age}}
		        <!-- Mock { 
		            email: '@EMAIL',
		            age: '@INT(1,100)'
		        } -->
		            *\/
		        })
		    
		    **相关阅读**
		    * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)、
		*/
		Util.heredoc = function heredoc(fn) {
		    // 1. 移除起始的 function(){ /*!
		    // 2. 移除末尾的 */ }
		    // 3. 移除起始和末尾的空格
		    return fn.toString()
		        .replace(/^[^\/]+\/\*!?/, '')
		        .replace(/\*\/[^\/]+$/, '')
		        .replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '') // .trim()
		}
	
		Util.noop = function() {}
	
		module.exports = Util
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			## Parser
	
			解析数据模板（属性名部分）。
	
			* Parser.parse( name )
				
				```json
				{
					parameters: [ name, inc, range, decimal ],
					rnage: [ min , max ],
	
					min: min,
					max: max,
					count : count,
	
					decimal: decimal,
					dmin: dmin,
					dmax: dmax,
					dcount: dcount
				}
				```
		 */
	
		var Constant = __webpack_require__(2)
		var Random = __webpack_require__(5)
	
		/* jshint -W041 */
		module.exports = {
			parse: function(name) {
				name = name == undefined ? '' : (name + '')
	
				var parameters = (name || '').match(Constant.RE_KEY)
	
				var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE)
				var min = range && range[1] && parseInt(range[1], 10) // || 1
				var max = range && range[2] && parseInt(range[2], 10) // || 1
					// repeat || min-max || 1
					// var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
				var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined
	
				var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE)
				var dmin = decimal && decimal[1] && parseInt(decimal[1], 10) // || 0,
				var dmax = decimal && decimal[2] && parseInt(decimal[2], 10) // || 0,
					// int || dmin-dmax || 0
				var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined
	
				var result = {
					// 1 name, 2 inc, 3 range, 4 decimal
					parameters: parameters,
					// 1 min, 2 max
					range: range,
					min: min,
					max: max,
					// min-max
					count: count,
					// 是否有 decimal
					decimal: decimal,
					dmin: dmin,
					dmax: dmax,
					// dmin-dimax
					dcount: dcount
				}
	
				for (var r in result) {
					if (result[r] != undefined) return result
				}
	
				return {}
			}
		}
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Mock.Random
		    
		    工具类，用于生成各种随机数据。
		*/
	
		var Util = __webpack_require__(3)
	
		var Random = {
		    extend: Util.extend
		}
	
		Random.extend(__webpack_require__(6))
		Random.extend(__webpack_require__(7))
		Random.extend(__webpack_require__(8))
		Random.extend(__webpack_require__(10))
		Random.extend(__webpack_require__(13))
		Random.extend(__webpack_require__(15))
		Random.extend(__webpack_require__(16))
		Random.extend(__webpack_require__(17))
		Random.extend(__webpack_require__(14))
		Random.extend(__webpack_require__(19))
	
		module.exports = Random
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		/*
		    ## Basics
		*/
		module.exports = {
		    // 返回一个随机的布尔值。
		    boolean: function(min, max, cur) {
		        if (cur !== undefined) {
		            min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1
		            max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1
		            return Math.random() > 1.0 / (min + max) * min ? !cur : cur
		        }
	
		        return Math.random() >= 0.5
		    },
		    bool: function(min, max, cur) {
		        return this.boolean(min, max, cur)
		    },
		    // 返回一个随机的自然数（大于等于 0 的整数）。
		    natural: function(min, max) {
		        min = typeof min !== 'undefined' ? parseInt(min, 10) : 0
		        max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
		        return Math.round(Math.random() * (max - min)) + min
		    },
		    // 返回一个随机的整数。
		    integer: function(min, max) {
		        min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992
		        max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
		        return Math.round(Math.random() * (max - min)) + min
		    },
		    int: function(min, max) {
		        return this.integer(min, max)
		    },
		    // 返回一个随机的浮点数。
		    float: function(min, max, dmin, dmax) {
		        dmin = dmin === undefined ? 0 : dmin
		        dmin = Math.max(Math.min(dmin, 17), 0)
		        dmax = dmax === undefined ? 17 : dmax
		        dmax = Math.max(Math.min(dmax, 17), 0)
		        var ret = this.integer(min, max) + '.';
		        for (var i = 0, dcount = this.natural(dmin, dmax); i < dcount; i++) {
		            ret += (
		                // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
		                (i < dcount - 1) ? this.character('number') : this.character('123456789')
		            )
		        }
		        return parseFloat(ret, 10)
		    },
		    // 返回一个随机字符。
		    character: function(pool) {
		        var pools = {
		            lower: 'abcdefghijklmnopqrstuvwxyz',
		            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		            number: '0123456789',
		            symbol: '!@#$%^&*()[]'
		        }
		        pools.alpha = pools.lower + pools.upper
		        pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol
	
		        pool = pools[('' + pool).toLowerCase()] || pool
		        return pool.charAt(this.natural(0, pool.length - 1))
		    },
		    char: function(pool) {
		        return this.character(pool)
		    },
		    // 返回一个随机字符串。
		    string: function(pool, min, max) {
		        var len
		        switch (arguments.length) {
		            case 0: // ()
		                len = this.natural(3, 7)
		                break
		            case 1: // ( length )
		                len = pool
		                pool = undefined
		                break
		            case 2:
		                // ( pool, length )
		                if (typeof arguments[0] === 'string') {
		                    len = min
		                } else {
		                    // ( min, max )
		                    len = this.natural(pool, min)
		                    pool = undefined
		                }
		                break
		            case 3:
		                len = this.natural(min, max)
		                break
		        }
	
		        var text = ''
		        for (var i = 0; i < len; i++) {
		            text += this.character(pool)
		        }
	
		        return text
		    },
		    str: function( /*pool, min, max*/ ) {
		        return this.string.apply(this, arguments)
		    },
		    // 返回一个整型数组。
		    range: function(start, stop, step) {
		        // range( stop )
		        if (arguments.length <= 1) {
		            stop = start || 0;
		            start = 0;
		        }
		        // range( start, stop )
		        step = arguments[2] || 1;
	
		        start = +start
		        stop = +stop
		        step = +step
	
		        var len = Math.max(Math.ceil((stop - start) / step), 0);
		        var idx = 0;
		        var range = new Array(len);
	
		        while (idx < len) {
		            range[idx++] = start;
		            start += step;
		        }
	
		        return range;
		    }
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/*
		    ## Date
		*/
		var patternLetters = {
		    yyyy: 'getFullYear',
		    yy: function(date) {
		        return ('' + date.getFullYear()).slice(2)
		    },
		    y: 'yy',
	
		    MM: function(date) {
		        var m = date.getMonth() + 1
		        return m < 10 ? '0' + m : m
		    },
		    M: function(date) {
		        return date.getMonth() + 1
		    },
	
		    dd: function(date) {
		        var d = date.getDate()
		        return d < 10 ? '0' + d : d
		    },
		    d: 'getDate',
	
		    HH: function(date) {
		        var h = date.getHours()
		        return h < 10 ? '0' + h : h
		    },
		    H: 'getHours',
		    hh: function(date) {
		        var h = date.getHours() % 12
		        return h < 10 ? '0' + h : h
		    },
		    h: function(date) {
		        return date.getHours() % 12
		    },
	
		    mm: function(date) {
		        var m = date.getMinutes()
		        return m < 10 ? '0' + m : m
		    },
		    m: 'getMinutes',
	
		    ss: function(date) {
		        var s = date.getSeconds()
		        return s < 10 ? '0' + s : s
		    },
		    s: 'getSeconds',
	
		    SS: function(date) {
		        var ms = date.getMilliseconds()
		        return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms
		    },
		    S: 'getMilliseconds',
	
		    A: function(date) {
		        return date.getHours() < 12 ? 'AM' : 'PM'
		    },
		    a: function(date) {
		        return date.getHours() < 12 ? 'am' : 'pm'
		    },
		    T: 'getTime'
		}
		module.exports = {
		    // 日期占位符集合。
		    _patternLetters: patternLetters,
		    // 日期占位符正则。
		    _rformat: new RegExp((function() {
		        var re = []
		        for (var i in patternLetters) re.push(i)
		        return '(' + re.join('|') + ')'
		    })(), 'g'),
		    // 格式化日期。
		    _formatDate: function(date, format) {
		        return format.replace(this._rformat, function creatNewSubString($0, flag) {
		            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) :
		                patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) :
		                date[patternLetters[flag]]()
		        })
		    },
		    // 生成一个随机的 Date 对象。
		    _randomDate: function(min, max) { // min, max
		        min = min === undefined ? new Date(0) : min
		        max = max === undefined ? new Date() : max
		        return new Date(Math.random() * (max.getTime() - min.getTime()))
		    },
		    // 返回一个随机的日期字符串。
		    date: function(format) {
		        format = format || 'yyyy-MM-dd'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回一个随机的时间字符串。
		    time: function(format) {
		        format = format || 'HH:mm:ss'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回一个随机的日期和时间字符串。
		    datetime: function(format) {
		        format = format || 'yyyy-MM-dd HH:mm:ss'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回当前的日期和时间字符串。
		    now: function(unit, format) {
		        // now(unit) now(format)
		        if (arguments.length === 1) {
		            // now(format)
		            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
		                format = unit
		                unit = ''
		            }
		        }
		        unit = (unit || '').toLowerCase()
		        format = format || 'yyyy-MM-dd HH:mm:ss'
	
		        var date = new Date()
	
		        /* jshint -W086 */
		        // 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
		        switch (unit) {
		            case 'year':
		                date.setMonth(0)
		            case 'month':
		                date.setDate(1)
		            case 'week':
		            case 'day':
		                date.setHours(0)
		            case 'hour':
		                date.setMinutes(0)
		            case 'minute':
		                date.setSeconds(0)
		            case 'second':
		                date.setMilliseconds(0)
		        }
		        switch (unit) {
		            case 'week':
		                date.setDate(date.getDate() - date.getDay())
		        }
	
		        return this._formatDate(date, format)
		    }
		}
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(module) {/* global document  */
		/*
		    ## Image
		*/
		module.exports = {
		    // 常见的广告宽高
		    _adSize: [
		        '300x250', '250x250', '240x400', '336x280', '180x150',
		        '720x300', '468x60', '234x60', '88x31', '120x90',
		        '120x60', '120x240', '125x125', '728x90', '160x600',
		        '120x600', '300x600'
		    ],
		    // 常见的屏幕宽高
		    _screenSize: [
		        '320x200', '320x240', '640x480', '800x480', '800x480',
		        '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200',
		        '2560x1600'
		    ],
		    // 常见的视频宽高
		    _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
		    /*
		        生成一个随机的图片地址。
	
		        替代图片源
		            http://fpoimg.com/
		        参考自 
		            http://rensanning.iteye.com/blog/1933310
		            http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
		    */
		    image: function(size, background, foreground, format, text) {
		        // Random.image( size, background, foreground, text )
		        if (arguments.length === 4) {
		            text = format
		            format = undefined
		        }
		        // Random.image( size, background, text )
		        if (arguments.length === 3) {
		            text = foreground
		            foreground = undefined
		        }
		        // Random.image()
		        if (!size) size = this.pick(this._adSize)
	
		        if (background && ~background.indexOf('#')) background = background.slice(1)
		        if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1)
	
		        // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
		        return 'http://dummyimage.com/' + size +
		            (background ? '/' + background : '') +
		            (foreground ? '/' + foreground : '') +
		            (format ? '.' + format : '') +
		            (text ? '&text=' + text : '')
		    },
		    img: function() {
		        return this.image.apply(this, arguments)
		    },
	
		    /*
		        BrandColors
		        http://brandcolors.net/
		        A collection of major brand color codes curated by Galen Gidman.
		        大牌公司的颜色集合
	
		        // 获取品牌和颜色
		        $('h2').each(function(index, item){
		            item = $(item)
		            console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
		        })
		    */
		    _brandColors: {
		        '4ormat': '#fb0a2a',
		        '500px': '#02adea',
		        'About.me (blue)': '#00405d',
		        'About.me (yellow)': '#ffcc33',
		        'Addvocate': '#ff6138',
		        'Adobe': '#ff0000',
		        'Aim': '#fcd20b',
		        'Amazon': '#e47911',
		        'Android': '#a4c639',
		        'Angie\'s List': '#7fbb00',
		        'AOL': '#0060a3',
		        'Atlassian': '#003366',
		        'Behance': '#053eff',
		        'Big Cartel': '#97b538',
		        'bitly': '#ee6123',
		        'Blogger': '#fc4f08',
		        'Boeing': '#0039a6',
		        'Booking.com': '#003580',
		        'Carbonmade': '#613854',
		        'Cheddar': '#ff7243',
		        'Code School': '#3d4944',
		        'Delicious': '#205cc0',
		        'Dell': '#3287c1',
		        'Designmoo': '#e54a4f',
		        'Deviantart': '#4e6252',
		        'Designer News': '#2d72da',
		        'Devour': '#fd0001',
		        'DEWALT': '#febd17',
		        'Disqus (blue)': '#59a3fc',
		        'Disqus (orange)': '#db7132',
		        'Dribbble': '#ea4c89',
		        'Dropbox': '#3d9ae8',
		        'Drupal': '#0c76ab',
		        'Dunked': '#2a323a',
		        'eBay': '#89c507',
		        'Ember': '#f05e1b',
		        'Engadget': '#00bdf6',
		        'Envato': '#528036',
		        'Etsy': '#eb6d20',
		        'Evernote': '#5ba525',
		        'Fab.com': '#dd0017',
		        'Facebook': '#3b5998',
		        'Firefox': '#e66000',
		        'Flickr (blue)': '#0063dc',
		        'Flickr (pink)': '#ff0084',
		        'Forrst': '#5b9a68',
		        'Foursquare': '#25a0ca',
		        'Garmin': '#007cc3',
		        'GetGlue': '#2d75a2',
		        'Gimmebar': '#f70078',
		        'GitHub': '#171515',
		        'Google Blue': '#0140ca',
		        'Google Green': '#16a61e',
		        'Google Red': '#dd1812',
		        'Google Yellow': '#fcca03',
		        'Google+': '#dd4b39',
		        'Grooveshark': '#f77f00',
		        'Groupon': '#82b548',
		        'Hacker News': '#ff6600',
		        'HelloWallet': '#0085ca',
		        'Heroku (light)': '#c7c5e6',
		        'Heroku (dark)': '#6567a5',
		        'HootSuite': '#003366',
		        'Houzz': '#73ba37',
		        'HTML5': '#ec6231',
		        'IKEA': '#ffcc33',
		        'IMDb': '#f3ce13',
		        'Instagram': '#3f729b',
		        'Intel': '#0071c5',
		        'Intuit': '#365ebf',
		        'Kickstarter': '#76cc1e',
		        'kippt': '#e03500',
		        'Kodery': '#00af81',
		        'LastFM': '#c3000d',
		        'LinkedIn': '#0e76a8',
		        'Livestream': '#cf0005',
		        'Lumo': '#576396',
		        'Mixpanel': '#a086d3',
		        'Meetup': '#e51937',
		        'Nokia': '#183693',
		        'NVIDIA': '#76b900',
		        'Opera': '#cc0f16',
		        'Path': '#e41f11',
		        'PayPal (dark)': '#1e477a',
		        'PayPal (light)': '#3b7bbf',
		        'Pinboard': '#0000e6',
		        'Pinterest': '#c8232c',
		        'PlayStation': '#665cbe',
		        'Pocket': '#ee4056',
		        'Prezi': '#318bff',
		        'Pusha': '#0f71b4',
		        'Quora': '#a82400',
		        'QUOTE.fm': '#66ceff',
		        'Rdio': '#008fd5',
		        'Readability': '#9c0000',
		        'Red Hat': '#cc0000',
		        'Resource': '#7eb400',
		        'Rockpack': '#0ba6ab',
		        'Roon': '#62b0d9',
		        'RSS': '#ee802f',
		        'Salesforce': '#1798c1',
		        'Samsung': '#0c4da2',
		        'Shopify': '#96bf48',
		        'Skype': '#00aff0',
		        'Snagajob': '#f47a20',
		        'Softonic': '#008ace',
		        'SoundCloud': '#ff7700',
		        'Space Box': '#f86960',
		        'Spotify': '#81b71a',
		        'Sprint': '#fee100',
		        'Squarespace': '#121212',
		        'StackOverflow': '#ef8236',
		        'Staples': '#cc0000',
		        'Status Chart': '#d7584f',
		        'Stripe': '#008cdd',
		        'StudyBlue': '#00afe1',
		        'StumbleUpon': '#f74425',
		        'T-Mobile': '#ea0a8e',
		        'Technorati': '#40a800',
		        'The Next Web': '#ef4423',
		        'Treehouse': '#5cb868',
		        'Trulia': '#5eab1f',
		        'Tumblr': '#34526f',
		        'Twitch.tv': '#6441a5',
		        'Twitter': '#00acee',
		        'TYPO3': '#ff8700',
		        'Ubuntu': '#dd4814',
		        'Ustream': '#3388ff',
		        'Verizon': '#ef1d1d',
		        'Vimeo': '#86c9ef',
		        'Vine': '#00a478',
		        'Virb': '#06afd8',
		        'Virgin Media': '#cc0000',
		        'Wooga': '#5b009c',
		        'WordPress (blue)': '#21759b',
		        'WordPress (orange)': '#d54e21',
		        'WordPress (grey)': '#464646',
		        'Wunderlist': '#2b88d9',
		        'XBOX': '#9bc848',
		        'XING': '#126567',
		        'Yahoo!': '#720e9e',
		        'Yandex': '#ffcc00',
		        'Yelp': '#c41200',
		        'YouTube': '#c4302b',
		        'Zalongo': '#5498dc',
		        'Zendesk': '#78a300',
		        'Zerply': '#9dcc7a',
		        'Zootool': '#5e8b1d'
		    },
		    _brandNames: function() {
		        var brands = [];
		        for (var b in this._brandColors) {
		            brands.push(b)
		        }
		        return brands
		    },
		    /*
		        生成一段随机的 Base64 图片编码。
	
		        https://github.com/imsky/holder
		        Holder renders image placeholders entirely on the client side.
	
		        dataImageHolder: function(size) {
		            return 'holder.js/' + size
		        },
		    */
		    dataImage: function(size, text) {
		        var canvas
		        if (typeof document !== 'undefined') {
		            canvas = document.createElement('canvas')
		        } else {
		            /*
		                https://github.com/Automattic/node-canvas
		                    npm install canvas --save
		                安装问题：
		                * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
		                * https://github.com/Automattic/node-canvas/issues/415
		                * https://github.com/Automattic/node-canvas/wiki/_pages
	
		                PS：node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
		             */
		            var Canvas = module.require('canvas')
		            canvas = new Canvas()
		        }
	
		        var ctx = canvas && canvas.getContext && canvas.getContext("2d")
		        if (!canvas || !ctx) return ''
	
		        if (!size) size = this.pick(this._adSize)
		        text = text !== undefined ? text : size
	
		        size = size.split('x')
	
		        var width = parseInt(size[0], 10),
		            height = parseInt(size[1], 10),
		            background = this._brandColors[this.pick(this._brandNames())],
		            foreground = '#FFF',
		            text_height = 14,
		            font = 'sans-serif';
	
		        canvas.width = width
		        canvas.height = height
		        ctx.textAlign = 'center'
		        ctx.textBaseline = 'middle'
		        ctx.fillStyle = background
		        ctx.fillRect(0, 0, width, height)
		        ctx.fillStyle = foreground
		        ctx.font = 'bold ' + text_height + 'px ' + font
		        ctx.fillText(text, (width / 2), (height / 2), width)
		        return canvas.toDataURL('image/png')
		    }
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Color
	
		    http://llllll.li/randomColor/
		        A color generator for JavaScript.
		        randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.
	
		    http://randomcolour.com/
		        var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
		        bg_colour = "#" + ("000000" + bg_colour).slice(-6);
		        document.bgColor = bg_colour;
		    
		    http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
		        Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
		        https://github.com/devongovett/color-generator
	
		    http://www.paulirish.com/2009/random-hex-color-code-snippets/
		        Random Hex Color Code Generator in JavaScript
	
		    http://chancejs.com/#color
		        chance.color()
		        // => '#79c157'
		        chance.color({format: 'hex'})
		        // => '#d67118'
		        chance.color({format: 'shorthex'})
		        // => '#60f'
		        chance.color({format: 'rgb'})
		        // => 'rgb(110,52,164)'
	
		    http://tool.c7sky.com/webcolor
		        网页设计常用色彩搭配表
		    
		    https://github.com/One-com/one-color
		        An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
		        API 很赞
	
		    https://github.com/harthur/color
		        JavaScript color conversion and manipulation library
	
		    https://github.com/leaverou/css-colors
		        Share & convert CSS colors
		    http://leaverou.github.io/css-colors/#slategray
		        Type a CSS color keyword, #hex, hsl(), rgba(), whatever:
	
		    色调 hue
		        http://baike.baidu.com/view/23368.htm
		        色调指的是一幅画中画面色彩的总体倾向，是大的色彩效果。
		    饱和度 saturation
		        http://baike.baidu.com/view/189644.htm
		        饱和度是指色彩的鲜艳程度，也称色彩的纯度。饱和度取决于该色中含色成分和消色成分（灰色）的比例。含色成分越大，饱和度越大；消色成分越大，饱和度越小。
		    亮度 brightness
		        http://baike.baidu.com/view/34773.htm
		        亮度是指发光体（反光体）表面发光（反光）强弱的物理量。
		    照度 luminosity
		        物体被照亮的程度,采用单位面积所接受的光通量来表示,表示单位为勒[克斯](Lux,lx) ,即 1m / m2 。
	
		    http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
		        var letters = '0123456789ABCDEF'.split('')
		        var color = '#'
		        for (var i = 0; i < 6; i++) {
		            color += letters[Math.floor(Math.random() * 16)]
		        }
		        return color
		    
		        // 随机生成一个无脑的颜色，格式为 '#RRGGBB'。
		        // _brainlessColor()
		        var color = Math.floor(
		            Math.random() *
		            (16 * 16 * 16 * 16 * 16 * 16 - 1)
		        ).toString(16)
		        color = "#" + ("000000" + color).slice(-6)
		        return color.toUpperCase()
		*/
	
		var Convert = __webpack_require__(11)
		var DICT = __webpack_require__(12)
	
		module.exports = {
		    // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
		    color: function(name) {
		        if (name || DICT[name]) return DICT[name].nicer
		        return this.hex()
		    },
		    // #DAC0DE
		    hex: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        var hex = Convert.rgb2hex(rgb[0], rgb[1], rgb[2])
		        return hex
		    },
		    // rgb(128,255,255)
		    rgb: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        return 'rgb(' +
		            parseInt(rgb[0], 10) + ', ' +
		            parseInt(rgb[1], 10) + ', ' +
		            parseInt(rgb[2], 10) + ')'
		    },
		    // rgba(128,255,255,0.3)
		    rgba: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        return 'rgba(' +
		            parseInt(rgb[0], 10) + ', ' +
		            parseInt(rgb[1], 10) + ', ' +
		            parseInt(rgb[2], 10) + ', ' +
		            Math.random().toFixed(2) + ')'
		    },
		    // hsl(300,80%,90%)
		    hsl: function() {
		        var hsv = this._goldenRatioColor()
		        var hsl = Convert.hsv2hsl(hsv)
		        return 'hsl(' +
		            parseInt(hsl[0], 10) + ', ' +
		            parseInt(hsl[1], 10) + ', ' +
		            parseInt(hsl[2], 10) + ')'
		    },
		    // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
		    // https://github.com/devongovett/color-generator/blob/master/index.js
		    // 随机生成一个有吸引力的颜色。
		    _goldenRatioColor: function(saturation, value) {
		        this._goldenRatio = 0.618033988749895
		        this._hue = this._hue || Math.random()
		        this._hue += this._goldenRatio
		        this._hue %= 1
	
		        if (typeof saturation !== "number") saturation = 0.5;
		        if (typeof value !== "number") value = 0.95;
	
		        return [
		            this._hue * 360,
		            saturation * 100,
		            value * 100
		        ]
		    }
		}
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		/*
		    ## Color Convert
	
		    http://blog.csdn.net/idfaya/article/details/6770414
		        颜色空间RGB与HSV(HSL)的转换
		*/
		// https://github.com/harthur/color-convert/blob/master/conversions.js
		module.exports = {
			rgb2hsl: function rgb2hsl(rgb) {
				var r = rgb[0] / 255,
					g = rgb[1] / 255,
					b = rgb[2] / 255,
					min = Math.min(r, g, b),
					max = Math.max(r, g, b),
					delta = max - min,
					h, s, l;
	
				if (max == min)
					h = 0;
				else if (r == max)
					h = (g - b) / delta;
				else if (g == max)
					h = 2 + (b - r) / delta;
				else if (b == max)
					h = 4 + (r - g) / delta;
	
				h = Math.min(h * 60, 360);
	
				if (h < 0)
					h += 360;
	
				l = (min + max) / 2;
	
				if (max == min)
					s = 0;
				else if (l <= 0.5)
					s = delta / (max + min);
				else
					s = delta / (2 - max - min);
	
				return [h, s * 100, l * 100];
			},
			rgb2hsv: function rgb2hsv(rgb) {
				var r = rgb[0],
					g = rgb[1],
					b = rgb[2],
					min = Math.min(r, g, b),
					max = Math.max(r, g, b),
					delta = max - min,
					h, s, v;
	
				if (max === 0)
					s = 0;
				else
					s = (delta / max * 1000) / 10;
	
				if (max == min)
					h = 0;
				else if (r == max)
					h = (g - b) / delta;
				else if (g == max)
					h = 2 + (b - r) / delta;
				else if (b == max)
					h = 4 + (r - g) / delta;
	
				h = Math.min(h * 60, 360);
	
				if (h < 0)
					h += 360;
	
				v = ((max / 255) * 1000) / 10;
	
				return [h, s, v];
			},
			hsl2rgb: function hsl2rgb(hsl) {
				var h = hsl[0] / 360,
					s = hsl[1] / 100,
					l = hsl[2] / 100,
					t1, t2, t3, rgb, val;
	
				if (s === 0) {
					val = l * 255;
					return [val, val, val];
				}
	
				if (l < 0.5)
					t2 = l * (1 + s);
				else
					t2 = l + s - l * s;
				t1 = 2 * l - t2;
	
				rgb = [0, 0, 0];
				for (var i = 0; i < 3; i++) {
					t3 = h + 1 / 3 * -(i - 1);
					if (t3 < 0) t3++;
					if (t3 > 1) t3--;
	
					if (6 * t3 < 1)
						val = t1 + (t2 - t1) * 6 * t3;
					else if (2 * t3 < 1)
						val = t2;
					else if (3 * t3 < 2)
						val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
					else
						val = t1;
	
					rgb[i] = val * 255;
				}
	
				return rgb;
			},
			hsl2hsv: function hsl2hsv(hsl) {
				var h = hsl[0],
					s = hsl[1] / 100,
					l = hsl[2] / 100,
					sv, v;
				l *= 2;
				s *= (l <= 1) ? l : 2 - l;
				v = (l + s) / 2;
				sv = (2 * s) / (l + s);
				return [h, sv * 100, v * 100];
			},
			hsv2rgb: function hsv2rgb(hsv) {
				var h = hsv[0] / 60
				var s = hsv[1] / 100
				var v = hsv[2] / 100
				var hi = Math.floor(h) % 6
	
				var f = h - Math.floor(h)
				var p = 255 * v * (1 - s)
				var q = 255 * v * (1 - (s * f))
				var t = 255 * v * (1 - (s * (1 - f)))
	
				v = 255 * v
	
				switch (hi) {
					case 0:
						return [v, t, p]
					case 1:
						return [q, v, p]
					case 2:
						return [p, v, t]
					case 3:
						return [p, q, v]
					case 4:
						return [t, p, v]
					case 5:
						return [v, p, q]
				}
			},
			hsv2hsl: function hsv2hsl(hsv) {
				var h = hsv[0],
					s = hsv[1] / 100,
					v = hsv[2] / 100,
					sl, l;
	
				l = (2 - s) * v;
				sl = s * v;
				sl /= (l <= 1) ? l : 2 - l;
				l /= 2;
				return [h, sl * 100, l * 100];
			},
			// http://www.140byt.es/keywords/color
			rgb2hex: function(
				a, // red, as a number from 0 to 255
				b, // green, as a number from 0 to 255
				c // blue, as a number from 0 to 255
			) {
				return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1)
			},
			hex2rgb: function(
				a // take a "#xxxxxx" hex string,
			) {
				a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
				return [a >> 16, a >> 8 & 255, a & 255]
			}
		}
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		/*
		    ## Color 字典数据
	
		    字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
		*/
		module.exports = {
		    // name value nicer
		    navy: {
		        value: '#000080',
		        nicer: '#001F3F'
		    },
		    blue: {
		        value: '#0000ff',
		        nicer: '#0074D9'
		    },
		    aqua: {
		        value: '#00ffff',
		        nicer: '#7FDBFF'
		    },
		    teal: {
		        value: '#008080',
		        nicer: '#39CCCC'
		    },
		    olive: {
		        value: '#008000',
		        nicer: '#3D9970'
		    },
		    green: {
		        value: '#008000',
		        nicer: '#2ECC40'
		    },
		    lime: {
		        value: '#00ff00',
		        nicer: '#01FF70'
		    },
		    yellow: {
		        value: '#ffff00',
		        nicer: '#FFDC00'
		    },
		    orange: {
		        value: '#ffa500',
		        nicer: '#FF851B'
		    },
		    red: {
		        value: '#ff0000',
		        nicer: '#FF4136'
		    },
		    maroon: {
		        value: '#800000',
		        nicer: '#85144B'
		    },
		    fuchsia: {
		        value: '#ff00ff',
		        nicer: '#F012BE'
		    },
		    purple: {
		        value: '#800080',
		        nicer: '#B10DC9'
		    },
		    silver: {
		        value: '#c0c0c0',
		        nicer: '#DDDDDD'
		    },
		    gray: {
		        value: '#808080',
		        nicer: '#AAAAAA'
		    },
		    black: {
		        value: '#000000',
		        nicer: '#111111'
		    },
		    white: {
		        value: '#FFFFFF',
		        nicer: '#FFFFFF'
		    }
		}
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Text
	
		    http://www.lipsum.com/
		*/
		var Basic = __webpack_require__(6)
		var Helper = __webpack_require__(14)
	
		function range(defaultMin, defaultMax, min, max) {
		    return min === undefined ? Basic.natural(defaultMin, defaultMax) : // ()
		        max === undefined ? min : // ( len )
		        Basic.natural(parseInt(min, 10), parseInt(max, 10)) // ( min, max )
		}
	
		module.exports = {
		    // 随机生成一段文本。
		    paragraph: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.sentence())
		        }
		        return result.join(' ')
		    },
		    // 
		    cparagraph: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.csentence())
		        }
		        return result.join('')
		    },
		    // 随机生成一个句子，第一个单词的首字母大写。
		    sentence: function(min, max) {
		        var len = range(12, 18, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.word())
		        }
		        return Helper.capitalize(result.join(' ')) + '.'
		    },
		    // 随机生成一个中文句子。
		    csentence: function(min, max) {
		        var len = range(12, 18, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.cword())
		        }
	
		        return result.join('') + '。'
		    },
		    // 随机生成一个单词。
		    word: function(min, max) {
		        var len = range(3, 10, min, max)
		        var result = '';
		        for (var i = 0; i < len; i++) {
		            result += Basic.character('lower')
		        }
		        return result
		    },
		    // 随机生成一个或多个汉字。
		    cword: function(pool, min, max) {
		        // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
		        var DICT_KANZI = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞'
	
		        var len
		        switch (arguments.length) {
		            case 0: // ()
		                pool = DICT_KANZI
		                len = 1
		                break
		            case 1: // ( pool )
		                if (typeof arguments[0] === 'string') {
		                    len = 1
		                } else {
		                    // ( length )
		                    len = pool
		                    pool = DICT_KANZI
		                }
		                break
		            case 2:
		                // ( pool, length )
		                if (typeof arguments[0] === 'string') {
		                    len = min
		                } else {
		                    // ( min, max )
		                    len = this.natural(pool, min)
		                    pool = DICT_KANZI
		                }
		                break
		            case 3:
		                len = this.natural(min, max)
		                break
		        }
	
		        var result = ''
		        for (var i = 0; i < len; i++) {
		            result += pool.charAt(this.natural(0, pool.length - 1))
		        }
		        return result
		    },
		    // 随机生成一句标题，其中每个单词的首字母大写。
		    title: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.capitalize(this.word()))
		        }
		        return result.join(' ')
		    },
		    // 随机生成一句中文标题。
		    ctitle: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.cword())
		        }
		        return result.join('')
		    }
		}
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Helpers
		*/
	
		var Util = __webpack_require__(3)
	
		module.exports = {
			// 把字符串的第一个字母转换为大写。
			capitalize: function(word) {
				return (word + '').charAt(0).toUpperCase() + (word + '').substr(1)
			},
			// 把字符串转换为大写。
			upper: function(str) {
				return (str + '').toUpperCase()
			},
			// 把字符串转换为小写。
			lower: function(str) {
				return (str + '').toLowerCase()
			},
			// 从数组中随机选取一个元素，并返回。
			pick: function pick(arr, min, max) {
				// pick( item1, item2 ... )
				if (!Util.isArray(arr)) {
					arr = [].slice.call(arguments)
					min = 1
					max = 1
				} else {
					// pick( [ item1, item2 ... ] )
					if (min === undefined) min = 1
	
					// pick( [ item1, item2 ... ], count )
					if (max === undefined) max = min
				}
	
				if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)]
	
				// pick( [ item1, item2 ... ], min, max )
				return this.shuffle(arr, min, max)
	
				// 通过参数个数判断方法签名，扩展性太差！#90
				// switch (arguments.length) {
				// 	case 1:
				// 		// pick( [ item1, item2 ... ] )
				// 		return arr[this.natural(0, arr.length - 1)]
				// 	case 2:
				// 		// pick( [ item1, item2 ... ], count )
				// 		max = min
				// 			/* falls through */
				// 	case 3:
				// 		// pick( [ item1, item2 ... ], min, max )
				// 		return this.shuffle(arr, min, max)
				// }
			},
			/*
			    打乱数组中元素的顺序，并返回。
			    Given an array, scramble the order and return it.
	
			    其他的实现思路：
			        // https://code.google.com/p/jslibs/wiki/JavascriptTips
			        result = result.sort(function() {
			            return Math.random() - 0.5
			        })
			*/
			shuffle: function shuffle(arr, min, max) {
				arr = arr || []
				var old = arr.slice(0),
					result = [],
					index = 0,
					length = old.length;
				for (var i = 0; i < length; i++) {
					index = this.natural(0, old.length - 1)
					result.push(old[index])
					old.splice(index, 1)
				}
				switch (arguments.length) {
					case 0:
					case 1:
						return result
					case 2:
						max = min
							/* falls through */
					case 3:
						min = parseInt(min, 10)
						max = parseInt(max, 10)
						return result.slice(0, this.natural(min, max))
				}
			},
			/*
			    * Random.order(item, item)
			    * Random.order([item, item ...])
	
			    顺序获取数组中的元素
	
			    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
	
			    不支持单独调用！
			*/
			order: function order(array) {
				order.cache = order.cache || {}
	
				if (arguments.length > 1) array = [].slice.call(arguments, 0)
	
				// options.context.path/templatePath
				var options = order.options
				var templatePath = options.context.templatePath.join('.')
	
				var cache = (
					order.cache[templatePath] = order.cache[templatePath] || {
						index: 0,
						array: array
					}
				)
	
				return cache.array[cache.index++ % cache.array.length]
			}
		}
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		/*
		    ## Name
	
		    [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
		*/
		module.exports = {
			// 随机生成一个常见的英文名。
			first: function() {
				var names = [
					// male
					"James", "John", "Robert", "Michael", "William",
					"David", "Richard", "Charles", "Joseph", "Thomas",
					"Christopher", "Daniel", "Paul", "Mark", "Donald",
					"George", "Kenneth", "Steven", "Edward", "Brian",
					"Ronald", "Anthony", "Kevin", "Jason", "Matthew",
					"Gary", "Timothy", "Jose", "Larry", "Jeffrey",
					"Frank", "Scott", "Eric"
				].concat([
					// female
					"Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
					"Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
					"Lisa", "Nancy", "Karen", "Betty", "Helen",
					"Sandra", "Donna", "Carol", "Ruth", "Sharon",
					"Michelle", "Laura", "Sarah", "Kimberly", "Deborah",
					"Jessica", "Shirley", "Cynthia", "Angela", "Melissa",
					"Brenda", "Amy", "Anna"
				])
				return this.pick(names)
					// or this.capitalize(this.word())
			},
			// 随机生成一个常见的英文姓。
			last: function() {
				var names = [
					"Smith", "Johnson", "Williams", "Brown", "Jones",
					"Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
					"Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
					"Moore", "Martin", "Jackson", "Thompson", "White",
					"Lopez", "Lee", "Gonzalez", "Harris", "Clark",
					"Lewis", "Robinson", "Walker", "Perez", "Hall",
					"Young", "Allen"
				]
				return this.pick(names)
					// or this.capitalize(this.word())
			},
			// 随机生成一个常见的英文姓名。
			name: function(middle) {
				return this.first() + ' ' +
					(middle ? this.first() + ' ' : '') +
					this.last()
			},
			/*
			    随机生成一个常见的中文姓。
			    [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
			    [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
			 */
			cfirst: function() {
				var names = (
					'王 李 张 刘 陈 杨 赵 黄 周 吴 ' +
					'徐 孙 胡 朱 高 林 何 郭 马 罗 ' +
					'梁 宋 郑 谢 韩 唐 冯 于 董 萧 ' +
					'程 曹 袁 邓 许 傅 沈 曾 彭 吕 ' +
					'苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 ' +
					'余 潘 杜 戴 夏 锺 汪 田 任 姜 ' +
					'范 方 石 姚 谭 廖 邹 熊 金 陆 ' +
					'郝 孔 白 崔 康 毛 邱 秦 江 史 ' +
					'顾 侯 邵 孟 龙 万 段 雷 钱 汤 ' +
					'尹 黎 易 常 武 乔 贺 赖 龚 文'
				).split(' ')
				return this.pick(names)
			},
			/*
			    随机生成一个常见的中文名。
			    [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
			 */
			clast: function() {
				var names = (
					'伟 芳 娜 秀英 敏 静 丽 强 磊 军 ' +
					'洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 ' +
					'平 刚 桂英'
				).split(' ')
				return this.pick(names)
			},
			// 随机生成一个常见的中文姓名。
			cname: function() {
				return this.cfirst() + this.clast()
			}
		}
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		/*
		    ## Web
		*/
		module.exports = {
		    /*
		        随机生成一个 URL。
	
		        [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
		            http                    Hypertext Transfer Protocol 
		            ftp                     File Transfer protocol 
		            gopher                  The Gopher protocol 
		            mailto                  Electronic mail address 
		            mid                     Message identifiers for electronic mail 
		            cid                     Content identifiers for MIME body part 
		            news                    Usenet news 
		            nntp                    Usenet news for local NNTP access only 
		            prospero                Access using the prospero protocols 
		            telnet rlogin tn3270    Reference to interactive sessions
		            wais                    Wide Area Information Servers 
		    */
		    url: function(protocol, host) {
		        return (protocol || this.protocol()) + '://' + // protocol?
		            (host || this.domain()) + // host?
		            '/' + this.word()
		    },
		    // 随机生成一个 URL 协议。
		    protocol: function() {
		        return this.pick(
		            // 协议簇
		            'http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' ')
		        )
		    },
		    // 随机生成一个域名。
		    domain: function(tld) {
		        return this.word() + '.' + (tld || this.tld())
		    },
		    /*
		        随机生成一个顶级域名。
		        国际顶级域名 international top-level domain-names, iTLDs
		        国家顶级域名 national top-level domainnames, nTLDs
		        [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
		    */
		    tld: function() { // Top Level Domain
		        return this.pick(
		            (
		                // 域名后缀
		                'com net org edu gov int mil cn ' +
		                // 国内域名
		                'com.cn net.cn gov.cn org.cn ' +
		                // 中文国内域名
		                '中国 中国互联.公司 中国互联.网络 ' +
		                // 新国际域名
		                'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
		                // 世界各国域名后缀
		                'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw'
		            ).split(' ')
		        )
		    },
		    // 随机生成一个邮件地址。
		    email: function(domain) {
		        return this.character('lower') + '.' + this.word() + '@' +
		            (
		                domain ||
		                (this.word() + '.' + this.tld())
		            )
		            // return this.character('lower') + '.' + this.last().toLowerCase() + '@' + this.last().toLowerCase() + '.' + this.tld()
		            // return this.word() + '@' + (domain || this.domain())
		    },
		    // 随机生成一个 IP 地址。
		    ip: function() {
		        return this.natural(0, 255) + '.' +
		            this.natural(0, 255) + '.' +
		            this.natural(0, 255) + '.' +
		            this.natural(0, 255)
		    }
		}
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Address
		*/
	
		var DICT = __webpack_require__(18)
		var REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北']
	
		module.exports = {
		    // 随机生成一个大区。
		    region: function() {
		        return this.pick(REGION)
		    },
		    // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
		    province: function() {
		        return this.pick(DICT).name
		    },
		    // 随机生成一个（中国）市。
		    city: function(prefix) {
		        var province = this.pick(DICT)
		        var city = this.pick(province.children)
		        return prefix ? [province.name, city.name].join(' ') : city.name
		    },
		    // 随机生成一个（中国）县。
		    county: function(prefix) {
		        var province = this.pick(DICT)
		        var city = this.pick(province.children)
		        var county = this.pick(city.children) || {
		            name: '-'
		        }
		        return prefix ? [province.name, city.name, county.name].join(' ') : county.name
		    },
		    // 随机生成一个邮政编码（六位数字）。
		    zip: function(len) {
		        var zip = ''
		        for (var i = 0; i < (len || 6); i++) zip += this.natural(0, 9)
		        return zip
		    }
	
		    // address: function() {},
		    // phone: function() {},
		    // areacode: function() {},
		    // street: function() {},
		    // street_suffixes: function() {},
		    // street_suffix: function() {},
		    // states: function() {},
		    // state: function() {},
		}
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		/*
		    ## Address 字典数据
	
		    字典数据来源 http://www.atatech.org/articles/30028?rnd=254259856
	
		    国标 省（市）级行政区划码表
	
		    华北   北京市 天津市 河北省 山西省 内蒙古自治区
		    东北   辽宁省 吉林省 黑龙江省
		    华东   上海市 江苏省 浙江省 安徽省 福建省 江西省 山东省
		    华南   广东省 广西壮族自治区 海南省
		    华中   河南省 湖北省 湖南省
		    西南   重庆市 四川省 贵州省 云南省 西藏自治区
		    西北   陕西省 甘肃省 青海省 宁夏回族自治区 新疆维吾尔自治区
		    港澳台 香港特别行政区 澳门特别行政区 台湾省
		    
		    **排序**
		    
		    ```js
		    var map = {}
		    _.each(_.keys(REGIONS),function(id){
		      map[id] = REGIONS[ID]
		    })
		    JSON.stringify(map)
		    ```
		*/
		var DICT = {
		    "110000": "北京",
		    "110100": "北京市",
		    "110101": "东城区",
		    "110102": "西城区",
		    "110105": "朝阳区",
		    "110106": "丰台区",
		    "110107": "石景山区",
		    "110108": "海淀区",
		    "110109": "门头沟区",
		    "110111": "房山区",
		    "110112": "通州区",
		    "110113": "顺义区",
		    "110114": "昌平区",
		    "110115": "大兴区",
		    "110116": "怀柔区",
		    "110117": "平谷区",
		    "110228": "密云县",
		    "110229": "延庆县",
		    "110230": "其它区",
		    "120000": "天津",
		    "120100": "天津市",
		    "120101": "和平区",
		    "120102": "河东区",
		    "120103": "河西区",
		    "120104": "南开区",
		    "120105": "河北区",
		    "120106": "红桥区",
		    "120110": "东丽区",
		    "120111": "西青区",
		    "120112": "津南区",
		    "120113": "北辰区",
		    "120114": "武清区",
		    "120115": "宝坻区",
		    "120116": "滨海新区",
		    "120221": "宁河县",
		    "120223": "静海县",
		    "120225": "蓟县",
		    "120226": "其它区",
		    "130000": "河北省",
		    "130100": "石家庄市",
		    "130102": "长安区",
		    "130103": "桥东区",
		    "130104": "桥西区",
		    "130105": "新华区",
		    "130107": "井陉矿区",
		    "130108": "裕华区",
		    "130121": "井陉县",
		    "130123": "正定县",
		    "130124": "栾城县",
		    "130125": "行唐县",
		    "130126": "灵寿县",
		    "130127": "高邑县",
		    "130128": "深泽县",
		    "130129": "赞皇县",
		    "130130": "无极县",
		    "130131": "平山县",
		    "130132": "元氏县",
		    "130133": "赵县",
		    "130181": "辛集市",
		    "130182": "藁城市",
		    "130183": "晋州市",
		    "130184": "新乐市",
		    "130185": "鹿泉市",
		    "130186": "其它区",
		    "130200": "唐山市",
		    "130202": "路南区",
		    "130203": "路北区",
		    "130204": "古冶区",
		    "130205": "开平区",
		    "130207": "丰南区",
		    "130208": "丰润区",
		    "130223": "滦县",
		    "130224": "滦南县",
		    "130225": "乐亭县",
		    "130227": "迁西县",
		    "130229": "玉田县",
		    "130230": "曹妃甸区",
		    "130281": "遵化市",
		    "130283": "迁安市",
		    "130284": "其它区",
		    "130300": "秦皇岛市",
		    "130302": "海港区",
		    "130303": "山海关区",
		    "130304": "北戴河区",
		    "130321": "青龙满族自治县",
		    "130322": "昌黎县",
		    "130323": "抚宁县",
		    "130324": "卢龙县",
		    "130398": "其它区",
		    "130400": "邯郸市",
		    "130402": "邯山区",
		    "130403": "丛台区",
		    "130404": "复兴区",
		    "130406": "峰峰矿区",
		    "130421": "邯郸县",
		    "130423": "临漳县",
		    "130424": "成安县",
		    "130425": "大名县",
		    "130426": "涉县",
		    "130427": "磁县",
		    "130428": "肥乡县",
		    "130429": "永年县",
		    "130430": "邱县",
		    "130431": "鸡泽县",
		    "130432": "广平县",
		    "130433": "馆陶县",
		    "130434": "魏县",
		    "130435": "曲周县",
		    "130481": "武安市",
		    "130482": "其它区",
		    "130500": "邢台市",
		    "130502": "桥东区",
		    "130503": "桥西区",
		    "130521": "邢台县",
		    "130522": "临城县",
		    "130523": "内丘县",
		    "130524": "柏乡县",
		    "130525": "隆尧县",
		    "130526": "任县",
		    "130527": "南和县",
		    "130528": "宁晋县",
		    "130529": "巨鹿县",
		    "130530": "新河县",
		    "130531": "广宗县",
		    "130532": "平乡县",
		    "130533": "威县",
		    "130534": "清河县",
		    "130535": "临西县",
		    "130581": "南宫市",
		    "130582": "沙河市",
		    "130583": "其它区",
		    "130600": "保定市",
		    "130602": "新市区",
		    "130603": "北市区",
		    "130604": "南市区",
		    "130621": "满城县",
		    "130622": "清苑县",
		    "130623": "涞水县",
		    "130624": "阜平县",
		    "130625": "徐水县",
		    "130626": "定兴县",
		    "130627": "唐县",
		    "130628": "高阳县",
		    "130629": "容城县",
		    "130630": "涞源县",
		    "130631": "望都县",
		    "130632": "安新县",
		    "130633": "易县",
		    "130634": "曲阳县",
		    "130635": "蠡县",
		    "130636": "顺平县",
		    "130637": "博野县",
		    "130638": "雄县",
		    "130681": "涿州市",
		    "130682": "定州市",
		    "130683": "安国市",
		    "130684": "高碑店市",
		    "130699": "其它区",
		    "130700": "张家口市",
		    "130702": "桥东区",
		    "130703": "桥西区",
		    "130705": "宣化区",
		    "130706": "下花园区",
		    "130721": "宣化县",
		    "130722": "张北县",
		    "130723": "康保县",
		    "130724": "沽源县",
		    "130725": "尚义县",
		    "130726": "蔚县",
		    "130727": "阳原县",
		    "130728": "怀安县",
		    "130729": "万全县",
		    "130730": "怀来县",
		    "130731": "涿鹿县",
		    "130732": "赤城县",
		    "130733": "崇礼县",
		    "130734": "其它区",
		    "130800": "承德市",
		    "130802": "双桥区",
		    "130803": "双滦区",
		    "130804": "鹰手营子矿区",
		    "130821": "承德县",
		    "130822": "兴隆县",
		    "130823": "平泉县",
		    "130824": "滦平县",
		    "130825": "隆化县",
		    "130826": "丰宁满族自治县",
		    "130827": "宽城满族自治县",
		    "130828": "围场满族蒙古族自治县",
		    "130829": "其它区",
		    "130900": "沧州市",
		    "130902": "新华区",
		    "130903": "运河区",
		    "130921": "沧县",
		    "130922": "青县",
		    "130923": "东光县",
		    "130924": "海兴县",
		    "130925": "盐山县",
		    "130926": "肃宁县",
		    "130927": "南皮县",
		    "130928": "吴桥县",
		    "130929": "献县",
		    "130930": "孟村回族自治县",
		    "130981": "泊头市",
		    "130982": "任丘市",
		    "130983": "黄骅市",
		    "130984": "河间市",
		    "130985": "其它区",
		    "131000": "廊坊市",
		    "131002": "安次区",
		    "131003": "广阳区",
		    "131022": "固安县",
		    "131023": "永清县",
		    "131024": "香河县",
		    "131025": "大城县",
		    "131026": "文安县",
		    "131028": "大厂回族自治县",
		    "131081": "霸州市",
		    "131082": "三河市",
		    "131083": "其它区",
		    "131100": "衡水市",
		    "131102": "桃城区",
		    "131121": "枣强县",
		    "131122": "武邑县",
		    "131123": "武强县",
		    "131124": "饶阳县",
		    "131125": "安平县",
		    "131126": "故城县",
		    "131127": "景县",
		    "131128": "阜城县",
		    "131181": "冀州市",
		    "131182": "深州市",
		    "131183": "其它区",
		    "140000": "山西省",
		    "140100": "太原市",
		    "140105": "小店区",
		    "140106": "迎泽区",
		    "140107": "杏花岭区",
		    "140108": "尖草坪区",
		    "140109": "万柏林区",
		    "140110": "晋源区",
		    "140121": "清徐县",
		    "140122": "阳曲县",
		    "140123": "娄烦县",
		    "140181": "古交市",
		    "140182": "其它区",
		    "140200": "大同市",
		    "140202": "城区",
		    "140203": "矿区",
		    "140211": "南郊区",
		    "140212": "新荣区",
		    "140221": "阳高县",
		    "140222": "天镇县",
		    "140223": "广灵县",
		    "140224": "灵丘县",
		    "140225": "浑源县",
		    "140226": "左云县",
		    "140227": "大同县",
		    "140228": "其它区",
		    "140300": "阳泉市",
		    "140302": "城区",
		    "140303": "矿区",
		    "140311": "郊区",
		    "140321": "平定县",
		    "140322": "盂县",
		    "140323": "其它区",
		    "140400": "长治市",
		    "140421": "长治县",
		    "140423": "襄垣县",
		    "140424": "屯留县",
		    "140425": "平顺县",
		    "140426": "黎城县",
		    "140427": "壶关县",
		    "140428": "长子县",
		    "140429": "武乡县",
		    "140430": "沁县",
		    "140431": "沁源县",
		    "140481": "潞城市",
		    "140482": "城区",
		    "140483": "郊区",
		    "140485": "其它区",
		    "140500": "晋城市",
		    "140502": "城区",
		    "140521": "沁水县",
		    "140522": "阳城县",
		    "140524": "陵川县",
		    "140525": "泽州县",
		    "140581": "高平市",
		    "140582": "其它区",
		    "140600": "朔州市",
		    "140602": "朔城区",
		    "140603": "平鲁区",
		    "140621": "山阴县",
		    "140622": "应县",
		    "140623": "右玉县",
		    "140624": "怀仁县",
		    "140625": "其它区",
		    "140700": "晋中市",
		    "140702": "榆次区",
		    "140721": "榆社县",
		    "140722": "左权县",
		    "140723": "和顺县",
		    "140724": "昔阳县",
		    "140725": "寿阳县",
		    "140726": "太谷县",
		    "140727": "祁县",
		    "140728": "平遥县",
		    "140729": "灵石县",
		    "140781": "介休市",
		    "140782": "其它区",
		    "140800": "运城市",
		    "140802": "盐湖区",
		    "140821": "临猗县",
		    "140822": "万荣县",
		    "140823": "闻喜县",
		    "140824": "稷山县",
		    "140825": "新绛县",
		    "140826": "绛县",
		    "140827": "垣曲县",
		    "140828": "夏县",
		    "140829": "平陆县",
		    "140830": "芮城县",
		    "140881": "永济市",
		    "140882": "河津市",
		    "140883": "其它区",
		    "140900": "忻州市",
		    "140902": "忻府区",
		    "140921": "定襄县",
		    "140922": "五台县",
		    "140923": "代县",
		    "140924": "繁峙县",
		    "140925": "宁武县",
		    "140926": "静乐县",
		    "140927": "神池县",
		    "140928": "五寨县",
		    "140929": "岢岚县",
		    "140930": "河曲县",
		    "140931": "保德县",
		    "140932": "偏关县",
		    "140981": "原平市",
		    "140982": "其它区",
		    "141000": "临汾市",
		    "141002": "尧都区",
		    "141021": "曲沃县",
		    "141022": "翼城县",
		    "141023": "襄汾县",
		    "141024": "洪洞县",
		    "141025": "古县",
		    "141026": "安泽县",
		    "141027": "浮山县",
		    "141028": "吉县",
		    "141029": "乡宁县",
		    "141030": "大宁县",
		    "141031": "隰县",
		    "141032": "永和县",
		    "141033": "蒲县",
		    "141034": "汾西县",
		    "141081": "侯马市",
		    "141082": "霍州市",
		    "141083": "其它区",
		    "141100": "吕梁市",
		    "141102": "离石区",
		    "141121": "文水县",
		    "141122": "交城县",
		    "141123": "兴县",
		    "141124": "临县",
		    "141125": "柳林县",
		    "141126": "石楼县",
		    "141127": "岚县",
		    "141128": "方山县",
		    "141129": "中阳县",
		    "141130": "交口县",
		    "141181": "孝义市",
		    "141182": "汾阳市",
		    "141183": "其它区",
		    "150000": "内蒙古自治区",
		    "150100": "呼和浩特市",
		    "150102": "新城区",
		    "150103": "回民区",
		    "150104": "玉泉区",
		    "150105": "赛罕区",
		    "150121": "土默特左旗",
		    "150122": "托克托县",
		    "150123": "和林格尔县",
		    "150124": "清水河县",
		    "150125": "武川县",
		    "150126": "其它区",
		    "150200": "包头市",
		    "150202": "东河区",
		    "150203": "昆都仑区",
		    "150204": "青山区",
		    "150205": "石拐区",
		    "150206": "白云鄂博矿区",
		    "150207": "九原区",
		    "150221": "土默特右旗",
		    "150222": "固阳县",
		    "150223": "达尔罕茂明安联合旗",
		    "150224": "其它区",
		    "150300": "乌海市",
		    "150302": "海勃湾区",
		    "150303": "海南区",
		    "150304": "乌达区",
		    "150305": "其它区",
		    "150400": "赤峰市",
		    "150402": "红山区",
		    "150403": "元宝山区",
		    "150404": "松山区",
		    "150421": "阿鲁科尔沁旗",
		    "150422": "巴林左旗",
		    "150423": "巴林右旗",
		    "150424": "林西县",
		    "150425": "克什克腾旗",
		    "150426": "翁牛特旗",
		    "150428": "喀喇沁旗",
		    "150429": "宁城县",
		    "150430": "敖汉旗",
		    "150431": "其它区",
		    "150500": "通辽市",
		    "150502": "科尔沁区",
		    "150521": "科尔沁左翼中旗",
		    "150522": "科尔沁左翼后旗",
		    "150523": "开鲁县",
		    "150524": "库伦旗",
		    "150525": "奈曼旗",
		    "150526": "扎鲁特旗",
		    "150581": "霍林郭勒市",
		    "150582": "其它区",
		    "150600": "鄂尔多斯市",
		    "150602": "东胜区",
		    "150621": "达拉特旗",
		    "150622": "准格尔旗",
		    "150623": "鄂托克前旗",
		    "150624": "鄂托克旗",
		    "150625": "杭锦旗",
		    "150626": "乌审旗",
		    "150627": "伊金霍洛旗",
		    "150628": "其它区",
		    "150700": "呼伦贝尔市",
		    "150702": "海拉尔区",
		    "150703": "扎赉诺尔区",
		    "150721": "阿荣旗",
		    "150722": "莫力达瓦达斡尔族自治旗",
		    "150723": "鄂伦春自治旗",
		    "150724": "鄂温克族自治旗",
		    "150725": "陈巴尔虎旗",
		    "150726": "新巴尔虎左旗",
		    "150727": "新巴尔虎右旗",
		    "150781": "满洲里市",
		    "150782": "牙克石市",
		    "150783": "扎兰屯市",
		    "150784": "额尔古纳市",
		    "150785": "根河市",
		    "150786": "其它区",
		    "150800": "巴彦淖尔市",
		    "150802": "临河区",
		    "150821": "五原县",
		    "150822": "磴口县",
		    "150823": "乌拉特前旗",
		    "150824": "乌拉特中旗",
		    "150825": "乌拉特后旗",
		    "150826": "杭锦后旗",
		    "150827": "其它区",
		    "150900": "乌兰察布市",
		    "150902": "集宁区",
		    "150921": "卓资县",
		    "150922": "化德县",
		    "150923": "商都县",
		    "150924": "兴和县",
		    "150925": "凉城县",
		    "150926": "察哈尔右翼前旗",
		    "150927": "察哈尔右翼中旗",
		    "150928": "察哈尔右翼后旗",
		    "150929": "四子王旗",
		    "150981": "丰镇市",
		    "150982": "其它区",
		    "152200": "兴安盟",
		    "152201": "乌兰浩特市",
		    "152202": "阿尔山市",
		    "152221": "科尔沁右翼前旗",
		    "152222": "科尔沁右翼中旗",
		    "152223": "扎赉特旗",
		    "152224": "突泉县",
		    "152225": "其它区",
		    "152500": "锡林郭勒盟",
		    "152501": "二连浩特市",
		    "152502": "锡林浩特市",
		    "152522": "阿巴嘎旗",
		    "152523": "苏尼特左旗",
		    "152524": "苏尼特右旗",
		    "152525": "东乌珠穆沁旗",
		    "152526": "西乌珠穆沁旗",
		    "152527": "太仆寺旗",
		    "152528": "镶黄旗",
		    "152529": "正镶白旗",
		    "152530": "正蓝旗",
		    "152531": "多伦县",
		    "152532": "其它区",
		    "152900": "阿拉善盟",
		    "152921": "阿拉善左旗",
		    "152922": "阿拉善右旗",
		    "152923": "额济纳旗",
		    "152924": "其它区",
		    "210000": "辽宁省",
		    "210100": "沈阳市",
		    "210102": "和平区",
		    "210103": "沈河区",
		    "210104": "大东区",
		    "210105": "皇姑区",
		    "210106": "铁西区",
		    "210111": "苏家屯区",
		    "210112": "东陵区",
		    "210113": "新城子区",
		    "210114": "于洪区",
		    "210122": "辽中县",
		    "210123": "康平县",
		    "210124": "法库县",
		    "210181": "新民市",
		    "210184": "沈北新区",
		    "210185": "其它区",
		    "210200": "大连市",
		    "210202": "中山区",
		    "210203": "西岗区",
		    "210204": "沙河口区",
		    "210211": "甘井子区",
		    "210212": "旅顺口区",
		    "210213": "金州区",
		    "210224": "长海县",
		    "210281": "瓦房店市",
		    "210282": "普兰店市",
		    "210283": "庄河市",
		    "210298": "其它区",
		    "210300": "鞍山市",
		    "210302": "铁东区",
		    "210303": "铁西区",
		    "210304": "立山区",
		    "210311": "千山区",
		    "210321": "台安县",
		    "210323": "岫岩满族自治县",
		    "210381": "海城市",
		    "210382": "其它区",
		    "210400": "抚顺市",
		    "210402": "新抚区",
		    "210403": "东洲区",
		    "210404": "望花区",
		    "210411": "顺城区",
		    "210421": "抚顺县",
		    "210422": "新宾满族自治县",
		    "210423": "清原满族自治县",
		    "210424": "其它区",
		    "210500": "本溪市",
		    "210502": "平山区",
		    "210503": "溪湖区",
		    "210504": "明山区",
		    "210505": "南芬区",
		    "210521": "本溪满族自治县",
		    "210522": "桓仁满族自治县",
		    "210523": "其它区",
		    "210600": "丹东市",
		    "210602": "元宝区",
		    "210603": "振兴区",
		    "210604": "振安区",
		    "210624": "宽甸满族自治县",
		    "210681": "东港市",
		    "210682": "凤城市",
		    "210683": "其它区",
		    "210700": "锦州市",
		    "210702": "古塔区",
		    "210703": "凌河区",
		    "210711": "太和区",
		    "210726": "黑山县",
		    "210727": "义县",
		    "210781": "凌海市",
		    "210782": "北镇市",
		    "210783": "其它区",
		    "210800": "营口市",
		    "210802": "站前区",
		    "210803": "西市区",
		    "210804": "鲅鱼圈区",
		    "210811": "老边区",
		    "210881": "盖州市",
		    "210882": "大石桥市",
		    "210883": "其它区",
		    "210900": "阜新市",
		    "210902": "海州区",
		    "210903": "新邱区",
		    "210904": "太平区",
		    "210905": "清河门区",
		    "210911": "细河区",
		    "210921": "阜新蒙古族自治县",
		    "210922": "彰武县",
		    "210923": "其它区",
		    "211000": "辽阳市",
		    "211002": "白塔区",
		    "211003": "文圣区",
		    "211004": "宏伟区",
		    "211005": "弓长岭区",
		    "211011": "太子河区",
		    "211021": "辽阳县",
		    "211081": "灯塔市",
		    "211082": "其它区",
		    "211100": "盘锦市",
		    "211102": "双台子区",
		    "211103": "兴隆台区",
		    "211121": "大洼县",
		    "211122": "盘山县",
		    "211123": "其它区",
		    "211200": "铁岭市",
		    "211202": "银州区",
		    "211204": "清河区",
		    "211221": "铁岭县",
		    "211223": "西丰县",
		    "211224": "昌图县",
		    "211281": "调兵山市",
		    "211282": "开原市",
		    "211283": "其它区",
		    "211300": "朝阳市",
		    "211302": "双塔区",
		    "211303": "龙城区",
		    "211321": "朝阳县",
		    "211322": "建平县",
		    "211324": "喀喇沁左翼蒙古族自治县",
		    "211381": "北票市",
		    "211382": "凌源市",
		    "211383": "其它区",
		    "211400": "葫芦岛市",
		    "211402": "连山区",
		    "211403": "龙港区",
		    "211404": "南票区",
		    "211421": "绥中县",
		    "211422": "建昌县",
		    "211481": "兴城市",
		    "211482": "其它区",
		    "220000": "吉林省",
		    "220100": "长春市",
		    "220102": "南关区",
		    "220103": "宽城区",
		    "220104": "朝阳区",
		    "220105": "二道区",
		    "220106": "绿园区",
		    "220112": "双阳区",
		    "220122": "农安县",
		    "220181": "九台市",
		    "220182": "榆树市",
		    "220183": "德惠市",
		    "220188": "其它区",
		    "220200": "吉林市",
		    "220202": "昌邑区",
		    "220203": "龙潭区",
		    "220204": "船营区",
		    "220211": "丰满区",
		    "220221": "永吉县",
		    "220281": "蛟河市",
		    "220282": "桦甸市",
		    "220283": "舒兰市",
		    "220284": "磐石市",
		    "220285": "其它区",
		    "220300": "四平市",
		    "220302": "铁西区",
		    "220303": "铁东区",
		    "220322": "梨树县",
		    "220323": "伊通满族自治县",
		    "220381": "公主岭市",
		    "220382": "双辽市",
		    "220383": "其它区",
		    "220400": "辽源市",
		    "220402": "龙山区",
		    "220403": "西安区",
		    "220421": "东丰县",
		    "220422": "东辽县",
		    "220423": "其它区",
		    "220500": "通化市",
		    "220502": "东昌区",
		    "220503": "二道江区",
		    "220521": "通化县",
		    "220523": "辉南县",
		    "220524": "柳河县",
		    "220581": "梅河口市",
		    "220582": "集安市",
		    "220583": "其它区",
		    "220600": "白山市",
		    "220602": "浑江区",
		    "220621": "抚松县",
		    "220622": "靖宇县",
		    "220623": "长白朝鲜族自治县",
		    "220625": "江源区",
		    "220681": "临江市",
		    "220682": "其它区",
		    "220700": "松原市",
		    "220702": "宁江区",
		    "220721": "前郭尔罗斯蒙古族自治县",
		    "220722": "长岭县",
		    "220723": "乾安县",
		    "220724": "扶余市",
		    "220725": "其它区",
		    "220800": "白城市",
		    "220802": "洮北区",
		    "220821": "镇赉县",
		    "220822": "通榆县",
		    "220881": "洮南市",
		    "220882": "大安市",
		    "220883": "其它区",
		    "222400": "延边朝鲜族自治州",
		    "222401": "延吉市",
		    "222402": "图们市",
		    "222403": "敦化市",
		    "222404": "珲春市",
		    "222405": "龙井市",
		    "222406": "和龙市",
		    "222424": "汪清县",
		    "222426": "安图县",
		    "222427": "其它区",
		    "230000": "黑龙江省",
		    "230100": "哈尔滨市",
		    "230102": "道里区",
		    "230103": "南岗区",
		    "230104": "道外区",
		    "230106": "香坊区",
		    "230108": "平房区",
		    "230109": "松北区",
		    "230111": "呼兰区",
		    "230123": "依兰县",
		    "230124": "方正县",
		    "230125": "宾县",
		    "230126": "巴彦县",
		    "230127": "木兰县",
		    "230128": "通河县",
		    "230129": "延寿县",
		    "230181": "阿城区",
		    "230182": "双城市",
		    "230183": "尚志市",
		    "230184": "五常市",
		    "230186": "其它区",
		    "230200": "齐齐哈尔市",
		    "230202": "龙沙区",
		    "230203": "建华区",
		    "230204": "铁锋区",
		    "230205": "昂昂溪区",
		    "230206": "富拉尔基区",
		    "230207": "碾子山区",
		    "230208": "梅里斯达斡尔族区",
		    "230221": "龙江县",
		    "230223": "依安县",
		    "230224": "泰来县",
		    "230225": "甘南县",
		    "230227": "富裕县",
		    "230229": "克山县",
		    "230230": "克东县",
		    "230231": "拜泉县",
		    "230281": "讷河市",
		    "230282": "其它区",
		    "230300": "鸡西市",
		    "230302": "鸡冠区",
		    "230303": "恒山区",
		    "230304": "滴道区",
		    "230305": "梨树区",
		    "230306": "城子河区",
		    "230307": "麻山区",
		    "230321": "鸡东县",
		    "230381": "虎林市",
		    "230382": "密山市",
		    "230383": "其它区",
		    "230400": "鹤岗市",
		    "230402": "向阳区",
		    "230403": "工农区",
		    "230404": "南山区",
		    "230405": "兴安区",
		    "230406": "东山区",
		    "230407": "兴山区",
		    "230421": "萝北县",
		    "230422": "绥滨县",
		    "230423": "其它区",
		    "230500": "双鸭山市",
		    "230502": "尖山区",
		    "230503": "岭东区",
		    "230505": "四方台区",
		    "230506": "宝山区",
		    "230521": "集贤县",
		    "230522": "友谊县",
		    "230523": "宝清县",
		    "230524": "饶河县",
		    "230525": "其它区",
		    "230600": "大庆市",
		    "230602": "萨尔图区",
		    "230603": "龙凤区",
		    "230604": "让胡路区",
		    "230605": "红岗区",
		    "230606": "大同区",
		    "230621": "肇州县",
		    "230622": "肇源县",
		    "230623": "林甸县",
		    "230624": "杜尔伯特蒙古族自治县",
		    "230625": "其它区",
		    "230700": "伊春市",
		    "230702": "伊春区",
		    "230703": "南岔区",
		    "230704": "友好区",
		    "230705": "西林区",
		    "230706": "翠峦区",
		    "230707": "新青区",
		    "230708": "美溪区",
		    "230709": "金山屯区",
		    "230710": "五营区",
		    "230711": "乌马河区",
		    "230712": "汤旺河区",
		    "230713": "带岭区",
		    "230714": "乌伊岭区",
		    "230715": "红星区",
		    "230716": "上甘岭区",
		    "230722": "嘉荫县",
		    "230781": "铁力市",
		    "230782": "其它区",
		    "230800": "佳木斯市",
		    "230803": "向阳区",
		    "230804": "前进区",
		    "230805": "东风区",
		    "230811": "郊区",
		    "230822": "桦南县",
		    "230826": "桦川县",
		    "230828": "汤原县",
		    "230833": "抚远县",
		    "230881": "同江市",
		    "230882": "富锦市",
		    "230883": "其它区",
		    "230900": "七台河市",
		    "230902": "新兴区",
		    "230903": "桃山区",
		    "230904": "茄子河区",
		    "230921": "勃利县",
		    "230922": "其它区",
		    "231000": "牡丹江市",
		    "231002": "东安区",
		    "231003": "阳明区",
		    "231004": "爱民区",
		    "231005": "西安区",
		    "231024": "东宁县",
		    "231025": "林口县",
		    "231081": "绥芬河市",
		    "231083": "海林市",
		    "231084": "宁安市",
		    "231085": "穆棱市",
		    "231086": "其它区",
		    "231100": "黑河市",
		    "231102": "爱辉区",
		    "231121": "嫩江县",
		    "231123": "逊克县",
		    "231124": "孙吴县",
		    "231181": "北安市",
		    "231182": "五大连池市",
		    "231183": "其它区",
		    "231200": "绥化市",
		    "231202": "北林区",
		    "231221": "望奎县",
		    "231222": "兰西县",
		    "231223": "青冈县",
		    "231224": "庆安县",
		    "231225": "明水县",
		    "231226": "绥棱县",
		    "231281": "安达市",
		    "231282": "肇东市",
		    "231283": "海伦市",
		    "231284": "其它区",
		    "232700": "大兴安岭地区",
		    "232702": "松岭区",
		    "232703": "新林区",
		    "232704": "呼中区",
		    "232721": "呼玛县",
		    "232722": "塔河县",
		    "232723": "漠河县",
		    "232724": "加格达奇区",
		    "232725": "其它区",
		    "310000": "上海",
		    "310100": "上海市",
		    "310101": "黄浦区",
		    "310104": "徐汇区",
		    "310105": "长宁区",
		    "310106": "静安区",
		    "310107": "普陀区",
		    "310108": "闸北区",
		    "310109": "虹口区",
		    "310110": "杨浦区",
		    "310112": "闵行区",
		    "310113": "宝山区",
		    "310114": "嘉定区",
		    "310115": "浦东新区",
		    "310116": "金山区",
		    "310117": "松江区",
		    "310118": "青浦区",
		    "310120": "奉贤区",
		    "310230": "崇明县",
		    "310231": "其它区",
		    "320000": "江苏省",
		    "320100": "南京市",
		    "320102": "玄武区",
		    "320104": "秦淮区",
		    "320105": "建邺区",
		    "320106": "鼓楼区",
		    "320111": "浦口区",
		    "320113": "栖霞区",
		    "320114": "雨花台区",
		    "320115": "江宁区",
		    "320116": "六合区",
		    "320124": "溧水区",
		    "320125": "高淳区",
		    "320126": "其它区",
		    "320200": "无锡市",
		    "320202": "崇安区",
		    "320203": "南长区",
		    "320204": "北塘区",
		    "320205": "锡山区",
		    "320206": "惠山区",
		    "320211": "滨湖区",
		    "320281": "江阴市",
		    "320282": "宜兴市",
		    "320297": "其它区",
		    "320300": "徐州市",
		    "320302": "鼓楼区",
		    "320303": "云龙区",
		    "320305": "贾汪区",
		    "320311": "泉山区",
		    "320321": "丰县",
		    "320322": "沛县",
		    "320323": "铜山区",
		    "320324": "睢宁县",
		    "320381": "新沂市",
		    "320382": "邳州市",
		    "320383": "其它区",
		    "320400": "常州市",
		    "320402": "天宁区",
		    "320404": "钟楼区",
		    "320405": "戚墅堰区",
		    "320411": "新北区",
		    "320412": "武进区",
		    "320481": "溧阳市",
		    "320482": "金坛市",
		    "320483": "其它区",
		    "320500": "苏州市",
		    "320505": "虎丘区",
		    "320506": "吴中区",
		    "320507": "相城区",
		    "320508": "姑苏区",
		    "320581": "常熟市",
		    "320582": "张家港市",
		    "320583": "昆山市",
		    "320584": "吴江区",
		    "320585": "太仓市",
		    "320596": "其它区",
		    "320600": "南通市",
		    "320602": "崇川区",
		    "320611": "港闸区",
		    "320612": "通州区",
		    "320621": "海安县",
		    "320623": "如东县",
		    "320681": "启东市",
		    "320682": "如皋市",
		    "320684": "海门市",
		    "320694": "其它区",
		    "320700": "连云港市",
		    "320703": "连云区",
		    "320705": "新浦区",
		    "320706": "海州区",
		    "320721": "赣榆县",
		    "320722": "东海县",
		    "320723": "灌云县",
		    "320724": "灌南县",
		    "320725": "其它区",
		    "320800": "淮安市",
		    "320802": "清河区",
		    "320803": "淮安区",
		    "320804": "淮阴区",
		    "320811": "清浦区",
		    "320826": "涟水县",
		    "320829": "洪泽县",
		    "320830": "盱眙县",
		    "320831": "金湖县",
		    "320832": "其它区",
		    "320900": "盐城市",
		    "320902": "亭湖区",
		    "320903": "盐都区",
		    "320921": "响水县",
		    "320922": "滨海县",
		    "320923": "阜宁县",
		    "320924": "射阳县",
		    "320925": "建湖县",
		    "320981": "东台市",
		    "320982": "大丰市",
		    "320983": "其它区",
		    "321000": "扬州市",
		    "321002": "广陵区",
		    "321003": "邗江区",
		    "321023": "宝应县",
		    "321081": "仪征市",
		    "321084": "高邮市",
		    "321088": "江都区",
		    "321093": "其它区",
		    "321100": "镇江市",
		    "321102": "京口区",
		    "321111": "润州区",
		    "321112": "丹徒区",
		    "321181": "丹阳市",
		    "321182": "扬中市",
		    "321183": "句容市",
		    "321184": "其它区",
		    "321200": "泰州市",
		    "321202": "海陵区",
		    "321203": "高港区",
		    "321281": "兴化市",
		    "321282": "靖江市",
		    "321283": "泰兴市",
		    "321284": "姜堰区",
		    "321285": "其它区",
		    "321300": "宿迁市",
		    "321302": "宿城区",
		    "321311": "宿豫区",
		    "321322": "沭阳县",
		    "321323": "泗阳县",
		    "321324": "泗洪县",
		    "321325": "其它区",
		    "330000": "浙江省",
		    "330100": "杭州市",
		    "330102": "上城区",
		    "330103": "下城区",
		    "330104": "江干区",
		    "330105": "拱墅区",
		    "330106": "西湖区",
		    "330108": "滨江区",
		    "330109": "萧山区",
		    "330110": "余杭区",
		    "330122": "桐庐县",
		    "330127": "淳安县",
		    "330182": "建德市",
		    "330183": "富阳市",
		    "330185": "临安市",
		    "330186": "其它区",
		    "330200": "宁波市",
		    "330203": "海曙区",
		    "330204": "江东区",
		    "330205": "江北区",
		    "330206": "北仑区",
		    "330211": "镇海区",
		    "330212": "鄞州区",
		    "330225": "象山县",
		    "330226": "宁海县",
		    "330281": "余姚市",
		    "330282": "慈溪市",
		    "330283": "奉化市",
		    "330284": "其它区",
		    "330300": "温州市",
		    "330302": "鹿城区",
		    "330303": "龙湾区",
		    "330304": "瓯海区",
		    "330322": "洞头县",
		    "330324": "永嘉县",
		    "330326": "平阳县",
		    "330327": "苍南县",
		    "330328": "文成县",
		    "330329": "泰顺县",
		    "330381": "瑞安市",
		    "330382": "乐清市",
		    "330383": "其它区",
		    "330400": "嘉兴市",
		    "330402": "南湖区",
		    "330411": "秀洲区",
		    "330421": "嘉善县",
		    "330424": "海盐县",
		    "330481": "海宁市",
		    "330482": "平湖市",
		    "330483": "桐乡市",
		    "330484": "其它区",
		    "330500": "湖州市",
		    "330502": "吴兴区",
		    "330503": "南浔区",
		    "330521": "德清县",
		    "330522": "长兴县",
		    "330523": "安吉县",
		    "330524": "其它区",
		    "330600": "绍兴市",
		    "330602": "越城区",
		    "330621": "绍兴县",
		    "330624": "新昌县",
		    "330681": "诸暨市",
		    "330682": "上虞市",
		    "330683": "嵊州市",
		    "330684": "其它区",
		    "330700": "金华市",
		    "330702": "婺城区",
		    "330703": "金东区",
		    "330723": "武义县",
		    "330726": "浦江县",
		    "330727": "磐安县",
		    "330781": "兰溪市",
		    "330782": "义乌市",
		    "330783": "东阳市",
		    "330784": "永康市",
		    "330785": "其它区",
		    "330800": "衢州市",
		    "330802": "柯城区",
		    "330803": "衢江区",
		    "330822": "常山县",
		    "330824": "开化县",
		    "330825": "龙游县",
		    "330881": "江山市",
		    "330882": "其它区",
		    "330900": "舟山市",
		    "330902": "定海区",
		    "330903": "普陀区",
		    "330921": "岱山县",
		    "330922": "嵊泗县",
		    "330923": "其它区",
		    "331000": "台州市",
		    "331002": "椒江区",
		    "331003": "黄岩区",
		    "331004": "路桥区",
		    "331021": "玉环县",
		    "331022": "三门县",
		    "331023": "天台县",
		    "331024": "仙居县",
		    "331081": "温岭市",
		    "331082": "临海市",
		    "331083": "其它区",
		    "331100": "丽水市",
		    "331102": "莲都区",
		    "331121": "青田县",
		    "331122": "缙云县",
		    "331123": "遂昌县",
		    "331124": "松阳县",
		    "331125": "云和县",
		    "331126": "庆元县",
		    "331127": "景宁畲族自治县",
		    "331181": "龙泉市",
		    "331182": "其它区",
		    "340000": "安徽省",
		    "340100": "合肥市",
		    "340102": "瑶海区",
		    "340103": "庐阳区",
		    "340104": "蜀山区",
		    "340111": "包河区",
		    "340121": "长丰县",
		    "340122": "肥东县",
		    "340123": "肥西县",
		    "340192": "其它区",
		    "340200": "芜湖市",
		    "340202": "镜湖区",
		    "340203": "弋江区",
		    "340207": "鸠江区",
		    "340208": "三山区",
		    "340221": "芜湖县",
		    "340222": "繁昌县",
		    "340223": "南陵县",
		    "340224": "其它区",
		    "340300": "蚌埠市",
		    "340302": "龙子湖区",
		    "340303": "蚌山区",
		    "340304": "禹会区",
		    "340311": "淮上区",
		    "340321": "怀远县",
		    "340322": "五河县",
		    "340323": "固镇县",
		    "340324": "其它区",
		    "340400": "淮南市",
		    "340402": "大通区",
		    "340403": "田家庵区",
		    "340404": "谢家集区",
		    "340405": "八公山区",
		    "340406": "潘集区",
		    "340421": "凤台县",
		    "340422": "其它区",
		    "340500": "马鞍山市",
		    "340503": "花山区",
		    "340504": "雨山区",
		    "340506": "博望区",
		    "340521": "当涂县",
		    "340522": "其它区",
		    "340600": "淮北市",
		    "340602": "杜集区",
		    "340603": "相山区",
		    "340604": "烈山区",
		    "340621": "濉溪县",
		    "340622": "其它区",
		    "340700": "铜陵市",
		    "340702": "铜官山区",
		    "340703": "狮子山区",
		    "340711": "郊区",
		    "340721": "铜陵县",
		    "340722": "其它区",
		    "340800": "安庆市",
		    "340802": "迎江区",
		    "340803": "大观区",
		    "340811": "宜秀区",
		    "340822": "怀宁县",
		    "340823": "枞阳县",
		    "340824": "潜山县",
		    "340825": "太湖县",
		    "340826": "宿松县",
		    "340827": "望江县",
		    "340828": "岳西县",
		    "340881": "桐城市",
		    "340882": "其它区",
		    "341000": "黄山市",
		    "341002": "屯溪区",
		    "341003": "黄山区",
		    "341004": "徽州区",
		    "341021": "歙县",
		    "341022": "休宁县",
		    "341023": "黟县",
		    "341024": "祁门县",
		    "341025": "其它区",
		    "341100": "滁州市",
		    "341102": "琅琊区",
		    "341103": "南谯区",
		    "341122": "来安县",
		    "341124": "全椒县",
		    "341125": "定远县",
		    "341126": "凤阳县",
		    "341181": "天长市",
		    "341182": "明光市",
		    "341183": "其它区",
		    "341200": "阜阳市",
		    "341202": "颍州区",
		    "341203": "颍东区",
		    "341204": "颍泉区",
		    "341221": "临泉县",
		    "341222": "太和县",
		    "341225": "阜南县",
		    "341226": "颍上县",
		    "341282": "界首市",
		    "341283": "其它区",
		    "341300": "宿州市",
		    "341302": "埇桥区",
		    "341321": "砀山县",
		    "341322": "萧县",
		    "341323": "灵璧县",
		    "341324": "泗县",
		    "341325": "其它区",
		    "341400": "巢湖市",
		    "341421": "庐江县",
		    "341422": "无为县",
		    "341423": "含山县",
		    "341424": "和县",
		    "341500": "六安市",
		    "341502": "金安区",
		    "341503": "裕安区",
		    "341521": "寿县",
		    "341522": "霍邱县",
		    "341523": "舒城县",
		    "341524": "金寨县",
		    "341525": "霍山县",
		    "341526": "其它区",
		    "341600": "亳州市",
		    "341602": "谯城区",
		    "341621": "涡阳县",
		    "341622": "蒙城县",
		    "341623": "利辛县",
		    "341624": "其它区",
		    "341700": "池州市",
		    "341702": "贵池区",
		    "341721": "东至县",
		    "341722": "石台县",
		    "341723": "青阳县",
		    "341724": "其它区",
		    "341800": "宣城市",
		    "341802": "宣州区",
		    "341821": "郎溪县",
		    "341822": "广德县",
		    "341823": "泾县",
		    "341824": "绩溪县",
		    "341825": "旌德县",
		    "341881": "宁国市",
		    "341882": "其它区",
		    "350000": "福建省",
		    "350100": "福州市",
		    "350102": "鼓楼区",
		    "350103": "台江区",
		    "350104": "仓山区",
		    "350105": "马尾区",
		    "350111": "晋安区",
		    "350121": "闽侯县",
		    "350122": "连江县",
		    "350123": "罗源县",
		    "350124": "闽清县",
		    "350125": "永泰县",
		    "350128": "平潭县",
		    "350181": "福清市",
		    "350182": "长乐市",
		    "350183": "其它区",
		    "350200": "厦门市",
		    "350203": "思明区",
		    "350205": "海沧区",
		    "350206": "湖里区",
		    "350211": "集美区",
		    "350212": "同安区",
		    "350213": "翔安区",
		    "350214": "其它区",
		    "350300": "莆田市",
		    "350302": "城厢区",
		    "350303": "涵江区",
		    "350304": "荔城区",
		    "350305": "秀屿区",
		    "350322": "仙游县",
		    "350323": "其它区",
		    "350400": "三明市",
		    "350402": "梅列区",
		    "350403": "三元区",
		    "350421": "明溪县",
		    "350423": "清流县",
		    "350424": "宁化县",
		    "350425": "大田县",
		    "350426": "尤溪县",
		    "350427": "沙县",
		    "350428": "将乐县",
		    "350429": "泰宁县",
		    "350430": "建宁县",
		    "350481": "永安市",
		    "350482": "其它区",
		    "350500": "泉州市",
		    "350502": "鲤城区",
		    "350503": "丰泽区",
		    "350504": "洛江区",
		    "350505": "泉港区",
		    "350521": "惠安县",
		    "350524": "安溪县",
		    "350525": "永春县",
		    "350526": "德化县",
		    "350527": "金门县",
		    "350581": "石狮市",
		    "350582": "晋江市",
		    "350583": "南安市",
		    "350584": "其它区",
		    "350600": "漳州市",
		    "350602": "芗城区",
		    "350603": "龙文区",
		    "350622": "云霄县",
		    "350623": "漳浦县",
		    "350624": "诏安县",
		    "350625": "长泰县",
		    "350626": "东山县",
		    "350627": "南靖县",
		    "350628": "平和县",
		    "350629": "华安县",
		    "350681": "龙海市",
		    "350682": "其它区",
		    "350700": "南平市",
		    "350702": "延平区",
		    "350721": "顺昌县",
		    "350722": "浦城县",
		    "350723": "光泽县",
		    "350724": "松溪县",
		    "350725": "政和县",
		    "350781": "邵武市",
		    "350782": "武夷山市",
		    "350783": "建瓯市",
		    "350784": "建阳市",
		    "350785": "其它区",
		    "350800": "龙岩市",
		    "350802": "新罗区",
		    "350821": "长汀县",
		    "350822": "永定县",
		    "350823": "上杭县",
		    "350824": "武平县",
		    "350825": "连城县",
		    "350881": "漳平市",
		    "350882": "其它区",
		    "350900": "宁德市",
		    "350902": "蕉城区",
		    "350921": "霞浦县",
		    "350922": "古田县",
		    "350923": "屏南县",
		    "350924": "寿宁县",
		    "350925": "周宁县",
		    "350926": "柘荣县",
		    "350981": "福安市",
		    "350982": "福鼎市",
		    "350983": "其它区",
		    "360000": "江西省",
		    "360100": "南昌市",
		    "360102": "东湖区",
		    "360103": "西湖区",
		    "360104": "青云谱区",
		    "360105": "湾里区",
		    "360111": "青山湖区",
		    "360121": "南昌县",
		    "360122": "新建县",
		    "360123": "安义县",
		    "360124": "进贤县",
		    "360128": "其它区",
		    "360200": "景德镇市",
		    "360202": "昌江区",
		    "360203": "珠山区",
		    "360222": "浮梁县",
		    "360281": "乐平市",
		    "360282": "其它区",
		    "360300": "萍乡市",
		    "360302": "安源区",
		    "360313": "湘东区",
		    "360321": "莲花县",
		    "360322": "上栗县",
		    "360323": "芦溪县",
		    "360324": "其它区",
		    "360400": "九江市",
		    "360402": "庐山区",
		    "360403": "浔阳区",
		    "360421": "九江县",
		    "360423": "武宁县",
		    "360424": "修水县",
		    "360425": "永修县",
		    "360426": "德安县",
		    "360427": "星子县",
		    "360428": "都昌县",
		    "360429": "湖口县",
		    "360430": "彭泽县",
		    "360481": "瑞昌市",
		    "360482": "其它区",
		    "360483": "共青城市",
		    "360500": "新余市",
		    "360502": "渝水区",
		    "360521": "分宜县",
		    "360522": "其它区",
		    "360600": "鹰潭市",
		    "360602": "月湖区",
		    "360622": "余江县",
		    "360681": "贵溪市",
		    "360682": "其它区",
		    "360700": "赣州市",
		    "360702": "章贡区",
		    "360721": "赣县",
		    "360722": "信丰县",
		    "360723": "大余县",
		    "360724": "上犹县",
		    "360725": "崇义县",
		    "360726": "安远县",
		    "360727": "龙南县",
		    "360728": "定南县",
		    "360729": "全南县",
		    "360730": "宁都县",
		    "360731": "于都县",
		    "360732": "兴国县",
		    "360733": "会昌县",
		    "360734": "寻乌县",
		    "360735": "石城县",
		    "360781": "瑞金市",
		    "360782": "南康市",
		    "360783": "其它区",
		    "360800": "吉安市",
		    "360802": "吉州区",
		    "360803": "青原区",
		    "360821": "吉安县",
		    "360822": "吉水县",
		    "360823": "峡江县",
		    "360824": "新干县",
		    "360825": "永丰县",
		    "360826": "泰和县",
		    "360827": "遂川县",
		    "360828": "万安县",
		    "360829": "安福县",
		    "360830": "永新县",
		    "360881": "井冈山市",
		    "360882": "其它区",
		    "360900": "宜春市",
		    "360902": "袁州区",
		    "360921": "奉新县",
		    "360922": "万载县",
		    "360923": "上高县",
		    "360924": "宜丰县",
		    "360925": "靖安县",
		    "360926": "铜鼓县",
		    "360981": "丰城市",
		    "360982": "樟树市",
		    "360983": "高安市",
		    "360984": "其它区",
		    "361000": "抚州市",
		    "361002": "临川区",
		    "361021": "南城县",
		    "361022": "黎川县",
		    "361023": "南丰县",
		    "361024": "崇仁县",
		    "361025": "乐安县",
		    "361026": "宜黄县",
		    "361027": "金溪县",
		    "361028": "资溪县",
		    "361029": "东乡县",
		    "361030": "广昌县",
		    "361031": "其它区",
		    "361100": "上饶市",
		    "361102": "信州区",
		    "361121": "上饶县",
		    "361122": "广丰县",
		    "361123": "玉山县",
		    "361124": "铅山县",
		    "361125": "横峰县",
		    "361126": "弋阳县",
		    "361127": "余干县",
		    "361128": "鄱阳县",
		    "361129": "万年县",
		    "361130": "婺源县",
		    "361181": "德兴市",
		    "361182": "其它区",
		    "370000": "山东省",
		    "370100": "济南市",
		    "370102": "历下区",
		    "370103": "市中区",
		    "370104": "槐荫区",
		    "370105": "天桥区",
		    "370112": "历城区",
		    "370113": "长清区",
		    "370124": "平阴县",
		    "370125": "济阳县",
		    "370126": "商河县",
		    "370181": "章丘市",
		    "370182": "其它区",
		    "370200": "青岛市",
		    "370202": "市南区",
		    "370203": "市北区",
		    "370211": "黄岛区",
		    "370212": "崂山区",
		    "370213": "李沧区",
		    "370214": "城阳区",
		    "370281": "胶州市",
		    "370282": "即墨市",
		    "370283": "平度市",
		    "370285": "莱西市",
		    "370286": "其它区",
		    "370300": "淄博市",
		    "370302": "淄川区",
		    "370303": "张店区",
		    "370304": "博山区",
		    "370305": "临淄区",
		    "370306": "周村区",
		    "370321": "桓台县",
		    "370322": "高青县",
		    "370323": "沂源县",
		    "370324": "其它区",
		    "370400": "枣庄市",
		    "370402": "市中区",
		    "370403": "薛城区",
		    "370404": "峄城区",
		    "370405": "台儿庄区",
		    "370406": "山亭区",
		    "370481": "滕州市",
		    "370482": "其它区",
		    "370500": "东营市",
		    "370502": "东营区",
		    "370503": "河口区",
		    "370521": "垦利县",
		    "370522": "利津县",
		    "370523": "广饶县",
		    "370591": "其它区",
		    "370600": "烟台市",
		    "370602": "芝罘区",
		    "370611": "福山区",
		    "370612": "牟平区",
		    "370613": "莱山区",
		    "370634": "长岛县",
		    "370681": "龙口市",
		    "370682": "莱阳市",
		    "370683": "莱州市",
		    "370684": "蓬莱市",
		    "370685": "招远市",
		    "370686": "栖霞市",
		    "370687": "海阳市",
		    "370688": "其它区",
		    "370700": "潍坊市",
		    "370702": "潍城区",
		    "370703": "寒亭区",
		    "370704": "坊子区",
		    "370705": "奎文区",
		    "370724": "临朐县",
		    "370725": "昌乐县",
		    "370781": "青州市",
		    "370782": "诸城市",
		    "370783": "寿光市",
		    "370784": "安丘市",
		    "370785": "高密市",
		    "370786": "昌邑市",
		    "370787": "其它区",
		    "370800": "济宁市",
		    "370802": "市中区",
		    "370811": "任城区",
		    "370826": "微山县",
		    "370827": "鱼台县",
		    "370828": "金乡县",
		    "370829": "嘉祥县",
		    "370830": "汶上县",
		    "370831": "泗水县",
		    "370832": "梁山县",
		    "370881": "曲阜市",
		    "370882": "兖州市",
		    "370883": "邹城市",
		    "370884": "其它区",
		    "370900": "泰安市",
		    "370902": "泰山区",
		    "370903": "岱岳区",
		    "370921": "宁阳县",
		    "370923": "东平县",
		    "370982": "新泰市",
		    "370983": "肥城市",
		    "370984": "其它区",
		    "371000": "威海市",
		    "371002": "环翠区",
		    "371081": "文登市",
		    "371082": "荣成市",
		    "371083": "乳山市",
		    "371084": "其它区",
		    "371100": "日照市",
		    "371102": "东港区",
		    "371103": "岚山区",
		    "371121": "五莲县",
		    "371122": "莒县",
		    "371123": "其它区",
		    "371200": "莱芜市",
		    "371202": "莱城区",
		    "371203": "钢城区",
		    "371204": "其它区",
		    "371300": "临沂市",
		    "371302": "兰山区",
		    "371311": "罗庄区",
		    "371312": "河东区",
		    "371321": "沂南县",
		    "371322": "郯城县",
		    "371323": "沂水县",
		    "371324": "苍山县",
		    "371325": "费县",
		    "371326": "平邑县",
		    "371327": "莒南县",
		    "371328": "蒙阴县",
		    "371329": "临沭县",
		    "371330": "其它区",
		    "371400": "德州市",
		    "371402": "德城区",
		    "371421": "陵县",
		    "371422": "宁津县",
		    "371423": "庆云县",
		    "371424": "临邑县",
		    "371425": "齐河县",
		    "371426": "平原县",
		    "371427": "夏津县",
		    "371428": "武城县",
		    "371481": "乐陵市",
		    "371482": "禹城市",
		    "371483": "其它区",
		    "371500": "聊城市",
		    "371502": "东昌府区",
		    "371521": "阳谷县",
		    "371522": "莘县",
		    "371523": "茌平县",
		    "371524": "东阿县",
		    "371525": "冠县",
		    "371526": "高唐县",
		    "371581": "临清市",
		    "371582": "其它区",
		    "371600": "滨州市",
		    "371602": "滨城区",
		    "371621": "惠民县",
		    "371622": "阳信县",
		    "371623": "无棣县",
		    "371624": "沾化县",
		    "371625": "博兴县",
		    "371626": "邹平县",
		    "371627": "其它区",
		    "371700": "菏泽市",
		    "371702": "牡丹区",
		    "371721": "曹县",
		    "371722": "单县",
		    "371723": "成武县",
		    "371724": "巨野县",
		    "371725": "郓城县",
		    "371726": "鄄城县",
		    "371727": "定陶县",
		    "371728": "东明县",
		    "371729": "其它区",
		    "410000": "河南省",
		    "410100": "郑州市",
		    "410102": "中原区",
		    "410103": "二七区",
		    "410104": "管城回族区",
		    "410105": "金水区",
		    "410106": "上街区",
		    "410108": "惠济区",
		    "410122": "中牟县",
		    "410181": "巩义市",
		    "410182": "荥阳市",
		    "410183": "新密市",
		    "410184": "新郑市",
		    "410185": "登封市",
		    "410188": "其它区",
		    "410200": "开封市",
		    "410202": "龙亭区",
		    "410203": "顺河回族区",
		    "410204": "鼓楼区",
		    "410205": "禹王台区",
		    "410211": "金明区",
		    "410221": "杞县",
		    "410222": "通许县",
		    "410223": "尉氏县",
		    "410224": "开封县",
		    "410225": "兰考县",
		    "410226": "其它区",
		    "410300": "洛阳市",
		    "410302": "老城区",
		    "410303": "西工区",
		    "410304": "瀍河回族区",
		    "410305": "涧西区",
		    "410306": "吉利区",
		    "410307": "洛龙区",
		    "410322": "孟津县",
		    "410323": "新安县",
		    "410324": "栾川县",
		    "410325": "嵩县",
		    "410326": "汝阳县",
		    "410327": "宜阳县",
		    "410328": "洛宁县",
		    "410329": "伊川县",
		    "410381": "偃师市",
		    "410400": "平顶山市",
		    "410402": "新华区",
		    "410403": "卫东区",
		    "410404": "石龙区",
		    "410411": "湛河区",
		    "410421": "宝丰县",
		    "410422": "叶县",
		    "410423": "鲁山县",
		    "410425": "郏县",
		    "410481": "舞钢市",
		    "410482": "汝州市",
		    "410483": "其它区",
		    "410500": "安阳市",
		    "410502": "文峰区",
		    "410503": "北关区",
		    "410505": "殷都区",
		    "410506": "龙安区",
		    "410522": "安阳县",
		    "410523": "汤阴县",
		    "410526": "滑县",
		    "410527": "内黄县",
		    "410581": "林州市",
		    "410582": "其它区",
		    "410600": "鹤壁市",
		    "410602": "鹤山区",
		    "410603": "山城区",
		    "410611": "淇滨区",
		    "410621": "浚县",
		    "410622": "淇县",
		    "410623": "其它区",
		    "410700": "新乡市",
		    "410702": "红旗区",
		    "410703": "卫滨区",
		    "410704": "凤泉区",
		    "410711": "牧野区",
		    "410721": "新乡县",
		    "410724": "获嘉县",
		    "410725": "原阳县",
		    "410726": "延津县",
		    "410727": "封丘县",
		    "410728": "长垣县",
		    "410781": "卫辉市",
		    "410782": "辉县市",
		    "410783": "其它区",
		    "410800": "焦作市",
		    "410802": "解放区",
		    "410803": "中站区",
		    "410804": "马村区",
		    "410811": "山阳区",
		    "410821": "修武县",
		    "410822": "博爱县",
		    "410823": "武陟县",
		    "410825": "温县",
		    "410881": "济源市",
		    "410882": "沁阳市",
		    "410883": "孟州市",
		    "410884": "其它区",
		    "410900": "濮阳市",
		    "410902": "华龙区",
		    "410922": "清丰县",
		    "410923": "南乐县",
		    "410926": "范县",
		    "410927": "台前县",
		    "410928": "濮阳县",
		    "410929": "其它区",
		    "411000": "许昌市",
		    "411002": "魏都区",
		    "411023": "许昌县",
		    "411024": "鄢陵县",
		    "411025": "襄城县",
		    "411081": "禹州市",
		    "411082": "长葛市",
		    "411083": "其它区",
		    "411100": "漯河市",
		    "411102": "源汇区",
		    "411103": "郾城区",
		    "411104": "召陵区",
		    "411121": "舞阳县",
		    "411122": "临颍县",
		    "411123": "其它区",
		    "411200": "三门峡市",
		    "411202": "湖滨区",
		    "411221": "渑池县",
		    "411222": "陕县",
		    "411224": "卢氏县",
		    "411281": "义马市",
		    "411282": "灵宝市",
		    "411283": "其它区",
		    "411300": "南阳市",
		    "411302": "宛城区",
		    "411303": "卧龙区",
		    "411321": "南召县",
		    "411322": "方城县",
		    "411323": "西峡县",
		    "411324": "镇平县",
		    "411325": "内乡县",
		    "411326": "淅川县",
		    "411327": "社旗县",
		    "411328": "唐河县",
		    "411329": "新野县",
		    "411330": "桐柏县",
		    "411381": "邓州市",
		    "411382": "其它区",
		    "411400": "商丘市",
		    "411402": "梁园区",
		    "411403": "睢阳区",
		    "411421": "民权县",
		    "411422": "睢县",
		    "411423": "宁陵县",
		    "411424": "柘城县",
		    "411425": "虞城县",
		    "411426": "夏邑县",
		    "411481": "永城市",
		    "411482": "其它区",
		    "411500": "信阳市",
		    "411502": "浉河区",
		    "411503": "平桥区",
		    "411521": "罗山县",
		    "411522": "光山县",
		    "411523": "新县",
		    "411524": "商城县",
		    "411525": "固始县",
		    "411526": "潢川县",
		    "411527": "淮滨县",
		    "411528": "息县",
		    "411529": "其它区",
		    "411600": "周口市",
		    "411602": "川汇区",
		    "411621": "扶沟县",
		    "411622": "西华县",
		    "411623": "商水县",
		    "411624": "沈丘县",
		    "411625": "郸城县",
		    "411626": "淮阳县",
		    "411627": "太康县",
		    "411628": "鹿邑县",
		    "411681": "项城市",
		    "411682": "其它区",
		    "411700": "驻马店市",
		    "411702": "驿城区",
		    "411721": "西平县",
		    "411722": "上蔡县",
		    "411723": "平舆县",
		    "411724": "正阳县",
		    "411725": "确山县",
		    "411726": "泌阳县",
		    "411727": "汝南县",
		    "411728": "遂平县",
		    "411729": "新蔡县",
		    "411730": "其它区",
		    "420000": "湖北省",
		    "420100": "武汉市",
		    "420102": "江岸区",
		    "420103": "江汉区",
		    "420104": "硚口区",
		    "420105": "汉阳区",
		    "420106": "武昌区",
		    "420107": "青山区",
		    "420111": "洪山区",
		    "420112": "东西湖区",
		    "420113": "汉南区",
		    "420114": "蔡甸区",
		    "420115": "江夏区",
		    "420116": "黄陂区",
		    "420117": "新洲区",
		    "420118": "其它区",
		    "420200": "黄石市",
		    "420202": "黄石港区",
		    "420203": "西塞山区",
		    "420204": "下陆区",
		    "420205": "铁山区",
		    "420222": "阳新县",
		    "420281": "大冶市",
		    "420282": "其它区",
		    "420300": "十堰市",
		    "420302": "茅箭区",
		    "420303": "张湾区",
		    "420321": "郧县",
		    "420322": "郧西县",
		    "420323": "竹山县",
		    "420324": "竹溪县",
		    "420325": "房县",
		    "420381": "丹江口市",
		    "420383": "其它区",
		    "420500": "宜昌市",
		    "420502": "西陵区",
		    "420503": "伍家岗区",
		    "420504": "点军区",
		    "420505": "猇亭区",
		    "420506": "夷陵区",
		    "420525": "远安县",
		    "420526": "兴山县",
		    "420527": "秭归县",
		    "420528": "长阳土家族自治县",
		    "420529": "五峰土家族自治县",
		    "420581": "宜都市",
		    "420582": "当阳市",
		    "420583": "枝江市",
		    "420584": "其它区",
		    "420600": "襄阳市",
		    "420602": "襄城区",
		    "420606": "樊城区",
		    "420607": "襄州区",
		    "420624": "南漳县",
		    "420625": "谷城县",
		    "420626": "保康县",
		    "420682": "老河口市",
		    "420683": "枣阳市",
		    "420684": "宜城市",
		    "420685": "其它区",
		    "420700": "鄂州市",
		    "420702": "梁子湖区",
		    "420703": "华容区",
		    "420704": "鄂城区",
		    "420705": "其它区",
		    "420800": "荆门市",
		    "420802": "东宝区",
		    "420804": "掇刀区",
		    "420821": "京山县",
		    "420822": "沙洋县",
		    "420881": "钟祥市",
		    "420882": "其它区",
		    "420900": "孝感市",
		    "420902": "孝南区",
		    "420921": "孝昌县",
		    "420922": "大悟县",
		    "420923": "云梦县",
		    "420981": "应城市",
		    "420982": "安陆市",
		    "420984": "汉川市",
		    "420985": "其它区",
		    "421000": "荆州市",
		    "421002": "沙市区",
		    "421003": "荆州区",
		    "421022": "公安县",
		    "421023": "监利县",
		    "421024": "江陵县",
		    "421081": "石首市",
		    "421083": "洪湖市",
		    "421087": "松滋市",
		    "421088": "其它区",
		    "421100": "黄冈市",
		    "421102": "黄州区",
		    "421121": "团风县",
		    "421122": "红安县",
		    "421123": "罗田县",
		    "421124": "英山县",
		    "421125": "浠水县",
		    "421126": "蕲春县",
		    "421127": "黄梅县",
		    "421181": "麻城市",
		    "421182": "武穴市",
		    "421183": "其它区",
		    "421200": "咸宁市",
		    "421202": "咸安区",
		    "421221": "嘉鱼县",
		    "421222": "通城县",
		    "421223": "崇阳县",
		    "421224": "通山县",
		    "421281": "赤壁市",
		    "421283": "其它区",
		    "421300": "随州市",
		    "421302": "曾都区",
		    "421321": "随县",
		    "421381": "广水市",
		    "421382": "其它区",
		    "422800": "恩施土家族苗族自治州",
		    "422801": "恩施市",
		    "422802": "利川市",
		    "422822": "建始县",
		    "422823": "巴东县",
		    "422825": "宣恩县",
		    "422826": "咸丰县",
		    "422827": "来凤县",
		    "422828": "鹤峰县",
		    "422829": "其它区",
		    "429004": "仙桃市",
		    "429005": "潜江市",
		    "429006": "天门市",
		    "429021": "神农架林区",
		    "430000": "湖南省",
		    "430100": "长沙市",
		    "430102": "芙蓉区",
		    "430103": "天心区",
		    "430104": "岳麓区",
		    "430105": "开福区",
		    "430111": "雨花区",
		    "430121": "长沙县",
		    "430122": "望城区",
		    "430124": "宁乡县",
		    "430181": "浏阳市",
		    "430182": "其它区",
		    "430200": "株洲市",
		    "430202": "荷塘区",
		    "430203": "芦淞区",
		    "430204": "石峰区",
		    "430211": "天元区",
		    "430221": "株洲县",
		    "430223": "攸县",
		    "430224": "茶陵县",
		    "430225": "炎陵县",
		    "430281": "醴陵市",
		    "430282": "其它区",
		    "430300": "湘潭市",
		    "430302": "雨湖区",
		    "430304": "岳塘区",
		    "430321": "湘潭县",
		    "430381": "湘乡市",
		    "430382": "韶山市",
		    "430383": "其它区",
		    "430400": "衡阳市",
		    "430405": "珠晖区",
		    "430406": "雁峰区",
		    "430407": "石鼓区",
		    "430408": "蒸湘区",
		    "430412": "南岳区",
		    "430421": "衡阳县",
		    "430422": "衡南县",
		    "430423": "衡山县",
		    "430424": "衡东县",
		    "430426": "祁东县",
		    "430481": "耒阳市",
		    "430482": "常宁市",
		    "430483": "其它区",
		    "430500": "邵阳市",
		    "430502": "双清区",
		    "430503": "大祥区",
		    "430511": "北塔区",
		    "430521": "邵东县",
		    "430522": "新邵县",
		    "430523": "邵阳县",
		    "430524": "隆回县",
		    "430525": "洞口县",
		    "430527": "绥宁县",
		    "430528": "新宁县",
		    "430529": "城步苗族自治县",
		    "430581": "武冈市",
		    "430582": "其它区",
		    "430600": "岳阳市",
		    "430602": "岳阳楼区",
		    "430603": "云溪区",
		    "430611": "君山区",
		    "430621": "岳阳县",
		    "430623": "华容县",
		    "430624": "湘阴县",
		    "430626": "平江县",
		    "430681": "汨罗市",
		    "430682": "临湘市",
		    "430683": "其它区",
		    "430700": "常德市",
		    "430702": "武陵区",
		    "430703": "鼎城区",
		    "430721": "安乡县",
		    "430722": "汉寿县",
		    "430723": "澧县",
		    "430724": "临澧县",
		    "430725": "桃源县",
		    "430726": "石门县",
		    "430781": "津市市",
		    "430782": "其它区",
		    "430800": "张家界市",
		    "430802": "永定区",
		    "430811": "武陵源区",
		    "430821": "慈利县",
		    "430822": "桑植县",
		    "430823": "其它区",
		    "430900": "益阳市",
		    "430902": "资阳区",
		    "430903": "赫山区",
		    "430921": "南县",
		    "430922": "桃江县",
		    "430923": "安化县",
		    "430981": "沅江市",
		    "430982": "其它区",
		    "431000": "郴州市",
		    "431002": "北湖区",
		    "431003": "苏仙区",
		    "431021": "桂阳县",
		    "431022": "宜章县",
		    "431023": "永兴县",
		    "431024": "嘉禾县",
		    "431025": "临武县",
		    "431026": "汝城县",
		    "431027": "桂东县",
		    "431028": "安仁县",
		    "431081": "资兴市",
		    "431082": "其它区",
		    "431100": "永州市",
		    "431102": "零陵区",
		    "431103": "冷水滩区",
		    "431121": "祁阳县",
		    "431122": "东安县",
		    "431123": "双牌县",
		    "431124": "道县",
		    "431125": "江永县",
		    "431126": "宁远县",
		    "431127": "蓝山县",
		    "431128": "新田县",
		    "431129": "江华瑶族自治县",
		    "431130": "其它区",
		    "431200": "怀化市",
		    "431202": "鹤城区",
		    "431221": "中方县",
		    "431222": "沅陵县",
		    "431223": "辰溪县",
		    "431224": "溆浦县",
		    "431225": "会同县",
		    "431226": "麻阳苗族自治县",
		    "431227": "新晃侗族自治县",
		    "431228": "芷江侗族自治县",
		    "431229": "靖州苗族侗族自治县",
		    "431230": "通道侗族自治县",
		    "431281": "洪江市",
		    "431282": "其它区",
		    "431300": "娄底市",
		    "431302": "娄星区",
		    "431321": "双峰县",
		    "431322": "新化县",
		    "431381": "冷水江市",
		    "431382": "涟源市",
		    "431383": "其它区",
		    "433100": "湘西土家族苗族自治州",
		    "433101": "吉首市",
		    "433122": "泸溪县",
		    "433123": "凤凰县",
		    "433124": "花垣县",
		    "433125": "保靖县",
		    "433126": "古丈县",
		    "433127": "永顺县",
		    "433130": "龙山县",
		    "433131": "其它区",
		    "440000": "广东省",
		    "440100": "广州市",
		    "440103": "荔湾区",
		    "440104": "越秀区",
		    "440105": "海珠区",
		    "440106": "天河区",
		    "440111": "白云区",
		    "440112": "黄埔区",
		    "440113": "番禺区",
		    "440114": "花都区",
		    "440115": "南沙区",
		    "440116": "萝岗区",
		    "440183": "增城市",
		    "440184": "从化市",
		    "440189": "其它区",
		    "440200": "韶关市",
		    "440203": "武江区",
		    "440204": "浈江区",
		    "440205": "曲江区",
		    "440222": "始兴县",
		    "440224": "仁化县",
		    "440229": "翁源县",
		    "440232": "乳源瑶族自治县",
		    "440233": "新丰县",
		    "440281": "乐昌市",
		    "440282": "南雄市",
		    "440283": "其它区",
		    "440300": "深圳市",
		    "440303": "罗湖区",
		    "440304": "福田区",
		    "440305": "南山区",
		    "440306": "宝安区",
		    "440307": "龙岗区",
		    "440308": "盐田区",
		    "440309": "其它区",
		    "440320": "光明新区",
		    "440321": "坪山新区",
		    "440322": "大鹏新区",
		    "440323": "龙华新区",
		    "440400": "珠海市",
		    "440402": "香洲区",
		    "440403": "斗门区",
		    "440404": "金湾区",
		    "440488": "其它区",
		    "440500": "汕头市",
		    "440507": "龙湖区",
		    "440511": "金平区",
		    "440512": "濠江区",
		    "440513": "潮阳区",
		    "440514": "潮南区",
		    "440515": "澄海区",
		    "440523": "南澳县",
		    "440524": "其它区",
		    "440600": "佛山市",
		    "440604": "禅城区",
		    "440605": "南海区",
		    "440606": "顺德区",
		    "440607": "三水区",
		    "440608": "高明区",
		    "440609": "其它区",
		    "440700": "江门市",
		    "440703": "蓬江区",
		    "440704": "江海区",
		    "440705": "新会区",
		    "440781": "台山市",
		    "440783": "开平市",
		    "440784": "鹤山市",
		    "440785": "恩平市",
		    "440786": "其它区",
		    "440800": "湛江市",
		    "440802": "赤坎区",
		    "440803": "霞山区",
		    "440804": "坡头区",
		    "440811": "麻章区",
		    "440823": "遂溪县",
		    "440825": "徐闻县",
		    "440881": "廉江市",
		    "440882": "雷州市",
		    "440883": "吴川市",
		    "440884": "其它区",
		    "440900": "茂名市",
		    "440902": "茂南区",
		    "440903": "茂港区",
		    "440923": "电白县",
		    "440981": "高州市",
		    "440982": "化州市",
		    "440983": "信宜市",
		    "440984": "其它区",
		    "441200": "肇庆市",
		    "441202": "端州区",
		    "441203": "鼎湖区",
		    "441223": "广宁县",
		    "441224": "怀集县",
		    "441225": "封开县",
		    "441226": "德庆县",
		    "441283": "高要市",
		    "441284": "四会市",
		    "441285": "其它区",
		    "441300": "惠州市",
		    "441302": "惠城区",
		    "441303": "惠阳区",
		    "441322": "博罗县",
		    "441323": "惠东县",
		    "441324": "龙门县",
		    "441325": "其它区",
		    "441400": "梅州市",
		    "441402": "梅江区",
		    "441421": "梅县",
		    "441422": "大埔县",
		    "441423": "丰顺县",
		    "441424": "五华县",
		    "441426": "平远县",
		    "441427": "蕉岭县",
		    "441481": "兴宁市",
		    "441482": "其它区",
		    "441500": "汕尾市",
		    "441502": "城区",
		    "441521": "海丰县",
		    "441523": "陆河县",
		    "441581": "陆丰市",
		    "441582": "其它区",
		    "441600": "河源市",
		    "441602": "源城区",
		    "441621": "紫金县",
		    "441622": "龙川县",
		    "441623": "连平县",
		    "441624": "和平县",
		    "441625": "东源县",
		    "441626": "其它区",
		    "441700": "阳江市",
		    "441702": "江城区",
		    "441721": "阳西县",
		    "441723": "阳东县",
		    "441781": "阳春市",
		    "441782": "其它区",
		    "441800": "清远市",
		    "441802": "清城区",
		    "441821": "佛冈县",
		    "441823": "阳山县",
		    "441825": "连山壮族瑶族自治县",
		    "441826": "连南瑶族自治县",
		    "441827": "清新区",
		    "441881": "英德市",
		    "441882": "连州市",
		    "441883": "其它区",
		    "441900": "东莞市",
		    "442000": "中山市",
		    "442101": "东沙群岛",
		    "445100": "潮州市",
		    "445102": "湘桥区",
		    "445121": "潮安区",
		    "445122": "饶平县",
		    "445186": "其它区",
		    "445200": "揭阳市",
		    "445202": "榕城区",
		    "445221": "揭东区",
		    "445222": "揭西县",
		    "445224": "惠来县",
		    "445281": "普宁市",
		    "445285": "其它区",
		    "445300": "云浮市",
		    "445302": "云城区",
		    "445321": "新兴县",
		    "445322": "郁南县",
		    "445323": "云安县",
		    "445381": "罗定市",
		    "445382": "其它区",
		    "450000": "广西壮族自治区",
		    "450100": "南宁市",
		    "450102": "兴宁区",
		    "450103": "青秀区",
		    "450105": "江南区",
		    "450107": "西乡塘区",
		    "450108": "良庆区",
		    "450109": "邕宁区",
		    "450122": "武鸣县",
		    "450123": "隆安县",
		    "450124": "马山县",
		    "450125": "上林县",
		    "450126": "宾阳县",
		    "450127": "横县",
		    "450128": "其它区",
		    "450200": "柳州市",
		    "450202": "城中区",
		    "450203": "鱼峰区",
		    "450204": "柳南区",
		    "450205": "柳北区",
		    "450221": "柳江县",
		    "450222": "柳城县",
		    "450223": "鹿寨县",
		    "450224": "融安县",
		    "450225": "融水苗族自治县",
		    "450226": "三江侗族自治县",
		    "450227": "其它区",
		    "450300": "桂林市",
		    "450302": "秀峰区",
		    "450303": "叠彩区",
		    "450304": "象山区",
		    "450305": "七星区",
		    "450311": "雁山区",
		    "450321": "阳朔县",
		    "450322": "临桂区",
		    "450323": "灵川县",
		    "450324": "全州县",
		    "450325": "兴安县",
		    "450326": "永福县",
		    "450327": "灌阳县",
		    "450328": "龙胜各族自治县",
		    "450329": "资源县",
		    "450330": "平乐县",
		    "450331": "荔浦县",
		    "450332": "恭城瑶族自治县",
		    "450333": "其它区",
		    "450400": "梧州市",
		    "450403": "万秀区",
		    "450405": "长洲区",
		    "450406": "龙圩区",
		    "450421": "苍梧县",
		    "450422": "藤县",
		    "450423": "蒙山县",
		    "450481": "岑溪市",
		    "450482": "其它区",
		    "450500": "北海市",
		    "450502": "海城区",
		    "450503": "银海区",
		    "450512": "铁山港区",
		    "450521": "合浦县",
		    "450522": "其它区",
		    "450600": "防城港市",
		    "450602": "港口区",
		    "450603": "防城区",
		    "450621": "上思县",
		    "450681": "东兴市",
		    "450682": "其它区",
		    "450700": "钦州市",
		    "450702": "钦南区",
		    "450703": "钦北区",
		    "450721": "灵山县",
		    "450722": "浦北县",
		    "450723": "其它区",
		    "450800": "贵港市",
		    "450802": "港北区",
		    "450803": "港南区",
		    "450804": "覃塘区",
		    "450821": "平南县",
		    "450881": "桂平市",
		    "450882": "其它区",
		    "450900": "玉林市",
		    "450902": "玉州区",
		    "450903": "福绵区",
		    "450921": "容县",
		    "450922": "陆川县",
		    "450923": "博白县",
		    "450924": "兴业县",
		    "450981": "北流市",
		    "450982": "其它区",
		    "451000": "百色市",
		    "451002": "右江区",
		    "451021": "田阳县",
		    "451022": "田东县",
		    "451023": "平果县",
		    "451024": "德保县",
		    "451025": "靖西县",
		    "451026": "那坡县",
		    "451027": "凌云县",
		    "451028": "乐业县",
		    "451029": "田林县",
		    "451030": "西林县",
		    "451031": "隆林各族自治县",
		    "451032": "其它区",
		    "451100": "贺州市",
		    "451102": "八步区",
		    "451119": "平桂管理区",
		    "451121": "昭平县",
		    "451122": "钟山县",
		    "451123": "富川瑶族自治县",
		    "451124": "其它区",
		    "451200": "河池市",
		    "451202": "金城江区",
		    "451221": "南丹县",
		    "451222": "天峨县",
		    "451223": "凤山县",
		    "451224": "东兰县",
		    "451225": "罗城仫佬族自治县",
		    "451226": "环江毛南族自治县",
		    "451227": "巴马瑶族自治县",
		    "451228": "都安瑶族自治县",
		    "451229": "大化瑶族自治县",
		    "451281": "宜州市",
		    "451282": "其它区",
		    "451300": "来宾市",
		    "451302": "兴宾区",
		    "451321": "忻城县",
		    "451322": "象州县",
		    "451323": "武宣县",
		    "451324": "金秀瑶族自治县",
		    "451381": "合山市",
		    "451382": "其它区",
		    "451400": "崇左市",
		    "451402": "江州区",
		    "451421": "扶绥县",
		    "451422": "宁明县",
		    "451423": "龙州县",
		    "451424": "大新县",
		    "451425": "天等县",
		    "451481": "凭祥市",
		    "451482": "其它区",
		    "460000": "海南省",
		    "460100": "海口市",
		    "460105": "秀英区",
		    "460106": "龙华区",
		    "460107": "琼山区",
		    "460108": "美兰区",
		    "460109": "其它区",
		    "460200": "三亚市",
		    "460300": "三沙市",
		    "460321": "西沙群岛",
		    "460322": "南沙群岛",
		    "460323": "中沙群岛的岛礁及其海域",
		    "469001": "五指山市",
		    "469002": "琼海市",
		    "469003": "儋州市",
		    "469005": "文昌市",
		    "469006": "万宁市",
		    "469007": "东方市",
		    "469025": "定安县",
		    "469026": "屯昌县",
		    "469027": "澄迈县",
		    "469028": "临高县",
		    "469030": "白沙黎族自治县",
		    "469031": "昌江黎族自治县",
		    "469033": "乐东黎族自治县",
		    "469034": "陵水黎族自治县",
		    "469035": "保亭黎族苗族自治县",
		    "469036": "琼中黎族苗族自治县",
		    "471005": "其它区",
		    "500000": "重庆",
		    "500100": "重庆市",
		    "500101": "万州区",
		    "500102": "涪陵区",
		    "500103": "渝中区",
		    "500104": "大渡口区",
		    "500105": "江北区",
		    "500106": "沙坪坝区",
		    "500107": "九龙坡区",
		    "500108": "南岸区",
		    "500109": "北碚区",
		    "500110": "万盛区",
		    "500111": "双桥区",
		    "500112": "渝北区",
		    "500113": "巴南区",
		    "500114": "黔江区",
		    "500115": "长寿区",
		    "500222": "綦江区",
		    "500223": "潼南县",
		    "500224": "铜梁县",
		    "500225": "大足区",
		    "500226": "荣昌县",
		    "500227": "璧山县",
		    "500228": "梁平县",
		    "500229": "城口县",
		    "500230": "丰都县",
		    "500231": "垫江县",
		    "500232": "武隆县",
		    "500233": "忠县",
		    "500234": "开县",
		    "500235": "云阳县",
		    "500236": "奉节县",
		    "500237": "巫山县",
		    "500238": "巫溪县",
		    "500240": "石柱土家族自治县",
		    "500241": "秀山土家族苗族自治县",
		    "500242": "酉阳土家族苗族自治县",
		    "500243": "彭水苗族土家族自治县",
		    "500381": "江津区",
		    "500382": "合川区",
		    "500383": "永川区",
		    "500384": "南川区",
		    "500385": "其它区",
		    "510000": "四川省",
		    "510100": "成都市",
		    "510104": "锦江区",
		    "510105": "青羊区",
		    "510106": "金牛区",
		    "510107": "武侯区",
		    "510108": "成华区",
		    "510112": "龙泉驿区",
		    "510113": "青白江区",
		    "510114": "新都区",
		    "510115": "温江区",
		    "510121": "金堂县",
		    "510122": "双流县",
		    "510124": "郫县",
		    "510129": "大邑县",
		    "510131": "蒲江县",
		    "510132": "新津县",
		    "510181": "都江堰市",
		    "510182": "彭州市",
		    "510183": "邛崃市",
		    "510184": "崇州市",
		    "510185": "其它区",
		    "510300": "自贡市",
		    "510302": "自流井区",
		    "510303": "贡井区",
		    "510304": "大安区",
		    "510311": "沿滩区",
		    "510321": "荣县",
		    "510322": "富顺县",
		    "510323": "其它区",
		    "510400": "攀枝花市",
		    "510402": "东区",
		    "510403": "西区",
		    "510411": "仁和区",
		    "510421": "米易县",
		    "510422": "盐边县",
		    "510423": "其它区",
		    "510500": "泸州市",
		    "510502": "江阳区",
		    "510503": "纳溪区",
		    "510504": "龙马潭区",
		    "510521": "泸县",
		    "510522": "合江县",
		    "510524": "叙永县",
		    "510525": "古蔺县",
		    "510526": "其它区",
		    "510600": "德阳市",
		    "510603": "旌阳区",
		    "510623": "中江县",
		    "510626": "罗江县",
		    "510681": "广汉市",
		    "510682": "什邡市",
		    "510683": "绵竹市",
		    "510684": "其它区",
		    "510700": "绵阳市",
		    "510703": "涪城区",
		    "510704": "游仙区",
		    "510722": "三台县",
		    "510723": "盐亭县",
		    "510724": "安县",
		    "510725": "梓潼县",
		    "510726": "北川羌族自治县",
		    "510727": "平武县",
		    "510781": "江油市",
		    "510782": "其它区",
		    "510800": "广元市",
		    "510802": "利州区",
		    "510811": "昭化区",
		    "510812": "朝天区",
		    "510821": "旺苍县",
		    "510822": "青川县",
		    "510823": "剑阁县",
		    "510824": "苍溪县",
		    "510825": "其它区",
		    "510900": "遂宁市",
		    "510903": "船山区",
		    "510904": "安居区",
		    "510921": "蓬溪县",
		    "510922": "射洪县",
		    "510923": "大英县",
		    "510924": "其它区",
		    "511000": "内江市",
		    "511002": "市中区",
		    "511011": "东兴区",
		    "511024": "威远县",
		    "511025": "资中县",
		    "511028": "隆昌县",
		    "511029": "其它区",
		    "511100": "乐山市",
		    "511102": "市中区",
		    "511111": "沙湾区",
		    "511112": "五通桥区",
		    "511113": "金口河区",
		    "511123": "犍为县",
		    "511124": "井研县",
		    "511126": "夹江县",
		    "511129": "沐川县",
		    "511132": "峨边彝族自治县",
		    "511133": "马边彝族自治县",
		    "511181": "峨眉山市",
		    "511182": "其它区",
		    "511300": "南充市",
		    "511302": "顺庆区",
		    "511303": "高坪区",
		    "511304": "嘉陵区",
		    "511321": "南部县",
		    "511322": "营山县",
		    "511323": "蓬安县",
		    "511324": "仪陇县",
		    "511325": "西充县",
		    "511381": "阆中市",
		    "511382": "其它区",
		    "511400": "眉山市",
		    "511402": "东坡区",
		    "511421": "仁寿县",
		    "511422": "彭山县",
		    "511423": "洪雅县",
		    "511424": "丹棱县",
		    "511425": "青神县",
		    "511426": "其它区",
		    "511500": "宜宾市",
		    "511502": "翠屏区",
		    "511521": "宜宾县",
		    "511522": "南溪区",
		    "511523": "江安县",
		    "511524": "长宁县",
		    "511525": "高县",
		    "511526": "珙县",
		    "511527": "筠连县",
		    "511528": "兴文县",
		    "511529": "屏山县",
		    "511530": "其它区",
		    "511600": "广安市",
		    "511602": "广安区",
		    "511603": "前锋区",
		    "511621": "岳池县",
		    "511622": "武胜县",
		    "511623": "邻水县",
		    "511681": "华蓥市",
		    "511683": "其它区",
		    "511700": "达州市",
		    "511702": "通川区",
		    "511721": "达川区",
		    "511722": "宣汉县",
		    "511723": "开江县",
		    "511724": "大竹县",
		    "511725": "渠县",
		    "511781": "万源市",
		    "511782": "其它区",
		    "511800": "雅安市",
		    "511802": "雨城区",
		    "511821": "名山区",
		    "511822": "荥经县",
		    "511823": "汉源县",
		    "511824": "石棉县",
		    "511825": "天全县",
		    "511826": "芦山县",
		    "511827": "宝兴县",
		    "511828": "其它区",
		    "511900": "巴中市",
		    "511902": "巴州区",
		    "511903": "恩阳区",
		    "511921": "通江县",
		    "511922": "南江县",
		    "511923": "平昌县",
		    "511924": "其它区",
		    "512000": "资阳市",
		    "512002": "雁江区",
		    "512021": "安岳县",
		    "512022": "乐至县",
		    "512081": "简阳市",
		    "512082": "其它区",
		    "513200": "阿坝藏族羌族自治州",
		    "513221": "汶川县",
		    "513222": "理县",
		    "513223": "茂县",
		    "513224": "松潘县",
		    "513225": "九寨沟县",
		    "513226": "金川县",
		    "513227": "小金县",
		    "513228": "黑水县",
		    "513229": "马尔康县",
		    "513230": "壤塘县",
		    "513231": "阿坝县",
		    "513232": "若尔盖县",
		    "513233": "红原县",
		    "513234": "其它区",
		    "513300": "甘孜藏族自治州",
		    "513321": "康定县",
		    "513322": "泸定县",
		    "513323": "丹巴县",
		    "513324": "九龙县",
		    "513325": "雅江县",
		    "513326": "道孚县",
		    "513327": "炉霍县",
		    "513328": "甘孜县",
		    "513329": "新龙县",
		    "513330": "德格县",
		    "513331": "白玉县",
		    "513332": "石渠县",
		    "513333": "色达县",
		    "513334": "理塘县",
		    "513335": "巴塘县",
		    "513336": "乡城县",
		    "513337": "稻城县",
		    "513338": "得荣县",
		    "513339": "其它区",
		    "513400": "凉山彝族自治州",
		    "513401": "西昌市",
		    "513422": "木里藏族自治县",
		    "513423": "盐源县",
		    "513424": "德昌县",
		    "513425": "会理县",
		    "513426": "会东县",
		    "513427": "宁南县",
		    "513428": "普格县",
		    "513429": "布拖县",
		    "513430": "金阳县",
		    "513431": "昭觉县",
		    "513432": "喜德县",
		    "513433": "冕宁县",
		    "513434": "越西县",
		    "513435": "甘洛县",
		    "513436": "美姑县",
		    "513437": "雷波县",
		    "513438": "其它区",
		    "520000": "贵州省",
		    "520100": "贵阳市",
		    "520102": "南明区",
		    "520103": "云岩区",
		    "520111": "花溪区",
		    "520112": "乌当区",
		    "520113": "白云区",
		    "520121": "开阳县",
		    "520122": "息烽县",
		    "520123": "修文县",
		    "520151": "观山湖区",
		    "520181": "清镇市",
		    "520182": "其它区",
		    "520200": "六盘水市",
		    "520201": "钟山区",
		    "520203": "六枝特区",
		    "520221": "水城县",
		    "520222": "盘县",
		    "520223": "其它区",
		    "520300": "遵义市",
		    "520302": "红花岗区",
		    "520303": "汇川区",
		    "520321": "遵义县",
		    "520322": "桐梓县",
		    "520323": "绥阳县",
		    "520324": "正安县",
		    "520325": "道真仡佬族苗族自治县",
		    "520326": "务川仡佬族苗族自治县",
		    "520327": "凤冈县",
		    "520328": "湄潭县",
		    "520329": "余庆县",
		    "520330": "习水县",
		    "520381": "赤水市",
		    "520382": "仁怀市",
		    "520383": "其它区",
		    "520400": "安顺市",
		    "520402": "西秀区",
		    "520421": "平坝县",
		    "520422": "普定县",
		    "520423": "镇宁布依族苗族自治县",
		    "520424": "关岭布依族苗族自治县",
		    "520425": "紫云苗族布依族自治县",
		    "520426": "其它区",
		    "522200": "铜仁市",
		    "522201": "碧江区",
		    "522222": "江口县",
		    "522223": "玉屏侗族自治县",
		    "522224": "石阡县",
		    "522225": "思南县",
		    "522226": "印江土家族苗族自治县",
		    "522227": "德江县",
		    "522228": "沿河土家族自治县",
		    "522229": "松桃苗族自治县",
		    "522230": "万山区",
		    "522231": "其它区",
		    "522300": "黔西南布依族苗族自治州",
		    "522301": "兴义市",
		    "522322": "兴仁县",
		    "522323": "普安县",
		    "522324": "晴隆县",
		    "522325": "贞丰县",
		    "522326": "望谟县",
		    "522327": "册亨县",
		    "522328": "安龙县",
		    "522329": "其它区",
		    "522400": "毕节市",
		    "522401": "七星关区",
		    "522422": "大方县",
		    "522423": "黔西县",
		    "522424": "金沙县",
		    "522425": "织金县",
		    "522426": "纳雍县",
		    "522427": "威宁彝族回族苗族自治县",
		    "522428": "赫章县",
		    "522429": "其它区",
		    "522600": "黔东南苗族侗族自治州",
		    "522601": "凯里市",
		    "522622": "黄平县",
		    "522623": "施秉县",
		    "522624": "三穗县",
		    "522625": "镇远县",
		    "522626": "岑巩县",
		    "522627": "天柱县",
		    "522628": "锦屏县",
		    "522629": "剑河县",
		    "522630": "台江县",
		    "522631": "黎平县",
		    "522632": "榕江县",
		    "522633": "从江县",
		    "522634": "雷山县",
		    "522635": "麻江县",
		    "522636": "丹寨县",
		    "522637": "其它区",
		    "522700": "黔南布依族苗族自治州",
		    "522701": "都匀市",
		    "522702": "福泉市",
		    "522722": "荔波县",
		    "522723": "贵定县",
		    "522725": "瓮安县",
		    "522726": "独山县",
		    "522727": "平塘县",
		    "522728": "罗甸县",
		    "522729": "长顺县",
		    "522730": "龙里县",
		    "522731": "惠水县",
		    "522732": "三都水族自治县",
		    "522733": "其它区",
		    "530000": "云南省",
		    "530100": "昆明市",
		    "530102": "五华区",
		    "530103": "盘龙区",
		    "530111": "官渡区",
		    "530112": "西山区",
		    "530113": "东川区",
		    "530121": "呈贡区",
		    "530122": "晋宁县",
		    "530124": "富民县",
		    "530125": "宜良县",
		    "530126": "石林彝族自治县",
		    "530127": "嵩明县",
		    "530128": "禄劝彝族苗族自治县",
		    "530129": "寻甸回族彝族自治县",
		    "530181": "安宁市",
		    "530182": "其它区",
		    "530300": "曲靖市",
		    "530302": "麒麟区",
		    "530321": "马龙县",
		    "530322": "陆良县",
		    "530323": "师宗县",
		    "530324": "罗平县",
		    "530325": "富源县",
		    "530326": "会泽县",
		    "530328": "沾益县",
		    "530381": "宣威市",
		    "530382": "其它区",
		    "530400": "玉溪市",
		    "530402": "红塔区",
		    "530421": "江川县",
		    "530422": "澄江县",
		    "530423": "通海县",
		    "530424": "华宁县",
		    "530425": "易门县",
		    "530426": "峨山彝族自治县",
		    "530427": "新平彝族傣族自治县",
		    "530428": "元江哈尼族彝族傣族自治县",
		    "530429": "其它区",
		    "530500": "保山市",
		    "530502": "隆阳区",
		    "530521": "施甸县",
		    "530522": "腾冲县",
		    "530523": "龙陵县",
		    "530524": "昌宁县",
		    "530525": "其它区",
		    "530600": "昭通市",
		    "530602": "昭阳区",
		    "530621": "鲁甸县",
		    "530622": "巧家县",
		    "530623": "盐津县",
		    "530624": "大关县",
		    "530625": "永善县",
		    "530626": "绥江县",
		    "530627": "镇雄县",
		    "530628": "彝良县",
		    "530629": "威信县",
		    "530630": "水富县",
		    "530631": "其它区",
		    "530700": "丽江市",
		    "530702": "古城区",
		    "530721": "玉龙纳西族自治县",
		    "530722": "永胜县",
		    "530723": "华坪县",
		    "530724": "宁蒗彝族自治县",
		    "530725": "其它区",
		    "530800": "普洱市",
		    "530802": "思茅区",
		    "530821": "宁洱哈尼族彝族自治县",
		    "530822": "墨江哈尼族自治县",
		    "530823": "景东彝族自治县",
		    "530824": "景谷傣族彝族自治县",
		    "530825": "镇沅彝族哈尼族拉祜族自治县",
		    "530826": "江城哈尼族彝族自治县",
		    "530827": "孟连傣族拉祜族佤族自治县",
		    "530828": "澜沧拉祜族自治县",
		    "530829": "西盟佤族自治县",
		    "530830": "其它区",
		    "530900": "临沧市",
		    "530902": "临翔区",
		    "530921": "凤庆县",
		    "530922": "云县",
		    "530923": "永德县",
		    "530924": "镇康县",
		    "530925": "双江拉祜族佤族布朗族傣族自治县",
		    "530926": "耿马傣族佤族自治县",
		    "530927": "沧源佤族自治县",
		    "530928": "其它区",
		    "532300": "楚雄彝族自治州",
		    "532301": "楚雄市",
		    "532322": "双柏县",
		    "532323": "牟定县",
		    "532324": "南华县",
		    "532325": "姚安县",
		    "532326": "大姚县",
		    "532327": "永仁县",
		    "532328": "元谋县",
		    "532329": "武定县",
		    "532331": "禄丰县",
		    "532332": "其它区",
		    "532500": "红河哈尼族彝族自治州",
		    "532501": "个旧市",
		    "532502": "开远市",
		    "532522": "蒙自市",
		    "532523": "屏边苗族自治县",
		    "532524": "建水县",
		    "532525": "石屏县",
		    "532526": "弥勒市",
		    "532527": "泸西县",
		    "532528": "元阳县",
		    "532529": "红河县",
		    "532530": "金平苗族瑶族傣族自治县",
		    "532531": "绿春县",
		    "532532": "河口瑶族自治县",
		    "532533": "其它区",
		    "532600": "文山壮族苗族自治州",
		    "532621": "文山市",
		    "532622": "砚山县",
		    "532623": "西畴县",
		    "532624": "麻栗坡县",
		    "532625": "马关县",
		    "532626": "丘北县",
		    "532627": "广南县",
		    "532628": "富宁县",
		    "532629": "其它区",
		    "532800": "西双版纳傣族自治州",
		    "532801": "景洪市",
		    "532822": "勐海县",
		    "532823": "勐腊县",
		    "532824": "其它区",
		    "532900": "大理白族自治州",
		    "532901": "大理市",
		    "532922": "漾濞彝族自治县",
		    "532923": "祥云县",
		    "532924": "宾川县",
		    "532925": "弥渡县",
		    "532926": "南涧彝族自治县",
		    "532927": "巍山彝族回族自治县",
		    "532928": "永平县",
		    "532929": "云龙县",
		    "532930": "洱源县",
		    "532931": "剑川县",
		    "532932": "鹤庆县",
		    "532933": "其它区",
		    "533100": "德宏傣族景颇族自治州",
		    "533102": "瑞丽市",
		    "533103": "芒市",
		    "533122": "梁河县",
		    "533123": "盈江县",
		    "533124": "陇川县",
		    "533125": "其它区",
		    "533300": "怒江傈僳族自治州",
		    "533321": "泸水县",
		    "533323": "福贡县",
		    "533324": "贡山独龙族怒族自治县",
		    "533325": "兰坪白族普米族自治县",
		    "533326": "其它区",
		    "533400": "迪庆藏族自治州",
		    "533421": "香格里拉县",
		    "533422": "德钦县",
		    "533423": "维西傈僳族自治县",
		    "533424": "其它区",
		    "540000": "西藏自治区",
		    "540100": "拉萨市",
		    "540102": "城关区",
		    "540121": "林周县",
		    "540122": "当雄县",
		    "540123": "尼木县",
		    "540124": "曲水县",
		    "540125": "堆龙德庆县",
		    "540126": "达孜县",
		    "540127": "墨竹工卡县",
		    "540128": "其它区",
		    "542100": "昌都地区",
		    "542121": "昌都县",
		    "542122": "江达县",
		    "542123": "贡觉县",
		    "542124": "类乌齐县",
		    "542125": "丁青县",
		    "542126": "察雅县",
		    "542127": "八宿县",
		    "542128": "左贡县",
		    "542129": "芒康县",
		    "542132": "洛隆县",
		    "542133": "边坝县",
		    "542134": "其它区",
		    "542200": "山南地区",
		    "542221": "乃东县",
		    "542222": "扎囊县",
		    "542223": "贡嘎县",
		    "542224": "桑日县",
		    "542225": "琼结县",
		    "542226": "曲松县",
		    "542227": "措美县",
		    "542228": "洛扎县",
		    "542229": "加查县",
		    "542231": "隆子县",
		    "542232": "错那县",
		    "542233": "浪卡子县",
		    "542234": "其它区",
		    "542300": "日喀则地区",
		    "542301": "日喀则市",
		    "542322": "南木林县",
		    "542323": "江孜县",
		    "542324": "定日县",
		    "542325": "萨迦县",
		    "542326": "拉孜县",
		    "542327": "昂仁县",
		    "542328": "谢通门县",
		    "542329": "白朗县",
		    "542330": "仁布县",
		    "542331": "康马县",
		    "542332": "定结县",
		    "542333": "仲巴县",
		    "542334": "亚东县",
		    "542335": "吉隆县",
		    "542336": "聂拉木县",
		    "542337": "萨嘎县",
		    "542338": "岗巴县",
		    "542339": "其它区",
		    "542400": "那曲地区",
		    "542421": "那曲县",
		    "542422": "嘉黎县",
		    "542423": "比如县",
		    "542424": "聂荣县",
		    "542425": "安多县",
		    "542426": "申扎县",
		    "542427": "索县",
		    "542428": "班戈县",
		    "542429": "巴青县",
		    "542430": "尼玛县",
		    "542431": "其它区",
		    "542432": "双湖县",
		    "542500": "阿里地区",
		    "542521": "普兰县",
		    "542522": "札达县",
		    "542523": "噶尔县",
		    "542524": "日土县",
		    "542525": "革吉县",
		    "542526": "改则县",
		    "542527": "措勤县",
		    "542528": "其它区",
		    "542600": "林芝地区",
		    "542621": "林芝县",
		    "542622": "工布江达县",
		    "542623": "米林县",
		    "542624": "墨脱县",
		    "542625": "波密县",
		    "542626": "察隅县",
		    "542627": "朗县",
		    "542628": "其它区",
		    "610000": "陕西省",
		    "610100": "西安市",
		    "610102": "新城区",
		    "610103": "碑林区",
		    "610104": "莲湖区",
		    "610111": "灞桥区",
		    "610112": "未央区",
		    "610113": "雁塔区",
		    "610114": "阎良区",
		    "610115": "临潼区",
		    "610116": "长安区",
		    "610122": "蓝田县",
		    "610124": "周至县",
		    "610125": "户县",
		    "610126": "高陵县",
		    "610127": "其它区",
		    "610200": "铜川市",
		    "610202": "王益区",
		    "610203": "印台区",
		    "610204": "耀州区",
		    "610222": "宜君县",
		    "610223": "其它区",
		    "610300": "宝鸡市",
		    "610302": "渭滨区",
		    "610303": "金台区",
		    "610304": "陈仓区",
		    "610322": "凤翔县",
		    "610323": "岐山县",
		    "610324": "扶风县",
		    "610326": "眉县",
		    "610327": "陇县",
		    "610328": "千阳县",
		    "610329": "麟游县",
		    "610330": "凤县",
		    "610331": "太白县",
		    "610332": "其它区",
		    "610400": "咸阳市",
		    "610402": "秦都区",
		    "610403": "杨陵区",
		    "610404": "渭城区",
		    "610422": "三原县",
		    "610423": "泾阳县",
		    "610424": "乾县",
		    "610425": "礼泉县",
		    "610426": "永寿县",
		    "610427": "彬县",
		    "610428": "长武县",
		    "610429": "旬邑县",
		    "610430": "淳化县",
		    "610431": "武功县",
		    "610481": "兴平市",
		    "610482": "其它区",
		    "610500": "渭南市",
		    "610502": "临渭区",
		    "610521": "华县",
		    "610522": "潼关县",
		    "610523": "大荔县",
		    "610524": "合阳县",
		    "610525": "澄城县",
		    "610526": "蒲城县",
		    "610527": "白水县",
		    "610528": "富平县",
		    "610581": "韩城市",
		    "610582": "华阴市",
		    "610583": "其它区",
		    "610600": "延安市",
		    "610602": "宝塔区",
		    "610621": "延长县",
		    "610622": "延川县",
		    "610623": "子长县",
		    "610624": "安塞县",
		    "610625": "志丹县",
		    "610626": "吴起县",
		    "610627": "甘泉县",
		    "610628": "富县",
		    "610629": "洛川县",
		    "610630": "宜川县",
		    "610631": "黄龙县",
		    "610632": "黄陵县",
		    "610633": "其它区",
		    "610700": "汉中市",
		    "610702": "汉台区",
		    "610721": "南郑县",
		    "610722": "城固县",
		    "610723": "洋县",
		    "610724": "西乡县",
		    "610725": "勉县",
		    "610726": "宁强县",
		    "610727": "略阳县",
		    "610728": "镇巴县",
		    "610729": "留坝县",
		    "610730": "佛坪县",
		    "610731": "其它区",
		    "610800": "榆林市",
		    "610802": "榆阳区",
		    "610821": "神木县",
		    "610822": "府谷县",
		    "610823": "横山县",
		    "610824": "靖边县",
		    "610825": "定边县",
		    "610826": "绥德县",
		    "610827": "米脂县",
		    "610828": "佳县",
		    "610829": "吴堡县",
		    "610830": "清涧县",
		    "610831": "子洲县",
		    "610832": "其它区",
		    "610900": "安康市",
		    "610902": "汉滨区",
		    "610921": "汉阴县",
		    "610922": "石泉县",
		    "610923": "宁陕县",
		    "610924": "紫阳县",
		    "610925": "岚皋县",
		    "610926": "平利县",
		    "610927": "镇坪县",
		    "610928": "旬阳县",
		    "610929": "白河县",
		    "610930": "其它区",
		    "611000": "商洛市",
		    "611002": "商州区",
		    "611021": "洛南县",
		    "611022": "丹凤县",
		    "611023": "商南县",
		    "611024": "山阳县",
		    "611025": "镇安县",
		    "611026": "柞水县",
		    "611027": "其它区",
		    "620000": "甘肃省",
		    "620100": "兰州市",
		    "620102": "城关区",
		    "620103": "七里河区",
		    "620104": "西固区",
		    "620105": "安宁区",
		    "620111": "红古区",
		    "620121": "永登县",
		    "620122": "皋兰县",
		    "620123": "榆中县",
		    "620124": "其它区",
		    "620200": "嘉峪关市",
		    "620300": "金昌市",
		    "620302": "金川区",
		    "620321": "永昌县",
		    "620322": "其它区",
		    "620400": "白银市",
		    "620402": "白银区",
		    "620403": "平川区",
		    "620421": "靖远县",
		    "620422": "会宁县",
		    "620423": "景泰县",
		    "620424": "其它区",
		    "620500": "天水市",
		    "620502": "秦州区",
		    "620503": "麦积区",
		    "620521": "清水县",
		    "620522": "秦安县",
		    "620523": "甘谷县",
		    "620524": "武山县",
		    "620525": "张家川回族自治县",
		    "620526": "其它区",
		    "620600": "武威市",
		    "620602": "凉州区",
		    "620621": "民勤县",
		    "620622": "古浪县",
		    "620623": "天祝藏族自治县",
		    "620624": "其它区",
		    "620700": "张掖市",
		    "620702": "甘州区",
		    "620721": "肃南裕固族自治县",
		    "620722": "民乐县",
		    "620723": "临泽县",
		    "620724": "高台县",
		    "620725": "山丹县",
		    "620726": "其它区",
		    "620800": "平凉市",
		    "620802": "崆峒区",
		    "620821": "泾川县",
		    "620822": "灵台县",
		    "620823": "崇信县",
		    "620824": "华亭县",
		    "620825": "庄浪县",
		    "620826": "静宁县",
		    "620827": "其它区",
		    "620900": "酒泉市",
		    "620902": "肃州区",
		    "620921": "金塔县",
		    "620922": "瓜州县",
		    "620923": "肃北蒙古族自治县",
		    "620924": "阿克塞哈萨克族自治县",
		    "620981": "玉门市",
		    "620982": "敦煌市",
		    "620983": "其它区",
		    "621000": "庆阳市",
		    "621002": "西峰区",
		    "621021": "庆城县",
		    "621022": "环县",
		    "621023": "华池县",
		    "621024": "合水县",
		    "621025": "正宁县",
		    "621026": "宁县",
		    "621027": "镇原县",
		    "621028": "其它区",
		    "621100": "定西市",
		    "621102": "安定区",
		    "621121": "通渭县",
		    "621122": "陇西县",
		    "621123": "渭源县",
		    "621124": "临洮县",
		    "621125": "漳县",
		    "621126": "岷县",
		    "621127": "其它区",
		    "621200": "陇南市",
		    "621202": "武都区",
		    "621221": "成县",
		    "621222": "文县",
		    "621223": "宕昌县",
		    "621224": "康县",
		    "621225": "西和县",
		    "621226": "礼县",
		    "621227": "徽县",
		    "621228": "两当县",
		    "621229": "其它区",
		    "622900": "临夏回族自治州",
		    "622901": "临夏市",
		    "622921": "临夏县",
		    "622922": "康乐县",
		    "622923": "永靖县",
		    "622924": "广河县",
		    "622925": "和政县",
		    "622926": "东乡族自治县",
		    "622927": "积石山保安族东乡族撒拉族自治县",
		    "622928": "其它区",
		    "623000": "甘南藏族自治州",
		    "623001": "合作市",
		    "623021": "临潭县",
		    "623022": "卓尼县",
		    "623023": "舟曲县",
		    "623024": "迭部县",
		    "623025": "玛曲县",
		    "623026": "碌曲县",
		    "623027": "夏河县",
		    "623028": "其它区",
		    "630000": "青海省",
		    "630100": "西宁市",
		    "630102": "城东区",
		    "630103": "城中区",
		    "630104": "城西区",
		    "630105": "城北区",
		    "630121": "大通回族土族自治县",
		    "630122": "湟中县",
		    "630123": "湟源县",
		    "630124": "其它区",
		    "632100": "海东市",
		    "632121": "平安县",
		    "632122": "民和回族土族自治县",
		    "632123": "乐都区",
		    "632126": "互助土族自治县",
		    "632127": "化隆回族自治县",
		    "632128": "循化撒拉族自治县",
		    "632129": "其它区",
		    "632200": "海北藏族自治州",
		    "632221": "门源回族自治县",
		    "632222": "祁连县",
		    "632223": "海晏县",
		    "632224": "刚察县",
		    "632225": "其它区",
		    "632300": "黄南藏族自治州",
		    "632321": "同仁县",
		    "632322": "尖扎县",
		    "632323": "泽库县",
		    "632324": "河南蒙古族自治县",
		    "632325": "其它区",
		    "632500": "海南藏族自治州",
		    "632521": "共和县",
		    "632522": "同德县",
		    "632523": "贵德县",
		    "632524": "兴海县",
		    "632525": "贵南县",
		    "632526": "其它区",
		    "632600": "果洛藏族自治州",
		    "632621": "玛沁县",
		    "632622": "班玛县",
		    "632623": "甘德县",
		    "632624": "达日县",
		    "632625": "久治县",
		    "632626": "玛多县",
		    "632627": "其它区",
		    "632700": "玉树藏族自治州",
		    "632721": "玉树市",
		    "632722": "杂多县",
		    "632723": "称多县",
		    "632724": "治多县",
		    "632725": "囊谦县",
		    "632726": "曲麻莱县",
		    "632727": "其它区",
		    "632800": "海西蒙古族藏族自治州",
		    "632801": "格尔木市",
		    "632802": "德令哈市",
		    "632821": "乌兰县",
		    "632822": "都兰县",
		    "632823": "天峻县",
		    "632824": "其它区",
		    "640000": "宁夏回族自治区",
		    "640100": "银川市",
		    "640104": "兴庆区",
		    "640105": "西夏区",
		    "640106": "金凤区",
		    "640121": "永宁县",
		    "640122": "贺兰县",
		    "640181": "灵武市",
		    "640182": "其它区",
		    "640200": "石嘴山市",
		    "640202": "大武口区",
		    "640205": "惠农区",
		    "640221": "平罗县",
		    "640222": "其它区",
		    "640300": "吴忠市",
		    "640302": "利通区",
		    "640303": "红寺堡区",
		    "640323": "盐池县",
		    "640324": "同心县",
		    "640381": "青铜峡市",
		    "640382": "其它区",
		    "640400": "固原市",
		    "640402": "原州区",
		    "640422": "西吉县",
		    "640423": "隆德县",
		    "640424": "泾源县",
		    "640425": "彭阳县",
		    "640426": "其它区",
		    "640500": "中卫市",
		    "640502": "沙坡头区",
		    "640521": "中宁县",
		    "640522": "海原县",
		    "640523": "其它区",
		    "650000": "新疆维吾尔自治区",
		    "650100": "乌鲁木齐市",
		    "650102": "天山区",
		    "650103": "沙依巴克区",
		    "650104": "新市区",
		    "650105": "水磨沟区",
		    "650106": "头屯河区",
		    "650107": "达坂城区",
		    "650109": "米东区",
		    "650121": "乌鲁木齐县",
		    "650122": "其它区",
		    "650200": "克拉玛依市",
		    "650202": "独山子区",
		    "650203": "克拉玛依区",
		    "650204": "白碱滩区",
		    "650205": "乌尔禾区",
		    "650206": "其它区",
		    "652100": "吐鲁番地区",
		    "652101": "吐鲁番市",
		    "652122": "鄯善县",
		    "652123": "托克逊县",
		    "652124": "其它区",
		    "652200": "哈密地区",
		    "652201": "哈密市",
		    "652222": "巴里坤哈萨克自治县",
		    "652223": "伊吾县",
		    "652224": "其它区",
		    "652300": "昌吉回族自治州",
		    "652301": "昌吉市",
		    "652302": "阜康市",
		    "652323": "呼图壁县",
		    "652324": "玛纳斯县",
		    "652325": "奇台县",
		    "652327": "吉木萨尔县",
		    "652328": "木垒哈萨克自治县",
		    "652329": "其它区",
		    "652700": "博尔塔拉蒙古自治州",
		    "652701": "博乐市",
		    "652702": "阿拉山口市",
		    "652722": "精河县",
		    "652723": "温泉县",
		    "652724": "其它区",
		    "652800": "巴音郭楞蒙古自治州",
		    "652801": "库尔勒市",
		    "652822": "轮台县",
		    "652823": "尉犁县",
		    "652824": "若羌县",
		    "652825": "且末县",
		    "652826": "焉耆回族自治县",
		    "652827": "和静县",
		    "652828": "和硕县",
		    "652829": "博湖县",
		    "652830": "其它区",
		    "652900": "阿克苏地区",
		    "652901": "阿克苏市",
		    "652922": "温宿县",
		    "652923": "库车县",
		    "652924": "沙雅县",
		    "652925": "新和县",
		    "652926": "拜城县",
		    "652927": "乌什县",
		    "652928": "阿瓦提县",
		    "652929": "柯坪县",
		    "652930": "其它区",
		    "653000": "克孜勒苏柯尔克孜自治州",
		    "653001": "阿图什市",
		    "653022": "阿克陶县",
		    "653023": "阿合奇县",
		    "653024": "乌恰县",
		    "653025": "其它区",
		    "653100": "喀什地区",
		    "653101": "喀什市",
		    "653121": "疏附县",
		    "653122": "疏勒县",
		    "653123": "英吉沙县",
		    "653124": "泽普县",
		    "653125": "莎车县",
		    "653126": "叶城县",
		    "653127": "麦盖提县",
		    "653128": "岳普湖县",
		    "653129": "伽师县",
		    "653130": "巴楚县",
		    "653131": "塔什库尔干塔吉克自治县",
		    "653132": "其它区",
		    "653200": "和田地区",
		    "653201": "和田市",
		    "653221": "和田县",
		    "653222": "墨玉县",
		    "653223": "皮山县",
		    "653224": "洛浦县",
		    "653225": "策勒县",
		    "653226": "于田县",
		    "653227": "民丰县",
		    "653228": "其它区",
		    "654000": "伊犁哈萨克自治州",
		    "654002": "伊宁市",
		    "654003": "奎屯市",
		    "654021": "伊宁县",
		    "654022": "察布查尔锡伯自治县",
		    "654023": "霍城县",
		    "654024": "巩留县",
		    "654025": "新源县",
		    "654026": "昭苏县",
		    "654027": "特克斯县",
		    "654028": "尼勒克县",
		    "654029": "其它区",
		    "654200": "塔城地区",
		    "654201": "塔城市",
		    "654202": "乌苏市",
		    "654221": "额敏县",
		    "654223": "沙湾县",
		    "654224": "托里县",
		    "654225": "裕民县",
		    "654226": "和布克赛尔蒙古自治县",
		    "654227": "其它区",
		    "654300": "阿勒泰地区",
		    "654301": "阿勒泰市",
		    "654321": "布尔津县",
		    "654322": "富蕴县",
		    "654323": "福海县",
		    "654324": "哈巴河县",
		    "654325": "青河县",
		    "654326": "吉木乃县",
		    "654327": "其它区",
		    "659001": "石河子市",
		    "659002": "阿拉尔市",
		    "659003": "图木舒克市",
		    "659004": "五家渠市",
		    "710000": "台湾",
		    "710100": "台北市",
		    "710101": "中正区",
		    "710102": "大同区",
		    "710103": "中山区",
		    "710104": "松山区",
		    "710105": "大安区",
		    "710106": "万华区",
		    "710107": "信义区",
		    "710108": "士林区",
		    "710109": "北投区",
		    "710110": "内湖区",
		    "710111": "南港区",
		    "710112": "文山区",
		    "710113": "其它区",
		    "710200": "高雄市",
		    "710201": "新兴区",
		    "710202": "前金区",
		    "710203": "芩雅区",
		    "710204": "盐埕区",
		    "710205": "鼓山区",
		    "710206": "旗津区",
		    "710207": "前镇区",
		    "710208": "三民区",
		    "710209": "左营区",
		    "710210": "楠梓区",
		    "710211": "小港区",
		    "710212": "其它区",
		    "710241": "苓雅区",
		    "710242": "仁武区",
		    "710243": "大社区",
		    "710244": "冈山区",
		    "710245": "路竹区",
		    "710246": "阿莲区",
		    "710247": "田寮区",
		    "710248": "燕巢区",
		    "710249": "桥头区",
		    "710250": "梓官区",
		    "710251": "弥陀区",
		    "710252": "永安区",
		    "710253": "湖内区",
		    "710254": "凤山区",
		    "710255": "大寮区",
		    "710256": "林园区",
		    "710257": "鸟松区",
		    "710258": "大树区",
		    "710259": "旗山区",
		    "710260": "美浓区",
		    "710261": "六龟区",
		    "710262": "内门区",
		    "710263": "杉林区",
		    "710264": "甲仙区",
		    "710265": "桃源区",
		    "710266": "那玛夏区",
		    "710267": "茂林区",
		    "710268": "茄萣区",
		    "710300": "台南市",
		    "710301": "中西区",
		    "710302": "东区",
		    "710303": "南区",
		    "710304": "北区",
		    "710305": "安平区",
		    "710306": "安南区",
		    "710307": "其它区",
		    "710339": "永康区",
		    "710340": "归仁区",
		    "710341": "新化区",
		    "710342": "左镇区",
		    "710343": "玉井区",
		    "710344": "楠西区",
		    "710345": "南化区",
		    "710346": "仁德区",
		    "710347": "关庙区",
		    "710348": "龙崎区",
		    "710349": "官田区",
		    "710350": "麻豆区",
		    "710351": "佳里区",
		    "710352": "西港区",
		    "710353": "七股区",
		    "710354": "将军区",
		    "710355": "学甲区",
		    "710356": "北门区",
		    "710357": "新营区",
		    "710358": "后壁区",
		    "710359": "白河区",
		    "710360": "东山区",
		    "710361": "六甲区",
		    "710362": "下营区",
		    "710363": "柳营区",
		    "710364": "盐水区",
		    "710365": "善化区",
		    "710366": "大内区",
		    "710367": "山上区",
		    "710368": "新市区",
		    "710369": "安定区",
		    "710400": "台中市",
		    "710401": "中区",
		    "710402": "东区",
		    "710403": "南区",
		    "710404": "西区",
		    "710405": "北区",
		    "710406": "北屯区",
		    "710407": "西屯区",
		    "710408": "南屯区",
		    "710409": "其它区",
		    "710431": "太平区",
		    "710432": "大里区",
		    "710433": "雾峰区",
		    "710434": "乌日区",
		    "710435": "丰原区",
		    "710436": "后里区",
		    "710437": "石冈区",
		    "710438": "东势区",
		    "710439": "和平区",
		    "710440": "新社区",
		    "710441": "潭子区",
		    "710442": "大雅区",
		    "710443": "神冈区",
		    "710444": "大肚区",
		    "710445": "沙鹿区",
		    "710446": "龙井区",
		    "710447": "梧栖区",
		    "710448": "清水区",
		    "710449": "大甲区",
		    "710450": "外埔区",
		    "710451": "大安区",
		    "710500": "金门县",
		    "710507": "金沙镇",
		    "710508": "金湖镇",
		    "710509": "金宁乡",
		    "710510": "金城镇",
		    "710511": "烈屿乡",
		    "710512": "乌坵乡",
		    "710600": "南投县",
		    "710614": "南投市",
		    "710615": "中寮乡",
		    "710616": "草屯镇",
		    "710617": "国姓乡",
		    "710618": "埔里镇",
		    "710619": "仁爱乡",
		    "710620": "名间乡",
		    "710621": "集集镇",
		    "710622": "水里乡",
		    "710623": "鱼池乡",
		    "710624": "信义乡",
		    "710625": "竹山镇",
		    "710626": "鹿谷乡",
		    "710700": "基隆市",
		    "710701": "仁爱区",
		    "710702": "信义区",
		    "710703": "中正区",
		    "710704": "中山区",
		    "710705": "安乐区",
		    "710706": "暖暖区",
		    "710707": "七堵区",
		    "710708": "其它区",
		    "710800": "新竹市",
		    "710801": "东区",
		    "710802": "北区",
		    "710803": "香山区",
		    "710804": "其它区",
		    "710900": "嘉义市",
		    "710901": "东区",
		    "710902": "西区",
		    "710903": "其它区",
		    "711100": "新北市",
		    "711130": "万里区",
		    "711131": "金山区",
		    "711132": "板桥区",
		    "711133": "汐止区",
		    "711134": "深坑区",
		    "711135": "石碇区",
		    "711136": "瑞芳区",
		    "711137": "平溪区",
		    "711138": "双溪区",
		    "711139": "贡寮区",
		    "711140": "新店区",
		    "711141": "坪林区",
		    "711142": "乌来区",
		    "711143": "永和区",
		    "711144": "中和区",
		    "711145": "土城区",
		    "711146": "三峡区",
		    "711147": "树林区",
		    "711148": "莺歌区",
		    "711149": "三重区",
		    "711150": "新庄区",
		    "711151": "泰山区",
		    "711152": "林口区",
		    "711153": "芦洲区",
		    "711154": "五股区",
		    "711155": "八里区",
		    "711156": "淡水区",
		    "711157": "三芝区",
		    "711158": "石门区",
		    "711200": "宜兰县",
		    "711214": "宜兰市",
		    "711215": "头城镇",
		    "711216": "礁溪乡",
		    "711217": "壮围乡",
		    "711218": "员山乡",
		    "711219": "罗东镇",
		    "711220": "三星乡",
		    "711221": "大同乡",
		    "711222": "五结乡",
		    "711223": "冬山乡",
		    "711224": "苏澳镇",
		    "711225": "南澳乡",
		    "711226": "钓鱼台",
		    "711300": "新竹县",
		    "711314": "竹北市",
		    "711315": "湖口乡",
		    "711316": "新丰乡",
		    "711317": "新埔镇",
		    "711318": "关西镇",
		    "711319": "芎林乡",
		    "711320": "宝山乡",
		    "711321": "竹东镇",
		    "711322": "五峰乡",
		    "711323": "横山乡",
		    "711324": "尖石乡",
		    "711325": "北埔乡",
		    "711326": "峨眉乡",
		    "711400": "桃园县",
		    "711414": "中坜市",
		    "711415": "平镇市",
		    "711416": "龙潭乡",
		    "711417": "杨梅市",
		    "711418": "新屋乡",
		    "711419": "观音乡",
		    "711420": "桃园市",
		    "711421": "龟山乡",
		    "711422": "八德市",
		    "711423": "大溪镇",
		    "711424": "复兴乡",
		    "711425": "大园乡",
		    "711426": "芦竹乡",
		    "711500": "苗栗县",
		    "711519": "竹南镇",
		    "711520": "头份镇",
		    "711521": "三湾乡",
		    "711522": "南庄乡",
		    "711523": "狮潭乡",
		    "711524": "后龙镇",
		    "711525": "通霄镇",
		    "711526": "苑里镇",
		    "711527": "苗栗市",
		    "711528": "造桥乡",
		    "711529": "头屋乡",
		    "711530": "公馆乡",
		    "711531": "大湖乡",
		    "711532": "泰安乡",
		    "711533": "铜锣乡",
		    "711534": "三义乡",
		    "711535": "西湖乡",
		    "711536": "卓兰镇",
		    "711700": "彰化县",
		    "711727": "彰化市",
		    "711728": "芬园乡",
		    "711729": "花坛乡",
		    "711730": "秀水乡",
		    "711731": "鹿港镇",
		    "711732": "福兴乡",
		    "711733": "线西乡",
		    "711734": "和美镇",
		    "711735": "伸港乡",
		    "711736": "员林镇",
		    "711737": "社头乡",
		    "711738": "永靖乡",
		    "711739": "埔心乡",
		    "711740": "溪湖镇",
		    "711741": "大村乡",
		    "711742": "埔盐乡",
		    "711743": "田中镇",
		    "711744": "北斗镇",
		    "711745": "田尾乡",
		    "711746": "埤头乡",
		    "711747": "溪州乡",
		    "711748": "竹塘乡",
		    "711749": "二林镇",
		    "711750": "大城乡",
		    "711751": "芳苑乡",
		    "711752": "二水乡",
		    "711900": "嘉义县",
		    "711919": "番路乡",
		    "711920": "梅山乡",
		    "711921": "竹崎乡",
		    "711922": "阿里山乡",
		    "711923": "中埔乡",
		    "711924": "大埔乡",
		    "711925": "水上乡",
		    "711926": "鹿草乡",
		    "711927": "太保市",
		    "711928": "朴子市",
		    "711929": "东石乡",
		    "711930": "六脚乡",
		    "711931": "新港乡",
		    "711932": "民雄乡",
		    "711933": "大林镇",
		    "711934": "溪口乡",
		    "711935": "义竹乡",
		    "711936": "布袋镇",
		    "712100": "云林县",
		    "712121": "斗南镇",
		    "712122": "大埤乡",
		    "712123": "虎尾镇",
		    "712124": "土库镇",
		    "712125": "褒忠乡",
		    "712126": "东势乡",
		    "712127": "台西乡",
		    "712128": "仑背乡",
		    "712129": "麦寮乡",
		    "712130": "斗六市",
		    "712131": "林内乡",
		    "712132": "古坑乡",
		    "712133": "莿桐乡",
		    "712134": "西螺镇",
		    "712135": "二仑乡",
		    "712136": "北港镇",
		    "712137": "水林乡",
		    "712138": "口湖乡",
		    "712139": "四湖乡",
		    "712140": "元长乡",
		    "712400": "屏东县",
		    "712434": "屏东市",
		    "712435": "三地门乡",
		    "712436": "雾台乡",
		    "712437": "玛家乡",
		    "712438": "九如乡",
		    "712439": "里港乡",
		    "712440": "高树乡",
		    "712441": "盐埔乡",
		    "712442": "长治乡",
		    "712443": "麟洛乡",
		    "712444": "竹田乡",
		    "712445": "内埔乡",
		    "712446": "万丹乡",
		    "712447": "潮州镇",
		    "712448": "泰武乡",
		    "712449": "来义乡",
		    "712450": "万峦乡",
		    "712451": "崁顶乡",
		    "712452": "新埤乡",
		    "712453": "南州乡",
		    "712454": "林边乡",
		    "712455": "东港镇",
		    "712456": "琉球乡",
		    "712457": "佳冬乡",
		    "712458": "新园乡",
		    "712459": "枋寮乡",
		    "712460": "枋山乡",
		    "712461": "春日乡",
		    "712462": "狮子乡",
		    "712463": "车城乡",
		    "712464": "牡丹乡",
		    "712465": "恒春镇",
		    "712466": "满州乡",
		    "712500": "台东县",
		    "712517": "台东市",
		    "712518": "绿岛乡",
		    "712519": "兰屿乡",
		    "712520": "延平乡",
		    "712521": "卑南乡",
		    "712522": "鹿野乡",
		    "712523": "关山镇",
		    "712524": "海端乡",
		    "712525": "池上乡",
		    "712526": "东河乡",
		    "712527": "成功镇",
		    "712528": "长滨乡",
		    "712529": "金峰乡",
		    "712530": "大武乡",
		    "712531": "达仁乡",
		    "712532": "太麻里乡",
		    "712600": "花莲县",
		    "712615": "花莲市",
		    "712616": "新城乡",
		    "712617": "太鲁阁",
		    "712618": "秀林乡",
		    "712619": "吉安乡",
		    "712620": "寿丰乡",
		    "712621": "凤林镇",
		    "712622": "光复乡",
		    "712623": "丰滨乡",
		    "712624": "瑞穗乡",
		    "712625": "万荣乡",
		    "712626": "玉里镇",
		    "712627": "卓溪乡",
		    "712628": "富里乡",
		    "712700": "澎湖县",
		    "712707": "马公市",
		    "712708": "西屿乡",
		    "712709": "望安乡",
		    "712710": "七美乡",
		    "712711": "白沙乡",
		    "712712": "湖西乡",
		    "712800": "连江县",
		    "712805": "南竿乡",
		    "712806": "北竿乡",
		    "712807": "莒光乡",
		    "712808": "东引乡",
		    "810000": "香港特别行政区",
		    "810100": "香港岛",
		    "810101": "中西区",
		    "810102": "湾仔",
		    "810103": "东区",
		    "810104": "南区",
		    "810200": "九龙",
		    "810201": "九龙城区",
		    "810202": "油尖旺区",
		    "810203": "深水埗区",
		    "810204": "黄大仙区",
		    "810205": "观塘区",
		    "810300": "新界",
		    "810301": "北区",
		    "810302": "大埔区",
		    "810303": "沙田区",
		    "810304": "西贡区",
		    "810305": "元朗区",
		    "810306": "屯门区",
		    "810307": "荃湾区",
		    "810308": "葵青区",
		    "810309": "离岛区",
		    "820000": "澳门特别行政区",
		    "820100": "澳门半岛",
		    "820200": "离岛",
		    "990000": "海外",
		    "990100": "海外"
		}
	
		// id pid/parentId name children
		function tree(list) {
		    var mapped = {}
		    for (var i = 0, item; i < list.length; i++) {
		        item = list[i]
		        if (!item || !item.id) continue
		        mapped[item.id] = item
		    }
	
		    var result = []
		    for (var ii = 0; ii < list.length; ii++) {
		        item = list[ii]
	
		        if (!item) continue
		            /* jshint -W041 */
		        if (item.pid == undefined && item.parentId == undefined) {
		            result.push(item)
		            continue
		        }
		        var parent = mapped[item.pid] || mapped[item.parentId]
		        if (!parent) continue
		        if (!parent.children) parent.children = []
		        parent.children.push(item)
		    }
		    return result
		}
	
		var DICT_FIXED = function() {
		    var fixed = []
		    for (var id in DICT) {
		        var pid = id.slice(2, 6) === '0000' ? undefined :
		            id.slice(4, 6) == '00' ? (id.slice(0, 2) + '0000') :
		            id.slice(0, 4) + '00'
		        fixed.push({
		            id: id,
		            pid: pid,
		            name: DICT[id]
		        })
		    }
		    return tree(fixed)
		}()
	
		module.exports = DICT_FIXED
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Miscellaneous
		*/
		var DICT = __webpack_require__(18)
		module.exports = {
			// Dice
			d4: function() {
				return this.natural(1, 4)
			},
			d6: function() {
				return this.natural(1, 6)
			},
			d8: function() {
				return this.natural(1, 8)
			},
			d12: function() {
				return this.natural(1, 12)
			},
			d20: function() {
				return this.natural(1, 20)
			},
			d100: function() {
				return this.natural(1, 100)
			},
			/*
			    随机生成一个 GUID。
	
			    http://www.broofa.com/2008/09/javascript-uuid-function/
			    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
			        UUIDs (Universally Unique IDentifier)
			        GUIDs (Globally Unique IDentifier)
			        The formal definition of the UUID string representation is provided by the following ABNF [7]:
			            UUID                   = time-low "-" time-mid "-"
			                                   time-high-and-version "-"
			                                   clock-seq-and-reserved
			                                   clock-seq-low "-" node
			            time-low               = 4hexOctet
			            time-mid               = 2hexOctet
			            time-high-and-version  = 2hexOctet
			            clock-seq-and-reserved = hexOctet
			            clock-seq-low          = hexOctet
			            node                   = 6hexOctet
			            hexOctet               = hexDigit hexDigit
			            hexDigit =
			                "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
			                "a" / "b" / "c" / "d" / "e" / "f" /
			                "A" / "B" / "C" / "D" / "E" / "F"
			    
			    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
			*/
			guid: function() {
				var pool = "abcdefABCDEF1234567890",
					guid = this.string(pool, 8) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 12);
				return guid
			},
			uuid: function() {
				return this.guid()
			},
			/*
			    随机生成一个 18 位身份证。
	
			    [身份证](http://baike.baidu.com/view/1697.htm#4)
			        地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
			    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
			*/
			id: function() {
				var id,
					sum = 0,
					rank = [
						"7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"
					],
					last = [
						"1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"
					]
	
				id = this.pick(DICT).id +
					this.date('yyyyMMdd') +
					this.string('number', 3)
	
				for (var i = 0; i < id.length; i++) {
					sum += id[i] * rank[i];
				}
				id += last[sum % 11];
	
				return id
			},
	
			/*
			    生成一个全局的自增整数。
			    类似自增主键（auto increment primary key）。
			*/
			increment: function() {
				var key = 0
				return function(step) {
					return key += (+step || 1) // step?
				}
			}(),
			inc: function(step) {
				return this.increment(step)
			}
		}
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Parser = __webpack_require__(21)
		var Handler = __webpack_require__(22)
		module.exports = {
			Parser: Parser,
			Handler: Handler
		}
	
	/***/ },
	/* 21 */
	/***/ function(module, exports) {
	
		// https://github.com/nuysoft/regexp
		// forked from https://github.com/ForbesLindesay/regexp
	
		function parse(n) {
		    if ("string" != typeof n) {
		        var l = new TypeError("The regexp to parse must be represented as a string.");
		        throw l;
		    }
		    return index = 1, cgs = {}, parser.parse(n);
		}
	
		function Token(n) {
		    this.type = n, this.offset = Token.offset(), this.text = Token.text();
		}
	
		function Alternate(n, l) {
		    Token.call(this, "alternate"), this.left = n, this.right = l;
		}
	
		function Match(n) {
		    Token.call(this, "match"), this.body = n.filter(Boolean);
		}
	
		function Group(n, l) {
		    Token.call(this, n), this.body = l;
		}
	
		function CaptureGroup(n) {
		    Group.call(this, "capture-group"), this.index = cgs[this.offset] || (cgs[this.offset] = index++), 
		    this.body = n;
		}
	
		function Quantified(n, l) {
		    Token.call(this, "quantified"), this.body = n, this.quantifier = l;
		}
	
		function Quantifier(n, l) {
		    Token.call(this, "quantifier"), this.min = n, this.max = l, this.greedy = !0;
		}
	
		function CharSet(n, l) {
		    Token.call(this, "charset"), this.invert = n, this.body = l;
		}
	
		function CharacterRange(n, l) {
		    Token.call(this, "range"), this.start = n, this.end = l;
		}
	
		function Literal(n) {
		    Token.call(this, "literal"), this.body = n, this.escaped = this.body != this.text;
		}
	
		function Unicode(n) {
		    Token.call(this, "unicode"), this.code = n.toUpperCase();
		}
	
		function Hex(n) {
		    Token.call(this, "hex"), this.code = n.toUpperCase();
		}
	
		function Octal(n) {
		    Token.call(this, "octal"), this.code = n.toUpperCase();
		}
	
		function BackReference(n) {
		    Token.call(this, "back-reference"), this.code = n.toUpperCase();
		}
	
		function ControlCharacter(n) {
		    Token.call(this, "control-character"), this.code = n.toUpperCase();
		}
	
		var parser = function() {
		    function n(n, l) {
		        function u() {
		            this.constructor = n;
		        }
		        u.prototype = l.prototype, n.prototype = new u();
		    }
		    function l(n, l, u, t, r) {
		        function e(n, l) {
		            function u(n) {
		                function l(n) {
		                    return n.charCodeAt(0).toString(16).toUpperCase();
		                }
		                return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(n) {
		                    return "\\x0" + l(n);
		                }).replace(/[\x10-\x1F\x80-\xFF]/g, function(n) {
		                    return "\\x" + l(n);
		                }).replace(/[\u0180-\u0FFF]/g, function(n) {
		                    return "\\u0" + l(n);
		                }).replace(/[\u1080-\uFFFF]/g, function(n) {
		                    return "\\u" + l(n);
		                });
		            }
		            var t, r;
		            switch (n.length) {
		              case 0:
		                t = "end of input";
		                break;
	
		              case 1:
		                t = n[0];
		                break;
	
		              default:
		                t = n.slice(0, -1).join(", ") + " or " + n[n.length - 1];
		            }
		            return r = l ? '"' + u(l) + '"' : "end of input", "Expected " + t + " but " + r + " found.";
		        }
		        this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r, 
		        this.name = "SyntaxError", this.message = e(n, l);
		    }
		    function u(n) {
		        function u() {
		            return n.substring(Lt, qt);
		        }
		        function t() {
		            return Lt;
		        }
		        function r(l) {
		            function u(l, u, t) {
		                var r, e;
		                for (r = u; t > r; r++) e = n.charAt(r), "\n" === e ? (l.seenCR || l.line++, l.column = 1, 
		                l.seenCR = !1) : "\r" === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1, 
		                l.seenCR = !0) : (l.column++, l.seenCR = !1);
		            }
		            return Mt !== l && (Mt > l && (Mt = 0, Dt = {
		                line: 1,
		                column: 1,
		                seenCR: !1
		            }), u(Dt, Mt, l), Mt = l), Dt;
		        }
		        function e(n) {
		            Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
		        }
		        function o(n) {
		            var l = 0;
		            for (n.sort(); l < n.length; ) n[l - 1] === n[l] ? n.splice(l, 1) : l++;
		        }
		        function c() {
		            var l, u, t, r, o;
		            return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl, 
		            qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [ r, o ], 
		            t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l, 
		            u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, 
		            l = il), l;
		        }
		        function i() {
		            var n, l, u, t, r;
		            if (n = qt, l = f(), null === l && (l = al), null !== l) if (u = qt, Wt++, t = d(), 
		            Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
		                for (t = [], r = h(), null === r && (r = a()); null !== r; ) t.push(r), r = h(), 
		                null === r && (r = a());
		                null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r), 
		                null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
		            } else qt = n, n = il; else qt = n, n = il;
		            return n;
		        }
		        function a() {
		            var n;
		            return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
		        }
		        function f() {
		            var l, u;
		            return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)), 
		            null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function s() {
		            var l, u;
		            return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)), 
		            null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function h() {
		            var n, l, u;
		            return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u), 
		            null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
		        }
		        function d() {
		            var n, l, u;
		            return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n, 
		            l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, 
		            n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
		        }
		        function p() {
		            var n;
		            return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(), 
		            null === n && (n = g(), null === n && (n = b()))))), n;
		        }
		        function v() {
		            var l, u, t, r, o, c;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null, 
		            0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl, 
		            qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l, 
		            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function w() {
		            var l, u, t, r;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null, 
		            0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function A() {
		            var l, u, t, r;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null, 
		            0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function C() {
		            var l, u;
		            return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)), 
		            null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function g() {
		            var l, u;
		            return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)), 
		            null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function b() {
		            var l, u;
		            return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)), 
		            null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function k() {
		            var l;
		            return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)), 
		            l;
		        }
		        function T() {
		            var l, u, t;
		            if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 
		            0 === Wt && e(Il)), null !== t) for (;null !== t; ) u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt), 
		            qt++) : (t = null, 0 === Wt && e(Il)); else u = il;
		            return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u, 
		            l;
		        }
		        function x() {
		            var l, u, t, r;
		            return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)), 
		            null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))), 
		            null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)), 
		            null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function y() {
		            var n, l;
		            return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n, 
		            n = l) : n = l, n;
		        }
		        function m() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function R() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function F() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function Q() {
		            var l, u, t, r, o;
		            if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)), 
		            null !== u) if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)), 
		            null === t && (t = al), null !== t) {
		                for (r = [], o = S(), null === o && (o = U()); null !== o; ) r.push(o), o = S(), 
		                null === o && (o = U());
		                null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)), 
		                null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il)) : (qt = l, l = il);
		            } else qt = l, l = il; else qt = l, l = il;
		            return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
		        }
		        function S() {
		            var l, u, t, r;
		            return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null, 
		            0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l, 
		            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--, 
		            null === l && (u = null, 0 === Wt && e(du)), l;
		        }
		        function U() {
		            var n, l;
		            return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && (l = null, 0 === Wt && e(Au)), 
		            n;
		        }
		        function E() {
		            var l, u;
		            return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)), 
		            null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function G() {
		            var n;
		            return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), 
		            null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), 
		            null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), 
		            null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), 
		            null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
		        }
		        function B() {
		            var n;
		            return n = j(), null === n && (n = q(), null === n && (n = $())), n;
		        }
		        function j() {
		            var l, u;
		            return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)), 
		            null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function $() {
		            var l, u;
		            return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 
		            0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, 
		            Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
		        }
		        function q() {
		            var n;
		            return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(), 
		            null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), 
		            null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), 
		            null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(), 
		            null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))), 
		            n;
		        }
		        function L() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), 
		            null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function M() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), 
		            null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function D() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)), 
		            null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function H() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)), 
		            null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function O() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)), 
		            null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function W() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)), 
		            null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function z() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)), 
		            null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function I() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)), 
		            null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function J() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)), 
		            null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function K() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)), 
		            null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function N() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)), 
		            null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function P() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)), 
		            null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function V() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)), 
		            null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function X() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)), 
		            null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function Y() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)), 
		            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), 
		            null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function Z() {
		            var l, u, t;
		            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), 
		            null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)), 
		            null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function _() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), 
		            null !== u) {
		                if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)), 
		                null !== r) for (;null !== r; ) t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(mt)); else t = il;
		                null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function nl() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)), 
		            null !== u) {
		                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), 
		                null !== r) for (;null !== r; ) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(Ut)); else t = il;
		                null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function ll() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)), 
		            null !== u) {
		                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), 
		                null !== r) for (;null !== r; ) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(Ut)); else t = il;
		                null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function ul() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), 
		            null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function tl() {
		            var l, u, t;
		            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), 
		            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), 
		            null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        var rl, el = arguments.length > 1 ? arguments[1] : {}, ol = {
		            regexp: c
		        }, cl = c, il = null, al = "", fl = "|", sl = '"|"', hl = function(n, l) {
		            return l ? new Alternate(n, l[1]) : n;
		        }, dl = function(n, l, u) {
		            return new Match([ n ].concat(l).concat([ u ]));
		        }, pl = "^", vl = '"^"', wl = function() {
		            return new Token("start");
		        }, Al = "$", Cl = '"$"', gl = function() {
		            return new Token("end");
		        }, bl = function(n, l) {
		            return new Quantified(n, l);
		        }, kl = "Quantifier", Tl = function(n, l) {
		            return l && (n.greedy = !1), n;
		        }, xl = "{", yl = '"{"', ml = ",", Rl = '","', Fl = "}", Ql = '"}"', Sl = function(n, l) {
		            return new Quantifier(n, l);
		        }, Ul = ",}", El = '",}"', Gl = function(n) {
		            return new Quantifier(n, 1/0);
		        }, Bl = function(n) {
		            return new Quantifier(n, n);
		        }, jl = "+", $l = '"+"', ql = function() {
		            return new Quantifier(1, 1/0);
		        }, Ll = "*", Ml = '"*"', Dl = function() {
		            return new Quantifier(0, 1/0);
		        }, Hl = "?", Ol = '"?"', Wl = function() {
		            return new Quantifier(0, 1);
		        }, zl = /^[0-9]/, Il = "[0-9]", Jl = function(n) {
		            return +n.join("");
		        }, Kl = "(", Nl = '"("', Pl = ")", Vl = '")"', Xl = function(n) {
		            return n;
		        }, Yl = function(n) {
		            return new CaptureGroup(n);
		        }, Zl = "?:", _l = '"?:"', nu = function(n) {
		            return new Group("non-capture-group", n);
		        }, lu = "?=", uu = '"?="', tu = function(n) {
		            return new Group("positive-lookahead", n);
		        }, ru = "?!", eu = '"?!"', ou = function(n) {
		            return new Group("negative-lookahead", n);
		        }, cu = "CharacterSet", iu = "[", au = '"["', fu = "]", su = '"]"', hu = function(n, l) {
		            return new CharSet(!!n, l);
		        }, du = "CharacterRange", pu = "-", vu = '"-"', wu = function(n, l) {
		            return new CharacterRange(n, l);
		        }, Au = "Character", Cu = /^[^\\\]]/, gu = "[^\\\\\\]]", bu = function(n) {
		            return new Literal(n);
		        }, ku = ".", Tu = '"."', xu = function() {
		            return new Token("any-character");
		        }, yu = "Literal", mu = /^[^|\\\/.[()?+*$\^]/, Ru = "[^|\\\\\\/.[()?+*$\\^]", Fu = "\\b", Qu = '"\\\\b"', Su = function() {
		            return new Token("backspace");
		        }, Uu = function() {
		            return new Token("word-boundary");
		        }, Eu = "\\B", Gu = '"\\\\B"', Bu = function() {
		            return new Token("non-word-boundary");
		        }, ju = "\\d", $u = '"\\\\d"', qu = function() {
		            return new Token("digit");
		        }, Lu = "\\D", Mu = '"\\\\D"', Du = function() {
		            return new Token("non-digit");
		        }, Hu = "\\f", Ou = '"\\\\f"', Wu = function() {
		            return new Token("form-feed");
		        }, zu = "\\n", Iu = '"\\\\n"', Ju = function() {
		            return new Token("line-feed");
		        }, Ku = "\\r", Nu = '"\\\\r"', Pu = function() {
		            return new Token("carriage-return");
		        }, Vu = "\\s", Xu = '"\\\\s"', Yu = function() {
		            return new Token("white-space");
		        }, Zu = "\\S", _u = '"\\\\S"', nt = function() {
		            return new Token("non-white-space");
		        }, lt = "\\t", ut = '"\\\\t"', tt = function() {
		            return new Token("tab");
		        }, rt = "\\v", et = '"\\\\v"', ot = function() {
		            return new Token("vertical-tab");
		        }, ct = "\\w", it = '"\\\\w"', at = function() {
		            return new Token("word");
		        }, ft = "\\W", st = '"\\\\W"', ht = function() {
		            return new Token("non-word");
		        }, dt = "\\c", pt = '"\\\\c"', vt = "any character", wt = function(n) {
		            return new ControlCharacter(n);
		        }, At = "\\", Ct = '"\\\\"', gt = /^[1-9]/, bt = "[1-9]", kt = function(n) {
		            return new BackReference(n);
		        }, Tt = "\\0", xt = '"\\\\0"', yt = /^[0-7]/, mt = "[0-7]", Rt = function(n) {
		            return new Octal(n.join(""));
		        }, Ft = "\\x", Qt = '"\\\\x"', St = /^[0-9a-fA-F]/, Ut = "[0-9a-fA-F]", Et = function(n) {
		            return new Hex(n.join(""));
		        }, Gt = "\\u", Bt = '"\\\\u"', jt = function(n) {
		            return new Unicode(n.join(""));
		        }, $t = function() {
		            return new Token("null-character");
		        }, qt = 0, Lt = 0, Mt = 0, Dt = {
		            line: 1,
		            column: 1,
		            seenCR: !1
		        }, Ht = 0, Ot = [], Wt = 0;
		        if ("startRule" in el) {
		            if (!(el.startRule in ol)) throw new Error("Can't start parsing from rule \"" + el.startRule + '".');
		            cl = ol[el.startRule];
		        }
		        if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
		        throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
		    }
		    return n(l, Error), {
		        SyntaxError: l,
		        parse: u
		    };
		}(), index = 1, cgs = {};
	
		module.exports = parser
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## RegExp Handler
	
		    https://github.com/ForbesLindesay/regexp
		    https://github.com/dmajda/pegjs
		    http://www.regexper.com/
	
		    每个节点的结构
		        {
		            type: '',
		            offset: number,
		            text: '',
		            body: {},
		            escaped: true/false
		        }
	
		    type 可选值
		        alternate             |         选择
		        match                 匹配
		        capture-group         ()        捕获组
		        non-capture-group     (?:...)   非捕获组
		        positive-lookahead    (?=p)     零宽正向先行断言
		        negative-lookahead    (?!p)     零宽负向先行断言
		        quantified            a*        重复节点
		        quantifier            *         量词
		        charset               []        字符集
		        range                 {m, n}    范围
		        literal               a         直接量字符
		        unicode               \uxxxx    Unicode
		        hex                   \x        十六进制
		        octal                 八进制
		        back-reference        \n        反向引用
		        control-character     \cX       控制字符
	
		        // Token
		        start               ^       开头
		        end                 $       结尾
		        any-character       .       任意字符
		        backspace           [\b]    退格直接量
		        word-boundary       \b      单词边界
		        non-word-boundary   \B      非单词边界
		        digit               \d      ASCII 数字，[0-9]
		        non-digit           \D      非 ASCII 数字，[^0-9]
		        form-feed           \f      换页符
		        line-feed           \n      换行符
		        carriage-return     \r      回车符
		        white-space         \s      空白符
		        non-white-space     \S      非空白符
		        tab                 \t      制表符
		        vertical-tab        \v      垂直制表符
		        word                \w      ASCII 字符，[a-zA-Z0-9]
		        non-word            \W      非 ASCII 字符，[^a-zA-Z0-9]
		        null-character      \o      NUL 字符
		 */
	
		var Util = __webpack_require__(3)
		var Random = __webpack_require__(5)
		    /*
		        
		    */
		var Handler = {
		    extend: Util.extend
		}
	
		// http://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart
		/*var ASCII_CONTROL_CODE_CHART = {
		    '@': ['\u0000'],
		    A: ['\u0001'],
		    B: ['\u0002'],
		    C: ['\u0003'],
		    D: ['\u0004'],
		    E: ['\u0005'],
		    F: ['\u0006'],
		    G: ['\u0007', '\a'],
		    H: ['\u0008', '\b'],
		    I: ['\u0009', '\t'],
		    J: ['\u000A', '\n'],
		    K: ['\u000B', '\v'],
		    L: ['\u000C', '\f'],
		    M: ['\u000D', '\r'],
		    N: ['\u000E'],
		    O: ['\u000F'],
		    P: ['\u0010'],
		    Q: ['\u0011'],
		    R: ['\u0012'],
		    S: ['\u0013'],
		    T: ['\u0014'],
		    U: ['\u0015'],
		    V: ['\u0016'],
		    W: ['\u0017'],
		    X: ['\u0018'],
		    Y: ['\u0019'],
		    Z: ['\u001A'],
		    '[': ['\u001B', '\e'],
		    '\\': ['\u001C'],
		    ']': ['\u001D'],
		    '^': ['\u001E'],
		    '_': ['\u001F']
		}*/
	
		// ASCII printable code chart
		// var LOWER = 'abcdefghijklmnopqrstuvwxyz'
		// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		// var NUMBER = '0123456789'
		// var SYMBOL = ' !"#$%&\'()*+,-./' + ':;<=>?@' + '[\\]^_`' + '{|}~'
		var LOWER = ascii(97, 122)
		var UPPER = ascii(65, 90)
		var NUMBER = ascii(48, 57)
		var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126) // 排除 95 _ ascii(91, 94) + ascii(96, 96)
		var PRINTABLE = ascii(32, 126)
		var SPACE = ' \f\n\r\t\v\u00A0\u2028\u2029'
		var CHARACTER_CLASSES = {
		    '\\w': LOWER + UPPER + NUMBER + '_', // ascii(95, 95)
		    '\\W': OTHER.replace('_', ''),
		    '\\s': SPACE,
		    '\\S': function() {
		        var result = PRINTABLE
		        for (var i = 0; i < SPACE.length; i++) {
		            result = result.replace(SPACE[i], '')
		        }
		        return result
		    }(),
		    '\\d': NUMBER,
		    '\\D': LOWER + UPPER + OTHER
		}
	
		function ascii(from, to) {
		    var result = ''
		    for (var i = from; i <= to; i++) {
		        result += String.fromCharCode(i)
		    }
		    return result
		}
	
		// var ast = RegExpParser.parse(regexp.source)
		Handler.gen = function(node, result, cache) {
		    cache = cache || {
		        guid: 1
		    }
		    return Handler[node.type] ? Handler[node.type](node, result, cache) :
		        Handler.token(node, result, cache)
		}
	
		Handler.extend({
		    /* jshint unused:false */
		    token: function(node, result, cache) {
		        switch (node.type) {
		            case 'start':
		            case 'end':
		                return ''
		            case 'any-character':
		                return Random.character()
		            case 'backspace':
		                return ''
		            case 'word-boundary': // TODO
		                return ''
		            case 'non-word-boundary': // TODO
		                break
		            case 'digit':
		                return Random.pick(
		                    NUMBER.split('')
		                )
		            case 'non-digit':
		                return Random.pick(
		                    (LOWER + UPPER + OTHER).split('')
		                )
		            case 'form-feed':
		                break
		            case 'line-feed':
		                return node.body || node.text
		            case 'carriage-return':
		                break
		            case 'white-space':
		                return Random.pick(
		                    SPACE.split('')
		                )
		            case 'non-white-space':
		                return Random.pick(
		                    (LOWER + UPPER + NUMBER).split('')
		                )
		            case 'tab':
		                break
		            case 'vertical-tab':
		                break
		            case 'word': // \w [a-zA-Z0-9]
		                return Random.pick(
		                    (LOWER + UPPER + NUMBER).split('')
		                )
		            case 'non-word': // \W [^a-zA-Z0-9]
		                return Random.pick(
		                    OTHER.replace('_', '').split('')
		                )
		            case 'null-character':
		                break
		        }
		        return node.body || node.text
		    },
		    /*
		        {
		            type: 'alternate',
		            offset: 0,
		            text: '',
		            left: {
		                boyd: []
		            },
		            right: {
		                boyd: []
		            }
		        }
		    */
		    alternate: function(node, result, cache) {
		        // node.left/right {}
		        return this.gen(
		            Random.boolean() ? node.left : node.right,
		            result,
		            cache
		        )
		    },
		    /*
		        {
		            type: 'match',
		            offset: 0,
		            text: '',
		            body: []
		        }
		    */
		    match: function(node, result, cache) {
		        result = ''
		            // node.body []
		        for (var i = 0; i < node.body.length; i++) {
		            result += this.gen(node.body[i], result, cache)
		        }
		        return result
		    },
		    // ()
		    'capture-group': function(node, result, cache) {
		        // node.body {}
		        result = this.gen(node.body, result, cache)
		        cache[cache.guid++] = result
		        return result
		    },
		    // (?:...)
		    'non-capture-group': function(node, result, cache) {
		        // node.body {}
		        return this.gen(node.body, result, cache)
		    },
		    // (?=p)
		    'positive-lookahead': function(node, result, cache) {
		        // node.body
		        return this.gen(node.body, result, cache)
		    },
		    // (?!p)
		    'negative-lookahead': function(node, result, cache) {
		        // node.body
		        return ''
		    },
		    /*
		        {
		            type: 'quantified',
		            offset: 3,
		            text: 'c*',
		            body: {
		                type: 'literal',
		                offset: 3,
		                text: 'c',
		                body: 'c',
		                escaped: false
		            },
		            quantifier: {
		                type: 'quantifier',
		                offset: 4,
		                text: '*',
		                min: 0,
		                max: Infinity,
		                greedy: true
		            }
		        }
		    */
		    quantified: function(node, result, cache) {
		        result = ''
		            // node.quantifier {}
		        var count = this.quantifier(node.quantifier);
		        // node.body {}
		        for (var i = 0; i < count; i++) {
		            result += this.gen(node.body, result, cache)
		        }
		        return result
		    },
		    /*
		        quantifier: {
		            type: 'quantifier',
		            offset: 4,
		            text: '*',
		            min: 0,
		            max: Infinity,
		            greedy: true
		        }
		    */
		    quantifier: function(node, result, cache) {
		        var min = Math.max(node.min, 0)
		        var max = isFinite(node.max) ? node.max :
		            min + Random.integer(3, 7)
		        return Random.integer(min, max)
		    },
		    /*
		        
		    */
		    charset: function(node, result, cache) {
		        // node.invert
		        if (node.invert) return this['invert-charset'](node, result, cache)
	
		        // node.body []
		        var literal = Random.pick(node.body)
		        return this.gen(literal, result, cache)
		    },
		    'invert-charset': function(node, result, cache) {
		        var pool = PRINTABLE
		        for (var i = 0, item; i < node.body.length; i++) {
		            item = node.body[i]
		            switch (item.type) {
		                case 'literal':
		                    pool = pool.replace(item.body, '')
		                    break
		                case 'range':
		                    var min = this.gen(item.start, result, cache).charCodeAt()
		                    var max = this.gen(item.end, result, cache).charCodeAt()
		                    for (var ii = min; ii <= max; ii++) {
		                        pool = pool.replace(String.fromCharCode(ii), '')
		                    }
		                    /* falls through */
		                default:
		                    var characters = CHARACTER_CLASSES[item.text]
		                    if (characters) {
		                        for (var iii = 0; iii <= characters.length; iii++) {
		                            pool = pool.replace(characters[iii], '')
		                        }
		                    }
		            }
		        }
		        return Random.pick(pool.split(''))
		    },
		    range: function(node, result, cache) {
		        // node.start, node.end
		        var min = this.gen(node.start, result, cache).charCodeAt()
		        var max = this.gen(node.end, result, cache).charCodeAt()
		        return String.fromCharCode(
		            Random.integer(min, max)
		        )
		    },
		    literal: function(node, result, cache) {
		        return node.escaped ? node.body : node.text
		    },
		    // Unicode \u
		    unicode: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 16)
		        )
		    },
		    // 十六进制 \xFF
		    hex: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 16)
		        )
		    },
		    // 八进制 \0
		    octal: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 8)
		        )
		    },
		    // 反向引用
		    'back-reference': function(node, result, cache) {
		        return cache[node.code] || ''
		    },
		    /*
		        http://en.wikipedia.org/wiki/C0_and_C1_control_codes
		    */
		    CONTROL_CHARACTER_MAP: function() {
		        var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ')
		        var CONTROL_CHARACTER_UNICODE = '\u0000 \u0001 \u0002 \u0003 \u0004 \u0005 \u0006 \u0007 \u0008 \u0009 \u000A \u000B \u000C \u000D \u000E \u000F \u0010 \u0011 \u0012 \u0013 \u0014 \u0015 \u0016 \u0017 \u0018 \u0019 \u001A \u001B \u001C \u001D \u001E \u001F'.split(' ')
		        var map = {}
		        for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
		            map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i]
		        }
		        return map
		    }(),
		    'control-character': function(node, result, cache) {
		        return this.CONTROL_CHARACTER_MAP[node.code]
		    }
		})
	
		module.exports = Handler
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(24)
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## toJSONSchema
	
		    把 Mock.js 风格的数据模板转换成 JSON Schema。
	
		    > [JSON Schema](http://json-schema.org/)
		 */
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var Parser = __webpack_require__(4)
	
		function toJSONSchema(template, name, path /* Internal Use Only */ ) {
		    // type rule properties items
		    path = path || []
		    var result = {
		        name: typeof name === 'string' ? name.replace(Constant.RE_KEY, '$1') : name,
		        template: template,
		        type: Util.type(template), // 可能不准确，例如 { 'name|1': [{}, {} ...] }
		        rule: Parser.parse(name)
		    }
		    result.path = path.slice(0)
		    result.path.push(name === undefined ? 'ROOT' : result.name)
	
		    switch (result.type) {
		        case 'array':
		            result.items = []
		            Util.each(template, function(value, index) {
		                result.items.push(
		                    toJSONSchema(value, index, result.path)
		                )
		            })
		            break
		        case 'object':
		            result.properties = []
		            Util.each(template, function(value, name) {
		                result.properties.push(
		                    toJSONSchema(value, name, result.path)
		                )
		            })
		            break
		    }
	
		    return result
	
		}
	
		module.exports = toJSONSchema
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(26)
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## valid(template, data)
	
		    校验真实数据 data 是否与数据模板 template 匹配。
		    
		    实现思路：
		    1. 解析规则。
		        先把数据模板 template 解析为更方便机器解析的 JSON-Schame
		        name               属性名 
		        type               属性值类型
		        template           属性值模板
		        properties         对象属性数组
		        items              数组元素数组
		        rule               属性值生成规则
		    2. 递归验证规则。
		        然后用 JSON-Schema 校验真实数据，校验项包括属性名、值类型、值、值生成规则。
	
		    提示信息 
		    https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
		    [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
		    [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
		*/
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var toJSONSchema = __webpack_require__(23)
	
		function valid(template, data) {
		    var schema = toJSONSchema(template)
		    var result = Diff.diff(schema, data)
		    for (var i = 0; i < result.length; i++) {
		        // console.log(template, data)
		        // console.warn(Assert.message(result[i]))
		    }
		    return result
		}
	
		/*
		    ## name
		        有生成规则：比较解析后的 name
		        无生成规则：直接比较
		    ## type
		        无类型转换：直接比较
		        有类型转换：先试着解析 template，然后再检查？
		    ## value vs. template
		        基本类型
		            无生成规则：直接比较
		            有生成规则：
		                number
		                    min-max.dmin-dmax
		                    min-max.dcount
		                    count.dmin-dmax
		                    count.dcount
		                    +step
		                    整数部分
		                    小数部分
		                boolean 
		                string  
		                    min-max
		                    count
		    ## properties
		        对象
		            有生成规则：检测期望的属性个数，继续递归
		            无生成规则：检测全部的属性个数，继续递归
		    ## items
		        数组
		            有生成规则：
		                `'name|1': [{}, {} ...]`            其中之一，继续递归
		                `'name|+1': [{}, {} ...]`           顺序检测，继续递归
		                `'name|min-max': [{}, {} ...]`      检测个数，继续递归
		                `'name|count': [{}, {} ...]`        检测个数，继续递归
		            无生成规则：检测全部的元素个数，继续递归
		*/
		var Diff = {
		    diff: function diff(schema, data, name /* Internal Use Only */ ) {
		        var result = []
	
		        // 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
		        if (
		            this.name(schema, data, name, result) &&
		            this.type(schema, data, name, result)
		        ) {
		            this.value(schema, data, name, result)
		            this.properties(schema, data, name, result)
		            this.items(schema, data, name, result)
		        }
	
		        return result
		    },
		    /* jshint unused:false */
		    name: function(schema, data, name, result) {
		        var length = result.length
	
		        Assert.equal('name', schema.path, name + '', schema.name + '', result)
	
		        return result.length === length
		    },
		    type: function(schema, data, name, result) {
		        var length = result.length
	
		        switch (schema.type) {
		            case 'string':
		                // 跳过含有『占位符』的属性值，因为『占位符』返回值的类型可能和模板不一致，例如 '@int' 会返回一个整形值
		                if (schema.template.match(Constant.RE_PLACEHOLDER)) return true
		                break
		            case 'array':
		                if (schema.rule.parameters) {
		                    // name|count: array
		                    if (schema.rule.min !== undefined && schema.rule.max === undefined) {
		                        // 跳过 name|1: array，因为最终值的类型（很可能）不是数组，也不一定与 `array` 中的类型一致
		                        if (schema.rule.count === 1) return true
		                    }
		                    // 跳过 name|+inc: array
		                    if (schema.rule.parameters[2]) return true
		                }
		                break
		            case 'function':
		                // 跳过 `'name': function`，因为函数可以返回任何类型的值。
		                return true
		        }
	
		        Assert.equal('type', schema.path, Util.type(data), schema.type, result)
	
		        return result.length === length
		    },
		    value: function(schema, data, name, result) {
		        var length = result.length
	
		        var rule = schema.rule
		        var templateType = schema.type
		        if (templateType === 'object' || templateType === 'array' || templateType === 'function') return true
	
		        // 无生成规则
		        if (!rule.parameters) {
		            switch (templateType) {
		                case 'regexp':
		                    Assert.match('value', schema.path, data, schema.template, result)
		                    return result.length === length
		                case 'string':
		                    // 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
		                    if (schema.template.match(Constant.RE_PLACEHOLDER)) return result.length === length
		                    break
		            }
		            Assert.equal('value', schema.path, data, schema.template, result)
		            return result.length === length
		        }
	
		        // 有生成规则
		        var actualRepeatCount
		        switch (templateType) {
		            case 'number':
		                var parts = (data + '').split('.')
		                parts[0] = +parts[0]
	
		                // 整数部分
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('value', schema.path, parts[0], Math.min(rule.min, rule.max), result)
		                        // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
		                    Assert.lessThanOrEqualTo('value', schema.path, parts[0], Math.max(rule.min, rule.max), result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('value', schema.path, parts[0], rule.min, result, '[value] ' + name)
		                }
	
		                // 小数部分
		                if (rule.decimal) {
		                    // |dmin-dmax
		                    if (rule.dmin !== undefined && rule.dmax !== undefined) {
		                        Assert.greaterThanOrEqualTo('value', schema.path, parts[1].length, rule.dmin, result)
		                        Assert.lessThanOrEqualTo('value', schema.path, parts[1].length, rule.dmax, result)
		                    }
		                    // |dcount
		                    if (rule.dmin !== undefined && rule.dmax === undefined) {
		                        Assert.equal('value', schema.path, parts[1].length, rule.dmin, result)
		                    }
		                }
	
		                break
	
		            case 'boolean':
		                break
	
		            case 'string':
		                // 'aaa'.match(/a/g)
		                actualRepeatCount = data.match(new RegExp(schema.template, 'g'))
		                actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0
	
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                    Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                }
	
		                break
	
		            case 'regexp':
		                actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'))
		                actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0
	
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                    Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                }
		                break
		        }
	
		        return result.length === length
		    },
		    properties: function(schema, data, name, result) {
		        var length = result.length
	
		        var rule = schema.rule
		        var keys = Util.keys(data)
		        if (!schema.properties) return
	
		        // 无生成规则
		        if (!schema.rule.parameters) {
		            Assert.equal('properties length', schema.path, keys.length, schema.properties.length, result)
		        } else {
		            // 有生成规则
		            // |min-max
		            if (rule.min !== undefined && rule.max !== undefined) {
		                Assert.greaterThanOrEqualTo('properties length', schema.path, keys.length, Math.min(rule.min, rule.max), result)
		                Assert.lessThanOrEqualTo('properties length', schema.path, keys.length, Math.max(rule.min, rule.max), result)
		            }
		            // |count
		            if (rule.min !== undefined && rule.max === undefined) {
		                // |1, |>1
		                if (rule.count !== 1) Assert.equal('properties length', schema.path, keys.length, rule.min, result)
		            }
		        }
	
		        if (result.length !== length) return false
	
		        for (var i = 0; i < keys.length; i++) {
		            result.push.apply(
		                result,
		                this.diff(
		                    function() {
		                        var property
		                        Util.each(schema.properties, function(item /*, index*/ ) {
		                            if (item.name === keys[i]) property = item
		                        })
		                        return property || schema.properties[i]
		                    }(),
		                    data[keys[i]],
		                    keys[i]
		                )
		            )
		        }
	
		        return result.length === length
		    },
		    items: function(schema, data, name, result) {
		        var length = result.length
	
		        if (!schema.items) return
	
		        var rule = schema.rule
	
		        // 无生成规则
		        if (!schema.rule.parameters) {
		            Assert.equal('items length', schema.path, data.length, schema.items.length, result)
		        } else {
		            // 有生成规则
		            // |min-max
		            if (rule.min !== undefined && rule.max !== undefined) {
		                Assert.greaterThanOrEqualTo('items', schema.path, data.length, (Math.min(rule.min, rule.max) * schema.items.length), result,
		                    '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements')
		                Assert.lessThanOrEqualTo('items', schema.path, data.length, (Math.max(rule.min, rule.max) * schema.items.length), result,
		                    '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements')
		            }
		            // |count
		            if (rule.min !== undefined && rule.max === undefined) {
		                // |1, |>1
		                if (rule.count === 1) return result.length === length
		                else Assert.equal('items length', schema.path, data.length, (rule.min * schema.items.length), result)
		            }
		            // |+inc
		            if (rule.parameters[2]) return result.length === length
		        }
	
		        if (result.length !== length) return false
	
		        for (var i = 0; i < data.length; i++) {
		            result.push.apply(
		                result,
		                this.diff(
		                    schema.items[i % schema.items.length],
		                    data[i],
		                    i % schema.items.length
		                )
		            )
		        }
	
		        return result.length === length
		    }
		}
	
		/*
		    完善、友好的提示信息
		    
		    Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
		    路径 验证类型 描述 
	
		    Expect path.name is less than or equal to expected, but path.name is actual.
	
		    Expect path.name is less than or equal to expected, but path.name is actual.
		    Expect path.name is greater than or equal to expected, but path.name is actual.
	
		*/
		var Assert = {
		    message: function(item) {
		        return (item.message ||
		                '[{utype}] Expect {path}\'{ltype} {action} {expected}, but is {actual}')
		            .replace('{utype}', item.type.toUpperCase())
		            .replace('{ltype}', item.type.toLowerCase())
		            .replace('{path}', Util.isArray(item.path) && item.path.join('.') || item.path)
		            .replace('{action}', item.action)
		            .replace('{expected}', item.expected)
		            .replace('{actual}', item.actual)
		    },
		    equal: function(type, path, actual, expected, result, message) {
		        if (actual === expected) return true
		        switch (type) {
		            case 'type':
		                // 正则模板 === 字符串最终值
		                if (expected === 'regexp' && actual === 'string') return true
		                break
		        }
	
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    // actual matches expected
		    match: function(type, path, actual, expected, result, message) {
		        if (expected.test(actual)) return true
	
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'matches',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    notEqual: function(type, path, actual, expected, result, message) {
		        if (actual !== expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is not equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    greaterThan: function(type, path, actual, expected, result, message) {
		        if (actual > expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is greater than',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    lessThan: function(type, path, actual, expected, result, message) {
		        if (actual < expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is less to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    greaterThanOrEqualTo: function(type, path, actual, expected, result, message) {
		        if (actual >= expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is greater than or equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    lessThanOrEqualTo: function(type, path, actual, expected, result, message) {
		        if (actual <= expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is less than or equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    }
		}
	
		valid.Diff = Diff
		valid.Assert = Assert
	
		module.exports = valid
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(28)
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* global window, document, location, Event, setTimeout */
		/*
		    ## MockXMLHttpRequest
	
		    期望的功能：
		    1. 完整地覆盖原生 XHR 的行为
		    2. 完整地模拟原生 XHR 的行为
		    3. 在发起请求时，自动检测是否需要拦截
		    4. 如果不必拦截，则执行原生 XHR 的行为
		    5. 如果需要拦截，则执行虚拟 XHR 的行为
		    6. 兼容 XMLHttpRequest 和 ActiveXObject
		        new window.XMLHttpRequest()
		        new window.ActiveXObject("Microsoft.XMLHTTP")
	
		    关键方法的逻辑：
		    * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
		    * open  此时可以取到 URL，可以决定是否进行拦截。
		    * send  此时已经确定了请求方式。
	
		    规范：
		    http://xhr.spec.whatwg.org/
		    http://www.w3.org/TR/XMLHttpRequest2/
	
		    参考实现：
		    https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
		    https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
		    https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
		    https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
		    https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js
	
		    **需不需要全面重写 XMLHttpRequest？**
		        http://xhr.spec.whatwg.org/#interface-xmlhttprequest
		        关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
		        因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。
	
		    // Event handlers
		    onloadstart         loadstart
		    onprogress          progress
		    onabort             abort
		    onerror             error
		    onload              load
		    ontimeout           timeout
		    onloadend           loadend
		    onreadystatechange  readystatechange
		 */
	
		var Util = __webpack_require__(3)
	
		// 备份原生 XMLHttpRequest
		window._XMLHttpRequest = window.XMLHttpRequest
		window._ActiveXObject = window.ActiveXObject
	
		/*
		    PhantomJS
		    TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')
	
		    https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
		    https://github.com/ariya/phantomjs/issues/11289
		*/
		try {
		    new window.Event('custom')
		} catch (exception) {
		    window.Event = function(type, bubbles, cancelable, detail) {
		        var event = document.createEvent('CustomEvent') // MUST be 'CustomEvent'
		        event.initCustomEvent(type, bubbles, cancelable, detail)
		        return event
		    }
		}
	
		var XHR_STATES = {
		    // The object has been constructed.
		    UNSENT: 0,
		    // The open() method has been successfully invoked.
		    OPENED: 1,
		    // All redirects (if any) have been followed and all HTTP headers of the response have been received.
		    HEADERS_RECEIVED: 2,
		    // The response's body is being received.
		    LOADING: 3,
		    // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
		    DONE: 4
		}
	
		var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ')
		var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ')
		var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ')
	
		// https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js#L32
		var HTTP_STATUS_CODES = {
		    100: "Continue",
		    101: "Switching Protocols",
		    200: "OK",
		    201: "Created",
		    202: "Accepted",
		    203: "Non-Authoritative Information",
		    204: "No Content",
		    205: "Reset Content",
		    206: "Partial Content",
		    300: "Multiple Choice",
		    301: "Moved Permanently",
		    302: "Found",
		    303: "See Other",
		    304: "Not Modified",
		    305: "Use Proxy",
		    307: "Temporary Redirect",
		    400: "Bad Request",
		    401: "Unauthorized",
		    402: "Payment Required",
		    403: "Forbidden",
		    404: "Not Found",
		    405: "Method Not Allowed",
		    406: "Not Acceptable",
		    407: "Proxy Authentication Required",
		    408: "Request Timeout",
		    409: "Conflict",
		    410: "Gone",
		    411: "Length Required",
		    412: "Precondition Failed",
		    413: "Request Entity Too Large",
		    414: "Request-URI Too Long",
		    415: "Unsupported Media Type",
		    416: "Requested Range Not Satisfiable",
		    417: "Expectation Failed",
		    422: "Unprocessable Entity",
		    500: "Internal Server Error",
		    501: "Not Implemented",
		    502: "Bad Gateway",
		    503: "Service Unavailable",
		    504: "Gateway Timeout",
		    505: "HTTP Version Not Supported"
		}
	
		/*
		    MockXMLHttpRequest
		*/
	
		function MockXMLHttpRequest() {
		    // 初始化 custom 对象，用于存储自定义属性
		    this.custom = {
		        events: {},
		        requestHeaders: {},
		        responseHeaders: {}
		    }
		}
	
		MockXMLHttpRequest._settings = {
		    timeout: '10-100',
		    /*
		        timeout: 50,
		        timeout: '10-100',
		     */
		}
	
		MockXMLHttpRequest.setup = function(settings) {
		    Util.extend(MockXMLHttpRequest._settings, settings)
		    return MockXMLHttpRequest._settings
		}
	
		Util.extend(MockXMLHttpRequest, XHR_STATES)
		Util.extend(MockXMLHttpRequest.prototype, XHR_STATES)
	
		// 标记当前对象为 MockXMLHttpRequest
		MockXMLHttpRequest.prototype.mock = true
	
		// 是否拦截 Ajax 请求
		MockXMLHttpRequest.prototype.match = false
	
		// 初始化 Request 相关的属性和方法
		Util.extend(MockXMLHttpRequest.prototype, {
		    // https://xhr.spec.whatwg.org/#the-open()-method
		    // Sets the request method, request URL, and synchronous flag.
		    open: function(method, url, async, username, password) {
		        var that = this
	
		        Util.extend(this.custom, {
		            method: method,
		            url: url,
		            async: typeof async === 'boolean' ? async : true,
		            username: username,
		            password: password,
		            options: {
		                url: url,
		                type: method
		            }
		        })
	
		        this.custom.timeout = function(timeout) {
		            if (typeof timeout === 'number') return timeout
		            if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10)
		            if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
		                var tmp = timeout.split('-')
		                var min = parseInt(tmp[0], 10)
		                var max = parseInt(tmp[1], 10)
		                return Math.round(Math.random() * (max - min)) + min
		            }
		        }(MockXMLHttpRequest._settings.timeout)
	
		        // 查找与请求参数匹配的数据模板
		        var item = find(this.custom.options)
	
		        function handle(event) {
		            // 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
		            for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
		                try {
		                    that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]]
		                } catch (e) {}
		            }
		            // 触发 MockXMLHttpRequest 上的同名事件
		            that.dispatchEvent(new Event(event.type /*, false, false, that*/ ))
		        }
	
		        // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
		        if (!item) {
		            // 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
		            var xhr = createNativeXMLHttpRequest()
		            this.custom.xhr = xhr
	
		            // 初始化所有事件，用于监听原生 XHR 对象的事件
		            for (var i = 0; i < XHR_EVENTS.length; i++) {
		                xhr.addEventListener(XHR_EVENTS[i], handle)
		            }
	
		            // xhr.open()
		            if (username) xhr.open(method, url, async, username, password)
		            else xhr.open(method, url, async)
	
		            // 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
		            for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
		                try {
		                    xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]]
		                } catch (e) {}
		            }
	
		            return
		        }
	
		        // 找到了匹配的数据模板，开始拦截 XHR 请求
		        this.match = true
		        this.custom.template = item
		        this.readyState = MockXMLHttpRequest.OPENED
		        this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/ ))
		    },
		    // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
		    // Combines a header in author request headers.
		    setRequestHeader: function(name, value) {
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.setRequestHeader(name, value)
		            return
		        }
	
		        // 拦截 XHR
		        var requestHeaders = this.custom.requestHeaders
		        if (requestHeaders[name]) requestHeaders[name] += ',' + value
		        else requestHeaders[name] = value
		    },
		    timeout: 0,
		    withCredentials: false,
		    upload: {},
		    // https://xhr.spec.whatwg.org/#the-send()-method
		    // Initiates the request.
		    send: function send(data) {
		        var that = this
		        this.custom.options.body = data
	
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.send(data)
		            return
		        }
	
		        // 拦截 XHR
	
		        // X-Requested-With header
		        this.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest')
	
		        // loadstart The fetch initiates.
		        this.dispatchEvent(new Event('loadstart' /*, false, false, this*/ ))
	
		        if (this.custom.async) setTimeout(done, this.custom.timeout) // 异步
		        else done() // 同步
	
		        function done() {
		            that.readyState = MockXMLHttpRequest.HEADERS_RECEIVED
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
		            that.readyState = MockXMLHttpRequest.LOADING
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
	
		            that.status = 200
		            that.statusText = HTTP_STATUS_CODES[200]
	
		            // fix #92 #93 by @qddegtya
		            that.response = that.responseText = JSON.stringify(
		                convert(that.custom.template, that.custom.options),
		                null, 4
		            )
	
		            that.readyState = MockXMLHttpRequest.DONE
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
		            that.dispatchEvent(new Event('load' /*, false, false, that*/ ));
		            that.dispatchEvent(new Event('loadend' /*, false, false, that*/ ));
		        }
		    },
		    // https://xhr.spec.whatwg.org/#the-abort()-method
		    // Cancels any network activity.
		    abort: function abort() {
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.abort()
		            return
		        }
	
		        // 拦截 XHR
		        this.readyState = MockXMLHttpRequest.UNSENT
		        this.dispatchEvent(new Event('abort', false, false, this))
		        this.dispatchEvent(new Event('error', false, false, this))
		    }
		})
	
		// 初始化 Response 相关的属性和方法
		Util.extend(MockXMLHttpRequest.prototype, {
		    responseURL: '',
		    status: MockXMLHttpRequest.UNSENT,
		    statusText: '',
		    // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
		    getResponseHeader: function(name) {
		        // 原生 XHR
		        if (!this.match) {
		            return this.custom.xhr.getResponseHeader(name)
		        }
	
		        // 拦截 XHR
		        return this.custom.responseHeaders[name.toLowerCase()]
		    },
		    // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
		    // http://www.utf8-chartable.de/
		    getAllResponseHeaders: function() {
		        // 原生 XHR
		        if (!this.match) {
		            return this.custom.xhr.getAllResponseHeaders()
		        }
	
		        // 拦截 XHR
		        var responseHeaders = this.custom.responseHeaders
		        var headers = ''
		        for (var h in responseHeaders) {
		            if (!responseHeaders.hasOwnProperty(h)) continue
		            headers += h + ': ' + responseHeaders[h] + '\r\n'
		        }
		        return headers
		    },
		    overrideMimeType: function( /*mime*/ ) {},
		    responseType: '', // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
		    response: null,
		    responseText: '',
		    responseXML: null
		})
	
		// EventTarget
		Util.extend(MockXMLHttpRequest.prototype, {
		    addEventListener: function addEventListener(type, handle) {
		        var events = this.custom.events
		        if (!events[type]) events[type] = []
		        events[type].push(handle)
		    },
		    removeEventListener: function removeEventListener(type, handle) {
		        var handles = this.custom.events[type] || []
		        for (var i = 0; i < handles.length; i++) {
		            if (handles[i] === handle) {
		                handles.splice(i--, 1)
		            }
		        }
		    },
		    dispatchEvent: function dispatchEvent(event) {
		        var handles = this.custom.events[event.type] || []
		        for (var i = 0; i < handles.length; i++) {
		            handles[i].call(this, event)
		        }
	
		        var ontype = 'on' + event.type
		        if (this[ontype]) this[ontype](event)
		    }
		})
	
		// Inspired by jQuery
		function createNativeXMLHttpRequest() {
		    var isLocal = function() {
		        var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
		        var rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/
		        var ajaxLocation = location.href
		        var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []
		        return rlocalProtocol.test(ajaxLocParts[1])
		    }()
	
		    return window.ActiveXObject ?
		        (!isLocal && createStandardXHR() || createActiveXHR()) : createStandardXHR()
	
		    function createStandardXHR() {
		        try {
		            return new window._XMLHttpRequest();
		        } catch (e) {}
		    }
	
		    function createActiveXHR() {
		        try {
		            return new window._ActiveXObject("Microsoft.XMLHTTP");
		        } catch (e) {}
		    }
		}
	
	
		// 查找与请求参数匹配的数据模板：URL，Type
		function find(options) {
	
		    for (var sUrlType in MockXMLHttpRequest.Mock._mocked) {
		        var item = MockXMLHttpRequest.Mock._mocked[sUrlType]
		        if (
		            (!item.rurl || match(item.rurl, options.url)) &&
		            (!item.rtype || match(item.rtype, options.type.toLowerCase()))
		        ) {
		            // console.log('[mock]', options.url, '>', item.rurl)
		            return item
		        }
		    }
	
		    function match(expected, actual) {
		        if (Util.type(expected) === 'string') {
		            return expected === actual
		        }
		        if (Util.type(expected) === 'regexp') {
		            return expected.test(actual)
		        }
		    }
	
		}
	
		// 数据模板 ＝> 响应数据
		function convert(item, options) {
		    return Util.isFunction(item.template) ?
		        item.template(options) : MockXMLHttpRequest.Mock.mock(item.template)
		}
	
		module.exports = MockXMLHttpRequest
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 6 */
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var interface_factory_1 = __webpack_require__(8);
	var schemas_1 = __webpack_require__(11);
	var compose_1 = __webpack_require__(15);
	var tv4 = __webpack_require__(20);
	var _ = __webpack_require__(9);
	var ModelProxy = (function (_super) {
	    __extends(ModelProxy, _super);
	    function ModelProxy() {
	        var _this = _super.call(this) || this;
	        _this.interfaces = {};
	        return _this;
	    }
	    ModelProxy.prototype.initInterfaces = function (config) {
	        var ifFacory = new interface_factory_1.InterfaceFactory();
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
	                valid = tv4.validateResult(config, schemas_1.default.proxyConfigSchema);
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
	}(compose_1.Compose));
	exports.ModelProxy = ModelProxy;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_factory_1 = __webpack_require__(2);
	var engine_factory_1 = __webpack_require__(1);
	var _ = __webpack_require__(9);
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
	    InterfaceFactory.prototype.execute = function (intance, data, params, intanceCover) {
	        return __awaiter(this, void 0, void 0, function () {
	            var engine;
	            return __generator(this, function (_a) {
	                intance = _.extend({}, intance, intanceCover);
	                engine = engine_factory_1.engineFactory.use(intance.engine);
	                return [2 /*return*/, engine.proxy(intance, data, params)];
	            });
	        });
	    };
	    return InterfaceFactory;
	}(base_factory_1.BaseFactory));
	exports.InterfaceFactory = InterfaceFactory;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;
	
	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';
	
	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;
	
	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	
	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;
	
	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;
	
	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;
	
	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';
	
	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';
	
	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';
	
	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	
	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);
	
	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
	
	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;
	
	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;
	
	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;
	
	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;
	
	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
	
	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
	
	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());
	
	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];
	
	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;
	
	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;
	
	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };
	
	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };
	
	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };
	
	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	
	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
	
	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;
	
	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;
	
	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
	
	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;
	
	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;
	
	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }
	
	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }
	
	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;
	
	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }
	
	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;
	
	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }
	
	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }
	
	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }
	
	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }
	
	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	
	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }
	
	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }
	
	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;
	
	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;
	
	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
	
	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;
	
	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;
	
	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /** Used to generate unique IDs. */
	    var idCounter = 0;
	
	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;
	
	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;
	
	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	
	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');
	
	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;
	
	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	
	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	
	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;
	
	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;
	
	    /** Used to lookup unminified function names. */
	    var realNames = {};
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	
	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }
	
	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }
	
	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};
	
	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {
	
	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,
	
	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,
	
	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,
	
	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',
	
	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {
	
	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }
	
	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }
	
	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	
	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	
	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];
	
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	
	        var iterIndex = -1,
	            value = array[index];
	
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }
	
	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }
	
	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }
	
	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }
	
	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;
	
	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }
	
	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	      return result ? 0 : -1;
	    }
	
	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);
	
	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }
	
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;
	
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;
	
	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;
	
	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);
	
	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }
	
	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;
	
	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;
	
	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;
	
	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }
	
	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }
	
	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }
	
	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);
	
	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }
	
	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);
	
	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});
	
	      var index = -1,
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }
	
	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;
	
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);
	
	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());
	
	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	
	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];
	
	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;
	
	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];
	
	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);
	
	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	
	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;
	
	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;
	
	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);
	
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);
	
	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }
	
	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;
	
	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	
	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }
	
	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;
	
	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;
	
	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);
	
	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	      stackA.pop();
	      stackB.pop();
	
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	
	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];
	
	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }
	
	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');
	
	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }
	
	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);
	
	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;
	
	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }
	
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];
	
	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);
	
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }
	
	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }
	
	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }
	
	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }
	
	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;
	
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	
	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;
	
	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;
	
	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });
	
	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	
	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];
	
	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;
	
	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	
	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	
	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;
	
	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }
	
	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;
	
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	
	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }
	
	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	
	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;
	
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;
	
	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	
	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }
	
	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);
	
	      view.set(new Uint8Array(buffer));
	      return result;
	    }
	
	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);
	
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);
	
	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;
	
	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;
	
	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }
	
	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	
	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }
	
	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';
	
	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	
	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	
	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }
	
	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }
	
	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }
	
	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }
	
	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }
	
	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];
	
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	
	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	
	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }
	
	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }
	
	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }
	
	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }
	
	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }
	
	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }
	
	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);
	
	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;
	
	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);
	
	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	
	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;
	
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);
	
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }
	
	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }
	
	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
	
	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);
	
	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;
	
	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;
	
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	
	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;
	
	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;
	
	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }
	
	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	
	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;
	
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }
	
	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');
	
	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;
	
	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }
	
	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }
	
	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	
	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);
	
	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }
	
	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);
	
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	
	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }
	
	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }
	
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }
	
	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }
	
	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }
	
	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	
	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;
	
	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
	
	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;
	
	      return data;
	    }
	
	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);
	
	      var index = -1,
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);
	
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	
	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;
	
	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());
	
	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;
	
	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));
	
	      var index = -1,
	          result = [];
	
	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }
	
	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));
	
	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }
	
	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	
	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();
	
	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);
	
	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }
	
	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }
	
	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }
	
	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }
	
	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }
	
	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];
	
	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];
	
	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });
	
	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];
	
	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;
	
	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];
	
	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);
	
	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });
	
	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	
	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	
	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }
	
	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }
	
	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();
	
	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }
	
	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });
	
	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;
	
	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }
	
	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	
	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;
	
	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }
	
	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);
	
	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};
	
	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;
	
	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	
	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }
	
	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }
	
	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }
	
	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	
	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });
	
	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	
	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	
	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }
	
	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }
	
	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });
	
	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);
	
	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }
	
	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);
	
	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });
	
	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });
	
	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });
	
	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }
	
	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	
	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }
	
	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);
	
	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);
	
	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }
	
	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;
	
	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];
	
	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }
	
	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }
	
	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }
	
	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);
	
	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }
	
	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });
	
	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	
	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	
	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });
	
	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
	
	      var index = -1,
	          length = methodNames.length;
	
	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });
	
	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });
	
	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);
	
	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);
	
	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	
	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }
	
	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }
	
	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }
	
	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }
	
	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);
	
	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;
	
	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }
	
	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	
	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });
	
	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();
	
	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);
	
	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }
	
	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });
	
	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }
	
	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }
	
	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);
	
	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
	
	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);
	
	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }
	
	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }
	
	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }
	
	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }
	
	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }
	
	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }
	
	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };
	
	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }
	
	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }
	
	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }
	
	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }
	
	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }
	
	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }
	
	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }
	
	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }
	
	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }
	
	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }
	
	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }
	
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;
	
	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }
	
	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }
	
	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }
	
	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }
	
	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }
	
	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }
	
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });
	
	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);
	
	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);
	
	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);
	
	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);
	
	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);
	
	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);
	
	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);
	
	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);
	
	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }
	
	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }
	
	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }
	
	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key];
	
	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };
	
	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;
	
	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;
	
	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);
	
	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();
	
	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });
	
	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);
	
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }
	
	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });
	
	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }
	
	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
	
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	
	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }
	
	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);
	
	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }
	
	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;
	
	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });
	
	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }
	
	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }
	
	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');
	
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);
	
	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }
	
	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }
	
	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;
	
	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);
	
	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }
	
	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();
	
	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);
	
	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }
	
	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);
	
	      return result;
	    }
	
	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });
	
	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
	
	      return string.lastIndexOf(target, position) == position;
	    }
	
	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;
	
	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
	
	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	
	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	
	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	
	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	
	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });
	
	      source += "';\n";
	
	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	
	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });
	
	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }
	
	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }
	
	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }
	
	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	
	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);
	
	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	
	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	
	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }
	
	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }
	
	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }
	
	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
	
	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;
	
	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];
	
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);
	
	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }
	
	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }
	
	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }
	
	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }
	
	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }
	
	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);
	
	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);
	
	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
	
	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }
	
	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');
	
	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');
	
	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);
	
	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);
	
	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');
	
	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	
	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;
	
	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;
	
	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;
	
	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;
	
	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;
	
	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;
	
	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;
	
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;
	
	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;
	
	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	
	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
	
	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };
	
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	
	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;
	
	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;
	
	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });
	
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	
	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };
	
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);
	
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	
	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };
	
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };
	
	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
	
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };
	
	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;
	
	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });
	
	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
	
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });
	
	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);
	
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	
	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];
	
	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	
	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	
	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;
	
	    return lodash;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export lodash.
	  var _ = runInContext();
	
	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;
	
	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module), (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(12);
	var proxy_config_schema_1 = __webpack_require__(13);
	var interface_schema_1 = __webpack_require__(14);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    proxyConfigSchema: proxy_config_schema_1.default,
	    interfaceSchema: interface_schema_1.default,
	    JsonSchemaBuilder: builder_1.JsonSchemaBuilder
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _ = __webpack_require__(9);
	var _schema = "http://json-schema.org/draft-04/schema#";
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
	exports.JsonSchemaBuilder = JsonSchemaBuilder;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(12);
	var interface_schema_1 = __webpack_require__(14);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = builder_1.JsonSchemaBuilder.init().build("object", null, "modelProxy验证配置")
	    .properties({
	    key: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    title: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    engine: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    states: builder_1.JsonSchemaBuilder.init().build("object").toValue(),
	    state: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    version: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    mockDir: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    interfaces: builder_1.JsonSchemaBuilder.init().build("array", "接口配置数组")
	        .items(interface_schema_1.default).toValue(),
	}).required("key", "title", "states").toValue();


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var builder_1 = __webpack_require__(12);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = builder_1.JsonSchemaBuilder.init().build("object").properties({
	    key: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    title: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    engine: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    states: builder_1.JsonSchemaBuilder.init().build("object").toValue(),
	    state: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    version: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    method: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    path: builder_1.JsonSchemaBuilder.init().build().toValue(),
	    config: builder_1.JsonSchemaBuilder.init().build("object").toValue(),
	    mockDir: builder_1.JsonSchemaBuilder.init().build().toValue()
	}).required("key", "title", "method", "path").toValue();


/***/ },
/* 15 */
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
	var _ = __webpack_require__(9);
	var Bluebird = __webpack_require__(16);
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
	            return new Bluebird(function (resolve, reject) {
	                var index = -1;
	                var dispatch = function (i) {
	                    return new Bluebird(function (resolve1) {
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
	            var ctx = _.extend({}, options || {}, {
	                app: _this
	            });
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
	exports.Compose = Compose;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	/**
	 * bluebird build version 3.4.7
	 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
	*/
	!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}
	
	Promise.any = function (promises) {
	    return any(promises);
	};
	
	Promise.prototype.any = function () {
	    return any(this);
	};
	
	};
	
	},{}],2:[function(_dereq_,module,exports){
	"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = _dereq_("./schedule");
	var Queue = _dereq_("./queue");
	var util = _dereq_("./util");
	
	function Async() {
	    this._customScheduler = false;
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._haveDrainedQueues = false;
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule = schedule;
	}
	
	Async.prototype.setScheduler = function(fn) {
	    var prev = this._schedule;
	    this._schedule = fn;
	    this._customScheduler = true;
	    return prev;
	};
	
	Async.prototype.hasCustomScheduler = function() {
	    return this._customScheduler;
	};
	
	Async.prototype.enableTrampoline = function() {
	    this._trampolineEnabled = true;
	};
	
	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};
	
	Async.prototype.haveItemsQueued = function () {
	    return this._isTickUsed || this._haveDrainedQueues;
	};
	
	
	Async.prototype.fatalError = function(e, isNode) {
	    if (isNode) {
	        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
	            "\n");
	        process.exit(2);
	    } else {
	        this.throwLater(e);
	    }
	};
	
	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	};
	
	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}
	
	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}
	
	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}
	
	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };
	
	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };
	
	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}
	
	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};
	
	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._haveDrainedQueues = true;
	    this._drainQueue(this._lateQueue);
	};
	
	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};
	
	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};
	
	module.exports = Async;
	module.exports.firstLineError = firstLineError;
	
	},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
	var calledBind = false;
	var rejectThis = function(_, e) {
	    this._reject(e);
	};
	
	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};
	
	var bindingResolved = function(thisArg, context) {
	    if (((this._bitField & 50397184) === 0)) {
	        this._resolveCallback(context.target);
	    }
	};
	
	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};
	
	Promise.prototype.bind = function (thisArg) {
	    if (!calledBind) {
	        calledBind = true;
	        Promise.prototype._propagateFrom = debug.propagateFromFunction();
	        Promise.prototype._boundValue = debug.boundValueFunction();
	    }
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();
	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, undefined, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, undefined, ret, context);
	        ret._setOnCancel(maybePromise);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};
	
	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 2097152;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~2097152);
	    }
	};
	
	Promise.prototype._isBound = function () {
	    return (this._bitField & 2097152) === 2097152;
	};
	
	Promise.bind = function (thisArg, value) {
	    return Promise.resolve(value).bind(thisArg);
	};
	};
	
	},{}],4:[function(_dereq_,module,exports){
	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = _dereq_("./promise")();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;
	
	},{"./promise":22}],5:[function(_dereq_,module,exports){
	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}
	
	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;
	
	var getMethodCaller;
	var getGetter;
	if (false) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};
	
	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};
	
	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};
	
	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};
	
	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}
	
	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}
	
	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var args = [].slice.call(arguments, 1);;
	    if (false) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};
	
	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};
	
	},{"./util":36}],6:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, PromiseArray, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;
	
	Promise.prototype["break"] = Promise.prototype.cancel = function() {
	    if (!debug.cancellation()) return this._warn("cancellation is disabled");
	
	    var promise = this;
	    var child = promise;
	    while (promise._isCancellable()) {
	        if (!promise._cancelBy(child)) {
	            if (child._isFollowing()) {
	                child._followee().cancel();
	            } else {
	                child._cancelBranched();
	            }
	            break;
	        }
	
	        var parent = promise._cancellationParent;
	        if (parent == null || !parent._isCancellable()) {
	            if (promise._isFollowing()) {
	                promise._followee().cancel();
	            } else {
	                promise._cancelBranched();
	            }
	            break;
	        } else {
	            if (promise._isFollowing()) promise._followee().cancel();
	            promise._setWillBeCancelled();
	            child = promise;
	            promise = parent;
	        }
	    }
	};
	
	Promise.prototype._branchHasCancelled = function() {
	    this._branchesRemainingToCancel--;
	};
	
	Promise.prototype._enoughBranchesHaveCancelled = function() {
	    return this._branchesRemainingToCancel === undefined ||
	           this._branchesRemainingToCancel <= 0;
	};
	
	Promise.prototype._cancelBy = function(canceller) {
	    if (canceller === this) {
	        this._branchesRemainingToCancel = 0;
	        this._invokeOnCancel();
	        return true;
	    } else {
	        this._branchHasCancelled();
	        if (this._enoughBranchesHaveCancelled()) {
	            this._invokeOnCancel();
	            return true;
	        }
	    }
	    return false;
	};
	
	Promise.prototype._cancelBranched = function() {
	    if (this._enoughBranchesHaveCancelled()) {
	        this._cancel();
	    }
	};
	
	Promise.prototype._cancel = function() {
	    if (!this._isCancellable()) return;
	    this._setCancelled();
	    async.invoke(this._cancelPromises, this, undefined);
	};
	
	Promise.prototype._cancelPromises = function() {
	    if (this._length() > 0) this._settlePromises();
	};
	
	Promise.prototype._unsetOnCancel = function() {
	    this._onCancelField = undefined;
	};
	
	Promise.prototype._isCancellable = function() {
	    return this.isPending() && !this._isCancelled();
	};
	
	Promise.prototype.isCancellable = function() {
	    return this.isPending() && !this.isCancelled();
	};
	
	Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
	    if (util.isArray(onCancelCallback)) {
	        for (var i = 0; i < onCancelCallback.length; ++i) {
	            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
	        }
	    } else if (onCancelCallback !== undefined) {
	        if (typeof onCancelCallback === "function") {
	            if (!internalOnly) {
	                var e = tryCatch(onCancelCallback).call(this._boundValue());
	                if (e === errorObj) {
	                    this._attachExtraTrace(e.e);
	                    async.throwLater(e.e);
	                }
	            }
	        } else {
	            onCancelCallback._resultCancelled(this);
	        }
	    }
	};
	
	Promise.prototype._invokeOnCancel = function() {
	    var onCancelCallback = this._onCancel();
	    this._unsetOnCancel();
	    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
	};
	
	Promise.prototype._invokeInternalOnCancel = function() {
	    if (this._isCancellable()) {
	        this._doInvokeOnCancel(this._onCancel(), true);
	        this._unsetOnCancel();
	    }
	};
	
	Promise.prototype._resultCancelled = function() {
	    this.cancel();
	};
	
	};
	
	},{"./util":36}],7:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = _dereq_("./util");
	var getKeys = _dereq_("./es5").keys;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	
	function catchFilter(instances, cb, promise) {
	    return function(e) {
	        var boundTo = promise._boundValue();
	        predicateLoop: for (var i = 0; i < instances.length; ++i) {
	            var item = instances[i];
	
	            if (item === Error ||
	                (item != null && item.prototype instanceof Error)) {
	                if (e instanceof item) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (typeof item === "function") {
	                var matchesPredicate = tryCatch(item).call(boundTo, e);
	                if (matchesPredicate === errorObj) {
	                    return matchesPredicate;
	                } else if (matchesPredicate) {
	                    return tryCatch(cb).call(boundTo, e);
	                }
	            } else if (util.isObject(e)) {
	                var keys = getKeys(item);
	                for (var j = 0; j < keys.length; ++j) {
	                    var key = keys[j];
	                    if (item[key] != e[key]) {
	                        continue predicateLoop;
	                    }
	                }
	                return tryCatch(cb).call(boundTo, e);
	            }
	        }
	        return NEXT_FILTER;
	    };
	}
	
	return catchFilter;
	};
	
	},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var longStackTraces = false;
	var contextStack = [];
	
	Promise.prototype._promiseCreated = function() {};
	Promise.prototype._pushContext = function() {};
	Promise.prototype._popContext = function() {return null;};
	Promise._peekContext = Promise.prototype._peekContext = function() {};
	
	function Context() {
	    this._trace = new Context.CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (this._trace !== undefined) {
	        this._trace._promiseCreated = null;
	        contextStack.push(this._trace);
	    }
	};
	
	Context.prototype._popContext = function () {
	    if (this._trace !== undefined) {
	        var trace = contextStack.pop();
	        var ret = trace._promiseCreated;
	        trace._promiseCreated = null;
	        return ret;
	    }
	    return null;
	};
	
	function createContext() {
	    if (longStackTraces) return new Context();
	}
	
	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}
	Context.CapturedTrace = null;
	Context.create = createContext;
	Context.deactivateLongStackTraces = function() {};
	Context.activateLongStackTraces = function() {
	    var Promise_pushContext = Promise.prototype._pushContext;
	    var Promise_popContext = Promise.prototype._popContext;
	    var Promise_PeekContext = Promise._peekContext;
	    var Promise_peekContext = Promise.prototype._peekContext;
	    var Promise_promiseCreated = Promise.prototype._promiseCreated;
	    Context.deactivateLongStackTraces = function() {
	        Promise.prototype._pushContext = Promise_pushContext;
	        Promise.prototype._popContext = Promise_popContext;
	        Promise._peekContext = Promise_PeekContext;
	        Promise.prototype._peekContext = Promise_peekContext;
	        Promise.prototype._promiseCreated = Promise_promiseCreated;
	        longStackTraces = false;
	    };
	    longStackTraces = true;
	    Promise.prototype._pushContext = Context.prototype._pushContext;
	    Promise.prototype._popContext = Context.prototype._popContext;
	    Promise._peekContext = Promise.prototype._peekContext = peekContext;
	    Promise.prototype._promiseCreated = function() {
	        var ctx = this._peekContext();
	        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
	    };
	};
	return Context;
	};
	
	},{}],9:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, Context) {
	var getDomain = Promise._getDomain;
	var async = Promise._async;
	var Warning = _dereq_("./errors").Warning;
	var util = _dereq_("./util");
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
	var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
	var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var printWarning;
	var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
	                        (true ||
	                         util.env("BLUEBIRD_DEBUG") ||
	                         util.env("NODE_ENV") === "development"));
	
	var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
	    (debugging || util.env("BLUEBIRD_WARNINGS")));
	
	var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
	    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));
	
	var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
	    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
	
	Promise.prototype.suppressUnhandledRejections = function() {
	    var target = this._target();
	    target._bitField = ((target._bitField & (~1048576)) |
	                      524288);
	};
	
	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 524288) !== 0) return;
	    this._setRejectionIsUnhandled();
	    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	};
	
	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};
	
	Promise.prototype._setReturnedNonUndefined = function() {
	    this._bitField = this._bitField | 268435456;
	};
	
	Promise.prototype._returnedNonUndefined = function() {
	    return (this._bitField & 268435456) !== 0;
	};
	
	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._settledValue();
	        this._setUnhandledRejectionIsNotified();
	        fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};
	
	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 262144;
	};
	
	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~262144);
	};
	
	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 262144) > 0;
	};
	
	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 1048576;
	};
	
	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~1048576);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};
	
	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 1048576) > 0;
	};
	
	Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
	    return warn(message, shouldUseOwnTrace, promise || this);
	};
	
	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ?
	                                            fn : util.domainBind(domain, fn))
	                                 : undefined;
	};
	
	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ?
	                                            fn : util.domainBind(domain, fn))
	                                 : undefined;
	};
	
	var disableLongStackTraces = function() {};
	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() && !config.longStackTraces) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    if (!config.longStackTraces && longStackTracesIsSupported()) {
	        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
	        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
	        config.longStackTraces = true;
	        disableLongStackTraces = function() {
	            if (async.haveItemsQueued() && !config.longStackTraces) {
	                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	            }
	            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
	            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
	            Context.deactivateLongStackTraces();
	            async.enableTrampoline();
	            config.longStackTraces = false;
	        };
	        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
	        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
	        Context.activateLongStackTraces();
	        async.disableTrampolineIfNecessary();
	    }
	};
	
	Promise.hasLongStackTraces = function () {
	    return config.longStackTraces && longStackTracesIsSupported();
	};
	
	var fireDomEvent = (function() {
	    try {
	        if (typeof CustomEvent === "function") {
	            var event = new CustomEvent("CustomEvent");
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = new CustomEvent(name.toLowerCase(), {
	                    detail: event,
	                    cancelable: true
	                });
	                return !util.global.dispatchEvent(domEvent);
	            };
	        } else if (typeof Event === "function") {
	            var event = new Event("CustomEvent");
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = new Event(name.toLowerCase(), {
	                    cancelable: true
	                });
	                domEvent.detail = event;
	                return !util.global.dispatchEvent(domEvent);
	            };
	        } else {
	            var event = document.createEvent("CustomEvent");
	            event.initCustomEvent("testingtheevent", false, true, {});
	            util.global.dispatchEvent(event);
	            return function(name, event) {
	                var domEvent = document.createEvent("CustomEvent");
	                domEvent.initCustomEvent(name.toLowerCase(), false, true,
	                    event);
	                return !util.global.dispatchEvent(domEvent);
	            };
	        }
	    } catch (e) {}
	    return function() {
	        return false;
	    };
	})();
	
	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function() {
	            return process.emit.apply(process, arguments);
	        };
	    } else {
	        if (!util.global) {
	            return function() {
	                return false;
	            };
	        }
	        return function(name) {
	            var methodName = "on" + name.toLowerCase();
	            var method = util.global[methodName];
	            if (!method) return false;
	            method.apply(util.global, [].slice.call(arguments, 1));
	            return true;
	        };
	    }
	})();
	
	function generatePromiseLifecycleEventObject(name, promise) {
	    return {promise: promise};
	}
	
	var eventToObjectGenerator = {
	    promiseCreated: generatePromiseLifecycleEventObject,
	    promiseFulfilled: generatePromiseLifecycleEventObject,
	    promiseRejected: generatePromiseLifecycleEventObject,
	    promiseResolved: generatePromiseLifecycleEventObject,
	    promiseCancelled: generatePromiseLifecycleEventObject,
	    promiseChained: function(name, promise, child) {
	        return {promise: promise, child: child};
	    },
	    warning: function(name, warning) {
	        return {warning: warning};
	    },
	    unhandledRejection: function (name, reason, promise) {
	        return {reason: reason, promise: promise};
	    },
	    rejectionHandled: generatePromiseLifecycleEventObject
	};
	
	var activeFireEvent = function (name) {
	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent.apply(null, arguments);
	    } catch (e) {
	        async.throwLater(e);
	        globalEventFired = true;
	    }
	
	    var domEventFired = false;
	    try {
	        domEventFired = fireDomEvent(name,
	                    eventToObjectGenerator[name].apply(null, arguments));
	    } catch (e) {
	        async.throwLater(e);
	        domEventFired = true;
	    }
	
	    return domEventFired || globalEventFired;
	};
	
	Promise.config = function(opts) {
	    opts = Object(opts);
	    if ("longStackTraces" in opts) {
	        if (opts.longStackTraces) {
	            Promise.longStackTraces();
	        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
	            disableLongStackTraces();
	        }
	    }
	    if ("warnings" in opts) {
	        var warningsOption = opts.warnings;
	        config.warnings = !!warningsOption;
	        wForgottenReturn = config.warnings;
	
	        if (util.isObject(warningsOption)) {
	            if ("wForgottenReturn" in warningsOption) {
	                wForgottenReturn = !!warningsOption.wForgottenReturn;
	            }
	        }
	    }
	    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
	        if (async.haveItemsQueued()) {
	            throw new Error(
	                "cannot enable cancellation after promises are in use");
	        }
	        Promise.prototype._clearCancellationData =
	            cancellationClearCancellationData;
	        Promise.prototype._propagateFrom = cancellationPropagateFrom;
	        Promise.prototype._onCancel = cancellationOnCancel;
	        Promise.prototype._setOnCancel = cancellationSetOnCancel;
	        Promise.prototype._attachCancellationCallback =
	            cancellationAttachCancellationCallback;
	        Promise.prototype._execute = cancellationExecute;
	        propagateFromFunction = cancellationPropagateFrom;
	        config.cancellation = true;
	    }
	    if ("monitoring" in opts) {
	        if (opts.monitoring && !config.monitoring) {
	            config.monitoring = true;
	            Promise.prototype._fireEvent = activeFireEvent;
	        } else if (!opts.monitoring && config.monitoring) {
	            config.monitoring = false;
	            Promise.prototype._fireEvent = defaultFireEvent;
	        }
	    }
	    return Promise;
	};
	
	function defaultFireEvent() { return false; }
	
	Promise.prototype._fireEvent = defaultFireEvent;
	Promise.prototype._execute = function(executor, resolve, reject) {
	    try {
	        executor(resolve, reject);
	    } catch (e) {
	        return e;
	    }
	};
	Promise.prototype._onCancel = function () {};
	Promise.prototype._setOnCancel = function (handler) { ; };
	Promise.prototype._attachCancellationCallback = function(onCancel) {
	    ;
	};
	Promise.prototype._captureStackTrace = function () {};
	Promise.prototype._attachExtraTrace = function () {};
	Promise.prototype._clearCancellationData = function() {};
	Promise.prototype._propagateFrom = function (parent, flags) {
	    ;
	    ;
	};
	
	function cancellationExecute(executor, resolve, reject) {
	    var promise = this;
	    try {
	        executor(resolve, reject, function(onCancel) {
	            if (typeof onCancel !== "function") {
	                throw new TypeError("onCancel must be a function, got: " +
	                                    util.toString(onCancel));
	            }
	            promise._attachCancellationCallback(onCancel);
	        });
	    } catch (e) {
	        return e;
	    }
	}
	
	function cancellationAttachCancellationCallback(onCancel) {
	    if (!this._isCancellable()) return this;
	
	    var previousOnCancel = this._onCancel();
	    if (previousOnCancel !== undefined) {
	        if (util.isArray(previousOnCancel)) {
	            previousOnCancel.push(onCancel);
	        } else {
	            this._setOnCancel([previousOnCancel, onCancel]);
	        }
	    } else {
	        this._setOnCancel(onCancel);
	    }
	}
	
	function cancellationOnCancel() {
	    return this._onCancelField;
	}
	
	function cancellationSetOnCancel(onCancel) {
	    this._onCancelField = onCancel;
	}
	
	function cancellationClearCancellationData() {
	    this._cancellationParent = undefined;
	    this._onCancelField = undefined;
	}
	
	function cancellationPropagateFrom(parent, flags) {
	    if ((flags & 1) !== 0) {
	        this._cancellationParent = parent;
	        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
	        if (branchesRemainingToCancel === undefined) {
	            branchesRemainingToCancel = 0;
	        }
	        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
	    }
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	
	function bindingPropagateFrom(parent, flags) {
	    if ((flags & 2) !== 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	}
	var propagateFromFunction = bindingPropagateFrom;
	
	function boundValueFunction() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	}
	
	function longStackTracesCaptureStackTrace() {
	    this._trace = new CapturedTrace(this._peekContext());
	}
	
	function longStackTracesAttachExtraTrace(error, ignoreSelf) {
	    if (canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	}
	
	function checkForgottenReturns(returnValue, promiseCreated, name, promise,
	                               parent) {
	    if (returnValue === undefined && promiseCreated !== null &&
	        wForgottenReturn) {
	        if (parent !== undefined && parent._returnedNonUndefined()) return;
	        if ((promise._bitField & 65535) === 0) return;
	
	        if (name) name = name + " ";
	        var handlerLine = "";
	        var creatorLine = "";
	        if (promiseCreated._trace) {
	            var traceLines = promiseCreated._trace.stack.split("\n");
	            var stack = cleanStack(traceLines);
	            for (var i = stack.length - 1; i >= 0; --i) {
	                var line = stack[i];
	                if (!nodeFramePattern.test(line)) {
	                    var lineMatches = line.match(parseLinePattern);
	                    if (lineMatches) {
	                        handlerLine  = "at " + lineMatches[1] +
	                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
	                    }
	                    break;
	                }
	            }
	
	            if (stack.length > 0) {
	                var firstUserLine = stack[0];
	                for (var i = 0; i < traceLines.length; ++i) {
	
	                    if (traceLines[i] === firstUserLine) {
	                        if (i > 0) {
	                            creatorLine = "\n" + traceLines[i - 1];
	                        }
	                        break;
	                    }
	                }
	
	            }
	        }
	        var msg = "a promise was created in a " + name +
	            "handler " + handlerLine + "but was not returned from it, " +
	            "see http://goo.gl/rRqMUw" +
	            creatorLine;
	        promise._warn(msg, true, promiseCreated);
	    }
	}
	
	function deprecated(name, replacement) {
	    var message = name +
	        " is deprecated and will be removed in a future version.";
	    if (replacement) message += " Use " + replacement + " instead.";
	    return warn(message);
	}
	
	function warn(message, shouldUseOwnTrace, promise) {
	    if (!config.warnings) return;
	    var warning = new Warning(message);
	    var ctx;
	    if (shouldUseOwnTrace) {
	        promise._attachExtraTrace(warning);
	    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }
	
	    if (!activeFireEvent("warning", warning)) {
	        formatAndLogError(warning, "", true);
	    }
	}
	
	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}
	
	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}
	
	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;
	
	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }
	
	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}
	
	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = "    (No stack trace)" === line ||
	            stackFramePattern.test(line);
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}
	
	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0 && error.name != "SyntaxError") {
	        stack = stack.slice(i);
	    }
	    return stack;
	}
	
	function parseStackAndMessage(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
	    };
	}
	
	function formatAndLogError(error, title, isSoft) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (util.isObject(error)) {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof printWarning === "function") {
	            printWarning(message, isSoft);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	}
	
	function fireRejectionEvent(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }
	
	    if (name === "unhandledRejection") {
	        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
	            formatAndLogError(reason, "Unhandled rejection ");
	        }
	    } else {
	        activeFireEvent(name, promise);
	    }
	}
	
	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj && typeof obj.toString === "function"
	            ? obj.toString() : util.toString(obj);
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {
	
	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}
	
	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}
	
	function longStackTracesIsSupported() {
	    return typeof captureStackTrace === "function";
	}
	
	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}
	
	function setBounds(firstLineError, lastLineError) {
	    if (!longStackTracesIsSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }
	
	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	}
	
	function CapturedTrace(parent) {
	    this._parent = parent;
	    this._promisesCreated = 0;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);
	Context.CapturedTrace = CapturedTrace;
	
	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};
	
	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
	
	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};
	
	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];
	
	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};
	
	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;
	
	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };
	
	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit += 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;
	
	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit += 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit -= 6;
	        };
	    }
	    var err = new Error();
	
	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }
	
	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit += 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit -= 6;
	        };
	    }
	
	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;
	
	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };
	
	    return null;
	
	})([]);
	
	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    printWarning = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        printWarning = function(message, isSoft) {
	            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
	            console.warn(color + message + "\u001b[0m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        printWarning = function(message, isSoft) {
	            console.warn("%c" + message,
	                        isSoft ? "color: darkorange" : "color: red");
	        };
	    }
	}
	
	var config = {
	    warnings: warnings,
	    longStackTraces: false,
	    cancellation: false,
	    monitoring: false
	};
	
	if (longStackTraces) Promise.longStackTraces();
	
	return {
	    longStackTraces: function() {
	        return config.longStackTraces;
	    },
	    warnings: function() {
	        return config.warnings;
	    },
	    cancellation: function() {
	        return config.cancellation;
	    },
	    monitoring: function() {
	        return config.monitoring;
	    },
	    propagateFromFunction: function() {
	        return propagateFromFunction;
	    },
	    boundValueFunction: function() {
	        return boundValueFunction;
	    },
	    checkForgottenReturns: checkForgottenReturns,
	    setBounds: setBounds,
	    warn: warn,
	    deprecated: deprecated,
	    CapturedTrace: CapturedTrace,
	    fireDomEvent: fireDomEvent,
	    fireGlobalEvent: fireGlobalEvent
	};
	};
	
	},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function returner() {
	    return this.value;
	}
	function thrower() {
	    throw this.reason;
	}
	
	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value instanceof Promise) value.suppressUnhandledRejections();
	    return this._then(
	        returner, undefined, undefined, {value: value}, undefined);
	};
	
	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    return this._then(
	        thrower, undefined, undefined, {reason: reason}, undefined);
	};
	
	Promise.prototype.catchThrow = function (reason) {
	    if (arguments.length <= 1) {
	        return this._then(
	            undefined, thrower, undefined, {reason: reason}, undefined);
	    } else {
	        var _reason = arguments[1];
	        var handler = function() {throw _reason;};
	        return this.caught(reason, handler);
	    }
	};
	
	Promise.prototype.catchReturn = function (value) {
	    if (arguments.length <= 1) {
	        if (value instanceof Promise) value.suppressUnhandledRejections();
	        return this._then(
	            undefined, returner, undefined, {value: value}, undefined);
	    } else {
	        var _value = arguments[1];
	        if (_value instanceof Promise) _value.suppressUnhandledRejections();
	        var handler = function() {return _value;};
	        return this.caught(value, handler);
	    }
	};
	};
	
	},{}],11:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;
	var PromiseAll = Promise.all;
	
	function promiseAllThis() {
	    return PromiseAll(this);
	}
	
	function PromiseMapSeries(promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
	}
	
	Promise.prototype.each = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, 0)
	              ._then(promiseAllThis, undefined, undefined, this, undefined);
	};
	
	Promise.prototype.mapSeries = function (fn) {
	    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
	};
	
	Promise.each = function (promises, fn) {
	    return PromiseReduce(promises, fn, INTERNAL, 0)
	              ._then(promiseAllThis, undefined, undefined, promises, undefined);
	};
	
	Promise.mapSeries = PromiseMapSeries;
	};
	
	
	},{}],12:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var Objectfreeze = es5.freeze;
	var util = _dereq_("./util");
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;
	
	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}
	
	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}
	
	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");
	
	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}
	
	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};
	
	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;
	
	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }
	
	}
	inherits(OperationalError, Error);
	
	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
	        value: errorTypes,
	        writable: false,
	        enumerable: false,
	        configurable: false
	    });
	}
	
	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};
	
	},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();
	
	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;
	
	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };
	
	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };
	
	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };
	
	    var ObjectFreeze = function (obj) {
	        return obj;
	    };
	
	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };
	
	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };
	
	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}
	
	},{}],14:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;
	
	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};
	
	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};
	
	},{}],15:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, tryConvertToPromise) {
	var util = _dereq_("./util");
	var CancellationError = Promise.CancellationError;
	var errorObj = util.errorObj;
	
	function PassThroughHandlerContext(promise, type, handler) {
	    this.promise = promise;
	    this.type = type;
	    this.handler = handler;
	    this.called = false;
	    this.cancelPromise = null;
	}
	
	PassThroughHandlerContext.prototype.isFinallyHandler = function() {
	    return this.type === 0;
	};
	
	function FinallyHandlerCancelReaction(finallyHandler) {
	    this.finallyHandler = finallyHandler;
	}
	
	FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
	    checkCancel(this.finallyHandler);
	};
	
	function checkCancel(ctx, reason) {
	    if (ctx.cancelPromise != null) {
	        if (arguments.length > 1) {
	            ctx.cancelPromise._reject(reason);
	        } else {
	            ctx.cancelPromise._cancel();
	        }
	        ctx.cancelPromise = null;
	        return true;
	    }
	    return false;
	}
	
	function succeed() {
	    return finallyHandler.call(this, this.promise._target()._settledValue());
	}
	function fail(reason) {
	    if (checkCancel(this, reason)) return;
	    errorObj.e = reason;
	    return errorObj;
	}
	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;
	
	    if (!this.called) {
	        this.called = true;
	        var ret = this.isFinallyHandler()
	            ? handler.call(promise._boundValue())
	            : handler.call(promise._boundValue(), reasonOrValue);
	        if (ret !== undefined) {
	            promise._setReturnedNonUndefined();
	            var maybePromise = tryConvertToPromise(ret, promise);
	            if (maybePromise instanceof Promise) {
	                if (this.cancelPromise != null) {
	                    if (maybePromise._isCancelled()) {
	                        var reason =
	                            new CancellationError("late cancellation observer");
	                        promise._attachExtraTrace(reason);
	                        errorObj.e = reason;
	                        return errorObj;
	                    } else if (maybePromise.isPending()) {
	                        maybePromise._attachCancellationCallback(
	                            new FinallyHandlerCancelReaction(this));
	                    }
	                }
	                return maybePromise._then(
	                    succeed, fail, undefined, this, undefined);
	            }
	        }
	    }
	
	    if (promise.isRejected()) {
	        checkCancel(this);
	        errorObj.e = reasonOrValue;
	        return errorObj;
	    } else {
	        checkCancel(this);
	        return reasonOrValue;
	    }
	}
	
	Promise.prototype._passThrough = function(handler, type, success, fail) {
	    if (typeof handler !== "function") return this.then();
	    return this._then(success,
	                      fail,
	                      undefined,
	                      new PassThroughHandlerContext(this, type, handler),
	                      undefined);
	};
	
	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThrough(handler,
	                             0,
	                             finallyHandler,
	                             finallyHandler);
	};
	
	Promise.prototype.tap = function (handler) {
	    return this._passThrough(handler, 1, finallyHandler);
	};
	
	return PassThroughHandlerContext;
	};
	
	},{"./util":36}],16:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise,
	                          Proxyable,
	                          debug) {
	var errors = _dereq_("./errors");
	var TypeError = errors.TypeError;
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];
	
	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}
	
	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    if (debug.cancellation()) {
	        var internal = new Promise(INTERNAL);
	        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
	        this._promise = internal.lastly(function() {
	            return _finallyPromise;
	        });
	        internal._captureStackTrace();
	        internal._setOnCancel(this);
	    } else {
	        var promise = this._promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	    }
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	    this._yieldedPromise = null;
	    this._cancellationPhase = false;
	}
	util.inherits(PromiseSpawn, Proxyable);
	
	PromiseSpawn.prototype._isResolved = function() {
	    return this._promise === null;
	};
	
	PromiseSpawn.prototype._cleanup = function() {
	    this._promise = this._generator = null;
	    if (debug.cancellation() && this._finallyPromise !== null) {
	        this._finallyPromise._fulfill();
	        this._finallyPromise = null;
	    }
	};
	
	PromiseSpawn.prototype._promiseCancelled = function() {
	    if (this._isResolved()) return;
	    var implementsReturn = typeof this._generator["return"] !== "undefined";
	
	    var result;
	    if (!implementsReturn) {
	        var reason = new Promise.CancellationError(
	            "generator .return() sentinel");
	        Promise.coroutine.returnSentinel = reason;
	        this._promise._attachExtraTrace(reason);
	        this._promise._pushContext();
	        result = tryCatch(this._generator["throw"]).call(this._generator,
	                                                         reason);
	        this._promise._popContext();
	    } else {
	        this._promise._pushContext();
	        result = tryCatch(this._generator["return"]).call(this._generator,
	                                                          undefined);
	        this._promise._popContext();
	    }
	    this._cancellationPhase = true;
	    this._yieldedPromise = null;
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._promiseFulfilled = function(value) {
	    this._yieldedPromise = null;
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._promiseRejected = function(reason) {
	    this._yieldedPromise = null;
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};
	
	PromiseSpawn.prototype._resultCancelled = function() {
	    if (this._yieldedPromise instanceof Promise) {
	        var promise = this._yieldedPromise;
	        this._yieldedPromise = null;
	        promise.cancel();
	    }
	};
	
	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};
	
	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._promiseFulfilled(undefined);
	};
	
	PromiseSpawn.prototype._continue = function (result) {
	    var promise = this._promise;
	    if (result === errorObj) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._rejectCallback(result.e, false);
	        }
	    }
	
	    var value = result.value;
	    if (result.done === true) {
	        this._cleanup();
	        if (this._cancellationPhase) {
	            return promise.cancel();
	        } else {
	            return promise._resolveCallback(value);
	        }
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._promiseRejected(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise = maybePromise._target();
	        var bitField = maybePromise._bitField;
	        ;
	        if (((bitField & 50397184) === 0)) {
	            this._yieldedPromise = maybePromise;
	            maybePromise._proxy(this, null);
	        } else if (((bitField & 33554432) !== 0)) {
	            Promise._async.invoke(
	                this._promiseFulfilled, this, maybePromise._value()
	            );
	        } else if (((bitField & 16777216) !== 0)) {
	            Promise._async.invoke(
	                this._promiseRejected, this, maybePromise._reason()
	            );
	        } else {
	            this._promiseCancelled();
	        }
	    }
	};
	
	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        var ret = spawn.promise();
	        spawn._generator = generator;
	        spawn._promiseFulfilled(undefined);
	        return ret;
	    };
	};
	
	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    yieldHandlers.push(fn);
	};
	
	Promise.spawn = function (generatorFunction) {
	    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};
	
	},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
	         getDomain) {
	var util = _dereq_("./util");
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;
	
	if (false) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };
	
	    var promiseSetter = function(i) {
	        return new Function("promise", "holder", "                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g, i));
	    };
	
	    var generateHolderClass = function(total) {
	        var props = new Array(total);
	        for (var i = 0; i < props.length; ++i) {
	            props[i] = "this.p" + (i+1);
	        }
	        var assignment = props.join(" = ") + " = null;";
	        var cancellationCode= "var promise;\n" + props.map(function(prop) {
	            return "                                                         \n\
	                promise = " + prop + ";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";
	        }).join("\n");
	        var passedArguments = props.join(", ");
	        var name = "Holder$" + total;
	
	
	        var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.asyncNeeded = true;                                     \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	                                                                             \n\
	            [TheName].prototype._callFunction = function(promise) {          \n\
	                promise._pushContext();                                      \n\
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
	                promise._popContext();                                       \n\
	                if (ret === errorObj) {                                      \n\
	                    promise._rejectCallback(ret.e, false);                   \n\
	                } else {                                                     \n\
	                    promise._resolveCallback(ret);                           \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    if (this.asyncNeeded) {                                  \n\
	                        async.invoke(this._callFunction, this, promise);     \n\
	                    } else {                                                 \n\
	                        this._callFunction(promise);                         \n\
	                    }                                                        \n\
	                                                                             \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise, async);                               \n\
	        ";
	
	        code = code.replace(/\[TheName\]/g, name)
	            .replace(/\[TheTotal\]/g, total)
	            .replace(/\[ThePassedArguments\]/g, passedArguments)
	            .replace(/\[TheProperties\]/g, assignment)
	            .replace(/\[CancellationCode\]/g, cancellationCode);
	
	        return new Function("tryCatch", "errorObj", "Promise", "async", code)
	                           (tryCatch, errorObj, Promise, async);
	    };
	
	    var holderClasses = [];
	    var thenCallbacks = [];
	    var promiseSetters = [];
	
	    for (var i = 0; i < 8; ++i) {
	        holderClasses.push(generateHolderClass(i + 1));
	        thenCallbacks.push(thenCallback(i + 1));
	        promiseSetters.push(promiseSetter(i + 1));
	    }
	
	    reject = function (reason) {
	        this._reject(reason);
	    };
	}}
	
	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (false) {
	            if (last <= 8 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var HolderClass = holderClasses[last - 1];
	                var holder = new HolderClass(fn);
	                var callbacks = thenCallbacks;
	
	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        var bitField = maybePromise._bitField;
	                        ;
	                        if (((bitField & 50397184) === 0)) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                            promiseSetters[i](maybePromise, holder);
	                            holder.asyncNeeded = false;
	                        } else if (((bitField & 33554432) !== 0)) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else if (((bitField & 16777216) !== 0)) {
	                            ret._reject(maybePromise._reason());
	                        } else {
	                            ret._cancel();
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	
	                if (!ret._isFateSealed()) {
	                    if (holder.asyncNeeded) {
	                        var domain = getDomain();
	                        if (domain !== null) {
	                            holder.fn = util.domainBind(domain, holder.fn);
	                        }
	                    }
	                    ret._setAsyncGuaranteed();
	                    ret._setOnCancel(holder);
	                }
	                return ret;
	            }
	        }
	    }
	    var args = [].slice.call(arguments);;
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};
	
	};
	
	},{"./util":36}],18:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var async = Promise._async;
	
	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : util.domainBind(domain, fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = [];
	    async.invoke(this._asyncInit, this, undefined);
	}
	util.inherits(MappingPromiseArray, PromiseArray);
	
	MappingPromiseArray.prototype._asyncInit = function() {
	    this._init$(undefined, -2);
	};
	
	MappingPromiseArray.prototype._init = function () {};
	
	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;
	
	    if (index < 0) {
	        index = (index * -1) - 1;
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return true;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return false;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;
	
	        var promise = this._promise;
	        var callback = this._callback;
	        var receiver = promise._boundValue();
	        promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        var promiseCreated = promise._popContext();
	        debug.checkForgottenReturns(
	            ret,
	            promiseCreated,
	            preservedValues !== null ? "Promise.filter" : "Promise.map",
	            promise
	        );
	        if (ret === errorObj) {
	            this._reject(ret.e);
	            return true;
	        }
	
	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            var bitField = maybePromise._bitField;
	            ;
	            if (((bitField & 50397184) === 0)) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = maybePromise;
	                maybePromise._proxy(this, (index + 1) * -1);
	                return false;
	            } else if (((bitField & 33554432) !== 0)) {
	                ret = maybePromise._value();
	            } else if (((bitField & 16777216) !== 0)) {
	                this._reject(maybePromise._reason());
	                return true;
	            } else {
	                this._cancel();
	                return true;
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }
	        return true;
	    }
	    return false;
	};
	
	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};
	
	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};
	
	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};
	
	function map(promises, fn, options, _filter) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	
	    var limit = 0;
	    if (options !== undefined) {
	        if (typeof options === "object" && options !== null) {
	            if (typeof options.concurrency !== "number") {
	                return Promise.reject(
	                    new TypeError("'concurrency' must be a number but it is " +
	                                    util.classString(options.concurrency)));
	            }
	            limit = options.concurrency;
	        } else {
	            return Promise.reject(new TypeError(
	                            "options argument must be an object but it is " +
	                             util.classString(options)));
	        }
	    }
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
	}
	
	Promise.prototype.map = function (fn, options) {
	    return map(this, fn, options, null);
	};
	
	Promise.map = function (promises, fn, options, _filter) {
	    return map(promises, fn, options, _filter);
	};
	
	
	};
	
	},{"./util":36}],19:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	
	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        var promiseCreated = ret._popContext();
	        debug.checkForgottenReturns(
	            value, promiseCreated, "Promise.method", ret);
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};
	
	Promise.attempt = Promise["try"] = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value;
	    if (arguments.length > 1) {
	        debug.deprecated("calling Promise.try with more than 1 argument");
	        var arg = arguments[1];
	        var ctx = arguments[2];
	        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
	                                  : tryCatch(fn).call(ctx, arg);
	    } else {
	        value = tryCatch(fn)();
	    }
	    var promiseCreated = ret._popContext();
	    debug.checkForgottenReturns(
	        value, promiseCreated, "Promise.try", ret);
	    ret._resolveFromSyncValue(value);
	    return ret;
	};
	
	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};
	
	},{"./util":36}],20:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = _dereq_("./errors");
	var OperationalError = errors.OperationalError;
	var es5 = _dereq_("./es5");
	
	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}
	
	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}
	
	function nodebackForPromise(promise, multiArgs) {
	    return function(err, value) {
	        if (promise === null) return;
	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (!multiArgs) {
	            promise._fulfill(value);
	        } else {
	            var args = [].slice.call(arguments, 1);;
	            promise._fulfill(args);
	        }
	        promise = null;
	    };
	}
	
	module.exports = nodebackForPromise;
	
	},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	var util = _dereq_("./util");
	var async = Promise._async;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	
	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	
	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var newReason = new Error(reason + "");
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	
	Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
	                                                                     options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};
	
	},{"./util":36}],22:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var reflectHandler = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};
	function Proxyable() {}
	var UNDEFINED_BINDING = {};
	var util = _dereq_("./util");
	
	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);
	
	var es5 = _dereq_("./es5");
	var Async = _dereq_("./async");
	var async = new Async();
	es5.defineProperty(Promise, "_async", {value: async});
	var errors = _dereq_("./errors");
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	var CancellationError = Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {};
	var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
	var PromiseArray =
	    _dereq_("./promise_array")(Promise, INTERNAL,
	                               tryConvertToPromise, apiRejection, Proxyable);
	var Context = _dereq_("./context")(Promise);
	 /*jshint unused:false*/
	var createContext = Context.create;
	var debug = _dereq_("./debuggability")(Promise, Context);
	var CapturedTrace = debug.CapturedTrace;
	var PassThroughHandlerContext =
	    _dereq_("./finally")(Promise, tryConvertToPromise);
	var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
	var nodebackForPromise = _dereq_("./nodeback");
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	function check(self, executor) {
	    if (typeof executor !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(executor));
	    }
	    if (self.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	}
	
	function Promise(executor) {
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    if (executor !== INTERNAL) {
	        check(this, executor);
	        this._resolveFromExecutor(executor);
	    }
	    this._promiseCreated();
	    this._fireEvent("promiseCreated", this);
	}
	
	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};
	
	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (util.isObject(item)) {
	                catchInstances[j++] = item;
	            } else {
	                return apiRejection("expecting an object but got " +
	                    "A catch statement predicate " + util.classString(item));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        return this.then(undefined, catchFilter(catchInstances, fn, this));
	    }
	    return this.then(undefined, fn);
	};
	
	Promise.prototype.reflect = function () {
	    return this._then(reflectHandler,
	        reflectHandler, undefined, this, undefined);
	};
	
	Promise.prototype.then = function (didFulfill, didReject) {
	    if (debug.warnings() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, undefined, undefined, undefined);
	};
	
	Promise.prototype.done = function (didFulfill, didReject) {
	    var promise =
	        this._then(didFulfill, didReject, undefined, undefined, undefined);
	    promise._setIsFinal();
	};
	
	Promise.prototype.spread = function (fn) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
	};
	
	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};
	
	Promise.prototype.all = function () {
	    if (arguments.length > 0) {
	        this._warn(".all() was passed arguments but it does not take any");
	    }
	    return new PromiseArray(this).promise();
	};
	
	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};
	
	Promise.getNewLibraryCopy = module.exports;
	
	Promise.is = function (val) {
	    return val instanceof Promise;
	};
	
	Promise.fromNode = Promise.fromCallback = function(fn) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
	                                         : false;
	    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true);
	    }
	    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
	    return ret;
	};
	
	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};
	
	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._setFulfilled();
	        ret._rejectionHandler0 = obj;
	    }
	    return ret;
	};
	
	Promise.resolve = Promise.fulfilled = Promise.cast;
	
	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};
	
	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    return async.setScheduler(fn);
	};
	
	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    _,    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
	    var target = this._target();
	    var bitField = target._bitField;
	
	    if (!haveInternalData) {
	        promise._propagateFrom(this, 3);
	        promise._captureStackTrace();
	        if (receiver === undefined &&
	            ((this._bitField & 2097152) !== 0)) {
	            if (!((bitField & 50397184) === 0)) {
	                receiver = this._boundValue();
	            } else {
	                receiver = target === this ? undefined : this._boundTo;
	            }
	        }
	        this._fireEvent("promiseChained", this, promise);
	    }
	
	    var domain = getDomain();
	    if (!((bitField & 50397184) === 0)) {
	        var handler, value, settler = target._settlePromiseCtx;
	        if (((bitField & 33554432) !== 0)) {
	            value = target._rejectionHandler0;
	            handler = didFulfill;
	        } else if (((bitField & 16777216) !== 0)) {
	            value = target._fulfillmentHandler0;
	            handler = didReject;
	            target._unsetRejectionIsUnhandled();
	        } else {
	            settler = target._settlePromiseLateCancellationObserver;
	            value = new CancellationError("late cancellation observer");
	            target._attachExtraTrace(value);
	            handler = didReject;
	        }
	
	        async.invoke(settler, target, {
	            handler: domain === null ? handler
	                : (typeof handler === "function" &&
	                    util.domainBind(domain, handler)),
	            promise: promise,
	            receiver: receiver,
	            value: value
	        });
	    } else {
	        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
	    }
	
	    return promise;
	};
	
	Promise.prototype._length = function () {
	    return this._bitField & 65535;
	};
	
	Promise.prototype._isFateSealed = function () {
	    return (this._bitField & 117506048) !== 0;
	};
	
	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 67108864) === 67108864;
	};
	
	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -65536) |
	        (len & 65535);
	};
	
	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 33554432;
	    this._fireEvent("promiseFulfilled", this);
	};
	
	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 16777216;
	    this._fireEvent("promiseRejected", this);
	};
	
	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 67108864;
	    this._fireEvent("promiseResolved", this);
	};
	
	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 4194304;
	};
	
	Promise.prototype._isFinal = function () {
	    return (this._bitField & 4194304) > 0;
	};
	
	Promise.prototype._unsetCancelled = function() {
	    this._bitField = this._bitField & (~65536);
	};
	
	Promise.prototype._setCancelled = function() {
	    this._bitField = this._bitField | 65536;
	    this._fireEvent("promiseCancelled", this);
	};
	
	Promise.prototype._setWillBeCancelled = function() {
	    this._bitField = this._bitField | 8388608;
	};
	
	Promise.prototype._setAsyncGuaranteed = function() {
	    if (async.hasCustomScheduler()) return;
	    this._bitField = this._bitField | 134217728;
	};
	
	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0 ? this._receiver0 : this[
	            index * 4 - 4 + 3];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};
	
	Promise.prototype._promiseAt = function (index) {
	    return this[
	            index * 4 - 4 + 2];
	};
	
	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 0];
	};
	
	Promise.prototype._rejectionHandlerAt = function (index) {
	    return this[
	            index * 4 - 4 + 1];
	};
	
	Promise.prototype._boundValue = function() {};
	
	Promise.prototype._migrateCallback0 = function (follower) {
	    var bitField = follower._bitField;
	    var fulfill = follower._fulfillmentHandler0;
	    var reject = follower._rejectionHandler0;
	    var promise = follower._promise0;
	    var receiver = follower._receiverAt(0);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};
	
	Promise.prototype._migrateCallbackAt = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, promise, receiver, null);
	};
	
	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();
	
	    if (index >= 65535 - 4) {
	        index = 0;
	        this._setLength(0);
	    }
	
	    if (index === 0) {
	        this._promise0 = promise;
	        this._receiver0 = receiver;
	        if (typeof fulfill === "function") {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : util.domainBind(domain, fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : util.domainBind(domain, reject);
	        }
	    } else {
	        var base = index * 4 - 4;
	        this[base + 2] = promise;
	        this[base + 3] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : util.domainBind(domain, fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : util.domainBind(domain, reject);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};
	
	Promise.prototype._proxy = function (proxyable, arg) {
	    this._addCallbacks(undefined, undefined, arg, proxyable, null);
	};
	
	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (((this._bitField & 117506048) !== 0)) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);
	
	    if (shouldBind) this._propagateFrom(maybePromise, 2);
	
	    var promise = maybePromise._target();
	
	    if (promise === this) {
	        this._reject(makeSelfResolutionError());
	        return;
	    }
	
	    var bitField = promise._bitField;
	    if (((bitField & 50397184) === 0)) {
	        var len = this._length();
	        if (len > 0) promise._migrateCallback0(this);
	        for (var i = 1; i < len; ++i) {
	            promise._migrateCallbackAt(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (((bitField & 33554432) !== 0)) {
	        this._fulfill(promise._value());
	    } else if (((bitField & 16777216) !== 0)) {
	        this._reject(promise._reason());
	    } else {
	        var reason = new CancellationError("late cancellation observer");
	        promise._attachExtraTrace(reason);
	        this._reject(reason);
	    }
	};
	
	Promise.prototype._rejectCallback =
	function(reason, synchronous, ignoreNonErrorWarnings) {
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
	        var message = "a promise was rejected with a non-error: " +
	            util.classString(reason);
	        this._warn(message, true);
	    }
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason);
	};
	
	Promise.prototype._resolveFromExecutor = function (executor) {
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = this._execute(executor, function(value) {
	        promise._resolveCallback(value);
	    }, function (reason) {
	        promise._rejectCallback(reason, synchronous);
	    });
	    synchronous = false;
	    this._popContext();
	
	    if (r !== undefined) {
	        promise._rejectCallback(r, true);
	    }
	};
	
	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    var bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY) {
	        if (!value || typeof value.length !== "number") {
	            x = errorObj;
	            x.e = new TypeError("cannot .spread() a non-array: " +
	                                    util.classString(value));
	        } else {
	            x = tryCatch(handler).apply(this._boundValue(), value);
	        }
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    var promiseCreated = promise._popContext();
	    bitField = promise._bitField;
	    if (((bitField & 65536) !== 0)) return;
	
	    if (x === NEXT_FILTER) {
	        promise._reject(value);
	    } else if (x === errorObj) {
	        promise._rejectCallback(x.e, false);
	    } else {
	        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
	        promise._resolveCallback(x);
	    }
	};
	
	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};
	
	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};
	
	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};
	
	Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
	    var isPromise = promise instanceof Promise;
	    var bitField = this._bitField;
	    var asyncGuaranteed = ((bitField & 134217728) !== 0);
	    if (((bitField & 65536) !== 0)) {
	        if (isPromise) promise._invokeInternalOnCancel();
	
	        if (receiver instanceof PassThroughHandlerContext &&
	            receiver.isFinallyHandler()) {
	            receiver.cancelPromise = promise;
	            if (tryCatch(handler).call(receiver, value) === errorObj) {
	                promise._reject(errorObj.e);
	            }
	        } else if (handler === reflectHandler) {
	            promise._fulfill(reflectHandler.call(receiver));
	        } else if (receiver instanceof Proxyable) {
	            receiver._promiseCancelled(promise);
	        } else if (isPromise || promise instanceof PromiseArray) {
	            promise._cancel();
	        } else {
	            receiver.cancel();
	        }
	    } else if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            if (asyncGuaranteed) promise._setAsyncGuaranteed();
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof Proxyable) {
	        if (!receiver._isResolved()) {
	            if (((bitField & 33554432) !== 0)) {
	                receiver._promiseFulfilled(value, promise);
	            } else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (asyncGuaranteed) promise._setAsyncGuaranteed();
	        if (((bitField & 33554432) !== 0)) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value);
	        }
	    }
	};
	
	Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
	    var handler = ctx.handler;
	    var promise = ctx.promise;
	    var receiver = ctx.receiver;
	    var value = ctx.value;
	    if (typeof handler === "function") {
	        if (!(promise instanceof Promise)) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (promise instanceof Promise) {
	        promise._reject(value);
	    }
	};
	
	Promise.prototype._settlePromiseCtx = function(ctx) {
	    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
	};
	
	Promise.prototype._settlePromise0 = function(handler, value, bitField) {
	    var promise = this._promise0;
	    var receiver = this._receiverAt(0);
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settlePromise(promise, handler, receiver, value);
	};
	
	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    var base = index * 4 - 4;
	    this[base + 2] =
	    this[base + 3] =
	    this[base + 0] =
	    this[base + 1] = undefined;
	};
	
	Promise.prototype._fulfill = function (value) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._reject(err);
	    }
	    this._setFulfilled();
	    this._rejectionHandler0 = value;
	
	    if ((bitField & 65535) > 0) {
	        if (((bitField & 134217728) !== 0)) {
	            this._settlePromises();
	        } else {
	            async.settlePromises(this);
	        }
	    }
	};
	
	Promise.prototype._reject = function (reason) {
	    var bitField = this._bitField;
	    if (((bitField & 117506048) >>> 16)) return;
	    this._setRejected();
	    this._fulfillmentHandler0 = reason;
	
	    if (this._isFinal()) {
	        return async.fatalError(reason, util.isNode);
	    }
	
	    if ((bitField & 65535) > 0) {
	        async.settlePromises(this);
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};
	
	Promise.prototype._fulfillPromises = function (len, value) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._fulfillmentHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, value);
	    }
	};
	
	Promise.prototype._rejectPromises = function (len, reason) {
	    for (var i = 1; i < len; i++) {
	        var handler = this._rejectionHandlerAt(i);
	        var promise = this._promiseAt(i);
	        var receiver = this._receiverAt(i);
	        this._clearCallbackDataAtIndex(i);
	        this._settlePromise(promise, handler, receiver, reason);
	    }
	};
	
	Promise.prototype._settlePromises = function () {
	    var bitField = this._bitField;
	    var len = (bitField & 65535);
	
	    if (len > 0) {
	        if (((bitField & 16842752) !== 0)) {
	            var reason = this._fulfillmentHandler0;
	            this._settlePromise0(this._rejectionHandler0, reason, bitField);
	            this._rejectPromises(len, reason);
	        } else {
	            var value = this._rejectionHandler0;
	            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
	            this._fulfillPromises(len, value);
	        }
	        this._setLength(0);
	    }
	    this._clearCancellationData();
	};
	
	Promise.prototype._settledValue = function() {
	    var bitField = this._bitField;
	    if (((bitField & 33554432) !== 0)) {
	        return this._rejectionHandler0;
	    } else if (((bitField & 16777216) !== 0)) {
	        return this._fulfillmentHandler0;
	    }
	};
	
	function deferResolve(v) {this.promise._resolveCallback(v);}
	function deferReject(v) {this.promise._rejectCallback(v, false);}
	
	Promise.defer = Promise.pending = function() {
	    debug.deprecated("Promise.defer", "new Promise");
	    var promise = new Promise(INTERNAL);
	    return {
	        promise: promise,
	        resolve: deferResolve,
	        reject: deferReject
	    };
	};
	
	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);
	
	_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
	    debug);
	_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
	_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
	_dereq_("./direct_resolve")(Promise);
	_dereq_("./synchronous_inspection")(Promise);
	_dereq_("./join")(
	    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
	Promise.Promise = Promise;
	Promise.version = "3.4.7";
	_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./call_get.js')(Promise);
	_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
	_dereq_('./timers.js')(Promise, INTERNAL, debug);
	_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
	_dereq_('./nodeify.js')(Promise);
	_dereq_('./promisify.js')(Promise, INTERNAL);
	_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	_dereq_('./settle.js')(Promise, PromiseArray, debug);
	_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
	_dereq_('./filter.js')(Promise, INTERNAL);
	_dereq_('./each.js')(Promise, INTERNAL);
	_dereq_('./any.js')(Promise);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    debug.setBounds(Async.firstLineError, util.lastLineError);               
	    return Promise;                                                          
	
	};
	
	},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection, Proxyable) {
	var util = _dereq_("./util");
	var isArray = util.isArray;
	
	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    }
	}
	
	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    if (values instanceof Promise) {
	        promise._propagateFrom(values, 3);
	    }
	    promise._setOnCancel(this);
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	util.inherits(PromiseArray, Proxyable);
	
	PromiseArray.prototype.length = function () {
	    return this._length;
	};
	
	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};
	
	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        var bitField = values._bitField;
	        ;
	        this._values = values;
	
	        if (((bitField & 50397184) === 0)) {
	            this._promise._setAsyncGuaranteed();
	            return values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	        } else if (((bitField & 33554432) !== 0)) {
	            values = values._value();
	        } else if (((bitField & 16777216) !== 0)) {
	            return this._reject(values._reason());
	        } else {
	            return this._cancel();
	        }
	    }
	    values = util.asArray(values);
	    if (values === null) {
	        var err = apiRejection(
	            "expecting an array or an iterable object but got " + util.classString(values)).reason();
	        this._promise._rejectCallback(err, false);
	        return;
	    }
	
	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    this._iterate(values);
	};
	
	PromiseArray.prototype._iterate = function(values) {
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var result = this._promise;
	    var isResolved = false;
	    var bitField = null;
	    for (var i = 0; i < len; ++i) {
	        var maybePromise = tryConvertToPromise(values[i], result);
	
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            bitField = maybePromise._bitField;
	        } else {
	            bitField = null;
	        }
	
	        if (isResolved) {
	            if (bitField !== null) {
	                maybePromise.suppressUnhandledRejections();
	            }
	        } else if (bitField !== null) {
	            if (((bitField & 50397184) === 0)) {
	                maybePromise._proxy(this, i);
	                this._values[i] = maybePromise;
	            } else if (((bitField & 33554432) !== 0)) {
	                isResolved = this._promiseFulfilled(maybePromise._value(), i);
	            } else if (((bitField & 16777216) !== 0)) {
	                isResolved = this._promiseRejected(maybePromise._reason(), i);
	            } else {
	                isResolved = this._promiseCancelled(i);
	            }
	        } else {
	            isResolved = this._promiseFulfilled(maybePromise, i);
	        }
	    }
	    if (!isResolved) result._setAsyncGuaranteed();
	};
	
	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};
	
	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};
	
	PromiseArray.prototype._cancel = function() {
	    if (this._isResolved() || !this._promise._isCancellable()) return;
	    this._values = null;
	    this._promise._cancel();
	};
	
	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false);
	};
	
	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};
	
	PromiseArray.prototype._promiseCancelled = function() {
	    this._cancel();
	    return true;
	};
	
	PromiseArray.prototype._promiseRejected = function (reason) {
	    this._totalResolved++;
	    this._reject(reason);
	    return true;
	};
	
	PromiseArray.prototype._resultCancelled = function() {
	    if (this._isResolved()) return;
	    var values = this._values;
	    this._cancel();
	    if (values instanceof Promise) {
	        values.cancel();
	    } else {
	        for (var i = 0; i < values.length; ++i) {
	            if (values[i] instanceof Promise) {
	                values[i].cancel();
	            }
	        }
	    }
	};
	
	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};
	
	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};
	
	return PromiseArray;
	};
	
	},{"./util":36}],24:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = _dereq_("./util");
	var nodebackForPromise = _dereq_("./nodeback");
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = _dereq_("./errors").TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");
	
	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};
	
	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}
	
	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}
	
	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}
	
	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}
	
	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};
	
	var makeNodePromisifiedEval;
	if (false) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};
	
	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};
	
	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};
	
	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};
	
	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn, _, multiArgs) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;
	
	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }
	
	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }
	
	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }
	
	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";
	    var body = "'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode);
	    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL",
	                        body)(
	                    Promise,
	                    fn,
	                    receiver,
	                    withAppended,
	                    maybeWrapAsError,
	                    nodebackForPromise,
	                    util.tryCatch,
	                    util.errorObj,
	                    util.notEnumerableProp,
	                    INTERNAL);
	};
	}
	
	function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise, multiArgs);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}
	
	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;
	
	function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);
	
	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key,
	                                           fn, suffix, multiArgs);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}
	
	function promisify(callback, receiver, multiArgs) {
	    return makeNodePromisified(callback, receiver, undefined,
	                                callback, null, multiArgs);
	}
	
	Promise.promisify = function (fn, options) {
	    if (typeof fn !== "function") {
	        throw new TypeError("expecting a function but got " + util.classString(fn));
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    options = Object(options);
	    var receiver = options.context === undefined ? THIS : options.context;
	    var multiArgs = !!options.multiArgs;
	    var ret = promisify(fn, receiver, multiArgs);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};
	
	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    options = Object(options);
	    var multiArgs = !!options.multiArgs;
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;
	
	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	
	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier,
	                multiArgs);
	            promisifyAll(value, suffix, filter, promisifier, multiArgs);
	        }
	    }
	
	    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
	};
	};
	
	
	},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");
	var isObject = util.isObject;
	var es5 = _dereq_("./es5");
	var Es6Map;
	if (typeof Map === "function") Es6Map = Map;
	
	var mapToEntries = (function() {
	    var index = 0;
	    var size = 0;
	
	    function extractEntry(value, key) {
	        this[index] = value;
	        this[index + size] = key;
	        index++;
	    }
	
	    return function mapToEntries(map) {
	        size = map.size;
	        index = 0;
	        var ret = new Array(map.size * 2);
	        map.forEach(extractEntry, ret);
	        return ret;
	    };
	})();
	
	var entriesToMap = function(entries) {
	    var ret = new Es6Map();
	    var length = entries.length / 2 | 0;
	    for (var i = 0; i < length; ++i) {
	        var key = entries[length + i];
	        var value = entries[i];
	        ret.set(key, value);
	    }
	    return ret;
	};
	
	function PropertiesPromiseArray(obj) {
	    var isMap = false;
	    var entries;
	    if (Es6Map !== undefined && obj instanceof Es6Map) {
	        entries = mapToEntries(obj);
	        isMap = true;
	    } else {
	        var keys = es5.keys(obj);
	        var len = keys.length;
	        entries = new Array(len * 2);
	        for (var i = 0; i < len; ++i) {
	            var key = keys[i];
	            entries[i] = obj[key];
	            entries[i + len] = key;
	        }
	    }
	    this.constructor$(entries);
	    this._isMap = isMap;
	    this._init$(undefined, -3);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);
	
	PropertiesPromiseArray.prototype._init = function () {};
	
	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val;
	        if (this._isMap) {
	            val = entriesToMap(this._values);
	        } else {
	            val = {};
	            var keyOffset = this.length();
	            for (var i = 0, len = this.length(); i < len; ++i) {
	                val[this._values[i + keyOffset]] = this._values[i];
	            }
	        }
	        this._resolve(val);
	        return true;
	    }
	    return false;
	};
	
	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};
	
	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};
	
	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);
	
	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }
	
	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 2);
	    }
	    return ret;
	}
	
	Promise.prototype.props = function () {
	    return props(this);
	};
	
	Promise.props = function (promises) {
	    return props(promises);
	};
	};
	
	},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}
	
	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}
	
	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};
	
	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};
	
	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};
	
	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];
	
	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};
	
	Queue.prototype.length = function () {
	    return this._length;
	};
	
	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};
	
	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};
	
	module.exports = Queue;
	
	},{}],27:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = _dereq_("./util");
	
	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};
	
	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);
	
	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else {
	        promises = util.asArray(promises);
	        if (promises === null)
	            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
	    }
	
	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 3);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];
	
	        if (val === undefined && !(i in promises)) {
	            continue;
	        }
	
	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}
	
	Promise.race = function (promises) {
	    return race(promises, undefined);
	};
	
	Promise.prototype.race = function () {
	    return race(this, undefined);
	};
	
	};
	
	},{"./util":36}],28:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL,
	                          debug) {
	var getDomain = Promise._getDomain;
	var util = _dereq_("./util");
	var tryCatch = util.tryCatch;
	
	function ReductionPromiseArray(promises, fn, initialValue, _each) {
	    this.constructor$(promises);
	    var domain = getDomain();
	    this._fn = domain === null ? fn : util.domainBind(domain, fn);
	    if (initialValue !== undefined) {
	        initialValue = Promise.resolve(initialValue);
	        initialValue._attachCancellationCallback(this);
	    }
	    this._initialValue = initialValue;
	    this._currentCancellable = null;
	    if(_each === INTERNAL) {
	        this._eachValues = Array(this._length);
	    } else if (_each === 0) {
	        this._eachValues = null;
	    } else {
	        this._eachValues = undefined;
	    }
	    this._promise._captureStackTrace();
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);
	
	ReductionPromiseArray.prototype._gotAccum = function(accum) {
	    if (this._eachValues !== undefined && 
	        this._eachValues !== null && 
	        accum !== INTERNAL) {
	        this._eachValues.push(accum);
	    }
	};
	
	ReductionPromiseArray.prototype._eachComplete = function(value) {
	    if (this._eachValues !== null) {
	        this._eachValues.push(value);
	    }
	    return this._eachValues;
	};
	
	ReductionPromiseArray.prototype._init = function() {};
	
	ReductionPromiseArray.prototype._resolveEmptyArray = function() {
	    this._resolve(this._eachValues !== undefined ? this._eachValues
	                                                 : this._initialValue);
	};
	
	ReductionPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};
	
	ReductionPromiseArray.prototype._resolve = function(value) {
	    this._promise._resolveCallback(value);
	    this._values = null;
	};
	
	ReductionPromiseArray.prototype._resultCancelled = function(sender) {
	    if (sender === this._initialValue) return this._cancel();
	    if (this._isResolved()) return;
	    this._resultCancelled$();
	    if (this._currentCancellable instanceof Promise) {
	        this._currentCancellable.cancel();
	    }
	    if (this._initialValue instanceof Promise) {
	        this._initialValue.cancel();
	    }
	};
	
	ReductionPromiseArray.prototype._iterate = function (values) {
	    this._values = values;
	    var value;
	    var i;
	    var length = values.length;
	    if (this._initialValue !== undefined) {
	        value = this._initialValue;
	        i = 0;
	    } else {
	        value = Promise.resolve(values[0]);
	        i = 1;
	    }
	
	    this._currentCancellable = value;
	
	    if (!value.isRejected()) {
	        for (; i < length; ++i) {
	            var ctx = {
	                accum: null,
	                value: values[i],
	                index: i,
	                length: length,
	                array: this
	            };
	            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
	        }
	    }
	
	    if (this._eachValues !== undefined) {
	        value = value
	            ._then(this._eachComplete, undefined, undefined, this, undefined);
	    }
	    value._then(completed, completed, undefined, value, this);
	};
	
	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};
	
	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};
	
	function completed(valueOrReason, array) {
	    if (this.isFulfilled()) {
	        array._resolve(valueOrReason);
	    } else {
	        array._reject(valueOrReason);
	    }
	}
	
	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") {
	        return apiRejection("expecting a function but got " + util.classString(fn));
	    }
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}
	
	function gotAccum(accum) {
	    this.accum = accum;
	    this.array._gotAccum(accum);
	    var value = tryConvertToPromise(this.value, this.array._promise);
	    if (value instanceof Promise) {
	        this.array._currentCancellable = value;
	        return value._then(gotValue, undefined, undefined, this, undefined);
	    } else {
	        return gotValue.call(this, value);
	    }
	}
	
	function gotValue(value) {
	    var array = this.array;
	    var promise = array._promise;
	    var fn = tryCatch(array._fn);
	    promise._pushContext();
	    var ret;
	    if (array._eachValues !== undefined) {
	        ret = fn.call(promise._boundValue(), value, this.index, this.length);
	    } else {
	        ret = fn.call(promise._boundValue(),
	                              this.accum, value, this.index, this.length);
	    }
	    if (ret instanceof Promise) {
	        array._currentCancellable = ret;
	    }
	    var promiseCreated = promise._popContext();
	    debug.checkForgottenReturns(
	        ret,
	        promiseCreated,
	        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
	        promise
	    );
	    return ret;
	}
	};
	
	},{"./util":36}],29:[function(_dereq_,module,exports){
	"use strict";
	var util = _dereq_("./util");
	var schedule;
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	};
	var NativePromise = util.getNativePromise();
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if (typeof NativePromise === "function" &&
	           typeof NativePromise.resolve === "function") {
	    var nativePromise = NativePromise.resolve();
	    schedule = function(fn) {
	        nativePromise.then(fn);
	    };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            (window.navigator.standalone || window.cordova))) {
	    schedule = (function() {
	        var div = document.createElement("div");
	        var opts = {attributes: true};
	        var toggleScheduled = false;
	        var div2 = document.createElement("div");
	        var o2 = new MutationObserver(function() {
	            div.classList.toggle("foo");
	            toggleScheduled = false;
	        });
	        o2.observe(div2, opts);
	
	        var scheduleToggle = function() {
	            if (toggleScheduled) return;
	                toggleScheduled = true;
	                div2.classList.toggle("foo");
	            };
	
	            return function schedule(fn) {
	            var o = new MutationObserver(function() {
	                o.disconnect();
	                fn();
	            });
	            o.observe(div, opts);
	            scheduleToggle();
	        };
	    })();
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;
	
	},{"./util":36}],30:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	    function(Promise, PromiseArray, debug) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = _dereq_("./util");
	
	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);
	
	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	        return true;
	    }
	    return false;
	};
	
	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 33554432;
	    ret._settledValueField = value;
	    return this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 16777216;
	    ret._settledValueField = reason;
	    return this._promiseResolved(index, ret);
	};
	
	Promise.settle = function (promises) {
	    debug.deprecated(".settle()", ".reflect()");
	    return new SettledPromiseArray(promises).promise();
	};
	
	Promise.prototype.settle = function () {
	    return Promise.settle(this);
	};
	};
	
	},{"./util":36}],31:[function(_dereq_,module,exports){
	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = _dereq_("./util");
	var RangeError = _dereq_("./errors").RangeError;
	var AggregateError = _dereq_("./errors").AggregateError;
	var isArray = util.isArray;
	var CANCELLATION = {};
	
	
	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);
	
	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};
	
	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};
	
	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};
	
	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};
	
	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};
	
	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	        return true;
	    }
	    return false;
	
	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    return this._checkOutcome();
	};
	
	SomePromiseArray.prototype._promiseCancelled = function () {
	    if (this._values instanceof Promise || this._values == null) {
	        return this._cancel();
	    }
	    this._addRejected(CANCELLATION);
	    return this._checkOutcome();
	};
	
	SomePromiseArray.prototype._checkOutcome = function() {
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            if (this._values[i] !== CANCELLATION) {
	                e.push(this._values[i]);
	            }
	        }
	        if (e.length > 0) {
	            this._reject(e);
	        } else {
	            this._cancel();
	        }
	        return true;
	    }
	    return false;
	};
	
	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};
	
	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};
	
	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};
	
	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};
	
	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};
	
	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};
	
	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};
	
	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}
	
	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};
	
	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};
	
	Promise._SomePromiseArray = SomePromiseArray;
	};
	
	},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValueField = promise._isFateSealed()
	            ? promise._settledValue() : undefined;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValueField = undefined;
	    }
	}
	
	PromiseInspection.prototype._settledValue = function() {
	    return this._settledValueField;
	};
	
	var value = PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};
	
	var reason = PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
	    }
	    return this._settledValue();
	};
	
	var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
	    return (this._bitField & 33554432) !== 0;
	};
	
	var isRejected = PromiseInspection.prototype.isRejected = function () {
	    return (this._bitField & 16777216) !== 0;
	};
	
	var isPending = PromiseInspection.prototype.isPending = function () {
	    return (this._bitField & 50397184) === 0;
	};
	
	var isResolved = PromiseInspection.prototype.isResolved = function () {
	    return (this._bitField & 50331648) !== 0;
	};
	
	PromiseInspection.prototype.isCancelled = function() {
	    return (this._bitField & 8454144) !== 0;
	};
	
	Promise.prototype.__isCancelled = function() {
	    return (this._bitField & 65536) === 65536;
	};
	
	Promise.prototype._isCancelled = function() {
	    return this._target().__isCancelled();
	};
	
	Promise.prototype.isCancelled = function() {
	    return (this._target()._bitField & 8454144) !== 0;
	};
	
	Promise.prototype.isPending = function() {
	    return isPending.call(this._target());
	};
	
	Promise.prototype.isRejected = function() {
	    return isRejected.call(this._target());
	};
	
	Promise.prototype.isFulfilled = function() {
	    return isFulfilled.call(this._target());
	};
	
	Promise.prototype.isResolved = function() {
	    return isResolved.call(this._target());
	};
	
	Promise.prototype.value = function() {
	    return value.call(this._target());
	};
	
	Promise.prototype.reason = function() {
	    var target = this._target();
	    target._unsetRejectionIsUnhandled();
	    return reason.call(target);
	};
	
	Promise.prototype._value = function() {
	    return this._settledValue();
	};
	
	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue();
	};
	
	Promise.PromiseInspection = PromiseInspection;
	};
	
	},{}],33:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = _dereq_("./util");
	var errorObj = util.errorObj;
	var isObject = util.isObject;
	
	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) return obj;
	        var then = getThen(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            if (isAnyBluebirdPromise(obj)) {
	                var ret = new Promise(INTERNAL);
	                obj._then(
	                    ret._fulfill,
	                    ret._reject,
	                    undefined,
	                    ret,
	                    null
	                );
	                return ret;
	            }
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}
	
	function doGetThen(obj) {
	    return obj.then;
	}
	
	function getThen(obj) {
	    try {
	        return doGetThen(obj);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	
	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    try {
	        return hasProp.call(obj, "_promise0");
	    } catch (e) {
	        return false;
	    }
	}
	
	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x, resolve, reject);
	    synchronous = false;
	
	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }
	
	    function resolve(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }
	
	    function reject(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }
	    return ret;
	}
	
	return tryConvertToPromise;
	};
	
	},{"./util":36}],34:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function(Promise, INTERNAL, debug) {
	var util = _dereq_("./util");
	var TimeoutError = Promise.TimeoutError;
	
	function HandleWrapper(handle)  {
	    this.handle = handle;
	}
	
	HandleWrapper.prototype._resultCancelled = function() {
	    clearTimeout(this.handle);
	};
	
	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (ms, value) {
	    var ret;
	    var handle;
	    if (value !== undefined) {
	        ret = Promise.resolve(value)
	                ._then(afterValue, null, null, ms, undefined);
	        if (debug.cancellation() && value instanceof Promise) {
	            ret._setOnCancel(value);
	        }
	    } else {
	        ret = new Promise(INTERNAL);
	        handle = setTimeout(function() { ret._fulfill(); }, +ms);
	        if (debug.cancellation()) {
	            ret._setOnCancel(new HandleWrapper(handle));
	        }
	        ret._captureStackTrace();
	    }
	    ret._setAsyncGuaranteed();
	    return ret;
	};
	
	Promise.prototype.delay = function (ms) {
	    return delay(ms, this);
	};
	
	var afterTimeout = function (promise, message, parent) {
	    var err;
	    if (typeof message !== "string") {
	        if (message instanceof Error) {
	            err = message;
	        } else {
	            err = new TimeoutError("operation timed out");
	        }
	    } else {
	        err = new TimeoutError(message);
	    }
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._reject(err);
	
	    if (parent != null) {
	        parent.cancel();
	    }
	};
	
	function successClear(value) {
	    clearTimeout(this.handle);
	    return value;
	}
	
	function failureClear(reason) {
	    clearTimeout(this.handle);
	    throw reason;
	}
	
	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret, parent;
	
	    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
	        if (ret.isPending()) {
	            afterTimeout(ret, message, parent);
	        }
	    }, ms));
	
	    if (debug.cancellation()) {
	        parent = this.then();
	        ret = parent._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	        ret._setOnCancel(handleWrapper);
	    } else {
	        ret = this._then(successClear, failureClear,
	                            undefined, handleWrapper, undefined);
	    }
	
	    return ret;
	};
	
	};
	
	},{"./util":36}],35:[function(_dereq_,module,exports){
	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext, INTERNAL, debug) {
	    var util = _dereq_("./util");
	    var TypeError = _dereq_("./errors").TypeError;
	    var inherits = _dereq_("./util").inherits;
	    var errorObj = util.errorObj;
	    var tryCatch = util.tryCatch;
	    var NULL = {};
	
	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }
	
	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = new Promise(INTERNAL);
	        function iterator() {
	            if (i >= len) return ret._fulfill();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret;
	    }
	
	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }
	
	    Disposer.prototype.data = function () {
	        return this._data;
	    };
	
	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };
	
	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return NULL;
	    };
	
	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== NULL
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };
	
	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };
	
	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);
	
	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };
	
	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }
	
	    function ResourceList(length) {
	        this.length = length;
	        this.promise = null;
	        this[length-1] = null;
	    }
	
	    ResourceList.prototype._resultCancelled = function() {
	        var len = this.length;
	        for (var i = 0; i < len; ++i) {
	            var item = this[i];
	            if (item instanceof Promise) {
	                item.cancel();
	            }
	        }
	    };
	
	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") {
	            return apiRejection("expecting a function but got " + util.classString(fn));
	        }
	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new ResourceList(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }
	
	        var reflectedResources = new Array(resources.length);
	        for (var i = 0; i < reflectedResources.length; ++i) {
	            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
	        }
	
	        var resultPromise = Promise.all(reflectedResources)
	            .then(function(inspections) {
	                for (var i = 0; i < inspections.length; ++i) {
	                    var inspection = inspections[i];
	                    if (inspection.isRejected()) {
	                        errorObj.e = inspection.error();
	                        return errorObj;
	                    } else if (!inspection.isFulfilled()) {
	                        resultPromise.cancel();
	                        return;
	                    }
	                    inspections[i] = inspection.value();
	                }
	                promise._pushContext();
	
	                fn = tryCatch(fn);
	                var ret = spreadArgs
	                    ? fn.apply(undefined, inspections) : fn(inspections);
	                var promiseCreated = promise._popContext();
	                debug.checkForgottenReturns(
	                    ret, promiseCreated, "Promise.using", promise);
	                return ret;
	            });
	
	        var promise = resultPromise.lastly(function() {
	            var inspection = new Promise.PromiseInspection(resultPromise);
	            return dispose(resources, inspection);
	        });
	        resources.promise = promise;
	        promise._setOnCancel(resources);
	        return promise;
	    };
	
	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 131072;
	        this._disposer = disposer;
	    };
	
	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 131072) > 0;
	    };
	
	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };
	
	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~131072);
	        this._disposer = undefined;
	    };
	
	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };
	
	};
	
	},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
	"use strict";
	var es5 = _dereq_("./es5");
	var canEvaluate = typeof navigator == "undefined";
	
	var errorObj = {e: {}};
	var tryCatchTarget;
	var globalObject = typeof self !== "undefined" ? self :
	    typeof window !== "undefined" ? window :
	    typeof global !== "undefined" ? global :
	    this !== undefined ? this : null;
	
	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	
	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;
	
	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};
	
	
	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";
	
	}
	
	function isObject(value) {
	    return typeof value === "function" ||
	           typeof value === "object" && value !== null;
	}
	
	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;
	
	    return new Error(safeToString(maybeError));
	}
	
	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}
	
	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);
	
	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}
	
	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}
	
	function thrower(r) {
	    throw r;
	}
	
	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];
	
	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];
	
	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }
	
	})();
	
	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);
	
	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
	
	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}
	
	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function FakeConstructor() {}
	    FakeConstructor.prototype = obj;
	    var l = 8;
	    while (l--) new FakeConstructor();
	    return obj;
	    eval(obj);
	}
	
	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}
	
	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}
	
	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}
	
	function isError(obj) {
	    return obj !== null &&
	           typeof obj === "object" &&
	           typeof obj.message === "string" &&
	           typeof obj.name === "string";
	}
	
	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}
	
	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}
	
	function canAttachTrace(obj) {
	    return isError(obj) && es5.propertyIsWritable(obj, "stack");
	}
	
	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();
	
	function classString(obj) {
	    return {}.toString.call(obj);
	}
	
	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}
	
	var asArray = function(v) {
	    if (es5.isArray(v)) {
	        return v;
	    }
	    return null;
	};
	
	if (typeof Symbol !== "undefined" && Symbol.iterator) {
	    var ArrayFrom = typeof Array.from === "function" ? function(v) {
	        return Array.from(v);
	    } : function(v) {
	        var ret = [];
	        var it = v[Symbol.iterator]();
	        var itResult;
	        while (!((itResult = it.next()).done)) {
	            ret.push(itResult.value);
	        }
	        return ret;
	    };
	
	    asArray = function(v) {
	        if (es5.isArray(v)) {
	            return v;
	        } else if (v != null && typeof v[Symbol.iterator] === "function") {
	            return ArrayFrom(v);
	        }
	        return null;
	    };
	}
	
	var isNode = typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]";
	
	var hasEnvVariables = typeof process !== "undefined" &&
	    typeof process.env !== "undefined";
	
	function env(key) {
	    return hasEnvVariables ? process.env[key] : undefined;
	}
	
	function getNativePromise() {
	    if (typeof Promise === "function") {
	        try {
	            var promise = new Promise(function(){});
	            if ({}.toString.call(promise) === "[object Promise]") {
	                return Promise;
	            }
	        } catch (e) {}
	    }
	}
	
	function domainBind(self, cb) {
	    return self.bind(cb);
	}
	
	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    asArray: asArray,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    isError: isError,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: isNode,
	    hasEnvVariables: hasEnvVariables,
	    env: env,
	    global: globalObject,
	    getNativePromise: getNativePromise,
	    domainBind: domainBind
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();
	
	if (ret.isNode) ret.toFastProperties(process);
	
	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;
	
	},{"./es5":13}]},{},[4])(4)
	});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), (function() { return this; }()), __webpack_require__(18).setImmediate))

/***/ },
/* 17 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(19);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(17)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Author: Geraint Luff and others
	Year: 2013
	
	This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.
	
	If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
	*/
	(function (global, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module.exports){
	    // CommonJS. Define export.
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.tv4 = factory();
	  }
	}(this, function () {
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
	if (!Object.keys) {
		Object.keys = (function () {
			var hasOwnProperty = Object.prototype.hasOwnProperty,
				hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
				dontEnums = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
				],
				dontEnumsLength = dontEnums.length;
	
			return function (obj) {
				if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
					throw new TypeError('Object.keys called on non-object');
				}
	
				var result = [];
	
				for (var prop in obj) {
					if (hasOwnProperty.call(obj, prop)) {
						result.push(prop);
					}
				}
	
				if (hasDontEnumBug) {
					for (var i=0; i < dontEnumsLength; i++) {
						if (hasOwnProperty.call(obj, dontEnums[i])) {
							result.push(dontEnums[i]);
						}
					}
				}
				return result;
			};
		})();
	}
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
	if (!Object.create) {
		Object.create = (function(){
			function F(){}
	
			return function(o){
				if (arguments.length !== 1) {
					throw new Error('Object.create implementation only accepts one parameter.');
				}
				F.prototype = o;
				return new F();
			};
		})();
	}
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
	if(!Array.isArray) {
		Array.isArray = function (vArg) {
			return Object.prototype.toString.call(vArg) === "[object Array]";
		};
	}
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
			if (this === null) {
				throw new TypeError();
			}
			var t = Object(this);
			var len = t.length >>> 0;
	
			if (len === 0) {
				return -1;
			}
			var n = 0;
			if (arguments.length > 1) {
				n = Number(arguments[1]);
				if (n !== n) { // shortcut for verifying if it's NaN
					n = 0;
				} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
					n = (n > 0 || -1) * Math.floor(Math.abs(n));
				}
			}
			if (n >= len) {
				return -1;
			}
			var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
			for (; k < len; k++) {
				if (k in t && t[k] === searchElement) {
					return k;
				}
			}
			return -1;
		};
	}
	
	// Grungey Object.isFrozen hack
	if (!Object.isFrozen) {
		Object.isFrozen = function (obj) {
			var key = "tv4_test_frozen_key";
			while (obj.hasOwnProperty(key)) {
				key += Math.random();
			}
			try {
				obj[key] = true;
				delete obj[key];
				return false;
			} catch (e) {
				return true;
			}
		};
	}
	// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed
	
	var uriTemplateGlobalModifiers = {
		"+": true,
		"#": true,
		".": true,
		"/": true,
		";": true,
		"?": true,
		"&": true
	};
	var uriTemplateSuffices = {
		"*": true
	};
	
	function notReallyPercentEncode(string) {
		return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
			return "%" + doubleEncoded.substring(3);
		});
	}
	
	function uriTemplateSubstitution(spec) {
		var modifier = "";
		if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
			modifier = spec.charAt(0);
			spec = spec.substring(1);
		}
		var separator = "";
		var prefix = "";
		var shouldEscape = true;
		var showVariables = false;
		var trimEmptyString = false;
		if (modifier === '+') {
			shouldEscape = false;
		} else if (modifier === ".") {
			prefix = ".";
			separator = ".";
		} else if (modifier === "/") {
			prefix = "/";
			separator = "/";
		} else if (modifier === '#') {
			prefix = "#";
			shouldEscape = false;
		} else if (modifier === ';') {
			prefix = ";";
			separator = ";";
			showVariables = true;
			trimEmptyString = true;
		} else if (modifier === '?') {
			prefix = "?";
			separator = "&";
			showVariables = true;
		} else if (modifier === '&') {
			prefix = "&";
			separator = "&";
			showVariables = true;
		}
	
		var varNames = [];
		var varList = spec.split(",");
		var varSpecs = [];
		var varSpecMap = {};
		for (var i = 0; i < varList.length; i++) {
			var varName = varList[i];
			var truncate = null;
			if (varName.indexOf(":") !== -1) {
				var parts = varName.split(":");
				varName = parts[0];
				truncate = parseInt(parts[1], 10);
			}
			var suffices = {};
			while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
				suffices[varName.charAt(varName.length - 1)] = true;
				varName = varName.substring(0, varName.length - 1);
			}
			var varSpec = {
				truncate: truncate,
				name: varName,
				suffices: suffices
			};
			varSpecs.push(varSpec);
			varSpecMap[varName] = varSpec;
			varNames.push(varName);
		}
		var subFunction = function (valueFunction) {
			var result = "";
			var startIndex = 0;
			for (var i = 0; i < varSpecs.length; i++) {
				var varSpec = varSpecs[i];
				var value = valueFunction(varSpec.name);
				if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
					startIndex++;
					continue;
				}
				if (i === startIndex) {
					result += prefix;
				} else {
					result += (separator || ",");
				}
				if (Array.isArray(value)) {
					if (showVariables) {
						result += varSpec.name + "=";
					}
					for (var j = 0; j < value.length; j++) {
						if (j > 0) {
							result += varSpec.suffices['*'] ? (separator || ",") : ",";
							if (varSpec.suffices['*'] && showVariables) {
								result += varSpec.name + "=";
							}
						}
						result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
					}
				} else if (typeof value === "object") {
					if (showVariables && !varSpec.suffices['*']) {
						result += varSpec.name + "=";
					}
					var first = true;
					for (var key in value) {
						if (!first) {
							result += varSpec.suffices['*'] ? (separator || ",") : ",";
						}
						first = false;
						result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
						result += varSpec.suffices['*'] ? '=' : ",";
						result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
					}
				} else {
					if (showVariables) {
						result += varSpec.name;
						if (!trimEmptyString || value !== "") {
							result += "=";
						}
					}
					if (varSpec.truncate != null) {
						value = value.substring(0, varSpec.truncate);
					}
					result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
				}
			}
			return result;
		};
		subFunction.varNames = varNames;
		return {
			prefix: prefix,
			substitution: subFunction
		};
	}
	
	function UriTemplate(template) {
		if (!(this instanceof UriTemplate)) {
			return new UriTemplate(template);
		}
		var parts = template.split("{");
		var textParts = [parts.shift()];
		var prefixes = [];
		var substitutions = [];
		var varNames = [];
		while (parts.length > 0) {
			var part = parts.shift();
			var spec = part.split("}")[0];
			var remainder = part.substring(spec.length + 1);
			var funcs = uriTemplateSubstitution(spec);
			substitutions.push(funcs.substitution);
			prefixes.push(funcs.prefix);
			textParts.push(remainder);
			varNames = varNames.concat(funcs.substitution.varNames);
		}
		this.fill = function (valueFunction) {
			var result = textParts[0];
			for (var i = 0; i < substitutions.length; i++) {
				var substitution = substitutions[i];
				result += substitution(valueFunction);
				result += textParts[i + 1];
			}
			return result;
		};
		this.varNames = varNames;
		this.template = template;
	}
	UriTemplate.prototype = {
		toString: function () {
			return this.template;
		},
		fillFromObject: function (obj) {
			return this.fill(function (varName) {
				return obj[varName];
			});
		}
	};
	var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
		this.missing = [];
		this.missingMap = {};
		this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
		this.schemas = parent ? Object.create(parent.schemas) : {};
		this.collectMultiple = collectMultiple;
		this.errors = [];
		this.handleError = collectMultiple ? this.collectError : this.returnError;
		if (checkRecursive) {
			this.checkRecursive = true;
			this.scanned = [];
			this.scannedFrozen = [];
			this.scannedFrozenSchemas = [];
			this.scannedFrozenValidationErrors = [];
			this.validatedSchemasKey = 'tv4_validation_id';
			this.validationErrorsKey = 'tv4_validation_errors_id';
		}
		if (trackUnknownProperties) {
			this.trackUnknownProperties = true;
			this.knownPropertyPaths = {};
			this.unknownPropertyPaths = {};
		}
		this.errorReporter = errorReporter || defaultErrorReporter('en');
		if (typeof this.errorReporter === 'string') {
			throw new Error('debug');
		}
		this.definedKeywords = {};
		if (parent) {
			for (var key in parent.definedKeywords) {
				this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
			}
		}
	};
	ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
		this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
		this.definedKeywords[keyword].push(keywordFunction);
	};
	ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
		var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
		error.message = this.errorReporter(error, data, schema);
		return error;
	};
	ValidatorContext.prototype.returnError = function (error) {
		return error;
	};
	ValidatorContext.prototype.collectError = function (error) {
		if (error) {
			this.errors.push(error);
		}
		return null;
	};
	ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
		for (var i = startIndex; i < this.errors.length; i++) {
			this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
		}
		return this;
	};
	ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
		for (var unknownPath in this.unknownPropertyPaths) {
			var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "", null, data, schema);
			var result = this.handleError(error);
			if (result) {
				return result;
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.addFormat = function (format, validator) {
		if (typeof format === 'object') {
			for (var key in format) {
				this.addFormat(key, format[key]);
			}
			return this;
		}
		this.formatValidators[format] = validator;
	};
	ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
		if (schema['$ref'] !== undefined) {
			urlHistory = urlHistory || {};
			if (urlHistory[schema['$ref']]) {
				return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '', null, undefined, schema);
			}
			urlHistory[schema['$ref']] = true;
			schema = this.getSchema(schema['$ref'], urlHistory);
		}
		return schema;
	};
	ValidatorContext.prototype.getSchema = function (url, urlHistory) {
		var schema;
		if (this.schemas[url] !== undefined) {
			schema = this.schemas[url];
			return this.resolveRefs(schema, urlHistory);
		}
		var baseUrl = url;
		var fragment = "";
		if (url.indexOf('#') !== -1) {
			fragment = url.substring(url.indexOf("#") + 1);
			baseUrl = url.substring(0, url.indexOf("#"));
		}
		if (typeof this.schemas[baseUrl] === 'object') {
			schema = this.schemas[baseUrl];
			var pointerPath = decodeURIComponent(fragment);
			if (pointerPath === "") {
				return this.resolveRefs(schema, urlHistory);
			} else if (pointerPath.charAt(0) !== "/") {
				return undefined;
			}
			var parts = pointerPath.split("/").slice(1);
			for (var i = 0; i < parts.length; i++) {
				var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
				if (schema[component] === undefined) {
					schema = undefined;
					break;
				}
				schema = schema[component];
			}
			if (schema !== undefined) {
				return this.resolveRefs(schema, urlHistory);
			}
		}
		if (this.missing[baseUrl] === undefined) {
			this.missing.push(baseUrl);
			this.missing[baseUrl] = baseUrl;
			this.missingMap[baseUrl] = baseUrl;
		}
	};
	ValidatorContext.prototype.searchSchemas = function (schema, url) {
		if (Array.isArray(schema)) {
			for (var i = 0; i < schema.length; i++) {
				this.searchSchemas(schema[i], url);
			}
		} else if (schema && typeof schema === "object") {
			if (typeof schema.id === "string") {
				if (isTrustedUrl(url, schema.id)) {
					if (this.schemas[schema.id] === undefined) {
						this.schemas[schema.id] = schema;
					}
				}
			}
			for (var key in schema) {
				if (key !== "enum") {
					if (typeof schema[key] === "object") {
						this.searchSchemas(schema[key], url);
					} else if (key === "$ref") {
						var uri = getDocumentUri(schema[key]);
						if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
							this.missingMap[uri] = uri;
						}
					}
				}
			}
		}
	};
	ValidatorContext.prototype.addSchema = function (url, schema) {
		//overload
		if (typeof url !== 'string' || typeof schema === 'undefined') {
			if (typeof url === 'object' && typeof url.id === 'string') {
				schema = url;
				url = schema.id;
			}
			else {
				return;
			}
		}
		if (url === getDocumentUri(url) + "#") {
			// Remove empty fragment
			url = getDocumentUri(url);
		}
		this.schemas[url] = schema;
		delete this.missingMap[url];
		normSchema(schema, url);
		this.searchSchemas(schema, url);
	};
	
	ValidatorContext.prototype.getSchemaMap = function () {
		var map = {};
		for (var key in this.schemas) {
			map[key] = this.schemas[key];
		}
		return map;
	};
	
	ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
		var list = [];
		for (var key in this.schemas) {
			if (!filterRegExp || filterRegExp.test(key)) {
				list.push(key);
			}
		}
		return list;
	};
	
	ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
		var list = [];
		for (var key in this.missingMap) {
			if (!filterRegExp || filterRegExp.test(key)) {
				list.push(key);
			}
		}
		return list;
	};
	
	ValidatorContext.prototype.dropSchemas = function () {
		this.schemas = {};
		this.reset();
	};
	ValidatorContext.prototype.reset = function () {
		this.missing = [];
		this.missingMap = {};
		this.errors = [];
	};
	
	ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
		var topLevel;
		schema = this.resolveRefs(schema);
		if (!schema) {
			return null;
		} else if (schema instanceof ValidationError) {
			this.errors.push(schema);
			return schema;
		}
	
		var startErrorCount = this.errors.length;
		var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
		if (this.checkRecursive && data && typeof data === 'object') {
			topLevel = !this.scanned.length;
			if (data[this.validatedSchemasKey]) {
				var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
				if (schemaIndex !== -1) {
					this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
					return null;
				}
			}
			if (Object.isFrozen(data)) {
				frozenIndex = this.scannedFrozen.indexOf(data);
				if (frozenIndex !== -1) {
					var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
					if (frozenSchemaIndex !== -1) {
						this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
						return null;
					}
				}
			}
			this.scanned.push(data);
			if (Object.isFrozen(data)) {
				if (frozenIndex === -1) {
					frozenIndex = this.scannedFrozen.length;
					this.scannedFrozen.push(data);
					this.scannedFrozenSchemas.push([]);
				}
				scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
				this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
				this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
			} else {
				if (!data[this.validatedSchemasKey]) {
					try {
						Object.defineProperty(data, this.validatedSchemasKey, {
							value: [],
							configurable: true
						});
						Object.defineProperty(data, this.validationErrorsKey, {
							value: [],
							configurable: true
						});
					} catch (e) {
						//IE 7/8 workaround
						data[this.validatedSchemasKey] = [];
						data[this.validationErrorsKey] = [];
					}
				}
				scannedSchemasIndex = data[this.validatedSchemasKey].length;
				data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
				data[this.validationErrorsKey][scannedSchemasIndex] = [];
			}
		}
	
		var errorCount = this.errors.length;
		var error = this.validateBasic(data, schema, dataPointerPath)
			|| this.validateNumeric(data, schema, dataPointerPath)
			|| this.validateString(data, schema, dataPointerPath)
			|| this.validateArray(data, schema, dataPointerPath)
			|| this.validateObject(data, schema, dataPointerPath)
			|| this.validateCombinations(data, schema, dataPointerPath)
			|| this.validateHypermedia(data, schema, dataPointerPath)
			|| this.validateFormat(data, schema, dataPointerPath)
			|| this.validateDefinedKeywords(data, schema, dataPointerPath)
			|| null;
	
		if (topLevel) {
			while (this.scanned.length) {
				var item = this.scanned.pop();
				delete item[this.validatedSchemasKey];
			}
			this.scannedFrozen = [];
			this.scannedFrozenSchemas = [];
		}
	
		if (error || errorCount !== this.errors.length) {
			while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
				var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
				var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
				if (error) {
					error = error.prefixWith(dataPart, schemaPart);
				}
				this.prefixErrors(errorCount, dataPart, schemaPart);
			}
		}
	
		if (scannedFrozenSchemaIndex !== null) {
			this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
		} else if (scannedSchemasIndex !== null) {
			data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
		}
	
		return this.handleError(error);
	};
	ValidatorContext.prototype.validateFormat = function (data, schema) {
		if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
			return null;
		}
		var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
		if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
			return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}, '', '/format', null, data, schema);
		} else if (errorMessage && typeof errorMessage === 'object') {
			return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema);
		}
		return null;
	};
	ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
		for (var key in this.definedKeywords) {
			if (typeof schema[key] === 'undefined') {
				continue;
			}
			var validationFunctions = this.definedKeywords[key];
			for (var i = 0; i < validationFunctions.length; i++) {
				var func = validationFunctions[i];
				var result = func(data, schema[key], schema, dataPointerPath);
				if (typeof result === 'string' || typeof result === 'number') {
					return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}, '', '', null, data, schema).prefixWith(null, key);
				} else if (result && typeof result === 'object') {
					var code = result.code;
					if (typeof code === 'string') {
						if (!ErrorCodes[code]) {
							throw new Error('Undefined error code (use defineError): ' + code);
						}
						code = ErrorCodes[code];
					} else if (typeof code !== 'number') {
						code = ErrorCodes.KEYWORD_CUSTOM;
					}
					var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
					var schemaPath = result.schemaPath || ("/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
					return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
				}
			}
		}
		return null;
	};
	
	function recursiveCompare(A, B) {
		if (A === B) {
			return true;
		}
		if (A && B && typeof A === "object" && typeof B === "object") {
			if (Array.isArray(A) !== Array.isArray(B)) {
				return false;
			} else if (Array.isArray(A)) {
				if (A.length !== B.length) {
					return false;
				}
				for (var i = 0; i < A.length; i++) {
					if (!recursiveCompare(A[i], B[i])) {
						return false;
					}
				}
			} else {
				var key;
				for (key in A) {
					if (B[key] === undefined && A[key] !== undefined) {
						return false;
					}
				}
				for (key in B) {
					if (A[key] === undefined && B[key] !== undefined) {
						return false;
					}
				}
				for (key in A) {
					if (!recursiveCompare(A[key], B[key])) {
						return false;
					}
				}
			}
			return true;
		}
		return false;
	}
	
	ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
		var error;
		if (error = this.validateType(data, schema, dataPointerPath)) {
			return error.prefixWith(null, "type");
		}
		if (error = this.validateEnum(data, schema, dataPointerPath)) {
			return error.prefixWith(null, "type");
		}
		return null;
	};
	
	ValidatorContext.prototype.validateType = function validateType(data, schema) {
		if (schema.type === undefined) {
			return null;
		}
		var dataType = typeof data;
		if (data === null) {
			dataType = "null";
		} else if (Array.isArray(data)) {
			dataType = "array";
		}
		var allowedTypes = schema.type;
		if (!Array.isArray(allowedTypes)) {
			allowedTypes = [allowedTypes];
		}
	
		for (var i = 0; i < allowedTypes.length; i++) {
			var type = allowedTypes[i];
			if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
				return null;
			}
		}
		return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")}, '', '', null, data, schema);
	};
	
	ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
		if (schema["enum"] === undefined) {
			return null;
		}
		for (var i = 0; i < schema["enum"].length; i++) {
			var enumVal = schema["enum"][i];
			if (recursiveCompare(data, enumVal)) {
				return null;
			}
		}
		return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data}, '', '', null, data, schema);
	};
	
	ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
		return this.validateMultipleOf(data, schema, dataPointerPath)
			|| this.validateMinMax(data, schema, dataPointerPath)
			|| this.validateNaN(data, schema, dataPointerPath)
			|| null;
	};
	
	var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
	var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
	ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
		var multipleOf = schema.multipleOf || schema.divisibleBy;
		if (multipleOf === undefined) {
			return null;
		}
		if (typeof data === "number") {
			var remainder = (data/multipleOf)%1;
			if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
				return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf}, '', '', null, data, schema);
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
		if (typeof data !== "number") {
			return null;
		}
		if (schema.minimum !== undefined) {
			if (data < schema.minimum) {
				return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}, '', '/minimum', null, data, schema);
			}
			if (schema.exclusiveMinimum && data === schema.minimum) {
				return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}, '', '/exclusiveMinimum', null, data, schema);
			}
		}
		if (schema.maximum !== undefined) {
			if (data > schema.maximum) {
				return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}, '', '/maximum', null, data, schema);
			}
			if (schema.exclusiveMaximum && data === schema.maximum) {
				return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}, '', '/exclusiveMaximum', null, data, schema);
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
		if (typeof data !== "number") {
			return null;
		}
		if (isNaN(data) === true || data === Infinity || data === -Infinity) {
			return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}, '', '/type', null, data, schema);
		}
		return null;
	};
	
	ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
		return this.validateStringLength(data, schema, dataPointerPath)
			|| this.validateStringPattern(data, schema, dataPointerPath)
			|| null;
	};
	
	ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
		if (typeof data !== "string") {
			return null;
		}
		if (schema.minLength !== undefined) {
			if (data.length < schema.minLength) {
				return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}, '', '/minLength', null, data, schema);
			}
		}
		if (schema.maxLength !== undefined) {
			if (data.length > schema.maxLength) {
				return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}, '', '/maxLength', null, data, schema);
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
		if (typeof data !== "string" || (typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp))) {
			return null;
		}
		var regexp;
		if (schema.pattern instanceof RegExp) {
		  regexp = schema.pattern;
		}
		else {
		  var body, flags = '';
		  // Check for regular expression literals
		  // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5
		  var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);
		  if (literal) {
		    body = literal[1];
		    flags = literal[2];
		  }
		  else {
		    body = schema.pattern;
		  }
		  regexp = new RegExp(body, flags);
		}
		if (!regexp.test(data)) {
			return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}, '', '/pattern', null, data, schema);
		}
		return null;
	};
	
	ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
		if (!Array.isArray(data)) {
			return null;
		}
		return this.validateArrayLength(data, schema, dataPointerPath)
			|| this.validateArrayUniqueItems(data, schema, dataPointerPath)
			|| this.validateArrayItems(data, schema, dataPointerPath)
			|| null;
	};
	
	ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
		var error;
		if (schema.minItems !== undefined) {
			if (data.length < schema.minItems) {
				error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems}, '', '/minItems', null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
		if (schema.maxItems !== undefined) {
			if (data.length > schema.maxItems) {
				error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems}, '', '/maxItems', null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
		if (schema.uniqueItems) {
			for (var i = 0; i < data.length; i++) {
				for (var j = i + 1; j < data.length; j++) {
					if (recursiveCompare(data[i], data[j])) {
						var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j}, '', '/uniqueItems', null, data, schema);
						if (this.handleError(error)) {
							return error;
						}
					}
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
		if (schema.items === undefined) {
			return null;
		}
		var error, i;
		if (Array.isArray(schema.items)) {
			for (i = 0; i < data.length; i++) {
				if (i < schema.items.length) {
					if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
						return error;
					}
				} else if (schema.additionalItems !== undefined) {
					if (typeof schema.additionalItems === "boolean") {
						if (!schema.additionalItems) {
							error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema));
							if (this.handleError(error)) {
								return error;
							}
						}
					} else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
						return error;
					}
				}
			}
		} else {
			for (i = 0; i < data.length; i++) {
				if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
					return error;
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
		if (typeof data !== "object" || data === null || Array.isArray(data)) {
			return null;
		}
		return this.validateObjectMinMaxProperties(data, schema, dataPointerPath)
			|| this.validateObjectRequiredProperties(data, schema, dataPointerPath)
			|| this.validateObjectProperties(data, schema, dataPointerPath)
			|| this.validateObjectDependencies(data, schema, dataPointerPath)
			|| null;
	};
	
	ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
		var keys = Object.keys(data);
		var error;
		if (schema.minProperties !== undefined) {
			if (keys.length < schema.minProperties) {
				error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}, '', '/minProperties', null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
		if (schema.maxProperties !== undefined) {
			if (keys.length > schema.maxProperties) {
				error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}, '', '/maxProperties', null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
		if (schema.required !== undefined) {
			for (var i = 0; i < schema.required.length; i++) {
				var key = schema.required[i];
				if (data[key] === undefined) {
					var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}, '', '/required/' + i, null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
		var error;
		for (var key in data) {
			var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
			var foundMatch = false;
			if (schema.properties !== undefined && schema.properties[key] !== undefined) {
				foundMatch = true;
				if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
					return error;
				}
			}
			if (schema.patternProperties !== undefined) {
				for (var patternKey in schema.patternProperties) {
					var regexp = new RegExp(patternKey);
					if (regexp.test(key)) {
						foundMatch = true;
						if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
							return error;
						}
					}
				}
			}
			if (!foundMatch) {
				if (schema.additionalProperties !== undefined) {
					if (this.trackUnknownProperties) {
						this.knownPropertyPaths[keyPointerPath] = true;
						delete this.unknownPropertyPaths[keyPointerPath];
					}
					if (typeof schema.additionalProperties === "boolean") {
						if (!schema.additionalProperties) {
							error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {key: key}, '', '/additionalProperties', null, data, schema).prefixWith(key, null);
							if (this.handleError(error)) {
								return error;
							}
						}
					} else {
						if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
							return error;
						}
					}
				} else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
					this.unknownPropertyPaths[keyPointerPath] = true;
				}
			} else if (this.trackUnknownProperties) {
				this.knownPropertyPaths[keyPointerPath] = true;
				delete this.unknownPropertyPaths[keyPointerPath];
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
		var error;
		if (schema.dependencies !== undefined) {
			for (var depKey in schema.dependencies) {
				if (data[depKey] !== undefined) {
					var dep = schema.dependencies[depKey];
					if (typeof dep === "string") {
						if (data[dep] === undefined) {
							error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}, '', '', null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
							if (this.handleError(error)) {
								return error;
							}
						}
					} else if (Array.isArray(dep)) {
						for (var i = 0; i < dep.length; i++) {
							var requiredKey = dep[i];
							if (data[requiredKey] === undefined) {
								error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}, '', '/' + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
								if (this.handleError(error)) {
									return error;
								}
							}
						}
					} else {
						if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
							return error;
						}
					}
				}
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
		return this.validateAllOf(data, schema, dataPointerPath)
			|| this.validateAnyOf(data, schema, dataPointerPath)
			|| this.validateOneOf(data, schema, dataPointerPath)
			|| this.validateNot(data, schema, dataPointerPath)
			|| null;
	};
	
	ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
		if (schema.allOf === undefined) {
			return null;
		}
		var error;
		for (var i = 0; i < schema.allOf.length; i++) {
			var subSchema = schema.allOf[i];
			if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
				return error;
			}
		}
		return null;
	};
	
	ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
		if (schema.anyOf === undefined) {
			return null;
		}
		var errors = [];
		var startErrorCount = this.errors.length;
		var oldUnknownPropertyPaths, oldKnownPropertyPaths;
		if (this.trackUnknownProperties) {
			oldUnknownPropertyPaths = this.unknownPropertyPaths;
			oldKnownPropertyPaths = this.knownPropertyPaths;
		}
		var errorAtEnd = true;
		for (var i = 0; i < schema.anyOf.length; i++) {
			if (this.trackUnknownProperties) {
				this.unknownPropertyPaths = {};
				this.knownPropertyPaths = {};
			}
			var subSchema = schema.anyOf[i];
	
			var errorCount = this.errors.length;
			var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);
	
			if (error === null && errorCount === this.errors.length) {
				this.errors = this.errors.slice(0, startErrorCount);
	
				if (this.trackUnknownProperties) {
					for (var knownKey in this.knownPropertyPaths) {
						oldKnownPropertyPaths[knownKey] = true;
						delete oldUnknownPropertyPaths[knownKey];
					}
					for (var unknownKey in this.unknownPropertyPaths) {
						if (!oldKnownPropertyPaths[unknownKey]) {
							oldUnknownPropertyPaths[unknownKey] = true;
						}
					}
					// We need to continue looping so we catch all the property definitions, but we don't want to return an error
					errorAtEnd = false;
					continue;
				}
	
				return null;
			}
			if (error) {
				errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
			}
		}
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = oldUnknownPropertyPaths;
			this.knownPropertyPaths = oldKnownPropertyPaths;
		}
		if (errorAtEnd) {
			errors = errors.concat(this.errors.slice(startErrorCount));
			this.errors = this.errors.slice(0, startErrorCount);
			return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
		}
	};
	
	ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
		if (schema.oneOf === undefined) {
			return null;
		}
		var validIndex = null;
		var errors = [];
		var startErrorCount = this.errors.length;
		var oldUnknownPropertyPaths, oldKnownPropertyPaths;
		if (this.trackUnknownProperties) {
			oldUnknownPropertyPaths = this.unknownPropertyPaths;
			oldKnownPropertyPaths = this.knownPropertyPaths;
		}
		for (var i = 0; i < schema.oneOf.length; i++) {
			if (this.trackUnknownProperties) {
				this.unknownPropertyPaths = {};
				this.knownPropertyPaths = {};
			}
			var subSchema = schema.oneOf[i];
	
			var errorCount = this.errors.length;
			var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);
	
			if (error === null && errorCount === this.errors.length) {
				if (validIndex === null) {
					validIndex = i;
				} else {
					this.errors = this.errors.slice(0, startErrorCount);
					return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf", null, data, schema);
				}
				if (this.trackUnknownProperties) {
					for (var knownKey in this.knownPropertyPaths) {
						oldKnownPropertyPaths[knownKey] = true;
						delete oldUnknownPropertyPaths[knownKey];
					}
					for (var unknownKey in this.unknownPropertyPaths) {
						if (!oldKnownPropertyPaths[unknownKey]) {
							oldUnknownPropertyPaths[unknownKey] = true;
						}
					}
				}
			} else if (error) {
				errors.push(error);
			}
		}
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = oldUnknownPropertyPaths;
			this.knownPropertyPaths = oldKnownPropertyPaths;
		}
		if (validIndex === null) {
			errors = errors.concat(this.errors.slice(startErrorCount));
			this.errors = this.errors.slice(0, startErrorCount);
			return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
		} else {
			this.errors = this.errors.slice(0, startErrorCount);
		}
		return null;
	};
	
	ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
		if (schema.not === undefined) {
			return null;
		}
		var oldErrorCount = this.errors.length;
		var oldUnknownPropertyPaths, oldKnownPropertyPaths;
		if (this.trackUnknownProperties) {
			oldUnknownPropertyPaths = this.unknownPropertyPaths;
			oldKnownPropertyPaths = this.knownPropertyPaths;
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
		var notErrors = this.errors.slice(oldErrorCount);
		this.errors = this.errors.slice(0, oldErrorCount);
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = oldUnknownPropertyPaths;
			this.knownPropertyPaths = oldKnownPropertyPaths;
		}
		if (error === null && notErrors.length === 0) {
			return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
		}
		return null;
	};
	
	ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
		if (!schema.links) {
			return null;
		}
		var error;
		for (var i = 0; i < schema.links.length; i++) {
			var ldo = schema.links[i];
			if (ldo.rel === "describedby") {
				var template = new UriTemplate(ldo.href);
				var allPresent = true;
				for (var j = 0; j < template.varNames.length; j++) {
					if (!(template.varNames[j] in data)) {
						allPresent = false;
						break;
					}
				}
				if (allPresent) {
					var schemaUrl = template.fillFromObject(data);
					var subSchema = {"$ref": schemaUrl};
					if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
						return error;
					}
				}
			}
		}
	};
	
	// parseURI() and resolveUrl() are from https://gist.github.com/1088850
	//   -  released as public domain by author ("Yaffle") - see comments on gist
	
	function parseURI(url) {
		var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
		// authority = '//' + user + ':' + pass '@' + hostname + ':' port
		return (m ? {
			href     : m[0] || '',
			protocol : m[1] || '',
			authority: m[2] || '',
			host     : m[3] || '',
			hostname : m[4] || '',
			port     : m[5] || '',
			pathname : m[6] || '',
			search   : m[7] || '',
			hash     : m[8] || ''
		} : null);
	}
	
	function resolveUrl(base, href) {// RFC 3986
	
		function removeDotSegments(input) {
			var output = [];
			input.replace(/^(\.\.?(\/|$))+/, '')
				.replace(/\/(\.(\/|$))+/g, '/')
				.replace(/\/\.\.$/, '/../')
				.replace(/\/?[^\/]*/g, function (p) {
					if (p === '/..') {
						output.pop();
					} else {
						output.push(p);
					}
			});
			return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
		}
	
		href = parseURI(href || '');
		base = parseURI(base || '');
	
		return !href || !base ? null : (href.protocol || base.protocol) +
			(href.protocol || href.authority ? href.authority : base.authority) +
			removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
			(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
			href.hash;
	}
	
	function getDocumentUri(uri) {
		return uri.split('#')[0];
	}
	function normSchema(schema, baseUri) {
		if (schema && typeof schema === "object") {
			if (baseUri === undefined) {
				baseUri = schema.id;
			} else if (typeof schema.id === "string") {
				baseUri = resolveUrl(baseUri, schema.id);
				schema.id = baseUri;
			}
			if (Array.isArray(schema)) {
				for (var i = 0; i < schema.length; i++) {
					normSchema(schema[i], baseUri);
				}
			} else {
				if (typeof schema['$ref'] === "string") {
					schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
				}
				for (var key in schema) {
					if (key !== "enum") {
						normSchema(schema[key], baseUri);
					}
				}
			}
		}
	}
	
	function defaultErrorReporter(language) {
		language = language || 'en';
	
		var errorMessages = languages[language];
	
		return function (error) {
			var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
			if (typeof messageTemplate !== 'string') {
				return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
			}
			var messageParams = error.params;
			// Adapted from Crockford's supplant()
			return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
				var subValue = messageParams[varName];
				return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
			});
		};
	}
	
	var ErrorCodes = {
		INVALID_TYPE: 0,
		ENUM_MISMATCH: 1,
		ANY_OF_MISSING: 10,
		ONE_OF_MISSING: 11,
		ONE_OF_MULTIPLE: 12,
		NOT_PASSED: 13,
		// Numeric errors
		NUMBER_MULTIPLE_OF: 100,
		NUMBER_MINIMUM: 101,
		NUMBER_MINIMUM_EXCLUSIVE: 102,
		NUMBER_MAXIMUM: 103,
		NUMBER_MAXIMUM_EXCLUSIVE: 104,
		NUMBER_NOT_A_NUMBER: 105,
		// String errors
		STRING_LENGTH_SHORT: 200,
		STRING_LENGTH_LONG: 201,
		STRING_PATTERN: 202,
		// Object errors
		OBJECT_PROPERTIES_MINIMUM: 300,
		OBJECT_PROPERTIES_MAXIMUM: 301,
		OBJECT_REQUIRED: 302,
		OBJECT_ADDITIONAL_PROPERTIES: 303,
		OBJECT_DEPENDENCY_KEY: 304,
		// Array errors
		ARRAY_LENGTH_SHORT: 400,
		ARRAY_LENGTH_LONG: 401,
		ARRAY_UNIQUE: 402,
		ARRAY_ADDITIONAL_ITEMS: 403,
		// Custom/user-defined errors
		FORMAT_CUSTOM: 500,
		KEYWORD_CUSTOM: 501,
		// Schema structure
		CIRCULAR_REFERENCE: 600,
		// Non-standard validation options
		UNKNOWN_PROPERTY: 1000
	};
	var ErrorCodeLookup = {};
	for (var key in ErrorCodes) {
		ErrorCodeLookup[ErrorCodes[key]] = key;
	}
	var ErrorMessagesDefault = {
		INVALID_TYPE: "Invalid type: {type} (expected {expected})",
		ENUM_MISMATCH: "No enum match for: {value}",
		ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
		ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
		ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
		NOT_PASSED: "Data matches schema from \"not\"",
		// Numeric errors
		NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
		NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
		NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
		NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
		NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
		NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
		// String errors
		STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
		STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
		STRING_PATTERN: "String does not match pattern: {pattern}",
		// Object errors
		OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
		OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
		OBJECT_REQUIRED: "Missing required property: {key}",
		OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
		OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
		// Array errors
		ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
		ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
		ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
		ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
		// Format errors
		FORMAT_CUSTOM: "Format validation failed ({message})",
		KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
		// Schema structure
		CIRCULAR_REFERENCE: "Circular $refs: {urls}",
		// Non-standard validation options
		UNKNOWN_PROPERTY: "Unknown property (not in schema)"
	};
	
	function ValidationError(code, params, dataPath, schemaPath, subErrors) {
		Error.call(this);
		if (code === undefined) {
			throw new Error ("No error code supplied: " + schemaPath);
		}
		this.message = '';
		this.params = params;
		this.code = code;
		this.dataPath = dataPath || "";
		this.schemaPath = schemaPath || "";
		this.subErrors = subErrors || null;
	
		var err = new Error(this.message);
		this.stack = err.stack || err.stacktrace;
		if (!this.stack) {
			try {
				throw err;
			}
			catch(err) {
				this.stack = err.stack || err.stacktrace;
			}
		}
	}
	ValidationError.prototype = Object.create(Error.prototype);
	ValidationError.prototype.constructor = ValidationError;
	ValidationError.prototype.name = 'ValidationError';
	
	ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
		if (dataPrefix !== null) {
			dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
			this.dataPath = "/" + dataPrefix + this.dataPath;
		}
		if (schemaPrefix !== null) {
			schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
			this.schemaPath = "/" + schemaPrefix + this.schemaPath;
		}
		if (this.subErrors !== null) {
			for (var i = 0; i < this.subErrors.length; i++) {
				this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
			}
		}
		return this;
	};
	
	function isTrustedUrl(baseUrl, testUrl) {
		if(testUrl.substring(0, baseUrl.length) === baseUrl){
			var remainder = testUrl.substring(baseUrl.length);
			if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
				|| remainder.charAt(0) === "#"
				|| remainder.charAt(0) === "?") {
				return true;
			}
		}
		return false;
	}
	
	var languages = {};
	function createApi(language) {
		var globalContext = new ValidatorContext();
		var currentLanguage;
		var customErrorReporter;
		var api = {
			setErrorReporter: function (reporter) {
				if (typeof reporter === 'string') {
					return this.language(reporter);
				}
				customErrorReporter = reporter;
				return true;
			},
			addFormat: function () {
				globalContext.addFormat.apply(globalContext, arguments);
			},
			language: function (code) {
				if (!code) {
					return currentLanguage;
				}
				if (!languages[code]) {
					code = code.split('-')[0]; // fall back to base language
				}
				if (languages[code]) {
					currentLanguage = code;
					return code; // so you can tell if fall-back has happened
				}
				return false;
			},
			addLanguage: function (code, messageMap) {
				var key;
				for (key in ErrorCodes) {
					if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
						messageMap[ErrorCodes[key]] = messageMap[key];
					}
				}
				var rootCode = code.split('-')[0];
				if (!languages[rootCode]) { // use for base language if not yet defined
					languages[code] = messageMap;
					languages[rootCode] = messageMap;
				} else {
					languages[code] = Object.create(languages[rootCode]);
					for (key in messageMap) {
						if (typeof languages[rootCode][key] === 'undefined') {
							languages[rootCode][key] = messageMap[key];
						}
						languages[code][key] = messageMap[key];
					}
				}
				return this;
			},
			freshApi: function (language) {
				var result = createApi();
				if (language) {
					result.language(language);
				}
				return result;
			},
			validate: function (data, schema, checkRecursive, banUnknownProperties) {
				var def = defaultErrorReporter(currentLanguage);
				var errorReporter = customErrorReporter ? function (error, data, schema) {
					return customErrorReporter(error, data, schema) || def(error, data, schema);
				} : def;
				var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
				if (typeof schema === "string") {
					schema = {"$ref": schema};
				}
				context.addSchema("", schema);
				var error = context.validateAll(data, schema, null, null, "");
				if (!error && banUnknownProperties) {
					error = context.banUnknownProperties(data, schema);
				}
				this.error = error;
				this.missing = context.missing;
				this.valid = (error === null);
				return this.valid;
			},
			validateResult: function () {
				var result = {};
				this.validate.apply(result, arguments);
				return result;
			},
			validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
				var def = defaultErrorReporter(currentLanguage);
				var errorReporter = customErrorReporter ? function (error, data, schema) {
					return customErrorReporter(error, data, schema) || def(error, data, schema);
				} : def;
				var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
				if (typeof schema === "string") {
					schema = {"$ref": schema};
				}
				context.addSchema("", schema);
				context.validateAll(data, schema, null, null, "");
				if (banUnknownProperties) {
					context.banUnknownProperties(data, schema);
				}
				var result = {};
				result.errors = context.errors;
				result.missing = context.missing;
				result.valid = (result.errors.length === 0);
				return result;
			},
			addSchema: function () {
				return globalContext.addSchema.apply(globalContext, arguments);
			},
			getSchema: function () {
				return globalContext.getSchema.apply(globalContext, arguments);
			},
			getSchemaMap: function () {
				return globalContext.getSchemaMap.apply(globalContext, arguments);
			},
			getSchemaUris: function () {
				return globalContext.getSchemaUris.apply(globalContext, arguments);
			},
			getMissingUris: function () {
				return globalContext.getMissingUris.apply(globalContext, arguments);
			},
			dropSchemas: function () {
				globalContext.dropSchemas.apply(globalContext, arguments);
			},
			defineKeyword: function () {
				globalContext.defineKeyword.apply(globalContext, arguments);
			},
			defineError: function (codeName, codeNumber, defaultMessage) {
				if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
					throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
				}
				if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
					throw new Error('Code number must be an integer > 10000');
				}
				if (typeof ErrorCodes[codeName] !== 'undefined') {
					throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
				}
				if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
					throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
				}
				ErrorCodes[codeName] = codeNumber;
				ErrorCodeLookup[codeNumber] = codeName;
				ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
				for (var langCode in languages) {
					var language = languages[langCode];
					if (language[codeName]) {
						language[codeNumber] = language[codeNumber] || language[codeName];
					}
				}
			},
			reset: function () {
				globalContext.reset();
				this.error = null;
				this.missing = [];
				this.valid = true;
			},
			missing: [],
			error: null,
			valid: true,
			normSchema: normSchema,
			resolveUrl: resolveUrl,
			getDocumentUri: getDocumentUri,
			errorCodes: ErrorCodes
		};
		api.language(language || 'en');
		return api;
	}
	
	var tv4 = createApi();
	tv4.addLanguage('en-gb', ErrorMessagesDefault);
	
	//legacy property
	tv4.tv4 = tv4;
	
	return tv4; // used by _header.js to globalise.
	
	}));

/***/ }
]);
//# sourceMappingURL=index.js.map