import { ModelProxyMissingError } from "./errors";

/**
 * 实例的工厂类
 */
export class BaseFactory<T> {
    protected instances: { [id: string]: T; } = {};

    constructor() { }
    /**
     * 添加一个实例
     * @param name     {string}    实例的名称
     * @param engine   {IEngine}   实例
     * @param override {boolean}   是否覆盖
     * @return         {void}
     */
    add(name: string, intance: T, override: boolean = false): void {
        if (override && this.instances.hasOwnProperty(name)) {
            return console.error(`已经存在name=【${name}】的engine！`);
        }
        this.instances[name] = intance;
    }

    /**
     * 获取一个实例
     * @param name 实例标志
     */
    get(name: string): T | null {
        if (this.instances.hasOwnProperty(name)) {
            return this.instances[name];
        }

        return null;
    }
    /**
    * 取出一个实例
    * @param name     {string}    实例的名称
    * @return         {T}
    */
    use(name: string): T {
        if (!name || !this.instances.hasOwnProperty(name)) {
            let engines = Object.keys(this.instances);
            
            throw new ModelProxyMissingError(`不存在name=【${name}】的engine！当前engines：【${engines.join(',')}】`);
        }

        return this.instances[name];
    }
}
