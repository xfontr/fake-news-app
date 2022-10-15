import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import paths from "../../config/paths";
import updateNewsForm from "../../data/updateNewsForm.schema";
import useForm from "../../hooks/useForm";
import FormSchema from "../../types/FormSchema";
import News from "../../types/News";

const getCurrentNews = (id: number, allNews: News[]): News | undefined =>
  allNews.find((news) => news.id === id);

const setSchema = (
  news: News | undefined,
  updateSchema: FormSchema
): FormSchema => [
  { ...updateSchema[0], initialValue: news ? news.title : "" },
  { ...updateSchema[1], initialValue: news ? news.author : "" },
  { ...updateSchema[2], initialValue: news ? news.body : "" },
];

const UpdatePage = (): JSX.Element => {
  const { news } = useAppSelector((state) => state);
  const { id } = useParams();

  const currentNews = getCurrentNews(+id!, news);
  const schema = setSchema(currentNews, updateNewsForm);

  const { loadProps, values } = useForm(schema);

  return (
    <>
      {currentNews ? (
        <Form {...{ loadProps, values, schema }} />
      ) : (
        <div>
          <span>
            The news you are trying to update are not avaliable right now.
          </span>
          <Button to={paths.news}>Go back to the news</Button>
        </div>
      )}
    </>
  );
};

export default UpdatePage;
