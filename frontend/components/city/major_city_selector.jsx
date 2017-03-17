import React from 'react';
import { Link, withRouter } from 'react-router';
import CityThumb from './city_thumb';

class MajorCitySelector extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchCities();
    debugger
	}

	render() {
		return (
			<div className="maj-cit-sel">
        city names
        {this.props.cities.map(city =>
          <CityThumb key={city.id} city={city} />
        )}
			</div>
    );
	}

}

export default withRouter(MajorCitySelector);
