import React, { Component } from 'react';

class NiceStories extends Component {
  render() {
    return(
      // <div className="container-fluid">
        <div className="row storyLink">
          <div className="col-6">
            <img src="https://img.etsystatic.com/il/aa8858/904762928/il_570xN.904762928_kmdk.jpg?version=0" alt="" />
          </div>
          <div className="col-6">
            <p className="motherFuckinParagraph">BELLES HISTOIRES<br/>
            Leurs belles histoires, ils les ont eues et ils les vivent encore<br/> 
            Ils ont hâte de vous les faire partager !</p>
            <button type="button" className="btn">En savoir plus</button>
          </div>
        </div>
      // </div>
    )
  }
}

export default NiceStories;