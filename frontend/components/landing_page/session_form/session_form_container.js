import { connect } from 'react-redux';

import { login, logout, signup } from '../../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session, modal }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    type: modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  })
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
