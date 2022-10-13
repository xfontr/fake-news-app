import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = () => ({
  get: <T>(
    url: string,
    config: AxiosRequestConfig<{}> = {}
  ): Promise<AxiosResponse<T>> => axios.get<T>(url, config),
});

export default api;
