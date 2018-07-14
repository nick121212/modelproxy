import React from "react";
// import Loadable from "react-loadable";
import { Router } from "react-router-dom";

// import { store } from "../store";
// import { sagaMiddleware } from "../store/middleware";
// import { calcReducers, defaultReducer } from "../store/reducer";
import { historyInstance } from "./history";

// const loadSettings = (settings: any) => {
//     if (!defaultReducer.modules[settings.reducerKey]) {
//         settings.actions.forEach((action: any) => {
//             action.assignTo(store);
//         });

//         settings.sagas.forEach((saga: any) => {
//             sagaMiddleware.run(saga);
//         });

//         if (settings.reducer) {
//             defaultReducer.modules[settings.reducerKey] = settings.reducer;
//             store.replaceReducer(calcReducers(defaultReducer));
//         }
//     }
// }

// const Header = Loadable({
//     loader: () => import("../modules/header").then(({ settings, Component: HeaderComponent }) => {
//         loadSettings(settings);
//         return HeaderComponent as any;
//     }),
//     loading() {
//         return <div>Loading...</div>
//     }
// });

/**
 * 路由
 */
export default class RouterComponent extends React.PureComponent<any, any>{
    public render() {
        return (
            <Router history={historyInstance as any}>
            <div>
               <span>Test He3llo World</span>
               <span>Test He3llo World</span>
               </div>
            </Router>
        );
    }
}

export { historyInstance } from "./history";
