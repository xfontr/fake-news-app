import { Routes, Navigate, Route } from "react-router-dom";
import RouteType from "../../types/RouteType";
import { PageLayout } from "../Layout/Layout";

type LoadRoutesProps = {
  routes: RouteType[];
};

const LoadRoutes = ({ routes }: LoadRoutesProps): JSX.Element => (
  <Routes key="routes">
    {routes.map(({ Page, navigate, pageInformation, path }) => (
      <Route
        key={path}
        path={path}
        element={
          Page ? (
            <PageLayout pageInformation={pageInformation!}>
              <Page />
            </PageLayout>
          ) : (
            <Navigate to={navigate!} />
          )
        }
      />
    ))}
  </Routes>
);

export default LoadRoutes;
