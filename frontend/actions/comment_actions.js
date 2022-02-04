import * as CommentsApiUtil from '../util/comments_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = postId => dispatch => (
  CommentsApiUtil.fetchComments(postId)
  .then(comments => dispatch(receiveComments(comments)))
)

export const createComment = (comment) => dispatch => {
  console.log
  return (
  CommentsApiUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
)}

export const deleteComment = comment => dispatch => (
  CommentsApiUtil.deleteComment(comment)
    .then(() => dispatch(removeComment(comment)))
)