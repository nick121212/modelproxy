"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = require("../libs/base.factory");
exports.promiseFactory = new base_factory_1.BaseFactory();
var getDataFromStorage = function (storage, key) {
    if (key === void 0) { key = ""; }
    if (!storage) {
        return null;
    }
    var dataFromStorage = storage.getItem(key);
    if (typeof dataFromStorage === "string") {
        try {
            dataFromStorage = JSON.parse(dataFromStorage);
        }
        catch (e) {
            return null;
        }
    }
    var _a = dataFromStorage || {}, _b = _a.expire, expire = _b === void 0 ? 0 : _b, _c = _a.cacheIn, cacheIn = _c === void 0 ? 0 : _c, _d = _a.data, data = _d === void 0 ? null : _d;
    if (expire && cacheIn && cacheIn + expire < Date.now()) {
        storage.removeItem(key);
        return null;
    }
    if (!data) {
        return null;
    }
    return Promise.resolve(data);
};
exports.removeCacheFromKey = function (key, storage) {
    exports.promiseFactory.removeItem(key);
    if (storage) {
        storage.removeItem(key);
    }
};
exports.removeCacheFromRegexp = function (regexp, storage) {
    var removeKeys = [];
    exports.promiseFactory.forEach(function (key) {
        if (regexp.test(key)) {
            removeKeys.push(key);
        }
    });
    removeKeys.forEach(function (key) {
        exports.promiseFactory.removeItem(key);
        if (storage) {
            storage.removeItem(key);
        }
    });
};
exports.cacheDec = function (func, key, settings, storage) {
    var _a = settings || {}, _b = _a.cache, cache = _b === void 0 ? false : _b, _c = _a.reload, reload = _c === void 0 ? false : _c, _d = _a.expire, expire = _d === void 0 ? undefined : _d, _e = _a.local, local = _e === void 0 ? true : _e;
    function CacheFunc() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!cache) {
            return func.apply(void 0, args);
        }
        if (reload) {
            exports.promiseFactory.removeItem(key);
            if (storage) {
                storage.removeItem(key);
            }
        }
        var promiseInCache = local ? getDataFromStorage(storage, key) : null;
        if (!promiseInCache) {
            promiseInCache = getDataFromStorage(exports.promiseFactory, key);
        }
        if (promiseInCache) {
            return promiseInCache;
        }
        var promise = func.apply(void 0, args).catch(function (e) {
            exports.promiseFactory.removeItem(key);
            if (storage) {
                storage.removeItem(key);
            }
            throw e;
        });
        exports.promiseFactory.add(key, { data: promise, expire: expire, cacheIn: Date.now() });
        if (storage) {
            promise.then(function (data) {
                storage.setItem(key, JSON.stringify({ data: data, expire: expire, cacheIn: Date.now() }));
            });
        }
        return promise;
    }
    return CacheFunc;
};
