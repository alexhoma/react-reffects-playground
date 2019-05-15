import { registerEventHandler } from "reffects";

export default function register() {
  registerEventHandler(
    "searchBooks",
    function(coeffects, payload) {
      const { apiUrl } = coeffects;
      const { queryText } = payload;

      return {
        get: {
          url: `${apiUrl}/search.json?q=${queryText}`,
          successEvent: ["searchBooksSuccess"]
        }
      };
    },
    ["apiUrl"]
  );

  registerEventHandler(
    "searchBooksSuccess",
    function(coeffects, payload) {
      const { apiUrl } = coeffects;
      const { docs } = payload;

      const books = docs.map((book, i) => ({
        id: `${book.cover_i}-${i}`,
        title: book.title,
        year: book.first_publish_year,
        authors: book.author_name,
        languages: book.language,
        cover: `${apiUrl}/works/${book.cover_i}`
      }));

      return {
        mutate: [{ path: ["books"], newValue: books }]
      };
    },
    ["apiUrl"]
  );
}
