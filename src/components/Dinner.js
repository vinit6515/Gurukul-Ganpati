// src/components/Dinner.js
import React from 'react';

const Dinner = () => {
  const menu = {
    mainCourse: ['Pav Bhaji ( Jain & Non-Jain Option Available)'],
    dessert: ['Kulfi']
  };

  const contactDetails = {
    name: 'Vinay Jogi',
    phone: '+91 9833705011',
    email: 'rajesh.kulkarni@example.com'
  };

  return (
    <div className="container">
      <h2>Dinner Details</h2>
      <p>Join us for a delicious community dinner on <strong>9th September 2024</strong> at <strong>8 PM onwards</strong>!</p>
      
      <h3>Menu</h3>
      <div className="menu-section">
        <h4>Main Course</h4>
        <ul>
          {menu.mainCourse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Dessert</h4>
        <ul>
          {menu.dessert.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h3>Contact for Passes</h3>
      <div className="contact-section">
        <p>To collect the dinner passes, please contact:</p>
        <p><strong>Name:</strong> {contactDetails.name} </p>
        <p><strong>Phone:</strong> {contactDetails.phone}</p>
        <p><strong>Flat No:</strong> B-502</p>
      </div>
    </div>
  );
};

export default Dinner;
