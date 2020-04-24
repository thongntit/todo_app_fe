import React from 'react';

const todosContext = React.createContext({
  todos: [],
  getTodoList: () => {},
});

export default todosContext;
