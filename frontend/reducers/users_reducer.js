import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_UPDATED_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.updatedUser });
    default:
      return state;
  }
};

export default usersReducer;