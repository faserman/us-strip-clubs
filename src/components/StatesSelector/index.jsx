import React, { Component } from 'react';
import { states } from '../../data';

export class StatesSelector extends Component {
    
    handleChange = (event) => {
        const { changeStateId } = this.props;
        const id = Number(event.target.value);
        changeStateId(id);
    }

    render() {
        const { selectedStateId } = this.props;
        const options = states.map(state => 
            <option key={ state.id } value={ state.id }>{ state.name }</option>
        )

        return (
            <select value={ selectedStateId } onChange={ this.handleChange }>
                <option>select state</option>
                { options }
            </select>
        )
    }
}

