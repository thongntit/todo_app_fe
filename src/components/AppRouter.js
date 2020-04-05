import React from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute"
import HomePage from "../containers/Home"
class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <AppRoute exact path="/" component={HomePage} />
            </Switch>
        );
    }
}

export default AppRouter;