import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import EventTile from './event_tile';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventTile);
