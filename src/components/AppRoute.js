import React, { useContext } from 'react';
// import AppHeader from './AppHeader';
import AppHeader from "./AppBar"
import { Route, withRouter, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/auth';
const AppRoute = ({ component, ...rest }) => {
  const C = component;
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      {auth.isLogin === false ? <Redirect to="/sign-in" /> : null}
      <Route
        {...rest}
        render={() => (
          <React.Fragment>
            {/* <AppHeader user={auth.userInfo} logOut={auth.logOut} /> */}
            <AppHeader user={auth.userInfo} logOut={auth.logOut} />
            <C />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
export default withRouter(AppRoute);
