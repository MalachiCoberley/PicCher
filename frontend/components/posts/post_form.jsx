import React from 'react';
import { useHistory } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[location]', this.state.location);
    formData.append('post[date_taken]', this.state.dateTaken);
    formData.append('post[photo]', this.state.photoFile);
    formData.append('post[author_id]', this.props.session.session.id);
    $.ajax({
      url: '/api/post',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(window.location.reload());
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  submissionComplete() {
     const history = useHistory();
     history.push('/');
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h2 className="page-header">Upload</h2>
        <form onSubmit={this.handleSubmit} className="upload-form">
          <div className="photo-upload">
          <input type="file" onChange={this.handleFile.bind(this)}/>
          <div className="photo-preview-container">
          {this.state.photoUrl ? <img className="photo-preview" src={this.state.photoUrl}/> : null}
          </div>
          </div>
          <div className="photo-details-pane">
            <label>
              Title <br/>
              <input
                type='text'
                value={this.state.title}
                className="photo-form-input"
                onChange={this.update('title')}
              />
            </label>
            <label>
              Description <br/>
              <textarea
                value={this.state.description}
                className="photo-form-input"
                onChange={this.update('description')}
              />
            </label>
            <label>
              Location <br/>
              <input
                type='text'
                value={this.state.location}
                className="photo-form-input"
                onChange={this.update('location')}
              />
            </label>
            <label>
              Date Taken <br/>
              <input
                type='date'
                value={this.state.dateTaken}
                className="photo-form-input"
                onChange={this.update('dateTaken')}
              />
            </label>
          <button type='submit' value={this.props.formType} className="photo-form-button">Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
