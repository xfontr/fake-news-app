import News from "../../types/News";

export const capitalize = (phrase: string): string =>
  `${phrase.charAt(0).toUpperCase()}${phrase.slice(1)}`;

export const capitalizeNews = (news: News[]): News[] =>
  news.map((article) => ({
    ...article,
    title: capitalize(article.title),
    body: capitalize(article.body),
  }));
