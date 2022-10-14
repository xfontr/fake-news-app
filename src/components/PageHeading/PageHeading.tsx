import PageInformation from "../../types/PageInformation";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

type PageHeadingProps = {
  heading: PageInformation;
};

const PageHeading = ({
  heading: { title, subtitle },
}: PageHeadingProps): JSX.Element => (
  <section className="heading">
    <Breadcrumbs />
    <h1 className="heading__title">{title}</h1>
    <span className="heading__subtitle">{subtitle}</span>
  </section>
);

export default PageHeading;
