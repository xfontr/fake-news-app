import { render, screen } from "../../test-utils/customTestingLibrary";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated with a text 'Hello'", () => {
    test("Then it should appear with said text", () => {
      const children = "Hello";

      render(<Button>{children}</Button>);

      const button = screen.getByRole("button", { name: children });

      expect(button).toBeInTheDocument();
    });
  });

  describe("Whyen instantiated with a text 'Hello' and a direction to '/home'", () => {
    test("Then it should appear as an anchor (link)", () => {
      const children = "Hello";
      const to = "/home";

      render(<Button to={to}>{children}</Button>);

      const button = screen.getByRole("link", { name: children });

      expect(button).toBeInTheDocument();
      expect(button.getAttribute("href")).toBe(to);
    });
  });

  describe("When instantiated with any class", () => {
    test("Then it should preserve its original class and the passed one", () => {
      const children = "Hello";
      const className = "button--outline";
      const expectedClasses = `button ${className}`;

      render(<Button className={className}>{children}</Button>);

      const button = screen.getByRole("button", { name: children });

      expect(button.getAttribute("class")).toBe(expectedClasses);
    });
  });
});
