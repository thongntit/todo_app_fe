import React, { useContext } from 'react';
import {
  Grid,
  makeStyles,
  OutlinedInput,
  Button,
  Typography,
} from '@material-ui/core';
import TodosContext from '../../contexts/todos';
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
  const todos = useContext(TodosContext);
  const handleSubmit = async () => {
    const ele = document.getElementsByName('new-todo');
    if (ele) {
      const success = await todos.addTodo({
        title: ele[0].value,
      });
      if (success){
        ele[0].value = ""
      }
    }
  };
  const catchPressEnter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6">To-Do list</Typography>
      </Grid>
      <Grid item xs={10}>
        <OutlinedInput
          className={classes.todoInput}
          placeholder="Add a task.."
          onKeyDown={catchPressEnter}
          name="new-todo"
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addTodoBtn}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
