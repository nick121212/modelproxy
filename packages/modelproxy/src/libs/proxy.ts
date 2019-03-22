import { IExecute } from "../models/execute";
import { IEngine } from "../models/engine";
import { IInterfaceModel, IInterfaceModelCommon } from "../models/interface";
import { IProxyConfig } from "../models/proxy.config";
import { InterfaceFactory } from "./interface.factory";
import { engineFactory } from "./engine.factory";
import { Compose } from "./compose";
import { ModelProxyMissingError } from "./errors";
import { BaseFactory } from "./base.factory";

export type NormalExecuteInfo = { ns?: string; key?: string; options?: IExecute; otherOptions?: any[] };

export class ModelProxy extends Compose<any> {
    private nsFactory: BaseFactory<InterfaceFactory> = new BaseFactory<InterfaceFactory>();
    public forEach = this.nsFactory.forEach.bind(this.nsFactory);

    constructor(private defaultExecuteInfo?: IExecute) {
        super();
    }

    /**
     * 添加engines
     * @param   { { [id: string]: IEngine; } } engines   引擎对象
     * @return  {ModelProxy}
     */
    public addEngines(engines: { [id: string]: IEngine }): ModelProxy {
        for (let key in engines) {
            if (engines.hasOwnProperty(key)) {
                engineFactory.add(key, engines[key], true);
            }
        }

        return this;
    }
    /**
     * 导入配置
     * @param  {IProxyConfig}            config                    配置信息
     * @param  {overrideInterfaceConfig} overrideInterfaceConfig   覆盖的参数
     * @return {ModelProxy}                                        当前实例
    */
    public loadConfig(config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon = {}): ModelProxy {
        let nsFactory = this.nsFactory.getItem(config.key as string);

        if (!nsFactory) {
            nsFactory = new InterfaceFactory(
                Object.assign(
                    {
                        state: config.state,
                        states: config.states,
                        version: config.version
                    },
                    overrideInterfaceConfig
                )
            );
            // this.nsFactory.add(config.key as string,
            //     this.initInterfaces(new InterfaceFactory(), config, overrideInterfaceConfig));
            // return this;
        }

        this.nsFactory.add(config.key as string, this.initInterfaces(nsFactory, config, Object.assign({}, nsFactory.overrideInterfaceConfig || {}, overrideInterfaceConfig)));

        return this;
    }

    /**
     * 执行一个接口方法
     * @param   {String}    ns       接口的命名空间
     * @param   {String}    key      接口的key
     * @param   {IExecute}  options  调用接口所需的参数
     * @return  {Promise<any>}
     */
    public async execute(ns: string, key: string, options: IExecute = {}, ...otherOptions: any[]) {
        const interfaces = this.getNs(ns),
            instance = interfaces.getItem(key);

        if (!instance) {
            throw new ModelProxyMissingError(`没有发现/${ns}/${key}的接口方法！`);
        }

        return instance.execute(options, ...otherOptions);
    }

    /**
     * 执行多个接口请求
     * @param   {{ [key: string]: () => Promise<any> }} inters 接口以key:value的形式
     * @return  {Promise<any>}
     * @example
     *  proxy.executeAll({
     *      a: proxy.execute.bind(proxy, nsA, keyA, {}),
     *      b: proxy.execute.bind(proxy, nsB, keyB, {})
     *  });
     */
    public async executeAll(inters: { [key: string]: () => Promise<any> }): Promise<any> {
        const maps: Promise<any>[] = [];

        // 如果没有配置inters，则直接返回null
        if (!inters || !Object.keys(inters).length) {
            return new Promise((resolve: (val: any | PromiseLike<any>) => void) => {
                resolve(null);
            });
        }

        // 处理所有的key
        Object.keys(inters).forEach((key: string) => {
            maps.push(
                inters[key]().then((data: any) => {
                    return {
                        [key]: data
                    };
                })
            );
        });

        // 返回promise
        return Promise.all(maps).then((data: any[]) => {
            return data.reduce((prev: any, next: any) => {
                return Object.assign({}, prev, next);
            });
        });
    }

