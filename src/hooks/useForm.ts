import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import FormSchema, { FullAttributes } from "../types/FormSchema";

export type ValuesState = Record<string, string | number>;

const useForm = (schema: FormSchema) => {
  const initialState = (): ValuesState => {
    const state: ValuesState = {};
    schema.forEach(
      ({ id, initialValue }) => (state[id] = initialValue ? initialValue : "")
    );

    return state;
  };

  const [values, setValues] = useState<ValuesState>(initialState());

  const handleChange = ({
    currentTarget: { id, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [id]: value });
  };

  const loadProps = (
    inputData: FullAttributes,
    value: string | number,
    onChange = handleChange
  ): InputHTMLAttributes<HTMLInputElement> => ({
    ...inputData.optionalData,
    id: inputData.id,
    type: inputData.type,
    className: `form__input ${
      inputData.optionalData?.className ? inputData.optionalData.className : ""
    }`,
    value,
    onChange,
  });

  return { values, loadProps };
};

export default useForm;
