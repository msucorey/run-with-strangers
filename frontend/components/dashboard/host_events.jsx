import React from 'react';
import { Link, withRouter } from 'react-router';
import EventTileContainer from '../event/event_tile_container';

class HostEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    //nothing
	}

	render() {

		const hostEvents = (
			this.props.user.events.map(event => (
				<EventThumb event={event} key={event.id}
          user={this.props.user} buttonType="cancel event" />
			))
		);

		return (
			<div className="city-events">
        Run Times You're Hosting
				{hostEvents}
			</div>
    );
	}

}

export default withRouter(HostEvents);
