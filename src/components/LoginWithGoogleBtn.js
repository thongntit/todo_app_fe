import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import AuthContext from '../contexts/auth';
import { GG_CLIENT_ID } from '../constants';
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme => ({
  loginWithGoogle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    boxShadow: "unset !important",
    border: "solid 1px #ddd !important",
    borderRadius: "3px !important",
    "&:hover": {
      borderColor: "#999 !important"
    }
  }
}))
const GoogleButton = () => {
  const auth = useContext(AuthContext);
  const classes = useStyle()
  return (
    <GoogleLogin
      className={classes.loginWithGoogle}
      clientId={GG_CLIENT_ID}
      buttonText="Continue with Google"
      onSuccess={auth.validateToken}
      onFailure={auth.validateToken}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default GoogleButton;
