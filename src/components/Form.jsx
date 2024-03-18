import React, { useState } from "react";
import axios from "axios";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    lname:"",
    checkup: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(
        "http://localhost:5001/appointment",
        { ...formData },
    
      );

      
    } catch (error) {
      console.log(error);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form__book">
      <h2>Book an appointment</h2>
      <p>Please fill out the form below to make an appointment</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="last name">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          required
        />

        <label htmlFor="checkup">Checkup:</label>
        <input
          type="text"
          id="checkup"
          name="checkup"
          value={formData.checkup}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Preferred Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Preferred Time:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AppointmentForm;
