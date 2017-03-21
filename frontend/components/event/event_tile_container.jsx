import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import { refreshUser } from '../../actions/session_actions';
import EventTile from './event_tile';

const mapStateToProps = ({ session , events }) => ({
  user: session.currentUser,
  run_dates: session.currentUser.run_dates
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  refreshUser: (id) => dispatch(refreshUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventTile);
