import { useState } from 'react';
import { BE_HOST, BE_PROTOCAL } from '../constants';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async (userInfo) => {
    if (userInfo) {
      const resp = await fetch(
        BE_PROTOCAL + '://' + BE_HOST + '/tasks/getAllTasks',
        {
          method: 'post',
          headers: {
            "Authorization": 'Bearer ' + userInfo.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userInfo.id,
          }),
        }
      ).then(res => res.json());
      setTodos(resp.data);
    }
  };
  const addTodo = async (userInfo, params) => {
    if (userInfo && params.title) {
      const resp = await fetch(
        BE_PROTOCAL + '://' + BE_HOST + '/tasks/create',
        {
          method: 'post',
          headers: {
            "Authorization": 'Bearer ' + userInfo.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userInfo.id,
            title: params.title
          }),
        }
      ).then(res => res.json()).catch(() => false)
      setTodos([...todos, resp]);
      return resp
    }
    return false
  }
  return {
    todos,
    getTodos,
    addTodo
  };
};
