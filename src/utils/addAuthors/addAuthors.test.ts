import { mockAuthorList } from "../../test-utils/mocks/mockAuthor";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import addAuthors from "./addAuthors";

describe("Given an addAuthors function", () => {
  describe("When called with a list of news and authors", () => {
    test("Then it should return a list of news with the author names", () => {
      const expectedList = [
        { ...mockNewsList[0], author: mockAuthorList[0].name },
        { ...mockNewsList[1], author: mockAuthorList[1].name },
      ];

      const newsWithAuthors = addAuthors(mockNewsList, mockAuthorList);

      expect(newsWithAuthors).toStrictEqual(expectedList);
    });
  });
});
