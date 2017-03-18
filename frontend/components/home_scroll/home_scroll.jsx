import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const sessionLinks = () => (
      <nav className="home-scroll">HomeScrollContainer<br/>
        <h3>Let's get running!</h3>
        <br/>
        <img src="https://www.nhs.uk/Livewell/fitness/PublishingImages/getting%20started%20guides/T_1216_running_618224640_A.jpg"></img>
        <h3>more stuff down here</h3>
      </nav>
    );

    const personalGreeting = (currentUser, logout) => (
    	<hgroup className="home-scroll">HomeScrollContainer<br/>
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <h3>Let's run with strangers!</h3>
        <br/>
        <img src="https://www.nhs.uk/Livewell/fitness/PublishingImages/getting%20started%20guides/T_1216_running_618224640_A.jpg"></img>
        <h3>more stuff down here</h3>
    	</hgroup>
    );

    const runButtonClick = (currentUser) => {
      if (currentUser) {
        this.props.router.push('/cities');
      } else {
        this.props.router.push('/login');
      }
    };

    const letsRunButton = (currentUser) => (
      <button className="lets-run-btn"
        onClick={runButtonClick}
        >LET'S RUN</button>
    );

    return (
      <div className="home-scroll">
      {this.props.currentUser ? personalGreeting(this.props.currentUser, this.props.logout) : sessionLinks()}
      {letsRunButton(this.props.currentUser)}
      <h3>even more stuff</h3>
      </div>
    );
  }
}

export default withRouter(HomeScroll);
