import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const runButtonClick = (currentUser) => {
      if (currentUser) {
        this.props.router.push('/cities');
      } else {
        this.props.router.push('/login');
      }
    };

    const letsRunButton = (
      <button className="lets-run-btn"
        onClick={runButtonClick}
        >LET'S RUN</button>
    );

    return (
      <div>
        <div className="splash-graphic">
          <div className="splash-text">
            <h1>Everyone is interesting</h1>
            <span>But you don't discover that when you're staring at a screen.</span>
          </div>
          {letsRunButton}
        </div>
        <div className="mid-page-content">
          <h1>various static content</h1>
          <h1>various static content</h1>
          <h1>various static content</h1>
          <h1>various static content</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeScroll);
