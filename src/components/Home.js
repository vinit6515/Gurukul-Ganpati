// src/components/Home.js
import React from 'react';
import ganapatiImage from '../assets/ganapati.jpeg'; // Ensure you have an image in the assets folder

const Home = () => {
  return (
    <div className="container">
      <img src={ganapatiImage}  alt="Ganapati Festival" className="banner-image" />
      <h2>Welcome to the Ganapati Festival 2024</h2>
      <p>
      Gurukul Ganapati Festival <br></br>
Celebrating Ganesh Utsav with Unity and Devotion!<br></br>

Welcome to the official page of the Gurukul Ganapati Festival,<br></br> a vibrant celebration brought to you by the Gurukul Youth Committee! Each year, we come together as a community to honor Lord Ganesha with enthusiasm, devotion, and a host of exciting events.<br></br>
Join us for a 5-day grand celebration filled with music, dance, cultural performances, workshops, competitions, and more. It’s a time to connect, rejoice, and make beautiful memories with our Gurukul family.<br></br>

Stay tuned for event schedules, updates, and glimpses of the festivities!<br></br>

Ganpati Bappa Morya!<br></br>
Organized by the Gurukul Youth Committee
      </p>
      <p>
        Experience the joy, cultural events, competitions, and delicious dinners with your loved ones. Stay tuned for the detailed schedule of events!
      </p>
    </div>
  );
};

export default Home;
