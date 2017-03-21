import { connect } from 'react-redux';
import { newEvent } from '../../actions/event_actions';
import { refreshUser } from '../../actions/session_actions';
import CreateEvent from './create_event';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  newEvent: event => dispatch(newEvent(event)),
  refreshUser: id => dispatch(refreshUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
