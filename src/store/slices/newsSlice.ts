import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import INews from "../../types/News";

const newsInitialState: INews[] = [];

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    loadAll: (_, { payload }: PayloadAction<INews[]>) => [...payload],
    delete: (state, { payload }: PayloadAction<number>) => [
      ...state.filter((news) => news.id !== payload),
    ],
  },
});

export const newsReducer = newsSlice.reducer;

export const { loadAll: loadAllActionCreator } = newsSlice.actions;
export const { delete: deleteActionCreator } = newsSlice.actions;
