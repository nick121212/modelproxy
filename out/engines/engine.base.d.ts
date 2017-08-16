import { IEngine } from '../models/engine';
import { IExecute } from '../models/execute';
import { Compose } from '../libs/compose';
import { IProxyCtx } from '../models/proxyctx';
import { IInterfaceModel } from '../models/interface';
export declare abstract class BaseEngine extends Compose<IProxyCtx> implements IEngine {
    constructor();
    /**
     * 验证数据的准确性
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {boolean}
     */
    validate(instance: IInterfaceModel, options: IExecute): boolean;
    /**
     * 代理接口
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     * @return           {Promise<any>}
     */
    proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
    /**
     * 取得state所对应的环境
     * @param instance  {IInterfaceModel}   接口实例
     * @return          {String}
     */
    getStatePath(instance: IInterfaceModel): string;
    /**
     * 替换path中的变量
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     */
    replacePath(instance: IInterfaceModel, {params, data}: IExecute): string;
    /**
     * 获取接口的全路径
     * @param instance   {IInterfaceModel}  接口模型
     * @param options    {IExecute}         参数
     */
    getFullPath(instance: IInterfaceModel, options: IExecute): string;
}
