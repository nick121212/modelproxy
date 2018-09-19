import { DefaultEngine, cacheDec } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
// import { DefaultEngine } from "modelproxy/out/engines/engine.def";
// import { cacheDec } from "modelproxy/out/engines/engine.cache";

export class FetchEngine<T extends IProxyCtx> extends DefaultEngine {

    constructor(private fetchFunc: (s: any) => Promise<any>) {
        super();
    }

    /**
     * 初始化
     */
    public init(): void {
        this.use(this.fetch.bind(this));
    }

    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    public async fetch(ctx: IProxyCtx, next: (s?: string) => Promise<any>): Promise<any> {
        const { instance, executeInfo = {}, settings = {} } = ctx;
        const { method = "" } = instance || {};
        const { header = {}, timeout = 5000 } = settings;
        const fullPath = this.getFullPath(instance as any, executeInfo);

        if (!this.fetchFunc) {
            throw new Error("fetch function is null.");
        }

        const fetchFunc = this.fetchFunc.bind(this.fetchFunc, {
            data: executeInfo.data,
            header: header || {},
            method,
            url: fullPath,
        });

        // 发布request请求
        ctx.result = await Promise.race([
            this.delay(timeout || 5000).then(() => {
                const err = new Error(`接口请求超时！(${timeout})`);

                err.name = "timeout";

                throw err;
            }),
            cacheDec(fetchFunc, ctx, fullPath),
        ]);

        await next();
    }
}
