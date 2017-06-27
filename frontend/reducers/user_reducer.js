import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { merge } from "lodash";

const UserReducer = (state = null, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_ALL_USERS:
      newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  }
};

export default UserReducer; 
