import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="nav-buttons">
      <Link className="nav-login" to="/login">Log in</Link><br/>
      <Link className="nav-signup" to="/signup">Sign up</Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
