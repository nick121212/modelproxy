import {IInterfaceModelCommon} from "./interface";
import {Compose} from "../libs/compose";
import {IProxyCtx} from "./proxyctx";

export interface IExecute<D, P> {
    /**
     * 当前执行的接口详情
     */
    instance?: IInterfaceModelCommon<any>;
    /**
     * 接口数据
     */
    data?: D;
    /**
     * 接口参数
     */
    params?: P;
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

    before?: Compose<IProxyCtx<D, P>>;
    after?: Compose<IProxyCtx<D, P>>;
    error?: Compose<IProxyCtx<D, P>>;

    /**
     * 发出请求之前触发
     */
    beforeProxy?: (ctx: IProxyCtx<D, P>) => void;
    /**
     * 请求完成后触发
     */
    afterProxy?: (ctx: IProxyCtx<D, P>) => void;
}
