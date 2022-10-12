import News from "../../types/News";

export const mockNews: News = {
  id: 1,
  title: "News title",
  description: "Random news description",
};

export const mockNewsList: News[] = [
  { ...mockNews },
  { ...mockNews, id: 2, title: "News title 2" },
];
