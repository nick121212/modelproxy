import { BaseFactory } from "../libs/base.factory";
import { isString } from "util";

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

export const promiseFactory = new BaseFactory<CacheData>();

/**
 * 从缓存中获取数据
 * @param {Storage} storage 缓存对象
 * @param {String}  key     Key值
 * @returns {null|}
 */
const getDataFromStorage = (storage?: Storage, key: string = "") => {
    if (!storage) {
        return null;
    }

    const { expire = 0, cacheIn = 0, data = null } = storage.getItem(key) || ({} as any);

    if (expire && cacheIn && cacheIn + expire < Date.now()) {
        storage.removeItem(key);

        return null;
    }

    if (!data) {
        return null;
    }

    if (isString(data)) {
        return Promise.resolve(JSON.parse(data));
    }

    return data;
};

/**
 * 对方法做缓存，方法必须返回Promise
 * 返回 {() => Promise<any>}
 * @param func         {Promise<any>}                                                    需要被高阶的函数
 * @param key          {string}                                                          缓存的唯一key
 * @param settings     {{ cache?: boolean; reload?: boolean; expire?: number; local?: boolean; }}          缓存设置
 * @example
 *  const cachePromise = cacheDec(()=>{
 *      return Promise.resolve(1);
 *  }, "test", { cache:true });
 *  cachePromise().then(console.log).cache(console.error)
 * @returns {Promise<any>}
 */
export const cacheDec = <T extends Function>(func: T, key: string, settings: CacheSetting, storage?: Storage): ((...args: any[]) => Promise<any>) => {
    const { cache = false, reload = false, expire = undefined, local = true } = settings || {};

    return function(...args: any[]): Promise<any> {
        // 如果不缓存直接调用方法
        if (!cache) {
            return func(...args);
        }

        // 删除缓存
        if (reload) {
            promiseFactory.removeItem(key);
            // 清除掉本地缓存
            if (storage) {
                storage.removeItem(key);
            }
        }

        // 先从local中获取，如果没有再从内存中获取
        let promiseInCache = local ? getDataFromStorage(storage, key) : null;

        if (!promiseInCache) {
            promiseInCache = getDataFromStorage(promiseFactory, key);
        }

        // 命中缓存
        if (promiseInCache) {
            return promiseInCache;
        }

        // 如果错误的话，清除掉缓存
        const promise = func(...args).catch((e: Error) => {
            promiseFactory.removeItem(key);

            throw e;
        });

        // 添加缓存
        promiseFactory.add(key, { data: promise, expire, cacheIn: Date.now() });

        return promise;
    };
};

/**
 * 使用缓存方法
 * @param {Storage} storage 缓存对象
 * @returns {Function}
 */
export const cacheDecFunc = (storage?: Storage) => {
    return <T extends Function>(func: T, key: string, settings: CacheSetting) => {
        const cachedFunc = cacheDec<T>(func, key, settings, storage);

        if (!storage) {
            return cachedFunc;
        }

        return function(...args: any[]) {
            const { cache = false, expire = undefined, local = true } = settings || {};
            const promise = cachedFunc(...args);

            if (local && cache) {
                promise.then((data: any) => {
                    storage.setItem(key, JSON.stringify({ data, expire, cacheIn: Date.now() }));
                });
            }

            return promise;
        };
    };
};
