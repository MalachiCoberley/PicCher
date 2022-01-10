import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => (
  <div className="photo-index-item-container">
    <Link to={`/post/${props.post.id}`} state={{entities: {posts: props.post}}}>
      <img src={props.photoUrl} className="photo-index-item"/>
    </Link>
  </div>
);

export default PostIndexItem;