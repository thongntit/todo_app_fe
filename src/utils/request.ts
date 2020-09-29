import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BE_HOST, BE_PROTOCAL } from 'constants/index';
import { commonUtils } from 'utils';

const todosClient = axios.create({ baseURL: BE_PROTOCAL + '://' + BE_HOST });

const getAuthorization = () => {
  return `Bearer ${commonUtils.getAccessToken()}`;
};

// Do something before request is sent
const requestInterceptor = (request: AxiosRequestConfig) => {
  request.headers.Authorization = getAuthorization();
  return request;
};

// Any status code that lie within the range of 2xx cause this function to trigger
const responseSuccessInterceptor = (response: AxiosResponse) => {
  // Do something with response data
  return response;
};
const handleResponseError = (error: AxiosError) => {
  const status = error && error.response && error.response.status;
  switch (status) {
    case 401:
      // userApis.logout();
      console.log('SomethingWentWrong');
      break;
    case 403:
      // userApis.denyAccess();
      console.log('SomethingWentWrong');
      break;
    default:
      console.log('SomethingWentWrong');
      break;
  }
};

// Any status codes that falls outside the range of 2xx cause this function to trigger
const responseErrorInterceptor = (error: AxiosError) => {
  // Do something with response error
  handleResponseError(error);
  return Promise.reject(error);
};

const clients = [todosClient];

clients.forEach((client) => {
  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  );
});

export { todosClient };
