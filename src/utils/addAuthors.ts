import Author from "../types/Author";
import News from "../types/News";

const addAuthors = (news: News[], users: Author[]) =>
  news.map((article) => ({
    ...article,
    author: users.find((author) => author.id === article.userId)!.name,
  }));

export default addAuthors;
