import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

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
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
