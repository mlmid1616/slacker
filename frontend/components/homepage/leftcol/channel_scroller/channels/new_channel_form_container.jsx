import { connect } from 'react-redux';

import { createChannel } from '../../../../../actions/channel_actions';
import NewChannelForm from './new_channel_form';


const mapStateToProps = (state) => {
  //
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannelForm);
