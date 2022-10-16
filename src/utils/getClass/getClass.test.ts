import getClass from "./getClass";

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
