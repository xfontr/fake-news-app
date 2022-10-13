import INews from "../../types/News";
import News from "../News/News";

type NewsListProps = {
  news: INews[];
};

const NewsList = ({ news }: NewsListProps): JSX.Element => (
  <section className="news-list">
    <ul className="news-list__list">
      {news.map((news) => (
        <li key={`${news.id}-item`} className="news-list__news">
          <News key={news.id} news={news} />
        </li>
      ))}
    </ul>
  </section>
);

export default NewsList;
