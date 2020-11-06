import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "src/helpers/Authentication";

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Authentication.isAuthenticated() ? (
        <div className="margin-top-30">
          <Component {...props} />
        </div>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default ProtectedRoutes;
