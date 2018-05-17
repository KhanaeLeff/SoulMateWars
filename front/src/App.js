import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import './bootstrap.min.css';
import Testimony from './Testimony'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SoulMate</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>L'amour à 3 parsecs de chez toi</p>
        </header>
        <p className="App-intro">  </p>
        <Testimony />
      </div>
    );
  }
}

export default App;
