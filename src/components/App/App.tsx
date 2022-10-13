import NewsPage from "../../pages/NewsPage";
import { Layout, PageLayout } from "../Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

const App = (): JSX.Element => (
  <div className="app">
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route
          path="/news"
          element={
            <PageLayout>
              <NewsPage />
            </PageLayout>
          }
        />
        <Route path="*" element={<Navigate to="/news" />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
