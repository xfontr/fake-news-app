import { renderHook } from "../test-utils/customTestingLibrary";
import UiStatus from "../types/UiStatus";
import useModal from "./useModal";

jest.useFakeTimers();

describe("Given a useModal function", () => {
  describe("When called", () => {
    test("Then it should return the ui message 'Loading...'", () => {
      const expectedMessage = "Loading...";

      const {
        result: {
          current: [message],
        },
      } = renderHook(useModal);

      expect(message).toBe(expectedMessage);
    });

    test("Then it should return the default status 'IDLE'", () => {
      const defaultStatus: UiStatus = "IDLE";

      const {
        result: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          current: [message, localStatus],
        },
      } = renderHook(useModal);

      expect(localStatus).toBe(defaultStatus);
    });
  });
});
