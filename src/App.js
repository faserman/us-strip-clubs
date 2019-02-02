import React, { Component } from 'react';
import './App.css';
/*import { StatesSelector } from './components/StatesSelector'
import { CitiesSelector } from './components/CitiesSelector';
import { StripClubs } from './components/StripClubs';*/
import { Dropdown } from './components/base/Dropdown';
import { states, cities, stripClubs } from './data';

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

    const filteredCities = cities.filter(city =>
      city.stateId === selectedStateId
    )

    const filteredClubs = stripClubs.filter(club =>
      club.cityId === selectedCityId
  )
    const list = filteredClubs.map(club =>
        <div key={club.id}>{club.name}</div>
    )

    return (
      <div className="App">
        <Dropdown
          options={ states }
          selectedValue={ selectedStateId }
          onChange={ this.changeStateId }
        />
        { selectedStateId ? <Dropdown
          options={ filteredCities }
          selectedValue={ selectedCityId }
          onChange={ this.changeCityId }
        /> : null }
      <div>
        { list }
      </div>


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
