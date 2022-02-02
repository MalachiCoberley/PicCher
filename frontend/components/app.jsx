import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavContainer from "./nav/nav_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_ container";
import CreatePostFormContainer from "../components/posts/create_post_form_container";
import ShowPostContainer from "../components/posts/show_post_container";
import EditPostFormContainer from "../components/posts/edit_post_form_container";
import ProfileContainer from "./profile/profile_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from "./home"
import SearchResultsContainer from "../components/search/search_results_container"

const App = () => (
  <div> 
    <NavContainer/>
    <Switch>
      <ProtectedRoute exact path="/post/new" component={CreatePostFormContainer} />
      <ProtectedRoute exact path="/post/edit/:postId" component={EditPostFormContainer} />
      <ProtectedRoute exact path="/user/:userId" component={ProfileContainer} />
      <ProtectedRoute exact path="/post/:postId" component={ShowPostContainer} />
      <ProtectedRoute exact path="/search/:searchQuery" component={SearchResultsContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/welcome" component={Splash} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;