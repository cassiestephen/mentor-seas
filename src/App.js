import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Staff from "./components/staff/staff";
import Resources from "./components/resources";
import SignUp from "./components/sign-up";
import EventList from "./components/events/event-list";
import logoBasic from "./components/images/mentorseas-logo-basic.png";

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
    </div>
  );
}

export default App;
