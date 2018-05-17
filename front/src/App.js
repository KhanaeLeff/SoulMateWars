import React, { Component } from 'react';
import wallpaper from './wallpaper.jpg';
import './App.css';
import Accueil from './Accueil.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Accueil />
                  <img src={wallpaper} className="App-wallpaper" alt="wallpaper" />
      </div>
    );
  }
}

export default App;
