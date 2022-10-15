import updateNewsForm from "../../data/updateNewsForm.schema";
import { mockNews, mockNewsList } from "../../test-utils/mocks/mockNews";
import { getCurrentNews, setSchema } from "./updateUtils";

describe("Given a getCurrentNews function", () => {
  describe("When called with a list of news and a valid news ID", () => {
    test("Then it should return a full news article corresponding to said ID", () => {
      const id = mockNewsList[0].id;
      const expectedNews = mockNewsList[0];

      const result = getCurrentNews(id, mockNewsList);

      expect(result).toStrictEqual(expectedNews);
    });
  });

  describe("When called with a list of news and an invalid news ID", () => {
    test("Then it should return nothing (undefined)", () => {
      const id = 999;

      const result = getCurrentNews(id, mockNewsList);

      expect(result).toBeUndefined();
    });
  });
});

describe("Given a setSchema function", () => {
  describe("When called with a News and a form schema", () => {
    test("Then it should fill the schema initial states with the news values", () => {
      const expectedSchema = [
        { ...updateNewsForm[0], initialValue: mockNews.title },
        { ...updateNewsForm[1], initialValue: mockNews.author },
        { ...updateNewsForm[2], initialValue: mockNews.body },
      ];

      const returnedSchema = setSchema(mockNews, updateNewsForm);

      expect(returnedSchema).toStrictEqual(expectedSchema);
    });
  });

  describe("When called with undefined News and a form schema", () => {
    test("Then it should fill the schema initial states with empty text values", () => {
      const expectedSchema = [
        { ...updateNewsForm[0], initialValue: "" },
        { ...updateNewsForm[1], initialValue: "" },
        { ...updateNewsForm[2], initialValue: "" },
      ];

      const returnedSchema = setSchema(undefined, updateNewsForm);

      expect(returnedSchema).toStrictEqual(expectedSchema);
    });
  });
});
