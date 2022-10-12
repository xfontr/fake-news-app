import { mockNews, mockNewsList } from "../../test-utils/mocks/mockNews";
import { loadAllActionCreator, newsReducer } from "./newsSlice";

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

describe("Given a newsReducer function", () => {
  describe("When called with a fake action", () => {
    test("Then it should return the same current state", () => {
      const initialState = mockNewsList;

      const fakeAction = {
        type: "fakeAction/loadAll",
        payload: "",
      };

      const result = newsReducer(initialState, fakeAction);

      expect(result).toStrictEqual(initialState);
    });
  });

  describe("When called with a loadAll action", () => {
    test("Then it should replace the previous news with the passed ones", () => {
      const initialState = mockNewsList;
      const newList = [...mockNewsList, { ...mockNews, id: 3 }];
      const loadAllAction = loadAllActionCreator(newList);

      const expectedNewsList = newList;

      const result = newsReducer(initialState, loadAllAction);

      expect(result).toStrictEqual(expectedNewsList);
    });
  });
});
