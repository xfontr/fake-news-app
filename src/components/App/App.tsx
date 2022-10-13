import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import useNews from "../../hooks/useNews";

const App = (): JSX.Element => {
  const { getAll } = useNews();

  useEffect(() => {
    getAll();
  }, [getAll]);

  const news = useAppSelector((store) => store.news);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return <div className="app">Hello, Cleverpy</div>;
};

export default App;
