import environment from "./environment";

const endpoints = {
  getAllNews: `${environment.apiUrl}/posts`,
  getAllAuthors: `${environment.apiUrl}/users`,
};

export default Object.freeze(endpoints);
