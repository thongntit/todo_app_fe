import AuthContext from 'contexts/auth';
import React, { useContext, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import TodosContext from '../../contexts/todos';

const Home = () => {
  const todos = useContext(TodosContext);
  const { isLogin } = useContext(AuthContext)
  useEffect(() => {
    if (isLogin) {
      todos.getTodos();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <TodoList />
  );
};
export default Home;
