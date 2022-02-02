import * as PostApiUtil from '../util/posts_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});


export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts()
  .then(posts => dispatch(receivePosts(posts)))
)

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id)
  .then(post => dispatch(receivePost(post)))
)

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
)

export const editPost = post => dispatch => (
  PostApiUtil.editPost(post)
  .then(post => dispatch(receivePost(post)))
)

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id)
    .then(() => dispatch(removePost(id)))
)

export const searchPosts =search => dispatch => (
  PostApiUtil.searchPosts(search)
  .then(posts => dispatch(receivePosts(posts)))
)