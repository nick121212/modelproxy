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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var pathToRegexp = require("path-to-regexp");
var URLSearchParams = require("url-search-params");
var compose_1 = require("../libs/compose");
var errors_1 = require("../libs/errors");
var BaseEngine = (function (_super) {
    __extends(BaseEngine, _super);
    function BaseEngine() {
        return _super.call(this) || this;
    }
    // /**
    //  * 验证数据的准确性
    //  * @param obj         {JSON}        数据
    //  * @param schema      {JSONSCHEMA}  JSONSCHEMA
    //  * @return            {Boolean}
    //  */
    // protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean {
    //     // let valid: tv4.MultiResult = tv4.validateMultiple(obj, schema as tv4.JsonSchema);
    //     // if (!valid.valid) {
    //     //     throw new ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
    //     // }
    //     return true;
    // }
    /**
     * 验证数据的准确性
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {boolean}
     */
    BaseEngine.prototype.validate = function (instance, options) {
        // instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
        // instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);
        return true;
    };
    /**
     * 代理接口
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {Promise<any>}
     */
    BaseEngine.prototype.proxy = function (instance, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    /**
     * 取得state所对应的环境
     * @param instance  {IInterfaceModel}   接口实例
     * @return          {String}
     */
    BaseEngine.prototype.getStatePath = function (instance) {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }
        return "";
    };
    /**
     * 替换path中的变量
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     */
    BaseEngine.prototype.replacePath = function (instance, _a) {
        var _b = _a.params, params = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        var tokens = pathToRegexp.parse(instance.path);
        var paths = [];
        tokens.forEach(function (token) {
            var name = token.name;
            if (!name) {
                paths.push(token);
            }
            else {
                if (!params[name] && !data[name]) {
                    throw new errors_1.ModelProxyMissingError("\u7F3A\u5C11[" + name + "]\u5B57\u6BB5\uFF01");
                }
                paths.push("/" + (params[name] || data[name]));
                delete params[name];
            }
        });
        return paths.join('');
    };
    /**
     * 获取接口的全路径
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     */
    BaseEngine.prototype.getFullPath = function (instance, options) {
        var url = "" + this.getStatePath(instance) + this.replacePath(instance, options);
        var searchParams = new URLSearchParams();
        if (options.params) {
            Object.keys(options.params).forEach(function (key) {
                searchParams.append(key, options.params[key]);
            });
            searchParams.keys.length && (url += "?" + searchParams.toString());
        }
        return url;
    };
    return BaseEngine;
}(compose_1.Compose));
exports.BaseEngine = BaseEngine;
//# sourceMappingURL=engine.base.js.map