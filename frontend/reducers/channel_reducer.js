import { merge } from 'lodash';
import { RECEIVE_USER_CHANNELS, RECEIVE_USER_CHANNEL } from '../actions/channel_actions';

const default_state = {};
const ChannelReducer = (state = default_state, action) => {
  let newState;
  switch (action.type){
    case RECEIVE_USER_CHANNELS:
      newState = merge({}, state, action.channels);
      return newState;
    case RECEIVE_USER_CHANNEL:
      newState = merge({}, state, action.channel);
      return newState;
    default:
      return state;
  }
};

export default ChannelReducer;
