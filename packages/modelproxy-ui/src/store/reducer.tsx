import schemaFormReact from "fx-schema-form-react";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { Reducer } from "redux";
import { combineReducers } from "redux-immutable";

import reactRouterReducer from "../router/router.reducer.shim";

const schemaFormReducer = schemaFormReact.reducerFactory.get("schemaForm");
const defaultReducer: any = {
  routing: reactRouterReducer,
  schemaForm: schemaFormReducer.reducer,
  loadingBar: loadingBarReducer,
  modules: {
    __init__: (state = 1) => state
  }
};

export { defaultReducer };

/**
 * 重新计算reducers
 * @param map reducerMap
 */
export const calcReducers = (map: any = defaultReducer): Reducer<any> => {
  const rtns: any = {};

  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const element: any = map[key];

      if (element.constructor === Function) {
        rtns[key] = element;
      } else {
        rtns[key] = calcReducers(element);
      }
    }
  }

  return combineReducers(rtns as any);
}
