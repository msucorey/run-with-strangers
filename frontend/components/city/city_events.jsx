import React from 'react';
import { Link, withRouter } from 'react-router';
import EventTileContainer from '../event/event_tile_container';

class CityEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchEvents(this.props.city.id);
		setTimeout(() => (true), 50);
	}

	render() {

		const cityEvents = (
			this.props.events.map(event => (
				<EventTileContainer event={event} key={event.id} />
			))
		);

		return (
			<div className="city-events">
				{cityEvents}
			</div>
    );
	}

}

export default withRouter(CityEvents);
