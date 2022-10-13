import { render, screen } from "../../test-utils/customTestingLibrary";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import NewsList from "./NewsList";

describe("Given a NewsList component", () => {
  describe("When instantiated with a list of news", () => {
    test("Then it should display a list of each news", () => {
      render(<NewsList news={mockNewsList} />);

      const newsList = screen.getAllByRole("heading", { level: 3 });

      expect(newsList).toHaveLength(mockNewsList.length);
    });
  });
});
