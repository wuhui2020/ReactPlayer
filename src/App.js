import React, { Component } from 'react';
import './App.css';
import './assets/reset.css';
import Home from './views/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
