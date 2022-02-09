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
            <p>Join the greatest photo-sharing community on the internet. It's </p>
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
              <p>Earn one of the highest royalty rates in the industry when you distribute your photography through PicCher to a global marketplace, where buyers can view and purchase your work for commercial usage.</p>
            </div>
          </div>
        </div>

        <div className='splash-app-section'>
          <div className='splash-app-get'>
            <h1>Get the app</h1>
            <p>Join a community of over 16 million like-minded photographers. Download the PicCher app for Android and iOS today! After you download it, delete it immediately! That was probably a virus. PicCher doesn't have an official app.</p>
            <div className='splash-app-section-buttons'>
              <button>App Store</button>
              <button>Google Play</button>
            </div>
          </div>
        </div>

        <div className="splash-mid-hero">
          <h1>It's Simple</h1>
        </div>

        <div className='splash-simple'>
          <h2>Upload - Feel Good - Repeat</h2>
          <p>Leave behind the days of waiting for others to validate you and your existence. With our patented insta-response algorithms, we generate all of the likes, buzz, and comments that your art needs. Time to stop reading and start doing... Sign up!</p>
          <Link className="splash-header-button" to="/signup">Sign up</Link>
        </div>
        
      </div>
    );
  }
}
4
export default Splash;