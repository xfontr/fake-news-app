import { rest } from "msw";
import environment from "../../data/environment";
import { mockNewsList } from "../mocks/mockNews";

const handlers = [
  rest.get(`${environment.apiUrl}/posts`, (_, res, ctx) => {
    if (mockNewsList[0].title === "error") {
      return res(ctx.status(400), ctx.json({ error: "Something went wrong" }));
    }

    return res(ctx.status(200), ctx.json(mockNewsList));
  }),
];

export default handlers;
