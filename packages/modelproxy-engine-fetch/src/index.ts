import { DefaultEngine, globalObj, MPError } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";

if (!globalObj.fetch) {
    globalObj.fetch = require("isomorphic-fetch");
}

const { URLSearchParams } = globalObj;

const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

export class FetchEngine<T extends IProxyCtx<any, any>> extends DefaultEngine<T, any, any, any> {
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    public async fetch(ctx: T, next: (s?: string) => Promise<any>) {
        let formData: any = new URLSearchParams(),
            bodyParams = new URLSearchParams(),
            { executeInfo = {}, instance = {} } = ctx,
            body,
            headers: any = {},
            { timeout = 5000, headers: originHeaders = {}, type = "", fetch: fetchOptions = {} } = executeInfo.settings || {},
            url = this.getFullPath(instance as any, executeInfo);

        if (typeof FormData !== "undefined") {
            formData = new FormData();
        }

        // 根据type来设置不同的headers
        switch (type) {
            case "params":
                headers = Object.assign({}, defaultHeaders, headers);
                body = bodyParams;
                break;
            case "formData":
                body = formData;
                break;
            default:
                headers = Object.assign({}, defaultHeaders, headers);
                body = JSON.stringify(executeInfo.data || {});
                break;
        }

        // 合并headers
        headers = Object.assign({}, headers || {}, originHeaders);

        // 处理数据
        for (const key in executeInfo.data) {
            if (executeInfo.data.hasOwnProperty(key)) {
                const data = executeInfo.data[key];

                formData.append(key, data);
                bodyParams.append(key, data);
            }
        }

        // 发送请求
        ctx.result = await Promise.race([
            this.delay(timeout || 5000).then(() => {
                throw new MPError(`接口请求超时！(${timeout})`, "9999", ctx);
            }),
            fetch(url, {
                body: [ "GET", "OPTIONS", "HEAD" ].indexOf((instance.method as any).toUpperCase()) === -1 ? body : null,
                credentials: "same-origin",
                headers: headers,
                method: instance.method as any,
                ...fetchOptions
            })
        ]);

        await next();
    }
}
