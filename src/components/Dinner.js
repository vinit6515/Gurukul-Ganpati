// src/components/Dinner.js
import React from 'react';

const Dinner = () => {
  return (
    <div className="container">
      <h2>Dinner Details</h2>
      <p>Join us for a delicious community dinner on the following days:</p>
      <ul className="dinner-list">
        <li><strong>8th September:</strong> Traditional Maharashtrian Thali</li>
        <li><strong>9th September:</strong> North Indian Cuisine Night</li>
        <li><strong>10th September:</strong> South Indian Delicacies</li>
        <li><strong>11th September:</strong> Grand Feast with Special Sweets</li>
      </ul>
    </div>
  );
};

export default Dinner;
