import React from 'react';
import { Link, withRouter } from 'react-router';

class EventTile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchEvent(this.props.event.id);
	}

	render() {

    const event = this.props.event;

    const button = (
      <button>TILE BUTTON</button>
    );

		return (
			<div className="event-tile">
        <p>{event.details}</p>
        <p>{event.address}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
        {button}
      </div>
    );
	}

}

export default withRouter(EventTile);
