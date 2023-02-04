import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favicon from "react-favicon";

import "./index.scss";
import favicon from "./static/assets/favicon.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Favicon url={favicon} />
    <App />
  </Fragment>
);
