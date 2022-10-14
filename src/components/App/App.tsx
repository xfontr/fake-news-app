import routes from "../../pages/index";
import { Layout } from "../Layout/Layout";
import { Suspense } from "react";
import LoadRoutes from "../LoadRoutes/LoadRoutes";

const App = (): JSX.Element => (
  <div className="app">
    <Layout>
      <Suspense>
        <LoadRoutes routes={routes} />
      </Suspense>
    </Layout>
  </div>
);

export default App;
