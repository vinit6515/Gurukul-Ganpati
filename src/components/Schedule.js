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
            <td>6th September</td>
            <td>Aagman ( 6:30 PM onwards )</td>
          </tr>
          <tr>
            <td>7th September</td>
            <td>Sthapana Ceremony</td>
          </tr>
          <tr>
            <td>8th September</td>
            <td>Drawing Competition , Rangoli Making Competition , Religious Quiz , Aarti Thali Decoration Competition</td>
          </tr>
          <tr>
            <td>9th September</td>
            <td>Origami Competition , Chappan Bhog , Dinner </td>
          </tr>
          <tr>
            <td>10th September</td>
            <td>Coaster Making Workshop & Jewellery Making Workshop ,Antakshri</td>
          </tr>
          <tr>
            <td>11th September</td>
            <td>Visarjan Ceremony ( 6:30 PM Onwards )</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
