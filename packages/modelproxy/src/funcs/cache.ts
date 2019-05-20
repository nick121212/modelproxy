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

    let dataFromStorage = storage.getItem(key);

    if (typeof dataFromStorage === "string") {
        try {
            dataFromStorage = JSON.parse(dataFromStorage);
        } catch (e) {
            return null;
        }
    }

    const { expire = 0, cacheIn = 0, data = null } = dataFromStorage || ({} as any);

    if (expire && cacheIn && cacheIn + expire < Date.now()) {
        storage.removeItem(key);

        return null;
    }

    if (!data) {
        return null;
    }

    return Promise.resolve(data);
};

/**
 * 根据Key清除缓存
 * @param   {String}  key      唯一键值
 * @param   {Storage} storage  缓存类
 * @returns {void}
 */
export const removeCacheFromKey = (key: string, storage?: Storage): void => {
    promiseFactory.removeItem(key);

    if (storage) {
        storage.removeItem(key);
    }
};

/**
 * 根据正则来删除缓存
 * @param   {RegExp}  regexp   正则表达式
 * @param   {Storage} storage  缓存类
 * @returns {void}
 */
export const removeCacheFromRegexp = (regexp: RegExp, storage?: Storage): void => {
    const removeKeys: string[] = [];

    promiseFactory.forEach((key: string) => {
        if (regexp.test(key)) {
            removeKeys.push(key);
        }
    });

    removeKeys.forEach((key: string) => {
        promiseFactory.removeItem(key);

        if (storage) {
            storage.removeItem(key);
        }
    });
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

    function CacheFunc<D>(...args: any[]): Promise<D> {
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

            if (storage) {
                storage.removeItem(key);
            }

            throw e;
        });

        // 添加缓存, 为了并发多次请求的情况下，故添加内存的promise缓存
        promiseFactory.add(key, { data: promise, expire, cacheIn: Date.now() });

        if (storage) {
            promise.then((d: any) => {
                storage.setItem(key, JSON.stringify({ data: d, expire, cacheIn: Date.now() }));
            });
        }

        return promise;
    }

    return CacheFunc;
};
