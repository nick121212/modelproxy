import * as tv4 from "tv4";
import * as jpp from "json-pointer";

import { IEngine } from '../models/engine';
import { IExeucte } from '../models/execute';
import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxy.ctx';
import { IInterfaceModel } from '../models/interface';
import { ModelProxyMissingError, ModelProxyValidaterError } from '../libs/errors';


export namespace ModelProxyEngine {
    export abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> implements IEngine {
        constructor() {
            super();
        }

        /**
         * 验证数据的准确性
         * @param obj         {JSON}        数据
         * @param schema      {JSONSCHEMA}  JSONSCHEMA
         * @return            {Boolean}
         */
        protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean {
            let valid: tv4.MultiResult = tv4.validateMultiple(obj, schema as tv4.JsonSchema);

            if (!valid.valid) {
                throw new ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
            }

            return true;
        }

        /**
         * 验证数据的准确性
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         * @return           {boolean}
         */
        validate(instance: IInterfaceModel, options: IExeucte): boolean {
            instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
            instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);

            return true;
        }

        /**
         * 代理接口
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         * @return           {Promise<any>}
         */
        async proxy(instance: IInterfaceModel, options: IExeucte): Promise<any> {
            return {};
        }

        /**
         * 取得state所对应的环境
         * @param instance  {IInterfaceModel}   接口实例
         * @return          {String}
         */
        getStatePath(instance: IInterfaceModel): string {
            if (instance.states && instance.state) {
                return instance.states[instance.state] || "";
            }

            return "";
        }

        /**
         * 替换path中的变量
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         */
        replacePath(instance: IInterfaceModel, options: IExeucte): string {
            const pathRegexp = /{[^}]*}/g;
            const matchs = instance.path.match(pathRegexp);

            for (let key in matchs) {
                if (matchs.hasOwnProperty(key)) {
                    let match = matchs[key];
                    let field = match.match(/[^{}]/g).join('');

                    // console.log(jpp.escape("/login/username")); console.log(jpp.unescape(field));

                    if (jpp(options).has(field)) {
                        instance.path = instance.path.replace(match, jpp(options).get(field))
                    } else {
                        throw new Error(`替换Path出错，没有找到字段${field}！`);
                    }
                }
            }

            return instance.path;
        }

        /**
         * 获取接口的全路径
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         */
        getFullPath(instance: IInterfaceModel, options: IExeucte): string {
            let url = `${this.getStatePath(instance)}` + this.replacePath(instance, options);

            if (options.params) {
                Object.keys(options.params).forEach((key) => {
                    url["searchParams"].append(key, options.params[key]);
                });
            }

            return url;
        }
    }
}