import React from 'react';"formulaire"

class Profil extends React.Component {
  constructor(props) {
    super(props)
    this.updateProfilPrenom = this.updateProfilPrenom.bind(this)
    this.state = {prenom: "coeur a prendre", nom:"", age:"", sexe:"", interet:""}
    this.updateProfilNom = this.updateProfilNom.bind(this)
    this.updateProfilAge = this.updateProfilAge.bind(this)
    this.updateProfilSexe = this.updateProfilSexe.bind(this)
    this.updateProfilInteret = this.updateProfilInteret.bind(this)
  }

  updateProfilPrenom(event) {
    this.setState({prenom: event.target.value})
  }
  updateProfilNom(event) {
    this.setState({nom: event.target.value})
  }
  updateProfilAge(event) {
    this.setState({age: event.target.value})
  }
  updateProfilSexe(event) {
    this.setState({sexe: event.target.value})
  }
  updateProfilInteret(event) {
    this.setState({interet: event.target.value})
  }

  render() {
    const inputStyle = {
      color: "#FF33F6",
    }

    //extraire les valeurs du state (déconstruction)
    const {nom, age, sexe, interet} = this.state
    const done = nom !== "" && age !== "" && sexe !== "" && interet !== ""
    const storyStyle = {
      display: done ? "block" : "none"
    }


    return(
      <div className="row">
        <div className="formulaire col-md-6">
          <input style={inputStyle} type="prenom" className="form-control" value={this.state.value} onChange={this.updateProfilPrenom} placeholder="Votre prénom"/>
          <br />
          <input style={inputStyle} type="nom" className="form-control" value={this.state.value} onChange={this.updateProfilNom} placeholder="Votre nom"/>
          <br />
          <input style={inputStyle} type="age" className="form-control" value={this.state.value} onChange={this.updateProfilAge} placeholder="Votre âge" />
          <br />
          <input style={inputStyle} type="sexe" className="form-control" value={this.state.value} onChange={this.updateProfilSexe} placeholder="Votre sexe" />
          <br />
          <label htmlFor="selectGender">Je suis intéressé(e) par...</label>
            <select className="form-control" id="selectGender" style={inputStyle} value={this.state.value} onChange={this.updateProfilInteret}>
              <option>une femme</option>
              <option>un homme</option>
              <option>un droïde</option>
            </select>
        </div>
        <div className="story col-md-6">
          <h1>Bonjour {this.state.prenom}</h1>
          <div style={storyStyle}>
            <p>Puissante la famille {this.state.nom} est, dans la force !</p>
            <p>Mais seul, aujourd'hui tu te trouves...</p>
            <p>Tu nous fait part de ton intérêt pour {this.state.interet}</p>
          </div>
        </div>
      </div>

    )
  }
}
export default Profil;
