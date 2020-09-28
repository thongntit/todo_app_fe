import { BE_HOST, BE_PROTOCAL } from 'constants/index';

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

// const addTodo = async (params) => {
//   const token = cookies.get('todo-app-token');
//   if (token) {
//     const userInfo = jwtDecode(token);
//   if (userInfo && params.title) {
//     const resp = await fetch(
//       BE_PROTOCAL + '://' + BE_HOST + '/tasks/create',
//       {
//         method: 'post',
//         headers: {
//           Authorization: 'Bearer ' + userInfo.token,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: userInfo.id,
//           title: params.title,
//         }),
//       }
//     )
//       .then((res) => res.json())
//       .catch(() => false);
//     setTodos([...todos, resp]);
//     return resp;
//   }
//   return false;
// };
export default { validateWithBackend };
