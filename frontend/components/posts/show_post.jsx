import React from 'react';
import { Link } from 'react-router-dom';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUsers: true,
      loadingFollows: true
    }

    this.followUser = this.followUser.bind(this);
    this.following = this.following.bind(this);
  }

  componentDidMount() {
    let { posts } = this.props.entities
    this.props.getUser(posts.author_id).then(() => this.setState({loadingUsers: false}))
    this.props.getFollows(posts.author_id).then(() => this.setState({loadingFollows: false}))
  }

  followUser(e) {
    let follow = {
      user_id: this.props.entities.posts.author_id,
      follower: this.props.session.id
    }
    this.props.createFollow(follow)
  }

  following(follows, currentUser) {
    let isFollowing = false
    for (const follow in follows) {
      if (follows[follow].follower_id == currentUser ) {
        isFollowing = true
      }
    }
    return isFollowing
  }

  render() {
    const { loadingUsers, loadingFollows } = this.state
    if (loadingUsers) {
      return <div> Loading </div>
    } else if (loadingFollows) {
      return <div> Loading </div>
    } else { 
      let { follows, posts } = this.props.entities
      let { session } = this.props
      let currentUser = session.id == posts.author_id;
      let followingUser = currentUser || this.following(follows, session.id)

      return (
        <div className='show-post-container'>
          <div className='show-photo-display-container'>
            <img src={posts.photoUrl} className="show-photo-picture"/>
          </div>
          <div className='show-photo-details'>
            {
              currentUser ?
              <div className='edit-delete-buttons'>
                <Link to={`/post/edit/${posts.id}`}>Edit Post</Link>
                <button onClick={() => this.props.deletePost(posts.id)}>Delete Photo</button>
              </div> :
              <></>
            }
            <div className='show-author-information'>
              <div className='show-author-picture'>
                <Link to={`/user/${posts.author_id}`}>
                  <img src="https://pacdn.500px.org/userpic.png" alt='profile picture'>
                  </img>
                </Link>
              </div>
              <div className='show-title-follow'>
                <h3>{posts.title}</h3>
                <div className='show-author-name-follow'>
                <p>by {this.props.entities.user[posts.author_id].username} • </p>
                {
                  followingUser ?
                  <p>Following</p> :
                  <button onClick={e => this.followUser(e)}>Follow</button>
                }
                </div>
              </div>
            </div>
              <p>Photographed on {posts.date_taken}</p>
          </div>
        </div>
      );
    }
  }
}

export default ShowPost;
