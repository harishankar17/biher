import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SecondaryNavbar from "./Components/SecondaryNavbar";
import FixedImage from "./Components/FixedImage";
import CertificationVerification from "./Components/ui/CertificationVerification";
import MOU from "./Components/Pages/MOU";
import LMS from "./Components/Pages/LMS";
import IQAC from "./Components/Pages/IQAC";
import Alumni from "./Components/Pages/Alumni";
import Career from "./Components/Pages/Career";
import Overview from "./Components/Pages/Overview";
import Leadership from "./Components/Pages/Leadership";
import Goverence from "./Components/Pages/Goverence";
import Marquee from "./Components/Marquee";
import  Button from "./Components/ui/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Form from "./Components/Pages/Form";


function App() {
  return (
    <> 
      <SecondaryNavbar />
      <Navbar />
      <Marquee />
      
      <Routes>
        <Route path="/" element={<CertificationVerification />} />
        <Route path="/mou" element={<MOU />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/Goverence" element={<Goverence />} />
      </Routes>
    </>
  );
}

export default App;