import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import uri from "../api/endpoints";

export function PrivateRoute({ component: Component, ...rest }) {
  const { state, isLoading } = useContext(AuthContext);
  const { isAuthenticated } = state;

  if (isLoading) return <div />;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to={uri.home} />;
      }}
    />
  );
}
