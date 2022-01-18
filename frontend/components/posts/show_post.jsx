import React from 'react';
import { Link } from 'react-router-dom';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className='show-post-container'>
        <div className='show-photo-display-container'>
          <img src={this.state.photoUrl} className="show-photo-picture"/>
        </div>
        <div className='show-photo-details'>
          <div className='edit-delete-buttons'>
            <Link to={`/post/edit/${this.state.id}`}>Edit Post</Link>
            <button onClick={() => this.props.deletePost(this.state.id)}>Delete Photo</button>
          </div>
          <div className='show-author-information'>
            <div className='show-author-picture'>A</div>
            <div className='show-title-follow'>
              <h3>{this.state.title}</h3>
              <div className='show-author-name-follow'>
              <p>by {this.state.author_id} • </p><button>Follow</button>
              </div>
            </div>
          </div>
            <p>Photographed on {this.state.date_taken}</p>
        </div>
      </div>
    );
  }
}

export default ShowPost;
