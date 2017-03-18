import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class CityThumb extends React.Component {
  //passed city, usernameText
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      city_id: this.props.city.id
    };
    this.updateCityId = this.updateCityId.bind(this);
  }

  updateCityId(e) {
    e.preventDefault();
    // this.props.fetchCity(this.state.city_id);
    const user = this.state;
    this.props.fetchCity(this.state.city_id).then(() => (
    $.ajax({
      method: 'PATCH',
      url: '/api/user',
      data: { user }
    })))
    .then(() => (this.props.router.push(`/cities/${this.props.city.id}`)));
  }

  render() {
    return (
      <li className="city-thumb">
        <img onClick={this.updateCityId}
          className="city-image"
          src={this.props.city.image_url} />
        <h2 onClick={this.updateCityId}>{this.props.city.name}</h2>
      </li>
    );
  }
}

export default withRouter(CityThumb);
