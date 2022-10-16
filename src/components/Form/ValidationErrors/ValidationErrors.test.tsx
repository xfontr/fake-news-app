import { ValidationResult } from "joi";
import { render, screen } from "../../../test-utils/customTestingLibrary";
import ValidationErrors from "./ValidationErrors";

describe("Given a ValidationErrors component", () => {
  describe("When instantiated with form errors", () => {
    test("Then it should display the corresponding error messages", () => {
      const errors = {
        error: {
          details: [
            {
              path: ["name"],
              message: "Name must be 3 at least 3 characters long",
            },
          ],
        },
      };

      render(<ValidationErrors errors={errors as ValidationResult<unknown>} />);

      const errorMessage = screen.getByText(errors.error.details[0].message);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When instantiated without errors", () => {
    test("Then it should render nothing", () => {
      render(<ValidationErrors errors={undefined} />);

      const errors = screen.queryByTestId("errors");

      expect(errors).not.toBeInTheDocument();
    });
  });
});
