import React, { Component } from 'react';
// import './App.css';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    console.log(filterRobots);
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <Cardlist robots={filterRobots} />
      </div>
    );
  }
}

export default App;
