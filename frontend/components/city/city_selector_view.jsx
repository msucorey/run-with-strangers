import React from 'react';
import { Link } from 'react-router';
import MajorCitySelectorContainer from './major_city_selector_container';
import MinorCityMenuContainer from './minor_city_menu_container';

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
      <MinorCityMenuContainer/>
  </div>
);

export default CitySelectorView;
