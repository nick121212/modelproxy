"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = require("../libs/base.factory");
exports.promiseFactory = new base_factory_1.BaseFactory();
exports.cacheDec = function (fetchPromise, ctx, fullPath) {
    var _a = ctx.executeInfo, executeInfo = _a === void 0 ? {} : _a, instance = ctx.instance;
    var settings = executeInfo.settings;
    var _b = settings || {}, _c = _b.cache, cache = _c === void 0 ? false : _c, _d = _b.reload, reload = _d === void 0 ? false : _d, _e = _b.expire, expire = _e === void 0 ? undefined : _e, _f = (instance || {}).method, method = _f === void 0 ? "" : _f, proKey = fullPath + method;
    if (!cache) {
        return fetchPromise();
    }
    if (reload) {
        exports.promiseFactory.remove(proKey);
    }
    var dataInCache = exports.promiseFactory.get(proKey);
    var _g = dataInCache || {}, _h = _g.promise, promiseInCache = _h === void 0 ? null : _h, _j = _g.expire, expireInCache = _j === void 0 ? null : _j, _k = _g.cacheIn, cacheIn = _k === void 0 ? 0 : _k;
    if (expireInCache && cacheIn) {
        if (cacheIn + expireInCache < Date.now()) {
            exports.promiseFactory.remove(proKey);
            promiseInCache = null;
        }
    }
    if (promiseInCache) {
        ctx.fromCache = true;
        return promiseInCache;
    }
    var promise = fetchPromise();
    exports.promiseFactory.add(proKey, { promise: promise, expire: expire, cacheIn: Date.now() });
    return promise;
};
