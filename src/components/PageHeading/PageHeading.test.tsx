import { render, screen } from "../../test-utils/customTestingLibrary";
import PageInformation from "../../types/PageInformation";
import PageHeading from "./PageHeading";

describe("Given a PageHeading component", () => {
  describe("When instantiated with page information, such as title and subtitle", () => {
    test("Then it should display said information", () => {
      const pageInformation: PageInformation = {
        title: "Hello",
        subtitle: "Hello again",
      };

      render(<PageHeading heading={pageInformation} />);

      const pageHeading = [
        screen.getByRole("heading", { name: pageInformation.title, level: 1 }),
        screen.getByText(pageInformation.subtitle),
      ];

      pageHeading.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
