import React from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../utils/fakeAuth";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
