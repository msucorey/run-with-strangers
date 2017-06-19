import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchEvents } from './actions/event_actions';

/*
This is where the magic begins.
Webpack(production) has already put this file into bundle.js inside the
javascripts subfolder of app/assets.  From there, it gets loaded by Rails when
the application.html.erb file is loaded.  Now, it's a simple matter of
listening on the document for DECOMContentLoaded and then rendering the Root
component to the 'root' DOM element.
*/

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;
  window.fetchEvents = fetchEvents;
  ReactDOM.render(<Root store={ store }/>, root);
});
