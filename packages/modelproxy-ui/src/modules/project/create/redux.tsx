import { Reducer } from "redux-act";
import { combineReducers } from "redux-immutable";

import { ConfirmReducer } from "../../../reducers/confirm";
import { ModelProxyReducer } from "../../../reducers/proxy";
import { reducerKey } from "./constants";

export const saveDataRed = new ModelProxyReducer();
export const confirmRed = new ConfirmReducer();

export const settings = {
    reducer: combineReducers({
        createResData: saveDataRed.reducer,
        confirmData: confirmRed.reducer
    }) as Reducer<any>,
    actions: [saveDataRed.actions.execute, confirmRed.actions.confirm, confirmRed.actions.loading],
    reducerKey,
    sagas: [saveDataRed.saga.bind(saveDataRed)]
};
