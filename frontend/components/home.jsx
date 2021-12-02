import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h2>Home Feed</h2>
    <p>See photos and published Galleries from people you follow.</p>
    <div>This is a container for users that you can follow.</div>
    <div>This is the picture index</div>
    <Link to="/post/new">Upload a new Picture</Link>
  </div>
);

export default HomePage

