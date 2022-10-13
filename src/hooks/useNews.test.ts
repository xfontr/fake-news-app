import { loadAllActionCreator } from "../store/slices/newsSlice";
import { renderHook } from "../test-utils/customTestingLibrary";
import { mockNewsList } from "../test-utils/mocks/mockNews";
import useNews from "./useNews";

const mockUseAppDispatch = jest.fn();

jest.mock("../app/hooks", () => ({
  ...jest.requireActual("../app/hooks"),
  useAppDispatch: () => mockUseAppDispatch,
}));

describe("Given a getAll function returned from a useNews function", () => {
  describe("When called and the api responds with a list of news", () => {
    test("Then it should load the store with all the news", async () => {
      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      const action = loadAllActionCreator(mockNewsList);

      await getAll();

      expect(mockUseAppDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When called and the api responds with an error", () => {
    test("Then it should do nothing", async () => {
      mockNewsList[0].title = "error";

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await getAll();

      expect(mockUseAppDispatch).not.toHaveBeenCalled();
    });
  });
});
