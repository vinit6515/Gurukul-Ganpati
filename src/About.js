import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Our Society's Ganpati Festival at "Sai Krupa Society"</h2>
      <p>Our society's Ganpati festival is a grand celebration that brings together all the residents of our society. This year, we have a lot of exciting competitions and quizzes lined up for you!</p>
      <h3>Competitions</h3>
      <div className="competition-grid">
        <div className="competition-item">
          <img src="rangoli.jpg" alt="Rangoli Competition" />
          <h4>Rangoli Competition</h4>
        </div>
        <div className="competition-item">
          <img src="cooking.jpg" alt="Cooking Competition" />
          <h4>Cooking Competition</h4>
        </div>
        <div className="competition-item">
          <img src="singing.jpg" alt="Singing Competition" />
          <h4>Singing Competition</h4>
        </div>
        <div className="competition-item">
          <img src="dance.jpg" alt="Dance Competition" />
          <h4>Dance Competition</h4>
        </div>
        <div className="competition-item">
          <img src="drawing.jpg" alt="Drawing Competition" />
          <h4>Drawing Competition</h4>
        </div>
        <div className="competition-item">
          <img src="photography.jpg" alt="Photography Competition" />
          <h4>Photography Competition</h4>
        </div>
      </div>
      <h3>Quizzes</h3>
      <ul>
        <li>General knowledge quiz</li>
        <li>Movie quiz</li>
        <li>Sports quiz</li>
      </ul>
    </section>
  );
}

export default About;