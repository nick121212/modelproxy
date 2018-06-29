
/**
 * 为fetch增加超时的功能
 * 1、新建一个取消的promise
 * 2、使用Promise.race来判断先执行完毕的promise
 * 3、返回新的promise
 * @param fetchPromise fetch的promise
 * @param timeout 超时时间
 */
export const fetchDec = (fetchPromise: Promise<any>, timeout: number) => {
    let abortFn: Function;
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
