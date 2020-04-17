import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import AuthContext from '../contexts/auth';
import { GG_CLIENT_ID } from '../constants';
const GoogleButton = () => {
  const auth = useContext(AuthContext);
  return (
    <GoogleLogin
      clientId={GG_CLIENT_ID}
      buttonText="Google"
      onSuccess={auth.validateToken}
      onFailure={auth.validateToken}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default GoogleButton;
