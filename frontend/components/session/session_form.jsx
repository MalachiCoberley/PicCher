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
    this.demoUser = {
      username: 'CherDemo',
      password: 'abc123'
    }
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
        {console.log(this.props.errors)}
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
            {
              this.props.formType === "Sign Up" &&
              <label>Email:
              <br/>
              <input type="text" value={this.state.email} onChange={this.update('email')}/>
              </label>
              }
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
            <br/>
            <input className="submit-form-button" type="submit" value={this.props.formType} />
            <button className="demo-form-button" onClick={(e) => {e.preventDefault(); this.props.loginDemo(this.demoUser)}} >Demo Account</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
