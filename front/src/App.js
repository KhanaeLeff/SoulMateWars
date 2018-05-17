import React, { Component } from 'react';
import Profil from './Profil';
import Header from './Header';
import './App.css';
import NiceStories from './NiceStories'
import Events from './Events'
// import Testimony from './Testimony'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="header col-md-12">
            <Header />
          </div>
        </div>
        <Profil />
        <NiceStories />
        <Events />
      </div>
    );
  }
}

export default App;
