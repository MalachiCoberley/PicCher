import React from 'react';
import { Link } from 'react-router-dom';

// -----MALACHIIIIIIII MAKE THIS REEFLECT THAT IT IS ACTUALLY YOUR NAV COMPONENT_-------

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="nav-buttons">
      <Link className="nav-login" to="/login">Log in</Link><br/>
      <Link className="nav-signup" to="/signup">Sign up</Link>
    </div>
  );
  const personalGreeting = () => (
    <div>
      <h4>{currentUser.username}!</h4>
      <button onClick={logout} className="nav-login">Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
