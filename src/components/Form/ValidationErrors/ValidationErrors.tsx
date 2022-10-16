import { ValidationResult } from "joi";

type ValidationErrorsProps = {
  errors: ValidationResult<unknown> | undefined;
};

const ValidationErrors = ({ errors }: ValidationErrorsProps): JSX.Element => (
  <>
    {errors?.error && (
      <div className="errors" data-testid="errors">
        <ul className="errors__list">
          {errors.error.details.map((error) => (
            <li key={error.path[0]} className="errors__message">
              {error.message}
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

export default ValidationErrors;
