import { connect } from 'react-redux';
import { fetchCities, fetchCity } from '../../actions/city_actions';
import MajorCitySelector from './major_city_selector';

const mapStateToProps = ({ cities, session }) => ({
  cities: cities.cities,
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity:(id) => dispatch(fetchCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MajorCitySelector);
