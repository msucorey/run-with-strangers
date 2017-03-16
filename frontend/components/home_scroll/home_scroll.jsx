import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="home-scroll">HomeScrollContainer<br/>
    <h3>Let's get running!</h3>
    <br/>
    <img src="http://www.nhs.uk/Livewell/fitness/PublishingImages/getting%20started%20guides/T_1216_running_618224640_A.jpg"></img>
    <h3>more stuff down here</h3>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="home-scroll">HomeScrollContainer<br/>
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <h3>Let's run with strangers!</h3>
    <br/>
    <img src="http://www.nhs.uk/Livewell/fitness/PublishingImages/getting%20started%20guides/T_1216_running_618224640_A.jpg"></img>
    <h3>more stuff down here</h3>
	</hgroup>
);

const HomeScroll = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default HomeScroll;
