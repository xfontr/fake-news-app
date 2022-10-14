import FormSchema from "../types/FormSchema";

const updateNewsForm: FormSchema = [
  {
    label: "Article name",
    id: "articleName",
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
    initialValue: "Lorem ipsum",
    renderAs: "textarea",
  },
];

export default updateNewsForm;
