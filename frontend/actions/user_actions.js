export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import * as APIUtil from '../util/user_api_util';


export const receiveAllUsers = (users) => {
  return({
    type: RECEIVE_ALL_USERS,
    users
  });
};

export const fetchAllUsers = () => dispatch => {
    APIUtil.fetchAllUsers()
    .then((users) => (dispatch(receiveAllUsers(users))));
    // err => (dispatch(receiveErrors(err.responseJSON))));
};
