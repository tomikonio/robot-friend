import React, { Component } from 'react';
import './App.css';
import Cardlist from './Cardlist';
import { robots } from './robots';

class App extends Component {
  render() {
    return <Cardlist robots={robots} />;
  }
}

export default App;
