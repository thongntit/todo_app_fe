import React from "react"
import AppHeader from "./AppHeader"
import { Route, withRouter } from "react-router-dom"

const AppRoute = ({ component, ...rest }) => {
    const C = component
    return (
        <Route
            {...rest}
            render={() => (
                <div>
                    <AppHeader />
                    <C />
                </div>
            )}
        />
    )
}
export default withRouter(AppRoute)