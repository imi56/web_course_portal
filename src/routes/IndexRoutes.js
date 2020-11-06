import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TopNavbar from "components/TopNavbar";
import { Provider } from "react-redux";
import store from "src/store";
import history from "src/history";
import {
  publicRoutes,
  protectedRoutes,
  pageNotFoundRoute
} from "routes/config";
import ProtectedRoutes from "routes/ProtectedRoutes";
import Authentication from "src/helpers/Authentication";

const Header = props => {
  if (Authentication.isAuthenticated()) {
    return (
      <>
        <TopNavbar />
      </>
    );
  } else {
    return null;
  }
};

const IndexRoutes = props => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            {publicRoutes.map((prop, key) => {
              return (
                <Route
                  exact={true}
                  path={prop.path}
                  key={prop.name + key}
                  component={prop.component}
                />
              );
            })}

            {protectedRoutes.map((prop, key) => {
              return (
                <ProtectedRoutes
                  exact={true}
                  path={prop.path}
                  key={prop.name + key}
                  component={prop.component}
                />
              );
            })}

            {pageNotFoundRoute.map((prop, key) => {
              return (
                <Route
                  exact={true}
                  path={prop.path}
                  key={prop.name + key}
                  component={prop.component}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default IndexRoutes;
