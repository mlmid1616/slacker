import { connect } from 'react-redux';

import { fetchChannelMessages } from '../../../../../actions/channel_actions';
import DirectMessageItem from './direct_message_item';

const mapStateToProps = () => {
  return({

  });
};


const mapDispatchToProps = () => {
  return ({
    fetchChannelMessages: (channel) => dispatch(fetchChannelMessages(channel))
  });
};
