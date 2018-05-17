import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './quiz/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Profil from './Profil'
import Header from './Header'
import Survey from './Survey'

import './App.css';

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
        <Survey />
        <p className="App-intro">  </p>
      </div>
    );
  }
}

export default App;
