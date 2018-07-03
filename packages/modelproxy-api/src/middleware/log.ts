import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";
import { injectable, tagged, inject } from "inversify";
import { Request, Response } from "express";
import { Tracer } from "tracer";

/**
 * 错误日志
 */
@injectable()
@Middleware({ type: "after" })
export class LoggingMiddleware implements ExpressErrorMiddlewareInterface {

    constructor(@inject("log") @tagged("color", true) private $log: Tracer.Logger) {

    }

    error(err: any, req: Request, _res: Response, next: (err?: any) => any) {
        this.$log.error(`开始请求----------------请求URL：${req.originalUrl}; 请求路径：${req.path}`);
        this.$log.error(`请求参数：`, req.params);
        this.$log.error(`请求QS：`, req.query);
        this.$log.error(`请求body：`, req.body);
        this.$log.error(`请求头：`, req.headers);
        this.$log.error(`结束结束----------------请求Status：${err.httpCode}`);

        next(err);
    }

}