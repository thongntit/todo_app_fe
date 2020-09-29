import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppRoute from './AppRoute';
import HomePage from '../containers/Home';
import Login from '../containers/Login';
import AuthContext from 'contexts/auth';
import Loading from 'components/Loading';
import todosContext from 'contexts/todos';
const AppRouter = () => {
  const { isLogin, userInfo } = useContext(AuthContext)
  const { setUserInfo } = useContext(todosContext)
  useEffect(() => {
    setUserInfo(userInfo)
  }, [userInfo, setUserInfo])
  return (
    isLogin === undefined ? <Loading /> :
      (<Switch>
        <AppRoute exact path="/" component={HomePage} />
        <Route exact path="/sign-in" component={Login} />
      </Switch>)
  );
}

export default AppRouter;
