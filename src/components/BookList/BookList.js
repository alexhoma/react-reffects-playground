import React from "react";
import { subscribe } from "reffects-store";

function BooksList({ books }) {
  if (books.length === 0) {
    return <span>No books found</span>;
  }

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

const SubscribedBooksList = subscribe(function mapStateToProps(state) {
  return {
    books: state.books
  };
});

export default SubscribedBooksList(BooksList);
