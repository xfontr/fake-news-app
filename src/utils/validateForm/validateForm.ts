import Joi, { ObjectSchema, AnySchema, ValidationResult } from "joi";
import { ValuesState } from "../../hooks/useForm/useForm";

export const extractSchema = (
  schema: ObjectSchema<unknown>,
  values: ValuesState
): ObjectSchema<unknown> => {
  const extractedSchema: Record<string, AnySchema<unknown>> = {};

  Object.keys(values).forEach(
    (key) => (extractedSchema[key] = schema.extract(key))
  );

  return Joi.object(extractedSchema);
};

export const validateForm = (
  schema: ObjectSchema<unknown>,
  values: ValuesState
): ValidationResult<unknown> =>
  extractSchema(schema, values).validate(values, {
    abortEarly: false,
  });
