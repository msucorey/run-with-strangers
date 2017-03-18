import {
  RECEIVE_CITY,
  RECEIVE_CITIES
} from '../actions/city_actions';
import merge from 'lodash/merge';

const defaultState = {
  cities: [],
  city: null
};

const CityReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CITIES:
      return merge({}, state, { cities: action.cities });
    case RECEIVE_CITY:
      return merge({}, state, { city: action.city });
    default:
      return state;
  }
};

export default CityReducer;
