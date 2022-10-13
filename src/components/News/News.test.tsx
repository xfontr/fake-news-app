import { render, screen } from "../../test-utils/customTestingLibrary";
import { mockNewsWithAuthor } from "../../test-utils/mocks/mockNews";
import News from "./News";

describe("Given a News component", () => {
  describe("When instantiated with a news", () => {
    test("Then it should display the news passed", () => {
      render(<News news={mockNewsWithAuthor} />);

      const news = [
        screen.getByText(mockNewsWithAuthor.author!),
        screen.getByText(mockNewsWithAuthor.title),
        screen.getByText(mockNewsWithAuthor.body),
        screen.getByRole("button", { name: "Full article" }),
      ];

      news.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
