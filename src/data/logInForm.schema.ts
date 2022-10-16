import FormSchema from "../types/FormSchema";

const logInForm: FormSchema = [
  {
    label: "Email",
    id: "email",
    type: "email",
    fieldAttributes: {
      placeholder: "johndoe@mail.com",
    },
  },
  {
    label: "Password",
    id: "password",
    type: "password",
  },
];

export default logInForm;
