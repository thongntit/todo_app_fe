import React, { useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import TodosContext from '../../contexts/todos';
import DetailTitle from './DetailTitle';
import DetailExtra from './DetailExtra';
const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  paper: {
    backgroundColor: 'white',
    padding: '16px 16px',
    margin: 8,
  },
});
const TaskDetail = () => {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  const selectedTodo = todos.todos.find((todo) => todo.id === todos.selectedId);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.paper}>
        <DetailTitle todo={selectedTodo} updateTodo={todos.updateTodo} />
      </Grid>
      <Grid item xs={12} className={classes.paper}>
        <DetailExtra todo={selectedTodo} updateTodo={todos.updateTodo} />
      </Grid>
    </Grid>
  );
};
export default TaskDetail;
