import { mockNewsList } from "../../test-utils/mocks/mockNews";
import { loadAllActionCreator } from "./newsSlice";

describe("Given a loadAll action creator", () => {
  describe("When called with a list of news as payload", () => {
    test("Then it should return an action creator with said payload and an action 'news/loadAll'", () => {
      const type = "news/loadAll";
      const payload = mockNewsList;

      const action = {
        type,
        payload,
      };

      const createdAction = loadAllActionCreator(mockNewsList);

      expect(createdAction).toStrictEqual(action);
    });
  });
});
