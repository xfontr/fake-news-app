import INews from "../../types/INews";
import News from "../News/News";

type NewsListProps = {
  news: INews[];
};

const NewsList = ({ news }: NewsListProps): JSX.Element => (
  <section className="news">
    <ul className="news__list">
      {news.map((news) => (
        <li>
          <News key={news.id} news={news} />
        </li>
      ))}
    </ul>
  </section>
);

export default NewsList;
