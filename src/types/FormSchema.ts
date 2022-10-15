import { HTMLAttributes } from "react";

type BasicAttributes = {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
};

type OptionalFieldAttributes = Omit<
  Partial<HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>,
  "id"
>;

type OptionalGroupAttributes = Omit<
  Partial<HTMLAttributes<HTMLDivElement>>,
  "id"
>;

type ExtraAttributes = Partial<{
  initialValue: string | number;
  renderAs: "textarea";
}>;

export interface FullAttributes extends BasicAttributes, ExtraAttributes {
  groupAttributes?: OptionalGroupAttributes;
  fieldAttributes?: OptionalFieldAttributes;
}

type FormSchema = FullAttributes[];

export default FormSchema;
