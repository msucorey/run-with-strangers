import * as APIUtil from '../util/event_api_util';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RESET_STATE = "RESET_STATE";

export const fetchEvents = () => dispatch => (
  APIUtil.getEvents()
    .then((xevents) => dispatch(receiveEvents(xevents)))
);

export const fetchEvent = id => dispatch => (
  APIUtil.getEvent(id)
    .then(event => dispatch(receiveEvent(event)))
);

export const clearEvents = () => dispatch => (
  APIUtil.getEvents()
    .then(() => dispatch(resetState()))
);

export const newEvent = (event) => dispatch => (
  APIUtil.createEvent(event)
  .then(nevent => dispatch(receiveEvent(nevent)))
);

export const editEvent = (event) => dispatch => (
  APIUtil.updateEvent(event)
  .then(nevent => dispatch(receiveEvent(nevent)))
);

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const resetState = () => ({
  type: RESET_STATE,
});
