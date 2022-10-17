import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UiStatus from "../../types/UiStatus";

const uiInitialState = {
  status: "IDLE" as UiStatus,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setStatus: (
      _,
      { payload: { status, message } }: PayloadAction<typeof uiInitialState>
    ) => ({
      status,
      message,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { setStatus: setStatusActionCreator } = uiSlice.actions;
