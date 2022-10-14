import { act } from "react-dom/test-utils";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { renderHook } from "../test-utils/customTestingLibrary";
import { mockAuthorList } from "../test-utils/mocks/mockAuthor";
import { mockNewsList } from "../test-utils/mocks/mockNews";
import { capitalizeNews } from "../utils/capitalize/capitalize";
import useNews from "./useNews";

const mockUseAppDispatch = jest.fn();

jest.mock("../app/hooks", () => ({
  ...jest.requireActual("../app/hooks"),
  useAppDispatch: () => mockUseAppDispatch,
}));

describe("Given a getAll function returned from a useNews function", () => {
  describe("When called and the api responds with a list of news", () => {
    test("Then it should load the store with all the news with the author names", async () => {
      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      const expectedAction = loadAllActionCreator(
        capitalizeNews([
          { ...mockNewsList[0], author: mockAuthorList[0].name },
          { ...mockNewsList[1], author: mockAuthorList[1].name },
        ])
      );

      await act(() => {
        getAll();
      });

      expect(mockUseAppDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When called and the news api responds with an error", () => {
    test("Then it should do nothing", async () => {
      mockNewsList[0].title = "error";

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await act(() => {
        getAll();
      });

      expect(mockUseAppDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When called and the users api responds with an error", () => {
    test("Then it should do nothing", async () => {
      mockAuthorList[0].name = "error";

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await act(() => {
        getAll();
      });

      expect(mockUseAppDispatch).not.toHaveBeenCalled();
    });
  });
});
