import { useState, useEffect, useCallback } from 'react';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import apis from "utils/apis"
const cookies = new Cookies();
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const verifyToken = useCallback(async function () {
    const token = cookies.get('todo-app-token');
    if (token) {
      const userInfo = jwtDecode(token);
      const date = new Date();
      //userInfo.exp is unix time
      if (userInfo && userInfo.exp > date.getTime() / 1000) {
        const remoteUserInfo = await apis.validateWithBackend(token);
        if (remoteUserInfo && remoteUserInfo.email === userInfo.email) {
          setUserInfo({ token, ggInfo: userInfo, ...remoteUserInfo });
          setLoginStatus(true);
          return;
        } else {
          setLoginStatus(-1);
          return;
        }
      }
    }
    setLoginStatus(false);
  }, [])
  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const validateToken = async (response) => {
    if (response && response.tokenObj) {
      const resp = await apis.validateWithBackend(response.tokenObj.id_token);
      const userInfo = jwtDecode(response.tokenObj.id_token);
      if (resp && resp.email === userInfo.email) {
        setToken(response.tokenObj);
        verifyToken();
        // setLoginStatus(true);
      } else {
        setLoginStatus(-1);
      }
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
    userInfo,
    validateToken,
    setLoginStatus,
    logOut,
  };
};
