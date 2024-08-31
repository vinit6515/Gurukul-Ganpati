// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Ganapati Festival 2024</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/dinner">Dinner</Link>
      </nav>
    </header>
  );
};

export default Header;
