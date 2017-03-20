import React from 'react';
import { Link, withRouter } from 'react-router';

class CityEvents extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchEvents(this.props.city.id);
	}

	render() {
		return (
			<div>CityEvents</div>
    );
	}

}

export default withRouter(CityEvents);
