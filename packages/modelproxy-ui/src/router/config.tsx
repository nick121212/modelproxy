import React from "react";
import Loadable from "react-loadable";

import { loadSettings } from "../store";

export const loadComponent = (promise: Promise<any>): any => {
    return Loadable({
        loader: () => promise.then(({ settings, Component }) => {
            if (settings) {
                loadSettings(settings);
            }

            return Component as any;
        }),
        loading() {
            return <div>Loading...</div>
        }
    });
};

const Layout = loadComponent(import("../modules/layout"));

export const routes = [{
    component: Layout,
    routes: [{
        path: '/',
        exact: true,
        component: loadComponent(import("../modules/home"))
    }]
}];
