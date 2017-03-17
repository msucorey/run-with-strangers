import React from 'react';
import { Link, withRouter } from 'react-router';
import CityThumb from './city_thumb';

class MajorCitySelector extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchCities();
	}

	render() {
		return (
			<ul className="maj-cit-sel">
        {this.props.cities.map(city =>
          <CityThumb key={city.id} city={city} user={this.props.user}/>
        )}
			</ul>
    );
	}

}

export default withRouter(MajorCitySelector);
