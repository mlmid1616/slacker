
import {LOGIN, SIGNUP} from '../actions/modal_actions';
import { merge } from "lodash";

const ModalReducer = (state = null, action) => {
  switch(action.type){
    case LOGIN:
      return 'login';
    case SIGNUP:
      return 'signup';
    default:
      return state;
  }
};

export default ModalReducer;
