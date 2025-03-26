import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SecondaryNavbar from "./Components/SecondaryNavbar";
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
import Button from "./Components/ui/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import lmsForm from "./Components/Pages/Form";
import Admission from "./Components/Pages/Admission";
import Admissioncontent from "./Components/Pages/Admissioncontent";
import AdmissionPage from "./Components/Pages/AdmissionPage";

function App() {
  return (
    <> 
      <SecondaryNavbar />
      <Navbar />
      <Marquee />
      
      <Routes>
        <Route path="/certificate-verification" element={<CertificationVerification />} />
        <Route path="/mou" element={<MOU />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/Goverence" element={<Goverence />} />
        <Route path="/form" element={<lmsForm />} />
        <Route path="/admission" element={<Admission />} /> 
      </Routes>
    </>
  );
}

export default App;