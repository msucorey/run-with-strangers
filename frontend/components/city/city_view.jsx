import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class CityView extends React.Component {
  //user, city, fetchCity, clearCities
  constructor(props) {
    super(props);
    this.updateCityId = this.updateCityId.bind(this);
  }

  componentDidMount() {
    if (this.props.city) {
      //do nothing
    } else {
      this.props.fetchCity(this.props.user.city_id);
    }
  }

  updateCityId(e) {
    e.preventDefault();
    const user = { email: this.props.user.email, city_id: null };
    this.props.clearCities();
    $.ajax({
      method: 'PATCH',
      url: '/api/user',
      data: { user }
    })
    .then(() => (this.props.router.push(`/cities`)));
  }

  render() {

    return (
      <div className="city-page">
        <div className="big-city">
          <img onClick={this.updateCityId}
            className="big-city-image"
            src={this.props.city.image_url} />
          <h2>{this.props.city.name}</h2>
        </div>
        <div>
          <h2>Run time is a conversation between a few people</h2>
          <h2>who know nothing about each other.</h2>
          <p>You'll never leave without questions, new perspectives, and the reminder that we're</p>
          <p>far more the same than we are different.</p>
          <div className="chg-home-city">
            <ul>
              <li>This is your home city!  If you've moved,</li>
              <li><Link className="auth-link" onClick={this.updateCityId}
                > change your home city here.</Link></li>
            </ul>
          </div>
          <div>EventThumbs</div>
          <h2>The host community is full of amazing stories.</h2>
          <p>How else would someone end up regularly bringing strangers together for</p>
          <p>conversations? Before each of them were invited to community, they were attendees</p>
          <p>that fed their run times with their questions, open-mindedness, and presence.</p>
          <br/>
          <div>HostThumbs</div>
        </div>
      </div>
    );
  }
}

export default withRouter(CityView);
