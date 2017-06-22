export const RECEIVE_USER_CHANNELS = "RECEIVE_USER_CHANNELS";
export const RECEIVE_USER_CHANNEL = "RECEIVE_USER_CHANNEL";

import * as APIUtil from '../util/channel_api_util';

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
    .then(channels => (dispatch(receiveUserChannels(channels))),
    err => (dispatch(receiveErrors(err.responseJSON))));
};

export const createChannel = channel => dispatch => {
  APIUtil.createChannel(channel)
  .then(channel => (dispatch(receiveUserChannel(channel))),
  err => (dispatch(receiveErrors(err.responseJSON))));
};
