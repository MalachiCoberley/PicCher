import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
  <div className="photo-index-item-container">
    <img src={props.photoUrl} className="photo-index-item"/>
    {/* <Link to={`/post/${props.post.id}`}>{props.post.title}</Link>
    <Link to={`/post/${props.post.id}/edit`}>Edit</Link>
    <button onClick={() => props.deletePost(props.post.id)}>D</button> */}
  </div>
);

export default PostIndexItem;