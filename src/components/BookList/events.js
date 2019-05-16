import { registerEventHandler } from 'reffects';

export default function register() {
  registerEventHandler(
    'searchBooks',
    function(coeffects, payload) {
      const { apiUrl } = coeffects;
      const { queryText } = payload;

      return {
        get: {
          url: `${apiUrl}/search.json?q=${queryText}`,
          successEvent: ['searchBooksSuccess']
        }
      };
    },
    ['apiUrl']
  );

  registerEventHandler('searchBooksSuccess', function(_, payload) {
    const { docs } = payload;

    const books = docs
      .map((book, i) => {
        if (!book.cover_i) {
          return null;
        }

        return {
          id: `${book.cover_i}-${i}`,
          title: book.title,
          year: book.first_publish_year,
          authors: book.author_name,
          languages: book.language,
          cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
        };
      })
      .filter(book => book !== null);

    return {
      mutate: [{ path: ['books'], newValue: books }]
    };
  });
}
