import { mockNewsList } from "../../test-utils/mocks/mockNews";
import Layout from "../Layout/Layout";
import NewsList from "../NewsList/NewsList";

const App = (): JSX.Element => (
  <div className="app">
    <Layout>
      <NewsList news={mockNewsList} />
    </Layout>
  </div>
);

export default App;
