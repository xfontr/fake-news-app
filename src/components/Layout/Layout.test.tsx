import { render, screen } from "../../test-utils/customTestingLibrary";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When instantiated with a text 'Hello'", () => {
    test("Then it should show the main app layout and said text", () => {
      const children = "Hello";
      const header = "FakeNews";
      const footer = "For Cleverpy © 2022";
      const pageTitle = "Come see the latest news";

      render(<Layout>{children}</Layout>);

      const sidebar = screen.getByRole("button", { name: "Lorem now" });
      const pageHeading = screen.getByRole("heading", {
        name: pageTitle,
        level: 1,
      });

      const layout = [
        screen.getByText(children),
        screen.getByText(header),
        screen.getByText(footer),
        sidebar,
        pageHeading,
      ];

      layout.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
