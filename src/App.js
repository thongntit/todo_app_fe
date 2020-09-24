import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import AppRouter from './components/AppRouter';
import Loading from './components/Loading';
// Context
import AuthContext from './contexts/auth';
import TodosContext from './contexts/todos';
import { useAuth } from './hooks/auth';
import { useTodos } from './hooks/todos';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FCE762"
    },
  },
});

const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
  },
});
function App() {
  const classes = useStyles();
  const { userInfo, isLogin, ...authContext } = useAuth();
  return (
    <ThemeProvider theme={theme}>

      <div className={classes.app}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <BrowserRouter>
            <AuthContext.Provider value={{ userInfo, isLogin, ...authContext }}>
              <TodosContext.Provider value={useTodos(userInfo)}>
                {isLogin === undefined ? <Loading /> : <AppRouter />}
              </TodosContext.Provider>
            </AuthContext.Provider>
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
