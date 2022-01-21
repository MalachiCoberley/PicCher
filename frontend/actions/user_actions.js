import * as APIUtil from '../util/users_api_util';

export const RECEIVE_UPDATED_USER = 'RECEIVE_UPDATED_USER';
export const RECEIVE_SELECTED_USER = 'RECEIVE_SELECTED_USER';

export const editUser = user => dispatch => {
  return (
  APIUtil.editUser(user).then(user => (
    dispatch(receiveUpdatedUser(user))
  ))
)};

export const getUser = userId => dispatch => {
  return (
  APIUtil.getUser(userId).then(user => (
    dispatch(receiveSelectedUser(user))
  ))
)};

export const receiveUpdatedUser = updatedUser => ({
  type: RECEIVE_UPDATED_USER,
  updatedUser
});  

export const receiveSelectedUser = user => ({
  type: RECEIVE_SELECTED_USER,
  user
});  
