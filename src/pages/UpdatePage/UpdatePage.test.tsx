import { act } from "react-dom/test-utils";
import { useAppDispatch } from "../../app/hooks";
import { loadAllActionCreator } from "../../store/slices/newsSlice";
import {
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import { mockAuthor } from "../../test-utils/mocks/mockAuthor";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import UpdatePage from "./UpdatePage";

let mockId = 1;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockId }),
}));

describe("Given an UpdatePage component", () => {
  describe("When instantiated and the path is '/update/1'", () => {
    test("Then it should load a form to update the news with ID 1", () => {
      const {
        result: { current: dispatch },
      } = renderHook(useAppDispatch);

      act(() => {
        dispatch(
          loadAllActionCreator([
            { ...mockNewsList[0], author: mockAuthor.name },
            ...mockNewsList,
          ])
        );
      });

      render(<UpdatePage />);

      const { name, author, description } = {
        name: screen.getByLabelText("Article name"),
        author: screen.getByLabelText("Author"),
        description: screen.getByLabelText("Description"),
      };

      expect(name).toHaveValue(mockNewsList[0].title);
      expect(author).toHaveValue(mockAuthor.name);
      expect(description).toHaveValue(mockNewsList[0].body);
    });
  });

  describe("When instantiated and the path is '/update/999'", () => {
    test("Then it should display an error, as there are no news with the ID 999", () => {
      mockId = 999;

      render(<UpdatePage />);

      const errorMessage = [
        screen.getByText(
          "The news you are trying to update are not avaliable right now."
        ),
        screen.getByRole("link", { name: "Go back to the news" }),
      ];

      errorMessage.forEach((node) => expect(node).toBeInTheDocument());
    });
  });
});
