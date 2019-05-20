import { BaseFactory } from "../libs/base.factory";
export interface CacheData {
    cacheIn: number;
    data: Promise<any>;
    expire?: number;
}
export interface CacheSetting {
    cache?: boolean;
    reload?: boolean;
    expire?: number;
    local?: boolean;
}
export declare const promiseFactory: BaseFactory<CacheData>;
export declare const removeCacheFromKey: (key: string, storage?: Storage | undefined) => void;
export declare const removeCacheFromRegexp: (regexp: RegExp, storage?: Storage | undefined) => void;
export declare const cacheDec: <T extends Function>(func: T, key: string, settings: CacheSetting, storage?: Storage | undefined) => (...args: any[]) => Promise<any>;
