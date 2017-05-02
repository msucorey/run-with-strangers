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
      <div className="home-bkgd">
        <div className="splash-graphic">
          <div className="splash-text">
            <h1>Everyone is interesting</h1>
            <span>But you don't discover that when you're staring at a screen.</span>
          </div>
          {letsRunButton}
        </div>
        <div className="mid-page-content">
          <h3>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
          <div className="mid-flex">
            <iframe width="450" height="280" src="https://www.youtube.com/embed/nGojEyYBmwc"></iframe>
            <div className="mid-text">
              <h2>It’s weird.</h2>
              <p>Everyone at run time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
            </div>
          </div>
          <div className="mid-flex">
            <div className="mid-text">
              <h2>We won't meet otherwise.</h2>
              <p>In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity. </p>
            </div>
            <img src="https://res.cloudinary.com/appacademy/image/upload/v1493681692/rwsapp/awkrunners_front_i77zn5.png" />
          </div>
          <div className="mid-flex">
            <img src="https://res.cloudinary.com/appacademy/image/upload/v1493681692/rwsapp/awkrunners_back_riwwoa.png" />
            <div className="mid-text">
              <h2>Your hands are made for high fiving!</h2>
              <p>And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Run time has real humans! #nofilter!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeScroll);
