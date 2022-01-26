import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./posts/post_index_container"

const HomePage = () => (
  <div className="home-container-main">
    <div className="page-header">
    <h1>Home Feed</h1>
    <p>See photos from other PicCher users.</p>
    </div>
    {/* <div className="users-to-follow">This is a container for users that you can follow.</div> */}
    <div className="home-photo-index">
      <PostIndexContainer/>
    </div>
  </div>
);

export default HomePage

