# Reffects playground

This is a simple application to play with `reffects` and `reffects-store`. The view layer is managed using `React`. This is about a simple books finder that uses the (Open Library Search Api)[https://openlibrary.org/dev/docs/api/search] to retrieve all books.

- **(reffects)[reffects]**: A synchronous event bus with effects and coeffects.
- **(reffects-store)[reffects-store]**: A reffects implementation for React to manage and subscribe components to state changes.

## Some key concepts

- **Events:** Are descriptions about what will happen in our domain
- **Effects:** Are descriptions of your application side effects
- **Coeffects:** Are descriptions about what your application requires from the world

## Feedback collected

- It requires `lodash.get`, `lodash.setwith` and `lodash.clone` in order to make everything work.
- When logging events in verbosity mode on, all payload objects are printed like this: `'[Object Object]'`
