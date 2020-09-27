import { Grid } from '@material-ui/core';
import React from 'react';
import TodoHeader from './TodoHeader';
import Todos from './Todos';
const TodoList = () => {
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
