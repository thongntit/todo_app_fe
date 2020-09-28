import { useState, useEffect, useCallback } from 'react';
import { apisUtils, commonUtils, userUtils } from "utils"
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const verifyToken = useCallback(async function () {
    const token = commonUtils.getAccessToken()
    const userInfo = userUtils.getUserInfo(token)
    if (!userInfo) setLoginStatus(false);
    const remoteUserInfo = await apisUtils.validateWithBackend(token);
    if (remoteUserInfo && remoteUserInfo.email === userInfo.email) {
      setUserInfo({ token, ggInfo: userInfo, ...remoteUserInfo });
      setLoginStatus(true);
      return;
    } else {
      setLoginStatus(-1);
      return;
    }
  }, [])
  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const validateToken = async (response) => {
    if (response && response.tokenObj) {
      const resp = await apisUtils.validateWithBackend(response.tokenObj.id_token);
      const userInfo = userUtils.getUserInfo(response.tokenObj.id_token)
      if (resp && resp.email === userInfo.email) {
        commonUtils.setToken(response.tokenObj);
        verifyToken();
        // setLoginStatus(true);
      } else {
        setLoginStatus(-1);
      }
    } else {
      setLoginStatus(false);
    }
  };
  const logOut = () => {
    commonUtils.removeToken()
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
