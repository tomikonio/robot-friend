import React, { Component } from 'react';
// import './App.css';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.log('error getting users'));
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
        <h1 className="f1">RoboFriends</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
