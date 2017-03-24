import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.goHosting = this.goHosting.bind(this);
    this.goCities = this.goCities.bind(this);
  }

  goHosting(e) {
    e.preventDefault();
    this.props.router.push("/hosting");
  }

  goCities(e) {
    e.preventDefault();
    this.props.router.push("/cities");
  }

  render() {

    const hostingButton = (
			<li><button onClick={this.goHosting}>HOSTING</button></li>
		);

    return (
      <div className="footer">
        <div className="footer-menu">
          <ul>
            <li><button>About</button></li>
            {hostingButton}
            <li><button onClick={this.goCities}>Cities</button></li>
            <li><button>Facebook</button></li>
            <li><button>Twitter</button></li>
          </ul>
        </div>
        <div className="footer-text">
          <p>Run With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.</p>
          <p>We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
