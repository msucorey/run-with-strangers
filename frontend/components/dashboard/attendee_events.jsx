import React from 'react';
import { Link, withRouter } from 'react-router';
import EventThumbContainer from '../event/event_thumb_container';

class AttendeeEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.refreshUser(this.props.user.id);
	}

	render() {

		const attendeeEvents = (
      this.props.user.run_dates.map(event => (
				<EventThumbContainer event={event} key={event.id}
           buttonType="cancel reservation" />
			))
		);

		const text = this.props.user.run_dates.length > 0 ? "Run Times You're Attending" : null;

		return (
			<div className="host-events">
        <h2>{text}</h2>
				{attendeeEvents}
			</div>
    );
	}

}

export default withRouter(AttendeeEvents);
