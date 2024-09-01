// src/components/Dinner.js
import React from 'react';

const Dinner = () => {
  const menu = {
    starters: ['Pani Puri', 'Sabudana Vada', 'Batata Vada'],
    mainCourses: ['Puran Poli', 'Masala Bhaat', 'Amti (Maharashtrian Dal)', 'Bhakri with Zunka'],
    desserts: ['Modak', 'Shrikhand', 'Jalebi'],
    beverages: ['Masala Chai', 'Aam Panna', 'Lassi']
  };

  const contactDetails = {
    name: 'Vinay Jogi',
    phone: '+91 9833705011',
    email: 'rajesh.kulkarni@example.com'
  };

  return (
    <div className="container">
      <h2>Dinner Details</h2>
      <p>Join us for a delicious community dinner on <strong>9th September 2024</strong>!</p>
      
      <h3>Menu</h3>
      <div className="menu-section">
        <h4>Starters</h4>
        <ul>
          {menu.starters.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Main Courses</h4>
        <ul>
          {menu.mainCourses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Desserts</h4>
        <ul>
          {menu.desserts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Beverages</h4>
        <ul>
          {menu.beverages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h3>Contact for Passes</h3>
      <div className="contact-section">
        <p>To collect the dinner passes, please contact:</p>
        <p><strong>Name:</strong> {contactDetails.name}</p>
        <p><strong>Phone:</strong> {contactDetails.phone}</p>
        <p><strong>Flat No:</strong> B-502</p>
      </div>
    </div>
  );
};

export default Dinner;
