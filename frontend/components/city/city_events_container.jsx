import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import CityEvents from './city_events';

const mapStateToProps = ({ events, session, cities }) => ({
  events: events.events,
  user: session.currentUser,
  city: cities.city
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (id) => dispatch(fetchEvents(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityEvents);
