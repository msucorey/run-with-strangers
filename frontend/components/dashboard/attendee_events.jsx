import React from 'react';
import { Link, withRouter } from 'react-router';
import EventTileContainer from '../event/event_tile_container';

class AttendeeEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    //nothing
	}

	render() {

		const attendeeEvents = (
      this.props.user.events.map(event => (
				<EventThumb event={event} key={event.id}
          user={this.props.user} buttonType="cancel reservation" />
			))
		);

		return (
			<div className="city-events">
        Run Times You're Attending
				{attendeeEvents}
			</div>
    );
	}

}

export default withRouter(AttendeeEvents);
