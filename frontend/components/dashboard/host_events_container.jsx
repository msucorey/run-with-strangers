import { connect } from 'react-redux';
import HostEvents from './attendee_events';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostEvents);
