import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-page-main">
        <div className="splash-header-hero">
          <div className="splash-header-signup">
            <h1>Discover and Cher the world's best photos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link className="splash-header-button" to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;