import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class CityView extends React.Component {
  //user, city, fetchCity
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.city) {
      //do nothing
    } else {
      this.props.fetchCity(this.props.user.city_id);
    }
  }


  render() {

    return (
      <div>
        <h1>City page!</h1>
        <h3>{this.props.user.email}</h3>
        <h4>{this.props.city.name}</h4>
        <h5>{this.props.user.city_id}</h5>
      </div>
    );
  }
}

export default withRouter(CityView);
