import userEvent from "@testing-library/user-event";
import schema from "../../data/updateNewsForm.schema";
import useForm from "../../hooks/useForm";
import {
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import Form from "./Form";

describe("Given a Form component", () => {
  const {
    result: {
      current: { values, loadProps },
    },
  } = renderHook(() => useForm(schema));
  describe("When instantiated with a form schema, input values and input props", () => {
    test("Then it should render all the inputs in the schema with the specified conditions", () => {
      render(<Form {...{ loadProps, values, schema }} />);

      const form = [
        screen.getByLabelText(schema[0].label),
        screen.getByLabelText(schema[1].label),
      ];

      form.forEach((input, index) => expect(input).toBeInTheDocument());

      form.forEach((input, index) =>
        expect(input).toHaveValue(schema[index].initialValue)
      );
    });

    test("Then the input types should be as specified in the schema", async () => {
      const wrongInput = "hi";

      render(<Form {...{ loadProps, values, schema }} />);

      const numericInput = screen.getByLabelText(schema[0].label);

      await userEvent.type(numericInput, wrongInput);

      expect(numericInput).toHaveValue(schema[0].initialValue);
    });
  });
});
