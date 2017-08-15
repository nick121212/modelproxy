import { IInterfaceModel } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { IExecute } from '../models/execute';
export declare class InterfaceFactory extends BaseFactory<IInterfaceModel> {
    constructor();
    /**
    * 添加一个实例
    * @param name     {string}    实例的名称
    * @param engine   {IEngine}   实例
    * @param override {boolean}   是否覆盖
    * @return {void}
    */
    add(name: string, instance: IInterfaceModel, override?: boolean): void;
    /**
     * 合并两个实例
     * @param instance       实例名称
     * @param extendInstance 需要合并的实例
     */
    private megreInstance(instance, extendInstance);
    /**
     * 获取接口的路径
     * @param instance       实例名称
     * @param extendInstance 需要合并的实例
     */
    private getPath(instance, extendInstance?);
    /**
     * 执行函数
     * @param intance        {IInterfaceModel}  接口的具体实例
     * @param options        {IExeucte}         调用接口所需的data
     * @return               {Promise<any>}
     */
    execute(instance: IInterfaceModel, options: IExecute): Promise<any>;
    custom(instance: IInterfaceModel, type: string, id?: string | number | null, options?: IExecute): Promise<any>;
}
