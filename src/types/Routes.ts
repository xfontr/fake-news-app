import PageInformation from "./PageInformation";

export interface RouteType {
  path: string;
  name?: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
  pageInformation?: PageInformation;
}

type Routes = RouteType[];

export default Routes;
