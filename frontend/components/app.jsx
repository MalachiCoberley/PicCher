import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_ container";
import CreatePostFormContainer from "../components/posts/create_post_form_container"
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home"

const App = () => (
  <div> 
    <nav className="main-nav">
    <Link to="/"><h1>PicCher</h1></Link>
    <GreetingContainer/>
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