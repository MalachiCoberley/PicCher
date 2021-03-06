import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import followsReducer from './follows_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followsReducer,
  comments: commentsReducer
})

export default entitiesReducer;