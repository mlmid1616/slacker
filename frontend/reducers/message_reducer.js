import { merge } from 'lodash';
import { RECEIVE_SELECTED_MESSAGES, RECEIVE_SELECTED_MESSAGE } from '../actions/message_actions';

const default_state = {};

const MessageReducer = (state = default_state, action) => {
  let newState;
  switch (action.type){
    case RECEIVE_SELECTED_MESSAGES:
      newState = merge({}, state, action.messages);
      return newState;
    case RECEIVE_SELECTED_MESSAGE:
      newState = merge({}, state, {[action.message.id]:action.message});
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;
