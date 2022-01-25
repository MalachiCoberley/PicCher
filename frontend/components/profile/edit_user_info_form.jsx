import React from 'react';
import { Link } from 'react-router-dom';

class EditUserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editUser(this.state)
    let editForm = document.getElementById("edit-info-form");
    let editButton = document.getElementById("edit-info-button");
    editButton.classList.remove("hidden")
    editForm.classList.add("hidden")
  }

  handleClick(e) {
    let editForm = document.getElementById("edit-info-form");
    editForm.classList.remove("hidden")
    e.target.classList.add("hidden")
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="edit-user-info-form-container">
        <button onClick={e => this.handleClick(e)} id='edit-info-button'>Edit Profile</button>
        <form className="hidden" id="edit-info-form">
          <p>Email: {this.state.email}</p>
          <label>
            About: 
            <textarea 
              value={this.state.about} 
              placeholder='Tell us about yourself'
              onChange={this.update('about')}
            />
          </label>
          <label>
            City 
            <input 
              type='text'
              value={this.state.city}  
              placeholder='City'
              onChange={this.update('city')}
            />
          </label>
          <label>
            Country 
            <input 
              type='text'
              value={this.state.country} 
              placeholder='Country'
              onChange={this.update('country')}
            />
          </label>
          <button type='submit' onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
};

export default EditUserInfoForm;