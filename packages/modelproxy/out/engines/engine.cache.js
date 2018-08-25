"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_factory_1 = require("../libs/base.factory");
exports.promiseFactory = new base_factory_1.BaseFactory();
exports.cacheDec = (fetchPromise, ctx, fullPath) => {
    const { executeInfo = {}, instance } = ctx;
    const { settings } = executeInfo;
    const { cache = false, reload = false, expire = undefined } = settings || {}, { method = "" } = instance || {}, proKey = fullPath + method;
    if (!cache) {
        return fetchPromise();
    }
    if (!reload) {
        exports.promiseFactory.remove(proKey);
    }
    const dataInCache = exports.promiseFactory.get(proKey);
    let { promise: promiseInCache = null, expire: expireInCache = null, cacheIn = 0 } = dataInCache || {};
    if (expireInCache && cacheIn) {
        if (cacheIn + expireInCache < Date.now()) {
            exports.promiseFactory.remove(proKey);
            promiseInCache = null;
        }
    }
    if (promiseInCache) {
        return promiseInCache;
    }
    const promise = fetchPromise();
    exports.promiseFactory.add(proKey, { promise, expire, cacheIn: Date.now() });
    return promise;
};
