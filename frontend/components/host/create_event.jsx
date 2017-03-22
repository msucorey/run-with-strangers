import React from 'react';
import { Link, withRouter } from 'react-router';
import EventTileContainer from '../event/event_tile_container';

class CreateEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      host_id: this.props.user.id,
      details: "",
      address: "",
      date: "",
      time: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    this.props.refreshUser(this.props.user.id);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  deleteEvent(id) {
    return e => {
      this.props.cancelEvent(id);
      setTimeout(()=>(this.props.router.push('/hosting')), 50);
    };
  }

  handleSubmit(e) {
		e.preventDefault();
		const event = this.state;
		this.props.newEvent(event);
    this.setState({host_id: this.props.user.id, details: "",
                   address: "", date: "", time: ""});
    setTimeout(() => (this.props.router.push('/hosting')), 50);
	}

  render() {

    const hostEvents = (
      this.props.user.events.map(event => (
        <div key={event.id}>
          <p>{event.details}</p>
          <button onClick={this.deleteEvent(event.id)}>DELETE EVENT</button>
        </div>
      )));

    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}
          className="login-form-box">
          <h2 className="auth-greeting">Host a Run!</h2>
          <p>Fill out the details below and your run will be immedately advertised.</p>
          <p>First six people can join you.  Early runner gets the worm!</p>
          <br/>
					<div className="login-form">
						<input type="text" className="event-input"
							value={this.state.details}
							onChange={this.update("details")}
							placeholder="Details (pace, purpose, etc.)" />
						<br/>
							<input type="address" className="event-input"
								value={this.state.address}
								onChange={this.update("address")}
								placeholder="Location (be specific!)"/>
						<br/>
              <input className="auth-input" type="date"
                value={this.state.date}
                onChange={this.update("date")}/>
            <br/>
              <input type="time" className="auth-input"
                value={this.state.time}
                onChange={this.update("time")}/>
            <br/>
						<input type="submit" className="auth-submit"
							value="Submit"/>
						<br/>
					</div>
				</form>
        <div className="host-events">
          <p>My events</p>
          {hostEvents}
          <p>See Dashboard for more details</p>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateEvent);
