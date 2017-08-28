import * as pathToRegexp from "path-to-regexp";
import * as URLSearchParams from "url-search-params";

import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
import { ModelProxyMissingError } from "../libs/errors";

export abstract class BaseEngine extends Compose<IProxyCtx> implements IEngine {
    constructor() {
        super();
    }

    // /**
    //  * 验证数据的准确性
    //  * @param obj         {JSON}        数据
    //  * @param schema      {JSONSCHEMA}  JSONSCHEMA
    //  * @return            {Boolean}
    //  */
    // protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean {
    //     // let valid: tv4.MultiResult = tv4.validateMultiple(obj, schema as tv4.JsonSchema);

    //     // if (!valid.valid) {
    //     //     throw new ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
    //     // }

    //     return true;
    // }

    /**
     * 验证数据的准确性
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {boolean}
     */
    public validate(instance: IInterfaceModel, options: IExecute): boolean {
        // instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
        // instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);

        return true;
    }

    /**
     * 代理接口
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {Promise<any>}
     */
    public async proxy(instance: IInterfaceModel, options: IExecute): Promise<any> {
        instance.getPath(options.instance);


        return {};
    }

    /**
     * 取得state所对应的环境
     * @param instance  {IInterfaceModel}   接口实例
     * @return          {String}
     */
    public getStatePath(instance: IInterfaceModel): string {
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
    public replacePath(instance: IInterfaceModel, { params = [], data = {} }: IExecute): string {
        let tokens: Array<pathToRegexp.Key | string> = pathToRegexp.parse((instance.path as string));
        let paths: Array<string> = [];

        tokens.forEach((token: pathToRegexp.Key | string) => {
            let { name } = (token as pathToRegexp.Key);

            if (!name) {
                paths.push(token as string);
            } else {
                if (!params[name] && !data[name]) {
                    throw new ModelProxyMissingError(`缺少[${name}]字段！`);
                }
                paths.push(`/${params[name] || data[name]}`);
                delete params[name];
            }
        });

        return paths.join("");
    }

    /**
     * 获取接口的全路径
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     */
    public getFullPath(instance: IInterfaceModel, options: IExecute): string {
        let url = `${this.getStatePath(instance)}` + this.replacePath(instance, options);
        let searchParams: URLSearchParams = new URLSearchParams();

        if (options.params) {
            Object.keys(options.params).forEach((key) => {
                searchParams.append(key, options.params[key]);
            });

            if (!searchParams.keys().next().done) {
                url += `?${searchParams.toString()}`;
            }
        }

        return url;
    }
}
