import { useCallback } from "react";
import environment from "../data/environment";
import News from "../types/News";
import api from "../utils/api";
import { loadAllActionCreator } from "../store/slices/newsSlice";
import { useAppDispatch } from "../app/hooks";

const useNews = () => {
  const dispatch = useAppDispatch();
  const { get } = api();

  const getAll = useCallback(async () => {
    try {
      const { data: news } = await get<News[]>(`${environment.apiUrl}/posts`);

      dispatch(loadAllActionCreator(news));
    } catch (error) {}
  }, [dispatch, get]);

  return { getAll };
};

export default useNews;
