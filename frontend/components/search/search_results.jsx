import React from "react";
import { Link } from "react-router-dom";
import PostIndexItem from "../posts/post_index_item";

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.searchPosts(this.props.search).then(() => this.setState({loading: false}))
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.searchQuery != this.props.match.params.searchQuery) {
      this.setState({loading: true})
      this.props.searchPosts(this.props.search).then(() => this.setState({loading: false}))
    }
  }
  
  render () {
    if (this.state.loading) {
      return <div></div>
    } else if (Object.keys(this.props.entities.posts).length == 0) return (
    <div className="home-container-main">
      <div className="page-header">
        <h1>Search Results for "{this.props.match.params.searchQuery}"</h1>
        </div>
        No Results :(
    </div>
    )
    else return (
      <div className="home-container-main">
        <div className="page-header">
        <h1>Search Results for "{this.props.match.params.searchQuery}"</h1>
        </div>
        <div className='profile-photo-index'>
        {
          Object.values(this.props.entities.posts).map(post => (
            <PostIndexItem
              post={post}
              deletePost={this.props.deletePost}
              key={post.id}
              photoUrl={post.photoUrl}
            />
          ))
        }
        </div>
      </div>
    )
  }
};

export default SearchResults

