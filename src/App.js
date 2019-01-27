import React, { Component } from 'react';
import './App.css';
import {StatesSelector} from './components/StatesSelector'
import { CitiesSelector } from './components/CitiesSelector';
import { StripClubs } from './components/StripClubs';
import { Dropdown } from './components/base/Dropdown';
import { states } from './data';

class App extends Component {
  state = {
    selectedStateId: undefined,
    selectedCityId: undefined
  }

  changeStateId = (id) => {
    this.setState({ selectedStateId: id })
  }

  changeCityId = (id) => {
    this.setState({ selectedCityId: id })
  }

  render() {
    const { selectedStateId } = this.state;
    const { selectedCityId } = this.state;

    return (
      <div className="App">
        <Dropdown
          options={ states }
          selectedValue={ selectedStateId }
          onChange={ this.changeStateId }
        />
        {/* <StatesSelector
          selectedStateId={ selectedStateId }
          changeStateId={ this.changeStateId }
        />
        <CitiesSelector
          selectedCityId={ selectedCityId }
          changeCityId={ this.changeCityId }
          selectedStateId={ selectedStateId }
        />
        <StripClubs
          selectedCityId={ selectedCityId }
        /> */}
      </div>
    );
  }
}

export default App;
