import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Staff from "./components/staff/staff";
import Resources from "./components/resources";
import SignUp from "./components/sign-up";
import EventList from "./components/events/event-list";
import logoBasic from "./components/images/mentorseas-logo-basic.png";
import fbLogo from "./components/images/facebook-logo.png";
import igLogo from "./components/images/instagram-logo.png";
import githubLogo from "./components/images/github-logo.png";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <img className="logo-basic" src={logoBasic} />
          <div className="right-links">
            <Link to="/"> ABOUT </Link>
            <Link to="/staff-members"> OUR STAFF </Link>
            <Link to="/events"> EVENTS </Link>
            <Link to="/resources"> RESOURCES </Link>
            <Link to="/sign-up"> SIGN UP </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/staff-members" element={<Staff />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      <nav className="external-links-nav">
          <a className="fb-logo" href="https://www.facebook.com/mentorSEAS" target="_blank">
            <img className="fb-logo-button" src={fbLogo} />
          </a>
          <a className="ig-logo" href="https://www.instagram.com/mentorseas/" target="_blank">
            <img className="ig-logo-button" src={igLogo} />
          </a>
          <a className="gh-logo" href="https://github.com/cassiestephen/mentor-seas" target="_blank">
            <img className="gh-logo-button" src={githubLogo} />
          </a>
        </nav>
    </div>
  );
}

export default App;
