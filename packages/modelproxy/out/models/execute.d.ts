import { IInterfaceModelCommon } from "./interface";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "./proxyctx";
export interface IExecute<D, P> {
    instance?: IInterfaceModelCommon<any>;
    data?: D;
    params?: P;
    settings?: any;
    query?: boolean;
    before?: Compose<IProxyCtx<D, P>>;
    after?: Compose<IProxyCtx<D, P>>;
    error?: Compose<IProxyCtx<D, P>>;
    beforeProxy?: (ctx: IProxyCtx<D, P>) => void;
    afterProxy?: (ctx: IProxyCtx<D, P>) => void;
}
