import React from 'react';
import { Link, withRouter } from 'react-router';

class DashboardSidebar extends React.Component {

	constructor(props) {
		super(props);
    this.goCities = this.goCities.bind(this);
	}

	componentDidUpdate() {
		//nothing
	}

	goCities(e) {
		e.preventDefault();
		this.props.router.push("/cities/500");
	}

	render() {

    const user = this.props.user;
    const greetingText = <h2>Welcome home, {user.username}!</h2>;

		return (
			<div className="dashboard-sidebar">
        {greetingText}
        <h3>What are you grateful for today?</h3>
        <button className="dash-signup-btn" onClick={this.goCities}>SIGN UP FOR A RUN TIME</button>
			</div>
		);

	}

}

export default withRouter(DashboardSidebar);
