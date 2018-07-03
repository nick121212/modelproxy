import { ModelProxy } from "modelproxy";
import { FetchEngine } from "modelproxy-engine-fetch";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import { Response } from "express";
import config from "config";

import { SuperAgentEngine } from "./engines/superagent";
import { HttpError } from "routing-controllers";

export const proxy = new ModelProxy();

const fetch = new FetchEngine<IProxyCtx & { response: Response }>();

proxy.loadConfig(config.get("modelproxy.wz"), {});

proxy.loadConfig(config.get("modelproxy.rap"), {});

proxy.addEngines({
    superagent: new SuperAgentEngine(),
    fetch
});

fetch.init();
/**
* 请求真正的数据接口
* 判断http的状态码，如果不是200，直接抛出错误
* 判断数据的code字段，如果不是200，抛出错误
* 返回数据
*/
fetch.use(async (ctx: IProxyCtx, next: (symbol?: string) => Promise<void>) => {
    if (ctx.result.ok !== true || ctx.result.status !== 200) {
        throw new HttpError(ctx.result.status, ctx.result.statusText);
    }

    // 这里需要clone一个fetch，不然多次调用会报错（body stream already read）
    // ctx.result = await ctx.result.clone();

    await next();
});

const headerMap = ["content-type", "rediect_url"];

fetch.use(async (ctx: IProxyCtx & { response: Response }, next: (symbol?: string) => Promise<void>) => {
    if (ctx.response) {
        ctx.result.headers.forEach((val: string, name: any) => {
            if (headerMap.includes(name)) {
                ctx.response.setHeader(name, val);
            }
        });
    }

    try {
        ctx.result = await ctx.result.json();
    }
    catch{
        ctx.result = await ctx.result.text();
    }

    await next();
});
