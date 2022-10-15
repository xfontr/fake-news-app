import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { useDispatch } from "react-redux";
import {
  loadAllActionCreator,
  updateActionCreator,
} from "../../store/slices/newsSlice";
import {
  createEvent,
  fireEvent,
  render,
  renderHook,
  screen,
} from "../../test-utils/customTestingLibrary";
import { mockAuthor } from "../../test-utils/mocks/mockAuthor";
import { mockNewsList } from "../../test-utils/mocks/mockNews";
import { getUpdatedNews } from "../../utils/updateUtils/updateUtils";
import UpdatePage from "./UpdatePage";

let mockId = 1;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockId }),
}));

const mockDispatch = jest.fn();

jest.mock("../../app/hooks", () => ({
  ...jest.requireActual("../../app/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given an UpdatePage component", () => {
  describe("When instantiated and the path is '/update/1'", () => {
    const {
      result: { current: dispatch },
    } = renderHook(useDispatch);

    act(() => {
      dispatch(
        loadAllActionCreator([
          { ...mockNewsList[0], author: mockAuthor.name },
          ...mockNewsList,
        ])
      );
    });

    test("Then it should load a form to update the news with ID 1", () => {
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

    describe("And the user fills and submits the form", () => {
      test("Then it should prevent default the submit action of the form", () => {
        render(<UpdatePage />);

        const form = screen.getByTestId("form");
        const submitEvent = createEvent.submit(form);

        fireEvent(form, submitEvent);

        expect(submitEvent.defaultPrevented).toBe(true);
      });

      test("Then it should call the dispatch to update the news", async () => {
        render(<UpdatePage />);

        const updateButton = screen.getByRole("button", { name: "Update" });
        await userEvent.click(updateButton);

        const formValues = {
          title: (screen.getByLabelText("Article name") as HTMLInputElement)
            .value,
          author: (screen.getByLabelText("Author") as HTMLInputElement).value,
          body: (screen.getByLabelText("Description") as HTMLInputElement)
            .value,
        };

        expect(mockDispatch).toHaveBeenCalledWith(
          updateActionCreator(getUpdatedNews(mockNewsList[0], formValues))
        );
      });
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
