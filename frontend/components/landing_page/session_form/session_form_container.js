import { connect } from 'react-redux';

import { login, logout, signup, receiveCurrentUser } from '../../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  // debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    type: state.modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);



// const formType = ownProps.location.pathname.slice(1);
// const processForm = (formType === 'login') ? login : signup;
// return {
//   processForm: user => dispatch(processForm(user)),
//   formType
// };
