import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';

// Components
import AppRouter from './components/AppRouter';
import Loading from './components/Loading';

// Context
import AuthContext from './contexts/auth';
import { useAuth } from './hooks/auth';
import TodosContext from './contexts/todos';
import { useTodos } from './hooks/todos';
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
  );
}

export default App;
