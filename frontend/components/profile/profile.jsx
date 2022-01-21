import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from '../posts/post_index_item';
import EditUserInfoForm from './edit_user_info_form';

class Profile extends React.Component  {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
      let allPhotos = Object.values(this.props.entities.posts)
      let userPhotos = allPhotos.filter(photo => photo.author_id === this.state.entities.user.id)
      let currentUser = this.props.session.id == this.props.match.params.userId

    return (
      <div className="profile-container">
        <div className='profile-header'>
          <img src='https://pacdn.500px.org/userpic.png'/>
          <div className='profile-total-stats'>
            <p>COUNT OF FOLLOWERS</p>
            <p>84 Photo Likes</p>
            <p>382 Photo Impressions</p>
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
        { currentUser ? <EditUserInfoForm user={this.state.entities.user} editUser={this.props.editUser}/> : <></>}
        {console.log(this.props)}
        {console.log(this.state)}

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
};

export default Profile;