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
  }

  componentDidMount() {
    this.props.refreshUser(this.props.user.id);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
		e.preventDefault();
		const event = this.state;
		this.props.newEvent(event);
	}

  render() {

    const hostEvents = (
      this.props.user.events.map(event => (
        <p key={event.id}>{event.details}</p>
      )));

    return (
      <div>create event
        <form onSubmit={this.handleSubmit}>

					<div>
						<input type="text"
							value={this.state.details}
							onChange={this.update("details")}
							placeholder="Details (pace, purpose, etc.)" />
						<br/>
							<input type="address"
								value={this.state.password}
								onChange={this.update("address")}
								placeholder="Be specific...landmarks are good"/>
						<br/>
              <input type="date"
                value={this.state.date}
                onChange={this.update("date")}/>
            <br/>
              <input type="time"
                value={this.state.time}
                onChange={this.update("time")}/>
            <br/>
						<input type="submit"
							value="Submit"/>
						<br/>
					</div>
				</form>
        {hostEvents}
      </div>
    );
  }
}

export default withRouter(CreateEvent);
