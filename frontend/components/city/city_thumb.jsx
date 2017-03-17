import React, { Component } from 'react';
import { Link } from 'react-router';

const CityThumb = ({ city, router }) => (
  <p className="city-thumb">
    { city.name }
  </p>
);

export default CityThumb;
