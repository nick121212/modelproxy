import { IEngine } from '../models/engine';
import { IExeucte } from '../models/execute';
import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxy.ctx';
import { IInterfaceModel } from '../models/interface';
import * as tv4 from "tv4";
import { ModelProxyMissingError, ModelProxyValidaterError } from '../libs/errors';

export namespace ModelProxyEngine {
    export abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> implements IEngine {
        constructor() {
            super();
        }

        protected validateTv4(obj: JSON, schema: JsonSchema):boolean {
            let valid: tv4.MultiResult = tv4.validateMultiple(obj, schema as tv4.JsonSchema);

            if (!valid.valid) {
                throw new ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
            }

            return true;
        }

        validate(instance: IInterfaceModel, options: IExeucte): boolean {
            instance.dataSchema && this.validateTv4(options.data, instance.dataSchema);
            instance.paramsSchema && this.validateTv4(options.params, instance.paramsSchema);

            return true;
        }

        async proxy(instance: IInterfaceModel, options: IExeucte): Promise<any> {
            return {};
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