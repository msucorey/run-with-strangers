import React from 'react';
import { Link, withRouter } from 'react-router';
import EventThumbContainer from '../event/event_thumb_container';

class HostEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.refreshUser(this.props.user.id);
	}

	render() {

		const hostEvents = (
			this.props.user.events.map(event => (
				<EventThumbContainer event={event} key={event.id}
           buttonType="cancel event" />
			))
		);

		const text = this.props.user.events.length > 0 ? "Run Times You're Hosting" : null;

		return (
			<div className="host-events">
        <h2>{text}</h2>
				<div className="ind-host-events">
					{hostEvents}
				</div>
			</div>
    );
	}

}

export default withRouter(HostEvents);
