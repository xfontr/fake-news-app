import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import paths from "../../config/paths";
import updateNewsForm from "../../data/updateNewsForm.schema";
import useForm from "../../hooks/useForm";
import { getCurrentNews, setSchema } from "../../utils/updateUtils/updateUtils";

const UpdatePage = (): JSX.Element => {
  const { news } = useAppSelector((state) => state);
  const { id } = useParams();

  const currentNews = getCurrentNews(+id!, news);
  const schema = setSchema(currentNews, updateNewsForm);

  const { loadProps, values } = useForm(schema);

  return (
    <section className="update">
      {currentNews ? (
        <Form {...{ loadProps, values, schema }} />
      ) : (
        <div>
          <span className="update__information">
            The news you are trying to update are not avaliable right now.
          </span>
          <Button to={paths.news}>Go back to the news</Button>
        </div>
      )}
    </section>
  );
};

export default UpdatePage;