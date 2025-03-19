import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./DropDown";
import { FaCertificate, FaFileContract, FaGraduationCap, FaUsers, FaBriefcase, FaSignInAlt, FaSearch, FaTrophy, FaUser, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </span>
      <div className={menuOpen ? "nav-links show" : "nav-links"}>
        <Link to="/certification-verification">
          <FaCertificate /> Certification Verification
        </Link>
        <Link to="/mou">
          <FaFileContract /> MOU
        </Link>
        <Link to="/lms">
          <FaGraduationCap /> LMS
        </Link>
        <Link to="/IQAC">
          <FaUsers /> IQAC
        </Link> 
        
        <Link to="/alumni">
          <FaUsers /> Alumni
        </Link> 

        <Link to="/career">
          <FaBriefcase /> Career
        </Link>
        <Dropdown label="NAD" options={["Option 1", "Option 2", "Option 3"]} icon={<FaUser />} /> {/* NAD dropdown */}
        <Dropdown label="Achievement" options={["Student BiAward", "Staff Award"]} icon={<FaTrophy />} /> {/* Achievement dropdown */}
        <Dropdown label="Login" options={["User Login", "Admin Login"]} icon={<FaUserTie />} /> {/* Login dropdown */}
        <span className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>
          <FaSearch />
        </span>
      </div>
      {searchOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;