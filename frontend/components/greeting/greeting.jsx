import React from 'react';
import { Link } from 'react-router-dom';

// -----MALACHIIIIIIII MAKE THIS REEFLECT THAT IT IS ACTUALLY YOUR NAV COMPONENT_-------

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="nav-buttons">
      <div className="search-bar">
      🔍
      <input type="text" placeholder="cosmetic search bar"/>
      </div>
      <Link className="nav-login" to="/login">Log in</Link><br/>
      <Link className="nav-signup" to="/signup">Sign up</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="nav-buttons">
      <div className="search-bar">
      🔍
      <input type="text" placeholder="cosmetic search bar"/>
      </div>
      <h4>{currentUser.username}</h4>
      <Link to="#" onClick={logout} className="nav-login">Log Out</Link>
      <Link to="/post/new" className="nav-signup">{`\u21d1`} Upload</Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
