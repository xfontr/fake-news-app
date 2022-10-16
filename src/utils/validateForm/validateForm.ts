import { ObjectSchema } from "joi";
import { ValuesState } from "../../hooks/useForm";

const validateForm = (schema: ObjectSchema<unknown>, values: ValuesState) =>
  schema.validate(values, { abortEarly: false });

export default validateForm;
