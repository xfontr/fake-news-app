import { rest } from "msw";
import environment from "../../data/environment";
import { mockNews } from "../mocks/mockNews";

const handlers = [
  rest.get(environment.apiUrl, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: mockNews,
      })
    )
  ),
];

export default handlers;
