export interface ICommon {
    // 唯一字符串
    key: string;
    // 接口说明
    title: string;
    // 当前配置引擎
    engine: string;
    // 当前环境
    state?: string;
    // 当前版本
    version?: string;
    // 环境所需的地址
    urls: { [id: string]: string; };
}