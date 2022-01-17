import React from 'react';

class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  render() {
    console.log(this.state)
    console.log(this.state)
    return (
      <div className='show-post-container'>
        <div className='show-photo-display-container'>
          <img src={this.state.photoUrl} className="show-photo-picture"/>
        </div>
        <div className='show-photo-details'>
          <div className='edit-delete-buttons'>
            <button>Edit Photo</button>
            <button>Delete Photo</button>
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
