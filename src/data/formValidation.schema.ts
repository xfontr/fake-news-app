import Joi from "joi";

const {
  minLength,
  shortMaxLength,
  longMaxLength,
  articleLength,
  emailDomains,
} = Object.freeze({
  minLength: 3,
  shortMaxLength: 30,
  longMaxLength: 85,
  articleLength: 4000,
  emailDomains: ["com", "net", "es", "org", "us", "ar", "co", "cat"],
});

const formValidationSchema = Joi.object({
  title: Joi.string().min(minLength).max(longMaxLength).required(),
  author: Joi.string().min(minLength).max(shortMaxLength).required(),
  body: Joi.string().min(minLength).max(articleLength).required(),
  password: Joi.string()
    .pattern(new RegExp(`^[a-zA-Z0-9]{${minLength},${shortMaxLength}}$`))
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: emailDomains },
    })
    .required(),
});

export default formValidationSchema;
