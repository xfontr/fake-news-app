import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";
import { deleteActionCreator } from "../../store/slices/newsSlice";
import {
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import { mockNewsWithAuthor } from "../../test-utils/mocks/mockNews";
import News from "./News";

const mockDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a News component", () => {
  describe("When instantiated with a news", () => {
    test("Then it should display the news passed", () => {
      render(<News news={mockNewsWithAuthor} />);

      const news = [
        screen.getByText(mockNewsWithAuthor.author!),
        screen.getByText(mockNewsWithAuthor.title),
        screen.getByText(mockNewsWithAuthor.body),
        screen.getByTestId("delete"),
        screen.getByTestId("update"),
      ];

      news.forEach((node) => expect(node).toBeInTheDocument());
    });
  });

  describe("When instantiated with a news and clicked the delete button", () => {
    test("Then it should call the dispatch to delete the news with its id", async () => {
      render(<News news={mockNewsWithAuthor} />);

      const deleteButton = screen.getByTestId("delete");

      await userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        deleteActionCreator(mockNewsWithAuthor.id)
      );
    });
  });

  describe("When instantiated with a news and clicked the update button", () => {
    test("Then it should redirect to the update page with the news id", async () => {
      const expectedPath = `/update/${mockNewsWithAuthor.id}`;
      render(<News news={mockNewsWithAuthor} />);

      const updateButton = screen.getByTestId("update");

      await userEvent.click(updateButton);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(useLocation);

      expect(pathname).toBe(expectedPath);
    });
  });
});
