import React, { useContext, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import TodoList from '../../components/TodoList';
import Menu from '../../components/Menu';
import TaskDetail from '../../components/TaskDetail';
import TodosContext from '../../contexts/todos';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
  },
  bodyContainer: {
    background: '#ececec',
    height: '100%',
  },
});
const Home = () => {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  useEffect(() => {
    todos.getTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={2} className={classes.bodyContainer}>
        <Menu />
      </Grid>
      <Grid item xs={7}>
        <div>
          <TodoList />
        </div>
      </Grid>
      <Grid item xs={3} className={classes.bodyContainer}>
        <TaskDetail />
      </Grid>
    </Grid>
  );
};
export default Home;
