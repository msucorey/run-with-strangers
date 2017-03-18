import React from 'react';
import { Link, withRouter } from 'react-router';

const MinorCityMenu = ({ user }) => (

  <div className="minor-city-menu">
    <h2>We'll get here eventually + PLANE ICON</h2>
    <h4>For now, find and set your home city.  Well make sure
      you know when Run With Strangers is coming your way!</h4>
    <button className="new-city-btn"
      >DON'T SEE YOUR CITY?  ADD IT HERE!</button>
    <ul className="city-links">
      <li>
        <a href="">Toronto</a>
      </li>
      <li>
        <a href="">Los Angeles</a>
      </li>
      <li>
        <a href="">Philadelphia</a>
      </li>
      <li>
        <a href="">Duke University</a>
      </li>
    </ul>
  </div>

);

export default withRouter(MinorCityMenu);
