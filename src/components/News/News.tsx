import { useAppDispatch } from "../../store/hooks";
import { deleteActionCreator } from "../../store/slices/newsSlice";
import INews from "../../types/News";
import Button from "../Button/Button";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

type NewsProps = {
  news: INews;
};

const News = ({
  news: { title, author, body, id },
}: NewsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    dispatch(deleteActionCreator(id));
  };

  return (
    <article className="news">
      <span className="news__author">{author}</span>
      <h3 className="news__title">{title}</h3>
      <p className="news__body">{body}</p>
      <div className="news__options">
        <Button
          className="button--icon news__delete"
          data-testid="delete"
          onClick={handleDelete}
        >
          <FaRegTrashAlt />
        </Button>
        <Button
          className="button--icon news__update"
          data-testid="update"
          to={"/update/" + id}
        >
          <BsPencil />
        </Button>
      </div>
    </article>
  );
};

export default News;
