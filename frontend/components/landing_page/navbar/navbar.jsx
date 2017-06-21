import { connect } from 'react-redux';
import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = { isOpen: false};

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  closeModal(e) {
      if (this.state.isOpen){
        $('.transform').toggleClass('transform-active');
      }
      // this.props.clearErrors();
      let that = this;
      setTimeout(function(){
        that.setState({ isOpen: false });
      }, 300);
    }


  openModal(){
  this.setState({ isOpen: true });
  }

  handleClick(type) {
    // debugger
    return (e) => {
      if (type === "login"){
        this.props.loginForm();
      } else {
        this.props.signupForm();
      }
    };
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleModal(e){
   if (e.currentTarget.textContent === 'Sign up for free' ||
     e.currentTarget.textContent === 'Create account'){
     this.props.signupForm();
   } else if (e.currentTarget.textContent === 'Sign in'){
     this.props.loginForm();
   }
   this.openModal();
 }

  render(){

    const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
    let formType;
    if (this.props.modal === "login") {
      formType = "login";
    } else {
      formType = "signup";
    }
      return(
        <div>
          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <SessionFormContainer  />
          </Modal>
            <button onClick={this.handleModal}>
              Sign in
          </button>

          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <SessionFormContainer  />
          </Modal>
            <button onClick={this.handleModal}>
              Login
            </button>

        </div>
      );
    }
  }



export default Navbar;


// <div>
// <h1>Slack image here</h1>
// <button onClick={this.handleClick("login")}>
// Login</button>
// <button onClick={this.handleClick("signup")} type="signup">
// Sign up</button>
// </div>
