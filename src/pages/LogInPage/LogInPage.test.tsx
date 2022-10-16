import userEvent from "@testing-library/user-event";
import logInForm from "../../data/logInForm.schema";
import { render, screen } from "../../test-utils/customTestingLibrary";
import LogInPage from "./LogInPage";

describe("Given a LogInPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display the login inputs and a button to log in", () => {
      render(<LogInPage />);

      const logIn = [
        screen.getByLabelText(logInForm[0].label),
        screen.getByLabelText(logInForm[1].label),
        screen.getByRole("button", { name: "Log in" }),
      ];

      logIn.forEach((node) => expect(node).toBeInTheDocument());
    });

    describe("And the user fills the forms", () => {
      test("Then the fields values should change", async () => {
        const typedMessage = "Hello";

        render(<LogInPage />);

        const [email, password] = [
          screen.getByLabelText(logInForm[0].label),
          screen.getByLabelText(logInForm[1].label),
        ];

        await userEvent.type(email, typedMessage);
        await userEvent.type(password, typedMessage);

        expect(email).toHaveValue(typedMessage);
        expect(password).toHaveValue(typedMessage);
      });
    });
  });
});
