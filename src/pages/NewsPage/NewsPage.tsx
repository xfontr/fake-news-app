import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import NewsList from "../../components/NewsList/NewsList";
import useNews from "../../hooks/useNews";

const NewsPage = (): JSX.Element => {
  const { getAll } = useNews();
  const { news } = useAppSelector((state) => state);

  useEffect(() => {
    news.length || getAll();
  }, [getAll, news]);

  return (
    <>{news.length ? <NewsList news={news} /> : <span>Loading...</span>}</>
  );
};

export default NewsPage;
