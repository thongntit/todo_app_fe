import { useState } from 'react';
import { apisUtils } from 'utils';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [userInfo, setUserInfo] = useState({})
  const getTodos = async () => {
    const todos = await apisUtils.getTodos(userInfo.id)
    setTodos(todos);
  };
  const addTodo = async (params) => {
    const todo = await apisUtils.addTodo(params, userInfo.id)
    if (!todo) return todo
    setTodos([...todos, todo]);
    return todo
  };
  const updateTodo = async (payload) => {
    const resp = await apisUtils.updateTodo(payload)
    if (!resp && !resp?.success) return false
    setTodos([...todos.filter((todo) => todo.id !== payload.id), resp]);
    return resp
  };
  const deleteTodo = async (payload) => {
    const resp = await apisUtils.deleteTodo(payload)
    if (!resp && !resp?.success) return false
    setTodos([...todos.filter((todo) => todo.id !== payload.id)]);
    return resp
  };
  return {
    todos,
    selectedId,
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    setSelectedId,
    setUserInfo
  };
};
