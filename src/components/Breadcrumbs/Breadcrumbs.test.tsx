import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import { screen } from "../../test-utils/customTestingLibrary";
import Breadcrumbs from "./Breadcrumbs";

describe("Given a Breadcrumbs component", () => {
  describe("When instantiated and the route is '/news/fakepage'", () => {
    test("Then it should display a link to home and fakepage, and a text '/news'", () => {
      const falsePath = "/news/fakepage";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[falsePath]}>
            <Breadcrumbs />
          </MemoryRouter>
        </Provider>
      );

      const breadcrumbs = [
        screen.getByRole("link", { name: "FakeNews" }),
        screen.getByRole("link", { name: "/ news" }),
        screen.getByText("/ fakepage"),
      ];

      breadcrumbs.forEach((path) => expect(path).toBeInTheDocument());
    });
  });
});
