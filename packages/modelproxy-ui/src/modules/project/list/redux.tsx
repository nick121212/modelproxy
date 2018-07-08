import { Reducer } from "redux-act";
import { combineReducers } from "redux-immutable";

import { PaginationReducer } from "../../../reducers/pagination";
import { ModelProxyReducer } from "../../../reducers/proxy";
import { reducerKey } from "./constants";

export const listDataRed = new ModelProxyReducer();
export const paginationRed = new PaginationReducer();

export const settings = {
    reducer: combineReducers({
        listData: listDataRed.reducer,
        paginationData: paginationRed.reducer
    }) as Reducer<any>,
    actions: [listDataRed.actions.execute, paginationRed.actions.setInfo],
    reducerKey,
    sagas: [listDataRed.saga.bind(listDataRed)]
};
