import FormSchema from "../types/FormSchema";

const updateNewsForm: FormSchema = [
  {
    label: "Article name",
    id: "title",
    type: "text",
    initialValue: "Sunt aut facere",
  },
  {
    label: "Author",
    id: "author",
    type: "text",
    initialValue: "John Doe",
  },
  {
    label: "Description",
    id: "body",
    type: "text",
    renderAs: "textarea",
    groupAttributes: {
      className: "form__container--full-width",
    },
  },
];

export default updateNewsForm;
