import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { BE_HOST, BE_PROTOCAL } from '../constants';
import jwtDecode from 'jwt-decode';
const cookies = new Cookies();
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  async function verifyToken() {
    const token = cookies.get('todo-app-token');
    if (token) {
      const userInfo = jwtDecode(token);
      const date = new Date();
      //userInfo.exp is unix time
      if (userInfo && userInfo.exp > date.getTime() / 1000) {
        const resp = await loginBackend(token);
        if (resp && resp.email === userInfo.email) {
          setUserInfo({ token, ggInfo: userInfo, ...resp });
          setLoginStatus(true);
          return;
        } else {
          setLoginStatus(-1);
          return;
        }
      }
    }
    setLoginStatus(false);
  }
  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line
  }, []);
  const loginBackend = async (jwtToken) => {
    if (jwtToken) {
      return fetch(BE_PROTOCAL + '://' + BE_HOST + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId: jwtToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error);
    }
  };
  const validateToken = async (response) => {
    if (response && response.tokenObj) {
      const resp = await loginBackend(response.tokenObj.id_token);
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
    validateToken,
    setLoginStatus,
    logOut,
    userInfo,
  };
};
