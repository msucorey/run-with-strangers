import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import HomeScrollContainer from './home_scroll/home_scroll_container';
import CitySelectorView from './city/city_selector_view';
import CityViewContainer from './city/city_view_container';
import JoinHostContainer from './host/join_host_container';
import CreateEventContainer from './host/create_event_container';
import { clearErrors, refreshUser } from '../actions/session_actions';
import { fetchCity} from '../actions/city_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _clearErrors = () => {
    if (store.getState().session.errors &&
    store.getState().session.errors.length > 0) {
      store.dispatch(clearErrors());
    }
  };

  const _updateUser = () => {
    if (store.getState().session.currentUser) {
      store.dispatch(refreshUser(store.getState().session.currentUser.id));
    }
  };

  const _redirectIfHasCity = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const city = store.getState().cities.city;
    if (!currentUser) {
      replace('/login'); //not logged in
    } else if (city) {
      replace(`/cities/${city.id}`);
    }
  };

  const _redirectIfNoCity = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const city = store.getState().cities.city;
    if (!currentUser) {
      replace('/login'); //not logged in
    } else if (!city) {
      replace('/cities');//no city chosen
    }
  };

  const loadCity = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser && currentUser.city_id) {
      store.dispatch(fetchCity(currentUser.city_id));
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route onEnter={loadCity} path="/" component={ App }>
          <IndexRoute component={HomeScrollContainer} />
          <Route path="/login" component={ AuthFormContainer }
            onEnter={_redirectIfLoggedIn} onLeave={_clearErrors} />
          <Route path="/signup" component={ AuthFormContainer }
            onEnter={_redirectIfLoggedIn} onLeave={_clearErrors}/>
          <Route path="/cities" component={CitySelectorView}
            onEnter={_redirectIfHasCity} onLeave={_updateUser} />
          <Route path="/cities/:cityId" component={CityViewContainer}
            onEnter={_redirectIfNoCity} onLeave={_updateUser} />
          <Route path="/hosting" component={ JoinHostContainer } />
          <Route path="/hostrun" component={ CreateEventContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
