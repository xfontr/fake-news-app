import { ObjectSchema } from "joi";
import validateForm from "./validateForm";

describe("Given a validateForm function", () => {
  describe("When called with a joi validation schema and a set of form values", () => {
    const mockValidate = jest.fn().mockReturnThis();

    const validationSchema = {
      validate: mockValidate,
    };

    test("Then it should return a joi validation result object (with errors, if any)", () => {
      const values = {
        name: "Name",
      };

      const options = {
        abortEarly: false,
      };

      const result = validateForm(
        validationSchema as unknown as ObjectSchema<unknown>,
        values
      );

      expect(validationSchema.validate).toHaveBeenCalledWith(values, options);
      expect(result).toBe(mockValidate());
    });
  });
});
