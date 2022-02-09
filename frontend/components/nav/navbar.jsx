import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search/search_bar';

const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="main-nav">
    <div className="left-nav">
      <Link to="/"><h1>PicCher</h1></Link>
      <a className='external-nav-link' href="https://github.com/MalachiCoberley" target="_blank">Github</a>
      <a className='external-nav-link' href="https://www.linkedin.com/in/malachi-coberley/" target="_blank">Linkedin</a>
      <a className='external-nav-link' href="http://malachicoberley.com/" target="_blank">Portfolio</a>
   </div>
    <div className="nav-buttons">
      <Link className="nav-login" to="/login">Log in</Link><br/>
      <Link className="nav-signup" to="/signup">Sign up</Link>
    </div>
  </nav>
  );
  const personalGreeting = () => (
    <nav className="main-nav">
    <div className="left-nav">
      <Link to="/"><h1>PicCher</h1></Link>
      <a className='external-nav-link' href="https://github.com/MalachiCoberley" target="_blank">Github</a>
      <a className='external-nav-link' href="https://www.linkedin.com/in/malachi-coberley/" target="_blank">Linkedin</a>
      <a className='external-nav-link' href="http://malachicoberley.com/" target="_blank">Portfolio</a>
    </div>
    <div className="nav-buttons">
      <SearchBar/>
      <div className='nav-profile-dropdown'>
        <img src="https://pacdn.500px.org/userpic.png"/>
      <div className='nav-profile-dropdown-list'>
        <Link to={`/user/${currentUser.id}`}>Profile</Link>
        <Link to="#" onClick={logout}>Log Out</Link>
      </div>
    </div>
      <Link to="/post/new" className="nav-upload">{`\u21d1`} Upload</Link>
   </div>
  </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
