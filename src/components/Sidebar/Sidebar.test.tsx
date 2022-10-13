import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Given a Sidebar component", () => {
  describe("When instantiated", () => {
    test("Then it should show a sidebar with a title, a body and a button", () => {
      const title = "Lorem ipsum nemo";
      const body =
        "Velit neque libero incidunt itaque impedit vitae quam, architecto autem reprehenderit?";
      const button = "Lorem now";

      render(<Sidebar />);

      const sidebar = [
        screen.getByRole("heading", { name: title, level: 3 }),
        screen.getByText(body),
        screen.getByRole("button", { name: button }),
      ];

      sidebar.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
