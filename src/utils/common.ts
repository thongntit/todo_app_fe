import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getAccessToken = () => cookies.get('todo-app-token');
const setToken = (tokenObj: any) => {
  cookies.set('todo-app-token', tokenObj.id_token, { path: '/' });
};
const removeToken = () => {
  cookies.remove('todo-app-token');
};
export default {
  getAccessToken,
  setToken,
  removeToken,
};
