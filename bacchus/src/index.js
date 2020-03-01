/* eslint-disable import/first */

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./_helpers/store";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import { userLogIn } from "./_actions";

ReactDOM.render(
  // Place de BrowserRouter around App to enable to router features
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
