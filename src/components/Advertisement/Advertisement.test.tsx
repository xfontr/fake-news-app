import { render, screen } from "../../test-utils/customTestingLibrary";
import Advertisement from "./Advertisement";

describe("Given an Advertisement component", () => {
  describe("When instantiated", () => {
    test("Then it should show an advertisement with a title, a body and a button", () => {
      const title = "Lorem ipsum nemo";
      const body =
        "Velit neque libero incidunt itaque impedit vitae quam, architecto autem reprehenderit?";
      const button = "Lorem now";

      render(<Advertisement />);

      const advertisement = [
        screen.getByRole("heading", { name: title, level: 3 }),
        screen.getByText(body),
        screen.getByRole("button", { name: button }),
      ];

      advertisement.forEach((node) => expect(node).toBeInTheDocument());
    });
  });

  describe("When instantiated with a sticky class", () => {
    test("Then it should have the sticky style properties, while preserving the previous ones", () => {
      const props = {
        className: "container--sticky",
        "data-testid": "advertisement",
      };
      const expectedClasses = `container ${props.className}`;

      render(<Advertisement {...props} />);

      const advertisement = screen.getByTestId(props["data-testid"]);

      expect(advertisement.getAttribute("class")).toBe(expectedClasses);
    });
  });
});
