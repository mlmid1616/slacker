import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form/session_form';
import NavBar from './navbar/navbar';

class LandingPage extends React.Component {

  render (){
    return(
      <div id="landing-div">
        <NavBar />
        <p id="landing-text">Where Slacking Happens</p>
      </div>
    );
  }


}

export default LandingPage;
