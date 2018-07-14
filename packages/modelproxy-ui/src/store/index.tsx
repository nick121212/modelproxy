import { fromJS, Map } from "immutable";
import { syncHistoryWithStore } from "react-router-redux";
import { Action, Reducer } from "redux";

import { historyInstance } from "../router/history";
import createStore, { sagaMiddleware } from "./middleware";
import { calcReducers, defaultReducer, schemaFormReducer } from "./reducer";

/**
 * 创建唯一store
 */
export const store = createStore(historyInstance)(calcReducers(), fromJS({}));

/**
 * 使用了Immutable，这里对react-router-redux特殊处理下
 */
export const history: any = syncHistoryWithStore(historyInstance as any, store, {
    selectLocationState(state: Map<string, any>) {
        return state.get("routing").toJS();
    }
});

/**
 * 动态添加reducer
 * @param settings 配置
 */
export const loadSettings = (settings: { reducerKey: string, actions: Action[], sagas: any[], reducer: Reducer }) => {
    if (!defaultReducer.modules[settings.reducerKey]) {
        settings.actions.forEach((action: any) => {
            action.assignTo(store);
        });

        settings.sagas.forEach((saga: any) => {
            sagaMiddleware.run(saga);
        });

        if (settings.reducer) {
            defaultReducer.modules[settings.reducerKey] = settings.reducer;
            store.replaceReducer(calcReducers(defaultReducer));
        }
    }
}

schemaFormReducer.init(store);
