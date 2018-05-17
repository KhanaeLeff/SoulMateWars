import React from 'react';


class Testimony extends React.Component {
    render() {
      return (
        <div className="container-fluid testimonies">
          <div className="row">
            <div className="post p1">
                <div className="texte offset-1 col-10 offset-xs-1 col-xs-8 offset-sm-1 col-sm-7 offset-md-1 col-md-6 offset-xl-1 col-xl-4">
                    <h4>TB-TT</h4>
                    <p className="card-text">
                        A l'époque j'etais seul et déprimé, maintenant ça va beaucoup mieux Youhou !
                    </p>
                    <p className="option">
                        Cependant, bien d'autres trésors attendent le touriste curieux : Phnom Penh, la capitale trépidante, Sihanoukville,la principale station balnéaire, des îles paradisiaques... Tentez l'expérience inoubliable d'un voyage au royaumekhmer !
                    </p>
                </div>
                <img src="http://www.starwars-holonet.com/holonet/images/2/2e/10667/ship_atm6_1.jpg" className="img-fluid offset-8" alt="Responsive" />
              </div>
            </div>
            <div className="post p2">
                <div className="texte offset-1 col-10 offset-xs-3 col-xs-8 offset-sm-4 col-sm-7 offset-md-5 col-md-6 offset-xl-7 col-xl-4">
                    <h4>Bolivie</h4>
                    <p className="card-text">
                        Pas un jour, pas une seconde sans aventure en Bolivie. Rien que de chercher son chemin pour descendre des hauteursjusqu’en ville peut tenir du défi. Sans parler des sommets et des rivières, des innombrables possibilités de randonnées,de la jungle et des vertigineuses descentes à VTT sur fond d’immenses et impénétrables territoires sauvages.
                    </p>
                    <p className="option">
                        C’est un pays qui demande au voyageur un caractère intrépide à l’instar de celui qui a entraîné les premiers explorateursà pousser toujours plus loin, par-delà les montagnes et les méandres des rivières. 
                    </p>
                  </div>
                <img src="https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834" className="img-fluid offset-1" alt="Responsive" />
            </div>
            <div className="post p3">
                <div className="texte offset-1 col-10 offset-xs-1 col-xs-8 offset-sm-1 col-sm-7 offset-md-1 col-md-6 offset-xl-1 col-xl-4">
                    <h4>TB-TT</h4>
                    <p className="card-text">
                        A l'époque j'etais seul et déprimé, maintenant ça va beaucoup mieux Youhou !
                    </p>
                    <p className="option">
                        Cependant, bien d'autres trésors attendent le touriste curieux : Phnom Penh, la capitale trépidante, Sihanoukville,la principale station balnéaire, des îles paradisiaques... Tentez l'expérience inoubliable d'un voyage au royaumekhmer !
                    </p>
                </div>
                <img src="https://vignette.wikia.nocookie.net/fr.starwars/images/4/4a/Kylo_Ren_TLJ.png/revision/latest?cb=20171224083913" className="img-fluid offset-8" alt="Responsive" />
            </div>
            <div className="scrollUp">
                <a href="#top"><img src="https://zupimages.net/up/18/10/j3ay.png" alt="" /></a>
            </div>
        </div>
    )
  }
}

export default Testimony;