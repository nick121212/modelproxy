import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import router from "./router";
import { store } from "./store";

import "./fabric";
import "./style";

ReactDOM.render((
  <Provider store={store}>
    {router}
  </Provider>),
  document.getElementById("root"));

// 开启pwa
registerServiceWorker();
