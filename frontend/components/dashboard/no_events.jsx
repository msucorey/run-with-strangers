import React from 'react';
import { Link, withRouter } from 'react-router';
import EventThumb from '../event/event_thumb';

class NoEvents extends React.Component {
  //user
	constructor(props) {
		super(props);
		this.goCities = this.goCities.bind(this);
	}

	componentDidMount() {
    //nothing
	}

	goCities(e) {
		e.preventDefault();
		this.props.router.push("/cities/500");
	}

	render() {

		return (
			<div>
				<h2>You have no run times!  Let's change that.</h2>
				<button className="big-dotted-btn" onClick={this.goCities}>
					<div className="big-dtd-btn-txt">
						<h1>+</h1>
						<h3>JOIN A RUN TIME</h3>
					</div>
				</button>
			</div>
    );
	}

}

export default withRouter(NoEvents);
