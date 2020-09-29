import { BE_HOST, BE_PROTOCAL } from 'constants/index';
import { todosClient } from './request';
const validateWithBackend = async (jwtToken: string) => {
  if (jwtToken) {
    return fetch(BE_PROTOCAL + '://' + BE_HOST + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenId: jwtToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);
  }
};
const getTodos = async (userId: string) => {
  const { data } = await todosClient.post('/tasks/getAllTasks', {
    userId,
  });
  return data?.data;
};
const addTodo = async (payload: any, userId: string) => {
  const { data } = await todosClient.post('/tasks/create', {
    userId,
    title: payload.title,
  });
  return data;
};
const updateTodo = async (payload: any) => {
  const { data } = await todosClient.post('/tasks/update', {
    ...payload,
  });
  return data?.success;
};
const deleteTodo = async (payload: any) => {
  const { data } = await todosClient.post('/tasks/delete', {
    ...payload,
  });
  return data?.success;
};
export default {
  validateWithBackend,
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
