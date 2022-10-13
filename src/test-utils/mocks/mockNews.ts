import News from "../../types/News";

export const mockNews: News = {
  userId: 1,
  id: 1,
  title: "News title",
  body: "Random news description",
};

export const mockNewsList: News[] = [
  { ...mockNews },
  { ...mockNews, id: 2, title: "News title 2" },
];
