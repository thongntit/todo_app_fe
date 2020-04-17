import React from 'react';
import {
  Grid,
  makeStyles,
  OutlinedInput,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  todoInput: {
    width: '100%',
    height: 40,
    borderRadius: 'unset',
  },
  addTodoBtn: {
    marginLeft: 8,
    width: '100%',
    height: 40,
    borderRadius: 'unset',
    backgroundColor: '#1976d2',
  },
});
const AddTodo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6">To-Do list</Typography>
      </Grid>
      <Grid item xs={10}>
        <OutlinedInput
          className={classes.todoInput}
          placeholder="Add a task.."
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addTodoBtn}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
