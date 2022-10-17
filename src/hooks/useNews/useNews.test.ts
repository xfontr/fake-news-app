import { act } from "react-dom/test-utils";
import { loadAllActionCreator } from "../../store/slices/newsSlice";
import { setUiActionCreator, UiState } from "../../store/slices/uiSlice";
import { renderHook } from "../../test-utils/customTestingLibrary";
import { mockAuthorList } from "../../test-utils/mocks/mockAuthor";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import { capitalizeNews } from "../../utils/capitalize/capitalize";
import useNews from "./useNews";

const mockUseAppDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseAppDispatch,
}));

describe("Given a getAll function returned from a useNews function", () => {
  describe("When called", () => {
    test("Then it should open the ui modal with a 'Loading...' message", async () => {
      const expectedModal: UiState = {
        status: "LOADING",
        message: "Loading the latest news",
      };

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await act(() => {
        getAll();
      });

      const calledWith = mockUseAppDispatch.mock.calls[0][0];
      expect(calledWith).toStrictEqual(setUiActionCreator(expectedModal));
    });
  });

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

    test("Then it should open the ui modal with a success message", async () => {
      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      const expectedModal: UiState = {
        status: "SUCCESS",
        message: "News loaded",
      };

      await act(() => {
        getAll();
      });

      const calledWith = mockUseAppDispatch.mock.calls[2][0];
      expect(calledWith).toStrictEqual(setUiActionCreator(expectedModal));
    });
  });

  describe("When called and the news api responds with an error", () => {
    test("Then it should call the ui modal with an error message", async () => {
      const expectedModal: UiState = {
        status: "ERROR",
        message: "Failed to load the news",
      };

      const uiDispatchCalls = 2;
      mockNewsList[0].title = "error";

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await act(() => {
        getAll();
      });

      expect(mockUseAppDispatch).toHaveBeenCalledTimes(uiDispatchCalls);

      const calledWith = mockUseAppDispatch.mock.calls[1][0];
      expect(calledWith).toStrictEqual(setUiActionCreator(expectedModal));
    });
  });

  describe("When called and the users api responds with an error", () => {
    test("Then it should do nothing", async () => {
      const uiDispatchCalls = 2;

      mockNewsList[0].title = "Test";
      mockAuthorList[0].name = "error";

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useNews);

      await act(() => {
        getAll();
      });

      expect(mockUseAppDispatch).toHaveBeenCalledTimes(uiDispatchCalls);
    });
  });
});
