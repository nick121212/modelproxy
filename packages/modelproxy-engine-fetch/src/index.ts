import { DefaultEngine, globalObj } from "modelproxy";
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
    public async fetch(ctx: T, next: (s?: string) => Promise<any>) {
        let formData: any = new URLSearchParams(),
            bodyParams = new URLSearchParams(),
            { executeInfo = {}, instance = {} } = ctx,
            body,
            headers: any = {},
            { timeout = 5000, headers: originHeaders = {}, type = "", fetch: fetchOptions = {} } = executeInfo.settings || {},
            fullPath = this.getFullPath(instance as any, executeInfo);

        if (typeof FormData !== "undefined") {
            formData = new FormData();
        }

        // 根据type来设置不同的header
        switch (type) {
            case "params":
                headers = Object.assign({}, defaultHeaders, headers);
                body = bodyParams;
                break;
            case "formdata":
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

        // 调用解耦请求
        const fetchFunc: () => Promise<any> = fetch.bind(
            fetch,
            fullPath,
            Object.assign(
                {},
                {
                    body: [ "GET", "OPTIONS", "HEAD" ].indexOf((instance.method as any).toUpperCase()) === -1 ? body : null,
                    credentials: "same-origin",
                    headers: headers,
                    method: instance.method as any
                },
                fetchOptions
            )
        );

        // 发送请求
        ctx.result = await Promise.race([
            this.delay(timeout || 5000).then(() => {
                const err = new Error(`接口请求超时！(${timeout})`);

                err.name = "timeout";

                throw err;
            }),
            fetchFunc()
        ]);

        await next();
    }
}
