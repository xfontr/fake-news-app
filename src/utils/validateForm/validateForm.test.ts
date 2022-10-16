import Joi from "joi";
import { extractSchema, validateForm } from "./validateForm";

const schema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
});

describe("Given a extractSchema function", () => {
  describe("When called with a validation schema and a group of values", () => {
    test("Then it should return a new validation schema with only the fields the values have", () => {
      const values = {
        title: "Hello",
      };

      const expectedSchema = Joi.object({
        title: Joi.string(),
      });

      const result = extractSchema(schema, values);

      expect(JSON.stringify(result)).toStrictEqual(
        JSON.stringify(expectedSchema)
      );
    });
  });
});

describe("Given a validateForm function", () => {
  describe("When called with a joi validation schema and a set of form values", () => {
    test("Then it should return a joi validation result object (with errors, if any)", () => {
      const values = {
        title: 1,
      };

      const result = validateForm(schema, values);

      expect(result.error).toHaveProperty("details");
    });
  });
});
