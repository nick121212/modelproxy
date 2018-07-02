import { FetchEngine } from 'modelproxy-engine-fetch';
import { IProxyCtx } from 'modelproxy/out/models/proxyctx';

// 定义一个jsonp的调用方式
export const fetchSchemaEngine = new FetchEngine();

fetchSchemaEngine.init();
fetchSchemaEngine.use(async (ctx: IProxyCtx, next: (s?: string) => Promise<any>) => {
    if (!ctx.result.ok || ctx.result.status !== 200) {
        throw new Error(ctx.result.statusText);
    }

    ctx.result = await ctx.result.clone();
    ctx.result = await ctx.result.json();

    await next();
});
