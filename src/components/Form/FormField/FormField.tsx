import { InputHTMLAttributes } from "react";
import { FullAttributes } from "../../../types/FormSchema";
import getClass from "../../../utils/getClass/getClass";

interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  field: FullAttributes;
}

const FormField = ({ field, ...rest }: FormFieldProps): JSX.Element => (
  <div
    {...field.groupAttributes}
    className={getClass("form__container", field.groupAttributes?.className)}
  >
    <label htmlFor={field.id} className="form__label">
      {field.label}
    </label>
    {!field.renderAs && <input {...rest} />}
    {field.renderAs === "textarea" && <textarea {...rest} />}
  </div>
);

export default FormField;
