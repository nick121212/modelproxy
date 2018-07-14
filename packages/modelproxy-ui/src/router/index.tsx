import React from "react";
import { renderRoutes } from "react-router-config";
import { Router } from "react-router-dom";

import { routes } from "./config";
import { historyInstance } from "./history";

/**
 * 路由
 */
export default class RouterComponent extends React.PureComponent<any, any>{
    public render() {
        return (
            <Router history={historyInstance as any}>
                {renderRoutes(routes)}
            </Router>
        );
    }
}

export { historyInstance } from "./history";
