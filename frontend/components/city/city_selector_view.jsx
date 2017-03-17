import React from 'react';
import { Link } from 'react-router';
import MajorCitySelectorContainer from './major_city_selector_container';

const CitySelectorView = () => (
  <div className="city-selector-view">
    <div className="city-top-text">
      <h1>Set your home city</h1>
      <p>Make sure you're the first to hear about Run With Strangers
        updates relevant to you!</p>
    </div>
    <div className="major-city-container">
      <h2>We're building communities here + HOUSE ICON</h2>
      <h4>You should be able to sign up for a run time today!</h4>
      <MajorCitySelectorContainer/>
    </div>
    <div className="minor-city-menu">
      <h2>We'll get here eventually + PLANE ICON</h2>
      <h4>For now, find and set your home city.  Well make sure
        you know when Run With Strangers is coming your way!</h4>
      -MinorCityMenuContainer goes here-
    </div>
  </div>
);

export default CitySelectorView;
