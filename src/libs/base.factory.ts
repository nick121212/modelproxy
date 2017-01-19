/**
 * 实例的工厂类
 */
export class BaseFactory<T> {
    private intances: { [id: string]: T; } = {};

    constructor() { }
    /**
     * 添加一个实例
     * @params name     {string}    实例的名称
     * @params engine   {IEngine}   实例
     * @params override {boolean}   是否覆盖
     * @return {void}
     */
    add(name: string, intance: T, override: boolean = false): void {
        if (override && this.intances.hasOwnProperty(name)) {
            return console.error(`已经存在name=【${name}】的engine！`);
        }

        this.intances[name] = intance;
    }
    /**
    * 取出一个实例
    * @params name     {string}    实例的名称
    * @return {IEngine}
    */
    use(name: string): T {
        if (!this.intances.hasOwnProperty(name)) {
            throw new Error(`不存在name=【${name}】的engine！`);
        }

        return this.intances[name];
    }
}
