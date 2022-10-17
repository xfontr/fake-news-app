import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import NewsList from "../../components/NewsList/NewsList";
import useNews from "../../hooks/useNews/useNews";

const NewsPage = (): JSX.Element => {
  const { getAll } = useNews();
  const { news } = useAppSelector((state) => state);

  useEffect(() => {
    news.length || getAll();
  }, [getAll, news]);

  return (
    <>
      {news.length ? (
        <NewsList news={news} />
      ) : (
        <span>Your news should appear here!</span>
      )}
    </>
  );
};

export default NewsPage;
