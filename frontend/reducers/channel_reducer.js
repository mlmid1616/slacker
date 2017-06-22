import { merge } from 'lodash';
import { RECEIVE_USER_CHANNELS } from '../actions/channel_actions';

const default_state = {};
const ChannelReducer = (state = default_state, action) => {
  switch (action.type){
    case RECEIVE_USER_CHANNELS:
      let newState = merge({}, state, action.channels);
      return newState;
    default:
      return state;
  }
};

export default ChannelReducer;
