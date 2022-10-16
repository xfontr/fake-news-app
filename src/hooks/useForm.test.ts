import { renderHook as ReactRenderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { act } from "react-dom/test-utils";
import updateNewsForm from "../data/updateNewsForm.schema";
import { renderHook, waitFor } from "../test-utils/customTestingLibrary";
import FormSchema from "../types/FormSchema";
import useForm from "./useForm";

describe("Given a useForm function", () => {
  describe("When called with a form form schema", () => {
    test("Then it should return an object of values of each input value", () => {
      const {
        result: {
          current: { values },
        },
      } = renderHook(() => useForm(updateNewsForm));

      const expectedValues = {
        [updateNewsForm[0].id]: updateNewsForm[0].initialValue,
        [updateNewsForm[1].id]: updateNewsForm[1].initialValue,
        [updateNewsForm[2].id]: "",
      };

      expect(values).toStrictEqual(expectedValues);
    });

    test("Then it should return a loadProps function which will return the full input data", () => {
      const {
        result: {
          current: { loadProps },
        },
      } = renderHook(() => useForm(updateNewsForm));

      const value = 1234;
      const handleChange = () => {};

      const expectedProps = {
        id: updateNewsForm[0].id,
        type: updateNewsForm[0].type,
        className: "form__input",
        value,
        onChange: handleChange,
      };

      const result = loadProps(updateNewsForm[0], value, "form__input");

      expect(JSON.stringify(result)).toBe(JSON.stringify(expectedProps));
    });

    test("Then the input data returned by the inputProps function should include any custom class", () => {
      const customClass = "input__custom-class";
      const value = "test1234";
      const customSchema: FormSchema = [
        {
          label: "Test",
          id: "test",
          type: "text",
          initialValue: "test",
          fieldAttributes: {
            className: customClass,
          },
        },
      ];

      const {
        result: {
          current: { loadProps },
        },
      } = ReactRenderHook(() => useForm(customSchema));

      const result = loadProps(customSchema[0], value, "form__input");

      expect(result.className).toBe(`form__input ${customClass}`);
    });

    test("Then the loadProps onChange returned method, when called, should change the value", async () => {
      const setter = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [{ title: "initial value" }, setter]);

      const {
        result: {
          current: { loadProps },
        },
      } = ReactRenderHook(() => useForm(updateNewsForm));

      const event = {
        currentTarget: { id: updateNewsForm[0].id, value: "new value" },
      } as Partial<ChangeEvent<HTMLInputElement>>;

      await act(() => {
        loadProps!(updateNewsForm[0], "value", "form__input").onChange!(
          event as ChangeEvent<HTMLInputElement>
        );
      });

      await waitFor(() => {
        expect(setter).toHaveBeenCalledWith({ title: "new value" });
      });
    });
  });
});
