import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import "./index.scss";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.render(
  <AuthProvider>
    <Router />
  </AuthProvider>,
  document.getElementById("root")
);
