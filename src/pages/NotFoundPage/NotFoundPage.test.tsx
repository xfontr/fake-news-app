import { render, screen } from "../../test-utils/customTestingLibrary";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display the not found page and a button to redirect", () => {
      render(<NotFoundPage />);

      const notFoundPage = [
        screen.getByRole("heading", {
          name: "Don't worry, we still have plenty of stuff for you",
          level: 2,
        }),
        screen.getByText("You should definitely check our latest news!"),
        screen.getByRole("link", { name: "Read the news" }),
      ];

      notFoundPage.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
