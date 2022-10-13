import INews from "../../types/INews";

export const mockNews: INews = {
  userId: 1,
  id: 1,
  title: "News title",
  body: "Random news description",
};

export const mockNewsList: INews[] = [
  { ...mockNews },
  { ...mockNews, id: 2, title: "News title 2" },
];
