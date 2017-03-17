import * as APIUtil from '../util/city_api_util';
export const RECEIVE_CITIES = "RECEIVE_CURRENT_USER";
export const RECEIVE_CITY = "RECEIVE_ERRORS";

export const fetchCities = () => dispatch => (
  APIUtil.cities()
    .then(() => dispatch(receiveCities()))
);

export const fetchCity = id => dispatch => (
  APIUtil.city(id)
    .then(xcity => dispatch(receiveCity(xcity)))
);

const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});
