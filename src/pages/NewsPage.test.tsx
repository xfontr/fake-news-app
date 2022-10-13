import { render, screen } from "../test-utils/customTestingLibrary";
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
      const loadingMessage = "Loading...";
      render(<NewsPage />);

      const loading = screen.getByText(loadingMessage);

      expect(loading).toBeInTheDocument();
    });
  });
});
