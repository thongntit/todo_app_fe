import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { makeStyles } from '@material-ui/core/styles';
import AuthContext from './contexts/auth';
import { useAuth } from './hooks/auth';
const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },
});
function App() {
  const classes = useStyles();
  const { isLogin, setLoginStatus, logOut, validateToken } = useAuth();
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <AuthContext.Provider
          value={{ isLogin, setLoginStatus, logOut, validateToken }}
        >
          <AppRouter />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
