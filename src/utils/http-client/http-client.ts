import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const defaultConfiguration: AxiosRequestConfig = {
  baseURL: 'https://deckofcardsapi.com/api/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance: AxiosInstance = axios.create(defaultConfiguration);

const _get = <T>(
  url: string,
  queryParams?: unknown,
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, {params: queryParams});
};

export const httpClient = {
  get: _get,
};
