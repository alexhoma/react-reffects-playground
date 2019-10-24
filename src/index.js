import React from 'react';
import ReactDOM from 'react-dom';

import { dispatch } from 'reffects';

import store from './store';

import registerApiUrlCoeffect from './coeffects/api-url';
import registerGetEffect from './effects/get';
import registerMutateEffect from './effects/mutate';
import registerBookListEvents from './components/BookList/events';

import Finder from './components/Finder/Finder';
import SubscribedBookList from './components/BookList/BookList';

// Register coeffects
registerApiUrlCoeffect();

// Register effects
registerGetEffect();
registerMutateEffect(store);

// Register events
registerBookListEvents();

// Event dispatchers
function findBooks(queryText) {
  dispatch({
    id: 'searchBooks',
    payload: {
      queryText,
    },
  });
}

// View component
function Application() {
  return (
    <section>
      <Finder onUserSearch={findBooks} />
      <SubscribedBookList />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById('app'));
