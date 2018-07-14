

import { FluxStandardAction } from "flux-standard-action";
import Immutable from "immutable";
import { IExecute } from "modelproxy/out/models/execute";
import { Reducer } from "redux";
import { ComplexActionCreator, createAction, createReducer, SimpleActionCreator } from "redux-act";
import { put, takeLatest } from "redux-saga/effects";

/**
 * 当前reducer的数据结构
 */
export interface IModelProxyState<T> {
    /**
     * 是否在请求中
     */
    loading?: boolean;
    /**
     * 请求是否成功
     */
    loaded?: boolean;
    /**
     * 请求返回的数据
     */
    data?: T | null;
    /**
     * 请求失败的错误信息
     */
    error?: Error | null;
}

export interface IModelProxyActions<T> {
    // error?: SimpleActionCreator<Error>;
    execute: ComplexActionCreator<IExecute, any>;
    loading?: SimpleActionCreator<boolean>;
    // success?: SimpleActionCreator<T>;
}

/**
 * 发起接口请求的reducer
 * actions
 * loading 发起loading的action
 * success 发起请求成功的action
 * error   发起请求失败的action
 * execute 发起请求的action
 */
export class ModelProxyReducer<T> {
    private loading: SimpleActionCreator<boolean> = createAction<boolean>("modelproxy开始loading的action");
    private success: SimpleActionCreator<T> = createAction<T>("modelproxy成功-SUCCESS");
    private error: SimpleActionCreator<Error> = createAction<Error>("modelproxy失败-FAILURE");
    private execute: ComplexActionCreator<any, any>
        = createAction<IExecute, any>("modelproxy开始请求-REQUEST",
            (options: IExecute) => options,
            (options: IExecute, meta: any) => meta);

    /**
     * 构造函数
     * @param initialState state的初始值
     */
    constructor(protected initialState: IModelProxyState<T> = {
        data: null,
        error: null,
        loaded: false,
        loading: false,
    }) {
        // this.execute. = this.loading;
    }

    /**
     * saga拦截action
     * 这里拦截execute
     * 如果error=true，发起error
     * 如果error=false，发起success
     */
    public * saga() {
        yield takeLatest(this.execute.getType() + "Proxy", this.fetch.bind(this));
    }

    /**
     * 返回当前的actions
     */
    public get actions(): IModelProxyActions<T> {
        return {
            execute: this.execute,
            loading: this.loading
        };
    }

    /**
     * 返回当前的reducers
     */
    public get reducer(): Reducer<Immutable.Map<string, any>> {
        return createReducer<Immutable.Map<string, any>>({
            [this.loading as any]: (state: Immutable.Map<string, any>, payload: boolean = true) => {
                return state.set("loading", payload);
            },
            [this.success as any]: (state: Immutable.Map<string, any>, payload: T) => {
                return state.merge({ loading: false, data: payload, loaded: true, error: null });
            },
            [this.error as any]: (state: Immutable.Map<string, any>, payload: Error) => {
                return state.merge({ loading: false, data: null, loaded: false, error: payload });
            },
            [this.execute as any]: (state: Immutable.Map<string, any>) => {
                return state.set("loading", true);
            }
        }, Immutable.Record(this.initialState)());
    }

    /**
     * 拦截execute action后执行的方法
     * @param action 当前被拦截的action
     */
    private *fetch(action: FluxStandardAction<any>) {
        if (action.error) {
            yield put(this.error(Object.assign({ msg: true }, action.payload)));
        } else {
            yield put(this.success(action.payload));
        }
    }
}
