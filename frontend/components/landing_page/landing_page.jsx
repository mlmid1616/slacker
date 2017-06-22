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
        <p id="landing-text">slack a bit</p>
      </div>
    );
  }


}

export default LandingPage;
