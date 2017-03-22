import { connect } from 'react-redux';
import { fetchEvents, newEvent, cancelEvent } from '../../actions/event_actions';
import { refreshUser } from '../../actions/session_actions';
import CreateEvent from './create_event';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  newEvent: event => dispatch(newEvent(event)),
  cancelEvent: id => dispatch(cancelEvent(id)),
  refreshUser: id => dispatch(refreshUser(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
