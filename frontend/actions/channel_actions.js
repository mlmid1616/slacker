export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";

import * as APIUtil from '../util/channel_api_util';

export const receiveUserChannels = (channels) => {
  return({
    type: RECEIVE_ALL_CHANNELS,
    channels
  });
};

export const fetchUserChannels = user => dispatch => {

  APIUtil.fetchUserChannels(user)
  .then(channels => (dispatch(receiveUserChannels(channels))),
  err => (dispatch(receiveErrors(err.responseJSON))));
};
