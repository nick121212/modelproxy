import { Reducer } from "redux-act";
import { combineReducers } from "redux-immutable";

import { ModelProxyReducer } from "../../../reducers/proxy";
import { reducerKey } from "./constants";

export const listDataRed = new ModelProxyReducer();

export const settings = {
    reducer: combineReducers({
        listData: listDataRed.reducer
    }) as Reducer<any>,
    actions: [listDataRed.actions.execute],
    reducerKey,
    sagas: [listDataRed.saga.bind(listDataRed)]
};
