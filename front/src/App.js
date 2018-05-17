import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Testimony from './Testimony'
import './bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SoulMateWars</h1>
        </header>
        <p className="App-intro">

        </p>
          <Testimony />
      </div>
    );
  }
}

export default App;
