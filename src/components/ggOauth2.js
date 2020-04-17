import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const GoogleButton = ({ setIsLogin }) => {
  const responseGoogle = (response) => {
    if (response && response.tokenObj) {
      cookies.set('todo-app-token', response.tokenObj.id_token, { path: '/' });
      cookies.set('todo-app-expired-time', response.tokenObj.expires_at, {
        path: '/',
      });
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  return (
    <GoogleLogin
      clientId="764553149648-qmv3384sh84ift5vfgcssorcjq0q4smh.apps.googleusercontent.com"
      buttonText="Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default GoogleButton;
