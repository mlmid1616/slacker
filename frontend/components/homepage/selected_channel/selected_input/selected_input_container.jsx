import { connect } from 'react-redux';
import SelectedInput from './selected_input';
import { createSelectedMessage } from '../../../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    user_id: state.session.currentUser.id,
    channel_id: parseInt(ownProps.channel)
  };
};

const mapDispatchToProps = (dispatch) => {

  return ({
    createSelectedMessage: (message) => dispatch(createSelectedMessage(message))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedInput);
