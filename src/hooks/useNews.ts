import { useCallback } from "react";
import environment from "../data/environment";
import News from "../types/News";
import api from "../utils/api";
import { useAppDispatch } from "../../app/hooks";
import { loadAllActionCreator } from "../store/slices/newsSlice";

const useNews = () => {
  const dispatch = useAppDispatch();
  const { get } = api();

  const getAllNews = useCallback(async () => {
    try {
      const { data: news } = await get<News[]>(`${environment.apiUrl}/posts`);

      dispatch(loadAllActionCreator(news));
    } catch (error) {}
  }, [dispatch, get]);

  return { getAllNews };
};

export default useNews;
