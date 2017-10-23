import { merge } from 'lodash';
import { RECEIVE_CURRENT_MESSAGE } from '../actions/current_message_actions';

const default_state = {};
const CurrentMessageReducer = ( state = default_state, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_MESSAGE:
      newState = merge({}, action.message);
      return newState;
    default:
      return state;
  }
};

export default CurrentMessageReducer;
