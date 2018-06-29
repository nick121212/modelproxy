"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 为fetch增加超时的功能
 * 1、新建一个取消的promise
 * 2、使用Promise.race来判断先执行完毕的promise
 * 3、返回新的promise
 * @param fetchPromise fetch的promise
 * @param timeout 超时时间
 */
exports.fetchDec = (fetchPromise, timeout) => {
    let abortFn;
    let abortPromise = new Promise((resolve, reject) => {
        abortFn = () => {
            reject(new Error(`timeout（${timeout}）`));
        };
    });
    let abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);
    let timeid = setTimeout(() => {
        abortFn();
    }, timeout);
    abortablePromise.then(() => {
        clearTimeout(timeid);
    }, () => {
        clearTimeout(timeid);
    });
    return abortablePromise;
};
//# sourceMappingURL=fetch.decorator.js.map