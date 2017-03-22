import React from 'react';
import { Link, withRouter } from 'react-router';

class EventThumb extends React.Component {
	//user, event, buttonType from rendering component
	constructor(props) {
		super(props);
  }

	componentDidMount() {
    //nothing
	}

	render() {

		const user = this.props.user;
    const event = this.props.event;
    const buttonType = this.props.buttonType;

		let button = <div></div>;
		if (buttonType === "cancel event") {
				button = <button>CANCEL EVENT</button>;
		}	else if (buttonType === "cancel reservation") {
	    	button = <button>CANCEL RESERVATION</button>;
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
