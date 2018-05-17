import React, { Component } from 'react';
import logo from './logo.svg';
import Profil from './Profil'
import './bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">by SoulMateWars</h1>
        </header>
        <Profil />
      </div>
    );
  }
}

export default App;
