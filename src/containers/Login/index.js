import {
  Button, InputLabel, makeStyles, OutlinedInput, Typography
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoginWithGoogleBtn from '../../components/LoginWithGoogleBtn';
import AuthContext from '../../contexts/auth';
import { InputContainer } from "components/Common"
import DividerWithText from "components/DividerWithText"
const useStyles = makeStyles((theme) => ({
  container: {
    background: '#1c8ef9',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loginCon: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: 'white',
    width: 400,
    borderRadius: 8,
  },
  title: {
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
  },
  inputFieldCon: {
    margin: '8px 24px',
  },
  inputCon: {
    height: '45%',
  },
  input: {
    height: 38,
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
  },
  buttonCon: {
    margin: '8px 24px',
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  loginZone: {
    textAlign: 'center',
  },
  loginFail: {
    marginTop: 8,
    color: 'red',
  },
}));
const LoginPage = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  return (
    <div className={classes.container}>
      <div className={classes.loginCon}>
        <div className={classes.title}>
          <Typography variant="h4">Sign In</Typography>
        </div>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <OutlinedInput id="email" className={classes.input} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Password</InputLabel>
          <OutlinedInput id="password" className={classes.input} />
        </InputContainer>
        <InputContainer>
          <Button fullWidth variant="contained" color="primary" className={classes.button}>
            Sign In
            </Button>
        </InputContainer>
        <InputContainer>
          <DividerWithText>Or</DividerWithText>
        </InputContainer>
        <div className={classes.loginZone}>
          <InputContainer>
            <LoginWithGoogleBtn />
          </InputContainer>
          <div className={classes.loginFail}>
            {auth.isLogin === -1 ? (
              <span>Login Failed</span>
            ) : auth.isLogin === true ? (
              <Redirect to="/" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
