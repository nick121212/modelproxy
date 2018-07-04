import { FetchEngine } from "modelproxy-engine-fetch";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
// import { delay } from "redux-saga";

// 定义一个jsonp的调用方式
export const fetchEngine = new FetchEngine();


/**
 * fetch接口引擎初始化
 */
fetchEngine.init();
// 如果有http错误，则抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: (s?: string) => Promise<any>) => {
    if (!ctx.result.ok || ctx.result.status !== 200) {
        // console.log("fetch 错误");
        throw new Error(ctx.result.statusText);
    }

    ctx.result = await ctx.result.clone();
    ctx.result = await ctx.result.json();

    await next();
});
// 如果有服务器端约定错误，测抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: (s?: string) => Promise<any>) => {
    // if (ctx.result.code !== undefined && ctx.result.code !== 0) {
    //     // if (ctx.result.code === 432 && ctx.result.data) {
    //     //     location.href = ctx.result.data;
    //     // }

    //     throw new Error(ctx.result.message);
    // }
    // ctx.result = ctx.result.data;

    // await delay(3000);

    await next();
});
