import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../Footer';
import { FaHome } from "react-icons/fa";
import './IQAC.css';

const IQAC = () => {
  return (
    <div>
      <img src="assets/iqac.jpg" alt="IQAC" width="100%" height="100%" />
      <div className="header">
        <Link to="/" className="home-link">
          <FaHome className="header-icon" />
        </Link>
        <span className="header-text">BIHER - (IQAC)</span>
      </div> 
      <div>
        <img src="assets/transparent-back-2.png" alt="IQAC" width="100%" height="100%" />
      </div>
      <Footer />
    </div>
  );
};

export default IQAC;