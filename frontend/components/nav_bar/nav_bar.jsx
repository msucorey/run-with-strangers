import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.signUp = this.signUp.bind(this);
		this.signIn = this.signIn.bind(this);
		this.goCities = this.goCities.bind(this);
		this.logoutGoHome = this.logoutGoHome.bind(this);
		this.goHosting = this.goHosting.bind(this);
		this.goProfile = this.goProfile.bind(this);
	}

	componentDidUpdate() {
		//nothing
	}

	handleSubmit(e) {
    //nothing
	}

  signIn(e) {
    e.preventDefault();
    this.props.router.push("/login");
  }

  signUp(e) {
    e.preventDefault();
    this.props.router.push("/signup");
  }

	guestLogin(e) {
		e.preventDefault();
		this.props.demo();
	}

	goCities(e) {
		e.preventDefault();
		this.props.router.push("/cities/500");
	}

	goProfile(e) {
		e.preventDefault();
		this.props.router.push("/profile");
	}

	logoutGoHome(e) {
		e.preventDefault();
		this.props.clearCities();
		this.props.logout();
	}

	goHosting(e) {
		e.preventDefault();
		this.props.router.push("/hosting");
	}

	render() {

    const aboutButton = this.props.loggedIn ? null : (
      <li><button>ABOUT</button></li>
    );
    const signInButton = this.props.loggedIn ? null : (
      <li><button onClick={this.signIn}>SIGN IN</button></li>
    );
    const signUpButton = this.props.loggedIn ? null : (
      <li><button className="signup-button" onClick={this.signUp}>SIGN UP</button></li>
    );
    const guestLoginButton = this.props.loggedIn ? null : (
      <li><button onClick={this.guestLogin}>GUEST LOGIN</button></li>
    );
    const dashboardButton = this.props.loggedIn ? (
      <li><button onClick={this.goProfile}>DASHBOARD</button></li>
    ) : null;
    const logoutButton = this.props.loggedIn ? (
      <li><button onClick={this.logoutGoHome}>LOGOUT</button></li>
    ) : null;
		const hostingButton = (
			<li><button onClick={this.goHosting}>HOSTING</button></li>
		);

		return (
			<div className="nav-bar">
        <div className="left-nav">
					<img className="icon" src="https://res.cloudinary.com/appacademy/image/upload/v1489884292/rwsicon_lj2vxq.png" />
          <Link className="logo" to="/">
            Run With Strangers
          </Link>
        </div>
        <div className="right-nav">
          <ul>
            <li><button onClick={this.goCities}>CITIES</button></li>
            {hostingButton}
            {aboutButton}
            {signInButton}
            {signUpButton}
            {guestLoginButton}
            {dashboardButton}
            {logoutButton}
          </ul>
        </div>
			</div>
		);
	}

}

export default withRouter(NavBar);
