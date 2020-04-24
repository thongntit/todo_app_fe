import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import AddTodo from './AddTodo';
import Task from './Task';
import TodosContext from "../../contexts/todos"
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const TodoList = () => {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  return (
    <React.Fragment>
      <AddTodo className={classes.container} />
      {todos.todos.map((todo) => (
        <Task detail={todo} />
      ))}
    </React.Fragment>
  );
};

export default TodoList;
