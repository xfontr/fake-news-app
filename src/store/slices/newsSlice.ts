import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import INews from "../../types/INews";

const newsInitialState: INews[] = [];

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    loadAll: (_, { payload }: PayloadAction<INews[]>) => [...payload],
  },
});

export const newsReducer = newsSlice.reducer;

export const { loadAll: loadAllActionCreator } = newsSlice.actions;
