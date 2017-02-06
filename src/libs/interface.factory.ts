import { IInterfaceModel } from "../models/interface";
import * as _ from "lodash";
import * as factory from "./base.factory";
import * as engineFactory from "./engine.factory";

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
            this[name] = this.execute.bind(this, intance);
        }

        /**
         * 执行函数
         * @param intance        {IInterfaceModel}  接口的具体实例
         * @param data           {any}              调用接口所需的data
         * @param params         {any}              调用接口所需的querystring
         * @param intanceCover   {IInterfaceModel}  接口的实例，覆盖配置中的数据
         * @return               {any}
         */
        async execute(intance: IInterfaceModel, data: any, params: any, intanceCover: IInterfaceModel) {
            let engine;

            intance = _.extend({}, intance, intanceCover);
            engine = engineFactory.ModelProxy.engineFactory.use(intance.engine);

            return engine.proxy(intance, data, params);
        }
    }
}