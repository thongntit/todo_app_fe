import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import TodoHeader from './TodoHeader';
import Todos from './Todos';
const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: 16,
  },
});
const TodoList = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-around">
      <Grid item xs={7}>
        <TodoHeader />
        <Todos />
      </Grid>
    </Grid>
  );
};
export default TodoList;
