import { Reducer } from "redux-act";
import { combineReducers } from "redux-immutable";

import { mainReducerKey } from "./constants";
import { settings as createSettings } from "./create";
import { settings as listSettings } from "./list";

export const settings = {
  reducer: combineReducers({
    [listSettings.reducerKey]: listSettings.reducer,
    [createSettings.reducerKey]: createSettings.reducer
  }) as Reducer<any>,
  actions: [...listSettings.actions, ...createSettings.actions],
  reducerKey: mainReducerKey,
  sagas: [...listSettings.sagas, ...createSettings.sagas]
};
