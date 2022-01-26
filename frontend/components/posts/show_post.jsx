import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUsers: true,
      loadingFollows: true,
      postDeleted: false,
      newFollow: false
    }

    this.followUser = this.followUser.bind(this);
    this.following = this.following.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    let { posts } = this.props.entities
    this.props.getUser(posts.author_id).then(() => this.setState({loadingUsers: false}))
    this.props.getFollows(posts.author_id).then(() => this.setState({loadingFollows: false}))
  }

  handleDelete(e, postId) {
    e.preventDefault
    this.setState({postDeleted: true})
    this.props.deletePost(postId)
  }

  followUser(e) {
    let follow = {
      user_id: this.props.entities.posts.author_id,
      follower: this.props.session.id
    }
    this.props.createFollow(follow)
    this.setState({newFollow: true})
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
    }  else { 
      let { follows, posts } = this.props.entities
      let { session } = this.props
      let currentUser = session.id == posts.author_id;
      let followingUser = currentUser || this.following(follows, session.id) || this.state.newFollow
      let photoDateArray = posts.date_taken.split("-")

      return (
        <div className='show-post-container'>
          {this.state.postDeleted ? <Redirect to="/"/> : <></>}
          <div className='show-photo-display-container'>
            <img src={posts.photoUrl} className="show-photo-picture"/>
          </div>
          <div className='photo-details-container'>
            <div className='show-photo-details'>
              {
                currentUser ?
                <div className='edit-delete-buttons'>
                  <Link to={`/post/edit/${posts.id}`} className='show-edit-button'>Edit Post</Link>
                  <button onClick={e => this.handleDelete(e, posts.id)} className='show-delete-button'>Delete Photo</button>
                </div> :
                <></>
              }
              <div className='show-author-information'>
                <div className='show-author-picture'>
                  <Link to={`/user/${posts.author_id}`}>
                    <img src="https://pacdn.500px.org/userpic.png" alt='profile picture'/>
                  </Link>
                </div>
                <div className='show-title-follow'>
                  <h3>{posts.title}</h3>
                  <div className='show-author-name-follow'>
                  <p>by {this.props.entities.user[posts.author_id].username} • </p>
                  {
                    followingUser ?
                    <p>Following</p> :
                    <button onClick={e => this.followUser(e)} className='show-follow-button'>Follow</button>
                  }
                  </div>
                </div>
              </div>
                {photoDateArray.length > 1 ? <p>Photographed on {photoDateArray[1]}/{photoDateArray[2]}/{photoDateArray[0]}</p> : <></>}
                <p>{posts.description}</p>
                <div className='pulse-impression-container'>
                  <div className='show-pulse'>
                    <p>Pulse</p>
                    <h2>{Math.floor(Math.random() * 100)}.{Math.floor(Math.random() * 10)}</h2>
                  </div>
                  <div className='show-impressions'>
                    <p>Impressions</p>
                    <h2>{Math.floor(Math.random() * 1000)}</h2>
                  </div>
                </div>
            </div>
            <div className='comment-section'>
              <div className='add-comment-section'>
                <img src="https://pacdn.500px.org/userpic.png" alt='profile picture'/>
                <input type="text" className='add-comment-input' placeholder="You can't add a comment"/>
              </div>
              <h4>4 Comments</h4>
              <div className='comment-container'>
                <img src="https://pacdn.500px.org/userpic.png" alt='comment-profile picture'/>
                  <div className='comment-contents'>
                    <h3>Stefano Ravioli</h3>
                    <p>Wonderful!!!</p>
                  </div>
              </div>
              <div className='comment-container'>
                <img src="https://pacdn.500px.org/userpic.png" alt='comment-profile picture'/>
                  <div className='comment-contents'>
                    <h3>PhotoBlaster2000</h3>
                    <p>Great shot</p>
                  </div>
              </div>
              <div className='comment-container'>
                <img src="https://pacdn.500px.org/userpic.png" alt='comment-profile picture'/>
                  <div className='comment-contents'>
                    <h3>Sung Hwan Lee</h3>
                    <p>a work with a very beautiful feeling</p>
                  </div>
              </div>
              <div className='comment-container'>
                <img src="https://pacdn.500px.org/userpic.png" alt='comment-profile picture'/>
                  <div className='comment-contents'>
                    <h3>Flo</h3>
                    <p>An emotive capture...long road indeed. Beautiful work as always.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ShowPost;
