import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavContainer from "./nav/nav_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_ container";
import CreatePostFormContainer from "../components/posts/create_post_form_container"
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home"

const App = () => (
  <div> 
    <nav className="main-nav">
      <div className="left-nav">
        <Link to="/"><h1>PicCher</h1></Link>
        <p>Discover</p>
        <p>Licensing</p>
        <p>Resources</p>
        <p>Memberships</p>
        <p>Quests</p>
     </div>
    <NavContainer/>
    </nav>
    <Switch>
      <ProtectedRoute path="/post/new" component={CreatePostFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/welcome" component={Splash} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;