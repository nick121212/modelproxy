"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
/**
 * 错误日志
 */
let LoggingMiddleware = class LoggingMiddleware {
    constructor($log) {
        this.$log = $log;
    }
    error(err, req, _res, next) {
        next(err);
        this.$log.error(`开始请求----------------请求URL：${req.originalUrl}; 请求路径：${req.path}`);
        this.$log.error(`请求参数：`, req.params);
        this.$log.error(`请求QS：`, req.query);
        this.$log.error(`请求body：`, req.body);
        this.$log.error(`请求头：`, req.headers);
        this.$log.error(`结束结束----------------请求Status：${err.httpCode}`);
    }
};
LoggingMiddleware = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.Middleware({ type: "after" }),
    tslib_1.__param(0, inversify_1.inject("log")), tslib_1.__param(0, inversify_1.tagged("color", true)),
    tslib_1.__metadata("design:paramtypes", [Object])
], LoggingMiddleware);
exports.LoggingMiddleware = LoggingMiddleware;
//# sourceMappingURL=log.js.map