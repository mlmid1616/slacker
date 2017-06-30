import { connect } from 'react-redux';
import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = { isOpen: false};

    this.startDemo1 = this.startDemo1.bind(this);
    this.startDemo2 = this.startDemo2.bind(this);

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
    //
    return (e) => {
      if (type === "login"){
        this.props.loginForm();
      } else {
        this.props.signupForm();
      }
    };
  }

  startDemo1(){
    const user = {user: {username: "WildernessRulez", password: "password123"}};
    this.props.login(user).then(() => { this.props.history.push('/messages/9'); });
  }
  startDemo2(){
    const user = {user: {username: "RevolutionRinger", password: "password123"}};
    this.props.login(user).then(() => { this.props.history.push('/messages/9'); });
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleModal(e){
    //
   if (e.currentTarget.textContent === 'Login' ){
     this.props.loginForm();
   } else if (e.currentTarget.textContent === 'Sign Up'){
     this.props.signupForm();
   }
   this.openModal();
 }

  render(){

    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(50, 50, 50, 0.50)'
      },
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
        <div className="nav">
          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <SessionFormContainer  />
          </Modal>
            <button className="auth" onClick={this.handleModal}>
              Sign Up
            </button>

          <Modal
            onRequestClose={this.closeModal}
             isOpen={this.state.isOpen}
             contentLabel="Modal"
             style={customStyles} >
            <SessionFormContainer  />
          </Modal>
            <button className="auth" onClick={this.handleModal}>
              Login
            </button>

            <button className="auth" onClick={this.startDemo1}>
              Demo:Teddy
            </button>

            <button className="auth" onClick={this.startDemo2}>
              Demo:G Washington
            </button>
        </div>
      );
    }
  }



export default withRouter(Navbar);


// <div>
// <h1>Slack image here</h1>
// <button onClick={this.handleClick("login")}>
// Login</button>
// <button onClick={this.handleClick("signup")} type="signup">
// Sign up</button>
// </div>
