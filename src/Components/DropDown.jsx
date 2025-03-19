import React, { useState } from "react";
import "./Dropdown.css";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ label = "Achievement", options = ["Staff Award", "Student Award"], icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a href="#" className="dropdown-label">
        {icon} {label} <FaCaretDown />
      </a>
      {open && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <a key={index} href="#">{option}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;