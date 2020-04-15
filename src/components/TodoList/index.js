import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import TodoHeader from "./TodoHeader";
import Todos from "./Todos";
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const TodoList = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <TodoHeader />
      </Grid>
      <Grid item xs={12}>
        <Todos />
      </Grid>
    </Grid>
  );
};
export default TodoList;
