"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
/**
 * 成功返回日志
 */
let ResultInterceptor = class ResultInterceptor {
    constructor($log) {
        this.$log = $log;
    }
    intercept(_action, content) {
        const { request: req, response: res } = _action;
        this.$log.info(`开始请求----------------请求URL：${req.originalUrl}; 请求路径：${req.path}`);
        this.$log.info(`请求参数：`, req.params);
        this.$log.info(`请求QS：`, req.query);
        this.$log.info(`请求body：`, req.body);
        this.$log.info(`请求头：`, req.headers);
        this.$log.info(`请求Result：`, content);
        this.$log.info(`结束结束----------------请求Status：${res.statusCode} ; `);
        return content;
    }
};
ResultInterceptor = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.Interceptor(),
    tslib_1.__param(0, inversify_1.inject("log")), tslib_1.__param(0, inversify_1.tagged("color", true)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ResultInterceptor);
exports.ResultInterceptor = ResultInterceptor;
//# sourceMappingURL=log.js.map