    /**
     * race 比赛，快的先返回
     * @param   {Array<NormalExecuteInfo | Promise<any>>}  inters 接口们
     * @return  {Promise<any>}
     */
    public async race(inters: Array<NormalExecuteInfo | Promise<any>>): Promise<any> {
        const maps: any[] = inters.map((inter: NormalExecuteInfo | Promise<any>) => {
            if ((inter as Promise<any>).then) {
                return inter;
            }

            const { ns = "", key = "", options = {}, otherOptions = [] } = inter as NormalExecuteInfo;

            return this.execute(ns, key, options, ...otherOptions);
        });

        return Promise.race(maps);
    }

    /**
     * 是否有命名空间(废弃)
     * @param  {string}    ns 空间名
     * @return { boolean }
     */
    public hasNs(ns: string): boolean {
        return !!this.nsFactory.getItem(ns);
    }

    /**
     * 获取namespace
     * @param  {string}             ns     空间名
     * @return { InterfaceFactory }
     */
    public getNs(ns: string): InterfaceFactory {
        if (!this.nsFactory.has(ns)) {
            throw new ModelProxyMissingError(`没有找到${ns}空间;`);
        }

        return this.nsFactory.getItem(ns);
    }

    /**
     * 生成N级的rest风格接口
     * @param   {string}   ns    命名空间
     * @param   {string[]} keys  需要合并的接口的key
     * @return  {(...ids: any[]) : IInterfaceModel}
     * @example
     *     proxy.mixin("test","users","articles")(1000).get(10) => GET /users/1000/articles/10
     */
    public mixin(ns: string, ...keys: string[]): ((...ids: any[]) => IInterfaceModel) | null {
        if (!keys.length) {
            throw new ModelProxyMissingError(`必须制定至少一个Key！`);
        }

        const interfaces = this.getNs(ns),
            idKeys: IInterfaceModel[] = [],
            lastKey: string = keys.pop() as string,
            lastInterface = interfaces.getItem(lastKey);

        if (!lastInterface) {
            return null;
        }

        keys.forEach((k: string) => {
            let instance = interfaces.getItem(k);

            if (!instance) {
                throw new ModelProxyMissingError(`${k}不存在于空间${ns}！`);
            }

            idKeys.push(instance);
        });

        return (...ids: any[]) => {
            if (ids.length !== idKeys.length) {
                throw new Error(`传入的参数个数不正确！`);
            }

            let paths: string[] = [];

            idKeys.forEach((k: IInterfaceModel, idx: number) => {
                paths.push(
                    k.replacePath({
                        instance: {
                            path: k.path + "/:" + k.key
                        },
                        params: {
                            [k.key as string]: ids[idx]
                        }
                    })
                );
            });

            lastInterface.path = paths.concat([ lastInterface.path as string ]).join("");

            return lastInterface;
        };
    }

    /**
     * 初始化配置文件中的接口信息
     * @param   {IProxyConfig}      config  配置信息
     * @return  {InterfaceFactory}
     */
    private initInterfaces(ifFactory: InterfaceFactory, config: IProxyConfig, overrideInterfaceConfig: IInterfaceModelCommon = {}): InterfaceFactory {
        config.interfaces.forEach((i: IInterfaceModelCommon) => {
            const interModel: IInterfaceModel = Object.assign(
                {},
                {
                    defaultExecuteInfo: this.defaultExecuteInfo,
                    engine: config.engine,
                    mockDir: config.mockDir,
                    ns: config.key,
                    state: config.state,
                    states: config.states
                },
                i,
                overrideInterfaceConfig || {}
            ) as IInterfaceModel;

            ifFactory.add(i.key as string, interModel, true);
        });

        return ifFactory;
    }
}
