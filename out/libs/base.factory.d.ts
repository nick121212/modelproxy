/**
 * 实例的工厂类
 */
export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    /**
     * 添加一个实例
     * @param name     {string}    实例的名称
     * @param engine   {IEngine}   实例
     * @param override {boolean}   是否覆盖
     * @return         {void}
     */
    add(name: string, intance: T, override?: boolean): void;
    /**
     * 获取一个实例
     * @param name 实例标志
     */
    get(name: string): T | null;
    /**
    * 取出一个实例
    * @param name     {string}    实例的名称
    * @return         {T}
    */
    use(name: string): T;
}
