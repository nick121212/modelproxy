"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = require("../libs/base.factory");
exports.promiseFactory = new base_factory_1.BaseFactory();
exports.cacheDec = function (func, ctx, fullPath) {
    var _a = ctx.executeInfo, executeInfo = _a === void 0 ? {} : _a, instance = ctx.instance;
    var settings = executeInfo.settings;
    var _b = settings || {}, _c = _b.cache, cache = _c === void 0 ? false : _c, _d = _b.reload, reload = _d === void 0 ? false : _d, _e = _b.expire, expire = _e === void 0 ? undefined : _e, _f = (instance || {}).method, method = _f === void 0 ? "" : _f, proKey = fullPath + method;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!cache) {
            return func.apply(null, args);
        }
        if (reload) {
            exports.promiseFactory.remove(proKey);
        }
        var dataInCache = exports.promiseFactory.get(proKey);
        var _a = dataInCache || {}, _b = _a.promise, promiseInCache = _b === void 0 ? null : _b, _c = _a.expire, expireInCache = _c === void 0 ? null : _c, _d = _a.cacheIn, cacheIn = _d === void 0 ? 0 : _d;
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
        var promise = func.apply(null, args).catch(function (e) {
            exports.promiseFactory.remove(proKey);
            throw e;
        });
        exports.promiseFactory.add(proKey, { promise: promise, expire: expire, cacheIn: Date.now() });
        return promise;
    };
};
