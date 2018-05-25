import React, { Component } from 'react'
import App2 from './quiz/src/App'
import Profil from './Profil'
import Header from './Header'
import './App.css'
import NiceStories from './NiceStories'
import Events from './Events'
import Footer from './Footer'
import Proposals from './Proposals'
// import Testimony from './Testimony'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {},
      step: 0
    }
    this.nextStep = this.nextStep.bind(this)
    this.onProfileDone = this.onProfileDone.bind(this)
    this.onQuizDone = this.onQuizDone.bind(this)
  }
  nextStep () {
    const newStep = this.state.step + 1
    this.setState({
      step: newStep
    })
  }
  onProfileDone (profile) {
    const newStep = this.state.step + 1
    this.setState({
      profile: profile,
      step: newStep
    })
  }
  onQuizDone (result) {
    const newStep = this.state.step + 1
    this.setState({
      result: result,
      step: newStep
    })
  }

  render () {
    const step = this.state.step
    let componentToShow
    if (step === 0) {
      componentToShow = <Profil onProfileDone={this.onProfileDone} />
    } else if (step === 1) {
      componentToShow = <App2 onQuizDone={this.onQuizDone} />
    } else if (step === 2) {
      componentToShow = <Proposals profile={this.state.profile} />
    }
    console.log(this.state)
    return (
      <div className="App">
        <div className="row">
          <div className="header col-md-12">
            <Header />
          </div>
        </div>
        {componentToShow}
        <NiceStories />
        <Events />
        <Footer />
      </div>
    )
  }
}

export default App
