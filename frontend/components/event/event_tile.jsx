import React from 'react';
import { Link, withRouter } from 'react-router';

class EventTile extends React.Component {
	//user, event
	constructor(props) {
		super(props);
		this.state = {
      email: this.props.user.email,
      run_date_ids: this.props.user.run_dates.map(Object => (Object.id))
    };
    this.addRunDate = this.addRunDate.bind(this);
  }

  addRunDate(e) {
    e.preventDefault();
    let newList = this.state.run_date_ids;
		newList.push(this.props.event.id);
		const email = this.state.email;
		this.setState({email: email, run_date_ids: newList});
		const user = this.state;
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
			if (this.state.run_date_ids.includes(event.id)) {
	    	button = <button>CANCEL BUTTON</button>;
			} else if (event.attendees.length > 5) {
				button = <button>FULL BUTTON{event.attendees.length}</button>;
			} else {
				button = <button onClick={this.addRunDate}>JOIN BUTTON{event.attendees.length}</button>;
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
