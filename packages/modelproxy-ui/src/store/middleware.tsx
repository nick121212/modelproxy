import Immutable from "immutable";
// import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import reduxThunk from "redux-thunk";

import proxy from "../modelproxy/proxy";
import proxyMid from "./proxy.mid";

/**
 * 创建logger中间件
 */
const logger = createLogger({
    collapsed: true,
    duration: true,
    stateTransformer: (state: Immutable.Map<string, any>) => {
        return state.toJS();
    }
});

/**
 * 创建saga中间件
 */
export const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware({
    onError: (error: Error) => {
        console.log(error);
    },
    emitter: (emit: any) => {
        return emit;
    }
});

// sagaMiddleware.run();

/**
 * 导出默认方法，这里需要一个history：History
 */
export default (history: any) => applyMiddleware(
    reduxThunk,
    routerMiddleware(history),
    // loadingBarMiddleware({
    //     promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    // }),
    reduxPromise,
    proxyMid({ proxy }),
    // reduxPromise,
    sagaMiddleware,
    logger
)(createStore);

// thunk,
//     routerMiddleware(history),
//     promise,
//     mpMiddleware({ proxy }),
//     sagaMiddleware,
//     logger