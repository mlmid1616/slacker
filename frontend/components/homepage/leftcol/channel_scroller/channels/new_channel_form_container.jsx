import { connect } from 'react-redux';

import { createChannel } from '../../../../../actions/channel_actions';
import { createMembership } from '../../../../../actions/membership_actions';
import NewChannelForm from './new_channel_form';


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
)(NewChannelForm);
