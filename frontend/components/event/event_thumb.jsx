import React from 'react';
import { Link, withRouter } from 'react-router';

class EventThumb extends React.Component {
	//event, buttonType from rendering component
	//user, cancelEvent from container
	constructor(props) {
		super(props);
		this.cancelEvent = this.cancelEvent.bind(this);
		this.removeRunDate = this.removeRunDate.bind(this);
  }

	componentDidMount() {
    this.props.refreshUser(this.props.user.id);
	}

	cancelEvent(id) {
		return e => {
			this.props.cancelEvent(id).then(() => this.props.refreshUser(this.props.user.id))
			.then(this.props.router.push(`/profile`));
		};
	}

	removeRunDate(id) {
		return e => {
			let newList = this.props.user.run_dates.map(Object => (Object.id));
			newList = newList.filter(el => (el !== id));
			if (newList.length === 0) {
				newList = [""];
			}
			const email = this.props.user.email;
			const user = {email: email, run_date_ids: newList};
			this.props.refreshUser(this.props.user.id).then(() => (
			$.ajax({
				method: 'PATCH',
				url: '/api/user',
				data: { user }
			}))).then(() => this.props.refreshUser(this.props.user.id))
			.then(this.props.router.push(`/profile`));
		};
	}

	render() {

		const user = this.props.user;
    const event = this.props.event;
    const buttonType = this.props.buttonType;

		let button = <div></div>;
		if (buttonType === "cancel event") {
				button = <button onClick={this.cancelEvent(event.id)}>CANCEL EVENT</button>;
		}	else if (buttonType === "cancel reservation") {
	    	button = <button onClick={this.removeRunDate(event.id)}>CANCEL RESERVATION
				</button>;
		}

		const content = event === null ? <div></div> :
			<div className="event-tile">
				<div>
					<p>{event.details}</p>
					<p>{event.address}</p>
					<p>{event.date}</p>
					<p>{event.time.substring(11,16)}</p>
					{button}
				</div>
			</div>;

		return (
			<div className="event-tile">
			{content}
    	</div>
		);
	}

}

export default withRouter(EventThumb);
