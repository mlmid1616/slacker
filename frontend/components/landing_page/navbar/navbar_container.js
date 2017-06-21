import { connect } from 'react-redux';
import { signupForm, loginForm } from '../../../actions/modal_actions';
import Navbar from './navbar';


const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => ({
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
