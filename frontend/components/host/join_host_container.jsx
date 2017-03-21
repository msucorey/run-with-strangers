import { connect } from 'react-redux';
import { newEvent } from '../../actions/event_actions';
import { refreshUser } from '../../actions/session_actions';
import JoinHost from './join_host';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  refreshUser: id => dispatch(refreshUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinHost);
