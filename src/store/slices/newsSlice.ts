import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import News from "../../types/News";

const newsInitialState: News[] = [];

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    loadAll: (_, { payload }: PayloadAction<News[]>) => [...payload],
  },
});

export const newsReducer = newsSlice.reducer;

export const { loadAll: loadAllActionCreator } = newsSlice.actions;
