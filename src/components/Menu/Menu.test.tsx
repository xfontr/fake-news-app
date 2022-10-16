import {
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import Menu from "./Menu";
import RouteType from "../../types/RouteType";
import paths from "../../config/paths";
import { lazy } from "react";
import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";

const mockRoutes: RouteType[] = [
  {
    path: paths.news,
    name: "News",
    Page: lazy(() => import("../../pages/NewsPage/NewsPage")),
  },
  {
    path: paths.notFound,
    Page: lazy(() => import("../../pages/NotFoundPage/NotFoundPage")),
  },
  {
    path: paths.update,
    name: "Update",
    Page: lazy(() => import("../../pages/UpdatePage/UpdatePage")),
    hide: true,
  },
  {
    path: paths.logIn,
    name: "Log in",
    Page: lazy(() => import("../../pages/NotFoundPage/NotFoundPage")),
  },
];

describe("Given a Menu component", () => {
  const toggleVisibility = jest.fn();

  describe("When instantiated with a function to toggle visibility and a list of routes", () => {
    test("Then it should display a link for each route that has a non-hidden page", () => {
      render(<Menu {...{ routes: mockRoutes, toggleVisibility }} />);

      const expectedLinks = [mockRoutes[0].name, mockRoutes[3].name];

      const links = expectedLinks.map((link) =>
        screen.getByRole("link", { name: link })
      );
      const totalLinks = screen.getAllByRole("link");

      links.forEach((link) => expect(link).toBeInTheDocument());
      expect(totalLinks).toHaveLength(expectedLinks.length);
    });
  });

  describe("When instantiated and clicked any of its links", () => {
    test("Then it should redirect the user to the link's path and call 'toggeVisibility'", async () => {
      render(<Menu {...{ routes: mockRoutes, toggleVisibility }} />);

      const anyLink = screen.getByRole("link", { name: mockRoutes[3].name });

      await userEvent.click(anyLink);

      expect(toggleVisibility).toHaveBeenCalled();

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation);

      expect(pathname).toBe(mockRoutes[3].path);
    });
  });
});
