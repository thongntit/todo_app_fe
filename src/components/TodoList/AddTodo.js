import React, { useContext } from 'react';
import {
  Grid,
  makeStyles,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import TodosContext from 'contexts/todos';
import { MaxHeightButton as Button } from "components/Common"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const useStyles = makeStyles({
  container: {
    padding: 8,
  },
  todoInput: {
    width: '100%',
    height: 40,
    borderRadius: 'unset',
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
      if (success) {
        ele[0].value = '';
      }
    }
  };
  const catchPressEnter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <Grid container className={classes.container} spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">Danh sách việc phải làm</Typography>
      </Grid>
      <Grid item xs={5}>
        <OutlinedInput
          className={classes.todoInput}
          placeholder="Thêm việc mới ..."
          onKeyDown={catchPressEnter}
          name="new-todo"
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          <AddCircleOutlineIcon />
          Thêm
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
