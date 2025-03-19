import React, { useState } from "react";
import "./Form.css"; // Import CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h1>Learning <span className="highlight">Management System</span></h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>School:</label>
        <select name="school" value={formData.school} onChange={handleChange} required>
          <option value="">Select School</option>
          <option value="Engineering">Engineering</option>
          <option value="Management">Management</option>
          <option value="Science">Science</option>
        </select>

        <label>Course:</label>
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
          <option value="B.Sc">B.Sc</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
