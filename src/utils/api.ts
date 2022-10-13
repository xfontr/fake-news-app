import actualAxios, { AxiosStatic, AxiosRequestConfig } from "axios";

const api = (axios: AxiosStatic = actualAxios) => ({
  get: (url: string, config: AxiosRequestConfig<{}> = {}) =>
    axios.get(url, config),
});

export default api;
