import { AxiosRequestConfig } from "axios";
import api from "./api";

const mockGet = jest.fn();

jest.mock("axios", () => ({
  get: (url: string, config: AxiosRequestConfig<{}>) => mockGet(url, config),
}));

describe("Given a get function returned by an api function", () => {
  describe("When called with an url and a config object", () => {
    test("Then it should call the module that fetches the url", () => {
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
