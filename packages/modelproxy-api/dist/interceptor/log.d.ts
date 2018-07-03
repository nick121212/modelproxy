import { InterceptorInterface, Action } from "routing-controllers";
import { Tracer } from "tracer";
/**
 * 成功返回日志
 */
export declare class ResultInterceptor implements InterceptorInterface {
    private $log;
    constructor($log: Tracer.Logger);
    intercept(_action: Action, content: any): any;
}
