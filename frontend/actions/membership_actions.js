import * as APIUtil from '../util/membership_api_util';
import { receiveUserChannel } from './channel_actions';

export const createMembership = membership => dispatch => {
   
  return APIUtil.createMembership(membership)
  .then(channel => (dispatch(receiveUserChannel(channel))));
  // err => (dispatch(receiveErrors(err.responseJSON))));
};
