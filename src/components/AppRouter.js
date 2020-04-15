import React from "react";
import { Switch, Route } from "react-router-dom";
import AppRoute from "./AppRoute";
import HomePage from "../containers/Home";
import Login from "../containers/Login";
class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <AppRoute exact path="/" component={HomePage} />
        <Route exact path="/sign-in" component={Login} />
      </Switch>
    );
  }
}

export default AppRouter;
