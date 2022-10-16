import { FormHTMLAttributes, PropsWithChildren } from "react";
import { LoadProps, ValuesState } from "../../../hooks/useForm";
import { FullAttributes } from "../../../types/FormSchema";

interface FormFieldProps extends FormHTMLAttributes<HTMLFormElement> {
  field: FullAttributes;
  values: ValuesState;
  loadProps: LoadProps;
}

const FormField = ({
  field,
  loadProps,
  values,
}: FormFieldProps): JSX.Element => {
  const FormGroup = ({ children }: PropsWithChildren): JSX.Element => (
    <div
      {...field.groupAttributes}
      className={`form__container${
        field.groupAttributes?.className
          ? ` ${field.groupAttributes.className}`
          : ""
      }`}
      key={field.id}
    >
      {children}
    </div>
  );

  return (
    <FormGroup>
      <label htmlFor={field.id} className="form__label">
        {field.label}
      </label>
      {!field.renderAs && <input {...loadProps(field, values[field.id])} />}
      {field.renderAs === "textarea" && (
        <textarea {...loadProps(field, values[field.id])} />
      )}
    </FormGroup>
  );
};

export default FormField;
