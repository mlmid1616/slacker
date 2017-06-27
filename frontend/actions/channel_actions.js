export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_USER_CHANNEL = "RECEIVE_USER_CHANNEL";

import * as APIUtil from '../util/channel_api_util';
// import { receiveErrors } from './session_actions';

export const receiveUserChannels = (channels) => {
  return({
    type: RECEIVE_USER_CHANNELS,
    channels
  });
};

export const receiveUserChannel = (channel) => {
  return({
    type: RECEIVE_USER_CHANNEL,
    channel
  });
};


export const fetchUserChannels = user => dispatch => {
    APIUtil.fetchUserChannels(user)
    .then(channels => (dispatch(receiveUserChannels(channels))));
    // err => (dispatch(receiveErrors(err.responseJSON))));
};



export const fetchCurrentChannel = (channel_id) => dispatch => {
  return APIUtil.fetchCurrentChannel(channel_id);
};


// channel has channel name and users
