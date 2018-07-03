import request from "superagent";

import { BaseEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import { IExecute } from "modelproxy/out/models/execute";
import { injectable } from "inversify";

// import chart from "superagent-charset";
// import proxy from "superagent-proxy";
// chart(request);
// proxy(request);

@injectable()
export class SuperAgentEngine extends BaseEngine<IProxyCtx> {
    public engineName = "superagent";
    /**
     * 构造
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * 初始化中间件
     */
    public init(): void {
        this.use(async (ctx: IProxyCtx, next: Function): Promise<any> => {
            let { method = "" } = ctx.instance || {};
            let { data = null, settings = {}, params = null } = ctx.executeInfo || {};
            let { timeout = 5000, header = {}, charset = "utf-8", proxyInfo = "" } = settings || {};

            try {
                let curReq: any = request(method.toString() || "get", this.getFullPath(ctx.instance as any, ctx.executeInfo as any)).withCredentials();

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

                ctx.result = await curReq;
                ctx.result.body = ctx.result.text;
            } catch (e) {
                ctx.err = e;
                ctx.isError = true;
            }

            await next();
        });
    }
    /**
     * 调用接口
     * @param instance 接口的实例
     * @param options  参数
     */
    public async proxy(instance: IInterfaceModel, options: IExecute): Promise<any> {
        const fn = this.callback();
        const ctx: IProxyCtx = {
            instance: instance,
            executeInfo: options,
        };

        await fn(ctx);

        if (ctx.isError) {
            throw ctx.err;
        }

        return ctx.result;
    }
}