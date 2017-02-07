import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxy.ctx';

export namespace ModelProxyEngine {
    export abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> {
        constructor() {
            super();
        }
    }
}