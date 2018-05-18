import React from 'react';

class Character extends React.Component {

  render() {
    const character=this.props.character
    return(
      <div className="character" style={{ backgroundImage: 'url(' + character.pic + ')' }}>
        <div className="character-infos">
          <a href="#"><div id="theCharacter" className="character-name">{character.name}</div></a>
          <div className="character-born">Born: {character.born}</div>
          <div className="character-died">Died: {character.died}</div>
        </div>
      </div>
    )
  }
}

export default Character