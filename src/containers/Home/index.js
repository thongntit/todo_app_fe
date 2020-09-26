import React, { useContext, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import TodosContext from '../../contexts/todos';

const Home = () => {
  const todos = useContext(TodosContext);
  useEffect(() => {
    todos.getTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <TodoList />
  );
};
export default Home;
