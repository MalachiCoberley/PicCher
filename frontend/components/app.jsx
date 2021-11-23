import React from "react";
import { Routes, Route} from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_ container";
import Splash from "./splash/splash";

const App = () => (
  <div> 
    <nav className="main-nav">
    <h1>PicCher</h1>
    <GreetingContainer/>
    </nav>
    <Routes>
      <Route path="/login" element={<LoginFormContainer/>} />
      <Route path="/signup" element={<SignupFormContainer/>} />
      <Route path="/" element={<Splash/>} />
    </Routes>
  </div>
);

export default App;