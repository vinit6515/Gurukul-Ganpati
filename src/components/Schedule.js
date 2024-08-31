// src/components/Schedule.js
import React from 'react';

const Schedule = () => {
  return (
    <div className="container">
      <h2>Event Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7th September</td>
            <td>Opening Ceremony and Cultural Performances</td>
          </tr>
          <tr>
            <td>8th September</td>
            <td>Art and Rangoli Competition</td>
          </tr>
          <tr>
            <td>9th September</td>
            <td>Dance and Singing Competition</td>
          </tr>
          <tr>
            <td>10th September</td>
            <td>Cooking Competition</td>
          </tr>
          <tr>
            <td>11th September</td>
            <td>Prize Distribution and Closing Ceremony</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
