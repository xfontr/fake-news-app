import { render } from "@testing-library/react";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import paths from "../../config/paths";
import routes from "../../pages";
import { store } from "../../store/store";
import { screen } from "../../test-utils/customTestingLibrary";
import LoadRoutes from "./LoadRoutes";

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

    test("Then it should render the update page if the path is '/update/1'", async () => {
      const updatePath = "/update/1";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[updatePath]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </Provider>
      );

      const newsPage = await screen.findByRole("heading", {
        name: routes[3].pageInformation!.title,
        level: 1,
      });

      expect(newsPage).toBeInTheDocument();
    });

    test("Then it should render the log in page if the path is '/log-in'", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[paths.logIn]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </Provider>
      );

      const newsPage = await screen.findByRole("heading", {
        name: routes[4].pageInformation!.title,
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
