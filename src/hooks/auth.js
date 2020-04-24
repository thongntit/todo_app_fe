import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { BE_HOST, BE_PROTOCAL } from '../constants';
import jwtDecode from 'jwt-decode';
const cookies = new Cookies();
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    async function verifyToken() {
      const token = cookies.get('todo-app-token');
      if (token) {
        const userInfo = jwtDecode(token);
        const date = new Date();
        //userInfo.exp is unix time
        if (userInfo && userInfo.exp > date.getTime() / 1000) {
          const resp = await loginBackend(token);
          if (resp.email === userInfo.email) {
            setUserInfo({ token, ...resp });
            setLoginStatus(true);
            return;
          }
        }
      }
      setLoginStatus(false);
    }
    verifyToken();
  }, []);
  const loginBackend = async (jwtToken) => {
    if (jwtToken) {
      const data = {
        tokenId: jwtToken,
      };
      let resp = await fetch(BE_PROTOCAL + '://' + BE_HOST + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await resp.json();
    }
  };
  const validateToken = async (response) => {
    if (response && response.tokenObj) {
      const resp = await loginBackend(response.tokenObj.id_token);
      const userInfo = jwtDecode(response.tokenObj.id_token);
      if (resp.email === userInfo.email) {
        setToken(response.tokenObj);
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
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
    validateToken,
    setLoginStatus,
    logOut,
    userInfo,
  };
};
