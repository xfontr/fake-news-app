import { useCallback } from "react";
import INews from "../types/News";
import api from "../utils/api";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { useAppDispatch } from "../app/hooks";
import Author from "../types/Author";
import endpoints from "../config/endpoints";
import addAuthors from "../utils/addAuthors";

const useNews = () => {
  const dispatch = useAppDispatch();
  const { get } = api;

  const getAll = useCallback(async () => {
    try {
      const { data: news } = await get<INews[]>(endpoints.getAllNews);
      const { data: users } = await get<Author[]>(endpoints.getAllAuthors);

      const newsWithAuthor = addAuthors(news, users);

      dispatch(loadAllActionCreator(newsWithAuthor as INews[]));
    } catch (error) {}
  }, [dispatch, get]);

  return { getAll };
};

export default useNews;
