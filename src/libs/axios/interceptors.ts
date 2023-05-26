import {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
 
  const { headers } = config;
 
  return { ...config, headers };
};

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => response;
const onResponseError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
};
