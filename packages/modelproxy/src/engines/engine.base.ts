import * as pathToRegexp from "path-to-regexp";
import "url-search-params-polyfill";

import { IEngine } from "../models/engine";
import { IExecute } from "../models/execute";
import { Compose } from "../libs/compose";
import { IProxyCtx } from "../models/proxyctx";
import { IInterfaceModel } from "../models/interface";
import { ModelProxyMissingError } from "../libs/errors";

export class BaseEngine<T extends IProxyCtx> extends Compose<T> implements IEngine {
    constructor() {
        super();
    }

    /**
     * 验证数据的准确性
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @returns {Promise<boolean>}              返回数据是否合法
     */
    public async validate(_instance: IInterfaceModel, _options: IExecute): Promise<boolean> {
        // instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
        // instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);

        return true;
    }

    /**
     * 代理接口
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @param   {any[]}            otherOptions 其他的设置项
     * @return  {Promise<any>}                  接口的返回值
     */
    public async proxy(instance: IInterfaceModel, options: IExecute, ...otherOptions: any[]): Promise<any> {
        instance.getPath(options.instance);

        return {};
    }

    /**
     * 取得state所对应的环境
     * @param   {IInterfaceModel}  instance     接口实例
     * @return  {String}                        返回当前的域名
     */
    public getStatePath(instance: IInterfaceModel): string {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }

        return "";
    }

    /**
     * 替换path中的变量
     * @param   {IInterfaceModel} instance     接口模型
     * @param   {IExecute}        options      参数
     * @returns {string}                       返回替换过后的路径
     */
    public replacePath(instance: IInterfaceModel, { params = [], data = {} }: IExecute): string {
        const tokens: Array<pathToRegexp.Key | string> = pathToRegexp.parse((instance.path as string)),
            paths: Array<string> = [];

        // 处理path中的变量
        // 遍历所有的tokens
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
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @returns {string}                        返回路径
     */
    public getFullPath(instance: IInterfaceModel, options: IExecute): string {
        const url = [this.getStatePath(instance), this.replacePath(instance, options)],
            searchParams: URLSearchParams = new URLSearchParams();

        if (options.params) {
            Object.keys(options.params).forEach((key) => {
                searchParams.append(key, options.params[key]);
            });

            let qs = searchParams.toString();

            if (qs) {
                url.push(`?${qs}`);
            }
        }

        return url.join("");
    }
}
