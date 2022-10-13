import NewsPage from "../../pages/NewsPage";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => (
  <div className="app">
    <Layout>
      <NewsPage />
    </Layout>
  </div>
);

export default App;
