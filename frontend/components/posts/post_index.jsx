import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts.length !== this.props.posts.length) {
      // window.location.reload()
    };
  }

  render() {
    const { posts, deletePost } = this.props;
    console.log(this.props)
    console.log(this.state)

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