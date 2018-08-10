import { IInterfaceModelCommon } from "./interface";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "./proxyctx";
export interface IExecute {
    instance?: IInterfaceModelCommon;
    data?: any;
    params?: any;
    settings?: any;
    query?: boolean;
    globalBefore?: Compose<IProxyCtx>;
    globalAfter?: Compose<IProxyCtx>;
    before?: Compose<IProxyCtx>;
    after?: Compose<IProxyCtx>;
}
