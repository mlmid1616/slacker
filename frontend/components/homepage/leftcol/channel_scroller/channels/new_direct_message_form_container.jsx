import { connect } from 'react-redux';

import { createChannel } from '../../../../../actions/channel_actions';
import { createMembership } from '../../../../../actions/membership_actions';
import NewDirectMessageForm from './new_direct_message_form';


const mapStateToProps = (state) => {
  //
  return {
    users: Object.keys(state.users).map( (key) => state.users[key] )
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createMembership: (membership) => dispatch(createMembership(membership))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDirectMessageForm);
