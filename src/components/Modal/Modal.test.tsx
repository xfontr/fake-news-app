import { ReactNode } from "react";
import { act } from "react-dom/test-utils";
import { useAppDispatch } from "../../store/hooks";
import { setUiActionCreator } from "../../store/slices/uiSlice";
import {
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import Modal from "./Modal";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (element: ReactNode, node: HTMLElement) => element,
}));

jest.useFakeTimers();

describe("Given a Modal component", () => {
  describe("When called with a ui status of 'LOADING' and a message 'Loading...'", () => {
    const {
      result: { current: dispatch },
    } = renderHook(useAppDispatch);

    beforeEach(() => {
      act(() => {
        dispatch(
          setUiActionCreator({
            status: "LOADING",
            message: "Loading...",
          })
        );
      });
    });

    test("Then it should display said message with a loading icon", () => {
      render(<Modal />);

      const loading = [
        screen.getByText("Loading..."),
        screen.getByTestId("LOADING"),
      ];

      loading.forEach((node) => expect(node).toBeInTheDocument());
    });

    test("Wen changing to 'ERROR' it should show error", () => {
      render(<Modal />);

      act(() => {
        dispatch(
          setUiActionCreator({
            status: "ERROR",
            message: "Error",
          })
        );
      });

      const error = [screen.getByText("Error"), screen.getByTestId("ERROR")];

      error.forEach((node) => expect(node).toBeInTheDocument());
    });

    test("When changing to error and after 1.500ms, it should disappear", async () => {
      render(<Modal />);

      act(() => {
        dispatch(
          setUiActionCreator({
            status: "ERROR",
            message: "Error",
          })
        );
      });

      await act(async () => {
        await jest.advanceTimersByTime(1500);
      });

      const errpr = [
        screen.queryByText("Error"),
        screen.queryByTestId("ERROR"),
      ];

      errpr.forEach((node) => expect(node).not.toBeInTheDocument());
    });

    test("Wen changing to 'SUCCESS' it should show SUCCESS", () => {
      render(<Modal />);

      act(() => {
        dispatch(
          setUiActionCreator({
            status: "SUCCESS",
            message: "Success",
          })
        );
      });

      const success = [
        screen.getByText("Success"),
        screen.getByTestId("SUCCESS"),
      ];

      success.forEach((node) => expect(node).toBeInTheDocument());
    });

    test("When changing to success and after 1.500ms, it should disappear", async () => {
      render(<Modal />);

      act(() => {
        dispatch(
          setUiActionCreator({
            status: "SUCCESS",
            message: "Success",
          })
        );
      });

      await act(async () => {
        await jest.advanceTimersByTime(1500);
      });

      const loading = [
        screen.queryByText("Success"),
        screen.queryByTestId("SUCCESS"),
      ];

      loading.forEach((node) => expect(node).not.toBeInTheDocument());
    });

    test("When changing to 'IDLE', it should disappear", () => {
      render(<Modal />);

      act(() => {
        dispatch(
          setUiActionCreator({
            status: "IDLE",
            message: "",
          })
        );
      });

      const loading = [
        screen.queryByText("Loading"),
        screen.queryByTestId("LOADING"),
      ];

      loading.forEach((node) => expect(node).not.toBeInTheDocument());
    });
  });
});
