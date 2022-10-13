import { HTMLAttributes } from "react";

const Advertisement = ({
  ...rest
}: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div {...{ ...rest, className: `container ${rest.className}` }}>
    <h3 className="container__title">Lorem ipsum nemo</h3>
    <p className="container__body">
      Velit neque libero incidunt itaque impedit vitae quam, architecto autem
      reprehenderit?
    </p>
    <button className="container__cta">Lorem now</button>
  </div>
);

export default Advertisement;
