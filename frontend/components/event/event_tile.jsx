import React from 'react';
import { Link, withRouter } from 'react-router';

class EventTile extends React.Component {
	//currentUser, event
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchEvent(this.props.event.id);
	}

	render() {

		const user = this.props.currentUser;
    const event = this.props.event;
		let userEventIds = [];
		let button = <div></div>;
		if (user) {
			userEventIds = user.events.map(Object => (Object.id));
		}

		if (event) {
			if (userEventIds.includes(event.id)) {
	    	button = <button>CANCEL BUTTON</button>;
			} else if (event.attendees.length > 5) {
				button = <button>FULL BUTTON{event.attendees.length}</button>;
			} else {
				button = <button>JOIN BUTTON{event.attendees.length}</button>;
			}
		}

		const content = event === null ? <div></div> :
			<div className="event-tile">
				<p>{event.details}</p>
				<p>{event.address}</p>
				<p>{event.date}</p>
				<p>{event.time}</p>
				{button}
			</div>;

		return (
			<div>
			{content}
    	</div>
		);
	}

}

export default withRouter(EventTile);
