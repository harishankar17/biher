import React from "react";


const NADPORTAL = () => {
  // Function to handle the button click
  const handleClick = () => {
    window.location.href = "https://www.digilocker.gov.in/dashboard"; // Redirects to DigiLocker
  };

  return (
    <div className="container">
      <h1>NAD Portal</h1>
      <button className="nad-button" onClick={handleClick}>
        Go to DigiLocker
      </button>
    </div>
  );
};

export default NADPORTAL;
