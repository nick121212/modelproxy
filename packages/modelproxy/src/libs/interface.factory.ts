import { IEngine } from "../models/engine";
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { BaseFactory } from "./base.factory";
import { engineFactory } from "./engine.factory";
import { IExecute } from "../models/execute";

export class InterfaceFactory<R, D, P extends { [key: string]: any }, C> extends BaseFactory<IInterfaceModel<R, D, P, C>> {
    constructor(public readonly overrideInterfaceConfig?: IInterfaceModelCommon<C>) {
        super();
    }

    /**
    * 添加一个实例
    * @param   {string}  name        实例的名称
    * @param   {IEngine} engine      实例
    * @param   {boolean} override    是否覆盖
    * @return  {void}
    */
    public add(name: string, instance: IInterfaceModel<R, D, P, C>, override = false): void {
        super.add(
            name,
            Object.assign(instance, {
                delete: this.custom.bind(this, instance as any, "DELETE"),
                execute: this.execute.bind(this, instance as any),
                get: this.custom.bind(this, (instance as any) as any, "GET", null),
                getFullPath: this.getFullPath.bind(this, instance),
                getOne: this.custom.bind(this, instance as any, "GET"),
                getPath: this.getPath.bind(this, instance),
                post: this.custom.bind(this, instance as any, "POST", null),
                put: this.custom.bind(this, instance as any, "PUT"),
                replacePath: this.replacePath.bind(this, instance)
            }),
            override
        );
    }
    /**
     * 执行函数
     * @param   {IInterfaceModel} instance      接口的具体实例
     * @param   {IExecute}        options      调用接口所需的data
     * @param   {any[]}           otherOptions 其他的设置项
     * @return  {Promise<any>}
     */
    public async execute(instance: IInterfaceModel<R, D, P, C>, options: IExecute<D, P>, ...otherOptions: any[]): Promise<R> {
        let engine: IEngine<any>;
        let instanceMerge: IInterfaceModel<R, D, P, C>;
        let { instance: extraInstance = {} } = options;

        // 合并instance的数据
        instanceMerge = this.mergeInstance(instance, extraInstance);

        const { engine: engineName, defaultExecuteInfo = {} } = instanceMerge;

        // 判断engine是否存在
        if (!engineFactory.has(engineName || "")) {
            throw new Error(`engine [${engineName}] can't be found.`);
        }

        // 获取engine
        engine = engineFactory.getItem(engineName || "default");

        try {
            // 验证数据的准确性
            await engine.validate(instanceMerge, options);
        } catch (e) {
            throw e;
        }

        // 调用engine.proxy方法
        return engine.proxy(instanceMerge, Object.assign({}, defaultExecuteInfo, options), ...otherOptions);
    }
    /**
     * 处理请求
     * @param   {IInterfaceModel}        instance     接口的具体实例
     * @param   {string}                 type         请求类型
     * @param   {string | number | null} id           id
     * @param   {IExecute}               options      请求参数
     * @param   {any[]}                  otherOptions 其他的设置项
     * @return  {Promise<any>}
     */
    public async custom(instance: IInterfaceModel<R, D, P, C>, type: string, id?: string | number | null, options: IExecute<D, P> = {}, ...otherOptions: any[]): Promise<R> {
        let { instance: extraInstance = {}, params = {} as any } = options;

        extraInstance.method = type;
        if (id) {
            extraInstance.path = (extraInstance.path || instance.path) + "/:__id__";
            params.__id__ = id;
        }

        options.instance = extraInstance;
        options.params = params;

        return this.execute(instance, options, ...otherOptions);
    }
    /**
    * 合并两个实例
    * @param   {IInterfaceModel}       instance       实例名称
    * @param   {IInterfaceModelCommon} extendInstance 需要合并的实例
    * @return {IInterfaceModel}
    */
    private mergeInstance(instance: IInterfaceModel<R, D, P, C>, extendInstance: IInterfaceModelCommon<C> = {}): IInterfaceModel<R, D, P, C> {
        return Object.assign({}, instance, extendInstance);
    }

    /**
     * 自行engine下的方法
     * @param   {IInterfaceModel}       instance       实例名称
     * @param   {IInterfaceModelCommon} extendInstance 需要合并的实例
     * @param   {string}                method         具体的方法
     * @return  {string}
     */
    private executeEngineMethod(instance: IInterfaceModel<R, D, P, C>, extendInstance: IInterfaceModelCommon<C> = {}, method: string, options: IExecute<D, P> = {}) {
        // let engine: IEngine<any>, methodFunc: any, instanceMerge: IInterfaceModel<R, D, P, C>;

        let instanceMerge = this.mergeInstance(instance, extendInstance);
        let engine = engineFactory.getItem("default");
        let methodFunc = (engine as any)[method];

        if (methodFunc) {
            return methodFunc.call(engineFactory.getItem("default"), instanceMerge, options);
        }

        return "";
    }
    /**
     * 获取接口的路径
     * @param  {IInterfaceModel}       instance       实例名称
     * @param  {IInterfaceModelCommon} extendInstance 需要合并的实例
     * @return {string}
     */
    private getPath(instance: IInterfaceModel<R, D, P, C>, extendInstance: IInterfaceModelCommon<C> = {}): string {
        let instanceMerge: IInterfaceModel<R, D, P, C>;

        instanceMerge = this.mergeInstance(instance, extendInstance);

        return this.executeEngineMethod(instance, extendInstance, "getStatePath") + instanceMerge.path;
    }
    /**
     * 获取接口的路径
     * @param   {IInterfaceModel} instance       实例名称
     * @param   {IExecute}        extendInstance 需要合并的实例
     * @return {string}
     */
    private getFullPath(instance: IInterfaceModel<R, D, P, C>, options: IExecute<D, P> = {}): string {
        return this.executeEngineMethod(instance, options.instance, "getFullPath", options);
    }
    /**
    * 替换接口的路径
    * @param   {IInterfaceModel} instance       实例名称
    * @param   {IExecute}        extendInstance 需要合并的实例
    * @return  {string}
    */
    private replacePath(instance: IInterfaceModel<R, D, P, C>, options: IExecute<D, P> = {}) {
        let engine: IEngine<any>, instanceMerge: IInterfaceModel<R, D, P, C>;

        instanceMerge = this.mergeInstance(instance, options.instance);
        engine = engineFactory.getItem("default");

        return engine.replacePath(instanceMerge, options);
    }
}
