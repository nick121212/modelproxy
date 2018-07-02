import { FluxStandardAction } from "flux-standard-action";
import { ModelProxy } from "modelproxy";
import { resetLoading, showLoading } from "react-redux-loading-bar";

import { Action, AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

export interface IModelProxyMiddlewareMeta {
    ns: string;
    key: string;
    args?: any[];
    msg?: string;
    func?: string;
}

export interface IModelProxyAction extends Action, FluxStandardAction<any, IModelProxyMiddlewareMeta> {
    type: string;
}

export let currentApiCount = 0;

/**
 * 接口中间件
 * 这里处理modelproxy的接口请求
 * @param settings 这里配置modelproxy的实例
 *   (api: MiddlewareAPI<D, S>): (next: Dispatch<AnyAction>) => (action: any) => any;
 */
export default (settings: { proxy: ModelProxy }): Middleware => {
    return ({ dispatch, getState }: MiddlewareAPI) => {
        return (next: Dispatch<AnyAction>) => {
            return async<A extends Action>(action: A & IModelProxyAction) => {
                const { ns, key, func = "", msg = "", args = [] } =
                    action.meta || { ns: "", key: "", func: "" };

                // 如果是需要处理的action，拦截
                if (ns && key && settings.proxy) {
                    const api: any = settings.proxy.getNs(ns).get(key);
                    let promise;

                    if (!currentApiCount) {
                        dispatch(showLoading());
                    }
                    currentApiCount++;
                    if (api && api[func]) {
                        promise = api[func].apply(api, [...args, action.payload]);
                    } else {
                        promise = settings.proxy.execute(ns, key, action.payload || {})
                    }

                    // 调用接口
                    dispatch({
                        type: action.type + "Proxy",
                        payload: promise.then((data: any) => {
                            if (msg) {
                                // 触发消息处理机制
                            }
                            currentApiCount--;
                            if (!currentApiCount) {
                                dispatch(resetLoading());
                            }
                            return data;
                        }).catch((err: Error) => {
                            // 触发错误消息处理机制
                            currentApiCount--;
                            if (!currentApiCount) {
                                dispatch(resetLoading());
                            }
                            throw err;
                        })
                    } as any);
                }

                // 调用下层的拦截器
                return next(action);
            };
        };
    };
};
