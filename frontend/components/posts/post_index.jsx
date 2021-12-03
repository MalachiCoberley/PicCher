import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost } = this.props;

    return (
      <div className="photo-index">
          {
            posts.map(post => (
              <PostIndexItem
                post={post}
                deletePost={deletePost}
                key={post.id}
                photoUrl={post.photoUrl}
              />
            ))
          }
      </div>
    );
  }
}

export default PostIndex;