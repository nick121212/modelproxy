import { IInterfaceModelCommon } from "./interface";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "./proxyctx";
export interface IExecute {
    instance?: IInterfaceModelCommon;
    data?: any;
    params?: any;
    settings?: any;
    query?: boolean;
    before?: Compose<IProxyCtx>;
    after?: Compose<IProxyCtx>;
    error?: Compose<IProxyCtx>;
}
