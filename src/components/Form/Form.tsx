import { ValidationResult } from "joi";
import { FormEvent, FormHTMLAttributes, ReactNode, useState } from "react";
import formValidationSchema from "../../data/formValidation.schema";
import { LoadProps, ValuesState } from "../../hooks/useForm";
import FormSchema from "../../types/FormSchema";
import validateForm from "../../utils/validateForm/validateForm";
import ValidationErrors from "./ValidationErrors/ValidationErrors";
import FormField from "./FormField/FormField";
import { getClass, getFullClass } from "../../utils/getClass/getClass";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: FormSchema;
  values: ValuesState;
  loadProps: LoadProps;
  children?: ReactNode;
}

const Form = ({ schema, loadProps, values, children, ...rest }: FormProps) => {
  const [errors, setErrors] = useState<ValidationResult<unknown> | undefined>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validatedForm = validateForm(formValidationSchema, values);

    setErrors(validatedForm.error ? validatedForm : undefined);

    if (validatedForm.error) return;

    rest.onSubmit && rest.onSubmit(event);
  };

  return (
    <div>
      <form
        {...rest}
        onSubmit={handleSubmit}
        data-testid="form"
        className={getClass("form", rest.className)}
        noValidate
      >
        {schema.map((field) => (
          <FormField
            {...{
              field,
              values,
              ...loadProps(
                field,
                values[field.id],
                getFullClass(errors, field)
              ),
            }}
            key={field.id}
          />
        ))}
        {children}
      </form>

      <ValidationErrors errors={errors} />
    </div>
  );
};

export default Form;
