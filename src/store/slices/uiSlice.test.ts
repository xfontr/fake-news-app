import { setUiActionCreator, uiReducer, UiState } from "./uiSlice";

describe("Given a setUi action creator", () => {
  describe("When called with a ui status and message", () => {
    test("Then it should return an action creator with said payload and an action 'ui/setUi'", () => {
      const type = "ui/setUi";
      const payload: UiState = {
        status: "LOADING",
        message: "Hello",
      };

      const action = {
        type,
        payload,
      };

      const createdAction = setUiActionCreator(payload);

      expect(createdAction).toStrictEqual(action);
    });
  });
});

describe("Given a uiReducer function", () => {
  describe("When called with a fake action", () => {
    test("Then it should return the same current state", () => {
      const initialState: UiState = {
        status: "IDLE",
        message: "Hello",
      };

      const fakeAction = {
        type: "ui/fakeAction",
        payload: "",
      };

      const result = uiReducer(initialState, fakeAction);

      expect(result).toStrictEqual(initialState);
    });
  });

  describe("When called with a setUi action", () => {
    test("Then it should replace the previous state with the passed one", () => {
      const initialState: UiState = {
        status: "IDLE",
        message: "Hello",
      };

      const payload: UiState = {
        status: "LOADING",
        message: "Loading...",
      };

      const setUiAction = setUiActionCreator(payload);

      const expectedState = payload;

      const result = uiReducer(initialState, setUiAction);

      expect(result).toStrictEqual(expectedState);
    });
  });
});
