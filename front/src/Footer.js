import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
    //   <div className="paddingLeft">
		// 	<div className="row no-gutters">
		// 		<p className="motherFuckinParagraph">Les créateurs
    //       <a href="https://www.linkedin.com/in/nicolas-nivlet-b3aab6a3/">Nicolas Nivlet</a>
    //       <a href="https://www.linkedin.com/in/alexandre-morazin/">Alexandre Marazin</a>
    //       <a href="https://www.linkedin.com/in/thientamtran/">Thien Tam Tran</a>
    //       <a href="https://www.linkedin.com/in/romain-vaur-9b5519160/">Romain Vaur</a>.</p>
		// 	</div>
		// </div>
    <footer>
          <hr width= "100%" color= "yellow" />
     <div className="made col-md-12">
       <p>Made by <a href="https://www.linkedin.com/in/nicolas-nivlet-b3aab6a3/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Nicolas !"><span>Nicolas</span></a>,
        <a href="https://www.linkedin.com/in/alexandre-morazin/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn d'Alexandre' !"> <span>Alexandre</span></a>,
        <a href="https://www.linkedin.com/in/thientamtran/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Thien Tam !"> <span>Thien Tam</span></a>,
        <a href="https://www.linkedin.com/in/romain-vaur-9b5519160/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Romain !"> <span>Romain</span>
       </a> de la WildCodeSchool Toulouse 2018</p>
     </div>
   </footer>
    )
  }
}

export default Footer;
