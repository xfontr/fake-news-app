import { ValidationResult } from "joi";
import updateNewsForm from "../../data/updateNewsForm.schema";
import { getClass, getFullClass } from "./getClass";

describe("Given a getClass function", () => {
  describe("When called with a class 'test' and an additional class 'test--extra'", () => {
    test("Then it should return 'test test--extra'", () => {
      const defaultClass = "text";
      const additionalClass = "text--extra";
      const expectedClass = `${defaultClass} ${additionalClass}`;

      const result = getClass(defaultClass, additionalClass);

      expect(result).toBe(expectedClass);
    });
  });

  describe("When called with a class 'test' and no additional classes", () => {
    test("Then it should return 'test'", () => {
      const defaultClass = "text";
      const additionalClass = undefined;

      const result = getClass(defaultClass, additionalClass);

      expect(result).toBe(defaultClass);
    });
  });
});

describe("Given a getFullClass function", () => {
  describe("When called with a list of errors and a form field that matches with the error", () => {
    test("Then it should return 'form__input form__input--error'", () => {
      const errors = {
        error: {
          details: [
            {
              path: [updateNewsForm[0].id],
              message: "Name must be 3 at least 3 characters long",
            },
          ],
        },
      };
      const expectedClass = "form__input form__input--error";

      const result = getFullClass(
        errors as ValidationResult<unknown>,
        updateNewsForm[0]
      );

      expect(result).toBe(expectedClass);
    });
  });

  describe("When called with a list of errors and a form field that doesn't match with the error", () => {
    test("Then it should return 'form__input'", () => {
      const errors = {
        error: {
          details: [
            {
              path: [updateNewsForm[1].id],
              message: "Name must be 3 at least 3 characters long",
            },
          ],
        },
      };
      const expectedClass = "form__input";

      const result = getFullClass(
        errors as ValidationResult<unknown>,
        updateNewsForm[0]
      );

      expect(result).toBe(expectedClass);
    });
  });
});
