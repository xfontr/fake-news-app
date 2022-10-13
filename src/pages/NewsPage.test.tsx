// import { reactRender } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useAppDispatch } from "../app/hooks";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { render, screen, renderHook } from "../test-utils/customTestingLibrary";
import { mockNewsList } from "../test-utils/mocks/mockNews";
import NewsPage from "./NewsPage";

describe("Given a NewsPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display a list of news", async () => {
      render(<NewsPage />);

      const newsList = await screen.findAllByRole("heading", { level: 3 });

      expect(newsList).toHaveLength(mockNewsList.length);
    });
  });

  describe("When instantiated and loading the news", () => {
    test("Then it should display a Loading message", () => {
      const {
        result: { current: dispatch },
      } = renderHook(useAppDispatch);

      act(() => {
        dispatch(loadAllActionCreator([]));
      });

      mockNewsList[0].title = "error";
      const loadingMessage = "Loading...";
      render(<NewsPage />);

      const loading = screen.getByText(loadingMessage);

      expect(loading).toBeInTheDocument();
    });
  });
});
