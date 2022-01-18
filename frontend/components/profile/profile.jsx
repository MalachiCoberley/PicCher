import React from 'react';
import { Link } from 'react-router-dom';

const Profile = props => (
  <div className="profile-container">
    <div className='profile-header'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Goethe%E2%80%99s_silhouette.jpg' alt={`${props.user.username}'s profile picture`} className="profile-header-profile-picture"></img>
      <h2>{props.user.username}</h2>
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
    {console.log(props)}
  </div>
);

export default Profile;