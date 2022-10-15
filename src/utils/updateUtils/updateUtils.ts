import FormSchema from "../../types/FormSchema";
import News from "../../types/News";

export const getCurrentNews = (id: number, allNews: News[]): News | undefined =>
  allNews.find((news) => news.id === id);

export const setSchema = (
  news: News | undefined,
  updateSchema: FormSchema
): FormSchema => [
  { ...updateSchema[0], initialValue: news ? news.title : "" },
  { ...updateSchema[1], initialValue: news ? news.author : "" },
  { ...updateSchema[2], initialValue: news ? news.body : "" },
];
