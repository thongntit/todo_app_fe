import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
const cookies = new Cookies();
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(false);
  useEffect(() => {
    const token = cookies.get('todo-app-token');
    if (token) {
      const userInfo = jwtDecode(token);
      const date = new Date();
      //userInfo.exp is unix time
      if (userInfo && userInfo.exp > date.getTime() / 1000) {
        // TODO: AUTH with backend
        setLoginStatus(true);
        return;
      }
    }
    setLoginStatus(false);
  }, []);
  const validateToken = (response) => {
    if (response && response.tokenObj) {
      setToken(response.tokenObj);
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  };
  const setToken = (tokenObj) => {
    cookies.set('todo-app-token', tokenObj.id_token, { path: '/' });
  };
  const logOut = () => {
    cookies.remove('todo-app-token');
    setLoginStatus(false);
  };
  return {
    isLogin,
    validateToken,
    setLoginStatus,
    logOut,
  };
};
