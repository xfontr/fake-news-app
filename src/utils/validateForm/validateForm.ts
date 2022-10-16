import Joi, { ObjectSchema } from "joi";
import { ValuesState } from "../../hooks/useForm";

const extractSchema = (schema: ObjectSchema<unknown>, values: ValuesState) => {
  const extractedSchema: Record<string, Joi.AnySchema<unknown>> = {};

  Object.keys(values).forEach(
    (key) => (extractedSchema[key] = schema.extract(key))
  );

  return extractedSchema;
};

const validateForm = (schema: ObjectSchema<unknown>, values: ValuesState) =>
  Joi.object(extractSchema(schema, values)).validate(values, {
    abortEarly: false,
  });

export default validateForm;
