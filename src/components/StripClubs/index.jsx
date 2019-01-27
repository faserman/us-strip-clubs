import React, { Component } from 'react';
import { stripClubs } from '../../data';

export class StripClubs extends Component {
    
    render() {
        const { selectedCityId } = this.props;
        if (selectedCityId === undefined) {
            return null;
        } 
        const filteredClubs = stripClubs.filter(club =>
            club.cityId === selectedCityId
        )
        const list = filteredClubs.map(club =>
            <div key={club.id}>{club.name}</div>
        )

        return (
            <div>
                { list }
            </div>
        )
    }
}