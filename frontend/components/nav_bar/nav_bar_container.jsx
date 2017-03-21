import { connect } from 'react-redux';
import { login, logout, signup, demo } from '../../actions/session_actions';
import { clearCities } from '../../actions/city_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  let currentErrors = session.errors || [];
  return {
  loggedIn: Boolean(session.currentUser),
  errors: currentErrors
  };
};

const mapDispatchToProps = (dispatch) => {
//room for logic TODO
  return {
    demo: () => dispatch(demo()),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    clearCities: () => dispatch(clearCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
