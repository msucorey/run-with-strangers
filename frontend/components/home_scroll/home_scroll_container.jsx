import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomeScroll from './home_scroll';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScroll);
