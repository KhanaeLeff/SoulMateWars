import React, { Component } from 'react';

class Events extends Component {
  render() {
    return(
    <footer class="paddingLeft">
      <div class="row no-gutters">
          <div class="mentions col-6 offset-xs-1 col-xs-5 offset-lg-1 col-lg-4 ">
              <ul class="mentionsLeft">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="https://odyssey.wildcodeschool.fr/mentions-legales" target="_blank">Mentions légales</a></li>
                  <li><a href="https://fr.wikipedia.org/wiki/Copyright" target="_blank">Copyrights</a></li>
              </ul>
              <ul class="mentionsRight">
                  <li><a href="https://www.leetchi.com" target="_blank">Faites un don</a></li>
                  <li><a href="Contact.html">Contact</a></li>
              </ul>
          </div>
          <div class="reseaux col-6 offset-lg-1 col-lg-5">
              <p>
                  Embarquez avec nous :
              </p>
              <ul>
                  <li>
                      <a href="https://www.facebook.com/"target="_blank"><img class="imgbtn" src="logos/fb.png"></a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/"target="_blank"><img class="imgbtn" src="logos/insta.png"></a>
                  </li>
                  <br class="secret"/>
                  <li>
                      <a href="https://twitter.com/"target="_blank"><img class="imgbtn" src="logos/twitter.png"></a>
                  </li>
                  <li>
                      <a href="https://www.twitch.tv/khanaeleff"target="_blank"><img class="imgbtn" src="logos/twitch.png"></a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="row no-gutters">
          <div class="col-12">
              <p class="madeBy">
                  Made with major power by The Wild Eyes Team
              </p>
          </div>
      </div>
    </div>
  </footer>
  )}
}

export default Footer;