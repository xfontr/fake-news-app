import updateNewsForm from "../../../data/updateNewsForm.schema";
import { render, screen } from "../../../test-utils/customTestingLibrary";
import FormField from "./FormField";

describe("Given a FormField component", () => {
  describe("When instantiated with an input field and a set of values", () => {
    test("Then it should display an input with the passed attributes", () => {
      render(<FormField field={updateNewsForm[0]} id={updateNewsForm[0].id} />);

      const input = screen.getByLabelText(updateNewsForm[0].label);

      expect(input).toBeInTheDocument();
    });
  });

  describe("When instantiated as a textarea field and a set of values", () => {
    test("Then it should display a textarea with the passed attributes", () => {
      render(<FormField field={updateNewsForm[2]} id={updateNewsForm[2].id} />);

      const textarea = screen.getByLabelText(updateNewsForm[2].label);

      expect(textarea).toBeInTheDocument();
    });
  });
});
