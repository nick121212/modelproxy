import schemaFormReact from "fx-schema-form-react";
import { fromJS, Map } from "immutable";
import { syncHistoryWithStore } from "react-router-redux";

import { historyInstance } from "../router/history";
import createStore from "./middleware";
import { calcReducers } from "./reducer";

const schemaFormReducer = schemaFormReact.reducerFactory.get("schemaForm");

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

schemaFormReducer.init(store);
