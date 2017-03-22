import React from 'react';
import { Link, withRouter } from 'react-router';

class EventTile extends React.Component {
	//user, event
	constructor(props) {
		super(props);
		this.state = {
      email: this.props.user.email,
      run_date_ids: this.props.user.run_dates.map(Object => (Object.id)),
			event_ids: this.props.user.events.map(Object => (Object.id)),
			attendees: this.props.event.attendees.length
    };
    this.addRunDate = this.addRunDate.bind(this);
    this.removeRunDate = this.removeRunDate.bind(this);
  }

  addRunDate(e) {
    e.preventDefault();
    let newList = this.state.run_date_ids;
		newList.push(this.props.event.id);
		this.state.attendees += 1;
		const email = this.state.email;
		this.setState({email: email, run_date_ids: newList});
		const user = { email: this.state.email, run_date_ids: this.state.run_date_ids};
		this.props.refreshUser(this.props.user.id);
    this.props.fetchEvent(this.props.event.id).then(() => (
    $.ajax({
      method: 'PATCH',
      url: '/api/user',
      data: { user }
    })))
    .then(() => (this.props.router.push(`/cities`)));
  }

	removeRunDate(e) {
		e.preventDefault();
		let newList = this.state.run_date_ids;
		newList = newList.filter(el => (el !== this.props.event.id));
		this.state.attendees -= 1;
		const email = this.state.email;
		this.setState({email: email, run_date_ids: newList});
		const user = { email: this.state.email, run_date_ids: this.state.run_date_ids};
		this.props.refreshUser(this.props.user.id);
		this.props.fetchEvent(this.props.event.id).then(() => (
		$.ajax({
			method: 'PATCH',
			url: '/api/user',
			data: { user }
		})))
		.then(() => (this.props.router.push(`/cities`)));
	}

	componentDidMount() {
    this.props.fetchEvent(this.props.event.id);
		this.props.refreshUser(this.props.user.id);
	}

	render() {

		const user = this.props.user;
    const event = this.props.event;
		let userRunDateIds = [];
		let button = <div></div>;
		if (user) {
			userRunDateIds = user.run_dates.map(Object => (Object.id));
		}

		if (event) {
			if (this.state.event_ids.includes(event.id)) {
				button = <button>MY EVENT</button>;
			}	else if (this.state.run_date_ids.includes(event.id)) {
	    	button = <button onClick={this.removeRunDate}>CANCEL BUTTON{this.state.attendees}</button>;
			} else if (event.attendees.length > 5) {
				button = <button>FULL BUTTON{this.state.attendees}</button>;
			} else {
				button = <button onClick={this.addRunDate}>JOIN BUTTON{this.state.attendees}</button>;
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
