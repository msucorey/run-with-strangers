import {
  RECEIVE_CITY,
  RECEIVE_CITIES
} from '../actions/city_actions';
import merge from 'lodash/merge';


const CityReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CITIES:
      return action.cities;
    case RECEIVE_CITY:
      return [action.city];
    default:
      return state;
  }
};

export default CityReducer;
