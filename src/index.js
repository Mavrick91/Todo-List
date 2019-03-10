import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./state/store";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <Helmet>
      <title>Todo List</title>
      <link
        href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"
        rel="stylesheet"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"
        integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root"),
);
