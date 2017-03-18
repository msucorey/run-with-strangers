import { connect } from 'react-redux';
import { fetchCity, clearCities } from '../../actions/city_actions';
import CityView from './city_view';

const mapStateToProps = ({ session, cities }) => ({
  user: session.currentUser,
  city: cities.city
});

const mapDispatchToProps = dispatch => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  clearCities: () => dispatch(clearCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityView);
