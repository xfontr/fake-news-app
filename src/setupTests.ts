import "@testing-library/jest-dom";
import { server } from "./test-utils/mockServiceWorker/server";

/* Mock Service Worker (MSW) */
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
