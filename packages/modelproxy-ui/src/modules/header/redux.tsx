import { Reducer } from "redux-act";
import { combineReducers } from "redux-immutable";

import { mainReducerKey } from "./constants";
import { HeaderReducer } from "./reducer";

export const headReducer = new HeaderReducer();

export const settings = {
  reducer: combineReducers({
    header: headReducer.reducer
  }) as Reducer<any>,
  actions: [headReducer.actions.setHeaderSettings],
  reducerKey: mainReducerKey,
  sagas: []
};
