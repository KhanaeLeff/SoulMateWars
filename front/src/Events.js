import React, { Component } from 'react';

class Events extends Component {
  render() {
    return(
    //   <div className="container-fluid">
        <div className="row events">
          <div className="col-6">
          <p className="motherFuckinParagraph">Events<br/>
            Venez participer à nos supers soirées<br/> 
            Vous verrez, on est bien...</p>
            <button type="button" className="btn">En savoir plus</button>
          </div>
          <div className="col-6 chore">
            <img src="http://agence-wato.com/wp-content/uploads/2017/02/chore%CC%81graphie-stormtroopers-wato-paris-theme-soiree-star-wars.jpg" alt="" />
          </div>
        </div>
    //   </div>
    )
  }
}

export default Events;