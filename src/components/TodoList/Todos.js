import React from "react";
import { makeStyles } from "@material-ui/core";
import AddTodo from "./AddTodo";
import Task from "./Task";
const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});
const TodoList = ({ todos }) => {
  todos = [1, 2, 3];
  const classes = useStyles();
  return (
    <React.Fragment>
      <AddTodo />
      {todos.map((todo) => (
        <Task detail={todo} />
      ))}
    </React.Fragment>
  );
};
export default TodoList;
