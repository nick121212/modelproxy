"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelproxy_1 = require("modelproxy");
class BaseEngine extends modelproxy_1.DefaultEngine {
    /**
     * Creates an instance of MiniGEngine.
     * @param {FetchFunction} fetchFunc
     * @memberof MiniGEngine
     */
    constructor(fetchFunc) {
        super();
        this.fetchFunc = fetchFunc;
    }
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { instance = {}, executeInfo = {}, settings = {} } = ctx;
            const { method } = instance;
            const url = this.getFullPath(instance, executeInfo);
            const { timeout } = settings;
            const { data } = executeInfo;
            // 使用超时设置
            ctx.result = yield Promise.race([
                this.delay(timeout || 5000).then(() => {
                    throw new modelproxy_1.MPError(`接口请求超时！(${timeout})`, "timeout", ctx);
                }),
                this.fetchFunc(url, method, data, ctx)
            ]);
            yield next();
        });
    }
    /**
     * 发起调用，接口方法
     * @param   {IInterfaceModel} instance      当前接口的实例
     * @param   {IExecute}        executeInfo   调用参数
     * @param   {any[]}           otherOptions  额外的参数
     * @returns {Promise<any>}
     */
    proxy(instance, executeInfo, ...otherOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { result } = yield this.doProxy(instance, executeInfo, ...otherOptions);
            return result;
        });
    }
}
exports.BaseEngine = BaseEngine;
//# sourceMappingURL=index.js.map