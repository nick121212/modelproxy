
export namespace ModelProxy {
    /**
     * 实例的工厂类
     */
    export class BaseFactory<T> {
        protected intances: { [id: string]: T; } = {};

        constructor() { }
        /**
         * 添加一个实例
         * @param name     {string}    实例的名称
         * @param engine   {IEngine}   实例
         * @param override {boolean}   是否覆盖
         * @return         {void}
         */
        add(name: string, intance: T, override: boolean = false): void {
            if (override && this.intances.hasOwnProperty(name)) {
                return console.error(`已经存在name=【${name}】的engine！`);
            }
            this.intances[name] = intance;
        }
        /**
        * 取出一个实例
        * @param name     {string}    实例的名称
        * @return         {IEngine}
        */
        use(name: string): T {
            if (!this.intances.hasOwnProperty(name)) {

                throw new Error(`不存在name=【${name}】的engine！当前engines：`);
            }

            return this.intances[name];
        }
    }
}
