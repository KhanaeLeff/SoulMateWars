import React from 'react'
import logo from './logo.svg';

class Header extends React.Component {
  render () {
    return(
      <header className="App-header">
      <h1 className="App-title">SoulMate</h1>
      <img src={logo} className="App-logo" alt="logo" />
        <p>L'amour à 3 parsecs de chez toi</p>
    </header>
    )
  }
}
export default Header
