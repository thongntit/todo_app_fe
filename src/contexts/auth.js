import React from 'react';

const AuthContext = React.createContext({
  isLogin: false,
  setLogin: () => {},
  logOut: () => {},
});

export default AuthContext;
