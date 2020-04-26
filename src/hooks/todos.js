import { useState } from 'react';
import { BE_HOST, BE_PROTOCAL } from '../constants';

export const useTodos = (userInfo) => {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const getTodos = async () => {
    if (userInfo && Object.keys(userInfo).length > 0) {
      const resp = await fetch(
        BE_PROTOCAL + '://' + BE_HOST + '/tasks/getAllTasks',
        {
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userInfo.id,
          }),
        }
      ).then((res) => res.json());
      setTodos(resp.data);
    }
  };
  const addTodo = async (params) => {
    if (userInfo && params.title) {
      const resp = await fetch(
        BE_PROTOCAL + '://' + BE_HOST + '/tasks/create',
        {
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userInfo.id,
            title: params.title,
          }),
        }
      )
        .then((res) => res.json())
        .catch(() => false);
      setTodos([...todos, resp]);
      return resp;
    }
    return false;
  };
  const updateTodo = async (payload) => {
    if (userInfo && payload) {
      const resp = await fetch(
        BE_PROTOCAL + '://' + BE_HOST + '/tasks/update',
        {
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => res.json())
        .catch(() => false);
      setTodos([...todos.filter((todo) => todo.id !== payload.id), resp]);
      return resp;
    }
    return false;
  };
  return {
    todos,
    getTodos,
    addTodo,
    updateTodo,
    selectedId,
    setSelectedId,
  };
};
