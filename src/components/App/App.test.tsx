import { ReactNode } from "react";
import { render, screen } from "../../test-utils/customTestingLibrary";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import App from "./App";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (element: ReactNode, node: HTMLElement) => element,
}));

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should render the main Layout", () => {
      render(<App />);

      const layout = screen.getByText("FakeNews");

      expect(layout).toBeInTheDocument();
    });

    test("Then it should render the root route and redirect to /news", async () => {
      render(<App />);

      const news = await screen.findAllByTestId("delete");

      expect(news).toHaveLength(mockNewsList.length);
    });
  });
});
