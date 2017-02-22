import { IEngine } from '../models/engine';
import { IInterfaceModel } from "../models/interface";
import { MethodType } from '../models/method';
import * as _ from "lodash";
import * as factory from "./base.factory";
import * as engineFactory from "./engine.factory";
import { IExeucte } from '../models/execute';
import * as tv4 from "tv4";

export namespace ModelProxy {
    export class InterfaceFactory extends factory.ModelProxy.BaseFactory<IInterfaceModel> {
        constructor() { super(); }

        /**
        * 添加一个实例
        * @param name     {string}    实例的名称
        * @param engine   {IEngine}   实例
        * @param override {boolean}   是否覆盖
        * @return {void}
        */
        add(name: string, intance: IInterfaceModel, override: boolean = false): void {
            super.add(name, intance, override);

            _.extend(this, {
                [name]: this.execute.bind(this, intance)
            });
        }

        /**
         * 执行函数
         * @param intance        {IInterfaceModel}  接口的具体实例
         * @param options        {IExeucte}         调用接口所需的data
         * @return               {Promise<any>}
         */
        async execute(instance: IInterfaceModel, options: IExeucte): Promise<any> {
            let engine: IEngine;
            let iinstance: IInterfaceModel = { method: MethodType.GET, title: '', path: '', key: '' };

            _.extend(iinstance, instance, options.instance || {});
            engine = engineFactory.ModelProxy.engineFactory.use(iinstance.engine);

            // 验证数据的准确性
            engine.validate(iinstance, options);

            return engine.proxy(iinstance, options);
        }
    }
}