import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS,
  RESET_STATE
} from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultState = {
  events: [],
  event: null
};

const EventReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, {event: state.event}, { events: action.events });
    case RECEIVE_EVENT:
      return merge({}, {events: state.events}, { event: action.event });
    case RESET_STATE:
      return defaultState;
    default:
      return state;
  }
};

export default EventReducer;
