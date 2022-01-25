import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../posts/post_index_item';
import EditUserInfoForm from './edit_user_info_form';

class Profile extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingFollows: true
    }

    this.followUser = this.followUser.bind(this);
    this.showEditForm = this.showEditForm.bind(this)
    this.following = this.following.bind(this)
  }

  followUser(e) {
    let follow = {
      user_id: this.props.match.params.userId,
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

  componentDidMount() {
    this.props.fetchPosts()
    this.props.getUser(this.props.match.params.userId).then(() => this.setState({loading: false}))
    this.props.getFollows(this.props.match.params.userId).then(() => this.setState({loadingFollows: false}))
  }

  showEditForm() {
    return (
      <div>
        <button>Edit Profile</button>
        <EditUserInfoForm user={this.props.entities.user} editUser={this.props.editUser}/>
      </div>
    )
  }

  render() {
    const { loading, loadingFollows } = this.state
    if (loading) {
      return <div> Loading </div>
    } else if (loadingFollows) {
      return <div> Loading </div>
    } else {
      let allPhotos = Object.values(this.props.entities.posts)
      let userPhotos = allPhotos.filter(photo => photo.author_id === this.props.entities.user.id)
      let currentUser = this.props.session.id == this.props.match.params.userId
      let followingUser = currentUser || this.following(this.props.entities.follows, this.props.session.id)
      let followCount = Object.keys(this.props.entities.follows).length
      let showEdit = false

      return (
        <div className="profile-container">
          <div className='profile-header'>
            <img src='https://pacdn.500px.org/userpic.png'/>
            <div className='profile-total-stats'>
              <p>{followCount} Followers</p>
              <p>{Math.floor(Math.random() * 1000)} Photo Likes</p>
              <p>{Math.floor(Math.random() * 10000)} Photo Impressions</p>
            </div>
            { 
              currentUser ? 
              <div>
                <EditUserInfoForm display={showEdit} user={this.props.entities.user} editUser={this.props.editUser}/>
              </div> : <></>
            }
          {
           followingUser ?
           <p className='profile-following-text'>Following</p> :
           <button onClick={e => this.followUser(e)}>Follow</button>
          }
            <div className='profile-links-collection'>
              <p>Photos</p>
              <p>Galleries</p>
              <p>Groups</p>
              <p>Licensing</p>
              <p>Resources</p>
              <p>Resume</p>
            </div>
          </div>
          <div className='profile-photo-index'>
          {
              userPhotos.map(post => (
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
    }
  };

export default Profile;