import React from 'react';

const PostIndexItem = props => (
  <div className="photo-index-item-container">
    <img src={props.photoUrl} className="photo-index-item"/>
  </div>
);

export default PostIndexItem;