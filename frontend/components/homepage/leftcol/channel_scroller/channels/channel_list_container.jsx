import { connect } from 'react-redux';
import { fetchUserChannels, receiveUserChannels } from '../../../../../actions/channel_actions';

import ChannelList from './channel_list';

const mapStateToProps = (state) => {
  
  return ({
    channels: Object.keys(state.channels)
    .map(function (key) { return state.channels[key]; }),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserChannels: (user) => dispatch(fetchUserChannels(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
