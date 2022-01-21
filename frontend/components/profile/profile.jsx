import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../posts/post_index_item';
import EditUserInfoForm from './edit_user_info_form';

class Profile extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }

  }

  componentDidMount() {
    this.props.fetchPosts()
    this.props.getUser(this.props.match.params.userId).then(() => this.setState({loading: false}))

  }

  showEditForm(currentUser) {
    <EditUserInfoForm user={this.props.entities.user} editUser={this.props.editUser}/>
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return <div> Loading </div>
    } else {
      let allPhotos = Object.values(this.props.entities.posts)
      let userPhotos = allPhotos.filter(photo => photo.author_id === this.props.entities.user.id)
      let currentUser = this.props.session.id == this.props.match.params.userId
      
      return (
        <div className="profile-container">
          <div className='profile-header'>
            <img src='https://pacdn.500px.org/userpic.png'/>
            <div className='profile-total-stats'>
              <p>COUNT OF FOLLOWERS</p>
              <p>{Math.floor(Math.random() * 1000)} Photo Likes</p>
              <p>{Math.floor(Math.random() * 10000)} Photo Impressions</p>
            </div>
            <div className='profile-links-collection'>
              <p>Photos</p>
              <p>Galleries</p>
              <p>Groups</p>
              <p>Licensing</p>
              <p>Resources</p>
              <p>Resume</p>
            </div>
          </div>
          <div className=''>
    
          </div>
          { currentUser ? <button>Edit Profile</button> : <button>Follow</button>}
    
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