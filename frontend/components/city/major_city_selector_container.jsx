import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MajorCitySelector from './major_city_selector';

const mapStateToProps = ({ cities }) => ({
  cities
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MajorCitySelector);
