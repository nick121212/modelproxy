import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import RouterComponent from "./router";
import { store } from "./store";

import "./style";

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <RouterComponent/>
        </Provider>,
        document.getElementById("root"));
};

// 开启热更替
if ((module as any).hot) {
    (module as any).hot.accept(render);
}

render();

// 开启pwa
registerServiceWorker();
