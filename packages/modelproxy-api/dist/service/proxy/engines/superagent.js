"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const superagent_1 = tslib_1.__importDefault(require("superagent"));
const modelproxy_1 = require("modelproxy");
const inversify_1 = require("inversify");
// import chart from "superagent-charset";
// import proxy from "superagent-proxy";
// chart(request);
// proxy(request);
let SuperAgentEngine = class SuperAgentEngine extends modelproxy_1.BaseEngine {
    /**
     * 构造
     */
    constructor() {
        super();
        this.engineName = "superagent";
        this.init();
    }
    /**
     * 初始化中间件
     */
    init() {
        this.use((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let { method = "" } = ctx.instance || {};
            let { data = null, settings = {}, params = null } = ctx.executeInfo || {};
            let { timeout = 5000, header = {}, charset = "utf-8", proxyInfo = "" } = settings || {};
            try {
                let curReq = superagent_1.default(method.toString() || "get", this.getFullPath(ctx.instance, ctx.executeInfo)).withCredentials();
                // 代理
                if (proxyInfo) {
                    curReq.proxy(`http://${proxyInfo}`);
                }
                // 参数
                if (params) {
                    curReq.query(params);
                }
                // 数据
                if (data) {
                    curReq.send(data);
                }
                // headers
                if (header) {
                    curReq.set(header);
                }
                // 超时时间
                curReq.timeout({
                    response: timeout,
                    deadline: 6000
                });
                // 字符编码
                if (charset) {
                    // curReq.charset(charset);
                }
                ctx.result = yield curReq;
                ctx.result.body = ctx.result.text;
            }
            catch (e) {
                ctx.err = e;
                ctx.isError = true;
            }
            yield next();
        }));
    }
    /**
     * 调用接口
     * @param instance 接口的实例
     * @param options  参数
     */
    proxy(instance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fn = this.callback();
            const ctx = {
                instance: instance,
                executeInfo: options,
            };
            yield fn(ctx);
            if (ctx.isError) {
                throw ctx.err;
            }
            return ctx.result;
        });
    }
};
SuperAgentEngine = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], SuperAgentEngine);
exports.SuperAgentEngine = SuperAgentEngine;
//# sourceMappingURL=superagent.js.map