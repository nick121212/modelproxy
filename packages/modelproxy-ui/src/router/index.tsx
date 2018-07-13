import React from "react";
import Loadable from "react-loadable";
import { Route, Router, Switch } from "react-router-dom";

import { store } from "../store";
import { sagaMiddleware } from "../store/middleware";
import { calcReducers, defaultReducer } from "../store/reducer";
import { historyInstance } from "./history";

const loadSettings = (settings: any) => {
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

const Header = Loadable({
    loader: () => import("../modules/header").then(({ settings, Component: HeaderComponent }) => {
        loadSettings(settings);
        return HeaderComponent as any;
    }),
    loading() {
        return <div>Loading...</div>
    }
});

const Nav = Loadable({
    loader: () => import("../modules/nav").then(({ Component: HeaderComponent }) => {
        // loadSettings(settings);
        return HeaderComponent as any;
    }),
    loading() {
        return <div>Loading...</div>
    }
});

const Mail = Loadable({
    loader: () => import("../modules/mail").then(({ Component: HeaderComponent }) => {
        // loadSettings(settings);
        return HeaderComponent as any;
    }),
    loading() {
        return <div>Loading...</div>
    }
});

const Project = Loadable({
    loader: () => import("../modules/project").then(({ Component: ProjectComponent, settings }) => {
        loadSettings(settings);

        return ProjectComponent;
    }),
    loading() {
        return <div>Loading...</div>;
    }
});


console.log(Header)
/**
 * 路由
 */
export default class RouterComponent extends React.PureComponent<any, any>{
    public render() {
        return (
            <Router history={historyInstance as any}>
                <div className="flex items-start flex-column h-100 bg-near-white">
                    {/** 头部的组件 */}
                    <div className="w-100">
                        {/*<Route key="header" component={Header} />*/}
                    </div>
                    <div className="flex-auto w-100 flex items-start h-100 bg-near-white relative">
                        {/** 这里放置一些弹窗 */}
                        <div id="app-con" style={{
                            pointerEvents: "none"
                        }} className="z-999 absolute w-100 h-100 bg-transparent" />
                        {/** 左侧的导航组件 */}
                        <div className="h-100 flex">
                            <Route component={Nav} />
                        </div>
                        {/** 业务模块 */}
                        <Switch>
                            <Route path="/project" component={Project} />
                            <Route key="mail" component={Mail} />
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export { historyInstance } from "./history";
