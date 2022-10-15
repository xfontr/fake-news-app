import userEvent from "@testing-library/user-event";
import schema from "../../data/updateNewsForm.schema";
import useForm from "../../hooks/useForm";
import {
  fireEvent,
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
      render(<Form {...{ loadProps, values, schema }} />);

      const textInput = screen.getByLabelText(schema[0].label);

      expect(textInput.getAttribute("type")).toBe("text");
    });
  });

  describe("When instantiated with any class", () => {
    test("Then it should preserve its original class and the passed one", () => {
      const className = "form--test";
      const expectedClasses = `form ${className}`;

      render(
        <Form
          {...{ loadProps, values, schema, className }}
          data-testid="form"
        />
      );

      const button = screen.getByTestId("form");

      expect(button.getAttribute("class")).toBe(expectedClasses);
    });
  });
});
