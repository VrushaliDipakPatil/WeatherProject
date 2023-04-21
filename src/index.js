import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from '../node_modules/react-redux/es/index';
import Store from './Store';

ReactDOM.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);


