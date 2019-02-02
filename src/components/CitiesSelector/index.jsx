import React, { Component } from 'react';
import { cities } from '../../data';

export class CitiesSelector extends Component {
    
    handleChange = (event) => {
        const { changeCityId } = this.props;
        const id = Number(event.target.value);
        changeCityId(id);
    }


    render() {
        const { selecteCityId, selectedStateId } = this.props;
        if (selectedStateId === undefined) {
            return null;
        } 
        const filteredCities = cities.filter(city =>
            city.stateId === selectedStateId
        )
        const options = filteredCities.map(city =>
            <option key={ city.id } value={ city.id }>{ city.name }</option>
        )

        return (
            <select value={ selecteCityId } onChange={ this.handleChange }>
                <option>select city</option>
                { options }
            </select>
        )
    }
}