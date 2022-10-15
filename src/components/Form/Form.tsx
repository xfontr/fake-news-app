import { FormHTMLAttributes, ReactNode } from "react";
import useForm from "../../hooks/useForm";
import FormSchema from "../../types/FormSchema";
import FormField from "./FormField/FormField";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  schema: FormSchema;
  children?: ReactNode;
}

const Form = ({ schema, children, ...rest }: FormProps): JSX.Element => {
  const { values, loadProps } = useForm(schema);

  return (
    <form {...rest}>
      {schema.map((field) => (
        <FormField {...{ field, values, loadProps }} />
      ))}
      {children}
    </form>
  );
};

export default Form;
