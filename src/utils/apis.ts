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
export default { validateWithBackend };
