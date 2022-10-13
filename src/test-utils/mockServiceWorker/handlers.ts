import { rest } from "msw";
import environment from "../../data/environment";
import { mockNewsList } from "../mocks/mockNews";

const handlers = [
  rest.get(`${environment.apiUrl}/posts`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mockNewsList))
  ),
];

export default handlers;
