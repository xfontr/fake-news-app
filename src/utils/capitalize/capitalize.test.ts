import { mockNewsList } from "../../test-utils/mocks/mockNews";
import { capitalize, capitalizeNews } from "./capitalize";

describe("Given a capitalize function", () => {
  describe("When called with the word 'hello'", () => {
    test("Then it should return the word 'Hello'", () => {
      const wordToCapitalize = "hello";
      const capitalizedWord = "Hello";

      const result = capitalize(wordToCapitalize);

      expect(result).toBe(capitalizedWord);
    });
  });
});

describe("Given a capitalizeNews function", () => {
  describe("When called with a list of news", () => {
    test("Then it should return the same news with capitalized bodies and titles", () => {
      const capitalizedNews = [
        {
          ...mockNewsList[0],
          title: "News title",
          body: "Random news description",
        },
        {
          ...mockNewsList[1],
          title: "News title 2",
          body: "Random news description",
        },
      ];

      const result = capitalizeNews(mockNewsList);

      expect(result).toStrictEqual(capitalizedNews);
    });
  });
});
