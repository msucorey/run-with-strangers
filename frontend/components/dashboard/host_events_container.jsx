import { connect } from 'react-redux';
import { refreshUser } from '../../actions/session_actions';
import HostEvents from './host_events';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  refreshUser: (id) => dispatch(refreshUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostEvents);
