import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(false);
  useEffect(() => {
    const token = cookies.get('todo-app-token');
    const expire = cookies.get('todo-app-expired-time');
    const date = new Date();
    if (token && expire && parseInt(expire) > date.getTime()) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
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
    cookies.set('todo-app-expired-time', tokenObj.expires_at, {
      path: '/',
    });
  };
  const logOut = () => {
    cookies.remove('todo-app-token');
    cookies.remove('todo-app-expired-time');
    setLoginStatus(false);
  };
  return {
    isLogin,
    validateToken,
    setLoginStatus,
    logOut,
  };
};
