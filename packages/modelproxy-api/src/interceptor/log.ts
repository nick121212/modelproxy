import { Interceptor, InterceptorInterface, Action } from "routing-controllers";
import { injectable, inject, tagged } from "inversify";
import { Tracer } from "tracer";

/**
 * 成功返回日志
 */
@injectable()
@Interceptor()
export class ResultInterceptor implements InterceptorInterface {
    constructor(@inject("log") @tagged("color", true) private $log: Tracer.Logger) {

    }

    intercept(_action: Action, content: any) {
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

}