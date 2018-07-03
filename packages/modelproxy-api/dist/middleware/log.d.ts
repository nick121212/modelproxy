import { ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Request, Response } from "express";
import { Tracer } from "tracer";
/**
 * 错误日志
 */
export declare class LoggingMiddleware implements ExpressErrorMiddlewareInterface {
    private $log;
    constructor($log: Tracer.Logger);
    error(err: any, req: Request, _res: Response, next: (err?: any) => any): void;
}
