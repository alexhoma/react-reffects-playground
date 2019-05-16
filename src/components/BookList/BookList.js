import React from 'react';
import { subscribe } from 'reffects-store';
import './BookList.css';

function BookList({ books }) {
  if (books.length === 0) {
    return <span>No books found</span>;
  }

  return (
    <ul className="BookList">
      {books.map(book => (
        <li key={book.id}>
          <div className="BookList__book">
            <img src={book.cover} />
            <b>{book.title}</b>
          </div>
        </li>
      ))}
    </ul>
  );
}

const SubscribedBookList = subscribe(function mapStateToProps(state) {
  return {
    books: state.books
  };
});

export default SubscribedBookList(BookList);
