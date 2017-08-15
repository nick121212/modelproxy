import { IEngine } from '../models/engine';
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { MethodType } from '../models/method';
import { BaseFactory } from "./base.factory";
import { engineFactory } from "./engine.factory";
import { IExecute } from '../models/execute';

export class InterfaceFactory extends BaseFactory<IInterfaceModel> {
    constructor() { super(); }

    /**
    * 添加一个实例
    * @param name     {string}    实例的名称
    * @param engine   {IEngine}   实例
    * @param override {boolean}   是否覆盖
    * @return {void}
    */
    add(name: string, instance: IInterfaceModel, override: boolean = false): void {
        super.add(name, instance, override);

        Object.assign(instance, {
            execute: this.execute.bind(this, instance),
            getPath: this.getPath.bind(this, instance),
            get: this.custom.bind(this, instance, "GET"),
            post: this.custom.bind(this, instance, "POST", null),
            put: this.custom.bind(this, instance, "PUT"),
            delete: this.custom.bind(this, instance, "DELETE")
            // patch: this.custom.bind(this, instance, "GET"),
        });
    }
    /**
     * 合并两个实例
     * @param instance       实例名称
     * @param extendInstance 需要合并的实例 
     */
    private megreInstance(instance: IInterfaceModel, extendInstance: IInterfaceModelCommon): IInterfaceModel {
        return Object.assign({}, instance, extendInstance);
    }

    /**
     * 获取接口的路径
     * @param instance       实例名称
     * @param extendInstance 需要合并的实例 
     */
    private getPath(instance: IInterfaceModel, extendInstance: IInterfaceModelCommon = {}): string {
        let engine: IEngine;
        let iinstance: IInterfaceModel;

        iinstance = this.megreInstance(instance, extendInstance);

        engine = engineFactory.use("default");

        return engine.getStatePath(iinstance) + iinstance.path;
    }

    /**
     * 执行函数
     * @param intance        {IInterfaceModel}  接口的具体实例
     * @param options        {IExeucte}         调用接口所需的data
     * @return               {Promise<any>}
     */
    async execute(instance: IInterfaceModel, options: IExecute): Promise<any> {
        let engine: IEngine;
        let iinstance: IInterfaceModel;
        let { instance: extraInstance = {} } = options;

        iinstance = this.megreInstance(instance, extraInstance);
        engine = engineFactory.use(iinstance.engine as string);

        // 验证数据的准确性
        engine.validate(iinstance, options);

        return engine.proxy(iinstance, options);
    }

    async custom(instance: IInterfaceModel, type: string, id?: string | number | null, options: IExecute = {}) {
        let { instance: extraInstance = {}, params = {} } = options;

        extraInstance.method = type;
        if (id) {
            extraInstance.path = instance.path + "/:id";
            params.id = id;
        }

        options.instance = extraInstance;
        options.params = params;

        return await this.execute(instance, options);
    }
}