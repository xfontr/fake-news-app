import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UiStatus from "../../types/UiStatus";

const uiInitialState = {
  status: "IDLE" as UiStatus,
  message: "Loading...",
};

export type UiState = typeof uiInitialState;

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setUi: (_, { payload: { status, message } }: PayloadAction<UiState>) => ({
      status,
      message,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { setUi: setUiActionCreator } = uiSlice.actions;
