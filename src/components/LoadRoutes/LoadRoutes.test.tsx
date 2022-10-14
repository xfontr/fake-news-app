import { render } from "@testing-library/react";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import paths from "../../config/paths";
import routes from "../../pages";
import { screen } from "../../test-utils/customTestingLibrary";
import LoadRoutes from "./LoadRoutes";
import { store } from "../../app/store";

describe("Given a LoadRoutes component", () => {
  describe("When instantiated with a schema of routes", () => {
    test("Then it should render the news page if the path is '/'", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[paths.root]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </Provider>
      );

      const newsPage = await screen.findByRole("heading", {
        name: routes[1].pageInformation!.title,
        level: 1,
      });

      expect(newsPage).toBeInTheDocument();
    });

    test("Then it should render the news page if the path is '/news'", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[paths.news]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </Provider>
      );

      const newsPage = await screen.findByRole("heading", {
        name: routes[1].pageInformation!.title,
        level: 1,
      });

      expect(newsPage).toBeInTheDocument();
    });

    test("Then it should render the not found heading if the route is '/false-route'", async () => {
      const falseRoute = "/false-route";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[falseRoute]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </Provider>
      );

      const notFoundPage = await screen.findByRole("heading", {
        name: routes[2].pageInformation!.title,
        level: 1,
      });

      expect(notFoundPage).toBeInTheDocument();
    });
  });
});
