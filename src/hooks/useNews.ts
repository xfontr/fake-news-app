import { useCallback } from "react";
import environment from "../data/environment";
import INews from "../types/News";
import api from "../utils/api";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { useAppDispatch } from "../app/hooks";
import Author from "../types/Author";

const useNews = () => {
  const dispatch = useAppDispatch();
  const { get } = api;

  const getAll = useCallback(async () => {
    try {
      const { data: news } = await get<INews[]>(`${environment.apiUrl}/posts`);
      const { data: users } = await get<Author[]>(
        `${environment.apiUrl}/users`
      );

      const newsWithAuthor = news.map((article) => ({
        ...article,
        author: users.find((author) => author.id === article.userId)!.name,
      }));

      dispatch(loadAllActionCreator(newsWithAuthor as INews[]));
    } catch (error) {}
  }, [dispatch, get]);

  return { getAll };
};

export default useNews;
