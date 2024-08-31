// src/components/Home.js
import React from 'react';
import ganapatiImage from '../assets/ganapati.jpg'; // Ensure you have an image in the assets folder

const Home = () => {
  return (
    <div className="container">
      <img src={ganapatiImage}  alt="Ganapati Festival" className="banner-image" />
      <h2>Welcome to the Ganapati Festival 2024</h2>
      <p>
        Join us in celebrating the auspicious Ganapati Festival in our society premises from 7th to 11th September 2024.
      </p>
      <p>
        Experience the joy, cultural events, competitions, and delicious dinners with your loved ones. Stay tuned for the detailed schedule of events!
      </p>
    </div>
  );
};

export default Home;
