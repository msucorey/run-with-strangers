import * as APIUtil from '../util/city_api_util';
export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";

export const fetchCities = () => dispatch => (
  APIUtil.cities()
    .then((xcities) => dispatch(receiveCities(xcities)))
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
