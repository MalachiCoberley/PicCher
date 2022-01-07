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

        <div className='splash-different-section'>
          <h2>What makes us different</h2>
          <div className='splash-selling-point-container'>
            <div className='splash-selling-point'>
              <h1>♥</h1>
              <h3>Grow as as PhotoGopher</h3>
              <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
            </div>
            <div className='splash-selling-point'>
              <h1>☻</h1>
              <h3>Build your career</h3>
              <p>Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered in Search results, showcase your articles, presents, videos, and more with Resources, and create a Portfolio website to showcase your work.</p>
            </div>
            <div className='splash-selling-point'>
              <h1>☺</h1>
              <h3>See how you're performing</h3>
              <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
            </div>
            <div className='splash-selling-point'>
              <h1>♣</h1>
              <h3>Sell your work</h3>
              <p>Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Splash;