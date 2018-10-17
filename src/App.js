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
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox />
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
