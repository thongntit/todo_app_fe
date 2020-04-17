import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import AuthContext from '../contexts/auth';
const GoogleButton = () => {
  const auth = useContext(AuthContext);
  return (
    <GoogleLogin
      clientId="764553149648-qmv3384sh84ift5vfgcssorcjq0q4smh.apps.googleusercontent.com"
      buttonText="Google"
      onSuccess={auth.validateToken}
      onFailure={auth.validateToken}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default GoogleButton;
