import { lazy } from "react";
import paths from "../config/paths";
import Routes from "../types/Routes";

const routes: Routes = [
  {
    path: paths.root,
    navigate: paths.news,
  },
  {
    path: paths.news,
    name: "News",
    Page: lazy(() => import("../pages/NewsPage/NewsPage")),
    pageInformation: {
      title: "Come see the latest news",
      subtitle:
        "We gather the freshest and most recent news in Barcelona, totally unopinionated.",
    },
  },
  {
    path: paths.notFound,
    Page: lazy(() => import("../pages/NewsPage/NewsPage")),
    pageInformation: {
      title: "Page not found (404)",
      subtitle: "We couldn't find what you are looking for :(",
    },
  },
];

export default routes;
