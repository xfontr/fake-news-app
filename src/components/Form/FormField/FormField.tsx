import { InputHTMLAttributes } from "react";
import { ValuesState } from "../../../hooks/useForm";
import { FullAttributes } from "../../../types/FormSchema";

interface FormProps {
  values: ValuesState;
  field: FullAttributes;
  loadProps: (
    input: FullAttributes,
    value: string | number
  ) => InputHTMLAttributes<HTMLInputElement>;
}

const FormField = ({ loadProps, field, values }: FormProps) => (
  <div className="form__container" key={field.id}>
    <label htmlFor={field.id} className="form__label">
      {field.label}
    </label>
    <input {...loadProps(field, values[field.id])} />
  </div>
);

export default FormField;
