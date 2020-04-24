import React from 'react';

const AuthContext = React.createContext({
  isLogin: false,
  validateToken: () => {},
  setLoginStatus: () => {},
  logOut: () => {},
  userInfo: {},
});

export default AuthContext;
