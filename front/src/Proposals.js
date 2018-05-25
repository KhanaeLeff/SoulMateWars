import React from 'react'
import Character from './Character'
import Profil from './Profil'
import './Proposals.css'


class Proposals extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentWillMount () {
    const profile = this.state.profile
    // const result=this.state.result

    fetch("/characters")
    .then(results => results.json())
    .then(data => {
      const firstFilter = data.filter(character => character.gender === "female" )
      const filteredData = firstFilter.filter(character => character.species !== "human")
      // <Proposals profile={this.state.profile} /> 
      // <Proposals result={this.state.result} />
      

      // if(profile.interet === "de sexe masculin") {
      //   return maleData
      // }
      //this.props.profile
      //this.props.result
      // let  = data.results.map(() => {
      //   return(

      //   )
      // }))
      this.setState({characters: filteredData});
    })
  }
  render () {
    return (
      <div className='container'>
      {this.state.characters.map(character => <Character character={character} />)}
      </div>
    )
  }
}

// let characters = data.results.map((character => {
//   const pseudoGithub = character.name.replace(/\s/g, '-').toLowerCase()
//   const githubUrl = `https://github.com/${pseudoGithub}`
//   const profile = `https://localhost:5000/characters/${character.id}`


export default Proposals;