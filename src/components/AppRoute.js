import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const AppRoute = ({ component, ...rest }) => {
  const C = component;
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    const token = cookies.get('todo-app-token');
    const expire = cookies.get('todo-app-expired-time');
    const date = new Date();
    if (token && expire && parseInt(expire) > date.getTime()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <React.Fragment>
      {isLogin === false ? <Redirect to="/sign-in" /> : null}
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
