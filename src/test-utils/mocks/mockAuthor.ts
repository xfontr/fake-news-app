import Author from "../../types/Author";

export const mockAuthor: Author = {
  id: 1,
  name: "Ervin Howell",
};

export const mockAuthorList: Author[] = [
  { ...mockAuthor },
  { ...mockAuthor, id: 2, name: "Clarence" },
];
