import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW } from "../actions/follow_actions";

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return Object.assign({}, action.follows)
    case RECEIVE_FOLLOW:
      return Object.assign({}, state, { [action.follow.id]: action.follow })
    case REMOVE_FOLLOW:
      let newState = Object.assign({}, state);
      delete newState[action.followId]
      return newState;
    default:
      return state;
  }
};

export default FollowsReducer;