import React from 'react';
import { Link, withRouter } from 'react-router';
import EventThumb from '../event/event_thumb';

class NoEvents extends React.Component {
  //user
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    //nothing
	}

	render() {

		return (
			<div>
				<h2>You have no run times!  Let's change that.</h2>
				<button className="big-dotted-btn">
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
