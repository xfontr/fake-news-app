import Joi from "joi";

const { minLength, shortMaxLength, longMaxLength, articleLength } =
  Object.freeze({
    minLength: 3,
    shortMaxLength: 30,
    longMaxLength: 85,
    articleLength: 4000,
  });

const formValidationSchema = Joi.object({
  title: Joi.string().alphanum().min(minLength).max(longMaxLength).required(),
  author: Joi.string().alphanum().min(minLength).max(shortMaxLength).required(),
  body: Joi.string().alphanum().min(minLength).max(articleLength).required(),
});

export default formValidationSchema;
