import { useState } from 'react';
import { BE_HOST, BE_PROTOCAL } from '../constants';

export const useTodos = () => {
  const [todos, setTodos] = useState([1, 2, 3, 4]);
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
  return {
    todos,
    getTodos,
  };
};
