import { connect } from 'react-redux';
import { login, logout, signup, demo } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => {
  let currentErrors = session.errors || [];
  return {
  loggedIn: Boolean(session.currentUser),
  errors: currentErrors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    demo: () => dispatch(demo()),
    formType,
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
