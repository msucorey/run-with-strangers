import { connect } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import MinorCityMenu from './minor_city_menu';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinorCityMenu);
