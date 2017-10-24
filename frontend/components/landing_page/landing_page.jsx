import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form/session_form';
import NavBarContainer from './navbar/navbar_container';

class LandingPage extends React.Component {

  render (){
    // debuggesr
    return(
      <div id="landing-div">
        <div>
          <NavBarContainer />
        </div>

        <div id="rwb-background">
        </div>

        <div className="landing-block">
        
          <div id="background-div">
          </div>
          <div>
            <ul className="landing-intro">
              <li className="overall-description">
                This is a slack clone for presidents
              </li>
              <li className="intro-name">
                Where no work happens
              </li>
              <li className="intro-description">
                When you're in charge, life is good.
                The time for action can wait when you have all your presidential friends to hang out with.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


}

export default LandingPage;
