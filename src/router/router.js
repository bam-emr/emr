import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landing from "../pages/landing";
import NotFound from "../pages/notFound";
import NavBar from "../pages/navbar";
import login from "../pages/login";
import signup from "../pages/signup";
import Faq from "../pages/faq";
import contact from "../pages/contact";
import UserView from "../pages/users";
//import Patient from "../pages/users/patient.js"
import uri from "../api/endpoints";
import { PrivateRoute } from "./PrivateRoute";

// TODO: private routes
export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={uri.home} component={landing} />
        <Route exact path={uri.login} component={login} />
        <Route exact path={uri.signup} component={signup} />
        <Route exact path={uri.faq} component={Faq} />
        <Route exact path={uri.contact} component={contact} />
        <PrivateRoute exact path={uri.userview} component={UserView} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
