import { HTMLAttributes } from "react";

type BasicAttributes = {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
};

type OptionalAttributes = Omit<Partial<HTMLAttributes<HTMLInputElement>>, "id">;

type ExtraAttributes = Partial<{
  initialValue: string | number;
  customGroupClass: string;
  renderAs: "textarea";
}>;

export interface FullAttributes extends BasicAttributes, ExtraAttributes {
  optionalData?: OptionalAttributes;
}

type FormSchema = FullAttributes[];

export default FormSchema;
