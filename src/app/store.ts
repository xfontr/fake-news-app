import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { newsReducer } from "../store/slices/newsSlice";

export const store = configureStore({
  reducer: { news: newsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
