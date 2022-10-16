import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils/customTestingLibrary";
import BurgerMenu from "./BurgerMenu";

describe("Given a BurgerMenu component", () => {
  describe("When instantiated", () => {
    test("Then it should only show a burger menu icon", () => {
      render(<BurgerMenu />);

      const burgerIcon = screen.getByTestId("burger__icon");
      const unexpectedNavigationLinks = screen.queryAllByRole("link");

      expect(burgerIcon).toBeInTheDocument();
      expect(unexpectedNavigationLinks).toHaveLength(0);
    });
  });

  describe("When instantiated and once clicked the burger icon", () => {
    test("Then it should also show the navigation links", async () => {
      render(<BurgerMenu />);

      const burgerIcon = screen.getByTestId("burger__icon");
      await userEvent.click(burgerIcon);

      const navigationLinks = screen.getAllByRole("link");

      expect(navigationLinks.length > 0).toBe(true);
    });

    test("Then it should hide all the links if the burger icon is clicked again", async () => {
      render(<BurgerMenu />);

      const burgerIcon = screen.getByTestId("burger__icon");
      await userEvent.click(burgerIcon);
      await userEvent.click(burgerIcon);

      const unexpectedNavigationLinks = screen.queryAllByRole("link");

      expect(burgerIcon).toBeInTheDocument();
      expect(unexpectedNavigationLinks).toHaveLength(0);
    });

    test("The it should also hide the links if the user clicks outside the navigation bar", async () => {
      render(<BurgerMenu />);

      const burgerIcon = screen.getByTestId("burger__icon");
      await userEvent.click(burgerIcon);

      const closeModalArea = screen.getByTestId("modal-close-area");
      await userEvent.click(closeModalArea);

      const unexpectedNavigationLinks = screen.queryAllByRole("link");

      expect(burgerIcon).toBeInTheDocument();
      expect(unexpectedNavigationLinks).toHaveLength(0);
    });
  });
});
