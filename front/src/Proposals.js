import React from 'react';

class Proposals extends React.Component {
  constructor() {
    super();
      this.state = {
        characters: {},
      };
  }

componentWillMount() {

  fetch("http://localhost:5000/characters")
  .then(results => {
    return results.json();
  }).then(data => {
    let pis = data.results.map((name) => {
      return(
        <div key={name.results}>
          <img src={pic.picture}
      )
    }))
    this.setState({characters: data});
    console.log(characters)
  })
}
}

let characters = data.results.map((character => {
  const pseudoGithub = character.name.replace(/\s/g, '-').toLowerCase()
  const githubUrl = `https://github.com/${pseudoGithub}`
  const profile = `https://localhost:5000/characters/${character.id}`

//   render() {
//     return(
//     <div class="character ${isResistant(character.affiliations)}" style="background-image: url(${character.pic})">
//       <div class="character-infos">
//         <a href="${profile}"><div id="theCharacter" class="character-name">${character.name}</div></a>
//         <div class="character-born">Born: ${(character.born)}</div>
//         <div class="character-died">Died: ${(character.died)}</div>
//         <a href="${githubUrl}"><div class="character-github"><img src="../img/logo-github.svg" /> /${pseudoGithub}</div></a>
//       </div>
//     </div>
//   )}
// }

export default Proposals;