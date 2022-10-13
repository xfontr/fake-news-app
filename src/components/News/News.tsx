import INews from "../../types/News";
import Button from "../Button/Button";

type NewsProps = {
  news: INews;
};

const News = ({ news: { title, author, body } }: NewsProps): JSX.Element => (
  <article className="news">
    <span className="news__author">{author}</span>
    <h3 className="news__title">{title}</h3>
    <p className="news__body">{body}</p>
    <div className="news__options">
      <Button className="news__cta">Full article</Button>
    </div>
  </article>
);

export default News;
