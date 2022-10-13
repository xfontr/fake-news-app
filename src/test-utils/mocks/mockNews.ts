import News from "../../types/News";

export const mockNews: News = {
  userId: 1,
  id: 1,
  title: "news title",
  body: "random news description",
};

export const mockNewsList: News[] = [
  { ...mockNews },
  { ...mockNews, userId: 2, id: 2, title: "news title 2" },
];

export const mockNewsWithAuthor: News = {
  ...mockNews,
  author: "Ervin Howell",
};
