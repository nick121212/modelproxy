import * as pathToRegexp from "path-to-regexp";
import * as URLSearchParams from "url-search-params";

import {IEngine} from "../models/engine";
import {IExecute} from "../models/execute";
import {Compose} from "../libs/compose";
import {IProxyCtx} from "../models/proxyctx";
import {IInterfaceModel} from "../models/interface";
import {ModelProxyMissingError} from "../libs/errors";

export class BaseEngine<T extends IProxyCtx<D, P>, D, P extends {[key: string]: any}, C> extends Compose<T> implements IEngine<C> {
    // protected beforeMiddlewares: MiddleFunc<IProxyCtx>[] = [];
    // protected afterMiddlewares: MiddleFunc<IProxyCtx>[] = [];

    /**
     * 验证数据的准确性
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @return  {Promise<boolean>}              返回数据是否合法
     */
    public async validate(_instance: IInterfaceModel<D, P, C>, _options: IExecute<D, P>): Promise<boolean> {
        // instance.dataSchema && this.validateTv4(options.data || {}, instance.dataSchema);
        // instance.paramsSchema && this.validateTv4(options.params || {}, instance.paramsSchema);

        return true;
    }

    /**
     * 延时一段时间（单位毫秒）
     * @param  {number}        interval 需要延时的毫秒数
     * @return {Promise<any>}
     */
    public async delay(interval: number): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, interval);
        });
    }

    /**
     * 代理接口
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @param   {any[]}            otherOptions 其他的设置项
     * @return  {Promise<any>}                  接口的返回值
     */
    public async proxy(instance: IInterfaceModel<D, P, C>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<any> {
        instance.getPath(options.instance);

        return {};
    }

    /**
     * 取得state所对应的环境
     * @param   {IInterfaceModel}  instance     接口实例
     * @return  {String}                        返回当前的域名
     */
    public getStatePath(instance: IInterfaceModel<D, P, C>): string {
        if (instance.states && instance.state) {
            return instance.states[instance.state] || "";
        }

        return "";
    }

    /**
     * 替换path中的变量
     * @param   {IInterfaceModel} instance     接口模型
     * @param   {IExecute}        options      参数
     * @return  {string}                       返回替换过后的路径
     */
    public replacePath(instance: IInterfaceModel<D, P, C>, {params = {} as any}: IExecute<D, P>): string {
        const tokens: Array<pathToRegexp.Key | string> = pathToRegexp.parse((instance.path as string) || "/"),
            paths: Array<string> = [];

        // 处理path中的变量
        // 遍历所有的tokens
        tokens.forEach((token: pathToRegexp.Key | string) => {
            let {name} = token as pathToRegexp.Key;

            if (!name) {
                paths.push(token as string);
            } else {
                // if (!params[name] && !data[name]) {
                if (!params[name]) {
                    throw new ModelProxyMissingError(`缺少[${name}]字段！`);
                }
                // paths.push(`/${params[name] || data[name]}`);
                paths.push(`/${params[name]}`);
                delete params[name];
            }
        });

        return paths.join("");
    }

    /**
     * 获取接口的全路径
     * @param   {IInterfaceModel}  instance     接口模型
     * @param   {IExecute}         options      参数
     * @return  {string}                        返回路径
     */
    public getFullPath(instance: IInterfaceModel<D, P, C>, options: IExecute<D, P>): string {
        const url = [this.getStatePath(instance), this.replacePath(instance, options)],
            searchParams: URLSearchParams = new URLSearchParams();
        const {params} = options;

        if (params) {
            Object.keys(params).forEach((key) => {
                searchParams.append(key, params[key]);
            });

            let qs = searchParams.toString();

            if (qs) {
                url.push(`?${qs}`);
            }
        }

        return url.join("");
    }
}
