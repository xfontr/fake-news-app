import { render, screen } from "../../test-utils/customTestingLibrary";
import { Layout, PageLayout } from "./Layout";
import routes from "../../pages/index";

describe("Given a Layout and PageLayout components", () => {
  describe("When instantiated with a text 'Hello'", () => {
    test("Then it should show the main app layout and said text", () => {
      const children = "Hello";
      const header = "FakeNews";
      const footer = "For Cleverpy © 2022";

      render(
        <Layout>
          <PageLayout pageInformation={routes[1].pageInformation!}>
            {children}
          </PageLayout>
        </Layout>
      );

      const sidebar = screen.getByRole("button", { name: "Lorem now" });
      const pageHeading = screen.getByRole("heading", {
        name: routes[1].pageInformation!.title,
        level: 1,
      });

      const layout = [
        screen.getByText(children),
        screen.getAllByText(header)[0],
        screen.getByText(footer),
        sidebar,
        pageHeading,
      ];

      layout.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
