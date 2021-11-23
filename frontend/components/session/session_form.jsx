import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <br/>
          {this.renderErrors()}
          <span className="session-form-header">{this.props.formType}</span>
            <br/>
            <label>Username:
              <br/>
              <input type="text" value={this.state.username} onChange={this.update('username')}/>
            </label>
            <br/>
            <label>Password:
              <br/>
              <input type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
            <br/>
            <input className="submit-form-button" type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
