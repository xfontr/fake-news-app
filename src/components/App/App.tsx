import { mockNews } from "../../test-utils/mocks/mockNews";
import Layout from "../Layout/Layout";
import News from "../News/News";

const App = (): JSX.Element => (
  <div className="app">
    <Layout>
      <News news={mockNews} />
    </Layout>
  </div>
);

export default App;
