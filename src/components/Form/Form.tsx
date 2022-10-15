import { FormHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { ValuesState } from "../../hooks/useForm";
import FormSchema, { FullAttributes } from "../../types/FormSchema";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: FormSchema;
  values: ValuesState;
  loadProps: (
    input: FullAttributes,
    value: string | number
  ) => InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  children?: ReactNode;
}

const Form = ({ schema, loadProps, values, children, ...rest }: FormProps) => (
  <form {...rest} className={`form ${rest.className}`}>
    {schema.map((field) => (
      <div className="form__container" key={field.id}>
        <label htmlFor={field.id} className="form__label">
          {field.label}
        </label>
        {!field.renderAs && <input {...loadProps(field, values[field.id])} />}
        {field.renderAs === "textarea" && (
          <textarea {...loadProps(field, values[field.id])} />
        )}
      </div>
    ))}
    {children}
  </form>
);

export default Form;
