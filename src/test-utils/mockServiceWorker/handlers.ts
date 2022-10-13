import { rest } from "msw";
import endpoints from "../../config/endpoints";
import { mockAuthorList } from "../mocks/mockAuthor";
import { mockNewsList } from "../mocks/mockNews";

const handlers = [
  rest.get(endpoints.getAllNews, (_, res, ctx) => {
    if (mockNewsList[0].title === "error") {
      return res(ctx.status(400), ctx.json({ error: "Something went wrong" }));
    }

    return res(ctx.status(200), ctx.json(mockNewsList));
  }),

  rest.get(endpoints.getAllAuthors, (_, res, ctx) => {
    if (mockAuthorList[0].name === "error") {
      return res(ctx.status(400), ctx.json({ error: "Something went wrong" }));
    }

    return res(ctx.status(200), ctx.json(mockAuthorList));
  }),
];

export default handlers;
