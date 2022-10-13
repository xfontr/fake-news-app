import { render, screen } from "../../test-utils/customTestingLibrary";
import { mockNews } from "../../test-utils/mocks/mockNews";
import News from "./News";

describe("Given a News component", () => {
  describe("When instantiated with a news", () => {
    test("Then it should display the news passed", () => {
      render(<News news={mockNews} />);

      const news = [
        screen.getByText(mockNews.userId),
        screen.getByText(mockNews.title),
        screen.getByText(mockNews.body),
        screen.getByRole("button", { name: "Full article" }),
      ];

      news.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
