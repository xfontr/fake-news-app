import { AxiosRequestConfig } from "axios";
import api from "./api";

const mockGet = jest.fn();

jest.mock("axios", () => ({
  get: (url: string, config: AxiosRequestConfig<{}>) => mockGet(url, config),
}));

describe("Given a get function returned by an api function", () => {
  describe("When called only with an url", () => {
    test("Then it should call the module that fetches the url with an empty config object", () => {
      const url = "";
      const config = {};

      const { get } = api();

      get(url);

      expect(mockGet).toHaveBeenCalledWith(url, config);
    });
  });

  describe("When called with an url and a config object", () => {
    test("Then it should call the module that fetches the url with the config object", () => {
      const url = "";
      const config = {
        headers: {},
      };

      const { get } = api();

      get(url, config);

      expect(mockGet).toHaveBeenCalledWith(url, config);
    });
  });
});
