import { connect } from 'react-redux';
import { cancelEvent } from '../../actions/event_actions';
import { refreshUser } from '../../actions/session_actions';
import { fetchEvent } from '../../actions/event_actions';
import EventThumb from './event_thumb';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  refreshUser: (id) => dispatch(refreshUser(id)),
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  cancelEvent: (id) => dispatch(cancelEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventThumb);
