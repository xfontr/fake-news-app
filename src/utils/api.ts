import axios, { AxiosRequestConfig } from "axios";

const api = () => ({
  get: (url: string, config: AxiosRequestConfig<{}> = {}) =>
    axios.get(url, config),
});

export default api;
