import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import CityReducer from './city_reducer';
import EventReducer from './event_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CityReducer,
  events: EventReducer
});

export default RootReducer;
