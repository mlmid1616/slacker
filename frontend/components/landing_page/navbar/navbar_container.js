import { connect } from 'react-redux';
import { signupForm, loginForm } from '../../../actions/modal_actions';
import { login } from '../../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => ({
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm()),
    login: (user) => dispatch(login(user))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
