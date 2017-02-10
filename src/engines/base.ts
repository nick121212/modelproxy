import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxy.ctx';
import { IInterfaceModel } from '../models/interface';

export namespace ModelProxyEngine {
    export abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> {
        constructor() {
            super();
        }

        /**
         * 取得state所对应的环境
         * @param instance  {IInterfaceModel}   接口实例
         * @return  {String}
         */
        getStatePath(instance: IInterfaceModel): String {
            if (instance.states && instance.state) {
                return instance.states[instance.state] || "";
            }

            return "";
        }
    }
}