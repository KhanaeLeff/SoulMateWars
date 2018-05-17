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
          <h1 className="App-title">SoulMate</h1>
          <img src={logo} className="App-logo" alt="logo" />
            <p>L'amour à 3 parsecs de chez toi</p>
        </header>
        <Profil />
        <p className="App-intro">  </p>
      </div>
    );
  }
}

export default App;
