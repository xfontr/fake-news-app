import userEvent from "@testing-library/user-event";
import paths from "../../config/paths";
import logInForm from "../../data/logInForm.schema";
import { setUiActionCreator, UiState } from "../../store/slices/uiSlice";
import { render, screen } from "../../test-utils/customTestingLibrary";
import LogInPage from "./LogInPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

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

    describe("And the user fills the forms with invalid data and submits", () => {
      test("Then the fields values should change, but shouldn't redirect the user", async () => {
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

        const submit = screen.getByRole("button", { name: "Log in" });
        await userEvent.click(submit);

        expect(mockNavigate).not.toHaveBeenCalled();
      });
    });

    describe("And the user fills the forms and submits", () => {
      test("Then it should display a success modal and redirect to root", async () => {
        const modal: UiState = {
          status: "SUCCESS",
          message: "User logged in",
        };

        render(<LogInPage />);

        const [email, password] = [
          screen.getByLabelText(logInForm[0].label),
          screen.getByLabelText(logInForm[1].label),
        ];

        await userEvent.type(email, "hello@gmail.com");
        await userEvent.type(password, "admin1234");

        const submit = screen.getByRole("button", { name: "Log in" });
        await userEvent.click(submit);

        expect(mockNavigate).toHaveBeenCalledWith(paths.root);
        expect(mockDispatch).toHaveBeenCalledWith(setUiActionCreator(modal));
      });
    });
  });
});
