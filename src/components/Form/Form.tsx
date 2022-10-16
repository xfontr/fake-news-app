import { ValidationResult } from "joi";
import {
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import formValidationSchema from "../../data/formValidation.schema";
import { ValuesState } from "../../hooks/useForm";
import FormSchema, { FullAttributes } from "../../types/FormSchema";
import validateForm from "../../utils/validateForm/validateForm";
import ValidationErrors from "../ValidationErrors/ValidationErrors";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: FormSchema;
  values: ValuesState;
  loadProps: (
    input: FullAttributes,
    value: string | number
  ) => InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  children?: ReactNode;
}

const Form = ({ schema, loadProps, values, children, ...rest }: FormProps) => {
  const [errors, setErrors] = useState<ValidationResult<unknown>>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    rest.onSubmit && rest.onSubmit(event);

    setErrors(validateForm(formValidationSchema, values));
  };

  return (
    <form
      {...rest}
      onSubmit={handleSubmit}
      data-testid="form"
      className={`form${rest.className ? ` ${rest.className}` : ""}`}
    >
      {schema.map((field) => (
        <div
          {...field.groupAttributes}
          className={`form__container${
            field.groupAttributes?.className
              ? ` ${field.groupAttributes.className}`
              : ""
          }`}
          key={field.id}
        >
          <label htmlFor={field.id} className="form__label">
            {field.label}
          </label>
          {!field.renderAs && <input {...loadProps(field, values[field.id])} />}
          {field.renderAs === "textarea" && (
            <textarea {...loadProps(field, values[field.id])} />
          )}
        </div>
      ))}
      <ValidationErrors errors={errors} />
      {children}
    </form>
  );
};

export default Form;
