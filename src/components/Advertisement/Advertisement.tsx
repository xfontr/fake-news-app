import { HTMLAttributes } from "react";
import Button from "../Button/Button";

const Advertisement = ({
  ...rest
}: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div {...{ ...rest, className: `container ${rest.className}` }}>
    <h3 className="container__title">Lorem ipsum nemo</h3>
    <p className="container__body">
      Velit neque libero incidunt itaque impedit vitae quam, architecto autem
      reprehenderit?
    </p>
    <Button className="container__cta">Lorem now</Button>
  </div>
);

export default Advertisement;
