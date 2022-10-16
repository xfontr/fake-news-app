import { ValidationResult } from "joi";
import { FullAttributes } from "../../types/FormSchema";

export const getClass = (
  defaultClass: string,
  additionalClass: string | undefined
): string => {
  const hasAdditionalClass = additionalClass ? ` ${additionalClass}` : "";
  return `${defaultClass}${hasAdditionalClass}`;
};

export const getFullClass = (
  errors: ValidationResult<unknown> | undefined,
  field: FullAttributes
): string =>
  errors?.error?.details.find((error) => error.path[0] === field.id)
    ? "form__input form__input--error"
    : "form__input";
