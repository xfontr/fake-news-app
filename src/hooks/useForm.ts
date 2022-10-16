import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import FormSchema, { FullAttributes } from "../types/FormSchema";
import getClass from "../utils/getClass/getClass";

export type ValuesState = Record<string, string | number>;

export type LoadProps = (
  input: FullAttributes,
  value: string | number
) => InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

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

  const loadProps: LoadProps = (
    inputData: FullAttributes,
    value: string | number,
    onChange = handleChange
  ): InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> => ({
    ...inputData.fieldAttributes,
    id: inputData.id,
    type: inputData.type,
    className: getClass("form__input", inputData.fieldAttributes?.className),
    value,
    onChange,
  });

  return { values, loadProps };
};

export default useForm;
