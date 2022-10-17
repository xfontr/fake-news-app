import schema from "../../data/updateNewsForm.schema";
import useForm from "../../hooks/useForm/useForm";
import {
  createEvent,
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

      form.forEach((input) => expect(input).toBeInTheDocument());

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

      render(<Form {...{ loadProps, values, schema, className }} />);

      const button = screen.getByTestId("form");

      expect(button.getAttribute("class")).toBe(expectedClasses);
    });
  });

  describe("When submitted", () => {
    test("Then the submit event should be default prevented", () => {
      render(<Form {...{ loadProps, values, schema }} />);

      const form = screen.getByTestId("form");
      const submitEvent = createEvent.submit(form);

      fireEvent(form, submitEvent);

      expect(submitEvent.defaultPrevented).toBe(true);
    });

    describe("And the input values are invalid", () => {
      test("Then it should not call the submit action of the form", () => {
        const submitAction = jest.fn();

        render(
          <Form
            {...{ loadProps, values, schema }}
            onSubmit={() => submitAction()}
          />
        );

        const form = screen.getByTestId("form");

        fireEvent.submit(form);

        expect(submitAction).not.toHaveBeenCalled();
      });

      test("Then it should display the errors", () => {
        render(<Form {...{ loadProps, values, schema }} />);

        const bodyField = screen.getByLabelText(schema[2].label);

        const form = screen.getByTestId("form");
        fireEvent.submit(form);

        const expectedError = screen.getByText(
          '"body" is not allowed to be empty'
        );

        expect(expectedError).toBeInTheDocument();
        expect(bodyField).toHaveStyle("border-color: colors.$error");
      });
    });

    describe("And the input values are valid", () => {
      test("Then it should call the submit action of the form", () => {
        const submitAction = jest.fn();

        const validValues = {
          [schema[0].id]: "Hello",
          [schema[1].id]: "Hello",
          [schema[2].id]: "Hello",
        };

        render(
          <Form
            {...{ loadProps, values: validValues, schema }}
            onSubmit={() => submitAction()}
          />
        );

        const form = screen.getByTestId("form");

        fireEvent.submit(form);

        expect(submitAction).toHaveBeenCalled();
      });
    });
  });
});
