import { receiveCurrentMessage } from './current_message_actions'
export const RECEIVE_SELECTED_MESSAGES = "RECEIVE_SELECTED_MESSAGES";
export const RECEIVE_SELECTED_MESSAGE = "RECEIVE_SELECTED_MESSAGE";

import * as APIUtil from '../util/message_api_util';
// import { receiveErrors } from './session_actions';

export const receiveSelectedMessages = (messages) => {
  return ({
    type: RECEIVE_SELECTED_MESSAGES,
    messages
  });
};

export const receiveSelectedMessage = message => {
  return ({
    type: RECEIVE_SELECTED_MESSAGE,
    message
  });
};

export const createMessageReply = reply => dispatch => {
  return APIUtil.createMessageReply(reply)
  .then( message => {
    dispatch(receiveSelectedMessage(message));
    dispatch(receiveCurrentMessage(message));
    }
  );
}

export const fetchSelectedMessages = channel_id => dispatch => {
  return APIUtil.fetchSelectedMessages(channel_id)
    .then(messages => dispatch(receiveSelectedMessages(messages)));
};
// err => (dispatch(receiveErrors(err.responseJSON))));

export const fetchSelectedMessage = message_id => dispatch => {
  return APIUtil.fetchSelectedMessage(message_id)
  .then(message => dispatch(receiveSelectedMessage(message)))
};

export const createSelectedMessage = message  => dispatch => {
  return APIUtil.createSelectedMessage(message)
  .then( message => dispatch(receiveSelectedMessage(message)));
};
