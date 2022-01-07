import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="nav-buttons">
      <div className="search-bar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7988 22.8019L17.7631 16.7676C21.3423 12.6521 21.0179 6.44079 17.0293 2.72056C13.0408 -0.999677 6.82197 -0.891481 2.96524 2.96524C-0.891481 6.82197 -0.999677 13.0408 2.72056 17.0293C6.44079 21.0179 12.6521 21.3423 16.7676 17.7631L22.8048 23.7958C23.0815 24.0633 23.5214 24.0596 23.7935 23.7875C24.0656 23.5154 24.0693 23.0755 23.8018 22.7989L23.7988 22.8019ZM4.00302 16.2901C1.0706 13.3584 0.617507 8.76356 2.92084 5.31562C5.22417 1.86769 9.64239 0.527015 13.4734 2.11354C17.3044 3.70007 19.4811 7.77191 18.6724 11.8388C17.8636 15.9057 14.2946 18.8349 10.148 18.8349C7.84206 18.8412 5.62936 17.9249 4.00302 16.2901Z" fill="#222222"></path>
        </svg>
      <input type="text" placeholder="cosmetic search bar"/>
      </div>
      <Link className="nav-login" to="/login">Log in</Link><br/>
      <Link className="nav-signup" to="/signup">Sign up</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="nav-buttons">
      <div className="search-bar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7988 22.8019L17.7631 16.7676C21.3423 12.6521 21.0179 6.44079 17.0293 2.72056C13.0408 -0.999677 6.82197 -0.891481 2.96524 2.96524C-0.891481 6.82197 -0.999677 13.0408 2.72056 17.0293C6.44079 21.0179 12.6521 21.3423 16.7676 17.7631L22.8048 23.7958C23.0815 24.0633 23.5214 24.0596 23.7935 23.7875C24.0656 23.5154 24.0693 23.0755 23.8018 22.7989L23.7988 22.8019ZM4.00302 16.2901C1.0706 13.3584 0.617507 8.76356 2.92084 5.31562C5.22417 1.86769 9.64239 0.527015 13.4734 2.11354C17.3044 3.70007 19.4811 7.77191 18.6724 11.8388C17.8636 15.9057 14.2946 18.8349 10.148 18.8349C7.84206 18.8412 5.62936 17.9249 4.00302 16.2901Z" fill="#222222"></path>
        </svg>
      <input type="text" placeholder="cosmetic search bar"/>
      </div>
      <h4>{currentUser.username}</h4>
      <Link to="#" onClick={logout} className="nav-login">Log Out</Link>
      <Link to="/post/new" className="nav-signup">{`\u21d1`} Upload</Link>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
