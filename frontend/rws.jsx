import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchEvents } from './actions/event_actions';

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
