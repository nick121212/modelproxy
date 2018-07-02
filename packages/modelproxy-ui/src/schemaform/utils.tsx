
const objToString = Object.prototype.toString;
const hasOwn = Object.prototype.hasOwnProperty;

/**
 * 柯里化函数
 * 获取类型是否是需要的
 * @param   {String} type 判定的类型
 * @returns {(o:any)=>boolean}
 */
const isSomeType = (type: string): (o: any) => boolean => {
    return (o: any): boolean => {
        return objToString.call(o) === `[object ${type}]`;
    }
};

/**
 * 判断当前类型是Object
 */
export const isObject = isSomeType("Object");
/**
 * 判断当前类型是Function
 */
export const isFunction = isSomeType("Function");
/**
 * 判断当前类型是Number
 */
export const isNumber = isSomeType("Number");
/**
 * 判断当前类型是Array
 */
export const isArray = isSomeType("Array");
/**
 * 判断当前类型是Boolean
 */
export const isBoolean = isSomeType("Boolean");
/**
 * 判断当前类型是Boolean
 */
export const isString = isSomeType("String");
/**
 * 判断变量是否定义
 * @param   {any}     o 变量
 * @returns {boolean}
 */
export const isUndefined = (o: any) => {
    return typeof o === "undefined";
}

/**
 * 判断一个对象是否是空对象
 * @param   {Object} obj 需要判断的对象
 * @returns {Boolean}
 */
export const isEmptyObject = (obj: any): boolean => {
    if (isUndefined(obj)) {
        return true;
    }

    if (!isObject(obj)) {
        return false;
    }

    return Object.keys(obj).length === 0;
};

/**
 * 判断一个对象是否是纯对象
 * @param   {Object} obj 需要判断的对象
 * @returns {Boolean}
 */
export const isPlainObject = (obj: any) => {
    if (isUndefined(obj)) {
        return false;
    }

    if (!isObject(obj)) {
        return false;
    }

    try {
        if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
    }
    catch (e) {
        return false;
    }

    return true;
};