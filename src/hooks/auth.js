import { useState, useEffect, useCallback } from 'react';
import { apisUtils, commonUtils, userUtils } from "utils"
export const useAuth = () => {
  const [isLogin, setLoginStatus] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const verifyToken = useCallback(async function () {
    const token = commonUtils.getAccessToken()
    const tokenInfo = userUtils.getInfoFromToken(token)
    if (!tokenInfo) setLoginStatus(false);
    const valid = userUtils.validateUserInfo(tokenInfo)
    if (!valid) setLoginStatus(false);
    const remoteUserInfo = await apisUtils.validateWithBackend(token);
    if (remoteUserInfo && remoteUserInfo.email === tokenInfo.email) {
      setUserInfo({ token, ggInfo: tokenInfo, ...remoteUserInfo });
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
      const tokenInfo = userUtils.getInfoFromToken(response.tokenObj.id_token)
      if (resp && resp.email === tokenInfo.email) {
        commonUtils.setToken(response.tokenObj);
        verifyToken();
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
