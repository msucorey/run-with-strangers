import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestLogin(e) {
		e.preventDefault();
		this.props.demo();
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link className="auth-link" to="/signup">sign
				up instead</Link>;
		} else {
			return <Link className="auth-link" to="/login">log
				in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}



	render() {

		const usernameText = this.props.formType === "login" ? null : (
			<div>
				<br/>
					<input type="text"
						value={this.state.username}
						onChange={this.update("username")}
						className="auth-input"
						placeholder="username" />
			</div>
		);

		return (
			<div className="auth-form">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<h2 className="auth-greeting">Hey stranger!</h2>
					<p>It's good to have you back.  Sign in here and sign up for
						your next run time!</p>
					<p className="auth-error-text">{this.renderErrors()}</p>
					{usernameText}
					<br/>
					<div className="login-form">
						<input className="auth-input" type="text"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="email" />
						<br/>
							<input className="auth-input" type="password"
								value={this.state.password}
								onChange={this.update("password")}
								placeholder="password"/>
						<br/>
						<input className="auth-submit" type="submit"
							value="Submit"/>
						<br/>
						<p className="auth-bottom-text">Please {this.props.formType} or {this.navLink()}</p>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(AuthForm);
