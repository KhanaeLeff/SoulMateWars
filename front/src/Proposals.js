import React from 'react';

class Proposals extends React.Component {
  fetch("http://localhost:5000/characters")
    .then(response => response.json())
    .then(data => {
      contentContainer.innerHTML = data.map(createCharacterElement).join('')
  })
}

export default Proposals;