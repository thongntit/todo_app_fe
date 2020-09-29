import { todosClient } from './request';
const validateWithBackend = async (jwtToken: string) => {
  if (jwtToken) {
    const { data } = await todosClient.post('/auth/login', {
      tokenId: jwtToken,
    });
    return data;
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
  return data;
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
