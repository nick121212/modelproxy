import { DefaultEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
export declare class FetchEngine<T extends IProxyCtx<any, any>> extends DefaultEngine<T, any, any, any> {
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx: T, next: (s?: string) => Promise<any>): Promise<void>;
}
