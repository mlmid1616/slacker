import { connect } from 'react-redux';

import { fetchChannelMessages } from '../../../../../actions/channel_actions';
import ChannelListItem from './new_channel_form';

const mapStateToProps = () => {
  return({

  });
};


const mapDispatchToProps = () => {
  return ({
    fetchChannelMessages: (channel) => dispatch(fetchChannelMessages(channel))
  });
};
