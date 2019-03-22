import { BaseFactory } from "../libs/base.factory";
export declare const promiseFactory: BaseFactory<{
    cacheIn: number;
    data: Promise<any>;
    expire?: number | undefined;
}>;
export interface CacheSetting {
    cache?: boolean;
    reload?: boolean;
    expire?: number;
    local?: boolean;
}
export declare const cacheDec: <T extends Function>(func: T, key: string, settings: CacheSetting, storage?: Storage | undefined) => (...args: any[]) => Promise<any>;
export declare const cacheDecFunc: (storage?: Storage | undefined) => <T extends Function>(func: T, key: string, settings: CacheSetting) => (...args: any[]) => Promise<any>;
