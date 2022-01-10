import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./posts/post_index_container"

const HomePage = () => (
  <div className="home-container-main">
    <h1 className="page-header">Home Feed</h1>
    <p>See photos and published Galleries from people you follow.</p>
    {/* <div className="users-to-follow">This is a container for users that you can follow.</div> */}
    <PostIndexContainer/>
  </div>
);

export default HomePage

