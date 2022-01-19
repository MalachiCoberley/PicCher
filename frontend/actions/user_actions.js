import * as APIUtil from '../util/users_api_util';

export const RECEIVE_UPDATED_USER = 'RECEIVE_UPDATED_USER';

export const editUser = user => dispatch => {
  console.log(user)
  return (
  APIUtil.editUser(user).then(user => (
    dispatch(receiveUpdatedUser(user))
  ))
)};

export const receiveUpdatedUser = updatedUser => ({
  type: RECEIVE_UPDATED_USER,
  updatedUser
});  
