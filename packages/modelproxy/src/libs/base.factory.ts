// import { ModelProxyMissingError } from "./errors";

/**
 * 实例的工厂类
 */
export class BaseFactory<T> implements Storage {
    protected instances: { [id: string]: T } = {};
    public length: number = 0;

    [key: string]: any;

    /**
     * 添加一个实例
     * @param   {string}  name         实例的名称
     * @param   {T}       instance      实例
     * @param   {boolean} override     是否覆盖
     * @return  {void}
     */
    public add(name: string, instance: T, override = false): void {
        if (!override && this.instances.hasOwnProperty(name)) {
            return console.error(`已经存在name=【${name}】的实例！`);
        }
        this.instances[name] = instance;
        this.length++;
    }

    public setItem(key: string, value: string) {
        this.add(key, value as any);
    }

    /**
     * 删除当前实例
     * @param   {string} name 实例名
     * @return  {Boolean}
     */
    private remove(name: string): boolean {
        if (this.has(name)) {
            this.length--;
        }

        return Reflect.deleteProperty(this.instances, name);
    }

    public removeItem(name: string) {
        this.remove(name);
    }

    /**
     * 判断是否有当前实例
     * @param   {string} name 实例名
     * @return  {Boolean}
     */
    public has(name: string): boolean {
        return !!this.get(name);
    }

    /**
     * 获取一个实例
     * @param   {string} name 实例标志
     * @return  {T|null} 实例
     */
    public get(name: string): T | null {
        if (this.instances.hasOwnProperty(name)) {
            return this.instances[name];
        }

        return null;
    }

    public getItem(name: string) {
        return this.get(name) as any;
    }

    /**
     * 循环遍历数据
     * @param   {Function} fn  需要还行的方法
     * @return  {Void}
     */
    public forEach(fn: (key: string, instance: T) => void): void {
        if (!fn || fn.constructor !== Function) {
            return;
        }

        for (const key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                const element = this.instances[key];

                fn(key, element);
            }
        }
    }

    public clear() {
        this.instances = {};
        this.length = 0;
    }

    public key(index: number) {
        return "";
    }
}
