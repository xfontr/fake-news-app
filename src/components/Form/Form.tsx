import { ValidationResult } from "joi";
import { FormEvent, FormHTMLAttributes, ReactNode, useState } from "react";
import formValidationSchema from "../../data/formValidation.schema";
import { LoadProps, ValuesState } from "../../hooks/useForm";
import FormSchema from "../../types/FormSchema";
import validateForm from "../../utils/validateForm/validateForm";
import ValidationErrors from "./ValidationErrors/ValidationErrors";
import FormField from "./FormField/FormField";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: FormSchema;
  values: ValuesState;
  loadProps: LoadProps;
  children?: ReactNode;
}

const Form = ({ schema, loadProps, values, children, ...rest }: FormProps) => {
  const [errors, setErrors] = useState<ValidationResult<unknown>>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    rest.onSubmit && rest.onSubmit(event);

    setErrors(validateForm(formValidationSchema, values));
  };

  return (
    <div>
      <form
        {...rest}
        onSubmit={handleSubmit}
        data-testid="form"
        className={`form${rest.className ? ` ${rest.className}` : ""}`}
      >
        {schema.map((field) => (
          <FormField {...{ field, loadProps, values }} key={field.id} />
        ))}
        {children}
      </form>

      <ValidationErrors errors={errors} />
    </div>
  );
};

export default Form;
