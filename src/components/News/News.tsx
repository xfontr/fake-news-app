import { useAppDispatch } from "../../app/hooks";
import { deleteActionCreator } from "../../store/slices/newsSlice";
import INews from "../../types/News";
import Button from "../Button/Button";

type NewsProps = {
  news: INews;
};

const News = ({
  news: { title, author, body, id },
}: NewsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteActionCreator(id));
  };

  return (
    <article className="news">
      <span className="news__author">{author}</span>
      <h3 className="news__title">{title}</h3>
      <p className="news__body">{body}</p>
      <div className="news__options">
        <Button className="news__delete" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="news__delete" to={"/update/" + id}>
          Update
        </Button>
        <Button className="news__cta">Full article</Button>
      </div>
    </article>
  );
};

export default News;
