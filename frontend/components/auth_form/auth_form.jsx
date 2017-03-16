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
			return <Link className="auth-link" to="/signup">sign up instead</Link>;
		} else {
			return <Link className="auth-link" to="/login">log in instead</Link>;
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
				<label> Username:
					<input type="text"
						value={this.state.username}
						onChange={this.update("username")}
						className="login-input" />
				</label>
			</div>
		);

		return (
			<div className="auth-form">AuthFormContainer
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					{usernameText}
					<br/>
					<div className="login-form">
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(AuthForm);
