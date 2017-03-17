import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import MajorCitySelector from './major_city_selector';

const mapStateToProps = ({ cities, session }) => ({
  cities,
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MajorCitySelector);
