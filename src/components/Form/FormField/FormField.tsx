import { InputHTMLAttributes, PropsWithChildren } from "react";
import { ValuesState } from "../../../hooks/useForm";
import { FullAttributes } from "../../../types/FormSchema";
import getClass from "../../../utils/getClass/getClass";

interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  field: FullAttributes;
  values: ValuesState;
}

const FormField = ({ field, values, ...rest }: FormFieldProps): JSX.Element => {
  const FormGroup = ({ children }: PropsWithChildren): JSX.Element => (
    <div
      {...field.groupAttributes}
      className={getClass("form__container", field.groupAttributes?.className)}
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
      {!field.renderAs && <input {...rest} />}
      {field.renderAs === "textarea" && <textarea {...rest} />}
    </FormGroup>
  );
};

export default FormField;
