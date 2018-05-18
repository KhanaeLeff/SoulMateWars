import React from 'react';

class Profil extends React.Component {
  constructor(props) {
    super(props)
    this.updateProfilPrenom = this.updateProfilPrenom.bind(this)
    this.state = {prenom: "Coeur à prendre", nom:"", age:"", sexe:"", interet:"", species:""}
    this.updateProfilNom = this.updateProfilNom.bind(this)
    this.updateProfilAge = this.updateProfilAge.bind(this)
    this.updateProfilSexe = this.updateProfilSexe.bind(this)
    this.updateProfilInteret = this.updateProfilInteret.bind(this)
    this.onClickButton = this.onClickButton.bind(this)
    this.updateProfilSpecies = this.updateProfilSpecies.bind(this)

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
  onClickButton(event) {
    this.props.onProfileDone(this.state)
  }
    updateProfilSpecies(event) {
    this.setState({species: event.target.value})
  }

  render() {
    const inputStyle = {
      color: "yellow",
      backgroundColor: "rgba(255,255,255,0)",
    }
    const buttonStyle = {
      color: "yellow",
      backgroundColor: "black",
      borderColor: "yellow",
    }
    const optionStyle = {
      backgroundColor: "black"
    }
    //extraire les valeurs du state (déconstruction)
    const {nom, age, sexe, interet, species} = this.state
    const done = nom !== "" && age !== "" && sexe !== "" && interet !== "" && species !== ""
    const storyStyle = {
      display: done ? "block" : "none"
    }
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="formulaire col-md-6">
            <input style={inputStyle} type="prenom" className="form-control" value={this.state.value} onChange={this.updateProfilPrenom} placeholder="Votre prénom"/>
            <br />
            <input style={inputStyle} type="nom" className="form-control" value={this.state.value} onChange={this.updateProfilNom} placeholder="Votre nom"/>
            <br />
            <input style={inputStyle} type="age" className="form-control" value={this.state.value} onChange={this.updateProfilAge} placeholder="Votre âge" />
            <br />
            <select style={inputStyle} type="sexe" className="form-control" value={this.state.value} onChange={this.updateProfilSexe}>
              <option style={optionStyle}>Votre sexe</option>
              <option style={optionStyle}>Droïde</option>
              <option style={optionStyle}>Femme</option>
              <option style={optionStyle}>Homme</option>
              <option style={optionStyle}>Wookie</option>
            </select>
            <br />
            <label htmlFor="selectGender">Je suis intéressé(e) par...</label>
              <select className="form-control" id="selectGender" style={inputStyle} value={this.state.value} onChange={this.updateProfilInteret}>
                <option style={optionStyle} value="">Genre recherché</option>
                <option style={optionStyle} value="de sexe féminin">Une femme</option>
                <option style={optionStyle} value="de sexe masculin">Un homme</option>
              </select>
              <br />
              <select className="form-control" id="selectSpecies" style={inputStyle} value={this.state.value} onChange={this.updateProfilSpecies}>
                <option style={optionStyle} value="">Espèce souhaitée</option>
                <option style={optionStyle} value="un humain">Un être humain</option>
                <option style={optionStyle} value="une créature exotique">Une créature plus exotique</option>
              </select>
          </div>
          <div className="story col-md-6">
            <h1>Bonjour {this.state.prenom}</h1>
            <div style={storyStyle}>
              <p className="motherFuckinParagraph">Puissante la famille {this.state.nom}, dans la force est!<br/>
              Mais seul(e), aujourd'hui tu te trouves...<br/>
              De ton intérêt pour {this.state.species}<br/>
              {this.state.interet} tu nous as fait part<br />
              Afin de t'aider...</p>
              <button style={buttonStyle} onClick={this.onClickButton} >Plus de renseignements, nous donner tu dois</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profil;
