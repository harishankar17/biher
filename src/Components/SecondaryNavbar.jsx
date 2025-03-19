import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryNavbar.css";
import logo from "../assets/logo.png"; // Adjust the path to your logo image
import { FaHome, FaInfoCircle, FaUserGraduate, FaBook, FaFlask, FaGlobe, FaUniversity } from "react-icons/fa";

const SecondaryNavbar = () => {
  return (
    <nav className="secondary-navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="secondary-nav-links">
        <Link to="/">
          <FaHome /> Home
        </Link>
        <div className="dropdown">
          <Link to="/about" className="dropdown-label">
            <FaInfoCircle /> About Biher
          </Link>
          <div className="dropdown-content">
            <Link to="/about/overview">Overview</Link>
            <Link to="/about/leadership">Leadership Team</Link>
            <Link to="/about/Goverence">Goverence</Link>
            
        
          </div>
        </div>
        <Link to="/admission">
          <FaUserGraduate /> Admission
        </Link>
        <div className="dropdown">
          <Link to="/academics" className="dropdown-label">
            <FaBook /> Academics
          </Link>
          <div className="dropdown-content">
            <Link to="/academics/programs">Programs</Link>
            <Link to="/academics/departments">Departments</Link>
            <Link to="/academics/calendar">Academic Calendar</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/research" className="dropdown-label">
            <FaFlask /> Research
          </Link>
          <div className="dropdown-content">
            <Link to="/research/projects">Projects</Link>
            <Link to="/research/publications">Publications</Link>
            <Link to="/research/labs">Labs</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/international" className="dropdown-label">
            <FaGlobe /> International
          </Link>
          <div className="dropdown-content">
            <Link to="/international/partnerships">Partnerships</Link>
            <Link to="/international/exchange">Exchange Programs</Link>
            <Link to="/international/students">International Students</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/campuslife" className="dropdown-label">
            <FaUniversity /> Campus Life
          </Link>
          <div className="dropdown-content">
            <Link to="/campuslife/events">Events</Link>
            <Link to="/campuslife/clubs">Clubs</Link>
            <Link to="/campuslife/facilities">Facilities</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;