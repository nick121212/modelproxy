import { DefaultEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";

// import { fetchCacheDec } from "./fetch.cache";
// import { fetchDec } from "./fetch.decorator";

export class FetchEngine<T extends IProxyCtx> extends DefaultEngine {

    constructor(private fetchFunc: (s: any) => Promise<any>) {
        super();
    }

    /**
     * 初始化
     */
    public init(): void {
        this.use(this.fetch);
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
        const { header = {} } = settings;
        const fullPath = this.getFullPath(instance as any, executeInfo);

        if (!this.fetchFunc) {
            throw new Error("fetch function is null.");
        }

        // 发布request请求
        ctx.result = await this.fetchFunc({
            data: executeInfo.data,
            header: header || {},
            method: method,
            url: fullPath,
        });

        await next();
    }
}
