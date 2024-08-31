// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Competitions from './components/Competitions';
import Dinner from './components/Dinner';
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1> Gurukul's Ganapati Festival 2024</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/dinner">Dinner</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </main>
      <footer>
        <p>© 2024 Ganapati Festival. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
