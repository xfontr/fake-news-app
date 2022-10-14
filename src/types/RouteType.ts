import PageInformation from "./PageInformation";

interface RouteType {
  path: string;
  name?: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
  pageInformation?: PageInformation;
}

export default RouteType;
