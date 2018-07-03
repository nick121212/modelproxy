"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const modelproxy_1 = require("modelproxy");
const modelproxy_engine_fetch_1 = require("modelproxy-engine-fetch");
const config_1 = tslib_1.__importDefault(require("config"));
const superagent_1 = require("./engines/superagent");
const routing_controllers_1 = require("routing-controllers");
exports.proxy = new modelproxy_1.ModelProxy();
const fetch = new modelproxy_engine_fetch_1.FetchEngine();
exports.proxy.loadConfig(config_1.default.get("modelproxy.wz"), {});
exports.proxy.loadConfig(config_1.default.get("modelproxy.rap"), {});
exports.proxy.addEngines({
    superagent: new superagent_1.SuperAgentEngine(),
    fetch
});
fetch.init();
/**
* 请求真正的数据接口
* 判断http的状态码，如果不是200，直接抛出错误
* 判断数据的code字段，如果不是200，抛出错误
* 返回数据
*/
fetch.use((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (ctx.result.ok !== true || ctx.result.status !== 200) {
        throw new routing_controllers_1.HttpError(ctx.result.status, ctx.result.statusText);
    }
    // 这里需要clone一个fetch，不然多次调用会报错（body stream already read）
    // ctx.result = await ctx.result.clone();
    yield next();
}));
const headerMap = ["content-type", "rediect_url"];
fetch.use((ctx, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    if (ctx.response) {
        ctx.result.headers.forEach((val, name) => {
            if (headerMap.includes(name)) {
                ctx.response.setHeader(name, val);
            }
        });
    }
    try {
        ctx.result = yield ctx.result.json();
    }
    catch (_a) {
        ctx.result = yield ctx.result.text();
    }
    yield next();
}));
//# sourceMappingURL=index.js.map