import { IInterfaceModelCommon } from "./interface";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "./proxyctx";

export interface IExecute {
    /**
     * 当前执行的接口详情
     */
    instance?: IInterfaceModelCommon;
    /**
     * 接口数据
     */
    data?: any;
    /**
     * 接口参数
     */
    params?: any;
    /**
     * 接口配置
     */
    settings?: any;
    /**
     * 是否需要query
     */
    query?: boolean;

    // globalBefore?: Compose<IProxyCtx>;
    // globalAfter?: Compose<IProxyCtx>;

    before?: Compose<IProxyCtx>;
    after?: Compose<IProxyCtx>;
    error?: Compose<IProxyCtx>;

    /**
     * 发出请求之前触发
     */
    beforeProxy?: (ctx: IProxyCtx) => void;
    /**
     * 请求完成后触发
     */
    afterProxy?: (ctx: IProxyCtx) => void;
}
