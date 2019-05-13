export const globalObj: any = typeof window === "undefined" ? global : window;

export function isWin(obj = globalObj) {
    return /Window/.test({}.toString.call(obj)) || (obj == obj.document && obj.document != obj);
}
