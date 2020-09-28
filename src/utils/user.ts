import jwtDecode from 'jwt-decode';

const getInfoFromToken = (token?: string) => {
  if (!token) return false;
  const userInfo: any = jwtDecode(token);
  return userInfo;
};
const validateUserInfo = (userInfo: any) => {
  if (!userInfo) return false;
  const date = new Date();
  //userInfo.exp is unix time
  if (userInfo && userInfo.exp > date.getTime() / 1000) {
    return userInfo;
  }
  return false;
};
export default { getInfoFromToken, validateUserInfo };
