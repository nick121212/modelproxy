import { BaseEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
export declare class FetchEngine<T extends IProxyCtx> extends BaseEngine<T> {
    /**
     * 初始化
     */
    init(): void;
    /**
     * 发起请求
     * @param  {IProxyCtx}                     ctx  上下文
     * @param  {(s?: string) => Promise<any>}  next 下一个中间件
     * @return {Promise<any>}
     */
    fetch(ctx: IProxyCtx, next: (s?: string) => Promise<any>): Promise<void>;
}
