import * as FollowsUtil from '../util/follows_util'

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

export const getFollows = userId => dispatch => (
  FollowsUtil.getFollows(userId)
  .then(follows => dispatch(receiveFollows(follows)))
)

export const createFollow = (follow) => dispatch => {
  return (
  FollowsUtil.followUser(follow)
  .then(follow => dispatch(receiveFollow(follow)))
)}

export const deleteFollow = followId => dispatch => (
  FollowsUtil.unfollowUser(followId)
    .then(() => dispatch(removeFollow(followId)))
)