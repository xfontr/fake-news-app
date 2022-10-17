import { useCallback } from "react";
import INews from "../types/News";
import api from "../utils/api/api";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { useAppDispatch } from "../store/hooks";
import Author from "../types/Author";
import endpoints from "../config/endpoints";
import addAuthors from "../utils/addAuthors/addAuthors";
import { capitalizeNews } from "../utils/capitalize/capitalize";
import { setUiActionCreator } from "../store/slices/uiSlice";

const useNews = () => {
  const dispatch = useAppDispatch();
  const { get } = api;

  const getAll = useCallback(async () => {
    try {
      dispatch(
        setUiActionCreator({
          status: "LOADING",
          message: "Loading the latest news",
        })
      );

      const { data: news } = await get<INews[]>(endpoints.getAllNews);
      const { data: users } = await get<Author[]>(endpoints.getAllAuthors);

      const newsWithAuthor = capitalizeNews(addAuthors(news, users));

      dispatch(loadAllActionCreator(newsWithAuthor));
      dispatch(
        setUiActionCreator({
          status: "SUCCESS",
          message: "News loaded",
        })
      );
    } catch (error) {
      dispatch(
        setUiActionCreator({
          status: "ERROR",
          message: "Failed to load the news",
        })
      );
    }
  }, [dispatch, get]);

  return { getAll };
};

export default useNews;
