import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  InputLabel,
  OutlinedInput,
  Button,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import GoogleLogin from "../../components/ggOauth2";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const useStyles = makeStyles({
  container: {
    background: "#1c8ef9",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  loginCon: {
    background: "white",
    width: 400,
    height: 500,
    borderRadius: 12,
  },
  title: {
    height: "15%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  inputFieldCon: {
    margin: "8px 24px",
  },
  inputCon: {
    height: "45%",
  },
  input: {
    height: 38,
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
  },
  buttonCon: {
    margin: "8px 24px",
  },
  button: {
    background: "#1c8ef9",
    color: "white",
    height: 38,
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
  },
  divider: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    padding: 8,
  },
  loginZone: {
    textAlign: "center",
  },
});
const LoginPage = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = cookies.get("todo-app-token");
    const expire = cookies.get("todo-app-expired-time");
    const date = new Date();
    if (token && expire && parseInt(expire) > date.getTime()) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.loginCon}>
        <div className={classes.title}>
          <Typography variant="h4">Sign In</Typography>
        </div>
        <div className={classes.inputCon}>
          <div className={classes.inputFieldCon}>
            <InputLabel>Email</InputLabel>
            <OutlinedInput id="email" className={classes.input} />
          </div>
          <div className={classes.inputFieldCon}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput id="password" className={classes.input} />
          </div>
          <div className={classes.buttonCon}>
            <Button variant="contained" className={classes.button}>
              Sign In
            </Button>
          </div>
        </div>
        <div className={classes.divider}>
          <Typography>or login with</Typography>
        </div>
        <div className={classes.loginZone}>
          <GoogleLogin setIsLogin={setIsLogin} />
          {isLogin === -1 ? (
            <span>Login Failed</span>
          ) : isLogin === true ? (
            <Redirect to="/" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
