import React, { useContext } from 'react';
import AppHeader from './AppHeader';
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
            <AppHeader />
            <C />
          </React.Fragment>
        )}
      />
    </React.Fragment>
  );
};
export default withRouter(AppRoute);
